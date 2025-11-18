export const metadata = {
  title: "Apartamentos de Alto Padrão em Perdizes - PUC-SP e Allianz Parque | NPi Consultoria",
  description: "Descubra apartamentos de alto padrão em Perdizes, bairro arborizado e residencial com PUC-SP, Allianz Parque, Sesc Pompeia e infraestrutura completa. Valores de R$ 10.000 a R$ 25.000/m².",
  keywords: [
    "apartamentos Perdizes",
    "imóveis Perdizes",
    "apartamentos alto padrão Perdizes",
    "comprar apartamento Perdizes",
    "apartamentos venda Perdizes",
    "imóveis zona oeste São Paulo",
    "apartamentos PUC-SP",
    "apartamentos próximos Allianz Parque",
    "Perdizes São Paulo",
    "apartamentos próximos Sesc Pompeia",
    "imóveis próximos Vila Madalena",
    "apartamentos arborizados São Paulo",
    "apartamentos tradicionais Perdizes",
    "NPi Consultoria Perdizes",
  ],
  openGraph: {
    title: "Apartamentos de Alto Padrão em Perdizes - PUC-SP e Allianz Parque",
    description: "Bairro arborizado e residencial com PUC-SP, Allianz Parque, Sesc Pompeia e infraestrutura completa. Apartamentos de alto padrão de R$ 10.000 a R$ 25.000/m².",
    url: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-perdizes",
    siteName: "NPi Consultoria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/bairros/apartamentos-alto-padrao-perdizes.jpg",
        width: 1200,
        height: 630,
        alt: "Apartamentos de Alto Padrão em Perdizes - PUC-SP e Allianz Parque",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamentos de Alto Padrão em Perdizes - PUC-SP e Allianz Parque",
    description: "Bairro arborizado e residencial com PUC-SP, Allianz Parque, Sesc Pompeia e infraestrutura completa.",
    images: ["https://www.npiconsultoria.com.br/assets/images/bairros/apartamentos-alto-padrao-perdizes.jpg"],
  },
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-perdizes",
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

export default function PerdizelLayout({ children }) {
  return children;
}
