export const metadata = {
  title: "Tendências do Mercado de Imóveis de Luxo | Guia 2025",
  description: "Projeções, insights exclusivos e análise de especialistas para investidores em imóveis premium. Futuro do mercado de alto padrão em SP.",
  keywords: "tendências imóveis luxo, mercado alto padrão 2025, futuro imóveis premium, investimento luxo são paulo",
  
  openGraph: {
    title: "Tendências do Mercado de Imóveis de Luxo",
    description: "Projeções, insights exclusivos e análise de especialistas para investidores em imóveis premium. Futuro do mercado de alto padrão.",
    type: "article",
    url: "https://www.npiconsultoria.com.br/guia/tendencias-mercado-imoveis-luxo",
    siteName: "NPi Consultoria Imobiliária",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/og/og-tendencias-mercado-luxo.jpg",
        width: 1200,
        height: 630,
        alt: "Tendências do Mercado de Imóveis de Luxo",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Tendências do Mercado de Imóveis de Luxo",
    description: "Projeções, insights exclusivos e análise de especialistas para investidores em imóveis premium.",
    images: ["https://www.npiconsultoria.com.br/assets/images/og/og-tendencias-mercado-luxo.jpg"],
    creator: "@npiconsultoria",
    site: "@npiconsultoria",
  },
  
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/guia/tendencias-mercado-imoveis-luxo",
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
