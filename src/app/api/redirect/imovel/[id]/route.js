import { connectToDatabase } from "@/app/lib/mongodb";
import Imovel from "@/app/models/Imovel";
import { NextResponse } from "next/server";
import { normalizeSlug } from "@/app/utils/slug-validator";

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { id } = params;
  const { searchParams } = new URL(request.url);
  const isTrailingSlash = searchParams.get('trailing') === 'true';

  console.log(`[API REDIRECT] ${isTrailingSlash ? 'TRAILING SLASH' : 'NORMAL'} redirect para imóvel ${id}`);

  try {
    await connectToDatabase();

    // Buscar o imóvel pelo código
    const imovel = await Imovel.findOne({ Codigo: id });

    if (!imovel) {
      // FIXED: Return 404 instead of redirect
      return new NextResponse(null, { status: 404 });
    }

    // FIXED: Normalize slug from database (handles double dashes)
    let slugBasico = normalizeSlug(imovel.Slug);
    
    // If slug is invalid or missing, generate from Empreendimento
    if (!slugBasico && imovel.Empreendimento) {
      slugBasico = imovel.Empreendimento
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .replace(/-+/g, '-') // Remove hífens duplos
        .replace(/^-|-$/g, '') // Remove hífens do início e fim
        || `imovel-${id}`;
    } else if (!slugBasico) {
      slugBasico = `imovel-${id}`;
    }

    // Redirecionar para a URL com slug normalizado com status 301 explícito
    const finalUrl = `/imovel-${id}/${slugBasico}`;
    console.log(`[API REDIRECT] Redirecionamento DIRETO (301): /imovel-${id}${isTrailingSlash ? '/' : ''} → ${finalUrl}`);
    return NextResponse.redirect(new URL(finalUrl, request.url), 301);

  } catch (error) {
    console.error('Erro ao buscar imóvel para redirecionamento:', error);
    // FIXED: Return 500 error instead of redirect to prevent loops
    return new NextResponse(JSON.stringify({ error: 'Internal server error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}