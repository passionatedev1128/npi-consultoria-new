export const metadata = {
  title: "Permuta de Imóveis: Como Funciona? Guia Completo | 2025",
  description: "Descubra como funciona a permuta de imóveis no mercado de alto padrão. Vantagens, desvantagens, tributação, contrato e quando vale a pena fazer permuta financeira.",
  keywords: "permuta de imóveis, permuta financeira, permuta física, troca de imóveis, permuta alto padrão, como fazer permuta",
  
  openGraph: {
    title: "Permuta de Imóveis: Como Funciona? Guia Completo",
    description: "Guia completo sobre permuta de imóveis no mercado de alto padrão: tipos, vantagens e processo.",
    type: "article",
    url: "https://www.npiconsultoria.com.br/guia/permuta-imoveis",
    siteName: "NPi Consultoria Imobiliária",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/og/og-permuta-imoveis.jpg",
        width: 1200,
        height: 630,
        alt: "Permuta de Imóveis - Guia Completo",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Permuta de Imóveis: Como Funciona?",
    description: "Guia completo sobre permuta de imóveis no mercado de alto padrão.",
    images: ["https://www.npiconsultoria.com.br/assets/images/og/og-permuta-imoveis.jpg"],
    creator: "@npiconsultoria",
    site: "@npiconsultoria",
  },
  
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/guia/permuta-imoveis",
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
