import { connectToDatabase } from "@/app/lib/mongodb";
import Imovel from "@/app/models/Imovel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    const { codigos } = body;

    // Validar entrada
    if (!Array.isArray(codigos) || codigos.length === 0) {
      return NextResponse.json({
        status: 400,
        error: "Array de códigos é obrigatório",
        data: [],
      });
    }

    // Buscar imóveis pelos códigos fornecidos
    const STATUS_INDISPONIVEIS_REGEX = /^(vendido|locado|alugado)$/i;
    
    const imoveis = await Imovel.find({
      Codigo: { $in: codigos },
      Situacao: { $not: STATUS_INDISPONIVEIS_REGEX },
    });

    // Manter a ordem dos códigos enviados
    const imoveisMapeados = new Map(imoveis.map(i => [i.Codigo, i]));
    const imoveisOrdenados = codigos
      .map(codigo => imoveisMapeados.get(codigo))
      .filter(Boolean);

    return NextResponse.json({
      status: 200,
      data: imoveisOrdenados,
      paginacao: {
        totalItems: imoveisOrdenados.length,
        totalPages: 1,
        currentPage: 1,
        limit: imoveisOrdenados.length,
      },
    });
  } catch (error) {
    console.error("Erro ao buscar favoritos:", error);
    return NextResponse.json({
      status: 500,
      error: error instanceof Error ? error.message : "Erro desconhecido",
      data: [],
    });
  }
}
