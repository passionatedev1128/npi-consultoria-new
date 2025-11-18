import { connectToDatabase } from "@/app/lib/mongodb";
import Imovel from "@/app/models/Imovel";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    await connectToDatabase();

    // Slugs inválidos que devem ser removidos/corrigidos
    const slugsInvalidos = [
      "facebook.com",
      "instagram.com", 
      "twitter.com",
      "youtube.com",
      "linkedin.com",
      "tiktok.com",
      "wa.me",
      "whatsapp.com",
      "mailto:",
      "http://",
      "https://",
      "www.",
      "npiimoveis",
      "npi_imoveis"
    ];

    console.log("[FIX-SLUGS] Iniciando limpeza de slugs inválidos...");

    // Encontrar imóveis com slugs corrompidos
    const imoveisComSlugInvalido = await Imovel.find({
      Slug: { 
        $regex: slugsInvalidos.join('|'), 
        $options: 'i' 
      }
    }, { Codigo: 1, Slug: 1, Empreendimento: 1 });

    console.log(`[FIX-SLUGS] Encontrados ${imoveisComSlugInvalido.length} imóveis com slugs inválidos`);

    const resultados = [];

    for (const imovel of imoveisComSlugInvalido) {
      const slugAntigo = imovel.Slug;
      
      // Gerar novo slug baseado no nome do empreendimento
      let novoSlug = '';
      if (imovel.Empreendimento) {
        novoSlug = imovel.Empreendimento
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '') // Remove acentos
          .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
          .replace(/\s+/g, '-') // Substitui espaços por hífens
          .replace(/-+/g, '-') // Remove hífens duplos
          .replace(/^-|-$/g, '') // Remove hífens do início e fim
          || `imovel-${imovel.Codigo}`;
      } else {
        novoSlug = `imovel-${imovel.Codigo}`;
      }

      // Atualizar o slug no banco
      await Imovel.updateOne(
        { Codigo: imovel.Codigo },
        { $set: { Slug: novoSlug } }
      );

      resultados.push({
        codigo: imovel.Codigo,
        slugAntigo: slugAntigo,
        novoSlug: novoSlug,
        empreendimento: imovel.Empreendimento
      });

      console.log(`[FIX-SLUGS] Imóvel ${imovel.Codigo}: ${slugAntigo} → ${novoSlug}`);
    }

    console.log(`[FIX-SLUGS] Limpeza concluída! ${resultados.length} slugs corrigidos`);

    return NextResponse.json({
      status: 200,
      message: `Slugs corrigidos com sucesso! ${resultados.length} imóveis atualizados.`,
      data: resultados
    });

  } catch (error) {
    console.error("[FIX-SLUGS] Erro ao corrigir slugs:", error);
    return NextResponse.json(
      {
        message: "Erro ao corrigir slugs inválidos",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectToDatabase();

    const slugsInvalidos = [
      "facebook.com",
      "instagram.com", 
      "twitter.com",
      "youtube.com",
      "linkedin.com",
      "tiktok.com",
      "wa.me",
      "whatsapp.com",
      "mailto:",
      "http://",
      "https://",
      "www.",
      "npiimoveis",
      "npi_imoveis"
    ];

    // Apenas listar imóveis com slugs corrompidos (não corrigir)
    const imoveisComSlugInvalido = await Imovel.find({
      Slug: { 
        $regex: slugsInvalidos.join('|'), 
        $options: 'i' 
      }
    }, { Codigo: 1, Slug: 1, Empreendimento: 1 });

    return NextResponse.json({
      status: 200,
      message: `Encontrados ${imoveisComSlugInvalido.length} imóveis com slugs inválidos`,
      data: imoveisComSlugInvalido
    });

  } catch (error) {
    console.error("[FIX-SLUGS] Erro ao listar slugs:", error);
    return NextResponse.json(
      {
        message: "Erro ao listar slugs inválidos",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}