// src/app/utils/slug-cache.js
// LRU Cache with versioning for slug data
// Edge Runtime compatible (uses Map, no Node.js dependencies)

import { normalizeSlug, generateSlug, shouldIndexProperty } from './slug-validator';

class SlugCache {
  constructor() {
    // LRU cache using Map (maintains insertion order)
    this.cache = new Map();
    
    // Global cache version (incremented on invalidation)
    this.cacheVersion = 1;
    
    // Configuration
    this.maxEntries = 5000;
    this.ttlValid = 120000;      // 2 minutes for valid entries
    this.ttlInvalid = 30000;     // 30 seconds for invalid/404 entries
    
    // Statistics
    this.stats = {
      hits: 0,
      misses: 0,
      invalidations: 0,
      evictions: 0,
    };
  }

  /**
   * Get cache entry
   * @param {string} type - 'imovel' or 'condominio'
   * @param {string} id - Property ID or condominium slug
   * @returns {object|null} - Cache entry or null if miss/expired/stale
   */
  get(type, id) {
    const key = `${type}:${id}`;
    const entry = this.cache.get(key);

    if (!entry) {
      this.stats.misses++;
      return null;
    }

    // Check version mismatch (stale entry)
    if (entry.version !== this.cacheVersion) {
      console.log(`[SLUG-CACHE]  Entry stale due to version mismatch (entry: ${entry.version}, current: ${this.cacheVersion}): ${key}`);
      this.cache.delete(key);
      this.stats.misses++;
      return null;
    }

    // Check TTL expiration
    const now = Date.now();
    const ttl = entry.exists ? this.ttlValid : this.ttlInvalid;
    const age = now - entry.timestamp;

    if (age > ttl) {
      console.log(`[SLUG-CACHE]  Entry expired (age: ${Math.round(age / 1000)}s, TTL: ${Math.round(ttl / 1000)}s): ${key}`);
      this.cache.delete(key);
      this.stats.misses++;
      return null;
    }

    // Cache HIT - move to end (LRU)
    this.cache.delete(key);
    this.cache.set(key, entry);

    this.stats.hits++;
    return entry;
  }

  /**
   * Set cache entry
   * @param {string} type - 'imovel' or 'condominio'
   * @param {string} id - Property ID or condominium slug
   * @param {string|null} slug - Normalized slug (null if doesn't exist)
   * @param {boolean} exists - Whether property/condominium exists
   * @param {boolean} shouldIndex - Whether it should be indexed
   * @param {object} data - Optional full data object
   */
  set(type, id, slug, exists, shouldIndex, data = null) {
    // Normalize slug before caching
    let normalizedSlug = null;
    if (slug) {
      normalizedSlug = normalizeSlug(slug);
      if (!normalizedSlug && data && data.Empreendimento) {
        // Generate fallback slug if normalization fails
        normalizedSlug = generateSlug(data);
      }
    }

    const key = `${type}:${id}`;
    
    // Check if cache is full (need eviction)
    if (this.cache.size >= this.maxEntries && !this.cache.has(key)) {
      this.evictOldest();
    }

    const entry = {
      slug: normalizedSlug,
      exists,
      shouldIndex,
      version: this.cacheVersion,
      timestamp: Date.now(),
      data: data || null,
    };

    // Remove if exists (to move to end for LRU)
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, entry);
  }

  /**
   * Invalidate cache entry
   * @param {string} type - 'imovel' or 'condominio'
   * @param {string} id - Property ID or condominium slug
   */
  invalidate(type, id) {
    const key = `${type}:${id}`;
    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.stats.invalidations++;
      console.log(`[SLUG-CACHE]  Invalidated: ${key}`);
    }
    
    // Increment global version (marks all entries as potentially stale)
    this.cacheVersion++;
    console.log(`[SLUG-CACHE]  Cache version incremented to: ${this.cacheVersion}`);
  }

  /**
   * Clear all cache entries
   */
  clear() {
    const size = this.cache.size;
    this.cache.clear();
    this.cacheVersion = 1;
    this.stats.evictions += size;
    console.log(`[SLUG-CACHE]  Cache cleared (${size} entries removed)`);
  }

  /**
   * Evict oldest 20% of entries (LRU eviction)
   */
  evictOldest() {
    const evictCount = Math.floor(this.maxEntries * 0.2); // 20% = 1,000 entries
    const keysToEvict = Array.from(this.cache.keys()).slice(0, evictCount);
    
    keysToEvict.forEach(key => {
      this.cache.delete(key);
    });
    
    this.stats.evictions += evictCount;
    console.log(`[SLUG-CACHE]  Evicted ${evictCount} oldest entries (LRU)`);
  }

  /**
   * Get cache statistics
   * @returns {object} - Cache stats
   */
  getStats() {
    const totalRequests = this.stats.hits + this.stats.misses;
    const hitRate = totalRequests > 0 
      ? ((this.stats.hits / totalRequests) * 100).toFixed(1) + '%'
      : '0%';

    return {
      hits: this.stats.hits,
      misses: this.stats.misses,
      hitRate,
      size: this.cache.size,
      maxEntries: this.maxEntries,
      cacheVersion: this.cacheVersion,
      ttlValid: `${this.ttlValid / 1000}s`,
      ttlInvalid: `${this.ttlInvalid / 1000}s`,
      invalidations: this.stats.invalidations,
      evictions: this.stats.evictions,
    };
  }
}

// Singleton instance
const slugCache = new SlugCache();

/**
 * Get slug from cache or database
 * @param {string} type - 'imovel' or 'condominio'
 * @param {string} id - Property ID or condominium slug
 * @param {function} fetchFunction - Function to fetch from database if cache miss
 * @returns {Promise<object>} - { slug, exists, shouldIndex, data }
 */
export async function getSlugFromCache(type, id, fetchFunction) {
  if (!type || !id) {
    throw new Error('Type and ID are required');
  }

  // Check cache first
  const cached = slugCache.get(type, id);
  
  if (cached) {
    console.log(`[SLUG-CACHE]  HIT: ${type}:${id} → ${cached.slug || 'null'} (v${cached.version})`);
    return {
      slug: cached.slug,
      exists: cached.exists,
      shouldIndex: cached.shouldIndex,
      data: cached.data,
      fromCache: true,
    };
  }

  // Cache MISS - fetch from database
  console.log(`[SLUG-CACHE]  MISS: ${type}:${id} → Buscando no banco`);
  
  try {
    const response = await fetchFunction(id);
    
    // Handle condominium redirects (301 status)
    if (type === 'condominio' && (response?.status === 301 || response?.statusCode === 301)) {
      const redirectSlug = response.redirect?.split('/').pop() || null;
      // Cache redirect info (exists=false, but store redirect slug)
      slugCache.set(type, id, redirectSlug, false, false, { redirect: response.redirect });
      console.log(`[SLUG-CACHE]  Cached redirect: ${type}:${id} → ${redirectSlug || 'null'} (v${slugCache.cacheVersion})`);
      
      return {
        slug: redirectSlug,
        exists: false,
        shouldIndex: false,
        data: { redirect: response.redirect },
        redirect: response.redirect,
        fromCache: false,
      };
    }
    
    // Extract data from response (handle different response structures)
    let data = null;
    if (type === 'imovel') {
      // getImovelById returns { data: {...} } or throws 404
      data = response?.data || null;
    } else if (type === 'condominio') {
      // getCondominioPorSlug returns { data: {...}, imoveisRelacionados: [...] } or { data: null, statusCode: 404 }
      // Check for explicit 404 status
      if (response?.statusCode === 404 || response?.status === 404) {
        data = null;
      } else {
        data = response?.data || null;
      }
    }
    
    const exists = !!data;
    
    // Determine shouldIndex
    let shouldIndex = false;
    if (data) {
      if (type === 'imovel') {
        shouldIndex = shouldIndexProperty(data);
      } else if (type === 'condominio') {
        // For condominiums, check if it's a valid condominium
        shouldIndex = data.Condominio === 'Sim' && !!data.Empreendimento && !!data.Cidade;
      }
    }

    // Extract or generate slug
    let slug = null;
    if (data) {
      if (type === 'imovel') {
        slug = data.Slug || (data.Empreendimento ? generateSlug(data) : null);
      } else if (type === 'condominio') {
        slug = data.Slug || (data.Empreendimento ? generateSlug(data) : null);
      }
    }

    // Cache the result (include full response for condominiums with imoveisRelacionados)
    const cacheData = type === 'condominio' ? response : data;
    slugCache.set(type, id, slug, exists, shouldIndex, cacheData);
    console.log(`[SLUG-CACHE]  Cached: ${type}:${id} → ${slug || 'null'} (v${slugCache.cacheVersion})`);

    return {
      slug,
      exists,
      shouldIndex,
      data: cacheData,
      fromCache: false,
    };
  } catch (error) {
    // Handle 404 errors - cache them with exists=false to prevent DB hammering
    if (error.response?.status === 404 || error.statusCode === 404) {
      console.log(`[SLUG-CACHE]  404 detected for ${type}:${id} - caching as non-existent`);
      
      // Cache 404 with exists=false (30s TTL)
      slugCache.set(type, id, null, false, false, null);
      console.log(`[SLUG-CACHE]  Cached 404: ${type}:${id} (v${slugCache.cacheVersion})`);
      
      return {
        slug: null,
        exists: false,
        shouldIndex: false,
        data: null,
        fromCache: false,
      };
    }
    
    console.error(`[SLUG-CACHE]  Error fetching ${type}:${id}:`, error);
    
    // Don't cache other errors - let it retry on next request
    throw error;
  }
}

// Export singleton instance for direct access
export { slugCache };

// Export for testing
export { SlugCache };

