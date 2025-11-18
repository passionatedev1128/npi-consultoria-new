// src/app/api/webhooks/city-sync/route.js

import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Função para triggerar sincronização de cidades de forma assíncrona
async function triggerCitySync(delay = 2000) {
  // Aguardar um pouco para garantir que o imóvel foi salvo
  setTimeout(async () => {
    try {
      console.log('[WEBHOOK] Triggerando sincronização de cidades...');
      
      // Fazer request para a API de auto-sync
      const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/cities/auto-sync`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ source: 'webhook' })
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('[WEBHOOK] Sincronização triggerada:', result.message);
      } else {
        console.error('[WEBHOOK] Erro ao triggerar sincronização:', response.status);
      }
      
    } catch (error) {
      console.error('[WEBHOOK] Erro no webhook de sincronização:', error);
    }
  }, delay);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      action, 
      data, 
      source = 'unknown',
      delay = 2000 
    } = body;
    
    console.log(`[WEBHOOK] Recebido evento: ${action} de ${source}`);
    
    // Verificar se é um evento que pode afetar cidades
    const cityRelevantEvents = [
      'property.created',
      'property.updated', 
      'property.imported',
      'property.city.changed'
    ];
    
    if (cityRelevantEvents.includes(action)) {
      // Extrair cidade se disponível nos dados
      const cityName = data?.Cidade || data?.cidade || data?.city;
      
      if (cityName) {
        console.log(`[WEBHOOK] Evento relacionado à cidade: ${cityName}`);
      }
      
      // Triggerar sincronização de forma assíncrona
      triggerCitySync(delay);
      
      return NextResponse.json({
        status: 200,
        message: 'Webhook processado, sincronização de cidades triggerada',
        data: {
          action,
          cityName,
          source,
          triggered: true
        }
      });
    }
    
    return NextResponse.json({
      status: 200,
      message: 'Webhook recebido, mas não relevante para sincronização de cidades',
      data: {
        action,
        source,
        triggered: false
      }
    });
    
  } catch (error) {
    console.error('[WEBHOOK] Erro ao processar webhook:', error);
    return NextResponse.json({
      status: 500,
      message: 'Erro ao processar webhook',
      error: error.message
    }, { status: 500 });
  }
}

// Endpoint GET para verificar status do webhook
export async function GET(request) {
  return NextResponse.json({
    status: 200,
    message: 'Webhook de sincronização de cidades ativo',
    data: {
      endpoint: '/api/webhooks/city-sync',
      supportedActions: [
        'property.created',
        'property.updated', 
        'property.imported',
        'property.city.changed'
      ],
      usage: {
        method: 'POST',
        body: {
          action: 'property.created',
          data: { Cidade: 'Nova Cidade' },
          source: 'admin-panel',
          delay: 2000
        }
      }
    }
  });
}