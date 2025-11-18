export const metadata = {
  title: "Apartamentos de Alto Padrão na Vila Olímpia - Polo de Tecnologia | NPi Consultoria",
  description: "Descubra apartamentos de alto padrão na Vila Olímpia, polo corporativo moderno com empresas de tecnologia, Ponte Estaiada, JK Iguatemi e vida noturna sofisticada. Valores de R$ 15.000 a R$ 40.000/m².",
  keywords: [
    "apartamentos Vila Olímpia",
    "imóveis Vila Olímpia",
    "apartamentos alto padrão Vila Olímpia",
    "comprar apartamento Vila Olímpia",
    "apartamentos venda Vila Olímpia",
    "imóveis zona sul São Paulo",
    "apartamentos polo tecnologia",
    "apartamentos próximos Ponte Estaiada",
    "Vila Olímpia São Paulo",
    "apartamentos próximos JK Iguatemi",
    "imóveis corporativos São Paulo",
    "apartamentos modernos Vila Olímpia",
    "NPi Consultoria Vila Olímpia",
  ],
  openGraph: {
    title: "Apartamentos de Alto Padrão na Vila Olímpia - Polo de Tecnologia",
    description: "Polo corporativo moderno com empresas de tecnologia, Ponte Estaiada, JK Iguatemi e vida noturna sofisticada. Apartamentos de alto padrão de R$ 15.000 a R$ 40.000/m².",
    url: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-vila-olimpia",
    siteName: "NPi Consultoria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/bairros/apartamentos-alto-padrao-vila-olimpia.jpg",
        width: 1200,
        height: 630,
        alt: "Apartamentos de Alto Padrão na Vila Olímpia - Polo de Tecnologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamentos de Alto Padrão na Vila Olímpia - Polo de Tecnologia",
    description: "Polo corporativo moderno com empresas de tecnologia, Ponte Estaiada, JK Iguatemi e vida noturna sofisticada.",
    images: ["https://www.npiconsultoria.com.br/assets/images/bairros/apartamentos-alto-padrao-vila-olimpia.jpg"],
  },
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-vila-olimpia",
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

export default function VilaOlimpiaLayout({ children }) {
  return children;
}
