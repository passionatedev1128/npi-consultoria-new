// src/app/api/admin/cache-stats/route.js
// Cache statistics endpoint for monitoring

import { NextResponse } from 'next/server';
import { obterEstatisticasCache } from '@/app/utils/cache-invalidation';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const stats = obterEstatisticasCache();
    
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
      },
      { status: 500 }
    );
  }
}

