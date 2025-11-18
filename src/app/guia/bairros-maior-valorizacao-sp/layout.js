export const metadata = {
  title: "Bairros com Maior Valorização em São Paulo | Guia 2025",
  description: "Análise de mercado e dados históricos: onde investir para máximo retorno patrimonial em imóveis de alto padrão na capital paulista.",
  keywords: "valorização imobiliária são paulo, bairros que mais valorizam, investimento imóveis alto padrão, valorização alto padrão sp",
  
  openGraph: {
    title: "Bairros com Maior Valorização em São Paulo",
    description: "Análise de mercado e dados históricos: onde investir para máximo retorno patrimonial em imóveis de alto padrão.",
    type: "article",
    url: "https://www.npiconsultoria.com.br/guia/bairros-maior-valorizacao-sp",
    siteName: "NPi Consultoria Imobiliária",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/og/og-bairros-valorizacao-sp.jpg",
        width: 1200,
        height: 630,
        alt: "Bairros com Maior Valorização em São Paulo",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Bairros com Maior Valorização em São Paulo",
    description: "Análise de mercado e dados históricos: onde investir para máximo retorno patrimonial em imóveis de alto padrão.",
    images: ["https://www.npiconsultoria.com.br/assets/images/og/og-bairros-valorizacao-sp.jpg"],
    creator: "@npiconsultoria",
    site: "@npiconsultoria",
  },
  
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/guia/bairros-maior-valorizacao-sp",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({ children }) {
  return children;
}
