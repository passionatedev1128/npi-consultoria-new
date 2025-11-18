import { connectToDatabase } from "@/app/lib/mongodb";
import Imovel from "@/app/models/Imovel";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

/**
 * Detection API for slug mismatches
 * Detects properties where slug is shorter than expected based on Empreendimento and Categoria
 * 
 * Usage: GET /api/admin/detect-slug-mismatches
 */
export async function GET(request) {
  try {
    // SAFETY: Optional authentication check (uncomment if needed)
    // const authHeader = request.headers.get('authorization');
    // if (authHeader !== `Bearer ${process.env.ADMIN_API_SECRET}`) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    await connectToDatabase();

    console.log("[DETECT-SLUG-MISMATCHES] Iniciando detecção de slugs com possível mismatch...");

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

    // Find all properties with valid slugs and category
    // SAFETY: Using lean() for better performance, only selecting needed fields
    // SAFETY: This query is read-only and doesn't modify any data
    const allProperties = await Imovel.find({
      Slug: { $exists: true, $ne: null, $ne: '' },
      Empreendimento: { $exists: true, $ne: null, $ne: '' }
    }, {
      Codigo: 1,
      Slug: 1,
      Empreendimento: 1,
      Categoria: 1,
      BairroComercial: 1,
      Cidade: 1
    })
    .lean() // Better performance, read-only
    .limit(10000); // SAFETY: Limit to prevent excessive database load

    console.log(`[DETECT-SLUG-MISMATCHES] Analisando ${allProperties.length} propriedades...`);

    const mismatches = [];

    for (const property of allProperties) {
      const currentSlug = normalizeSlug(property.Slug);
      const expectedSlug = generateExpectedSlug(property.Empreendimento);
      
      if (!expectedSlug || !currentSlug) continue;

      // Check 1: Slug is shorter than expected (missing category suffix)
      const isShorter = currentSlug.length < expectedSlug.length;
      
      // Check 2: Expected slug contains category word but current doesn't
      let hasCategoryMismatch = false;
      let expectedCategorySlug = null;
      
      if (property.Categoria && categoriaSlugMap[property.Categoria]) {
        expectedCategorySlug = categoriaSlugMap[property.Categoria];
        const expectedSlugWithCategory = `${expectedSlug}-${expectedCategorySlug}`;
        
        // Check if Empreendimento contains category word
        const empreendimentoLower = property.Empreendimento.toLowerCase();
        const categoriaLower = property.Categoria.toLowerCase();
        
        if (empreendimentoLower.includes(categoriaLower) || 
            empreendimentoLower.includes(expectedCategorySlug)) {
          // Empreendimento has category, but slug might not
          if (!currentSlug.includes(expectedCategorySlug) && 
              currentSlug !== expectedSlug &&
              expectedSlug.length > currentSlug.length) {
            hasCategoryMismatch = true;
          }
        }
      }

      // Check 3: Expected slug is significantly longer (likely missing suffix)
      const lengthDifference = expectedSlug.length - currentSlug.length;
      const isSignificantlyShorter = lengthDifference > 5 && 
                                     currentSlug.length > 0 &&
                                     expectedSlug.startsWith(currentSlug);

      // Check 4: Properties with "Cobertura" category but slug doesn't contain "cobertura"
      let isCoberturaMismatch = false;
      if (property.Categoria && 
          property.Categoria.toLowerCase().includes('cobertura') &&
          !currentSlug.includes('cobertura')) {
        isCoberturaMismatch = true;
      }

      // Flag if any mismatch detected
      if (isCoberturaMismatch || hasCategoryMismatch || (isShorter && isSignificantlyShorter)) {
        const expectedFullSlug = expectedCategorySlug && hasCategoryMismatch
          ? `${expectedSlug}-${expectedCategorySlug}`
          : expectedSlug;

        mismatches.push({
          codigo: property.Codigo,
          currentSlug: property.Slug,
          currentSlugNormalized: currentSlug,
          expectedSlug: expectedFullSlug,
          empreendimento: property.Empreendimento,
          categoria: property.Categoria,
          bairroComercial: property.BairroComercial,
          cidade: property.Cidade,
          mismatchTypes: {
            isCoberturaMismatch,
            hasCategoryMismatch,
            isShorter,
            isSignificantlyShorter,
            lengthDifference: expectedFullSlug.length - currentSlug.length
          },
          url: `https://www.npiconsultoria.com.br/imovel-${property.Codigo}/${property.Slug}`,
          expectedUrl: `https://www.npiconsultoria.com.br/imovel-${property.Codigo}/${expectedFullSlug}`
        });
      }
    }

    // Sort by mismatch severity (Cobertura mismatches first, then by length difference)
    mismatches.sort((a, b) => {
      if (a.mismatchTypes.isCoberturaMismatch && !b.mismatchTypes.isCoberturaMismatch) return -1;
      if (!a.mismatchTypes.isCoberturaMismatch && b.mismatchTypes.isCoberturaMismatch) return 1;
      return b.mismatchTypes.lengthDifference - a.mismatchTypes.lengthDifference;
    });

    console.log(`[DETECT-SLUG-MISMATCHES] Encontrados ${mismatches.length} possíveis mismatches`);

    // Summary statistics
    const summary = {
      totalPropertiesAnalyzed: allProperties.length,
      totalMismatches: mismatches.length,
      coberturaMismatches: mismatches.filter(m => m.mismatchTypes.isCoberturaMismatch).length,
      categoryMismatches: mismatches.filter(m => m.mismatchTypes.hasCategoryMismatch).length,
      significantlyShorter: mismatches.filter(m => m.mismatchTypes.isSignificantlyShorter).length
    };

    return NextResponse.json({
      status: 200,
      message: `Detecção concluída. Encontrados ${mismatches.length} possíveis mismatches de slug.`,
      summary,
      data: mismatches,
      detectionDate: new Date().toISOString()
    });

  } catch (error) {
    console.error("[DETECT-SLUG-MISMATCHES] Erro ao detectar mismatches:", error);
    return NextResponse.json(
      {
        status: 500,
        message: "Erro ao detectar mismatches de slug",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}

