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
  Building,
  Plane
} from "lucide-react";

export default function BrooklinAltoPadraoPage() {
  const [imoveisBrooklin, setImoveisBrooklin] = useState([]);
  const [loadingImoveis, setLoadingImoveis] = useState(true);

  useEffect(() => {
    const buscarImoveisBrooklin = async () => {
      setLoadingImoveis(true);
      try {
        const params = {
          cidade: "São Paulo",
          bairrosArray: [
            "Brooklin",
            "BROOKLIN",
            "brooklin"
          ],
          finalidade: "venda",
          status: "venda",
          sortField: "date",
          sortOrder: "desc",
        };
        
        console.log("[BROOKLIN-BUSCA] Buscando imóveis com params:", params);
        const response = await getImoveis(params, 1, 3);
        
        console.log("[BROOKLIN-BUSCA] Resposta da API:", {
          total: response?.imoveis?.length || 0,
          primeiros: response?.imoveis?.slice(0, 3).map(i => ({
            codigo: i.Codigo,
            empreendimento: i.Empreendimento,
            bairro: i.BairroComercial || i.Bairro
          }))
        });
        
        if (response?.imoveis && Array.isArray(response.imoveis)) {
          setImoveisBrooklin(response.imoveis);
        }
      } catch (error) {
        console.error("[BROOKLIN-BUSCA] Erro ao buscar imóveis do Brooklin:", error);
        setImoveisBrooklin([]);
      } finally {
        setLoadingImoveis(false);
      }
    };

    buscarImoveisBrooklin();
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
              <span className="text-[#8B6F4B] font-medium">Brooklin</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[500px] w-full mt-20 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <Image
            src="/assets/images/bairros/apartamentos-alto-padrao-brooklin.jpg"
            alt="Vista do bairro Brooklin - Principal Polo Corporativo de São Paulo"
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
                  Apartamentos de Alto Padrão no Brooklin
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  O principal polo corporativo de São Paulo, com Avenida Berrini, WTC, 
                  Ponte Estaiada e infraestrutura completa de hotéis e shoppings de luxo.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/buscar/venda/apartamentos/sao-paulo/brooklin"
                    className="inline-flex items-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors shadow-lg"
                  >
                    <Building2 className="w-5 h-5" />
                    Ver Apartamentos Disponíveis
                  </Link>
                  <a
                    href="#"
                    onClick={handleWhatsAppClick("Olá! Vi a página do Brooklin no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors cursor-pointer"
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
                <p className="text-sm text-gray-600">Berrini + WTC + 300+ empresas</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Arquitetura Moderna</h3>
                <p className="text-sm text-gray-600">Arranha-céus contemporâneos</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Próximo a Congonhas</h3>
                <p className="text-sm text-gray-600">10-15 minutos do aeroporto</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Hotel className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Hotéis de Luxo</h3>
                <p className="text-sm text-gray-600">Hilton + Grand Hyatt + Renaissance</p>
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
                  Imóveis Disponíveis no Brooklin
                </h2>
                <p className="text-gray-600">
                  {loadingImoveis 
                    ? "Carregando imóveis..." 
                    : imoveisBrooklin.length > 0 
                      ? `${imoveisBrooklin.length} ${imoveisBrooklin.length === 1 ? 'imóvel' : 'Imóveis em Destaque'}`
                      : "Confira nossa seleção exclusiva de apartamentos de alto padrão"
                  }
                </p>
              </div>
              <Link
                href="/buscar/venda/apartamentos/sao-paulo/brooklin"
                className="hidden md:inline-flex items-center gap-2 text-[#8B6F4B] font-semibold hover:gap-3 transition-all"
              >
                Veja Todos os Imóveis no Brooklin
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
                  ) : imoveisBrooklin.length > 0 ? (
                    imoveisBrooklin.map((imovel) => (
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
                href="/buscar/venda/apartamentos/sao-paulo/brooklin"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors"
              >
                Ver Todos os Apartamentos no Brooklin
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
              Por que o Brooklin é o Principal Polo Corporativo de São Paulo?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              O <strong>Brooklin</strong> consolidou-se como o principal polo financeiro e corporativo de São Paulo nas últimas décadas. 
              A partir dos anos 1990, com o desenvolvimento da <strong>Avenida Engenheiro Luís Carlos Berrini</strong> e a construção do 
              <strong> World Trade Center (WTC)</strong>, o bairro transformou-se em epicentro de negócios, abrigando sedes de multinacionais, 
              consultorias internacionais e escritórios corporativos de altíssimo padrão.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Localizado na <strong>Zona Sul de São Paulo</strong>, às margens da Marginal Pinheiros, o Brooklin oferece 
              <strong> apartamentos de alto padrão</strong> com valores de m² entre <strong>R$ 10.000 e R$ 18.000</strong>, 
              atraindo executivos, empresários e profissionais que valorizam proximidade ao trabalho, mobilidade urbana e 
              infraestrutura moderna de hotéis, restaurantes e shoppings de luxo.
            </p>
          </section>

          {/* Berrini e WTC */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Avenida Berrini e World Trade Center
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A <strong>Avenida Engenheiro Luís Carlos Berrini</strong> é o coração financeiro do Brooklin, concentrando 
              arranha-céus de arquitetura contemporânea que abrigam gigantes do mercado global como Google, Microsoft, IBM, 
              Deloitte, PwC e Ernst & Young.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Building className="w-6 h-6 text-blue-600" />
                  Polo de Negócios Globais
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  O bairro abriga mais de <strong>300 empresas multinacionais</strong>, escritórios de advocacia internacional, 
                  consultorias estratégicas e fundos de investimento. É o endereço preferencial para companhias que buscam 
                  visibilidade, acessibilidade e infraestrutura corporativa de classe mundial.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-transparent border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                  World Trade Center (WTC)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  O <strong>WTC São Paulo</strong> é um complexo multiuso que reúne torres corporativas, hotel 5 estrelas, 
                  centro de convenções e shopping center. Representa a modernidade e sofisticação que definem o Brooklin, 
                  sendo palco de eventos empresariais, feiras internacionais e conferências de negócios.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ponte Estaiada - Ícone Arquitetônico
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A <strong>Ponte Octavio Frias de Oliveira (Ponte Estaiada)</strong>, cartão-postal de São Paulo, conecta o Brooklin 
                  à Marginal Pinheiros e é símbolo da pujança econômica da região. Sua estrutura em formato de "X" tornou-se 
                  referência mundial de engenharia e design urbano.
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
              O Brooklin está posicionado estrategicamente na Zona Sul de São Paulo, oferecendo acesso 
              rápido a diversos pontos da cidade através de importantes vias e opções de transporte:
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#8B6F4B]/5 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Principais Avenidas
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida Berrini:</strong> Principal via corporativa do bairro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Marginal Pinheiros:</strong> Ligação com toda a cidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida Santo Amaro:</strong> Conexão com Centro e Zona Sul</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Ponte Estaiada:</strong> Acesso rápido à Marginal Pinheiros</span>
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
                      <strong className="text-gray-900">Estação Brooklin (Linha 9-Esmeralda):</strong>
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
                        Diversas linhas atravessam o bairro, conectando a diferentes pontos da cidade
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

              <div className="bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-purple-600" />
                  Aeroporto de Congonhas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  O Brooklin está a apenas <strong>10-15 minutos do Aeroporto de Congonhas</strong>, o mais movimentado do Brasil. 
                  Ideal para executivos e profissionais que viajam frequentemente a trabalho. O aeroporto oferece voos diários 
                  para as principais capitais do país, além de conexões internacionais.
                </p>
              </div>
            </div>
          </section>

          {/* Infraestrutura Completa */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Infraestrutura Completa para uma Vida Sofisticada
            </h2>

            {/* Shopping */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-[#8B6F4B]" />
                Shopping Centers e Comércio
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Morumbi Shopping:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Um dos maiores shoppings de São Paulo, próximo ao Brooklin, com mais de <strong>440 lojas</strong>, 
                      11 salas de cinema, restaurantes de alta gastronomia e marcas internacionais de luxo. Inaugurado em 1982, 
                      é referência em compras sofisticadas na Zona Sul.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">WTC Shopping:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Localizado dentro do complexo World Trade Center, oferece lojas, restaurantes e serviços voltados 
                      para o público executivo e corporativo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Comércio na Berrini:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      A Avenida Berrini concentra cafeterias sofisticadas, restaurantes executivos, academias premium, 
                      agências bancárias e serviços especializados para o público corporativo.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Gastronomia */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Utensils className="w-6 h-6 text-[#8B6F4B]" />
                Gastronomia para Executivos e Gourmets
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                O Brooklin oferece uma <strong>cena gastronômica voltada para o público executivo</strong>, com restaurantes 
                sofisticados, cafés especializados e opções de alta gastronomia:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Restaurantes executivos:</strong> Almoços de negócios em ambientes corporativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Steakhouses premium:</strong> Churrascarias de alto padrão com carnes nobres</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Culinária internacional:</strong> Italiana, japonesa, peruana, francesa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Bares sofisticados:</strong> Wine bars e lounges para happy hour</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Coffee shops premium:</strong> Cafés especializados com grãos importados</span>
                </li>
              </ul>
            </div>

            {/* Hotéis */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Hotel className="w-6 h-6 text-[#8B6F4B]" />
                Hotéis de Luxo
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Grand Hyatt São Paulo:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Hotel 5 estrelas com 466 quartos, spa completo, piscina, restaurantes premiados e centro de convenções. 
                      Referência em hospitalidade corporativa de luxo.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Hilton São Paulo Morumbi:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Hotel corporativo de alto padrão próximo ao Brooklin, com infraestrutura completa para eventos 
                      e hospedagem executiva.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Renaissance São Paulo Hotel:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Localizado em frente ao Shopping Ibirapuera, oferece conforto e sofisticação para viajantes 
                      corporativos e turistas.
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
                    <strong className="text-gray-900">Hospital Santa Paula:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Referência em atendimento médico na região, próximo ao Brooklin
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Hospital São Luiz Morumbi:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Hospital de alta complexidade próximo ao bairro
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Clínicas e Laboratórios:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Fleury, Delboni Auriemo, Lavoisier e diversas clínicas especializadas na região
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Educação */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#8B6F4B]" />
                Educação de Primeira Linha
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Colégio Santa Cruz:</strong> Uma das melhores escolas de SP, próxima ao bairro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Escola Vera Cruz:</strong> Educação de excelência reconhecida nacionalmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Colégio Porto Seguro:</strong> Instituição tradicional próxima à região</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Escolas de idiomas:</strong> Grande variedade de cursos para executivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Universidades:</strong> FMU e outras instituições de ensino superior próximas</span>
                </li>
              </ul>
            </div>

            {/* Áreas Verdes */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Trees className="w-6 h-6 text-[#8B6F4B]" />
                Áreas Verdes e Lazer
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Parque do Povo:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Próximo ao Brooklin, com 115.000 m² de área verde, pistas de caminhada, ciclovia, quadras esportivas 
                      e playground. Ideal para atividades ao ar livre e qualidade de vida.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Parque Ibirapuera:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      A poucos minutos do Brooklin, o maior parque urbano de São Paulo oferece museus, pistas, 
                      eventos culturais e lazer completo (15 minutos)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Academias Premium:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      SmartFit, Bodytech, Velocity e outras redes de alta qualidade espalhadas pelo bairro
                    </p>
                  </div>
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
              Perfil dos Apartamentos de Alto Padrão no Brooklin
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Os imóveis do Brooklin são conhecidos pela <strong>arquitetura moderna</strong>, 
              <strong> acabamentos corporativos</strong> e <strong>localização estratégica</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Características Típicas</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Metragem: 60m² a 300m²</span>
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
                    <span className="text-gray-700 text-sm">Varandas com vista para a cidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Plantas funcionais e modernas</span>
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
                    <span className="text-gray-700 text-sm">Home office integrado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Automação residencial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Sistemas de segurança modernos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Proximidade com escritórios corporativos</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8B6F4B]/10 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Áreas Comuns dos Condomínios</h4>
              <p className="text-gray-700 text-sm mb-3">
                Os edifícios de alto padrão no Brooklin oferecem infraestrutura completa:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Lazer:</p>
                  <ul className="space-y-1">
                    <li>• Piscina</li>
                    <li>• Salão de festas</li>
                    <li>• Espaço gourmet</li>
                    <li>• Churrasqueira</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Bem-estar:</p>
                  <ul className="space-y-1">
                    <li>• Academia</li>
                    <li>• Sauna</li>
                    <li>• Sala de massagem</li>
                    <li>• Espaço zen</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Serviços:</p>
                  <ul className="space-y-1">
                    <li>• Portaria 24h</li>
                    <li>• Coworking</li>
                    <li>• Pet place</li>
                    <li>• Bicicletário</li>
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
              O Brooklin oferece <strong>segurança compatível com um polo corporativo de alto padrão</strong>:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Policiamento ostensivo 24h na Berrini e adjacências</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Segurança privada nos edifícios corporativos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Câmeras de monitoramento nas principais vias</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Movimento intenso durante horário comercial</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Condomínios com portaria 24h e sistemas de segurança</span>
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
              O Brooklin apresenta <strong>valorização consistente</strong> impulsionada pelo desenvolvimento corporativo 
              e é considerado um dos melhores investimentos imobiliários para quem busca proximidade com centros de negócios:
            </p>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl mb-6">
              <h4 className="text-xl font-bold mb-4">Por que investir no Brooklin?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Principal polo corporativo:</strong> Concentra as maiores empresas do país</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Localização estratégica:</strong> Marginal Pinheiros e Ponte Estaiada</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Infraestrutura hoteleira:</strong> Atrai executivos e turistas de negócios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Alta demanda:</strong> Procurado por profissionais que trabalham na região</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Próximo a Congonhas:</strong> Ideal para quem viaja a trabalho</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-2xl p-10 text-center shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Encontre Seu Apartamento de Alto Padrão no Brooklin
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Conheça nossa seleção exclusiva de apartamentos no principal polo corporativo de São Paulo, 
                com Berrini, WTC, Ponte Estaiada e toda infraestrutura que você precisa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/buscar/venda/apartamentos/sao-paulo/brooklin"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Building2 className="w-5 h-5" />
                  Ver Apartamentos Disponíveis
                </Link>
                <a
                  href="#"
                  onClick={handleWhatsAppClick("Olá! Vi a página do Brooklin no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
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
              Perguntas Frequentes sobre o Brooklin
            </h2>
            
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quanto custa um apartamento de alto padrão no Brooklin?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  O valor do m² no Brooklin varia de <strong>R$ 10.000 a R$ 18.000</strong>, dependendo da 
                  proximidade à Berrini, vista e infraestrutura. Apartamentos de 2-3 suítes (80-120m²) custam 
                  entre R$ 1 milhão e R$ 2 milhões, enquanto unidades maiores (150-250m²) podem variar de 
                  R$ 2,5 milhões a R$ 4 milhões.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Por que a Avenida Berrini é tão importante?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  A <strong>Avenida Engenheiro Luís Carlos Berrini</strong> é o coração do polo financeiro do Brooklin, 
                  abrigando mais de 300 empresas multinacionais como Google, Microsoft, IBM, Deloitte e PwC. 
                  É o endereço corporativo mais prestigiado de São Paulo, com arranha-céus de arquitetura contemporânea 
                  e infraestrutura completa de restaurantes, cafés e serviços executivos.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Vale a pena investir em apartamento no Brooklin?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Sim. O Brooklin oferece <strong>valorização consistente</strong> impulsionada pelo desenvolvimento corporativo. 
                  A <strong>demanda executiva permanente</strong> garante alta liquidez, e a <strong>infraestrutura moderna</strong> 
                  (hotéis, shoppings, mobilidade) torna o bairro ideal para quem valoriza proximidade ao trabalho e ao 
                  Aeroporto de Congonhas.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  O Brooklin é um bairro seguro?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  O Brooklin oferece <strong>segurança compatível com um polo corporativo de alto padrão</strong>. 
                  A região conta com policiamento ostensivo 24h na Berrini, segurança privada nos edifícios corporativos, 
                  câmeras de monitoramento e movimento intenso durante horário comercial. Os condomínios residenciais 
                  possuem portaria 24h e sistemas de segurança modernos.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quais são as principais vantagens de morar no Brooklin?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  As principais vantagens são: <strong>polo corporativo</strong> (Berrini + WTC), 
                  <strong> mobilidade urbana</strong> (Marginal Pinheiros + Ponte Estaiada + metrô), 
                  <strong> proximidade com Congonhas</strong> (10-15 min), 
                  <strong> hotéis 5 estrelas</strong> (Grand Hyatt, Hilton), 
                  <strong> shoppings de luxo</strong> (Morumbi Shopping), 
                  <strong> arquitetura moderna</strong> e <strong>proximidade ao trabalho</strong> 
                  (ideal para executivos).
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
              "name": "Brooklin",
              "description": "Principal polo corporativo de São Paulo, com Avenida Berrini, WTC, Ponte Estaiada e infraestrutura moderna de hotéis e shoppings de luxo.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.6067",
                "longitude": "-46.6887"
              }
            })
          }}
        />
      </main>

      <WhatsappFloat
        message="Olá! Vi a página do Brooklin no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região."
      />

      <Footer />
    </>
  );
}
