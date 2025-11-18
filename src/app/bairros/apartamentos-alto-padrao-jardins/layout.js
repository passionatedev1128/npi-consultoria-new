export const metadata = {
  title: "Apartamentos de Alto Padrão nos Jardins | Oscar Freire - 8ª Rua Mais Luxuosa do Mundo",
  description: "Descubra apartamentos de alto padrão nos Jardins, o bairro mais sofisticado de São Paulo. Oscar Freire (8ª mais luxuosa do mundo), tradição centenária desde 1913 e infraestrutura premium.",
  keywords: [
    "apartamentos nos Jardins",
    "Jardins alto padrão",
    "imóveis nos Jardins",
    "Rua Oscar Freire",
    "Jardim América",
    "Jardim Europa",
    "Jardim Paulista",
    "Jardim Paulistano",
    "apartamentos Oscar Freire",
    "bairro mais luxuoso São Paulo"
  ],
  openGraph: {
    title: "Apartamentos de Alto Padrão nos Jardins - Oscar Freire",
    description: "Bairro mais sofisticado de São Paulo (desde 1913), com Rua Oscar Freire (8ª mais luxuosa do mundo), tradição centenária e infraestrutura premium.",
    url: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-jardins",
    siteName: "NPi Consultoria",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/bairros/apartamentos-alto-padrao-jardins.jpg",
        width: 1200,
        height: 630,
        alt: "Vista do bairro dos Jardins - O Bairro Mais Sofisticado de São Paulo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamentos de Alto Padrão nos Jardins - Oscar Freire",
    description: "Bairro mais sofisticado de São Paulo (desde 1913), com Rua Oscar Freire (8ª mais luxuosa do mundo), tradição centenária e infraestrutura premium.",
    images: ["https://www.npiconsultoria.com.br/assets/images/bairros/apartamentos-alto-padrao-jardins.jpg"],
    creator: "@npiconsultoria",
    site: "@npiconsultoria",
  },
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-jardins",
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

export default function JardinsLayout({ children }) {
  return children;
}
