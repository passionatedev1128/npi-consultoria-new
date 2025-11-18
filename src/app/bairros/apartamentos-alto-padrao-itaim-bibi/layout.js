export const metadata = {
  title: "Apartamentos de Alto Padrão no Itaim Bibi - São Paulo",
  description: "Descubra apartamentos de luxo no Itaim Bibi, um dos bairros mais valorizados de SP. Próximo à Faria Lima, com infraestrutura premium e alto potencial de valorização. Preços de R$ 17.000 a R$ 100.000/m².",
  keywords: "apartamentos alto padrão itaim bibi, imóveis luxo itaim bibi, apartamento itaim bibi, cobertura itaim bibi, imóveis itaim bibi são paulo, apartamento alto padrão faria lima, imóveis de luxo zona sul sp",
  
  openGraph: {
    title: "Apartamentos de Alto Padrão no Itaim Bibi - São Paulo",
    description: "Explore apartamentos de luxo no Itaim Bibi, bairro nobre próximo à Faria Lima. Infraestrutura completa, segurança e alta valorização.",
    type: "website",
    url: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-itaim-bibi",
    siteName: "NPi Consultoria Imobiliária",
    locale: "pt_BR",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/bairros/itaim-bibi-alto-padrao.jpg",
        width: 1200,
        height: 630,
        alt: "Apartamentos de Alto Padrão no Itaim Bibi - São Paulo",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Apartamentos de Alto Padrão no Itaim Bibi | NPi Consultoria",
    description: "Descubra apartamentos de luxo no Itaim Bibi, próximo à Faria Lima. Infraestrutura premium e alta valorização.",
    images: ["https://www.npiconsultoria.com.br/assets/images/bairros/itaim-bibi-alto-padrao.jpg"],
    creator: "@npiconsultoria",
    site: "@npiconsultoria",
  },
  
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-itaim-bibi",
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
  
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Itaim Bibi, São Paulo",
    "geo.position": "-23.5916;-46.6831",
  },
};

export default function Layout({ children }) {
  return children;
}
