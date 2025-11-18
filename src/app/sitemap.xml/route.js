// CRITICAL FIX: Safe date validation function to prevent "Invalid time value" errors
const safeDate = (dateValue) => {
  if (!dateValue) return new Date();
  
  try {
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) {
      return new Date();
    }
    return date;
  } catch {
    return new Date();
  }
};

export async function GET() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://npiconsultoria.com.br';

        // 1. Buscar TODOS os imóveis (para páginas /imovel-{codigo}/{slug})
        const todosImoveis = await fetchTodosImoveis() || [];
        console.log('Todos Imóveis:', todosImoveis.length, todosImoveis);
        
        // 2. NOVO: Buscar APENAS condominios (para páginas /{slug})
        const apenasCondominios = await fetchApenasCondominios() || [];

        // 3. URLs estáticas com prioridades ESTRATÉGICAS
        const staticUrls = [
            { 
                url: baseUrl, 
                priority: 1.0, 
                changeFrequency: 'weekly',
                lastModified: new Date()
            },
            { 
                url: `${baseUrl}/sobre/hub-imobiliarias`, 
                priority: 0.8, 
                changeFrequency: 'weekly',
                lastModified: new Date()
            },
            { 
                url: `${baseUrl}/sobre/npi-imoveis`, 
                priority: 0.8, 
                changeFrequency: 'weekly',
                lastModified: new Date()
            },
            { 
                url: `${baseUrl}/venda-seu-imovel`, 
                priority: 0.8, 
                changeFrequency: 'weekly',
                lastModified: new Date()
            },
        ];

        // 4. URLs de TODOS os imóveis (formato /imovel-{codigo}/{slug})
        // FIXED: Filter invalid slugs before including in sitemap
        const invalidSlugs = [
            'facebook.com/npiimoveis',
            'instagram.com/npi_imoveis',
            'linkedin.com/company',
            'twitter.com/',
            'youtube.com/',
            'indexdata/index.swf',
            'iframe.php',
            'iConatusIframe',
        ];

        const invalidKeywords = [
            'facebook.com',
            'instagram.com',
            'linkedin.com',
            'twitter.com',
            'youtube.com',
            '.swf',
            '.php',
            'iframe',
            'http://',
            'https://',
        ];

        const sitemapImoveis = todosImoveis
            .filter(page => {
                // Validation 1: Slug must exist
                if (!page.slug || typeof page.slug !== 'string') {
                    return false;
                }
                
                // Validation 2: Not a known invalid slug
                if (invalidSlugs.includes(page.slug.toLowerCase())) {
                    return false;
                }
                
                // Validation 3: No invalid keywords
                const hasInvalidKeyword = invalidKeywords.some(keyword => 
                    page.slug.toLowerCase().includes(keyword.toLowerCase())
                );
                
                return !hasInvalidKeyword;
            })
            .map((page) => ({
                url: `${baseUrl}/imovel-${page.codigo}/${page.slug}`,
                lastModified: safeDate(page.updatedAt),
                changeFrequency: 'daily',
                priority: 0.9,
            }));

        // 5. NOVO: URLs de CONDOMINIOS (formato /{slug}) - SÓ Condominio: "Sim"
        // FIXED: Increased priority and use actual database dates
        const sitemapCondominios = apenasCondominios.map((page) => ({
            url: `${baseUrl}/${page.slug}`,
            lastModified: safeDate(page.updatedAt),
            changeFrequency: 'weekly',
            priority: 0.8, // FIXED: Increased from 0.7 to 0.8 to match importance
        }));

        // 6. Combinar tudo com ORDEM ESTRATÉGICA
        const sitemap = [...staticUrls, ...sitemapImoveis, ...sitemapCondominios];

        // 7. Retorne o XML OTIMIZADO
        return new Response(
            `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${sitemap.map((entry) => `  <url>
    <loc>${entry.url}</loc>
    ${entry.lastModified ? `<lastmod>${entry.lastModified.toISOString()}</lastmod>` : ''}
    ${entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : ''}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
  </url>`).join('\n')}
</urlset>`,
            {
                headers: {
                    'Content-Type': 'application/xml',
                    'Cache-Control': 'public, max-age=3600',
                },
            }
        );
    } catch (error) {
        console.error('Erro ao gerar sitemap:', error);

        // FALLBACK otimizado com prioridades corretas
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://npiconsultoria.com.br';
        const staticUrls = [
            { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' },
            { url: `${baseUrl}/sobre/hub-imobiliarias`, priority: 0.8, changeFrequency: 'weekly' },
            { url: `${baseUrl}/sobre/npi-imoveis`, priority: 0.8, changeFrequency: 'weekly' },
            { url: `${baseUrl}/venda-seu-imovel`, priority: 0.8, changeFrequency: 'weekly' },
        ];

        return new Response(
            `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls.map((entry) => `  <url>
    <loc>${entry.url}</loc>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`,
            {
                headers: {
                    'Content-Type': 'application/xml',
                    'Cache-Control': 'public, max-age=3600',
                },
            }
        );
    }
}

// MANTIDO: Buscar TODOS os imóveis (para URLs /imovel-{codigo}/{slug})
async function fetchTodosImoveis() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://npiconsultoria.com.br'

    try {
        const res = await fetch(`${baseUrl}/api/imoveis/slug`, {
            headers: {
                'Cache-Control': 'no-cache',
            },
        });

        if (!res.ok) {
            console.error('Falha ao buscar slugs:', res.status);
            return [];
        }

        const data = await res.json();

        if (!data || !data.data) {
            console.error('Formato de resposta inválido:', data);
            return [];
        }

        return data.data.map(item => {
            // CRITICAL FIX: Validate date before returning to prevent "Invalid time value" errors
            const possibleDates = [
                item.updatedAt,
                item.DataHoraAtualizacao,
                item.DataAtualizacao,
                item.DataInclusao
            ];
            
            let validDate = null;
            for (const dateStr of possibleDates) {
                if (dateStr) {
                    try {
                        const date = new Date(dateStr);
                        if (!isNaN(date.getTime())) {
                            validDate = date.toISOString();
                            break;
                        }
                    } catch {}
                }
            }
            
            return {
                codigo: item.Codigo,
                slug: item.Slug,
                updatedAt: validDate || new Date().toISOString() // Safe fallback
            };
        });
    } catch (error) {
        console.error('Erro ao buscar páginas dinâmicas:', error);
        return [];
    }
}

// NOVA FUNÇÃO: Buscar APENAS condominios (para URLs /{slug})
async function fetchApenasCondominios() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://npiconsultoria.com.br'

    try {
        // Chama a API com parâmetro tipo=condominios
        const res = await fetch(`${baseUrl}/api/imoveis/slug?tipo=condominios`, {
            headers: {
                'Cache-Control': 'no-cache',
            },
        });

        if (!res.ok) {
            console.error('Falha ao buscar condominios:', res.status);
            return [];
        }

        const data = await res.json();

        if (!data || !data.data) {
            console.error('Formato de resposta inválido:', data);
            return [];
        }

        // Validação extra: garantir que só retorna Condominio === "Sim"
        return data.data
            .filter(item => item.Condominio === "Sim")
            .map(item => {
                // CRITICAL FIX: Validate date before returning to prevent "Invalid time value" errors
                const possibleDates = [
                    item.updatedAt,
                    item.DataHoraAtualizacao,
                    item.DataAtualizacao,
                    item.DataInclusao
                ];
                
                let validDate = null;
                for (const dateStr of possibleDates) {
                    if (dateStr) {
                        try {
                            const date = new Date(dateStr);
                            if (!isNaN(date.getTime())) {
                                validDate = date.toISOString();
                                break;
                            }
                        } catch {}
                    }
                }
                
                return {
                    codigo: item.Codigo,
                    slug: item.Slug,
                    updatedAt: validDate || new Date().toISOString() // Safe fallback
                };
            });
    } catch (error) {
        console.error('Erro ao buscar condominios:', error);
        return [];
    }
}
