export const metadata = {
  title: "Investimento em SCP Imobiliário: Guia Completo | 2025",
  description: "Descubra como funciona o investimento em Sociedade em Conta de Participação no mercado imobiliário. Rentabilidade, riscos, tributação e como escolher a melhor SCP.",
  keywords: "investimento scp, sociedade conta participação imóveis, scp imobiliário, investir em scp, rentabilidade scp imóveis",
  
  openGraph: {
    title: "Investimento em SCP Imobiliário: Guia Completo",
    description: "Entenda como investir em Sociedades em Conta de Participação no mercado imobiliário de alto padrão.",
    type: "article",
    url: "https://www.npiconsultoria.com.br/guia/investimento-scp-imoveis",
    siteName: "NPi Consultoria Imobiliária",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/og/og-investimento-scp-imoveis.jpg",
        width: 1200,
        height: 630,
        alt: "Investimento em SCP Imobiliário - Guia Completo",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Investimento em SCP Imobiliário: Guia Completo",
    description: "Entenda como investir em Sociedades em Conta de Participação no mercado imobiliário.",
    images: ["https://www.npiconsultoria.com.br/assets/images/og/og-investimento-scp-imoveis.jpg"],
    creator: "@npiconsultoria",
    site: "@npiconsultoria",
  },
  
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/guia/investimento-scp-imoveis",
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
