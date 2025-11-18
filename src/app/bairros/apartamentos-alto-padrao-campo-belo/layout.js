export const metadata = {
  title: "Apartamentos de Alto Padrão em Campo Belo - Shopping Ibirapuera | NPi Consultoria",
  description: "Descubra apartamentos de alto padrão em Campo Belo, bairro residencial e familiar com Shopping Ibirapuera, Hospital São Paulo (UNIFESP) e infraestrutura completa. Valores de R$ 12.000 a R$ 30.000/m².",
  keywords: [
    "apartamentos Campo Belo",
    "imóveis Campo Belo",
    "apartamentos alto padrão Campo Belo",
    "comprar apartamento Campo Belo",
    "apartamentos venda Campo Belo",
    "imóveis zona sul São Paulo",
    "apartamentos Shopping Ibirapuera",
    "apartamentos próximos Hospital São Paulo",
    "Campo Belo São Paulo",
    "apartamentos próximos Moema",
    "imóveis residenciais Campo Belo",
    "apartamentos familiares São Paulo",
    "NPi Consultoria Campo Belo",
  ],
  openGraph: {
    title: "Apartamentos de Alto Padrão em Campo Belo - Shopping Ibirapuera",
    description: "Bairro residencial e familiar com Shopping Ibirapuera, Hospital São Paulo (UNIFESP) e infraestrutura completa. Apartamentos de alto padrão de R$ 12.000 a R$ 30.000/m².",
    url: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-campo-belo",
    siteName: "NPi Consultoria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/bairros/apartamentos-alto-padrao-campo-belo.jpg",
        width: 1200,
        height: 630,
        alt: "Apartamentos de Alto Padrão em Campo Belo - Shopping Ibirapuera",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamentos de Alto Padrão em Campo Belo - Shopping Ibirapuera",
    description: "Bairro residencial e familiar com Shopping Ibirapuera, Hospital São Paulo (UNIFESP) e infraestrutura completa.",
    images: ["https://www.npiconsultoria.com.br/assets/images/bairros/apartamentos-alto-padrao-campo-belo.jpg"],
  },
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-campo-belo",
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

export default function CampoBeloLayout({ children }) {
  return children;
}
