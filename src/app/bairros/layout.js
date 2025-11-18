export const metadata = {
  title: "Encontre seu Bairro Ideal em São Paulo | Apartamentos de Alto Padrão | NPi Consultoria",
  description: "Descubra os melhores bairros de São Paulo para comprar apartamentos de alto padrão. Itaim Bibi, Moema, Pinheiros, Vila Madalena e mais. Infraestrutura completa e qualidade de vida.",
  keywords: [
    "bairros de São Paulo",
    "melhores bairros São Paulo",
    "apartamentos alto padrão São Paulo",
    "Itaim Bibi",
    "Moema",
    "Pinheiros",
    "Vila Madalena",
    "bairros nobres São Paulo",
    "onde morar em São Paulo",
    "bairros valorizados SP"
  ],
  openGraph: {
    title: "Encontre seu Bairro Ideal em São Paulo - Apartamentos de Alto Padrão",
    description: "Descubra os melhores bairros de São Paulo: Itaim Bibi (Faria Lima), Moema (melhor IDH), Pinheiros (Vila Madalena). Infraestrutura completa e qualidade de vida.",
    url: "https://www.npiconsultoria.com.br/bairros",
    siteName: "NPi Consultoria",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/bairros/bairros-sao-paulo-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Melhores Bairros de São Paulo - Apartamentos de Alto Padrão",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Encontre seu Bairro Ideal em São Paulo - Apartamentos de Alto Padrão",
    description: "Descubra os melhores bairros de São Paulo: Itaim Bibi (Faria Lima), Moema (melhor IDH), Pinheiros (Vila Madalena). Infraestrutura completa e qualidade de vida.",
    images: ["https://www.npiconsultoria.com.br/assets/images/bairros/bairros-sao-paulo-hero.jpg"],
    creator: "@npiconsultoria",
    site: "@npiconsultoria",
  },
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/bairros",
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

export default function BairrosLayout({ children }) {
  return children;
}
