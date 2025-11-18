"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { WhatsappFloat } from "@/app/components/ui/whatsapp";
import CardImovel, { CardImovelSkeleton } from "@/app/components/ui/card-imovel";
import { getImoveis } from "@/app/services";
import { 
  ChevronRight, 
  Home, 
  MapPin, 
  TrendingUp, 
  Building2, 
  ShoppingBag, 
  GraduationCap, 
  Stethoscope,
  Utensils,
  Trees,
  Shield,
  Train,
  Trophy,
  Sparkles,
  Briefcase,
  Hotel,
  Music,
  Zap
} from "lucide-react";

export default function VilaOlimpiaAltoPadraoPage() {
  const [imoveisVilaOlimpia, setImoveisVilaOlimpia] = useState([]);
  const [loadingImoveis, setLoadingImoveis] = useState(true);

  useEffect(() => {
    const buscarImoveisVilaOlimpia = async () => {
      setLoadingImoveis(true);
      try {
        const params = {
          cidade: "São Paulo",
          bairrosArray: [
            "Vila Olímpia",
            "VILA OLÍMPIA",
            "vila olimpia",
            "Vila Olimpia"
          ],
          finalidade: "venda",
          status: "venda",
          sortField: "date",
          sortOrder: "desc",
        };
        
        console.log("[VILA-OLIMPIA-BUSCA] Buscando imóveis com params:", params);
        const response = await getImoveis(params, 1, 3);
        
        console.log("[VILA-OLIMPIA-BUSCA] Resposta da API:", {
          total: response?.imoveis?.length || 0,
          primeiros: response?.imoveis?.slice(0, 3).map(i => ({
            codigo: i.Codigo,
            empreendimento: i.Empreendimento,
            bairro: i.BairroComercial || i.Bairro
          }))
        });
        
        if (response?.imoveis && Array.isArray(response.imoveis)) {
          setImoveisVilaOlimpia(response.imoveis);
        }
      } catch (error) {
        console.error("[VILA-OLIMPIA-BUSCA] Erro ao buscar imóveis de Vila Olímpia:", error);
        setImoveisVilaOlimpia([]);
      } finally {
        setLoadingImoveis(false);
      }
    };

    buscarImoveisVilaOlimpia();
  }, []);

  const handleWhatsAppClick = (message) => (e) => {
    e.preventDefault();
    
    const isMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    
    const baseUrl = isMobile()
      ? 'whatsapp://send'
      : 'https://web.whatsapp.com/send';
    
    const whatsappUrl = message
      ? `${baseUrl}?phone=5511969152222&text=${encodeURIComponent(message)}`
      : `${baseUrl}?phone=5511969152222`;
    
    if (isMobile()) {
      window.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <>
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        body, html {
          direction: ltr !important;
        }
      `}</style>
      
      <Header effect={false} />
      
      <main className="min-h-screen bg-white" dir="ltr">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 border-b border-gray-200 pt-24">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-[#8B6F4B] transition-colors flex items-center gap-1">
                <Home className="w-4 h-4" />
                Início
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/bairros" className="text-gray-600 hover:text-[#8B6F4B] transition-colors">
                Bairros
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#8B6F4B] font-medium">Vila Olímpia</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[500px] w-full mt-20 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <Image
            src="/assets/images/bairros/apartamentos-alto-padrao-vila-olimpia.jpg"
            alt="Vista da Vila Olímpia - Polo Corporativo Moderno com Ponte Estaiada"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 pt-8 md:pt-0">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B] text-white rounded-full text-sm font-semibold mb-6">
                  <Briefcase className="w-4 h-4" />
                  Zona Sul - São Paulo
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Apartamentos de Alto Padrão na Vila Olímpia
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  Polo corporativo moderno com arranha-céus, empresas de tecnologia, Ponte Estaiada, 
                  JK Iguatemi e vida noturna sofisticada.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/buscar/venda/apartamentos/sao-paulo/vila-olimpia"
                    className="inline-flex items-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors shadow-lg"
                  >
                    <Building2 className="w-5 h-5" />
                    Ver Apartamentos Disponíveis
                  </Link>
                  <a
                    href="#"
                    onClick={handleWhatsAppClick("Olá! Vi a página da Vila Olímpia no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Falar com Especialista
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destaques do Bairro */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Polo Corporativo</h3>
                <p className="text-sm text-gray-600">Empresas de tecnologia</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Music className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Vida Noturna</h3>
                <p className="text-sm text-gray-600">Bares e baladas sofisticadas</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">JK Iguatemi</h3>
                <p className="text-sm text-gray-600">Shopping de luxo</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Arquitetura Moderna</h3>
                <p className="text-sm text-gray-600">Arranha-céus contemporâneos</p>
              </div>
            </div>
          </div>
        </section>

        {/* CARROSSEL DE IMÓVEIS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#8B6F4B]" />
                  </div>
                  Imóveis Disponíveis na Vila Olímpia
                </h2>
                <p className="text-gray-600">
                  {loadingImoveis 
                    ? "Carregando imóveis..." 
                    : imoveisVilaOlimpia.length > 0 
                      ? `${imoveisVilaOlimpia.length} ${imoveisVilaOlimpia.length === 1 ? 'imóvel' : 'Imóveis em Destaque'}`
                      : "Confira nossa seleção exclusiva de apartamentos de alto padrão"
                  }
                </p>
              </div>
              <Link
                href="/buscar/venda/apartamentos/sao-paulo/vila-olimpia"
                className="hidden md:inline-flex items-center gap-2 text-[#8B6F4B] font-semibold hover:gap-3 transition-all"
              >
                Veja Todos os Imóveis na Vila Olímpia
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Carrossel */}
            <div className="relative -mx-4 md:mx-0">
              <div className="overflow-x-auto scrollbar-hide pb-4 px-4">
                <div className="flex gap-6 md:justify-center">
                  {loadingImoveis ? (
                    Array(3).fill(null).map((_, index) => (
                      <div key={`skeleton-${index}`} className="w-[320px] flex-shrink-0">
                        <CardImovelSkeleton />
                      </div>
                    ))
                  ) : imoveisVilaOlimpia.length > 0 ? (
                    imoveisVilaOlimpia.map((imovel) => (
                      <div key={imovel.Codigo || imovel._id} className="w-[320px] flex-shrink-0">
                        <CardImovel {...imovel} target="_blank" />
                      </div>
                    ))
                  ) : (
                    <div className="w-full text-center py-12">
                      <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-600 font-semibold">Nenhum imóvel disponível no momento</p>
                      <p className="text-sm text-gray-500 mt-2">Entre em contato para conhecer outras opções</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Botão Mobile */}
            <div className="mt-6 md:hidden">
              <Link
                href="/buscar/venda/apartamentos/sao-paulo/vila-olimpia"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors"
              >
                Ver Todos os Apartamentos na Vila Olímpia
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <article id="sobre-bairro" className="container mx-auto px-4 py-16 max-w-5xl">
          
          {/* Introdução */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por que a Vila Olímpia é o Polo Corporativo Mais Moderno de São Paulo?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A <strong>Vila Olímpia</strong> consolidou-se como um dos bairros mais modernos e dinâmicos de São Paulo, 
              transformando-se em <strong>polo corporativo de tecnologia e inovação</strong> a partir dos anos 2000. 
              Com <strong>arranha-céus de arquitetura contemporânea</strong>, o bairro abriga gigantes como Google, Facebook, 
              LinkedIn, Ambev, Vivo e centenas de startups, tornando-se referência em ambiente de negócios moderno.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Localizado na <strong>Zona Sul de São Paulo</strong>, às margens da Marginal Pinheiros e próximo à 
              <strong> Ponte Estaiada</strong>, a Vila Olímpia oferece <strong>apartamentos de alto padrão</strong> com 
              valores de m² entre <strong>R$ 15.000 e R$ 40.000</strong>, atraindo jovens executivos, profissionais de 
              tecnologia e investidores que valorizam <strong>vida noturna sofisticada</strong>, gastronomia de ponta 
              e infraestrutura hoteleira de luxo.
            </p>
          </section>

          {/* Polo Corporativo */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Polo Corporativo de Tecnologia e Inovação
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A Vila Olímpia tornou-se o <strong>principal centro de empresas de tecnologia de São Paulo</strong>, 
              concentrando gigantes globais e startups inovadoras em torres corporativas de arquitetura de ponta.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-blue-600" />
                  Empresas de Tecnologia
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  O bairro abriga escritórios do <strong>Google, Facebook, LinkedIn, Microsoft, Oracle, Salesforce</strong> 
                  e centenas de startups de tecnologia. É o endereço preferencial para empresas de inovação que buscam 
                  visibilidade, acessibilidade e ambiente corporativo moderno.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-transparent border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Arquitetura Corporativa Moderna
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Os <strong>arranha-céus de vidro e aço</strong> da Vila Olímpia representam a modernidade de São Paulo. 
                  Edifícios inteligentes com certificações ambientais, sistemas de automação e infraestrutura tecnológica 
                  de ponta caracterizam a paisagem urbana do bairro.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ambiente de Inovação
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A concentração de empresas de tecnologia criou um <strong>ecossistema de inovação</strong> vibrante, 
                  com eventos de networking, aceleradoras de startups, coworkings sofisticados e cultura corporativa 
                  jovem e dinâmica.
                </p>
              </div>
            </div>
          </section>

          {/* Vida Noturna e Gastronomia */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Vida Noturna Sofisticada e Gastronomia de Alto Nível
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A Vila Olímpia é conhecida pela <strong>vida noturna mais sofisticada de São Paulo</strong>, com bares, 
              baladas, lounges e restaurantes de alta gastronomia que atraem executivos, profissionais de tecnologia 
              e público jovem de alto poder aquisitivo.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-50 to-transparent border-l-4 border-pink-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Music className="w-6 h-6 text-pink-600" />
                  Bares e Baladas de Luxo
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A <strong>Rua Olimpíadas</strong> e adjacências concentram alguns dos bares e baladas mais badalados 
                  de São Paulo, com DJs internacionais, ambientes sofisticados e público selecionado. É o point para 
                  happy hour corporativo e festas de fim de semana.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-transparent border-l-4 border-orange-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Utensils className="w-6 h-6 text-orange-600" />
                  Gastronomia de Alto Padrão
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  O bairro oferece <strong>restaurantes estrelados, steakhouses premium, culinária internacional</strong> 
                  e cafés especializados. É destino gastronômico para almoços executivos, jantares de negócios e 
                  encontros sociais sofisticados.
                </p>
              </div>
            </div>
          </section>

          {/* Localização e Mobilidade */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Localização Estratégica e Mobilidade
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A Vila Olímpia está estrategicamente posicionada na Zona Sul de São Paulo, oferecendo fácil acesso 
              a importantes vias e regiões da cidade:
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#8B6F4B]/5 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Principais Avenidas
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida Juscelino Kubitschek (JK):</strong> Principal via do bairro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Rua Olimpíadas:</strong> Eixo gastronômico e noturno</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Marginal Pinheiros:</strong> Acesso rápido a toda a cidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Ponte Estaiada:</strong> Cartão-postal próximo ao bairro</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Train className="w-6 h-6 text-blue-600" />
                  Transporte Público
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Estação Vila Olímpia (Linha 9-Esmeralda CPTM):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Conecta o bairro à Marginal Pinheiros e demais regiões da cidade
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Linhas de Ônibus:</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Diversas linhas atravessam o bairro, conectando a Pinheiros, Faria Lima e Centro
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Táxi e Apps de Transporte:</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Alta disponibilidade de Uber, 99 e táxis devido ao perfil corporativo
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Infraestrutura Completa */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Infraestrutura de Luxo
            </h2>

            {/* Shopping */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-[#8B6F4B]" />
                JK Iguatemi e Comércio de Luxo
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">JK Iguatemi:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Shopping de luxo na Av. Juscelino Kubitschek (divisa com Itaim Bibi), com marcas premium, 
                      restaurantes sofisticados, cinema e serviços exclusivos. É referência em compras de alto padrão 
                      para moradores da Vila Olímpia.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Shopping Vila Olímpia:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Centro comercial próximo à estação de trem, com lojas, restaurantes e serviços
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Comércio de Rua:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Cafés especializados, academias premium, agências bancárias e serviços corporativos
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hotéis */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Hotel className="w-6 h-6 text-[#8B6F4B]" />
                Hotéis de Alto Padrão
              </h3>
              <ul className="space-y-3">                
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Hotéis Corporativos na Região:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Blue Tree Premium, Hotel Pullman, Stanplaza Funchal, Quality Suites, Mercure e diversas opções de hospedagem executiva no bairro 
                      e arredores, atendendo o perfil corporativo da região
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Saúde */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-[#8B6F4B]" />
                Saúde de Excelência
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Hospital Albert Einstein:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Referência em saúde de excelência, próximo à região (15-20 minutos)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Hospital Sírio-Libanês:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Hospital de alto padrão na região dos Jardins, próximo à Vila Olímpia (15 minutos)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Clínicas e Laboratórios:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Fleury, Delboni, Lavoisier e diversas clínicas especializadas na região
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Educação */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#8B6F4B]" />
                Educação e Desenvolvimento
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Escolas internacionais:</strong> Próximas ao bairro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Cursos de idiomas:</strong> Grande variedade para executivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Coworkings:</strong> Espaços modernos para trabalho e networking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Eventos de tecnologia:</strong> Meetups, palestras e conferências</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Perfil dos Apartamentos */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Perfil dos Apartamentos de Alto Padrão na Vila Olímpia
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Os imóveis da Vila Olímpia são conhecidos pela <strong>arquitetura moderna</strong>, 
              <strong> acabamentos sofisticados</strong> e <strong>tecnologia de ponta</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Características Típicas</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Metragem: 50m² a 250m²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">1 a 4 suítes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">1 a 3 vagas de garagem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Varandas com vista</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Plantas modernas e funcionais</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Diferenciais Premium</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Acabamentos contemporâneos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Automação residencial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Internet de alta velocidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Prédios inteligentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Perfil jovem e moderno</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8B6F4B]/10 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Áreas Comuns dos Condomínios</h4>
              <p className="text-gray-700 text-sm mb-3">
                Os edifícios na Vila Olímpia oferecem infraestrutura de última geração:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Lazer:</p>
                  <ul className="space-y-1">
                    <li>• Piscina rooftop</li>
                    <li>• Lounge bar</li>
                    <li>• Cinema privativo</li>
                    <li>• Espaço gourmet</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Bem-estar:</p>
                  <ul className="space-y-1">
                    <li>• Academia completa</li>
                    <li>• Spa e sauna</li>
                    <li>• Sala de massagem</li>
                    <li>• Pista de corrida</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Trabalho:</p>
                  <ul className="space-y-1">
                    <li>• Coworking</li>
                    <li>• Sala de reuniões</li>
                    <li>• Business center</li>
                    <li>• Internet fibra</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Segurança */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Segurança e Ambiente Corporativo
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A Vila Olímpia oferece <strong>segurança compatível com um polo corporativo moderno</strong>:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Policiamento ostensivo 24h</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Segurança privada nos edifícios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Câmeras de monitoramento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Movimento intenso de executivos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Condomínios com tecnologia de ponta</span>
              </li>
            </ul>
          </section>

          {/* Valorização */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Valorização e Investimento
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              A Vila Olímpia apresenta <strong>forte valorização</strong> impulsionada pelo desenvolvimento 
              corporativo e é considerada um dos melhores investimentos imobiliários de São Paulo:
            </p>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl mb-6">
              <h4 className="text-xl font-bold mb-4">Por que investir na Vila Olímpia?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Polo de tecnologia:</strong> Concentra gigantes globais e startups</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Arquitetura moderna:</strong> Arranha-céus de última geração</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Vida noturna sofisticada:</strong> Bares e baladas de alto padrão</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Alta demanda:</strong> Procurado por jovens executivos e profissionais de tech</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>JK Iguatemi:</strong> Shopping de luxo na região</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-2xl p-10 text-center shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Encontre Seu Apartamento de Alto Padrão na Vila Olímpia
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Conheça nossa seleção exclusiva de apartamentos no polo corporativo mais moderno de São Paulo, 
                com empresas de tecnologia, JK Iguatemi e vida noturna sofisticada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/buscar/venda/apartamentos/sao-paulo/vila-olimpia"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Building2 className="w-5 h-5" />
                  Ver Apartamentos Disponíveis
                </Link>
                <a
                  href="#"
                  onClick={handleWhatsAppClick("Olá! Vi a página da Vila Olímpia no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes sobre Vila Olímpia
            </h2>
            
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quanto custa um apartamento de alto padrão na Vila Olímpia?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  O valor do m² na Vila Olímpia varia de <strong>R$ 15.000 a R$ 40.000</strong>, dependendo da 
                  localização, vista e infraestrutura. Apartamentos de 1-2 suítes (50-80m²) custam entre R$ 800 mil 
                  e R$ 2,5 milhões, enquanto unidades maiores (150-200m²) podem variar de R$ 3 milhões a R$ 7 milhões.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Por que a Vila Olímpia é tão procurada por profissionais de tecnologia?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  A <strong>Vila Olímpia</strong> concentra escritórios do Google, Facebook, LinkedIn, Microsoft e 
                  centenas de startups, criando um <strong>ecossistema de inovação</strong> vibrante. A 
                  <strong> proximidade com o trabalho</strong>, ambiente corporativo moderno e vida noturna 
                  sofisticada atraem jovens executivos e profissionais de tech.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Vale a pena investir em apartamento na Vila Olímpia?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Sim. A Vila Olímpia oferece <strong>forte valorização</strong> impulsionada pelo desenvolvimento 
                  corporativo. A <strong>demanda permanente</strong> de executivos e profissionais de tecnologia 
                  garante alta liquidez, e a <strong>infraestrutura moderna</strong> (JK Iguatemi, vida noturna, 
                  gastronomia) torna o bairro ideal para investimento.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  A Vila Olímpia é um bairro seguro?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  A Vila Olímpia oferece <strong>segurança compatível com um polo corporativo moderno</strong>. 
                  A região conta com policiamento ostensivo 24h, segurança privada nos edifícios corporativos, 
                  câmeras de monitoramento e movimento intenso de executivos. Os condomínios possuem sistemas 
                  de segurança de última geração.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quais são as principais vantagens de morar na Vila Olímpia?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  As principais vantagens são: <strong>polo de tecnologia</strong> (Google, Facebook, LinkedIn), 
                  <strong> vida noturna sofisticada</strong> (bares e baladas de luxo), 
                  <strong> arquitetura moderna</strong> (arranha-céus contemporâneos), 
                  <strong> JK Iguatemi</strong> (shopping de luxo), 
                  <strong> gastronomia de alto padrão</strong>, <strong>proximidade com Ponte Estaiada</strong>, 
                  <strong> ambiente jovem e dinâmico</strong>.
                </p>
              </details>
            </div>
          </section>

        </article>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": "Vila Olímpia",
              "description": "Polo corporativo moderno na Zona Sul de São Paulo, com empresas de tecnologia, Ponte Estaiada, JK Iguatemi e vida noturna sofisticada.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.5957",
                "longitude": "-46.6863"
              }
            })
          }}
        />
      </main>

      <WhatsappFloat
        message="Olá! Vi a página da Vila Olímpia no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região."
      />

      <Footer />
    </>
  );
}
