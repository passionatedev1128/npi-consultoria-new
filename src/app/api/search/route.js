import { connectToDatabase } from "@/app/lib/mongodb";
import Imovel from "@/app/models/Imovel";

import { NextResponse } from "next/server";

// ADICIONE ESTA LINHA AQUI
export const dynamic = 'force-dynamic'; // Garante que a rota seja sempre dinâmica e não cacheada

// FIXED: Handle CORS preflight OPTIONS requests
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function GET(request) {
  try {
    const { searchParams } = request.nextUrl;
    const query = searchParams.get("q");

    if (!query || query.trim() === "") {
      const emptyResponse = NextResponse.json({
        status: 200,
        data: [],
      });
      emptyResponse.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      emptyResponse.headers.set('Pragma', 'no-cache');
      emptyResponse.headers.set('Expires', '0');
      emptyResponse.headers.set('Surrogate-Control', 'no-store');
      // FIXED: Add CORS headers to prevent 403
      emptyResponse.headers.set('Access-Control-Allow-Origin', '*');
      emptyResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
      return emptyResponse;
    }

    await connectToDatabase();

    // Criar regex para busca case-insensitive
    const searchRegex = new RegExp(query, 'i');
    
    // Tentar converter para número (para buscar em campos numéricos)
    const searchNumber = !isNaN(query) ? Number(query) : null;

    // Filtro com prioridade para Codigo
    const filtro = {
      $or: [
        // Campos de texto
        { Codigo: { $regex: searchRegex } },
        { Empreendimento: { $regex: searchRegex } },
        { NomeImovel: { $regex: searchRegex } },
        { Endereco: { $regex: searchRegex } },
        { Bairro: { $regex: searchRegex } },
        { Cidade: { $regex: searchRegex } },
        { TipoImovel: { $regex: searchRegex } },
        { TipoEndereco: { $regex: searchRegex } },
        { Categoria: { $regex: searchRegex } },
      ]
    };

    // Adicionar busca numérica se o termo for um número
    if (searchNumber !== null) {
      filtro.$or.push(
        { AreaPrivativa: searchNumber },
        { AreaTotal: searchNumber },
        { Metragem1: searchNumber },
        { Metragem2: searchNumber },
        { Vagas: searchNumber },
        { VagasAntigo: searchNumber },
        { Dormitorios: searchNumber },
        { DormitoriosAntigo: searchNumber },
        { Banheiros: searchNumber },
        { ValorVenda: searchNumber },
        { ValorLocacao: searchNumber }
      );
    }

    // Primeiro buscar por código exato
    let resultado = await Imovel.find({ Codigo: query }).lean();

    // Se não encontrou por código exato, buscar com o filtro amplo
    if (resultado.length === 0) {
      resultado = await Imovel.find(filtro)
        .limit(50)
        .lean();
    } else {
      // Se encontrou por código, adicionar outros resultados similares até 50
      const outrosResultados = await Imovel.find({
        ...filtro,
        Codigo: { $ne: query } // Excluir o código já encontrado
      })
        .limit(49)
        .lean();
      
      resultado = [...resultado, ...outrosResultados];
    }

    const response = NextResponse.json({
      status: 200,
      data: resultado,
    });

    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    response.headers.set('Surrogate-Control', 'no-store');
    // FIXED: Add CORS headers to prevent 403
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');

    return response;

  } catch (error) {
    console.error("Erro na busca:", error);
    const errorResponse = NextResponse.json({
      status: 500,
      error: error.message || "Erro desconhecido",
    });
    // FIXED: Add CORS headers to error responses
    errorResponse.headers.set('Access-Control-Allow-Origin', '*');
    errorResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return errorResponse;
  }
}
