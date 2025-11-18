import { connectToDatabase } from "@/app/lib/mongodb";
import Imovel from "@/app/models/Imovel";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

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
    const slug = searchParams.get("slug");
    
    console.log(`[API-CONDOMINIOS-SLUG] ====== CHAMADA RECEBIDA ======`);
    console.log(`[API-CONDOMINIOS-SLUG] Slug recebido: ${slug}`);
    console.log(`[API-CONDOMINIOS-SLUG] User-Agent: ${request.headers.get('user-agent')?.substring(0, 50)}...`);
    console.log(`[API-CONDOMINIOS-SLUG] Referrer: ${request.headers.get('referer') || 'N/A'}`);
    
    if (!slug) {
      const badRequestResponse = NextResponse.json(
        {
          status: 400,
          error: "É necessário fornecer o SLUG do imóvel",
        },
        { status: 400 }
      );
      // FIXED: Add CORS headers
      badRequestResponse.headers.set('Access-Control-Allow-Origin', '*');
      badRequestResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
      return badRequestResponse;
    }
    
    // Detectar e rejeitar slugs no formato imovel-{id}
    if (slug.match(/^imovel-\d+$/)) {
      console.log(`[API-CONDOMINIOS-SLUG] Rejeitando slug de imóvel: ${slug}`);
      const notFoundResponse = NextResponse.json(
        {
          status: 404,
          error: "Slug de imóvel detectado - não é um slug de condomínio",
        },
        { status: 404 }
      );
      // FIXED: Add CORS headers
      notFoundResponse.headers.set('Access-Control-Allow-Origin', '*');
      notFoundResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
      return notFoundResponse;
    }
    
    await connectToDatabase();
    
    // Buscar com Condominio: "Sim"
    let imovelReferencia = await Imovel.findOne({
      Slug: slug,
      Condominio: "Sim"
    });
    
    // CORREÇÃO: Se não encontrar, verificar se existe imóvel comum
    if (!imovelReferencia) {
      console.log(`[API-CONDOMINIOS-SLUG] Não encontrado com Condominio: "Sim", buscando qualquer imóvel...`);
      
      const imovelComum = await Imovel.findOne({ Slug: slug });
      
      if (imovelComum) {
        // EXISTE mas NÃO é condomínio → Retornar dados para redirect
        const urlCorreta = `/imovel-${imovelComum.Codigo}/${imovelComum.Slug}`;
        
        console.log(`[API-CONDOMINIOS-SLUG] Sinalizando redirect: /${slug} → ${urlCorreta}`);
        
        // NOVO: Retornar dados com flag de redirect
        const redirectResponse = NextResponse.json(
          {
            status: 301,
            redirect: urlCorreta,
            message: "Este imóvel não é um condomínio. Deve ser redirecionado.",
            data: null // Sem dados, apenas redirect
          },
          { status: 200 } // IMPORTANTE: Status HTTP 200, mas com flag redirect no JSON
        );
        // FIXED: Add CORS headers
        redirectResponse.headers.set('Access-Control-Allow-Origin', '*');
        redirectResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
        return redirectResponse;
      }
      
      // NÃO EXISTE de jeito nenhum → 404
      console.log(`[API-CONDOMINIOS-SLUG] Não encontrado: ${slug}`);
      const notFoundFinalResponse = NextResponse.json(
        { status: 404, error: "Condomínio não encontrado", data: null },
        { status: 404 }
      );
      // FIXED: Add CORS headers
      notFoundFinalResponse.headers.set('Access-Control-Allow-Origin', '*');
      notFoundFinalResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
      return notFoundFinalResponse;
    }
    
    // Verificar endereço
    if (!imovelReferencia.Endereco || !imovelReferencia.Numero) {
      const badAddressResponse = NextResponse.json(
        { status: 400, error: "Endereço não definido" },
        { status: 400 }
      );
      // FIXED: Add CORS headers
      badAddressResponse.headers.set('Access-Control-Allow-Origin', '*');
      badAddressResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
      return badAddressResponse;
    }
    
    // Buscar imóveis relacionados
    const imoveisRelacionados = await Imovel.find({
      Endereco: imovelReferencia.Endereco,
      Numero: imovelReferencia.Numero,
    }).sort({ Codigo: 1 });
    
    const successResponse = NextResponse.json({
      status: 200,
      data: imovelReferencia,
      imoveisRelacionados: imoveisRelacionados || [],
    });
    // FIXED: Add CORS headers to prevent 403
    successResponse.headers.set('Access-Control-Allow-Origin', '*');
    successResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return successResponse;
  } catch (error) {
    console.error("Erro ao buscar imóvel por slug:", error);
    const errorResponse = NextResponse.json(
      { status: 500, error: error.message },
      { status: 500 }
    );
    // FIXED: Add CORS headers to error responses
    errorResponse.headers.set('Access-Control-Allow-Origin', '*');
    errorResponse.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return errorResponse;
  }
}
