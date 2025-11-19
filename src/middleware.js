// middleware.js - VERSÃO CORRIGIDA: Imóveis Vendidos OK | Condomínios OK | Deletados → HOME + CORREÇÕES GSC
import { NextResponse } from "next/server";
import { getCityValidSlugsSync, converterSlugCidadeSync } from "@/app/utils/url-slugs";
import { getSlugFromCache } from "@/app/utils/slug-cache";

// Reserved slugs that should NOT be cached (always check database)
const RESERVED_SLUGS = ['busca', 'sobre', 'contato', 'admin', 'api', 'sitemap.xml', 'robots.txt'];

/**
 * Cache wrapper for getImovelById using new slug cache
 * Returns full response object for backward compatibility
 */
async function getImovelByIdCached(id) {
  console.log('[DEBUG] getImovelByIdCached called with ID:', id);
  
  if (!id) {
    console.error('[SLUG-CACHE] ERROR: getImovelByIdCached called with invalid ID:', id);
    throw new Error('Invalid ID provided to getImovelByIdCached');
  }
  
  try {
    // Use new slug cache system
    const { getImovelById } = await import('@/app/services');
    console.log('[DEBUG] Calling getSlugFromCache for imovel:', id);
    const cacheResult = await getSlugFromCache('imovel', id, getImovelById);
    
    // Log cache result for visibility
    if (cacheResult.fromCache) {
      console.log(`[SLUG-CACHE] HIT: imovel:${id}`);
    } else {
      console.log(`[SLUG-CACHE] MISS: imovel:${id} → Fetched from DB, now cached`);
    }
    
    // Return response in expected format { data: {...} }
    if (cacheResult.exists && cacheResult.data) {
      return { data: cacheResult.data };
    } else {
      // Property doesn't exist - return null to trigger 404
      return null;
    }
  } catch (error) {
    // If error is 404, return null instead of throwing
    if (error.response?.status === 404 || error.statusCode === 404) {
      return null;
    }
    console.error(`[SLUG-CACHE] Error fetching imovel:${id}:`, error);
    throw error;
  }
}

/**
 * Cache wrapper for getCondominioPorSlug using new slug cache
 * Returns full response object for backward compatibility
 */
async function getCondominioPorSlugCached(slug) {
  console.log('[DEBUG] getCondominioPorSlugCached called with slug:', slug);
  
  if (!slug) {
    console.error('[SLUG-CACHE] ERROR: getCondominioPorSlugCached called with invalid slug:', slug);
    throw new Error('Invalid slug provided to getCondominioPorSlugCached');
  }
  
  // Skip cache for reserved slugs (always check database)
  if (RESERVED_SLUGS.includes(slug.toLowerCase())) {
    console.log(`[SLUG-CACHE] Reserved slug detected, skipping cache: ${slug}`);
    const { getCondominioPorSlug } = await import('@/app/services');
    const response = await getCondominioPorSlug(slug);
    return response;
  }
  
  try {
    // Use new slug cache system
    const { getCondominioPorSlug } = await import('@/app/services');
    console.log('[DEBUG] Calling getSlugFromCache for condominio:', slug);
    const cacheResult = await getSlugFromCache('condominio', slug, getCondominioPorSlug);
    
    // Log cache result for visibility
    if (cacheResult.fromCache) {
      console.log(`[SLUG-CACHE] HIT: condominio:${slug}`);
    } else {
      console.log(`[SLUG-CACHE] MISS: condominio:${slug} → Fetched from DB, now cached`);
    }
    
    // Handle redirects (301 status)
    if (cacheResult.redirect) {
      return {
        status: 301,
        statusCode: 301,
        redirect: cacheResult.redirect,
        data: null,
      };
    }
    
    // Return response in expected format { data: {...}, imoveisRelacionados: [...] }
    if (cacheResult.exists && cacheResult.data) {
      // Preserve imoveisRelacionados if present
      return {
        data: cacheResult.data.data || cacheResult.data,
        imoveisRelacionados: cacheResult.data.imoveisRelacionados || [],
        statusCode: 200,
      };
    } else {
      // Condominium doesn't exist - return null to trigger 404
      return null;
    }
  } catch (error) {
    // If error is 404, return null instead of throwing
    if (error.response?.status === 404 || error.statusCode === 404) {
      return null;
    }
    console.error(`[SLUG-CACHE] Error fetching condominio:${slug}:`, error);
    throw error;
  }
}

export async function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname, origin, searchParams } = url;
  const userAgent = request.headers.get('user-agent') || '';
  const siteBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.npiconsultoria.com.br';

  const suspiciousIndicators = ['token', 'key', 'hash', 'auth', 'session', 'signature', 'sig', 'access', 'secret'];
  const hasSuspiciousQuery = (() => {
    for (const [rawKey, rawValue] of searchParams.entries()) {
      const key = rawKey?.toLowerCase() || '';
      const value = rawValue?.toLowerCase() || '';
      if (!key && !value) continue;
      if (suspiciousIndicators.some((indicator) => key.includes(indicator))) {
        return true;
      }
      if (suspiciousIndicators.some((indicator) => value.includes(indicator))) {
        return true;
      }
      const cleanedValue = rawValue?.trim() || '';
      if (cleanedValue && cleanedValue.length >= 24 && /^[a-z0-9_-]+$/i.test(cleanedValue)) {
        return true;
      }
    }
    return false;
  })();
  const isRestrictedPath = pathname.startsWith('/admin') || pathname.startsWith('/api') || pathname.startsWith('/_next');

  // FAST-PATH: Normalize Next.js image optimizer requests to prevent INVALID_IMAGE_OPTIMIZE_REQUEST 400
  if (pathname === '/_next/image') {
    try {
      const rawImageUrl = url.searchParams.get('url');
      if (!rawImageUrl) {
        return NextResponse.next();
      }

      const cleanUrl = new URL(request.url);
      let searchChanged = false;

      const IMAGE_DEVICE_SIZES = [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2560, 3200, 3840];
      const DEFAULT_WIDTH = 1920;
      const DEFAULT_QUALITY = 75;

      // Ensure width and quality are safe integers (Next.js requires them)
      const widthParam = url.searchParams.get('w');
      const qualityParam = url.searchParams.get('q');

      if (widthParam) {
        const widthValue = parseInt(widthParam, 10);
        if (Number.isNaN(widthValue) || widthValue <= 0) {
          cleanUrl.searchParams.set('w', DEFAULT_WIDTH.toString());
          searchChanged = true;
        } else {
          const closestWidth = IMAGE_DEVICE_SIZES.reduce((prev, curr) => {
            return Math.abs(curr - widthValue) < Math.abs(prev - widthValue) ? curr : prev;
          }, IMAGE_DEVICE_SIZES[IMAGE_DEVICE_SIZES.length - 1]);

          if (closestWidth !== widthValue) {
            searchChanged = true;
          }

          cleanUrl.searchParams.set('w', closestWidth.toString());
        }
      } else {
        cleanUrl.searchParams.set('w', DEFAULT_WIDTH.toString());
        searchChanged = true;
      }

      if (qualityParam) {
        const qualityValue = parseInt(qualityParam, 10);
        if (Number.isNaN(qualityValue) || qualityValue < 1 || qualityValue > 100) {
          cleanUrl.searchParams.set('q', DEFAULT_QUALITY.toString());
          searchChanged = true;
        } else {
          cleanUrl.searchParams.set('q', qualityValue.toString());
        }
      } else {
        cleanUrl.searchParams.set('q', DEFAULT_QUALITY.toString());
        searchChanged = true;
      }

      // Always re-set url param so it gets properly encoded
      cleanUrl.searchParams.set('url', rawImageUrl);
      if (cleanUrl.search !== url.search) {
        searchChanged = true;
      }

      // Only redirect when something changed (prevents loops)
      if (searchChanged) {
        console.log(`[IMAGE-FIX] Normalizando requisição _next/image: ${pathname}${url.search} → ${cleanUrl.pathname}${cleanUrl.search}`);
        const redirectResponse = NextResponse.redirect(cleanUrl, 301);
        redirectResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        ensureRedirectNoIndex(redirectResponse);
        return redirectResponse;
      }

      return NextResponse.next();
    } catch (error) {
      console.error('[IMAGE-FIX] Erro ao processar _next/image:', error);
      return NextResponse.next();
    }
  }

  const buildCanonicalUrl = (baseOrigin, path, params = null) => {
    const canonical = new URL(path, baseOrigin);
    canonical.search = '';
    if (params) {
      for (const [key, value] of params.entries()) {
        canonical.searchParams.append(key, value);
      }
    }
    return canonical.toString();
  };
  const create404Response = (path = pathname, params = null) => {
    const rewriteUrl = new URL('/404', origin);
    const response404 = NextResponse.rewrite(rewriteUrl, { status: 404 });
    response404.headers.set('X-Robots-Tag', 'noindex, nofollow');
    response404.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
    return response404;
  };

  const ensureRedirectNoIndex = (redirectResponse) => {
    redirectResponse.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return redirectResponse;
  };

  const normalizeCanonicalToSiteOrigin = (rawUrl) => {
    if (!rawUrl) return null;
    try {
      const parsed = new URL(rawUrl);
      const canonicalUrl = new URL(`${parsed.pathname}${parsed.search}`, siteBaseUrl);
      return canonicalUrl.toString();
    } catch (error) {
      try {
        const fallback = new URL(rawUrl, siteBaseUrl);
        fallback.hash = '';
        return fallback.toString();
      } catch {
        return rawUrl;
      }
    }
  };


  const normalizeFinalidadeToken = (valor) => {
    if (!valor) return '';
    const token = valor.toString().trim().toLowerCase();
    if (['alugar', 'aluguel', 'locacao', 'locação', 'locaçao'].some((v) => token.includes(v))) {
      return 'locacao';
    }
    if (['comprar', 'compra', 'venda', 'vender'].some((v) => token.includes(v))) {
      return 'venda';
    }
    return token;
  };

  const buildSearchServiceParams = (params) => {
    const serviceParams = {};

    const setDirect = (paramName, targetName = paramName) => {
      if (params.has(paramName)) {
        const value = params.get(paramName)?.trim();
        if (value) {
          serviceParams[targetName] = value;
        }
      }
    };

    setDirect('categoria');
    setDirect('tipo');
    setDirect('cidade');
    setDirect('quartos');
    setDirect('banheiros');
    setDirect('vagas');
    setDirect('q', 'busca');

    if (params.has('precoMin')) {
      const value = params.get('precoMin')?.trim();
      if (value) serviceParams.precoMinimo = value;
    }
    if (params.has('precoMax')) {
      const value = params.get('precoMax')?.trim();
      if (value) serviceParams.precoMaximo = value;
    }
    if (params.has('areaMin')) {
      const value = params.get('areaMin')?.trim();
      if (value) serviceParams.areaMinima = value;
    }
    if (params.has('areaMax')) {
      const value = params.get('areaMax')?.trim();
      if (value) serviceParams.areaMaxima = value;
    }

    if (params.has('finalidade')) {
      const token = normalizeFinalidadeToken(params.get('finalidade'));
      if (token === 'locacao') {
        serviceParams.finalidade = 'locacao';
        serviceParams.status = 'locacao';
        serviceParams.tipoNegocio = 'locacao';
        serviceParams.negocio = 'locacao';
        serviceParams.modalidade = 'locacao';
      } else if (token) {
        serviceParams.finalidade = 'venda';
        serviceParams.status = 'venda';
        serviceParams.tipoNegocio = 'venda';
      }
    }

    const bairrosList = params.getAll('bairros')
      .map((value) => value?.trim())
      .filter(Boolean);
    if (bairrosList.length) {
      serviceParams.bairrosArray = Array.from(new Set(bairrosList));
    }

    return serviceParams;
  };

  let canonicalParamsForLink = null;
  let canonicalPathForLink = pathname;
  let canonicalUrlOverride = null;

  // FIXED: Handle OPTIONS requests for CORS preflight (prevent 403)
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  // FIXED: Allow HEAD requests for crawlers (prevent 403)
  if (request.method === 'HEAD') {
    return NextResponse.next();
  }

  // FIXED: Skip static files and Next.js internal routes
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap') ||
    pathname.match(/\.(ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot)$/i)
  ) {
    if (pathname.endsWith('/') && pathname.length > 1) {
      const withoutTrailingSlash = pathname.slice(0, -1);
      console.log(`[TRAILING-SLASH] Normalizing static/internal route: ${pathname} → ${withoutTrailingSlash}`);
      const redirectUrl = new URL(withoutTrailingSlash, origin);
      url.searchParams.forEach((value, key) => {
        redirectUrl.searchParams.set(key, value);
      });
      const redirectResponse = NextResponse.redirect(redirectUrl, 301);
      ensureRedirectNoIndex(redirectResponse);
      return redirectResponse;
    }
    return NextResponse.next();
  }

  if (pathname.startsWith('/_next')) {
    if (pathname.endsWith('/') && pathname.length > 1) {
      const withoutTrailingSlash = pathname.slice(0, -1);
      console.log(`[TRAILING-SLASH] Normalizing _next route: ${pathname} → ${withoutTrailingSlash}`);
      const redirectUrl = new URL(withoutTrailingSlash, origin);
      url.searchParams.forEach((value, key) => {
        redirectUrl.searchParams.set(key, value);
      });
      const redirectResponse = NextResponse.redirect(redirectUrl, 301);
      ensureRedirectNoIndex(redirectResponse);
      return redirectResponse;
    }
    return NextResponse.next();
  }

  // CRITICAL FIX: Handle legacy URLs EARLY (before Next.js redirects can process them)
  // This prevents redirect chains and ensures proper 410 Gone responses for GSC
  // MUST check ORIGINAL pathname FIRST to catch trailing slashes before Next.js processes them
  
  // Helper function to create 410 response with self-referencing canonical
  // This prevents GSC "Duplicate without user-selected canonical" and "Blocked due to access forbidden (403)" issues
  const create410Response = (requestUrl) => {
    const fullUrl = requestUrl.toString();
    return new NextResponse(null, { 
      status: 410,
      headers: { 
        'Cache-Control': 'public, max-age=2592000', // Cache for 30 days
        'X-Robots-Tag': 'noindex, nofollow' // Prevent indexing of deleted content
      }
    });
  };
  
  // CRITICAL: Check ORIGINAL pathname FIRST (before normalization) to catch trailing slashes
  // This prevents Next.js from doing 308 redirects before we can handle them
  // Pattern: /something.php/, /something.swf/, /something.asp/, /something.aspx/ (with trailing slash)
  const legacyFileWithTrailingSlash = pathname.match(/\.(php|swf|asp|aspx)\/$/i);
  if (legacyFileWithTrailingSlash) {
    console.log(`[LEGACY-URL] Legacy file com trailing slash detectado: ${pathname} → 410 Gone (evita 308)`);
    return create410Response(url);
  }
  
  // Pattern: /iConatusIframe/iframe.php/, /testeIframe/iframe.php/ (with trailing slash)
  const legacyIframeWithTrailingSlash = pathname.match(/^\/(testeIframe|iConatusIframe)\/.*\.(php|swf|asp|aspx)\/$/i);
  if (legacyIframeWithTrailingSlash) {
    console.log(`[LEGACY-URL] Legacy iframe com trailing slash detectado: ${pathname} → 410 Gone (evita 308)`);
    return create410Response(url);
  }
  
  // Normalize: remove trailing slash (but keep root pathname as '/')
  const normalizedPathname = pathname.length > 1 && pathname.endsWith('/') 
    ? pathname.slice(0, -1) 
    : pathname;
  
  // Pattern 1: Legacy iframe URLs (iConatusIframe, testeIframe) - handles without trailing slash
  const legacyIframeMatch = normalizedPathname.match(/^\/(testeIframe|iConatusIframe)(\/.*)?$/i);
  if (legacyIframeMatch) {
    console.log(`[LEGACY-URL] Iframe legacy detectado: ${pathname} → 410 Gone`);
    return create410Response(url);
  }
  
  // Pattern 2: Legacy PHP files (iframe.php, busca.php, index.php, guest.vary.php, etc.)
  // Matches any path that contains .php file (including nested paths like /iConatusIframe/iframe.php)
  const legacyPhpMatch = normalizedPathname.match(/\.php(\/.*)?$/i);
  if (legacyPhpMatch) {
    console.log(`[LEGACY-URL] PHP legacy detectado: ${pathname} → 410 Gone`);
    return create410Response(url);
  }
  
  // Pattern 3: Legacy SWF files
  const legacySwfMatch = normalizedPathname.match(/\.swf(\/.*)?$/i);
  if (legacySwfMatch) {
    console.log(`[LEGACY-URL] SWF legacy detectado: ${pathname} → 410 Gone`);
    return create410Response(url);
  }
  
  // Pattern 4: Legacy ASP/ASPX files
  const legacyAspMatch = normalizedPathname.match(/\.(asp|aspx)(\/.*)?$/i);
  if (legacyAspMatch) {
    console.log(`[LEGACY-URL] ASP/ASPX legacy detectado: ${pathname} → 410 Gone`);
    return create410Response(url);
  }

  console.log(`[MIDDLEWARE] =================== INÍCIO ===================`);
  console.log(`[MIDDLEWARE] Processando: ${pathname}`);
  
  // DEBUG: Log específico para iConatusIframe
  if (pathname.includes('iConatusIframe')) {
    console.log(`[DEBUG-IFRAME] Detectado iConatusIframe: ${pathname}`);
  }
  
  // RASTREAMENTO DETALHADO: URLs problemáticas específicas do CSV
  const urlsProblematicas = [
    'imovel-106524/facebook.com/npiimoveis',
    'imovel-1685/facebook.com/npiimoveis', 
    'imovel-4879/facebook.com/npiimoveis',
    'imovel-106337/instagram.com/npi_imoveis',
    'imovel-106939/indexdata/index.swf'
  ];
  
  const isUrlProblematica = urlsProblematicas.some(url => pathname.includes(url));
  if (isUrlProblematica) {
    console.log(`[MIDDLEWARE] URL PROBLEMÁTICA DETECTADA: ${pathname}`);
    console.log(`[MIDDLEWARE] User-Agent: ${userAgent.substring(0, 100)}`);
    console.log(`[MIDDLEWARE] Is GoogleBot: ${isGoogleBot}`);
    console.log(`[MIDDLEWARE] Referer: ${request.headers.get('referer') || 'N/A'}`);
  }

  // REDIRECTS VERCEL.JSON → MIDDLEWARE (resolver conflito com noindex)
  const REDIRECTS_MAP = {
    '/maison-dor-cobertura-em-moema': '/maison-dor-moema',
    '/rua-bela-cintra-2060': '/edificio-uirapuru-bela-cintra-2060',
    '/rua-luiz-galhanone-528': '/residencial-reserva-do-visconde',
    '/edificio-ritz-vila-nova-conceicao-cobertura': '/condominio-ritz-vila-nova',
    '/ritz-vila-nova': '/condominio-ritz-vila-nova',
    '/maison-jolie-jardins': '/condominio-edificio-maison-jolie',
    '/rua-cacapava-83': '/taormina-jardim-america',
    '//rua-lopes-neto-56': '/royal-palace-itaim-bibi',
    '/sierra-branca-moema-ibijau-229': '/sierra-blanca-moema',
    '/rua-gabriele-dannunzio-183': '/condominio-authentique-campo-belo',
    '/rua-clodomiro-amazonas-1256': '/condominio-san-juan',
    '/condominio-metropolitan': '/metropolitan-ibirapuera',
    '/avenida-antonio-joaquim-de-moura-andrade-597': '/edificio-maison-adriana',
    '/gran-ville-guaruja': '/condominio-granville-enseada',
    '/avenida-marjory-da-silva-prado-2605': '/jardim-pernambuco-ii',
    '/casas-a-venda-no-condominio-granville-guaruja': '/condominio-granville-enseada',
    '/condominio-granville': '/condominio-granville-enseada',
    '/casas-a-venda-na-peninsula-guaruja': '/condominio-peninsula-guaruja-enseada',
    '/avenida-amarilis-50': '/amarilis-50-cidade-jardim',
    '/rua-pedroso-alvarenga-121': '/residencial-piata',
    '/alameda-ministro-rocha-azevedo-1368': '/edificio-guararapes-jardim-america',
    '/edificio-michelangelo': '/edificio-michelangelo-moema',
    '/edificio-isaura': '/edificio-isaura-pinheiros-sao-paulo',
    '/rua-cristiano-viana-1211': '/4x4-pinheiros',
    '/condominio-edificio-villa-adriana': '/edificio-villa-adriana',
    '/avenida-jamaris-603': '/edificio-michelangelo',
    '/east-blue': '/east-blue-residences-tatuape',
    '/casas-em-condominio-gramado': '/casa-punta-gramado-rs',
    '/e-side-vila-madalena-rua-girassol1280': '/e-side-vila-madalena',
    '/edificio-itanhanga-santana': '/condominio-itanhanga',
    '/residencial-azul': '/azul-idea-zarvos',
    '/the-frame-vila-nova': '/the-frame-vila-nova-conceicao',
    '/ibi-ara': '/condominio-ibi-aram',
    '/residencial-jequitibas': '/condominio-portal-do-jequitiba-valinhos',
    '/condominio-campo-de-toscana-vinhedo-enderecobarao-de-iguatemi': '/residencial-campo-de-toscana-vinhedo',
    '/barao-de-iguatemi': '/edificio-barao-de-iguatemi',
    '/residencial-platinum': '/platinum-morumbi',
    '/residencial-malaga': '/malaga-analia-franco',
    '/edificio-tiffany': '/tiffany-analia-franco',
    '/medplex': '/thera-ibirapuera-by-yoo',
    '/residencial-montblanc': '/montblanc-tatuape',
    '/empreendimento-praca-henrique-monteiro': '/praca-henrique-monteiro',
    '/j-h-s-f-fasano-residences-cidade-jardim': '/fasano-cidade-jardim',
    '/rua-sebastiao-cardoso-168': '/condominio-santorini-residencial-club',
    '/condominio-residencial-santorini': '/condominio-santorini-residencial-club',
    '/rua-verbo-divino-1061': '/reserva-granja-julieta',
    '/grand-habitarte-brooklin': '/grand-habitarte',
    '/habitarte-2-brooklin': '/habitarte-2',
    '/one-sixty-vila-olimpia': '/one-sixty',
    '/one-sixty-cyrela-by-yoo': '/one-sixty',
    '/acapulco-guaruja-condominio': '/condominio-jardim-acapulco',
    '/casa-a-venda-condominio-acapulco': '/condominio-jardim-acapulco',
    '/casa-a-venda-jardim-acapulco-guaruja': '/condominio-jardim-acapulco',
    '/residencial-acapulco-guaruja': '/condominio-jardim-acapulco',
    // Adicionar versões com trailing slash
    '/maison-dor-cobertura-em-moema/': '/maison-dor-moema',
    '/condominio-edificio-villa-adriana/': '/edificio-villa-adriana',
    '/avenida-jamaris-603/': '/edificio-michelangelo',
    '/east-blue/': '/east-blue-residences-tatuape',
    '/casas-em-condominio-gramado/': '/casa-punta-gramado-rs',
    '/e-side-vila-madalena-rua-girassol1280/': '/e-side-vila-madalena',
    '/edificio-itanhanga-santana/': '/condominio-itanhanga',
    '/residencial-azul/': '/azul-idea-zarvos',
    '/the-frame-vila-nova/': '/the-frame-vila-nova-conceicao',
    '/ibi-ara/': '/condominio-ibi-aram',
    '/residencial-jequitibas/': '/condominio-portal-do-jequitiba-valinhos',
    '/condominio-campo-de-toscana-vinhedo-enderecobarao-de-iguatemi/': '/residencial-campo-de-toscana-vinhedo',
    '/barao-de-iguatemi/': '/edificio-barao-de-iguatemi',
    '/residencial-platinum/': '/platinum-morumbi',
    '/residencial-malaga/': '/malaga-analia-franco',
    '/edificio-tiffany/': '/tiffany-analia-franco',
    '/medplex/': '/thera-ibirapuera-by-yoo',
    '/residencial-montblanc/': '/montblanc-tatuape',
    '/empreendimento-praca-henrique-monteiro/': '/praca-henrique-monteiro',
    '/j-h-s-f-fasano-residences-cidade-jardim/': '/fasano-cidade-jardim',
    '/rua-sebastiao-cardoso-168/': '/condominio-santorini-residencial-club',
    '/condominio-residencial-santorini/': '/condominio-santorini-residencial-club',
    '/rua-verbo-divino-1061/': '/reserva-granja-julieta',
    '/grand-habitarte-brooklin/': '/grand-habitarte',
    '/habitarte-2-brooklin/': '/habitarte-2',
    '/one-sixty-vila-olimpia/': '/one-sixty',
    '/one-sixty-cyrela-by-yoo/': '/one-sixty',
    '/acapulco-guaruja-condominio/': '/condominio-jardim-acapulco',
    '/casa-a-venda-condominio-acapulco/': '/condominio-jardim-acapulco',
    '/casa-a-venda-jardim-acapulco-guaruja/': '/condominio-jardim-acapulco',
    '/residencial-acapulco-guaruja/': '/condominio-jardim-acapulco',
  };

  // Verificar se pathname está no mapa de redirects
  if (REDIRECTS_MAP[pathname]) {
    const destination = REDIRECTS_MAP[pathname];
    console.log(`[MIDDLEWARE] REDIRECT VERCEL: ${pathname} → ${destination}`);
    const redirectResponse = NextResponse.redirect(new URL(destination, origin), 301);
    ensureRedirectNoIndex(redirectResponse);
    return redirectResponse;
  }

  // REDIRECTS PÁGINAS INSTITUCIONAIS (resolver noindex)
  const INSTITUTIONAL_REDIRECTS = {
    '/nossos-servicos': '/sobre/nossos-servicos',
    '/nossos-servicos/': '/sobre/nossos-servicos',
    '/trabalhe-conosco': '/sobre',
    '/trabalhe-conosco/': '/sobre',
    '/trabalhe-conosco/trabalhe-na-npi-imoveis-2': '/sobre',
    '/trabalhe-conosco/trabalhe-na-npi-imoveis-2/': '/sobre',
    '/nossas-vantagens': '/sobre',
    '/nossas-vantagens/': '/sobre',
  };

  if (INSTITUTIONAL_REDIRECTS[pathname]) {
    const destination = INSTITUTIONAL_REDIRECTS[pathname];
    console.log(`[MIDDLEWARE] REDIRECT INSTITUCIONAL: ${pathname} → ${destination}`);
    const redirectResponse = NextResponse.redirect(new URL(destination, origin), 301);
    ensureRedirectNoIndex(redirectResponse);
    return redirectResponse;
  }

  // CORREÇÃO GSC #1: DETECTAR GOOGLEBOT
  const isGoogleBot = /googlebot|bingbot|slurp|duckduckbot/i.test(userAgent);

  // CORREÇÃO GSC #2: BLOQUEAR _RSC PARAMETERS (CRÍTICO)
  if (searchParams.has('_rsc')) {
    console.log('[GSC] Bloqueando _rsc parameter:', pathname);
    
    // Remove parâmetro _rsc e redireciona
    searchParams.delete('_rsc');
    url.search = searchParams.toString();
    
    const redirectResponse = NextResponse.redirect(url, 301);
    ensureRedirectNoIndex(redirectResponse);
    return redirectResponse;
  }

  // CORREÇÃO GSC #3: BLOQUEAR PARÂMETROS PROBLEMÁTICOS PARA BOTS
  if (isGoogleBot) {
    const problematicParams = ['utm_source', 'utm_medium', 'utm_campaign', 'fbclid', 'gclid', 'ref', 'v', 'cache', 't'];
    let hasProblematicParams = false;
    
    problematicParams.forEach(param => {
      if (searchParams.has(param)) {
        searchParams.delete(param);
        hasProblematicParams = true;
      }
    });
    
    if (hasProblematicParams) {
      url.search = searchParams.toString();
      console.log('[GSC] Removendo parâmetros problemáticos para bot:', pathname);
      const redirectResponse = NextResponse.redirect(url, 301);
      ensureRedirectNoIndex(redirectResponse);
      return redirectResponse;
    }
  }

  // CORREÇÃO GSC #4: BLOQUEAR PATHS PROBLEMÁTICOS PARA BOTS
  const blockedPathsForBots = [
    '/_next/static/chunks/',
    '/_next/static/css/',
    '/_next/static/js/',
    '/_next/data/',
    '/api/'
  ];
  

  if (isGoogleBot && blockedPathsForBots.some(path => pathname.startsWith(path))) {
    console.log('[GSC] Bloqueando path para bot:', pathname);
    return create404Response(pathname);
  }

  // COMPREHENSIVE SEARCH URL FIXES: Handle all malformed search patterns
  
  // PATTERN 1: /busca/amp/ → /busca (AMP pages redirect to main search)
  if (pathname.startsWith('/busca/amp')) {
    console.log(`[MIDDLEWARE] AMP search redirect: ${pathname} → /busca`);
    const cleanUrl = new URL('/busca', origin);
    // Preserve query parameters
    url.searchParams.forEach((value, key) => {
      if (value) cleanUrl.searchParams.set(key, value);
    });
    const redirectResponse = NextResponse.redirect(cleanUrl, 301);
    ensureRedirectNoIndex(redirectResponse);
    return redirectResponse;
  }
  
  // PATTERN 2: Legacy search patterns like /busca/Brooklin, /busca/Pinheiros
  const legacySearchMatch = pathname.match(/^\/busca\/([^\/\?]+)(?:\/)?$/);
  if (legacySearchMatch) {
    const [, neighborhood] = legacySearchMatch;
    console.log(`[MIDDLEWARE] Legacy search pattern: ${pathname} → /busca`);
    const cleanUrl = new URL('/busca', origin);
    cleanUrl.searchParams.set('bairro', neighborhood);
    // Preserve other query parameters
    url.searchParams.forEach((value, key) => {
      if (value && key !== 'bairro') cleanUrl.searchParams.set(key, value);
    });
    const redirectResponse = NextResponse.redirect(cleanUrl, 301);
    ensureRedirectNoIndex(redirectResponse);
    return redirectResponse;
  }
  
  // PATTERN 3: Malformed search URLs with old array syntax and empty params
  if (pathname.startsWith('/busca/venda/') || pathname.startsWith('/busca/aluguel/') || pathname.startsWith('/busca/compra/')) {
    console.log(`[MIDDLEWARE] Malformed search URL: ${pathname} → /busca`);
    const cleanUrl = new URL('/busca', origin);
    
    // Extract parameters from path and convert to query params
    const pathParts = pathname.split('/').filter(p => p && p !== 'busca');
    if (pathParts.length >= 3) {
      const [finalidade, tipo, cidade] = pathParts;
      cleanUrl.searchParams.set('finalidade', finalidade);
      cleanUrl.searchParams.set('tipo', tipo);
      cleanUrl.searchParams.set('cidade', cidade);
      
      // Handle additional path segments (neighborhoods, zones)
      if (pathParts.length > 3) {
        const additional = pathParts.slice(3).join(' ');
        cleanUrl.searchParams.set('bairro', additional);
      }
    }
    
    // Preserve existing query parameters, converting array syntax
    url.searchParams.forEach((value, key) => {
      // Skip emp_cod_end
      if (key === 'emp_cod_end') {
        return;
      }
      
      // Convert array syntax parameters (bairro[0], cidade[0], etc.) to proper format
      const arrayMatch = key.match(/^([a-zA-Z]+)\[(\d*)\]$/);
      if (arrayMatch) {
        const [, baseKey] = arrayMatch;
        if (value) {
          // For bairro[0], bairro[1], etc. → bairros
          if (baseKey === 'bairro' || baseKey === 'bairros') {
            cleanUrl.searchParams.append('bairros', value);
          } else {
            // For other array parameters, use base key
            cleanUrl.searchParams.set(baseKey, value);
          }
        }
        return;
      }
      
      // Preserve other valid parameters
      if (value) {
        cleanUrl.searchParams.set(key, value);
      }
    });
    
    const redirectResponse = NextResponse.redirect(cleanUrl, 301);
    ensureRedirectNoIndex(redirectResponse);
    return redirectResponse;
  }
  
  // PATTERN 4: Standard /busca canonical cleanup
  if (pathname === '/busca' || pathname === '/busca/') {
    // Skip if already processed to prevent loops
    if (request.headers.get('x-canonical-fixed')) {
      return NextResponse.next();
    }
    
    let hasCanonicalIssues = false;
    const cleanParams = new URLSearchParams();
    
    // Helper function to convert array syntax to proper parameter
    const normalizeValueEncoding = (input) => {
      if (typeof input !== 'string' || input.length === 0) return input;
      try {
        // Decode once to collapse existing encoding, then re-encode via URLSearchParams later
        const decoded = decodeURIComponent(input);
        return decoded;
      } catch {
        return input;
      }
    };

    const convertArraySyntax = (key, value) => {
      // Match patterns like bairro[0], bairro[1], bairro[], cidade[0], etc.
      const arrayMatch = key.match(/^([a-zA-Z]+)\[(\d*)\]$/);
      if (arrayMatch) {
        const [, baseKey, index] = arrayMatch;
        // Convert to standard parameter name
        // For bairro[0], bairro[1], etc. → bairros (comma-separated or use base key)
        if (baseKey === 'bairro' || baseKey === 'bairros') {
          return { key: 'bairros', value };
        }
        // For other array parameters, use base key
        return { key: baseKey, value };
      }
      return null;
    };
    
    // Limpar parâmetros duplicados e vazios
    for (const [key, rawValue] of searchParams) {
      const value = normalizeValueEncoding(rawValue);
      
      // Skip emp_cod_end (always problematic)
      if (key === 'emp_cod_end') {
        hasCanonicalIssues = true;
        continue;
      }
      
      // Convert array syntax parameters (bairro[0], cidade[0], etc.) to proper format
      const arrayConverted = convertArraySyntax(key, value);
      if (arrayConverted) {
        hasCanonicalIssues = true; // Conversion needed
        // If value exists, add the converted parameter
        if (arrayConverted.value) {
          // For bairros, handle multiple values
          if (arrayConverted.key === 'bairros') {
            const existingBairros = cleanParams.getAll('bairros');
            if (!existingBairros.includes(arrayConverted.value)) {
              cleanParams.append('bairros', arrayConverted.value);
            }
          } else {
            // For other parameters, use set (overwrite if exists)
            cleanParams.set(arrayConverted.key, arrayConverted.value);
          }
        }
        continue;
      }
      
      // Handle empty parameters intelligently
      if (!value) {
        // Allow empty values for UI state parameters (no redirect needed)
        const allowedEmptyParams = ['pagina', 'listagem', 'ordenar'];
        if (allowedEmptyParams.includes(key)) {
          // Silently remove empty UI state params (don't set hasCanonicalIssues)
          continue;
        }
        // For other empty params, mark as issue but don't include in clean params
        hasCanonicalIssues = true;
        continue;
      }
      
      // Handle duplicate ordenar parameter
      if (key === 'ordenar' && cleanParams.has('ordenar')) {
        hasCanonicalIssues = true;
        continue; // Skip ordenar duplicado
      }
      
      // Manter parâmetros válidos (including empty pagina/listagem)
      if (value || ['pagina', 'listagem'].includes(key)) {
        cleanParams.set(key, value);
      }
    }
    
    // Se há problemas canônicos, processar de forma inteligente
    if (hasCanonicalIssues || pathname === '/busca/') {
      const cleanUrl = new URL('/busca', origin);
      cleanParams.forEach((value, key) => {
        cleanUrl.searchParams.set(key, value);
      });
      
      // Check if the cleaned URL is actually different from the original
      const currentSearch = url.search || '';
      const cleanSearch = cleanUrl.search || '';
      
      // Also check if the cleaned URL is different from what we're currently processing
      if (currentSearch !== cleanSearch || pathname === '/busca/') {
        // CRITICAL FIX: Use 301 redirect for query normalization to ensure single canonical URL
        // This prevents GSC "Duplicate without user-selected canonical" issues
        // The browser URL will change to the canonical version, ensuring consistent canonical tags
        console.log(`[CANONICAL-FIX] Canonical normalization redirect (301): ${pathname}${url.search} → ${cleanUrl.pathname}${cleanUrl.search}`);
        const redirectResponse = NextResponse.redirect(cleanUrl, 301);
        redirectResponse.headers.set('x-canonical-fixed', '1');
        ensureRedirectNoIndex(redirectResponse);
        return redirectResponse;
      }
    }
    
    // If no canonical issues and not already fixed, continue
    if (pathname === '/busca' && !request.headers.get('x-canonical-fixed')) {
      // No issues, continue normally
    }

    canonicalParamsForLink = new URLSearchParams();
    cleanParams.forEach((value, key) => {
      canonicalParamsForLink.append(key, value);
    });
    canonicalPathForLink = '/busca';

    const paginaValue = canonicalParamsForLink.get('pagina');
    const paginaNumber = paginaValue ? parseInt(paginaValue, 10) : 1;

    if (paginaNumber && paginaNumber > 1) {
      try {
        const searchServiceParams = buildSearchServiceParams(canonicalParamsForLink);
        const { getImoveis } = await import('@/app/services');
        const searchData = await getImoveis(searchServiceParams, 1, 12);
        const totalPages = searchData?.pagination?.totalPages || 1;
        const totalItems = searchData?.pagination?.totalItems || 0;

        if (paginaNumber > totalPages) {
          canonicalParamsForLink.delete('pagina');
          const redirectUrl = new URL('/busca', origin);
          canonicalParamsForLink.forEach((value, key) => {
            redirectUrl.searchParams.append(key, value);
          });

          if (totalPages > 1) {
            redirectUrl.searchParams.set('pagina', totalPages.toString());
            canonicalParamsForLink.set('pagina', totalPages.toString());
          }

          const canonicalRedirectUrl = redirectUrl.toString();
          console.log(`[MIDDLEWARE] Paginação fora do limite (pagina=${paginaNumber}) → ${canonicalRedirectUrl}`);
          const redirectResponse = NextResponse.redirect(redirectUrl, 301);
          redirectResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
          ensureRedirectNoIndex(redirectResponse);
          return redirectResponse;
        }
      } catch (error) {
        console.error('[MIDDLEWARE] Erro ao validar paginação da busca:', error);
      }
    }

    if (canonicalParamsForLink.get('pagina') === '1') {
      canonicalParamsForLink.delete('pagina');
    }

    if (!canonicalUrlOverride) {
      canonicalUrlOverride = buildCanonicalUrl(origin, canonicalPathForLink, canonicalParamsForLink);
    }
  }
  /* 
  ESTRATÉGIA SEO OTIMIZADA (MANTIDA):
  
  1. IMÓVEIS VENDIDOS → Páginas funcionam NORMALMENTE (não redirecionar!)
  2. CONDOMÍNIOS → Páginas funcionam NORMALMENTE (/slug-condominio)
  3. IMÓVEIS DELETADOS (não existem no banco) → Redirect 301 para HOME
  4. URLs MALFORMADAS → HOME 
  5. URLs SEO INVÁLIDAS → HOME
  6. TRAILING SLASHES → Versão sem trailing slash
  
  IMPORTANTE: 
  - Só redirecionar quando imóvel NÃO EXISTE no banco!
  - Permitir páginas de condomínio (pattern: /slug-nome)
  */

  // MELHORIA: URLs com caracteres especiais ou malformadas → HOME
  try {
    // Teste se a URL é válida
    decodeURIComponent(pathname);
  } catch (error) {
    // OPTIMIZED: URL malformada → 400 Bad Request (not redirect)
    console.log(`[MIDDLEWARE] URL malformada → 400: ${pathname}`);
    return new NextResponse(null, { status: 400 });
  }

  // CORREÇÃO GSC: TRATAMENTO UNIFICADO DE IMÓVEIS (elimina cascata de redirects)

  // CRITICAL FIX: Handle malformed URLs with missing/invalid IDs EARLY
  // This prevents GSC "Duplicate without user-selected canonical" issues
  // Must be BEFORE other imovel patterns to catch these early

  // Pattern 0: /imovel-/slug (ID ausente após hífen) → 404
  // Check this FIRST before any other imovel patterns to prevent GSC duplicate canonical issues
  // This catches URLs like /imovel-/ambar-jardins where ID is missing
  const imovelIDausenteEarlyMatch = pathname.match(/^\/imovel-\/(.+)$/);
  if (imovelIDausenteEarlyMatch) {
    console.log(`[MALFORMED-URL] ID ausente após hífen (early): ${pathname} → 404`);
    return create404Response(pathname);
  }
  
  // Pattern 0b: /imovel-/ (apenas hífen, sem ID nem slug) → 404
  if (pathname === '/imovel-/') {
    console.log(`[MALFORMED-URL] Apenas hífen sem ID nem slug: ${pathname} → 404`);
    return create404Response(pathname);
  }
  
  // Pattern 0c: /imovel--/slug (double dash without ID) → 404
  const imovelDoubleDashMatch = pathname.match(/^\/imovel--\/(.+)$/);
  if (imovelDoubleDashMatch) {
    console.log(`[MALFORMED-URL] Double dash sem ID: ${pathname} → 404`);
    return create404Response(pathname);
  }
  
  // Pattern 0d: /imovel- /slug (space after dash) → 404
  const imovelSpaceAfterDashMatch = pathname.match(/^\/imovel-\s+\/(.+)$/);
  if (imovelSpaceAfterDashMatch) {
    console.log(`[MALFORMED-URL] Espaço após hífen: ${pathname} → 404`);
    return create404Response(pathname);
  }
  
  // Pattern 0e: /imovel-{non-numeric}/slug → 404 (catches /imovel-abc/slug, /imovel-123abc/slug, etc.)
  // This is a catch-all for any /imovel- pattern that doesn't start with a valid numeric ID
  // CRITICAL: Must come BEFORE the valid /imovel-(\d+)/ pattern to catch these early
  const imovelNonNumericMatch = pathname.match(/^\/imovel-([^0-9\/][^\/]*)\/(.+)$/);
  if (imovelNonNumericMatch) {
    console.log(`[MALFORMED-URL] ID não numérico após hífen: ${pathname} → 404`);
    return create404Response(pathname);
  }
  
  // Pattern 0f: /imovel-{non-numeric} (without slug) → 404
  const imovelNonNumericNoSlugMatch = pathname.match(/^\/imovel-([^0-9\/][^\/]*)$/);
  if (imovelNonNumericNoSlugMatch) {
    console.log(`[MALFORMED-URL] ID não numérico sem slug: ${pathname} → 404`);
    return create404Response(pathname);
  }
  
  // CRITICAL FIX: Handle malformed URLs with invalid IDs (undefined, null, NaN, etc.)
  // This prevents GSC "Duplicate without user-selected canonical" issues
  // Must be BEFORE other imovel patterns to catch these early
  
  // Pattern 1: /imovel/undefined/... or /imovel/null/... (with or without slug)
  const malformedImovelMatch = pathname.match(/^\/imovel\/(undefined|null|NaN|Infinity|true|false|\s+)(\/.*)?$/i);
  if (malformedImovelMatch) {
    console.log(`[MALFORMED-URL] URL com ID inválido detectada: ${pathname} → 404`);
    return create404Response(pathname);
  }
  
  // Pattern 2: /imovel//slug (double slash - empty ID)
  const doubleSlashMatch = pathname.match(/^\/imovel\/\/(.+)$/);
  if (doubleSlashMatch) {
    console.log(`[MALFORMED-URL] URL com double slash (ID vazio): ${pathname} → 404`);
    return create404Response(pathname);
  }
  
  // Pattern 3: /imovel/0/slug (zero as ID - likely invalid)
  const zeroIdMatch = pathname.match(/^\/imovel\/0\/(.+)$/);
  if (zeroIdMatch) {
    console.log(`[MALFORMED-URL] URL com ID zero: ${pathname} → 404`);
    return create404Response(pathname);
  }
  
  // PATTERN 1: /imovel/ID/slug → /imovel-ID/slug (formato incorreto)
  const formatoErradoMatch = pathname.match(/^\/imovel\/(\d+)\/(.+)$/);
  if (formatoErradoMatch) {
    const [, id, incomingSlug] = formatoErradoMatch;
    
    // FIXED: Validate slug before redirecting to prevent cascading redirects
    const invalidKeywords = ['facebook.com', 'instagram.com', 'linkedin.com', 'twitter.com', 'youtube.com', '.swf', '.php', 'iframe'];
    const hasInvalidKeyword = invalidKeywords.some(keyword => incomingSlug.toLowerCase().includes(keyword));
    
    if (hasInvalidKeyword) {
      console.log(`[MIDDLEWARE] Formato incorreto com slug inválido: ${pathname} → 404`);
      return create404Response(pathname);
    }
    
    // CRITICAL FIX: Use same normalization logic as PATTERN 3 to prevent redirect chain
    try {
      const response = await getImovelByIdCached(id);
      if (response?.data) {
        const imovel = response.data;
        const { shouldIndexProperty, normalizeSlug, areSlugsSemanticallyEquivalent } = await import('@/app/utils/slug-validator');
        if (!shouldIndexProperty(imovel)) {
          console.log(`[MIDDLEWARE] Imóvel ${id} não deve ser indexado (redirect pattern) → 404`);
          return create404Response(pathname);
        }
        
        // Use EXACT same logic as PATTERN 3 to ensure no redirect chain
        let normalizedDatabaseSlug = normalizeSlug(imovel.Slug);
        if (!normalizedDatabaseSlug && imovel.Empreendimento) {
          normalizedDatabaseSlug = imovel.Empreendimento
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
            || `imovel-${id}`;
        } else if (!normalizedDatabaseSlug) {
          normalizedDatabaseSlug = `imovel-${id}`;
        }
        
        // CRITICAL: Check if incoming slug is already semantically equivalent to canonical
        // If so, redirect to exact canonical (prevents PATTERN 3 from redirecting again)
        const normalizedIncomingSlug = normalizeSlug(incomingSlug) || incomingSlug;
        const isSemanticallyEquivalent = areSlugsSemanticallyEquivalent(incomingSlug, normalizedDatabaseSlug);
        
        // Always redirect to exact canonical slug (same as PATTERN 3 expects)
        const formatoCorreto = `/imovel-${id}/${normalizedDatabaseSlug}`;
        console.log(`[MIDDLEWARE] Formato incorreto (consolidado): ${pathname} → ${formatoCorreto}`);
        const redirectResponse = NextResponse.redirect(new URL(formatoCorreto, origin), 301);
        // CRITICAL FIX: Add cache headers for permanent redirects
        redirectResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        ensureRedirectNoIndex(redirectResponse);
        return redirectResponse;
      } else {
        console.log(`[MIDDLEWARE] Imóvel ${id} não encontrado ao normalizar formato incorreto → 404`);
        return create404Response(pathname);
      }
    } catch (error) {
      console.error(`[MIDDLEWARE] Erro ao obter slug canônico para imóvel ${id}:`, error);
      return create404Response(pathname);
    }
  }
  
  // PATTERN 2: /imovel/ID (sem slug, formato incorreto) → /imovel-ID/slug (CONSOLIDATED to prevent redirect chain)
  const formatoErradoSemSlugMatch = pathname.match(/^\/imovel\/(\d+)$/);
  if (formatoErradoSemSlugMatch) {
    const id = formatoErradoSemSlugMatch[1];
    console.log(`[MIDDLEWARE] Formato incorreto sem slug: ${pathname} → Buscando slug para redirecionamento direto`);
    
    try {
      const response = await getImovelByIdCached(id);
      
      if (response?.data) {
        const imovel = response.data;
        const { normalizeSlug, shouldIndexProperty } = await import('@/app/utils/slug-validator');

        if (!shouldIndexProperty(imovel)) {
          console.log(`[MIDDLEWARE] Imóvel ${id} não deve ser indexado → 404`);
          return create404Response(pathname);
        }

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
        
        // CRITICAL FIX: Redirect directly to slugged URL (prevents redirect chain)
        const correctUrl = `/imovel-${id}/${slugBasico}`;
        console.log(`[MIDDLEWARE] Redirecionamento consolidado: ${pathname} → ${correctUrl}`);
        const redirectResponse = NextResponse.redirect(new URL(correctUrl, origin), 301);
        redirectResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        ensureRedirectNoIndex(redirectResponse);
        return redirectResponse;
      } else {
        // Property doesn't exist → 404
        console.log(`[MIDDLEWARE] Imóvel ${id} não encontrado → 404`);
        return create404Response(pathname);
      }
    } catch (error) {
      console.error(`[MIDDLEWARE] Erro ao buscar imóvel ${id}:`, error);
      return create404Response(pathname);
    }
  }

  // PATTERN 3: /imovel-ID/slug/ → /imovel-ID/slug (trailing slash) + slug validation
  const imovelComSlugTrailingMatch = pathname.match(/^\/imovel-(\d+)\/(.+)\/$/);
  if (imovelComSlugTrailingMatch) {
    const [, id, slug] = imovelComSlugTrailingMatch;
    
    // Try to validate the slug and redirect to correct one in single step
    try {
      const response = await getImovelByIdCached(id);
      
      if (response?.data) {
        const imovel = response.data;
        // FIXED: Normalize database slug to handle double dashes
        const { normalizeSlug } = await import('@/app/utils/slug-validator');
        const normalizedDatabaseSlug = normalizeSlug(imovel.Slug);
        const normalizedCurrentSlug = normalizeSlug(slug) || slug;
        
        if (normalizedDatabaseSlug && normalizedCurrentSlug !== normalizedDatabaseSlug) {
          // Redirect directly to correct slug (removes trailing slash + fixes slug)
          const correctUrl = `/imovel-${id}/${normalizedDatabaseSlug}`;
          console.log(`[MIDDLEWARE] TRAILING SLASH + SLUG FIX: ${pathname} → ${correctUrl}`);
          const redirectResponse = NextResponse.redirect(new URL(correctUrl, origin), 301);
          // CRITICAL FIX: Add cache headers for permanent redirects
          redirectResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
          ensureRedirectNoIndex(redirectResponse);
          return redirectResponse;
        }
      } else {
        console.log(`[MIDDLEWARE] Imóvel ${id} não encontrado ao ajustar trailing slash → 404`);
        return create404Response(pathname);
      }
    } catch (error) {
      console.error(`[MIDDLEWARE] Erro ao validar slug:`, error);
      return create404Response(pathname);
    }
    
    // If slug is correct, just remove trailing slash
    const semTrailingSlash = `/imovel-${id}/${slug}`;
    console.log(`[MIDDLEWARE] TRAILING SLASH: ${pathname} → ${semTrailingSlash}`);
    const redirectResponse = NextResponse.redirect(new URL(semTrailingSlash, origin), 301);
    // CRITICAL FIX: Add cache headers for permanent redirects
    redirectResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    ensureRedirectNoIndex(redirectResponse);
    return redirectResponse;
  }

  // PATTERN 4: /imovel-ID/ → /imovel-ID/slug (CONSOLIDATED to prevent redirect chain)
  const imovelSemSlugTrailingMatch = pathname.match(/^\/imovel-(\d+)\/$/);
  if (imovelSemSlugTrailingMatch) {
    const id = imovelSemSlugTrailingMatch[1];
    console.log(`[MIDDLEWARE] Trailing slash sem slug: ${pathname} → Buscando slug para redirecionamento direto`);
    
    try {
      const response = await getImovelByIdCached(id);
      
      if (response?.data) {
        const imovel = response.data;
        const { normalizeSlug, shouldIndexProperty } = await import('@/app/utils/slug-validator');

        if (!shouldIndexProperty(imovel)) {
          console.log(`[MIDDLEWARE] Imóvel ${id} não deve ser indexado → 404`);
          return create404Response(pathname);
        }

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
        
        // CRITICAL FIX: Redirect directly to slugged URL (prevents redirect chain)
        const correctUrl = `/imovel-${id}/${slugBasico}`;
        console.log(`[MIDDLEWARE] Redirecionamento consolidado (trailing slash): ${pathname} → ${correctUrl}`);
        const redirectResponse = NextResponse.redirect(new URL(correctUrl, origin), 301);
        redirectResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        ensureRedirectNoIndex(redirectResponse);
        return redirectResponse;
      } else {
        // Property doesn't exist → 404
        console.log(`[MIDDLEWARE] Imóvel ${id} não encontrado → 404`);
        return create404Response(pathname);
      }
    } catch (error) {
      console.error(`[MIDDLEWARE] Erro ao buscar imóvel ${id}:`, error);
      return create404Response(pathname);
    }
  }

  // PATTERN 5: URLs 404 de redes sociais → Redirect to actual social media pages
  const urlRedeSocialMatch = pathname.match(/^\/imovel-(\d+)\/(facebook\.com\/npiimoveis|instagram\.com\/npi_imoveis)$/);
  if (urlRedeSocialMatch) {
    const [, id, socialPath] = urlRedeSocialMatch;
    const socialUrl = `https://${socialPath}`;
    console.log(`[MIDDLEWARE] URL rede social redirect: ${pathname} → ${socialUrl}`);
    
    // Redirect to actual social media page
    const redirectResponse = NextResponse.redirect(socialUrl, 301);
    ensureRedirectNoIndex(redirectResponse);
    return redirectResponse;
  }
  
  // PATTERN 5b: Legacy files (SWF, PHP) → 410 Gone
  const urlLegacyFileMatch = pathname.match(/^\/imovel-(\d+)\/(indexdata\/index\.swf|linkedin\.com|twitter\.com|youtube\.com|\.swf|\.php)$/);
  if (urlLegacyFileMatch) {
    const id = urlLegacyFileMatch[1];
    console.log(`[MIDDLEWARE] URL legacy file 404 (GSC): ${pathname} → 410 Gone`);
    
    // Return 410 Gone for truly deleted legacy files
    const legacyFileUrl = new URL(pathname + url.search, origin);
    return create410Response(legacyFileUrl);
  }

  // FIXED: /imovel-ID (sem slug) → Fetch property and redirect to slugged URL
  // This is necessary because Next.js route structure requires both [id] and [slug]
  const imovelSemSlugMatch = pathname.match(/^\/imovel-(\d+)$/);
  if (imovelSemSlugMatch) {
    const id = imovelSemSlugMatch[1];
    console.log(`[MIDDLEWARE] Imóvel sem slug: ${pathname} → Buscando slug para redirecionamento`);
    
    try {
      const response = await getImovelByIdCached(id);
      
      if (response?.data) {
        const imovel = response.data;
        // FIXED: Normalize database slug to handle double dashes
        const { normalizeSlug, shouldIndexProperty } = await import('@/app/utils/slug-validator');

        if (!shouldIndexProperty(imovel)) {
          console.log(`[MIDDLEWARE] Imóvel ${id} não deve ser indexado → 404`);
          return create404Response(pathname);
        }

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
        
        // Always redirect to slugged URL when accessing /imovel-ID without slug
        const correctUrl = `/imovel-${id}/${slugBasico}`;
        console.log(`[MIDDLEWARE] Redirecionando para URL com slug: ${pathname} → ${correctUrl}`);
        const redirectResponse = NextResponse.redirect(new URL(correctUrl, origin), 301);
        redirectResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        ensureRedirectNoIndex(redirectResponse);
        return redirectResponse;
      } else {
        // Property doesn't exist → 404
        console.log(`[MIDDLEWARE] Imóvel ${id} não encontrado → 404`);
        return create404Response(pathname);
      }
    } catch (error) {
      console.error(`[MIDDLEWARE] Erro ao buscar imóvel ${id}:`, error);
      // On error, return 404 instead of redirecting to home
      return create404Response(pathname);
    }
  }

  // OUTRAS URLs COM TRAILING SLASH (não imóveis) 
  if (pathname.endsWith('/') && pathname.length > 1 && !pathname.startsWith('/imovel')) {
    const withoutTrailingSlash = pathname.slice(0, -1);
    console.log(`[MIDDLEWARE] TRAILING SLASH (geral): ${pathname} → ${withoutTrailingSlash}`);
    
    const redirectUrl = new URL(withoutTrailingSlash, origin);
    url.searchParams.forEach((value, key) => {
      redirectUrl.searchParams.set(key, value);
    });
    
    const redirectResponse = NextResponse.redirect(redirectUrl, 301);
    ensureRedirectNoIndex(redirectResponse);
    return redirectResponse;
  }

  // URLs SEO-FRIENDLY: /buscar/finalidade/categoria/cidade
  const seoMatch = pathname.match(/^\/buscar\/([^\/]+)\/([^\/]+)\/([^\/]+)(.*)$/);
  if (seoMatch) {
    const [, finalidade, categoria, cidade, restPath] = seoMatch;
    
    const cidadesValidas = getCityValidSlugsSync();
  const finalidadesValidas = ['compra', 'venda', 'aluguel', 'locacao'];
    const categoriasValidas = [
      'apartamentos', 'casas', 'casas-comerciais', 'casas-em-condominio', 
      'coberturas', 'flats', 'gardens', 'lofts', 'lojas', 
      'predios-comerciais', 'salas-comerciais', 'sobrados', 'terrenos'
    ];
    
    if (cidadesValidas.includes(cidade) && finalidadesValidas.includes(finalidade) && categoriasValidas.includes(categoria)) {
      console.log(`[MIDDLEWARE] URL SEO-friendly: /buscar/${finalidade}/${categoria}/${cidade}${restPath}`);
      
      const parametrosUrl = { finalidade, categoria, cidade };
      
      if (restPath && restPath.length > 1) {
        const params = restPath.substring(1).split('/').filter(p => p.length > 0);
        params.forEach((param, index) => {
          if (param.includes('+')) {
            parametrosUrl.bairros = param;
          } else if (param.includes('-quarto')) {
            parametrosUrl.quartos = param;
          } else if (param.includes('mil') || param.includes('ate-') || param.includes('acima-')) {
            parametrosUrl.preco = param;
          } else if (index === 0 && !param.includes('-quarto') && !param.includes('mil')) {
            parametrosUrl.bairros = param;
          }
        });
      }
      
      const filtros = {
        cidadeSelecionada: '', finalidade: '', categoriaSelecionada: '',
        bairrosSelecionados: [], quartos: null, precoMin: null, precoMax: null
      };

      const MAPEAMENTO_CATEGORIAS = {
        'apartamentos': 'Apartamento', 'casas': 'Casa', 'casas-comerciais': 'Casa Comercial',
        'casas-em-condominio': 'Casa em Condominio', 'coberturas': 'Cobertura',
        'flats': 'Flat', 'gardens': 'Garden', 'lofts': 'Loft', 'lojas': 'Loja',
        'predios-comerciais': 'Prédio Comercial', 'salas-comerciais': 'Sala Comercial',
        'sobrados': 'Sobrado', 'terrenos': 'Terreno'
      };

      const MAPEAMENTO_FINALIDADES = {
        'compra': 'Comprar',
        'venda': 'Comprar',
        'aluguel': 'Alugar',
        'locacao': 'Alugar'
      };

      filtros.cidadeSelecionada = converterSlugCidadeSync(parametrosUrl.cidade);
      filtros.finalidade = MAPEAMENTO_FINALIDADES[parametrosUrl.finalidade] || parametrosUrl.finalidade;
      filtros.categoriaSelecionada = MAPEAMENTO_CATEGORIAS[parametrosUrl.categoria] || parametrosUrl.categoria;

      if (parametrosUrl.bairros) {
        filtros.bairrosSelecionados = parametrosUrl.bairros.split('+').map(bairroSlug => {
          return bairroSlug.split('-').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ');
        });
      }

      if (parametrosUrl.quartos) {
        if (parametrosUrl.quartos === '1-quarto') {
          filtros.quartos = 1;
        } else {
          const match = parametrosUrl.quartos.match(/^(\d+)-quartos$/);
          if (match) filtros.quartos = parseInt(match[1]);
        }
      }

      if (parametrosUrl.preco) {
        const converterValor = (valorStr) => {
          if (valorStr.includes('mi')) return parseFloat(valorStr.replace('mi', '')) * 1000000;
          if (valorStr.includes('mil')) return parseFloat(valorStr.replace('mil', '')) * 1000;
          return parseFloat(valorStr);
        };
        
        if (parametrosUrl.preco.startsWith('ate-')) {
          filtros.precoMax = converterValor(parametrosUrl.preco.replace('ate-', ''));
        } else if (parametrosUrl.preco.startsWith('acima-')) {
          filtros.precoMin = converterValor(parametrosUrl.preco.replace('acima-', ''));
        } else if (parametrosUrl.preco.includes('-')) {
          const [minStr, maxStr] = parametrosUrl.preco.split('-');
          filtros.precoMin = converterValor(minStr);
          filtros.precoMax = converterValor(maxStr);
        }
      }
      
      const rewriteUrl = new URL('/busca', request.url);
      if (filtros.cidadeSelecionada) rewriteUrl.searchParams.set('cidade', filtros.cidadeSelecionada);
      if (filtros.finalidade) rewriteUrl.searchParams.set('finalidade', filtros.finalidade);
      if (filtros.categoriaSelecionada) rewriteUrl.searchParams.set('categoria', filtros.categoriaSelecionada);
      if (filtros.bairrosSelecionados?.length) rewriteUrl.searchParams.set('bairros', filtros.bairrosSelecionados.join(','));
      if (filtros.quartos) rewriteUrl.searchParams.set('quartos', filtros.quartos.toString());
      if (filtros.precoMin) rewriteUrl.searchParams.set('precoMin', filtros.precoMin.toString());
      if (filtros.precoMax) rewriteUrl.searchParams.set('precoMax', filtros.precoMax.toString());
      
      console.log(`[MIDDLEWARE] Rewrite: ${rewriteUrl.toString()}`);
      return NextResponse.rewrite(rewriteUrl);
    } else {
      // OPTIMIZED: URLs SEO inválidas → 404 (not redirect)
      console.log(`[MIDDLEWARE] URL SEO inválida → 404: ${pathname}`);
      return create404Response(pathname);
    }
  }

  // MAJOR FIX: IMÓVEIS COM SLUG → Validate slug and redirect if incorrect
  const imovelComSlugMatch = pathname.match(/^\/imovel-(\d+)\/(.+)$/);
  if (imovelComSlugMatch) {
    const [, id, currentSlug] = imovelComSlugMatch;
    console.log(`[MIDDLEWARE] Imóvel com slug: ID=${id}, SLUG=${currentSlug}`);
    let canonicalPathForImovel = null;
    
    // FIXED: Add slug validation to middleware to prevent redirect issues in component
    try {
      const response = await getImovelByIdCached(id);
      
      if (response?.data) {
        const imovel = response.data;
        
        // CRITICAL FIX: Check if property should be indexed before processing redirects
        // This prevents redirects for properties that should return 404
        const { shouldIndexProperty } = await import('@/app/utils/slug-validator');
        if (!shouldIndexProperty(imovel)) {
          console.log(`[MIDDLEWARE] Imóvel ${id} não deve ser indexado (soft 404) → 404`);
          return create404Response(pathname);
        }
        
        // FIXED: Normalize database slug to handle double dashes
        const { normalizeSlug } = await import('@/app/utils/slug-validator');
        let normalizedDatabaseSlug = normalizeSlug(imovel.Slug);
        
        // CRITICAL FIX: If database slug is invalid/null, generate from Empreendimento
        // This ensures we always have a canonical slug to redirect to
        if (!normalizedDatabaseSlug && imovel.Empreendimento) {
          normalizedDatabaseSlug = imovel.Empreendimento
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove acentos
            .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
            .replace(/\s+/g, '-') // Substitui espaços por hífens
            .replace(/-+/g, '-') // Remove hífens duplos
            .replace(/^-|-$/g, '') // Remove hífens do início e fim
            || `imovel-${id}`;
        } else if (!normalizedDatabaseSlug) {
          normalizedDatabaseSlug = `imovel-${id}`;
        }
        
        // Normalize the current URL slug for comparison
        const normalizedCurrentSlug = normalizeSlug(currentSlug) || currentSlug;
        
        // CRITICAL FIX: Use semantic comparison to handle word-order variations
        // This prevents unnecessary redirects for semantically equivalent slugs
        const { areSlugsSemanticallyEquivalent } = await import('@/app/utils/slug-validator');
        const areEquivalent = areSlugsSemanticallyEquivalent(currentSlug, normalizedDatabaseSlug);
        
        canonicalPathForImovel = `/imovel-${id}/${normalizedDatabaseSlug}`;

        // Compare normalized slugs - redirect only if they're NOT semantically equivalent
        // This ensures ALL slug variations redirect to the canonical slug, but allows word-order variations
        if (!areEquivalent && normalizedCurrentSlug !== normalizedDatabaseSlug) {
          console.log(`[MIDDLEWARE] Slug incorreto detectado: ${currentSlug} (normalizado: ${normalizedCurrentSlug}) vs DB: ${imovel.Slug || 'null'} (normalizado: ${normalizedDatabaseSlug}) → Redirecionando`);
          const correctUrl = `/imovel-${id}/${normalizedDatabaseSlug}`;
          console.log(`[MIDDLEWARE] Redirecionando para URL correta: ${correctUrl}`);
          
          // Use 301 Permanent Redirect with cache headers to consolidate signals
          const redirectResponse = NextResponse.redirect(new URL(correctUrl, origin), 301);
          // CRITICAL FIX: Add cache headers for permanent redirects to reduce crawl waste
          redirectResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable'); // 1 year
          ensureRedirectNoIndex(redirectResponse);
          return redirectResponse;
        } else if (areEquivalent && normalizedCurrentSlug !== normalizedDatabaseSlug) {
          // Slugs are semantically equivalent but normalized differently - still redirect to canonical
          // This ensures consistent canonical URLs while avoiding unnecessary redirects for word-order variations
          console.log(`[MIDDLEWARE] Slug semanticamente equivalente mas normalizado diferente: ${currentSlug} → ${normalizedDatabaseSlug} (redirecionando para consistência)`);
          const correctUrl = `/imovel-${id}/${normalizedDatabaseSlug}`;
          const redirectResponse = NextResponse.redirect(new URL(correctUrl, origin), 301);
          redirectResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
          ensureRedirectNoIndex(redirectResponse);
          return redirectResponse;
        }

        canonicalUrlOverride = buildCanonicalUrl(siteBaseUrl, canonicalPathForImovel);
      } else {
        console.log(`[MIDDLEWARE] Imóvel ${id} não encontrado no middleware → 404`);
        return create404Response(pathname);
      }
    } catch (error) {
      console.error(`[MIDDLEWARE] Erro ao validar slug:`, error);
      return create404Response(pathname);
    }
    
    // If slug is correct or validation fails, rewrite to the property page
    const rewriteUrl = url.clone();
    rewriteUrl.pathname = `/imovel/${id}/${currentSlug}`;
    const rewriteResponse = NextResponse.rewrite(rewriteUrl);

    const canonicalTargetUrl = canonicalUrlOverride || (canonicalPathForImovel ? buildCanonicalUrl(siteBaseUrl, canonicalPathForImovel) : null);
    const normalizedCanonical = normalizeCanonicalToSiteOrigin(canonicalTargetUrl);
    if (normalizedCanonical) {
      rewriteResponse.headers.set('Link', `<${normalizedCanonical}>; rel="canonical"`);
      rewriteResponse.headers.set('x-canonical-url', normalizedCanonical);
    }

    rewriteResponse.headers.set('x-pathname', pathname);
    const shouldNoIndexRewrite = isRestrictedPath || hasSuspiciousQuery;
    rewriteResponse.headers.set('X-Robots-Tag', shouldNoIndexRewrite ? 'noindex, nofollow' : 'index, follow');

    if (pathname.includes('.')) {
      rewriteResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      rewriteResponse.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
    }

    return rewriteResponse;
  }

  // REMOVED: Duplicate iframe handling - moved to early processing above
  // REMOVED: Duplicate /imovel-/slug handling - moved to early processing above (Pattern 0)
  
  // CRITICAL FIX: Handle /imovel-undefined/... and /imovel-null/... patterns
  // These can cause GSC "Duplicate without user-selected canonical" issues
  const imovelInvalidIdMatch = pathname.match(/^\/imovel-(undefined|null|NaN|Infinity|true|false|\s+)(\/.*)?$/i);
  if (imovelInvalidIdMatch) {
    console.log(`[MALFORMED-URL] URL com ID inválido no formato imovel-: ${pathname} → 404`);
    return create404Response(pathname);
  }
  
  // OPTIMIZED: URL malformada do Instagram → 404 (not external redirect)
  if (pathname === '/instagram.com/npi_imoveis') {
    console.log(`[CANONICAL-FIX] URL Instagram malformada: ${pathname} → 404`);
    return create404Response(pathname);
  }
  
  // REMOVED: Old debug pattern - malformed URLs with invalid IDs are now handled earlier
  // This prevents them from reaching the page component and generating metadata/canonical URLs

  // PÁGINAS DE CONDOMÍNIO: /slug-condominio (sem ID)
  // Padrão simples: apenas letras, números e hífens (sem barras)
  const reservedRootSlugs = new Set([
    'busca',
    'sobre',
    'contato',
    'politica-de-privacidade',
    'termos-de-uso',
    'venda-seu-imovel',
    'admin',
    'login',
    'cadastro',
    'recuperar-senha',
  ]);
  const slugCandidate = pathname.slice(1);
  const isCondominioPattern = pathname.match(/^\/[a-z0-9-]+$/);
  
  let condominioValidated = false;

  if (isCondominioPattern && !reservedRootSlugs.has(slugCandidate)) {
    const slug = slugCandidate;
    try {
      const response = await getCondominioPorSlugCached(slug);
      const status = response?.status ?? response?.statusCode ?? 200;

        if (status === 404 || !response?.data) {
          console.log(`[MIDDLEWARE] Condomínio ${slug} não encontrado → 404`);
          return create404Response(pathname);
        }

        canonicalUrlOverride = buildCanonicalUrl(origin, pathname, searchParams);
        condominioValidated = true;
    } catch (error) {
      console.error(`[MIDDLEWARE] Erro ao validar condomínio ${slug}:`, error);
      return create404Response(pathname);
    }
  }

  // MELHORIA: Lista expandida de URLs válidas (páginas que realmente existem)
  const urlsValidas = [
    '/',
    '/busca', 
    '/sobre', 
    '/contato', 
    '/politica-de-privacidade', 
    '/termos-de-uso',
    '/venda-seu-imovel', 
    '/sobre/hub-imobiliarias', 
    '/sobre/npi-imoveis', 
    '/sobre/nossos-servicos',
    '/admin',
    '/login',
    '/cadastro',
    '/recuperar-senha'
  ];

  // MELHORIA: URLs que devem ser permitidas (patterns)
  const padroesPemitidos = [
    /^\/api\//,           // APIs
    /^\/admin\//,         // Admin routes
    /^\/_next\//,         // Next.js assets
    /^\/favicon\./,       // Favicons
    /^\/robots\.txt$/,    // Robots
    /^\/sitemap/,         // Sitemaps
    /^\/.*\.(ico|png|jpg|jpeg|gif|svg|css|js|woff|woff2|ttf|eot)$/  // Assets estáticos
  ];

  // Verificar se URL é válida por lista ou pattern
  const urlPermitida = condominioValidated ||
                      urlsValidas.includes(pathname) || 
                      padroesPemitidos.some(pattern => pattern.test(pathname));

  if (!urlPermitida) {
    const equalsPathMatch = pathname.match(/^\/([a-zA-Z0-9_-]+)=(.+)$/);
    if (equalsPathMatch) {
      const [, rawKey, rawValue] = equalsPathMatch;
      const key = rawKey.toLowerCase();
      const decodedValue = decodeURIComponent(rawValue).trim();

      const PARAM_MAP = {
        bairro: 'bairros',
        bairros: 'bairros',
        cidade: 'cidade',
        cidades: 'cidade',
        categoria: 'categoria',
        tipo: 'tipo',
        finalidade: 'finalidade',
        buscar: 'q',
        busca: 'q',
        palavra: 'q',
      };

      const mappedParam = PARAM_MAP[key];
      if (mappedParam && decodedValue) {
        const redirectUrl = new URL('/busca', origin);

        url.searchParams.forEach((value, paramKey) => {
          if (value && value.trim() !== '') {
            redirectUrl.searchParams.set(paramKey, value.trim());
          }
        });

        if (mappedParam === 'bairros') {
          redirectUrl.searchParams.append('bairros', decodedValue);
        } else {
          redirectUrl.searchParams.set(mappedParam, decodedValue);
        }

        console.log(`[MIDDLEWARE] Converting legacy path with '=': ${pathname} → ${redirectUrl.pathname}${redirectUrl.search}`);
        const redirectResponse = NextResponse.redirect(redirectUrl, 301);
        ensureRedirectNoIndex(redirectResponse);
        return redirectResponse;
      }
    }

    if (pathname.includes('=')) {
      console.log(`[MIDDLEWARE] URL malformada detectada (contém '='): ${pathname} → 404 canônico`);
    return create404Response(pathname);
    }

    const condominioEarlyMatch = pathname.match(/^\/([a-z0-9-]+)$/);
    if (condominioEarlyMatch) {
      const slug = condominioEarlyMatch[1];
      try {
        const response = await getCondominioPorSlugCached(slug);
        const status = response?.status ?? response?.statusCode ?? 200;

        if (status === 301 && response?.redirect) {
          console.log(`[MIDDLEWARE] Redirecionando condominio ${slug} → ${response.redirect}`);
          const redirectResponse = NextResponse.redirect(new URL(response.redirect, origin), 301);
          redirectResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
          ensureRedirectNoIndex(redirectResponse);
          return redirectResponse;
        }

        if (status === 404 || !response?.data) {
          console.log(`[MIDDLEWARE] Condomínio ${slug} não encontrado → 404`);
          return create404Response(pathname);
        }
      } catch (error) {
        console.error(`[MIDDLEWARE] Erro ao validar condomínio ${slug}:`, error);
        return create404Response(pathname);
      }
    }

    console.log(`[MIDDLEWARE] URL não reconhecida, deixando Next.js resolver: ${pathname}`);
    return NextResponse.next();
  }
  
  // CORREÇÃO GSC #5: ADICIONAR HEADERS SEO APROPRIADOS
  const response = NextResponse.next();
  
  // Add pathname header for use in layout
  response.headers.set('x-pathname', pathname);
  
  const responseStatus = response.status ?? 200;
  const isHtmlPath = !pathname.includes('.');

  if (responseStatus === 200 && isHtmlPath) {
    let canonicalCandidate = null;

    if (canonicalUrlOverride) {
      canonicalCandidate = canonicalUrlOverride;
    } else if (canonicalParamsForLink instanceof URLSearchParams && canonicalPathForLink) {
      canonicalCandidate = buildCanonicalUrl(siteBaseUrl, canonicalPathForLink, canonicalParamsForLink);
    } else {
      const filteredParams = new URLSearchParams();
      url.searchParams.forEach((value, key) => {
        const trimmedValue = value?.trim();
        if (!trimmedValue) {
          return;
        }

        const keyLower = key.toLowerCase();
        if (
          keyLower.startsWith('utm_') ||
          keyLower === 'fbclid' ||
          keyLower === 'gclid' ||
          keyLower === 'ref' ||
          keyLower === 'v' ||
          keyLower === 'cache' ||
          keyLower === 't' ||
          keyLower === '_rsc'
        ) {
          return;
        }

        if (filteredParams.has(key)) {
          filteredParams.append(key, trimmedValue);
        } else {
          filteredParams.set(key, trimmedValue);
        }
      });

      const canonicalUrlObject = new URL(pathname, siteBaseUrl);
      const filteredSearch = filteredParams.toString();
      if (filteredSearch) {
        canonicalUrlObject.search = filteredSearch;
      }
      canonicalCandidate = canonicalUrlObject.toString();
    }

    const normalizedCanonical = normalizeCanonicalToSiteOrigin(canonicalCandidate);
    if (normalizedCanonical) {
      response.headers.set('Link', `<${normalizedCanonical}>; rel="canonical"`);
      response.headers.set('x-canonical-url', normalizedCanonical);
    }
  } else {
    response.headers.delete('x-canonical-url');
  }
  
  // Cache para recursos estáticos
  if (pathname.includes('.')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Cache para páginas HTML
  else {
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }
  
  // Headers para SEO - CORREÇÃO: Não aplicar para admin, API ou páginas de erro
  const shouldNoIndex = isRestrictedPath || hasSuspiciousQuery;
  response.headers.set('X-Robots-Tag', responseStatus === 200 && !shouldNoIndex ? 'index, follow' : 'noindex, nofollow');
  
  // CORREÇÃO GSC #6: LOGGING ESPECÍFICO PARA BOTS E REDIRECTS
  if (isGoogleBot) {
    console.log(`[GSC] BOT REQUEST - ${request.method} ${pathname} - UA: ${userAgent.slice(0, 50)}`);
  }
  
  // CORREÇÃO GSC #7: LOG ESPECÍFICO PARA URLs PROBLEMÁTICAS IDENTIFICADAS
  if (pathname.includes('/imovel-') || pathname.includes('/imovel/')) {
    console.log(`[GSC-TRACKING] URL de imóvel processada: ${pathname} | Bot: ${isGoogleBot ? 'SIM' : 'NÃO'}`);
  }

  console.log(`[MIDDLEWARE] Seguindo normalmente: ${pathname}`);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)  
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     * Allows .php files (for iframe redirects)
     */
    '/((?!api|_next/static|favicon.ico|robots.txt|sitemap).*)',
  ],
};