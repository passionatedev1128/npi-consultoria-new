export const metadata = {
  title: "Apartamentos de Alto Padrão em Pinheiros | Vila Madalena e Beco do Batman | NPi Consultoria",
  description: "Descubra apartamentos de alto padrão em Pinheiros, o bairro mais antigo e charmoso de São Paulo. Com Vila Madalena, Beco do Batman, vida cultural vibrante e 3 estações de metrô.",
  keywords: [
    "apartamentos em Pinheiros",
    "Pinheiros alto padrão",
    "imóveis em Pinheiros",
    "Vila Madalena",
    "Beco do Batman",
    "apartamentos Vila Madalena",
    "Pinheiros São Paulo",
    "Largo da Batata",
    "Faria Lima Pinheiros",
    "apartamentos zona oeste SP"
  ],
  openGraph: {
    title: "Apartamentos de Alto Padrão em Pinheiros - Vila Madalena",
    description: "Bairro mais antigo de São Paulo (desde 1560), com Vila Madalena, Beco do Batman, vida cultural vibrante e 3 estações de metrô.",
    url: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-pinheiros",
    siteName: "NPi Consultoria",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/bairros/apartamentos-alto-padrao-pinheiros.jpg",
        width: 1200,
        height: 630,
        alt: "Vista do bairro de Pinheiros - Bairro Boêmio e Cultural de São Paulo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamentos de Alto Padrão em Pinheiros - Vila Madalena",
    description: "Bairro mais antigo de São Paulo (desde 1560), com Vila Madalena, Beco do Batman, vida cultural vibrante e 3 estações de metrô.",
    images: ["https://www.npiconsultoria.com.br/assets/images/bairros/apartamentos-alto-padrao-pinheiros.jpg"],
    creator: "@npiconsultoria",
    site: "@npiconsultoria",
  },
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-pinheiros",
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

export default function PinheirosLayout({ children }) {
  return children;
}
