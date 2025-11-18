export const metadata = {
  title: "Apartamentos de Alto Padrão em Moema | Melhor IDH de São Paulo",
  description: "Descubra apartamentos de alto padrão em Moema, o bairro com melhor IDH de São Paulo (0,961). Ao lado do Parque Ibirapuera, com 2 estações de metrô, ruas arborizadas e infraestrutura completa.",
  keywords: [
    "apartamentos em Moema",
    "Moema alto padrão",
    "imóveis em Moema",
    "apartamentos Moema Pássaros",
    "apartamentos Moema Índios",
    "Parque Ibirapuera",
    "melhor IDH São Paulo",
    "metrô Moema",
    "Shopping Ibirapuera",
    "apartamentos zona sul SP"
  ],
  openGraph: {
    title: "Apartamentos de Alto Padrão em Moema - Melhor IDH de SP",
    description: "Bairro com melhor IDH de São Paulo (0,961), ao lado do Parque Ibirapuera, com 2 estações de metrô e infraestrutura completa.",
    url: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-moema",
    siteName: "NPi Consultoria",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/bairros/moema-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Vista aérea de Moema - Bairro de Alto Padrão ao lado do Parque Ibirapuera",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamentos de Alto Padrão em Moema - Melhor IDH de SP",
    description: "Bairro com melhor IDH de São Paulo (0,961), ao lado do Parque Ibirapuera, com 2 estações de metrô e infraestrutura completa.",
    images: ["https://www.npiconsultoria.com.br/assets/images/bairros/moema-hero.jpg"],
    creator: "@npiconsultoria",
    site: "@npiconsultoria",
  },
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-moema",
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

export default function MoemaLayout({ children }) {
  return children;
}
