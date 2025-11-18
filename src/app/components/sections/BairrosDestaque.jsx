"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Building2,
  Trophy,
  Palette,
  ChevronRight,
  Sparkles
} from "lucide-react";

export function BairrosDestaque() {
  
  const bairrosDestaque = [
    {
      slug: "apartamentos-alto-padrao-itaim-bibi",
      nome: "Itaim Bibi",
      destaque: "Avenida Faria Lima",
      descricao: "Um dos bairros mais valorizados, próximo à Faria Lima",
      imagem: "/assets/images/bairros/apartamentos-alto-padrao-itaim-bibi.jpg",
      icon: Building2,
    },
    {
      slug: "apartamentos-alto-padrao-moema",
      nome: "Moema",
      destaque: "Melhor IDH de São Paulo",
      descricao: "Ao lado do Parque Ibirapuera, IDH 0,961",
      imagem: "/assets/images/bairros/apartamentos-alto-padrao-moema.jpg",
      icon: Trophy,
    },
    {
      slug: "apartamentos-alto-padrao-jardins",
      nome: "Jardins",
      destaque: "Oscar Freire - 8ª Mais Luxuosa",
      descricao: "Bairro mais sofisticado, com tradição centenária",
      imagem: "/assets/images/bairros/apartamentos-alto-padrao-jardins.jpg",
      icon: Sparkles,
    },
    {
      slug: "apartamentos-alto-padrao-pinheiros",
      nome: "Pinheiros",
      destaque: "Vila Madalena",
      descricao: "Vida cultural vibrante e Beco do Batman",
      imagem: "/assets/images/bairros/apartamentos-alto-padrao-pinheiros.jpg",
      icon: Palette,
    },
  ];

  // Função para obter cor do ícone baseado no slug (identidade visual)
  const getIconBgColor = (slug) => {
    switch(slug) {
      case "apartamentos-alto-padrao-itaim-bibi":
        return "bg-gradient-to-br from-[#8B6F4B] to-[#6d5839]";
      case "apartamentos-alto-padrao-moema":
        return "bg-gradient-to-br from-[#a0846d] to-[#8B6F4B]";
      case "apartamentos-alto-padrao-jardins":
        return "bg-gradient-to-br from-[#c9a870] to-[#8B6F4B]";
      case "apartamentos-alto-padrao-pinheiros":
        return "bg-gradient-to-br from-[#6d5839] to-[#5a4530]";
      default:
        return "bg-gradient-to-br from-[#8B6F4B] to-[#6d5839]";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Bairros Premium
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Encontre seu Bairro Ideal
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Apartamentos de alto padrão nos bairros mais valorizados e sofisticados de São Paulo
          </p>
        </div>

        {/* Grid de Bairros */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {bairrosDestaque.map((bairro) => {
            const IconComponent = bairro.icon;
            
            return (
              <Link
                key={bairro.slug}
                href={`/bairros/${bairro.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-[#8B6F4B] hover:-translate-y-2"
              >
                {/* Imagem */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={bairro.imagem}
                    alt={`Apartamentos em ${bairro.nome}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Ícone */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 ${getIconBgColor(bairro.slug)} rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Nome */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{bairro.nome}</h3>
                    <p className="text-white/90 text-sm font-medium">{bairro.destaque}</p>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {bairro.descricao}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between text-[#8B6F4B] font-bold group-hover:gap-3 transition-all">
                    <span>Conhecer o Bairro</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Ver Todos */}
        <div className="text-center">
          <Link
            href="/bairros"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors shadow-lg hover:shadow-xl"
          >
            <MapPin className="w-5 h-5" />
            Ver Todos os Bairros
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
