"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { WhatsappFloat } from "@/app/components/ui/whatsapp";
import { 
  ChevronRight, 
  Home, 
  MapPin, 
  Building2,
  TrendingUp,
  Trees,
  Palette,
  Trophy,
  Sparkles,
  Briefcase,
  GraduationCap,
  Heart
} from "lucide-react";

export default function BairrosPage() {
  
  // Lista de bairros disponíveis
  const bairros = [
    {
      slug: "apartamentos-alto-padrao-itaim-bibi",
      nome: "Itaim Bibi",
      regiao: "Zona Sul",
      destaque: "Avenida Faria Lima",
      descricao: "Um dos bairros mais valorizados de São Paulo, com localização estratégica próxima à Av. Faria Lima e infraestrutura premium.",
      valorM2: "R$ 17.000 - R$ 100.000/m²",
      imagem: "/assets/images/bairros/apartamentos-alto-padrao-itaim-bibi.jpg",
      icon: Building2,
    },
    {
      slug: "apartamentos-alto-padrao-moema",
      nome: "Moema",
      regiao: "Zona Sul",
      destaque: "Melhor IDH de São Paulo",
      descricao: "Bairro com melhor IDH de São Paulo (0,961), ao lado do Parque Ibirapuera, com 2 estações de metrô e infraestrutura completa.",
      valorM2: "R$ 15.000 - R$ 45.000/m²",
      imagem: "/assets/images/bairros/apartamentos-alto-padrao-moema.jpg",
      icon: Trophy,
    },
    {
      slug: "apartamentos-alto-padrao-brooklin",
      nome: "Brooklin",
      regiao: "Zona Sul",
      destaque: "Polo Corporativo Berrini",
      descricao: "Principal centro empresarial de São Paulo, com Avenida Berrini, WTC, Ponte Estaiada e infraestrutura hoteleira de luxo.",
      valorM2: "R$ 10.000 - R$ 18.000/m²",
      imagem: "/assets/images/bairros/apartamentos-alto-padrao-brooklin.jpg",
      icon: Briefcase,
    },
    {
      slug: "apartamentos-alto-padrao-campo-belo",
      nome: "Campo Belo",
      regiao: "Zona Sul",
      destaque: "Shopping Ibirapuera e Hospital São Paulo",
      descricao: "Bairro residencial e familiar com Shopping Ibirapuera, Hospital São Paulo (UNIFESP) e atmosfera tranquila.",
      valorM2: "R$ 11.000 - R$ 22.000/m²",
      imagem: "/assets/images/bairros/apartamentos-alto-padrao-campo-belo.jpg",
      icon: Heart,
    },
    {
      slug: "apartamentos-alto-padrao-vila-olimpia",
      nome: "Vila Olímpia",
      regiao: "Zona Sul",
      destaque: "Polo de Tecnologia e Vida Noturna",
      descricao: "Polo corporativo moderno com empresas de tecnologia, Ponte Estaiada, JK Iguatemi e vida noturna sofisticada.",
      valorM2: "R$ 15.000 - R$ 40.000/m²",
      imagem: "/assets/images/bairros/apartamentos-alto-padrao-vila-olimpia.jpg",
      icon: Building2,
    },
    {
      slug: "apartamentos-alto-padrao-jardins",
      nome: "Jardins",
      regiao: "Zona Oeste",
      destaque: "Rua Oscar Freire - 8ª Mais Luxuosa do Mundo",
      descricao: "O bairro mais sofisticado de São Paulo (desde 1913), com tradição centenária, Oscar Freire e infraestrutura de altíssimo padrão.",
      valorM2: "R$ 12.000 - R$ 65.000/m²",
      imagem: "/assets/images/bairros/apartamentos-alto-padrao-jardins.jpg",
      icon: Sparkles,
    },
    {
      slug: "apartamentos-alto-padrao-pinheiros",
      nome: "Pinheiros",
      regiao: "Zona Oeste",
      destaque: "Vila Madalena e Beco do Batman",
      descricao: "Bairro mais antigo de São Paulo (desde 1560), com Vila Madalena, vida cultural vibrante e 3 estações de metrô.",
      valorM2: "R$ 12.000 - R$ 35.000/m²",
      imagem: "/assets/images/bairros/apartamentos-alto-padrao-pinheiros.jpg",
      icon: Palette,
    },
    {
      slug: "apartamentos-alto-padrao-perdizes",
      nome: "Perdizes",
      regiao: "Zona Oeste",
      destaque: "PUC-SP e Allianz Parque",
      descricao: "Bairro arborizado e residencial com PUC-SP, Allianz Parque, Sesc Pompeia e atmosfera tranquila.",
      valorM2: "R$ 10.000 - R$ 25.000/m²",
      imagem: "/assets/images/bairros/apartamentos-alto-padrao-perdizes.jpg",
      icon: GraduationCap,
    },
  ];

  // Função para obter cor do ícone (identidade visual)
  const getIconBgColor = (slug) => {
    switch(slug) {
      case "apartamentos-alto-padrao-itaim-bibi":
        return "bg-[#8B6F4B]";
      case "apartamentos-alto-padrao-moema":
        return "bg-[#a0846d]";
      case "apartamentos-alto-padrao-brooklin":
        return "bg-[#7a5f3f]";
      case "apartamentos-alto-padrao-campo-belo":
        return "bg-[#b89968]";
      case "apartamentos-alto-padrao-vila-olimpia":
        return "bg-[#8B6F4B]";
      case "apartamentos-alto-padrao-jardins":
        return "bg-[#c9a870]";
      case "apartamentos-alto-padrao-pinheiros":
        return "bg-[#6d5839]";
      case "apartamentos-alto-padrao-perdizes":
        return "bg-[#9b8268]";
      default:
        return "bg-[#8B6F4B]";
    }
  };

  // Agrupar por região
  const bairrosPorRegiao = {
    "Zona Sul": bairros.filter(b => b.regiao === "Zona Sul"),
    "Zona Oeste": bairros.filter(b => b.regiao === "Zona Oeste"),
  };

  return (
    <>
      <Header effect={false} />
      
      <main className="min-h-screen bg-white">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 border-b border-gray-200 pt-24">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-[#8B6F4B] transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                Início
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#8B6F4B] font-medium">Bairros</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B] text-white rounded-full text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" />
                Guia de Bairros
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Encontre seu Bairro Ideal em São Paulo
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Descubra os bairros mais valorizados e sofisticados de São Paulo. 
                Apartamentos de alto padrão com toda infraestrutura, cultura e qualidade de vida que você merece.
              </p>
            </div>
          </div>
        </section>

        {/* Filtros/Stats */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B6F4B] mb-2">{bairros.length}</div>
                <p className="text-gray-600 text-sm">Bairros Premium</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B6F4B] mb-2">2</div>
                <p className="text-gray-600 text-sm">Regiões Cobertas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B6F4B] mb-2">100%</div>
                <p className="text-gray-600 text-sm">Alto Padrão</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bairros por Região */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            
            {Object.entries(bairrosPorRegiao).map(([regiao, bairrosRegiao]) => (
              <div key={regiao} className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-[#8B6F4B]" />
                  {regiao}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {bairrosRegiao.map((bairro) => {
                    const IconComponent = bairro.icon;
                    
                    return (
                      <Link
                        key={bairro.slug}
                        href={`/bairros/${bairro.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-[#8B6F4B]"
                      >
                        {/* Imagem */}
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={bairro.imagem}
                            alt={`Apartamentos de alto padrão em ${bairro.nome}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                          
                          {/* Badge Região */}
                          <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full text-xs font-bold">
                              <MapPin className="w-3 h-3" />
                              {bairro.regiao}
                            </span>
                          </div>

                          {/* Ícone e Nome */}
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-10 h-10 ${getIconBgColor(bairro.slug)} rounded-lg flex items-center justify-center`}>
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-2xl font-bold text-white">{bairro.nome}</h3>
                            </div>
                            <p className="text-white/90 text-sm font-medium">{bairro.destaque}</p>
                          </div>
                        </div>

                        {/* Conteúdo */}
                        <div className="p-6">
                          <p className="text-gray-700 text-sm leading-relaxed mb-4">
                            {bairro.descricao}
                          </p>

                          {/* Valor m² */}
                          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                            <span className="text-xs text-gray-500 uppercase font-semibold">Valor/m²</span>
                            <span className="text-sm font-bold text-gray-900">{bairro.valorM2}</span>
                          </div>

                          {/* CTA */}
                          <div className="flex items-center justify-between text-[#8B6F4B] font-bold group-hover:gap-3 transition-all">
                            <span>Ver Apartamentos</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-2xl p-10 text-center shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Não Encontrou o Bairro que Procura?
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Entre em contato conosco! Temos especialistas prontos para ajudá-lo a encontrar 
                o apartamento perfeito em qualquer bairro de São Paulo.
              </p>
              <Link
                href="https://wa.me/5511969152222?text=Olá!%20Estou%20na%20página%20de%20BAIRROS%20no%20site%20da%20NPi%20Consultoria%20e%20gostaria%20de%20saber%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Falar com Especialista
              </Link>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Apartamentos de Alto Padrão nos Melhores Bairros de São Paulo
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                São Paulo oferece uma variedade impressionante de <strong>bairros de alto padrão</strong>, cada um com 
                características únicas que atendem a diferentes perfis de moradores. Seja você um executivo buscando proximidade 
                com a <strong>Avenida Faria Lima</strong> ou <strong>Avenida Berrini</strong>, uma família procurando o melhor 
                <strong> IDH da cidade</strong>, ou um amante da cultura desejando viver próximo à <strong>Vila Madalena</strong>, 
                <strong> PUC-SP</strong> ou <strong>empresas de tecnologia</strong>, temos o bairro ideal para você.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nossa seleção de bairros contempla as regiões mais valorizadas da capital paulista, com <strong>apartamentos 
                que variam de R$ 10.000 a R$ 100.000 por m²</strong>. Todos os bairros apresentados possuem infraestrutura 
                completa, segurança acima da média, excelentes opções de educação, saúde, gastronomia e lazer.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Explore nosso guia completo e descubra qual bairro combina mais com seu estilo de vida. Cada página contém 
                informações detalhadas sobre localização, mobilidade, infraestrutura, perfil dos imóveis e potencial de valorização.
              </p>
            </article>
          </div>
        </section>

      </main>

      <WhatsappFloat />
      <Footer />
    </>
  );
}
