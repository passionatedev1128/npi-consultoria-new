// src/app/robots.js - CORRIGIDO PARA GSC

/**
 * @returns {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/imovel-*',        // CRITICAL: Allow imóvel pages (1,860 pages were blocked)
          '/busca',           // Allow search pages
          '/bairros',         // Allow bairros pages
          '/_next/image/*',   // Allow image optimization
        ],
        disallow: [
          '/admin/',
          '/api/admin/',      // Only block admin APIs
          '/api/webhooks/',   // Only block webhooks
          '/api/upload',      // Only block uploads
          '/imovel-*/facebook.com/',
          '/imovel-*/instagram.com/',
          '/imovel-*/linkedin.com/',
          '/imovel-*/twitter.com/',
          '/imovel-*/youtube.com/',
          '/_next/static/chunks/',
          '/_next/static/css/',
          '/_next/static/js/',
          '/_next/static/media/',
          '/_next/data/',
          // FIXED: Only block problematic query parameters, not entire search pages
          '*?_rsc=*',           // Block React Server Component params
          '*?fbclid=*',         // Block Facebook tracking
          '*?gclid=*',          // Block Google Ads tracking
          '*?utm_source=*',     // Block UTM tracking
          '*?utm_medium=*',
          '*?utm_campaign=*',
          '*?ref=*',            // Block referral tracking
          '/dashboard/'
        ],
        // REMOVIDO: crawlDelay: 1, - Googlebot ignora
      },
      
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/imovel-*',        // CRITICAL: Allow imóvel pages
          '/busca',           // Allow search pages
          '/bairros',         // Allow bairros pages
          '/_next/image/*',   // Allow image optimization
        ],
        disallow: [
          '/admin/',
          '/api/admin/',      // Only block admin APIs
          '/api/webhooks/',   // Only block webhooks
          '/api/upload',      // Only block uploads
          '/_next/static/chunks/',
          '/_next/static/css/',
          '/_next/static/js/',
          '/_next/data/',
          // FIXED: Only block problematic params for Googlebot too
          '*?_rsc=*',
          '*?fbclid=*',
          '*?gclid=*',
          '*?utm_source=*',
          '/dashboard/'
        ],
        // REMOVIDO: crawlDelay: 1,
      },
      
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/imovel-*',        // CRITICAL: Allow imóvel pages
          '/busca',           // Allow search pages
          '/bairros',         // Allow bairros pages
          '/_next/image/*',   // Allow image optimization
        ],
        disallow: [
          '/admin/',
          '/api/admin/',      // Only block admin APIs
          '/api/webhooks/',   // Only block webhooks
          '/api/upload',      // Only block uploads
          // REMOVIDO: '/*?_rsc=*',
          '/_next/static/chunks/',
          '/_next/data/',
          '/dashboard/'
        ],
        // REMOVIDO: crawlDelay: 2,
      },
      
      // OpenAI (ChatGPT, GPTs) - MANTIDO
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User/2.0',
        allow: '/',
      },
      // Anthropic (Claude) - MANTIDO
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'Claude-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-User',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      // Common Crawl (usado para treinar diversas IAs) - MANTIDO
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      // Google Bard/Gemini - MANTIDO
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'GoogleOther',
        allow: '/',
      },
      // Perplexity AI - MANTIDO
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Perplexity-User',
        allow: '/',
      },
      // Meta AI (Llama) - MANTIDO
      {
        userAgent: 'Meta-ExternalAgent',
        allow: '/',
      },
      {
        userAgent: 'FacebookBot',
        allow: '/',
      },
      // xAI (Grok) - MANTIDO
      {
        userAgent: 'GrokBot',
        allow: '/',
      },
      {
        userAgent: 'xAI-Bot',
        allow: '/',
      },
      {
        userAgent: 'xAI-Crawler',
        allow: '/',
      },
      // DeepSeek AI - MANTIDO
      {
        userAgent: 'DeepSeek-Bot',
        allow: '/',
      },
      {
        userAgent: 'deepseek-ai',
        allow: '/',
      },
      {
        userAgent: 'DeepSeekBot',
        allow: '/',
      },
      // You.com (One/Search) - MANTIDO
      {
        userAgent: 'You.com',
        allow: '/',
      },
      {
        userAgent: 'YouBot',
        allow: '/',
      },
      {
        userAgent: 'You-Bot',
        allow: '/',
      },
      // Amazon AI/Alexa - MANTIDO
      {
        userAgent: 'Amazonbot',
        allow: '/',
      },
      // Apple Intelligence/Siri - MANTIDO
      {
        userAgent: 'Applebot',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      // ByteDance/TikTok AI - MANTIDO
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
      // DuckDuckGo AI - MANTIDO
      {
        userAgent: 'DuckAssistBot',
        allow: '/',
      },
      // Cohere AI - MANTIDO
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      {
        userAgent: 'cohere-training-data-crawler',
        allow: '/',
      },
      // LinkedIn AI - MANTIDO
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      // Outros emergentes - MANTIDO
      {
        userAgent: 'AndiBot',
        allow: '/',
      },
      {
        userAgent: 'AI2Bot',
        allow: '/',
      },
      {
        userAgent: 'bedrockbot',
        allow: '/',
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
