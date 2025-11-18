export const metadata = {
  title: "Apartamentos de Alto Padrão no Brooklin | Berrini + WTC | NPi Consultoria",
  description: "Descubra apartamentos de alto padrão no Brooklin, o principal polo corporativo de São Paulo. Berrini, WTC, Ponte Estaiada, hotéis de luxo e mobilidade urbana excepcional.",
  keywords: "apartamentos alto padrão brooklin, brooklin são paulo, berrini apartamentos, wtc são paulo, imóveis brooklin, apartamentos berrini, brooklin corporativo, morar no brooklin",
  
  openGraph: {
    title: "Apartamentos de Alto Padrão no Brooklin | Berrini + WTC | NPi Consultoria",
    description: "Descubra apartamentos de alto padrão no Brooklin, o principal polo corporativo de São Paulo. Berrini, WTC, Ponte Estaiada, hotéis de luxo e mobilidade urbana excepcional.",
    url: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-brooklin",
    siteName: "NPi Consultoria",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/bairros/apartamentos-alto-padrao-brooklin.jpg",
        width: 1200,
        height: 630,
        alt: "Apartamentos de Alto Padrão no Brooklin - Berrini e WTC",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Apartamentos de Alto Padrão no Brooklin | Berrini + WTC",
    description: "Principal polo corporativo de São Paulo com Berrini, WTC, Ponte Estaiada e infraestrutura de luxo.",
    images: ["https://www.npiconsultoria.com.br/assets/images/bairros/apartamentos-alto-padrao-brooklin.jpg"],
  },
  
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/bairros/apartamentos-alto-padrao-brooklin",
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

export default function BrooklinLayout({ children }) {
  return children;
}
