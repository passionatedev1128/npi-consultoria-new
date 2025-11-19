// src/app/api/admin/cache-stats/route.js
// Cache statistics endpoint for monitoring

import { NextResponse } from 'next/server';
import { obterEstatisticasCache } from '@/app/utils/cache-invalidation';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  console.log('[CACHE-STATS] Route accessed:', request.url);
  
  try {
    const stats = obterEstatisticasCache();
    
    console.log('[CACHE-STATS] Stats retrieved successfully:', {
      hits: stats.hits,
      misses: stats.misses,
      size: stats.size
    });
    
    return NextResponse.json({
      success: true,
      ...stats,
      timestamp: new Date().toISOString(),
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (error) {
    console.error('[CACHE-STATS] Error getting cache stats:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Error getting cache stats',
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

