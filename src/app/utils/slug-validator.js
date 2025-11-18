// src/app/utils/slug-validator.js
/**
 * Centralized slug validation and generation
 * Prevents invalid slugs and ensures consistency across the application
 */

// Known invalid slug patterns from historical GSC issues
const INVALID_SLUGS = [
  'facebook.com/npiimoveis',
  'instagram.com/npi_imoveis',
  'linkedin.com/company',
  'twitter.com/npi',
  'youtube.com/npi',
  'indexdata/index.swf',
  'iframe.php',
  'iConatusIframe',
  'testeIframe',
];

// Invalid keywords that should never appear in slugs
const INVALID_KEYWORDS = [
  'facebook.com',
  'instagram.com',
  'linkedin.com',
  'twitter.com',
  'youtube.com',
  'tiktok.com',
  '.swf',
  '.php',
  '.html',
  '.asp',
  '.aspx',
  'iframe',
  'http://',
  'https://',
  'www.',
  '.com',
  '.br',
  '.net',
  '.org',
];

/**
 * Validate if a slug is valid
 * @param {string} slug - The slug to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export function isValidSlug(slug) {
  if (!slug || typeof slug !== 'string') {
    return false;
  }
  
  // Check exact matches
  if (INVALID_SLUGS.includes(slug.toLowerCase())) {
    return false;
  }
  
  // Check for invalid keywords
  const hasInvalidKeyword = INVALID_KEYWORDS.some(keyword =>
    slug.toLowerCase().includes(keyword.toLowerCase())
  );
  
  if (hasInvalidKeyword) {
    return false;
  }
  
  // Check format: only lowercase letters, numbers, and hyphens
  const validFormat = /^[a-z0-9-]+$/;
  if (!validFormat.test(slug)) {
    return false;
  }
  
  // Check reasonable length
  if (slug.length < 3 || slug.length > 200) {
    return false;
  }
  
  // Check doesn't start/end with hyphen
  if (slug.startsWith('-') || slug.endsWith('-')) {
    return false;
  }
  
  // Check no consecutive hyphens
  if (slug.includes('--')) {
    return false;
  }
  
  return true;
}

/**
 * Generate a valid slug from property data
 * @param {object} property - Property object with Empreendimento, BairroComercial, Cidade
 * @param {string} property.Empreendimento - Property name
 * @param {string} property.BairroComercial - Neighborhood
 * @param {string} property.Cidade - City
 * @returns {string} - Valid slug
 */
export function generateSlug(property) {
  let slug = property.Empreendimento || 'imovel';
  
  // Add location context for uniqueness
  if (property.BairroComercial && !slug.toLowerCase().includes(property.BairroComercial.toLowerCase())) {
    slug += ` ${property.BairroComercial}`;
  }
  
  // Clean and format
  slug = slug
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .trim()
    .replace(/\s+/g, '-') // Spaces to hyphens
    .replace(/-+/g, '-') // Multiple hyphens to single
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  
  // Ensure minimum length
  if (slug.length < 3) {
    slug = `imovel-${property.Codigo || 'sem-codigo'}`;
  }
  
  // Ensure maximum length
  if (slug.length > 200) {
    slug = slug.substring(0, 200).replace(/-[^-]*$/, ''); // Cut at last hyphen
  }
  
  return slug;
}

/**
 * Normalize a slug from database (fixes double dashes and other issues)
 * This is critical because database slugs may contain double dashes (--)
 * which are invalid but need to be normalized to single dashes
 * @param {string} slug - Slug from database to normalize
 * @returns {string|null} - Normalized slug or null if invalid
 */
export function normalizeSlug(slug) {
  if (!slug || typeof slug !== 'string') {
    return null;
  }
  
  // Normalize: remove double dashes and fix common issues
  const normalized = slug
    .toLowerCase()
    .trim()
    .replace(/-+/g, '-') // Replace multiple consecutive dashes with single dash
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
  
  // If normalized slug is valid, return it
  if (isValidSlug(normalized)) {
    return normalized;
  }
  
  // If still invalid, try more aggressive cleaning
  const cleaned = normalized
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  if (isValidSlug(cleaned)) {
    return cleaned;
  }
  
  return null;
}

/**
 * Sanitize a slug (clean up but keep if possible)
 * @param {string} slug - Slug to sanitize
 * @returns {string|null} - Sanitized slug or null if invalid
 */
export function sanitizeSlug(slug) {
  if (!slug || typeof slug !== 'string') {
    return null;
  }
  
  // First try to normalize (handles double dashes)
  const normalized = normalizeSlug(slug);
  if (normalized) {
    return normalized;
  }
  
  // If normalization failed, try aggressive cleaning
  const cleaned = slug
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  // Check if cleaned version is valid
  if (isValidSlug(cleaned)) {
    return cleaned;
  }
  
  // Couldn't fix it
  return null;
}

/**
 * Get canonical URL for a property
 * @param {object} property - Property with Codigo and Slug
 * @param {string} baseUrl - Base URL (e.g., https://npiconsultoria.com.br)
 * @returns {string} - Canonical URL
 */
export function getCanonicalUrl(property, baseUrl) {
  const codigo = property.Codigo;
  const slug = property.Slug;
  
  // FIXED: Normalize slug from database (handles double dashes)
  const normalizedSlug = normalizeSlug(slug);
  if (normalizedSlug) {
    return `${baseUrl}/imovel-${codigo}/${normalizedSlug}`;
  }
  
  // If slug is invalid, use code-only URL
  return `${baseUrl}/imovel-${codigo}`;
}

/**
 * Compare two slugs semantically (word-order agnostic)
 * This handles cases like "vila-olimpia-prime-offices" vs "prime-offices-vila-olimpia"
 * @param {string} slug1 - First slug to compare
 * @param {string} slug2 - Second slug to compare
 * @returns {boolean} - True if slugs are semantically equivalent
 */
export function areSlugsSemanticallyEquivalent(slug1, slug2) {
  if (!slug1 || !slug2) return false;
  
  // Normalize both slugs first
  const normalized1 = normalizeSlug(slug1);
  const normalized2 = normalizeSlug(slug2);
  
  // If exact match after normalization, they're equivalent
  if (normalized1 === normalized2) {
    return true;
  }
  
  // If either is null/invalid, not equivalent
  if (!normalized1 || !normalized2) {
    return false;
  }
  
  // Split into words and compare sets (order-independent)
  const words1 = new Set(normalized1.split('-').filter(w => w.length > 0));
  const words2 = new Set(normalized2.split('-').filter(w => w.length > 0));
  
  // If different number of words, not equivalent
  if (words1.size !== words2.size) {
    return false;
  }
  
  // Check if all words match (order-independent)
  for (const word of words1) {
    if (!words2.has(word)) {
      return false;
    }
  }
  
  return true;
}

/**
 * Check if a URL should be indexed (not a redirect/temporary page)
 * @param {object} property - Property object
 * @returns {boolean} - True if should be indexed
 */
export function shouldIndexProperty(property) {
  // Don't index if missing essential data (soft 404)
  if (!property.Empreendimento || !property.Categoria || !property.Cidade) {
    return false;
  }
  
  // Don't index if deleted/removed
  if (property.Situacao && 
      (property.Situacao.toLowerCase().includes('removido') || 
       property.Situacao.toLowerCase().includes('deletado'))) {
    return false;
  }
  
  // CRITICAL FIX: Check if slug can be normalized instead of checking raw validity
  // This allows properties with slugs that can be fixed (e.g., double dashes) to be indexed
  // The middleware will normalize the slug before serving the page
  const normalizedSlug = normalizeSlug(property.Slug);
  if (!normalizedSlug) {
    // If slug can't be normalized, check if we can generate one from Empreendimento
    if (property.Empreendimento && property.Codigo) {
      // Can generate slug from Empreendimento, so property is indexable
      return true;
    }
    return false;
  }
  
  return true;
}

// Export constants for use in other files
export { INVALID_SLUGS, INVALID_KEYWORDS };

