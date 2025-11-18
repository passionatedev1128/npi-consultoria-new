import { Header } from "@/app/components/ui/header";
import { HeaderPage } from "@/app/components/ui/header-page";
import { Footer } from "@/app/components/ui/footer";
import { GuiaContent } from "./sections/GuiaContent";

// Metadata completo para SEO
export const metadata = {
  title: "Guia Completo de Imóveis de Alto Padrão | Investimentos de R$ 1mi a R$ 65mi",
  description: "Guia definitivo sobre aquisição de imóveis de luxo. Da escolha à tributação: tudo que você precisa saber antes de investir entre R$ 1 milhão e R$ 65 milhões em imóveis de alto padrão.",
  keywords: "imóveis de alto padrão, imóveis de luxo, investimento imobiliário, imóveis acima de 1 milhão, apartamento de luxo, casa de alto padrão, como comprar imóvel de luxo, investir em imóveis premium, documentação imóvel alto padrão, financiamento imóvel luxo, ITBI, ITCMD, patrimônio de afetação, SCP imóveis, sociedade conta participação",
  
  // Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Guia Completo de Imóveis de Alto Padrão | NPi Consultoria",
    description: "O guia mais completo sobre aquisição, investimento e tributação de imóveis de luxo. Especialistas em imóveis de R$ 1mi a R$ 65mi.",
    url: "https://www.npiconsultoria.com.br/guia/imoveis-alto-padrao",
    siteName: "NPi Consultoria",
    images: [
      {
        url: "https://www.npiconsultoria.com.br/assets/images/guia-alto-padrao-og.jpg",
        width: 1200,
        height: 630,
        alt: "Guia Completo de Imóveis de Alto Padrão - NPi Consultoria",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Guia Completo de Imóveis de Alto Padrão | NPi",
    description: "Tudo sobre aquisição, investimento e tributação de imóveis de luxo entre R$ 1mi e R$ 65mi.",
    images: ["https://www.npiconsultoria.com.br/assets/images/guia-alto-padrao-og.jpg"],
    creator: "@npiconsultoria",
    site: "@npiconsultoria",
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://www.npiconsultoria.com.br/guia/imoveis-alto-padrao",
  },
  
  // Robots
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
  
  // Dados estruturados básicos
  other: {
    "og:locale": "pt_BR",
    "article:author": "NPi Consultoria",
    "article:publisher": "https://www.facebook.com/npiconsultoria",
    "article:section": "Guias Imobiliários",
    "article:tag": "Imóveis de Alto Padrão, Investimento Imobiliário, Luxo",
  },
  
  // Configurações adicionais
  category: "Real Estate Guide",
  classification: "Guia de Investimentos em Imóveis de Luxo",
  
  // Meta tags adicionais
  metadataBase: new URL("https://www.npiconsultoria.com.br"),
};

// Disable static generation for pages that make API calls
export const dynamic = 'force-dynamic';

export default async function GuiaImovelAltoPagedrao() {
  return (
    <>
      <Header effect={true} />
      
      <section>
        <HeaderPage
          title="Guia Completo de Imóveis de Alto Padrão"
          description="Tudo que você precisa saber sobre aquisição, investimento e tributação de imóveis de luxo entre R$ 1 milhão e R$ 65 milhões"
          image="/assets/images/imoveis/02.jpg"
          breadcrumb={[
            { label: "Home", active: false },
            { label: "Guia Completo", active: true }
          ]}
        />
        
        <GuiaContent />
        <Footer />    
      </section>
    </>
  );
}
