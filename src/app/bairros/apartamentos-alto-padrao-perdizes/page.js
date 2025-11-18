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
  Heart,
  Music
} from "lucide-react";

export default function PerdizelAltoPadraoPage() {
  const [imoveisPerdizes, setImoveisPerdizes] = useState([]);
  const [loadingImoveis, setLoadingImoveis] = useState(true);

  useEffect(() => {
    const buscarImoveisPerdizes = async () => {
      setLoadingImoveis(true);
      try {
        const params = {
          cidade: "São Paulo",
          bairrosArray: [
            "Perdizes",
            "PERDIZES",
            "perdizes"
          ],
          finalidade: "venda",
          status: "venda",
          sortField: "date",
          sortOrder: "desc",
        };
        
        console.log("[PERDIZES-BUSCA] Buscando imóveis com params:", params);
        const response = await getImoveis(params, 1, 3);
        
        console.log("[PERDIZES-BUSCA] Resposta da API:", {
          total: response?.imoveis?.length || 0,
          primeiros: response?.imoveis?.slice(0, 3).map(i => ({
            codigo: i.Codigo,
            empreendimento: i.Empreendimento,
            bairro: i.BairroComercial || i.Bairro
          }))
        });
        
        if (response?.imoveis && Array.isArray(response.imoveis)) {
          setImoveisPerdizes(response.imoveis);
        }
      } catch (error) {
        console.error("[PERDIZES-BUSCA] Erro ao buscar imóveis de Perdizes:", error);
        setImoveisPerdizes([]);
      } finally {
        setLoadingImoveis(false);
      }
    };

    buscarImoveisPerdizes();
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
              <span className="text-[#8B6F4B] font-medium">Perdizes</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[500px] w-full mt-20 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <Image
            src="/assets/images/bairros/apartamentos-alto-padrao-perdizes.jpg"
            alt="Vista de Perdizes - Bairro Arborizado com PUC-SP e Allianz Parque"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 pt-8 md:pt-0">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B] text-white rounded-full text-sm font-semibold mb-6">
                  <GraduationCap className="w-4 h-4" />
                  Zona Oeste - São Paulo
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Apartamentos de Alto Padrão em Perdizes
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  Bairro arborizado e residencial com PUC-SP, Allianz Parque, Sesc Pompeia 
                  e infraestrutura completa próxima à Av. Sumaré e Vila Madalena.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/buscar/venda/apartamentos/sao-paulo/perdizes"
                    className="inline-flex items-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors shadow-lg"
                  >
                    <Building2 className="w-5 h-5" />
                    Ver Apartamentos Disponíveis
                  </Link>
                  <a
                    href="#"
                    onClick={handleWhatsAppClick("Olá! Vi a página de Perdizes no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
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
                  <GraduationCap className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">PUC-SP</h3>
                <p className="text-sm text-gray-600">Universidade tradicional</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trees className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Muito Arborizado</h3>
                <p className="text-sm text-gray-600">Ruas arborizadas e tranquilas</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Allianz Parque</h3>
                <p className="text-sm text-gray-600">Arena multiuso moderna</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Music className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Sesc Pompeia</h3>
                <p className="text-sm text-gray-600">Centro cultural icônico</p>
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
                  Imóveis Disponíveis em Perdizes
                </h2>
                <p className="text-gray-600">
                  {loadingImoveis 
                    ? "Carregando imóveis..." 
                    : imoveisPerdizes.length > 0 
                      ? `${imoveisPerdizes.length} ${imoveisPerdizes.length === 1 ? 'imóvel' : 'Imóveis em Destaque'}`
                      : "Confira nossa seleção exclusiva de apartamentos de alto padrão"
                  }
                </p>
              </div>
              <Link
                href="/buscar/venda/apartamentos/sao-paulo/perdizes"
                className="hidden md:inline-flex items-center gap-2 text-[#8B6F4B] font-semibold hover:gap-3 transition-all"
              >
                Veja Todos os Imóveis em Perdizes
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
                  ) : imoveisPerdizes.length > 0 ? (
                    imoveisPerdizes.map((imovel) => (
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
                href="/buscar/venda/apartamentos/sao-paulo/perdizes"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors"
              >
                Ver Todos os Apartamentos em Perdizes
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
              Por que Perdizes é um Bairro Tradicional e Arborizado?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Perdizes</strong> é um dos bairros mais tradicionais e arborizados da Zona Oeste de São Paulo, 
              conhecido por seu caráter <strong>residencial tranquilo</strong> e pela presença marcante da 
              <strong> Pontifícia Universidade Católica de São Paulo (PUC-SP)</strong>. O bairro combina atmosfera 
              familiar, ruas arborizadas, excelente infraestrutura comercial e proximidade com importantes eixos da cidade 
              como a <strong>Avenida Sumaré</strong> e a <strong>Vila Madalena</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Localizado estrategicamente na Zona Oeste, Perdizes oferece <strong>apartamentos de alto padrão</strong> com 
              valores de m² entre <strong>R$ 10.000 e R$ 25.000</strong>, atraindo famílias, profissionais liberais e 
              universitários que valorizam qualidade de vida, segurança acima da média e fácil acesso a centros culturais 
              como o <strong>Sesc Pompeia</strong> e o <strong>Allianz Parque</strong>.
            </p>
          </section>

          {/* PUC-SP e Educação */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              PUC-SP e o Espírito Universitário de Perdizes
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A <strong>Pontifícia Universidade Católica de São Paulo (PUC-SP)</strong> é o coração acadêmico de Perdizes, 
              conferindo ao bairro uma atmosfera jovem, cultural e intelectual. Fundada em 1946, a PUC-SP é uma das 
              instituições de ensino superior mais prestigiadas do Brasil.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  Campus Monte Alegre
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  O <strong>Campus Monte Alegre</strong> da PUC-SP ocupa área extensa no bairro, com prédios históricos, 
                  bibliotecas, centros de pesquisa e espaços culturais. A universidade atrai milhares de estudantes 
                  diariamente, dinamizando o comércio local com cafés, livrarias, restaurantes e repúblicas estudantis.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-transparent border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Tradição Acadêmica
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A PUC-SP é reconhecida nacionalmente por cursos de <strong>Direito, Ciências Sociais, Filosofia, Psicologia 
                  e Comunicação</strong>. A presença da universidade confere a Perdizes um ambiente intelectual vibrante, 
                  com debates, eventos culturais e forte senso de comunidade.
                </p>
              </div>
            </div>
          </section>

          {/* Allianz Parque e Sesc Pompeia */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Allianz Parque e Sesc Pompeia: Lazer e Cultura
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Perdizes abriga dois dos espaços mais emblemáticos de São Paulo: o <strong>Allianz Parque</strong> e o 
              <strong> Sesc Pompeia</strong>, que oferecem entretenimento, cultura e lazer de altíssima qualidade.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-transparent border-l-4 border-green-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-green-600" />
                  Allianz Parque
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Inaugurado em 2014, o <strong>Allianz Parque</strong> é uma arena multiuso moderna com capacidade para 
                  43 mil pessoas. Casa do <strong>Palmeiras</strong>, o estádio sedia também shows internacionais de grande 
                  porte (Paul McCartney, Coldplay, Iron Maiden). Sua arquitetura contemporânea e infraestrutura de ponta 
                  tornaram-no referência na América Latina.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Music className="w-6 h-6 text-purple-600" />
                  Sesc Pompeia
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  O <strong>Sesc Pompeia</strong>, projetado pela arquiteta italiana Lina Bo Bardi, é um dos centros culturais 
                  mais importantes de São Paulo. Instalado em antiga fábrica de tambores, o espaço oferece teatro, cinema, 
                  exposições de arte, biblioteca, piscinas, quadras esportivas e restaurante. É ponto de encontro da 
                  intelectualidade paulistana e símbolo da revitalização urbana.
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
              Perdizes está bem posicionado na Zona Oeste de São Paulo, oferecendo acesso 
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
                    <span className="text-gray-700"><strong>Avenida Sumaré:</strong> Principal via do bairro, conecta a Lapa e Pacaembu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Rua Cardoso de Almeida:</strong> Eixo comercial importante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Rua Monte Alegre:</strong> Onde está a PUC-SP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida Pompeia:</strong> Ligação com Lapa e Pinheiros</span>
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
                      <strong className="text-gray-900">Estação Barra Funda (Linha 3-Vermelha):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Próxima ao bairro, conecta ao Centro e Zona Leste (15 minutos)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Estação Palmeiras-Barra Funda (Linha 7-Rubi CPTM):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Conexão com a Grande São Paulo
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Linhas de Ônibus:</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Diversas linhas atravessam o bairro, conectando a Pinheiros, Lapa, Centro e Zona Sul
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
              Infraestrutura Completa para Qualidade de Vida
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
                    <strong className="text-gray-900">Shopping West Plaza:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Shopping completo no coração de Perdizes, com supermercado, lojas, cinema, praça de alimentação 
                      e serviços diversos. Inaugurado em 1991, atende bem a demanda local.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Bourbon Shopping São Paulo:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Próximo ao bairro, na Barra Funda, oferece cinema, restaurantes e lojas (10 minutos)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Comércio de Rua:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Forte comércio nas ruas Cardoso de Almeida, Monte Alegre e Caiubi, com padarias, farmácias, 
                      restaurantes, cafés e serviços variados.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Gastronomia */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Utensils className="w-6 h-6 text-[#8B6F4B]" />
                Gastronomia para Todos os Gostos
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Perdizes oferece <strong>variedade gastronômica</strong> que atende desde estudantes universitários 
                até famílias e moradores tradicionais:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Restaurantes tradicionais:</strong> Cantinas italianas, churrascarias, comida brasileira</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Culinária universitária:</strong> Lanchonetes, pizzarias, fast-food</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Cafés especializados:</strong> Cafeterias artesanais e espaços de coworking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Bares e pubs:</strong> Opções para happy hour e encontros</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Padarias tradicionais:</strong> Padarias de bairro com produtos artesanais</span>
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
                    <strong className="text-gray-900">Hospital São Camilo - Pompeia:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Hospital tradicional e renomado, com pronto-socorro 24h e diversas especialidades médicas
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Hospital das Clínicas (HC-FMUSP):</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Próximo ao bairro, referência em atendimento médico de alta complexidade (15 minutos)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Clínicas e Laboratórios:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Fleury, Delboni, Lavoisier e diversas clínicas médicas e odontológicas no bairro
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
                  <span className="text-gray-700 text-sm"><strong>PUC-SP:</strong> Universidade de excelência reconhecida nacionalmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Colégio Santa Maria:</strong> Tradicional escola católica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Colégio Objetivo:</strong> Rede de ensino reconhecida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Escolas de idiomas:</strong> Grande variedade de cursos de línguas estrangeiras</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Faculdade de Medicina da USP:</strong> Próxima ao bairro (10 minutos)</span>
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
                    <strong className="text-gray-900">Praça Homero Silva:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Praça arborizada no coração de Perdizes, ideal para caminhadas e atividades ao ar livre
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Parque da Água Branca:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Próximo ao bairro, parque histórico com feira orgânica aos fins de semana (10 minutos)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Ruas Arborizadas:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Perdizes é conhecido pelas ruas arborizadas e tranquilas, ideais para caminhadas
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
              Perfil dos Apartamentos de Alto Padrão em Perdizes
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Os imóveis de Perdizes são conhecidos pelo <strong>caráter residencial</strong>, 
              <strong> atmosfera tranquila</strong> e <strong>proximidade com serviços</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Características Típicas</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Metragem: 60m² a 250m²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">2 a 4 dormitórios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">1 a 2 vagas de garagem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Plantas funcionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Edifícios de médio porte</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Diferenciais</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Ruas arborizadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Ambiente tranquilo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Proximidade com PUC-SP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Boa relação custo-benefício</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Perfil familiar</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8B6F4B]/10 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Áreas Comuns dos Condomínios</h4>
              <p className="text-gray-700 text-sm mb-3">
                Os edifícios em Perdizes oferecem infraestrutura completa:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Lazer:</p>
                  <ul className="space-y-1">
                    <li>• Salão de festas</li>
                    <li>• Churrasqueira</li>
                    <li>• Playground</li>
                    <li>• Piscina</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Bem-estar:</p>
                  <ul className="space-y-1">
                    <li>• Academia</li>
                    <li>• Quadra</li>
                    <li>• Sauna</li>
                    <li>• Espaço zen</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Serviços:</p>
                  <ul className="space-y-1">
                    <li>• Portaria 24h</li>
                    <li>• Bicicletário</li>
                    <li>• Pet place</li>
                    <li>• Lavanderia</li>
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
              Perdizes oferece <strong>segurança compatível com um bairro residencial tranquilo</strong>:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Policiamento regular nas ruas principais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Ruas arborizadas e iluminadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Ambiente familiar e tranquilo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Condomínios com portaria 24h</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Movimento constante de pedestres</span>
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
              Perdizes apresenta <strong>valorização consistente</strong> e é considerado um excelente investimento 
              para quem busca qualidade de vida e boa relação custo-benefício:
            </p>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl mb-6">
              <h4 className="text-xl font-bold mb-4">Por que investir em Perdizes?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Bairro tradicional:</strong> Atmosfera familiar e tranquila</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>PUC-SP:</strong> Demanda permanente de estudantes e professores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Localização estratégica:</strong> Próximo a Vila Madalena, Lapa e Centro</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Infraestrutura completa:</strong> Comércio, saúde e educação de qualidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Allianz Parque:</strong> Valorizou a região com eventos de grande porte</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-2xl p-10 text-center shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Encontre Seu Apartamento de Alto Padrão em Perdizes
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Conheça nossa seleção exclusiva de apartamentos em um dos bairros mais arborizados e tradicionais 
                de São Paulo, com PUC-SP, Allianz Parque e Sesc Pompeia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/buscar/venda/apartamentos/sao-paulo/perdizes"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Building2 className="w-5 h-5" />
                  Ver Apartamentos Disponíveis
                </Link>
                <a
                  href="#"
                  onClick={handleWhatsAppClick("Olá! Vi a página de Perdizes no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
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
              Perguntas Frequentes sobre Perdizes
            </h2>
            
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quanto custa um apartamento de alto padrão em Perdizes?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  O valor do m² em Perdizes varia de <strong>R$ 10.000 a R$ 25.000</strong>, dependendo da 
                  localização, proximidade com a PUC-SP e infraestrutura. Apartamentos de 2-3 dormitórios (70-100m²) custam 
                  entre R$ 700 mil e R$ 2 milhões, oferecendo boa relação custo-benefício comparado a outros bairros 
                  da Zona Oeste.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Por que a PUC-SP é importante para o bairro?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  A <strong>PUC-SP</strong> confere a Perdizes uma atmosfera universitária vibrante, atraindo estudantes, 
                  professores e profissionais liberais. A universidade dinamiza o comércio local (cafés, livrarias, 
                  restaurantes) e garante <strong>demanda permanente por imóveis</strong>, tornando o bairro atrativo 
                  para investidores interessados em locação.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Vale a pena investir em apartamento em Perdizes?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Sim. Perdizes oferece <strong>valorização consistente</strong>, boa relação custo-benefício e 
                  <strong> demanda permanente</strong> por sua atmosfera tranquila, infraestrutura completa e proximidade 
                  com a PUC-SP. É ideal tanto para moradia quanto para investimento com aluguel, especialmente para 
                  estudantes e famílias.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Perdizes é um bairro seguro?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Perdizes é considerado <strong>um bairro seguro e tranquilo</strong>. A região tem perfil residencial, 
                  ruas arborizadas e iluminadas, policiamento regular e movimento constante de pedestres. Os condomínios 
                  possuem portaria 24h e sistemas de segurança, contribuindo para a sensação de segurança dos moradores.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quais são as principais vantagens de morar em Perdizes?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  As principais vantagens são: <strong>bairro arborizado</strong>, 
                  <strong> atmosfera tranquila e familiar</strong>, <strong>PUC-SP</strong> (vida universitária), 
                  <strong> Allianz Parque</strong> (eventos e shows), <strong>Sesc Pompeia</strong> (cultura), 
                  <strong> proximidade com Vila Madalena</strong>, <strong>infraestrutura completa</strong> 
                  (comércio, saúde, educação) e <strong>boa relação custo-benefício</strong>.
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
              "name": "Perdizes",
              "description": "Bairro arborizado e residencial na Zona Oeste de São Paulo, com PUC-SP, Allianz Parque, Sesc Pompeia e infraestrutura completa.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.5298",
                "longitude": "-46.6753"
              }
            })
          }}
        />
      </main>

      <WhatsappFloat
        message="Olá! Vi a página de Perdizes no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região."
      />

      <Footer />
    </>
  );
}
