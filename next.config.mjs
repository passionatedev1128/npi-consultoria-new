/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  
  // EXPERIMENTAL SEGURO (sem optimizeCss)
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // IMAGENS OTIMIZADAS PARA FOTOS MAIORES
  images: {
    // FIXED: Allow unoptimized images from any domain to prevent 403
    unoptimized: false,
    
    // MANTIDO: Todos os remotePatterns existentes
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.npiconsultoria.com.br",
      },
      {
        protocol: "https",
        hostname: "cdn.vistahost.com.br",
      },
      {
        protocol: "https",
        hostname: "d1988evaubdc7a.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "npi-imoveis.s3.sa-east-1.amazonaws.com",
        pathname: '**'
      },
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cdn.uso.com.br",
      },
      {
        protocol: "https",
        hostname: "npi-imoveis.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "objectstorage.sa-saopaulo-1.oraclecloud.com",
      },
      {
        protocol: "https",
        hostname: "images.usenonstop.com.br",
      },
      {
        protocol: "https",
        hostname: "static.orulo.com.br",
      },
      {
        protocol: "https",
        hostname: "buildingeng.com.br",
      },
      {
        protocol: "https",
        hostname: "tresorresidence.com.br",
      },
      {
        protocol: "https",
        hostname: "veranosaopaulo.com",
      },
      {
        protocol: "https",
        hostname: "veranocampinas.com",
      },
      {
        protocol: "https",
        hostname: "sigasp.com.br",
      },      
      {
        protocol: "https",
        hostname: "cdn.imoview.com.br",
        pathname: "/**",
      },
      // FIXED: Allow all HTTPS domains to prevent 403 on external images
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    
    // FORMATOS PADRÃO Next.js (estabilidade garantida)
    formats: ["image/webp"],
    
    // DEVICE SIZES PADRÃO Next.js
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560, 3200, 3840],
    
    // IMAGE SIZES PADRÃO Next.js
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // CACHE OTIMIZADO
    minimumCacheTTL: 60,
    
    // FIXED: Configurações de segurança mais permissivas para evitar 403
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src * 'unsafe-inline' 'unsafe-eval'; img-src * data: blob:;",
  },
  
  // MANTIDO: TypeScript config
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // COMPILER OTIMIZADO
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'], // Keep only errors and warnings
    } : false,
  },
  swcMinify: true,
  
  // WEBPACK CONSERVADOR
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
  
  // HEADERS ESSENCIAIS + SECURITY
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          }
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          }
        ],
      },
      {
        source: '/iConatusIframe/iframe.php/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow', // tells search engines not to index
          },
        ],
      },
      // FIXED: Security headers for all pages (excluding admin/API routes)
      {
        source: '/((?!admin|api|_next).*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Prevent clickjacking
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Prevent MIME sniffing
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', // XSS protection
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow', // SEO: Allow indexing for public pages
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allow all origins to prevent 403
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          }
        ],
      },
      // Admin and API routes - noindex
      {
        source: '/(admin|api)/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow', // SEO: Block indexing for admin/API routes
          },
        ],
      },
    ];
  },
  
  // REDIRECTS OTIMIZADOS - Apenas URLs antigas críticas (sem conflitos com middleware)
  // NOTA: Legacy iframe/PHP URLs são tratadas no middleware com 410 Gone
  async redirects() {
    return [];
    // return [
    //   // REMOVED: /iConatusIframe/:path* - agora retorna 410 Gone no middleware
    //   // REMOVED: /iframe.php - agora retorna 410 Gone no middleware
    //   // ADICIONADO: Redirects específicos para URLs antigas conhecidas (apenas se não forem capturadas pelo middleware)
    //   // NOTA: busca.php, index.php, guest.vary.php são capturados pelo middleware como 410 Gone
    //   // Se precisar de redirects para esses, ajustar o middleware para excluí-los
    // ];
  },
  // MANTIDO: Output
  output: "standalone",
};

export default nextConfig;
