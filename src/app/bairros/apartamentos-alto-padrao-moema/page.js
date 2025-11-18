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
  Bird,
  Users
} from "lucide-react";

export default function MoemaAltoPadraoPage() {
  // Estados para imóveis reais
  const [imoveisMoema, setImoveisMoema] = useState([]);
  const [loadingImoveis, setLoadingImoveis] = useState(true);

  // Buscar imóveis de Moema à venda
  useEffect(() => {
    const buscarImoveisMoema = async () => {
      setLoadingImoveis(true);
      try {
        const params = {
          cidade: "São Paulo",
          bairrosArray: ["Moema", "MOEMA", "Moema Pássaros", "Moema Índios"],
          finalidade: "venda",
          status: "venda",
          sortField: "date",
          sortOrder: "desc",
        };
        
        console.log("[MOEMA-BUSCA] Buscando imóveis com params:", params);
        const response = await getImoveis(params, 1, 3);
        
        console.log("[MOEMA-BUSCA] Resposta da API:", {
          total: response?.imoveis?.length || 0,
          primeiros: response?.imoveis?.slice(0, 3).map(i => ({
            codigo: i.Codigo,
            empreendimento: i.Empreendimento,
            bairro: i.BairroComercial || i.Bairro
          }))
        });
        
        if (response?.imoveis && Array.isArray(response.imoveis)) {
          setImoveisMoema(response.imoveis);
        }
      } catch (error) {
        console.error("[MOEMA-BUSCA] Erro ao buscar imóveis de Moema:", error);
        setImoveisMoema([]);
      } finally {
        setLoadingImoveis(false);
      }
    };

    buscarImoveisMoema();
  }, []);

  // Função para abrir WhatsApp
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
              <span className="text-[#8B6F4B] font-medium">Moema</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[500px] w-full mt-20 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <Image
            src="/assets/images/bairros/apartamentos-alto-padrao-moema.jpg"
            alt="Vista aérea de Moema - Bairro de Alto Padrão ao lado do Parque Ibirapuera"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 pt-8 md:pt-0">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B] text-white rounded-full text-sm font-semibold mb-6">
                  <MapPin className="w-4 h-4" />
                  Zona Sul - São Paulo
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Apartamentos de Alto Padrão em Moema
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  O bairro com melhor IDH de São Paulo, ao lado do Parque Ibirapuera, com ruas arborizadas, 
                  metrô e infraestrutura completa para uma vida sofisticada e tranquila.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/buscar/venda/apartamentos/sao-paulo/moema"
                    className="inline-flex items-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors shadow-lg"
                  >
                    <Building2 className="w-5 h-5" />
                    Ver Apartamentos Disponíveis
                  </Link>
                  <a
                    href="#"
                    onClick={handleWhatsAppClick("Olá! Vi a página de Moema no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
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
                  <Trophy className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Melhor IDH de SP</h3>
                <p className="text-sm text-gray-600">0,961 - Muito Elevado</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trees className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Parque Ibirapuera</h3>
                <p className="text-sm text-gray-600">Ao lado do maior parque de SP</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Train className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">2 Estações de Metrô</h3>
                <p className="text-sm text-gray-600">Linha 5-Lilás (Moema e Eucaliptos)</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bird className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Ruas Arborizadas</h3>
                <p className="text-sm text-gray-600">Topografia plana e verde</p>
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
                  Imóveis Disponíveis em Moema
                </h2>
                <p className="text-gray-600">
                  {loadingImoveis 
                    ? "Carregando imóveis..." 
                    : imoveisMoema.length > 0 
                      ? `${imoveisMoema.length} ${imoveisMoema.length === 1 ? 'imóvel' : 'Imóveis em Destaque'}`
                      : "Confira nossa seleção exclusiva de apartamentos de alto padrão"
                  }
                </p>
              </div>
              <Link
                href="/buscar/venda/apartamentos/sao-paulo/moema"
                className="hidden md:inline-flex items-center gap-2 text-[#8B6F4B] font-semibold hover:gap-3 transition-all"
              >
                Veja Todos os Imóveis em Moema
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
                  ) : imoveisMoema.length > 0 ? (
                    imoveisMoema.map((imovel) => (
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
                href="/buscar/venda/apartamentos/sao-paulo/moema"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors"
              >
                Ver Todos os Apartamentos em Moema
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
              Por que Moema tem o Melhor IDH de São Paulo?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Moema</strong> ostenta com orgulho o título de bairro com <strong>melhor Índice de Desenvolvimento Humano (IDH) de São Paulo</strong>, 
              alcançando impressionantes <strong>0,961 pontos</strong> (classificação "muito elevado"). Este indicador reflete a excelente qualidade de vida 
              oferecida pelo bairro, que combina educação de primeira linha, infraestrutura completa, segurança acima da média e acesso privilegiado 
              a serviços de saúde.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Localizado na <strong>Zona Sul de São Paulo</strong>, ao lado do icônico <strong>Parque Ibirapuera</strong>, Moema conquistou 
              moradores e investidores pela sua atmosfera residencial tranquila, ruas arborizadas e planas, além da proximidade com os 
              principais centros de negócios da cidade. O bairro oferece <strong>apartamentos de alto padrão</strong> com valores de m² entre 
              <strong> R$ 15.000 e R$ 45.000</strong>, dependendo da localização e características do imóvel.
            </p>
          </section>

          {/* Moema Pássaros e Índios */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              As Duas Faces de Moema: Pássaros e Índios
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Uma das características mais encantadoras de Moema é sua divisão não-oficial em dois sub-bairros, 
              cada um com personalidade própria:
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-transparent border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Bird className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Moema Pássaros
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Localizado entre a <strong>Avenida Santo Amaro e a Avenida Ibirapuera</strong>, é a parte <strong>mais próxima 
                  do Parque Ibirapuera</strong>. As ruas levam nomes de pássaros como Canário, Gaivota, Pavão, Rouxinol, Jacutinga 
                  e Inhambu. É considerado o lado mais tranquilo e residencial, com atmosfera de "ar de interior" mesmo estando 
                  no coração de São Paulo.
                </p>
                <p className="text-sm text-gray-600 italic">
                  💡 Ideal para quem busca proximidade com áreas verdes e ambiente familiar
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-transparent border-l-4 border-amber-600 p-6 rounded-r-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-amber-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    Moema Índios
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Situado entre a <strong>Avenida Ibirapuera e a Avenida Moreira Guimarães</strong>, é a parte <strong>mais próxima 
                  do Aeroporto de Congonhas e do Shopping Ibirapuera</strong>. As ruas têm nomes de tribos indígenas como Maracatins, 
                  Nhambiquaras, Jandira e Jurema. Concentra mais comércio e serviços, sendo ideal para quem valoriza praticidade 
                  no dia a dia.
                </p>
                <p className="text-sm text-gray-600 italic">
                  💡 Perfeito para executivos que viajam frequentemente e valorizam conveniência
                </p>
              </div>
            </div>

            <div className="mt-6 bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 text-sm">
                <strong>Curiosidade:</strong> Nos dois sub-bairros existem <strong>767 condomínios</strong> de edifícios residenciais 
                com <strong>32.267 apartamentos</strong> ao todo, ocupando 27,8% da área total do bairro. O edifício mais alto é 
                o "The Place" na Rua Canário, 130, com 38 andares e vista para o Parque Ibirapuera.
              </p>
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
              Moema está posicionado estrategicamente entre importantes vias de São Paulo, oferecendo acesso 
              rápido a diversos pontos da cidade:
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#8B6F4B]/5 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Principais Avenidas
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida Ibirapuera:</strong> Principal via do bairro, arborizada e com ciclovia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida Santo Amaro:</strong> Conexão com Centro e Zona Oeste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida dos Bandeirantes:</strong> Ligação com Marginal Pinheiros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida República do Líbano:</strong> Acesso a Vila Mariana e Zona Leste</span>
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
                      <strong className="text-gray-900">Estação Moema (Linha 5-Lilás):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Inaugurada em 2018, conecta Moema à Av. Paulista, Zona Sul e bairros vizinhos
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Estação Eucaliptos (Linha 5-Lilás):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Segunda estação do bairro, próxima ao Shopping Ibirapuera
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Estação AACD-Servidor:</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Terceira estação próxima, inaugurada em 2018
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Ciclovias:</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Moema foi o primeiro bairro de SP a ter ciclofaixa. Topografia plana facilita deslocamentos de bike
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Aeroporto de Congonhas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Moema está a apenas <strong>10-15 minutos do Aeroporto de Congonhas</strong>, o mais movimentado do Brasil. 
                  Ideal para executivos e profissionais que viajam frequentemente a trabalho. O aeroporto oferece voos diários 
                  para as principais capitais do país.
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
                    <strong className="text-gray-900">Shopping Ibirapuera:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Inaugurado em 1976, é um dos mais tradicionais de SP. Possui <strong>426 lojas</strong>, 6 salas de cinema, 
                      2 praças de alimentação, coworking, posto dos Correios e unidade da Polícia Federal para emissão de passaporte. 
                      Localizado no coração de Moema Índios.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Shopping Móveis Moema:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      17 lojas especializadas em decoração, móveis e design com marcas nacionais e internacionais, 
                      além de cafeteria e coworking.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Comércio de Rua:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Forte comércio nas ruas Normandia (famosa pela decoração de Natal), Gaivota, Canário e avenidas 
                      Bem-Te-Vi, Eucaliptos e Pavão, com lojas de roupas, calçados, acessórios e grifes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Gastronomia */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Utensils className="w-6 h-6 text-[#8B6F4B]" />
                Gastronomia para Todos os Paladares
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Moema é reconhecida como um dos <strong>principais polos gastronômicos de São Paulo</strong>, oferecendo 
                opções para todos os gostos e ocasiões:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Alta gastronomia:</strong> Restaurantes premiados e chefs renomados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Culinária internacional:</strong> Italiana, japonesa, francesa, peruana, alemã, árabe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Bares sofisticados:</strong> Bar do Giba, Bourbon Street, Bar do Juarez, Bar Original</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Cafés especiais:</strong> Coffee labs e cafeterias artesanais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Padarias gourmet:</strong> Opções de pães artesanais e doces finos</span>
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
                    <strong className="text-gray-900">Hospital Alvorada:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Um dos principais hospitais da região, com pronto-socorro 24h e diversas especialidades médicas
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Hospital Moriah:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Atendimento de qualidade com foco em saúde integral
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Hospital Santa Paula:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Referência em atendimento médico na zona sul
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Clínicas e Laboratórios:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Fleury, Delboni Auriemo e inúmeras clínicas especializadas no bairro
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
                  <span className="text-gray-700 text-sm"><strong>Colégio Mobile:</strong> Uma das escolas mais conceituadas de São Paulo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Colégio da Companhia de Maria:</strong> Tradicional instituição católica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Escola Concept:</strong> Educação bilíngue de excelência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Faculdade Méliès:</strong> Ensino superior no bairro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>FMU Campus Santo Amaro:</strong> Próximo a Moema</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Escolas de idiomas:</strong> Grande variedade de cursos de línguas estrangeiras</span>
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
                    <strong className="text-gray-900">Parque Ibirapuera:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      O cartão-postal de São Paulo fica literalmente ao lado de Moema. Com 1,58 milhão de m², oferece museus, 
                      pistas de caminhada, ciclovia, playgrounds, quadras esportivas e eventos culturais. Ideal para qualidade 
                      de vida e lazer em família.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Parque das Bicicletas:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      20.000 m² dedicados a ciclismo, patins, skate e patinete, com pistas asfaltadas entre ipês, 
                      pitangueiras e palmeiras
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Parque do Povo:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Próximo a Moema, com 115.000 m² de área verde (10 min)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Clubes Tradicionais:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Monte Líbano, Ipê, Helvétia e Sírio - clubes exclusivos para prática esportiva e social
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
              Perfil dos Apartamentos de Alto Padrão em Moema
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Os imóveis de Moema são conhecidos pela <strong>qualidade construtiva</strong>, 
              <strong> acabamentos premium</strong> e <strong>localização privilegiada</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Características Típicas</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Metragem: 80m² a 500m²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">2 a 4 suítes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">2 a 4 vagas de garagem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Varandas com vista para áreas verdes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Plantas versáteis e bem aproveitadas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Diferenciais Premium</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Acabamentos de primeira linha</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Churrasqueira e espaço gourmet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Armários planejados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Sistemas de segurança modernos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Depósito privativo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8B6F4B]/10 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Áreas Comuns dos Condomínios</h4>
              <p className="text-gray-700 text-sm mb-3">
                Os edifícios de alto padrão em Moema oferecem infraestrutura completa:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Lazer:</p>
                  <ul className="space-y-1">
                    <li>• Piscinas</li>
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
                    <li>• Quadra esportiva</li>
                    <li>• Playground</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Serviços:</p>
                  <ul className="space-y-1">
                    <li>• Portaria 24h</li>
                    <li>• Brinquedoteca</li>
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
              Segurança e Qualidade de Vida
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Moema é reconhecida como <strong>um dos bairros mais seguros de São Paulo</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <div className="text-3xl font-bold text-green-700 mb-2">78%</div>
                <p className="text-sm text-gray-700">Dos moradores avaliam o bairro como seguro</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <div className="text-3xl font-bold text-blue-700 mb-2">90%</div>
                <p className="text-sm text-gray-700">Afirmam que as ruas são bem iluminadas</p>
              </div>
            </div>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">2 Batalhões da Polícia Militar na região</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Policiamento ostensivo 24h</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Ruas arborizadas e bem cuidadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Ambiente residencial e familiar</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Baixo risco de alagamentos (75% dos moradores)</span>
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
              Moema apresenta <strong>valorização constante</strong> e é considerado um dos melhores investimentos 
              imobiliários de São Paulo:
            </p>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl mb-6">
              <h4 className="text-xl font-bold mb-4">Por que investir em Moema?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Melhor IDH de SP:</strong> Indicador de qualidade de vida excepcional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Localização privilegiada:</strong> Ao lado do Parque Ibirapuera</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Infraestrutura consolidada:</strong> Tudo que você precisa no bairro</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Alta demanda:</strong> Bairro muito procurado por famílias e investidores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Metrô:</strong> 2 estações no bairro valorizaram ainda mais a região</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-2xl p-10 text-center shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Encontre Seu Apartamento de Alto Padrão em Moema
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Conheça nossa seleção exclusiva de apartamentos no bairro com melhor IDH de São Paulo, 
                ao lado do Parque Ibirapuera e com toda infraestrutura que você precisa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/buscar/venda/apartamentos/sao-paulo/moema"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Building2 className="w-5 h-5" />
                  Ver Apartamentos Disponíveis
                </Link>
                <a
                  href="#"
                  onClick={handleWhatsAppClick("Olá! Vi a página de Moema no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
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
              Perguntas Frequentes sobre Moema
            </h2>
            
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quanto custa um apartamento de alto padrão em Moema?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  O valor do m² em Moema varia de <strong>R$ 15.000 a R$ 80.000</strong>, dependendo da localização 
                  (Moema Pássaros geralmente é mais valorizado), proximidade com o Parque Ibirapuera, acabamentos e 
                  infraestrutura do condomínio. Apartamentos de 2 suítes (80-120m²) custam entre R$ 1,2 milhão e R$ 3 milhões, 
                  enquanto apartamentos maiores (150-250m²) podem variar de R$ 3 milhões a R$ 10 milhões.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Qual a diferença entre Moema Pássaros e Moema Índios?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  <strong>Moema Pássaros</strong> fica entre as avenidas Santo Amaro e Ibirapuera, é mais próximo do 
                  Parque Ibirapuera, tem ruas com nomes de pássaros e é mais residencial e tranquilo. Já <strong>Moema Índios</strong> 
                  fica entre as avenidas Ibirapuera e Moreira Guimarães, é mais próximo do Aeroporto de Congonhas e do 
                  Shopping Ibirapuera, tem ruas com nomes indígenas e concentra mais comércio e serviços.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Moema é um bairro seguro?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Sim. Moema é considerado <strong>um dos bairros mais seguros de São Paulo</strong>. Segundo pesquisas 
                  com moradores, 78% avaliam o bairro como seguro, 90% afirmam que as ruas são bem iluminadas e há baixo 
                  risco de alagamentos. O bairro conta com 2 batalhões da Polícia Militar e policiamento ostensivo 24h.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Vale a pena investir em apartamento em Moema?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Sim. Moema tem o <strong>melhor IDH de São Paulo (0,961)</strong>, infraestrutura consolidada, 
                  localização privilegiada ao lado do Parque Ibirapuera, 2 estações de metrô e demanda permanente. 
                  O bairro apresenta valorização constante e alta liquidez no mercado imobiliário, sendo excelente tanto 
                  para moradia quanto para investimento com aluguel.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quais são as principais vantagens de morar em Moema?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  As principais vantagens são: <strong>proximidade com o Parque Ibirapuera</strong>, 
                  <strong> 2 estações de metrô</strong> (Linha 5-Lilás), <strong>ruas arborizadas e planas</strong> 
                  (ideal para caminhar e andar de bike), <strong>gastronomia excepcional</strong>, 
                  <strong> Shopping Ibirapuera</strong>, <strong>proximidade com Aeroporto de Congonhas</strong> (10-15 min), 
                  <strong> segurança acima da média</strong>, <strong>melhor IDH de SP</strong> e 
                  <strong> ambiente residencial tranquilo</strong>.
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
              "name": "Moema",
              "description": "Bairro com melhor IDH de São Paulo, localizado na Zona Sul ao lado do Parque Ibirapuera, conhecido por suas ruas arborizadas, metrô e infraestrutura completa.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.6022",
                "longitude": "-46.6621"
              }
            })
          }}
        />
      </main>

      <WhatsappFloat
        message="Olá! Vi a página de Moema no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região."
      />

      <Footer />
    </>
  );
}
