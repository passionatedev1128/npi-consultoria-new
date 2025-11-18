export const metadata = {
  title: "Como Escolher Localização Ideal para Alto Padrão 2025-2026",
  description: "Descubra os critérios essenciais para identificar bairros nobres com maior potencial de valorização, infraestrutura premium e exclusividade em São Paulo.",
  keywords: "localização imóveis alto padrão, bairros nobres são paulo, onde investir imóveis luxo, localização premium, valorização imobiliária",
  
  openGraph: {
    title: "Como Escolher a Localização Ideal para Imóveis de Alto Padrão",
    description: "Guia completo com critérios essenciais para escolher a melhor localização em imóveis de luxo.",
    type: "article",
    url: "https://www.npiconsultoria.com.br/guia/localizacao-imoveis-alto-padrao",
    siteName: "NPi Consultoria Imobiliária",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/og/og-localizacao-imoveis-alto-padrao.jpg",
        width: 1200,
        height: 630,
        alt: "Como Escolher Localização Ideal para Imóveis de Alto Padrão",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Como Escolher a Localização Ideal para Imóveis de Alto Padrão",
    description: "Descubra os critérios essenciais para identificar bairros nobres com maior potencial de valorização.",
    images: ["https://www.npiconsultoria.com.br/assets/images/og/og-localizacao-imoveis-alto-padrao.jpg"],
    creator: "@npiconsultoria",
    site: "@npiconsultoria",
  },
  
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/guia/localizacao-imoveis-alto-padrao",
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
