// ROTA ESPECÍFICA PARA CORRETORES
// Caminho: /src/app/api/corretores/route.js (sem o /admin)

import { connectToDatabase } from "@/app/lib/mongodb";
import Corretores from "@/app/models/Corretores";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = request.nextUrl;
    
    // Parâmetros de paginação
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "12", 10);
    const skip = (page - 1) * limit;

    await connectToDatabase();

    // Buscar corretores com paginação
    const [corretores, totalItems] = await Promise.all([
      Corretores.find({})
        .sort({ nome: 1 }) // Ordenar por nome
        .skip(skip)
        .limit(limit)
        .lean(),
      Corretores.countDocuments({})
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    return NextResponse.json({
      status: 200,
      success: true,
      corretores: corretores || [],
      data: corretores || [], // Para compatibilidade
      pagination: {
        totalItems,
        totalPages,
        currentPage: page,
        itemsPerPage: limit
      }
    });

  } catch (error) {
    console.error("Erro ao buscar corretores:", error);
    return NextResponse.json(
      {
        status: 500,
        success: false,
        message: "Erro ao buscar corretores",
        error: error instanceof Error ? error.message : "Erro desconhecido",
        corretores: [],
        pagination: {
          totalItems: 0,
          totalPages: 1,
          currentPage: 1,
          itemsPerPage: 12
        }
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    
    const dadosCorretor = await request.json();

    // Verificar se o código foi fornecido
    if (!dadosCorretor.codigoD) {
      return NextResponse.json(
        {
          status: 400,
          error: "O campo codigoD é obrigatório",
        },
        { status: 400 }
      );
    }

    // Verificar se já existe um corretor com o mesmo código
    const corretorExistente = await Corretores.findOne({ 
      codigoD: dadosCorretor.codigoD
    });

    let corretorSalvo;
    let message;

    if (corretorExistente) {
      // Atualizar o corretor existente
      corretorSalvo = await Corretores.findOneAndUpdate(
        { codigoD: dadosCorretor.codigoD },
        dadosCorretor,
        { new: true, upsert: false }
      );
      message = "Corretor atualizado com sucesso";
    } else {
      // Criar um novo corretor
      const novoCorretor = new Corretores(dadosCorretor);
      corretorSalvo = await novoCorretor.save();
      message = "Corretor criado com sucesso";
    }

    return NextResponse.json(
      {
        status: 200,
        success: true,
        message: message,
        data: corretorSalvo,
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Erro ao processar corretor:", error);
    return NextResponse.json(
      {
        status: 500,
        success: false,
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = request.nextUrl;
    const codigo = searchParams.get("codigo") || searchParams.get("codigoD");

    if (!codigo) {
      return NextResponse.json(
        { 
          status: 400,
          success: false, 
          message: "Código do corretor é obrigatório" 
        },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const result = await Corretores.deleteOne({ 
      codigoD: codigo
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { 
          status: 404,
          success: false, 
          message: "Corretor não encontrado" 
        },
        { status: 404 }
      );
    }

    return NextResponse.json({ 
      status: 200,
      success: true, 
      message: "Corretor deletado com sucesso" 
    });
    
  } catch (error) {
    console.error("Erro ao deletar corretor:", error);
    return NextResponse.json(
      { 
        status: 500,
        success: false, 
        message: "Erro ao deletar corretor",
        error: error instanceof Error ? error.message : "Erro desconhecido"
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectToDatabase();
    
    const dadosCorretor = await request.json();

    // Verificar se o código foi fornecido
    if (!dadosCorretor.codigoD) {
      return NextResponse.json(
        {
          status: 400,
          error: "O campo codigoD é obrigatório",
        },
        { status: 400 }
      );
    }

    // Verificar se o corretor existe
    const corretorExistente = await Corretores.findOne({ 
      codigoD: dadosCorretor.codigoD
    });
    
    if (!corretorExistente) {
      return NextResponse.json(
        {
          status: 404,
          error: "Corretor não encontrado para atualização",
        },
        { status: 404 }
      );
    }

    // Atualizar o corretor existente
    const corretorAtualizado = await Corretores.findOneAndUpdate(
      { codigoD: dadosCorretor.codigoD },
      dadosCorretor,
      { new: true, upsert: false }
    );

    return NextResponse.json(
      {
        status: 200,
        success: true,
        message: "Corretor atualizado com sucesso",
        data: corretorAtualizado,
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error("Erro ao atualizar corretor:", error);
    return NextResponse.json(
      {
        status: 500,
        success: false,
        error: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}
