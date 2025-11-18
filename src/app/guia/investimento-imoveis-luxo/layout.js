export const metadata = {
  title: "Investimento em Imóveis de Luxo: Vale a Pena? 2025-2026",
  description: "Descubra se vale a pena investir em imóveis acima de R$ 1 milhão. Análise de rentabilidade, valorização histórica, proteção patrimonial e comparação com outros investimentos.",
  keywords: "investimento imóveis luxo, vale a pena investir imóveis alto padrão, rentabilidade imóveis premium, investimento acima 1 milhão, imóveis como investimento",
  
  openGraph: {
    title: "Investimento em Imóveis de Luxo: Vale a Pena?",
    description: "Análise detalhada sobre rentabilidade, valorização e proteção patrimonial em imóveis de alto padrão.",
    type: "article",
    url: "https://www.npiconsultoria.com.br/guia/investimento-imoveis-luxo",
    siteName: "NPi Consultoria Imobiliária",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/og/og-investimento-imoveis-luxo.jpg",
        width: 1200,
        height: 630,
        alt: "Investimento em Imóveis de Alto Padrão - Análise Completa",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Investimento em Imóveis de Luxo: Vale a Pena?",
    description: "Análise completa sobre rentabilidade e valorização em imóveis acima de R$ 1 milhão.",
    images: ["https://www.npiconsultoria.com.br/assets/images/og/og-investimento-imoveis-luxo.jpg"],
    creator: "@npiconsultoria",
    site: "@npiconsultoria",
  },
  
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/guia/investimento-imoveis-luxo",
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
