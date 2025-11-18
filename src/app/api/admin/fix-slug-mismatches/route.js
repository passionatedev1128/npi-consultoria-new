import { connectToDatabase } from "@/app/lib/mongodb";
import Imovel from "@/app/models/Imovel";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

/**
 * FIX API for slug mismatches
 * Automatically updates database slugs to include category suffix where missing
 * 
 * Usage: POST /api/admin/fix-slug-mismatches
 * 
 * WARNING: This will UPDATE database slugs. Make sure you want to proceed.
 */
export async function POST(request) {
  try {
    await connectToDatabase();

    console.log("[FIX-SLUG-MISMATCHES] Iniciando correção automática de slugs com mismatch...");

    // Category slug mappings (from url-slugs.js)
    const categoriaSlugMap = {
      'Cobertura': 'cobertura',
      'Apartamento': 'apartamento',
      'Casa': 'casa',
      'Casa Comercial': 'casa-comercial',
      'Casa em Condominio': 'casa-em-condominio',
      'Flat': 'flat',
      'Garden': 'garden',
      'Loft': 'loft',
      'Loja': 'loja',
      'Prédio Comercial': 'predio-comercial',
      'Sala Comercial': 'sala-comercial',
      'Sobrado': 'sobrado',
      'Terreno': 'terreno'
    };

    // Helper function to generate expected slug from Empreendimento
    function generateExpectedSlug(empreendimento) {
      if (!empreendimento) return null;
      
      return empreendimento
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .trim()
        .replace(/\s+/g, '-') // Spaces to hyphens
        .replace(/-+/g, '-') // Multiple hyphens to single
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
    }

    // Helper to normalize slug for comparison
    function normalizeSlug(slug) {
      if (!slug) return '';
      return slug
        .toLowerCase()
        .trim()
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    }

    // Find properties with potential mismatches
    const allProperties = await Imovel.find({
      Slug: { $exists: true, $ne: null, $ne: '' },
      Empreendimento: { $exists: true, $ne: null, $ne: '' },
      Categoria: { $exists: true, $ne: null, $ne: '' }
    }, {
      Codigo: 1,
      Slug: 1,
      Empreendimento: 1,
      Categoria: 1,
      BairroComercial: 1,
      Cidade: 1
    })
    .lean()
    .limit(10000); // Safety limit

    console.log(`[FIX-SLUG-MISMATCHES] Analisando ${allProperties.length} propriedades...`);

    const fixes = [];
    let fixedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (const property of allProperties) {
      try {
        const currentSlug = normalizeSlug(property.Slug);
        const expectedSlug = generateExpectedSlug(property.Empreendimento);
        
        if (!expectedSlug || !currentSlug) {
          skippedCount++;
          continue;
        }

        // Check if this property needs fixing
        let needsFix = false;
        let newSlug = currentSlug;

        // Fix 1: Properties with "Cobertura" category but slug doesn't contain "cobertura"
        if (property.Categoria && 
            property.Categoria.toLowerCase().includes('cobertura') &&
            !currentSlug.includes('cobertura')) {
          
          const expectedSlugWithCategory = `${expectedSlug}-cobertura`;
          needsFix = true;
          newSlug = expectedSlugWithCategory;
        }
        // Fix 2: Other category mismatches
        else if (property.Categoria && categoriaSlugMap[property.Categoria]) {
          const expectedCategorySlug = categoriaSlugMap[property.Categoria];
          const empreendimentoLower = property.Empreendimento.toLowerCase();
          const categoriaLower = property.Categoria.toLowerCase();
          
          // If Empreendimento contains category word but slug doesn't
          if ((empreendimentoLower.includes(categoriaLower) || 
               empreendimentoLower.includes(expectedCategorySlug)) &&
              !currentSlug.includes(expectedCategorySlug) &&
              expectedSlug.length > currentSlug.length) {
            
            const expectedSlugWithCategory = `${expectedSlug}-${expectedCategorySlug}`;
            needsFix = true;
            newSlug = expectedSlugWithCategory;
          }
        }

        // Apply fix if needed
        if (needsFix && newSlug !== currentSlug) {
          // Check if new slug already exists for another property
          const existingProperty = await Imovel.findOne({
            Slug: newSlug,
            Codigo: { $ne: property.Codigo }
          });

          if (existingProperty) {
            console.log(`[FIX-SLUG-MISMATCHES] Skipping ${property.Codigo}: slug "${newSlug}" already exists for property ${existingProperty.Codigo}`);
            skippedCount++;
            continue;
          }

          // Update the slug in database
          await Imovel.updateOne(
            { Codigo: property.Codigo },
            { $set: { Slug: newSlug } }
          );

          fixes.push({
            codigo: property.Codigo,
            oldSlug: property.Slug,
            newSlug: newSlug,
            empreendimento: property.Empreendimento,
            categoria: property.Categoria,
            oldUrl: `https://www.npiconsultoria.com.br/imovel-${property.Codigo}/${property.Slug}`,
            newUrl: `https://www.npiconsultoria.com.br/imovel-${property.Codigo}/${newSlug}`
          });

          fixedCount++;
          console.log(`[FIX-SLUG-MISMATCHES] Fixed ${property.Codigo}: "${property.Slug}" → "${newSlug}"`);
        } else {
          skippedCount++;
        }
      } catch (error) {
        errorCount++;
        console.error(`[FIX-SLUG-MISMATCHES] Error fixing property ${property.Codigo}:`, error);
      }
    }

    console.log(`[FIX-SLUG-MISMATCHES] Correção concluída!`);
    console.log(`  - Fixed: ${fixedCount}`);
    console.log(`  - Skipped: ${skippedCount}`);
    console.log(`  - Errors: ${errorCount}`);

    return NextResponse.json({
      status: 200,
      message: `Correção concluída! ${fixedCount} slugs corrigidos.`,
      summary: {
        totalAnalyzed: allProperties.length,
        fixed: fixedCount,
        skipped: skippedCount,
        errors: errorCount
      },
      fixes: fixes,
      fixDate: new Date().toISOString()
    });

  } catch (error) {
    console.error("[FIX-SLUG-MISMATCHES] Erro ao corrigir mismatches:", error);
    return NextResponse.json(
      {
        status: 500,
        message: "Erro ao corrigir mismatches de slug",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint - Preview what would be fixed (dry-run)
 */
export async function GET(request) {
  try {
    await connectToDatabase();

    console.log("[FIX-SLUG-MISMATCHES] Dry-run: Previewing what would be fixed...");

    // Same logic as POST but without actual updates
    const categoriaSlugMap = {
      'Cobertura': 'cobertura',
      'Apartamento': 'apartamento',
      'Casa': 'casa',
      'Casa Comercial': 'casa-comercial',
      'Casa em Condominio': 'casa-em-condominio',
      'Flat': 'flat',
      'Garden': 'garden',
      'Loft': 'loft',
      'Loja': 'loja',
      'Prédio Comercial': 'predio-comercial',
      'Sala Comercial': 'sala-comercial',
      'Sobrado': 'sobrado',
      'Terreno': 'terreno'
    };

    function generateExpectedSlug(empreendimento) {
      if (!empreendimento) return null;
      return empreendimento
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    }

    function normalizeSlug(slug) {
      if (!slug) return '';
      return slug.toLowerCase().trim().replace(/-+/g, '-').replace(/^-|-$/g, '');
    }

    const allProperties = await Imovel.find({
      Slug: { $exists: true, $ne: null, $ne: '' },
      Empreendimento: { $exists: true, $ne: null, $ne: '' },
      Categoria: { $exists: true, $ne: null, $ne: '' }
    }, {
      Codigo: 1,
      Slug: 1,
      Empreendimento: 1,
      Categoria: 1
    })
    .lean()
    .limit(10000);

    const preview = [];

    for (const property of allProperties) {
      const currentSlug = normalizeSlug(property.Slug);
      const expectedSlug = generateExpectedSlug(property.Empreendimento);
      
      if (!expectedSlug || !currentSlug) continue;

      let wouldFix = false;
      let newSlug = currentSlug;

      if (property.Categoria && 
          property.Categoria.toLowerCase().includes('cobertura') &&
          !currentSlug.includes('cobertura')) {
        newSlug = `${expectedSlug}-cobertura`;
        wouldFix = true;
      } else if (property.Categoria && categoriaSlugMap[property.Categoria]) {
        const expectedCategorySlug = categoriaSlugMap[property.Categoria];
        const empreendimentoLower = property.Empreendimento.toLowerCase();
        const categoriaLower = property.Categoria.toLowerCase();
        
        if ((empreendimentoLower.includes(categoriaLower) || 
             empreendimentoLower.includes(expectedCategorySlug)) &&
            !currentSlug.includes(expectedCategorySlug) &&
            expectedSlug.length > currentSlug.length) {
          newSlug = `${expectedSlug}-${expectedCategorySlug}`;
          wouldFix = true;
        }
      }

      if (wouldFix && newSlug !== currentSlug) {
        preview.push({
          codigo: property.Codigo,
          oldSlug: property.Slug,
          newSlug: newSlug,
          empreendimento: property.Empreendimento,
          categoria: property.Categoria
        });
      }
    }

    return NextResponse.json({
      status: 200,
      message: `Dry-run: ${preview.length} slugs would be fixed`,
      note: "This is a preview. Use POST to actually apply fixes.",
      summary: {
        wouldFix: preview.length,
        totalAnalyzed: allProperties.length
      },
      preview: preview
    });

  } catch (error) {
    console.error("[FIX-SLUG-MISMATCHES] Erro no dry-run:", error);
    return NextResponse.json(
      {
        status: 500,
        message: "Erro no dry-run",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}

