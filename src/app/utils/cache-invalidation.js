// src/app/utils/cache-invalidation.js
// Cache invalidation functions for slug cache

import { slugCache } from './slug-cache';

/**
 * Invalidate cache for a specific property
 * @param {string} codigo - Property code (ID)
 */
export function invalidarCacheImovel(codigo) {
  if (!codigo) {
    console.warn('[CACHE-INVALIDATION]  Attempted to invalidate imovel with invalid codigo:', codigo);
    return;
  }

  try {
    slugCache.invalidate('imovel', codigo);
    console.log(`[CACHE-INVALIDATION]  Cache invalidado: imovel:${codigo}`);
  } catch (error) {
    console.error(`[CACHE-INVALIDATION]  Erro ao invalidar cache imovel:${codigo}:`, error);
  }
}

/**
 * Invalidate cache for a specific condominium
 * @param {string} slug - Condominium slug
 */
export function invalidarCacheCondominio(slug) {
  if (!slug) {
    console.warn('[CACHE-INVALIDATION]  Attempted to invalidate condominio with invalid slug:', slug);
    return;
  }

  try {
    slugCache.invalidate('condominio', slug);
    console.log(`[CACHE-INVALIDATION]  Cache invalidado: condominio:${slug}`);
  } catch (error) {
    console.error(`[CACHE-INVALIDATION]  Erro ao invalidar cache condominio:${slug}:`, error);
  }
}

/**
 * Clear all cache entries (emergency use only)
 */
export function limparCacheCompleto() {
  try {
    slugCache.clear();
    console.log('[CACHE-INVALIDATION] 🧹 Cache completo limpo');
  } catch (error) {
    console.error('[CACHE-INVALIDATION]  Erro ao limpar cache completo:', error);
  }
}

/**
 * Get cache statistics
 * @returns {object} - Cache stats
 */
export function obterEstatisticasCache() {
  return slugCache.getStats();
}

