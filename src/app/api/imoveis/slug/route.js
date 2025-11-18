import { connectToDatabase } from "@/app/lib/mongodb";
import Imovel from "@/app/models/Imovel";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = request.nextUrl;
    const tipo = searchParams.get("tipo"); // NOVO: Parâmetro para filtrar
    
    await connectToDatabase();
    
    let query = {};
    
    // NOVO: Filtrar por tipo
    if (tipo === "condominios") {
      query = { Condominio: "Sim" };
    }
    // Se tipo não especificado, busca todos (comportamento padrão)
    
    // FIXED: Include actual update dates for sitemap
    const imoveis = await Imovel.find(query, { 
      Slug: 1, 
      Codigo: 1, 
      Condominio: 1,
      DataHoraAtualizacao: 1, // FIXED: For lastmod in sitemap
      DataAtualizacao: 1, // Fallback
      DataInclusao: 1, // Fallback
      updatedAt: 1, // Fallback
      _id: 0 
    });
    
    // Filtro para remover slugs inválidos (ex: redes sociais, vazios, etc)
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
    ];
    
    const imoveisFiltrados = imoveis.filter((item) => {
      if (!item.Slug || typeof item.Slug !== "string") return false;
      const slugLower = item.Slug.toLowerCase();
      return !slugsInvalidos.some((invalido) => slugLower.includes(invalido));
    });
    
    return NextResponse.json({
      status: 200,
      data: imoveisFiltrados.map((item) => {
        // CRITICAL FIX: Validate date before returning to prevent "Invalid time value" errors in sitemap
        const possibleDates = [
          item.updatedAt,
          item.DataHoraAtualizacao,
          item.DataAtualizacao,
          item.DataInclusao
        ];
        
        let validDate = null;
        for (const dateStr of possibleDates) {
          if (dateStr) {
            try {
              const date = new Date(dateStr);
              if (!isNaN(date.getTime())) {
                validDate = date.toISOString();
                break;
              }
            } catch {}
          }
        }
        
        return {
          Codigo: item.Codigo, 
          Slug: item.Slug,
          Condominio: item.Condominio,
          updatedAt: validDate || new Date().toISOString() // Safe fallback
        };
      }),
    });
  } catch (error) {
    console.error("Erro ao buscar dados de imóveis:", error);
    return NextResponse.json(
      {
        message: "Erro ao buscar dados de imóveis",
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}
