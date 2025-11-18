import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb';
import Imovel from '@/app/models/Imovel';
import { normalizeSlug } from '@/app/utils/slug-validator';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { id } = params;
  
  console.log(`[API-RESOLVE] Resolvendo redirecionamento para ID: ${id}`);
  
  try {
    await connectToDatabase();
    const imovel = await Imovel.findOne({ Codigo: parseInt(id) }).select('Slug Empreendimento').lean();
    
    if (!imovel) {
      console.log(`[API-RESOLVE] Imóvel ${id} não encontrado`);
      // FIXED: Return 404 instead of redirect
      return new NextResponse(null, { status: 404 });
    }

    // FIXED: Normalize slug from database (handles double dashes)
    let slug = normalizeSlug(imovel.Slug);
    
    // If slug is invalid or missing, generate from Empreendimento
    if (!slug && imovel.Empreendimento) {
      slug = imovel.Empreendimento
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .replace(/-+/g, '-') // Remove hífens duplos
        .replace(/^-|-$/g, '') // Remove hífens do início e fim
        || `imovel-${id}`;
    } else if (!slug) {
      slug = `imovel-${id}`;
    }

    const redirectUrl = new URL(`/imovel-${id}/${slug}`, request.url);
    console.log(`[API-RESOLVE] Redirecionando para: ${redirectUrl.pathname}`);
    
    return NextResponse.redirect(redirectUrl, 301);

  } catch (error) {
    console.error('[API-RESOLVE] Erro:', error);
    // FIXED: Return 500 error instead of redirect
    return new NextResponse(JSON.stringify({ error: 'Internal server error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}