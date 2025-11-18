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
  Briefcase,
  Sparkles
} from "lucide-react";

export default function ItaimBibiAltoPadraoPage() {
  // Estados para imóveis reais
  const [imoveisItaim, setImoveisItaim] = useState([]);
  const [loadingImoveis, setLoadingImoveis] = useState(true);

  // Buscar imóveis do Itaim Bibi à venda
  useEffect(() => {
    const buscarImoveisItaim = async () => {
      setLoadingImoveis(true);
      try {
        // Tentar buscar com diferentes variações do nome do bairro
        const params = {
          cidade: "São Paulo",
          // FIXED: Buscar com múltiplas variações possíveis do bairro
          bairrosArray: ["Itaim Bibi", "Itaim", "ITAIM BIBI", "ITAIM"],
          finalidade: "venda",
          status: "venda",
          sortField: "date",
          sortOrder: "desc",
        };
        
        console.log("[ITAIM-BUSCA] Buscando imóveis com params:", params);
        const response = await getImoveis(params, 1, 3); // ✅ 3 amostras de imóveis (gatilho de curiosidade)
        
        console.log("[ITAIM-BUSCA] Resposta da API:", {
          total: response?.imoveis?.length || 0,
          primeiros: response?.imoveis?.slice(0, 3).map(i => ({
            codigo: i.Codigo,
            empreendimento: i.Empreendimento,
            bairro: i.BairroComercial || i.Bairro
          }))
        });
        
        if (response?.imoveis && Array.isArray(response.imoveis)) {
          setImoveisItaim(response.imoveis);
        }
      } catch (error) {
        console.error("[ITAIM-BUSCA] Erro ao buscar imóveis do Itaim Bibi:", error);
        setImoveisItaim([]);
      } finally {
        setLoadingImoveis(false);
      }
    };

    buscarImoveisItaim();
  }, []);

  // Função para abrir WhatsApp (mesma lógica do WhatsappFloat)
  const handleWhatsAppClick = (message) => (e) => {
    e.preventDefault();
    
    // Detectar dispositivo móvel
    const isMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    
    // Escolher URL base apropriada
    const baseUrl = isMobile()
      ? 'whatsapp://send'
      : 'https://web.whatsapp.com/send';
    
    // Construir URL completa
    const whatsappUrl = message
      ? `${baseUrl}?phone=5511969152222&text=${encodeURIComponent(message)}`
      : `${baseUrl}?phone=5511969152222`;
    
    // Redirecionar para o WhatsApp
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
        /* Garantir direção LTR (left-to-right) */
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
              <span className="text-[#8B6F4B] font-medium">Itaim Bibi</span>
            </div>
          </div>
        </div>

        {/* Hero Section com Imagem */}
        <section className="relative h-[500px] w-full mt-20 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <Image
            src="/assets/images/bairros/apartamentos-alto-padrao-itaim-bibi.jpg"
            alt="Vista aérea do Itaim Bibi - Bairro de Alto Padrão em São Paulo"
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
                  Apartamentos de Alto Padrão no Itaim Bibi
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  Um dos bairros mais valorizados de São Paulo, com localização estratégica 
                  próxima à Av. Faria Lima e infraestrutura premium completa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/buscar/venda/apartamentos/sao-paulo/itaim-bibi"
                    className="inline-flex items-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors shadow-lg"
                  >
                    <Building2 className="w-5 h-5" />
                    Ver Apartamentos Disponíveis
                  </Link>
                  <a
                    href="#"
                    onClick={handleWhatsAppClick("Olá! Vi a página do Itaim Bibi no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
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
                  <TrendingUp className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Alta Valorização</h3>
                <p className="text-sm text-gray-600">R$ 17.000 a R$ 100.000/m²</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Centro Financeiro</h3>
                <p className="text-sm text-gray-600">Avenida Faria Lima</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Segurança Premium</h3>
                <p className="text-sm text-gray-600">Um dos mais seguros de SP</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Infraestrutura</h3>
                <p className="text-sm text-gray-600">Completa e sofisticada</p>
              </div>
            </div>
          </div>
        </section>

        {/* CARROSSEL DE IMÓVEIS DISPONÍVEIS - Posição Otimizada para Conversão */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-[#8B6F4B]" />
                  </div>
                  Imóveis Disponíveis no Itaim Bibi
                </h2>
                <p className="text-gray-600">
                  {loadingImoveis 
                    ? "Carregando imóveis..." 
                    : imoveisItaim.length > 0 
                      ? `${imoveisItaim.length} ${imoveisItaim.length === 1 ? 'imóvel encontrado' : 'Imóveis em Destaque'}`
                      : "Confira nossa seleção exclusiva de apartamentos de alto padrão"
                  }
                </p>
              </div>
              <Link
                href="/buscar/venda/apartamentos/sao-paulo/itaim-bibi"
                className="hidden md:inline-flex items-center gap-2 text-[#8B6F4B] font-semibold hover:gap-3 transition-all"
              >
                Veja Todos Imóveis no Itaim Bibi
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Carrossel de Imóveis Reais */}
            <div className="relative -mx-4 md:mx-0">
              <div className="overflow-x-auto scrollbar-hide pb-4 px-4">
                <div className="flex gap-6 md:justify-center">
                  {loadingImoveis ? (
                    // Skeleton loading
                    Array(3).fill(null).map((_, index) => (
                      <div key={`skeleton-${index}`} className="w-[320px] flex-shrink-0">
                        <CardImovelSkeleton />
                      </div>
                    ))
                  ) : imoveisItaim.length > 0 ? (
                    // Cards reais
                    imoveisItaim.map((imovel) => (
                      <div key={imovel.Codigo || imovel._id} className="w-[320px] flex-shrink-0">
                        <CardImovel {...imovel} target="_blank" />
                      </div>
                    ))
                  ) : (
                    // Nenhum imóvel encontrado
                    <div className="w-full text-center py-12">
                      <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-600 font-semibold">Nenhum imóvel disponível no momento</p>
                      <p className="text-sm text-gray-500 mt-2">Entre em contato para conhecer outras opções</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Botão Ver Todos (Mobile) */}
            <div className="mt-6 md:hidden">
              <Link
                href="/buscar/venda/apartamentos/sao-paulo/itaim-bibi"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors"
              >
                Veja Todos os Apartamentos no Itaim Bibi
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
              Por que o Itaim Bibi é um dos Bairros Mais Valorizados de São Paulo?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              O <strong>Itaim Bibi</strong> consolidou-se como um dos endereços mais desejados da capital paulista, 
              combinando perfeitamente a vida residencial de alto padrão com a proximidade aos principais centros corporativos da cidade. 
              Localizado estrategicamente na Zona Sul de São Paulo, o bairro oferece aos seus moradores uma qualidade de vida excepcional, 
              com acesso facilitado a serviços premium, gastronomia sofisticada e lazer exclusivo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Com <strong>valores de m² que variam de R$ 17.000 a R$ 100.000</strong>, dependendo da localização específica e características 
              do empreendimento, o Itaim Bibi atrai investidores e moradores que buscam não apenas um lar, mas um patrimônio com potencial 
              de valorização consistente e alta liquidez no mercado imobiliário de luxo.
            </p>
          </section>

          {/* Localização Estratégica */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Localização Estratégica e Principais Avenidas
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O grande diferencial do Itaim Bibi é sua localização privilegiada, com acesso rápido aos principais eixos viários 
              e centros de negócios de São Paulo:
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#8B6F4B]/5 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Avenida Brigadeiro Faria Lima
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Principal polo financeiro de São Paulo, a <strong>Faria Lima atravessa o Itaim Bibi</strong> em toda sua extensão final. 
                  A avenida concentra sedes de multinacionais, bancos, fundos de investimento e empresas de tecnologia. 
                  Morar no Itaim significa estar <strong>na própria Faria Lima</strong>, com escritórios a poucos passos de casa.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#8B6F4B]/5 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Avenida Cidade Jardim
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Liga o Itaim Bibi à região do Morumbi e Marginal Pinheiros. É uma das vias mais arborizadas e 
                  valorizadas da cidade, abrigando o <strong>Shopping Cidade Jardim</strong>, referência em luxo e sofisticação, 
                  com marcas internacionais exclusivas como Louis Vuitton, Hermès, Prada e Tiffany & Co.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#8B6F4B]/5 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Avenida Horácio Lafer
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Via principal do bairro, a Horácio Lafer concentra diversos edifícios residenciais de alto padrão e 
                  estabelecimentos comerciais sofisticados. É conhecida por seus prédios modernos com fachadas envidraçadas 
                  e arquitetura contemporânea.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#8B6F4B]/5 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Avenida Juscelino Kubitschek
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Importante corredor que conecta o Itaim Bibi ao Brooklin e à Vila Olímpia. Conta com ciclovias, 
                  canteiro central arborizado e concentra edifícios corporativos de última geração. A JK, como é conhecida, 
                  facilita o acesso à Marginal Pinheiros e Zona Sul da cidade.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#8B6F4B]/5 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Acesso à Marginal Pinheiros
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  O Itaim Bibi oferece acesso rápido à Marginal Pinheiros, facilitando deslocamentos para o Aeroporto de Congonhas 
                  (15 minutos), Zona Oeste, ABC Paulista e outras regiões da Grande São Paulo.
                </p>
              </div>
            </div>
          </section>

          {/* Infraestrutura e Serviços */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Infraestrutura Premium e Serviços Exclusivos
            </h2>

            {/* Shopping e Comércio */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-[#8B6F4B]" />
                Shopping Centers e Comércio de Luxo
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Shopping Iguatemi São Paulo:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Um dos shoppings mais sofisticados do Brasil, com mais de 200 lojas das marcas mais exclusivas do mundo, 
                      restaurantes premiados e cinema premium. Distância: 10 minutos do Itaim Bibi.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Shopping Cidade Jardim:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Referência em luxo na América Latina, com boutiques de alta-costura, joalherias exclusivas, spa, 
                      supermercado gourmet Santa Luzia e heliponto. Distância: 5 minutos.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">JK Iguatemi:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Shopping contemporâneo com mix de lojas premium, gastronomia variada e conceito de shopping a céu aberto.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Gastronomia */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Utensils className="w-6 h-6 text-[#8B6F4B]" />
                Gastronomia Sofisticada
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                O Itaim Bibi é considerado um dos <strong>principais polos gastronômicos de São Paulo</strong>, com mais de 
                <strong> 100 restaurantes</strong> de alta gastronomia:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Restaurantes estrelados:</strong> Maní, Kinoshita, Tangará Jean-Georges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Culinária internacional:</strong> Italiana, japonesa, francesa, peruana, contemporânea</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Bares sofisticados:</strong> Ambiente cosmopolita com wine bars e lounges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Cafés premium:</strong> Coffee labs e cafeterias especiais</span>
                </li>
              </ul>
            </div>

            {/* Saúde */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-[#8B6F4B]" />
                Saúde e Bem-Estar
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Hospital São Luiz Itaim:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Localizado no próprio bairro (R. Dr. Alceu de Campos Rodrigues, 95), o São Luiz é referência em 
                      atendimento premium com 348 leitos, maternidade de excelência e pronto-socorro 24h.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Hospital Sancta Maggiore:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Também no Itaim Bibi (Av. Santo Amaro, 22), oferece atendimento completo e pronto-socorro 
                      próximo aos moradores.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Hospital Sírio-Libanês:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Referência em saúde premium no Brasil, com unidade próxima no bairro vizinho (R. Joaquim Floriano).
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Clínicas e Consultórios:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Dezenas de clínicas médicas, odontológicas e de estética de alto padrão no próprio bairro.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Educação */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#8B6F4B]" />
                Educação de Excelência
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Colégio Dante Alighieri:</strong> Uma das escolas mais tradicionais de SP (Jardim Paulista, 12 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Chapel School:</strong> Escola internacional bilíngue (Santo Amaro, 15 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Colégio Visconde de Porto Seguro:</strong> Escola alemã tradicional (Morumbi, 15 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Escolas internacionais:</strong> Graded e St. Paul's nas proximidades (Vila Olímpia/Jardins)</span>
                </li>
              </ul>
            </div>

            {/* Áreas Verdes */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Trees className="w-6 h-6 text-[#8B6F4B]" />
                Áreas Verdes e Lazer
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Parque do Povo:</strong> 115 mil m² com pista de caminhada, quadras, playground (10 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Parque Ibirapuera:</strong> Maior parque urbano de SP, ideal para exercícios (15 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Parque Villa-Lobos:</strong> 732 mil m² com infraestrutura completa (12 min)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Clubes exclusivos:</strong> Harmonia, Hípica, Paulistano nas proximidades</span>
                </li>
              </ul>
            </div>

            {/* Transporte */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Train className="w-6 h-6 text-[#8B6F4B]" />
                Transporte e Mobilidade
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Estação Faria Lima (Linha 4-Amarela):</strong> Acesso rápido a toda cidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Ciclovias:</strong> Rede integrada pela Av. JK e outras vias</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Aeroporto de Congonhas:</strong> 15 minutos de carro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Heliponto Shopping Cidade Jardim:</strong> Para deslocamentos executivos</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Perfil dos Imóveis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Perfil dos Apartamentos de Alto Padrão no Itaim Bibi
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Os imóveis do Itaim Bibi são reconhecidos pela <strong>arquitetura contemporânea</strong> e 
              <strong> acabamentos premium</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Características Típicas</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Metragem: 120m² a 600m²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">3 a 5 suítes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">4 a 6 vagas de garagem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Pé-direito alto (2,80m a 3,50m)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Terraços e varandas gourmet</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Diferenciais de Luxo</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Automação residencial completa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Piscinas privativas em coberturas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Adega climatizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Home theater e spa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Segurança 24h e concierge</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8B6F4B]/10 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Áreas Comuns dos Condomínios</h4>
              <p className="text-gray-700 text-sm mb-3">
                Os edifícios de alto padrão do Itaim Bibi oferecem infraestrutura de resort:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Lazer:</p>
                  <ul className="space-y-1">
                    <li>• Piscinas aquecidas</li>
                    <li>• Quadras poliesportivas</li>
                    <li>• Salão de festas</li>
                    <li>• Espaço gourmet</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Bem-estar:</p>
                  <ul className="space-y-1">
                    <li>• Academia completa</li>
                    <li>• Spa e sauna</li>
                    <li>• Espaço zen</li>
                    <li>• Salão de beleza</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Serviços:</p>
                  <ul className="space-y-1">
                    <li>• Coworking</li>
                    <li>• Brinquedoteca</li>
                    <li>• Pet place</li>
                    <li>• Lavanderia</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Valorização e Investimento */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Valorização e Potencial de Investimento
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              O Itaim Bibi apresenta um dos <strong>melhores desempenhos de valorização imobiliária</strong> de São Paulo 
              nas últimas duas décadas:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <div className="text-3xl font-bold text-green-700 mb-2">+156%</div>
                <p className="text-sm text-gray-700">Valorização média nos últimos 10 anos</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                <div className="text-3xl font-bold text-blue-700 mb-2">30-45 dias</div>
                <p className="text-sm text-gray-700">Tempo médio de venda de imóveis</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                <div className="text-3xl font-bold text-purple-700 mb-2">Top 3</div>
                <p className="text-sm text-gray-700">Entre os bairros mais valorizados de SP</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl mb-6">
              <h4 className="text-xl font-bold mb-4">Por que investir no Itaim Bibi?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Alta liquidez:</strong> Demanda sempre superior à oferta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Localização estratégica:</strong> Próximo aos principais centros de negócios</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Infraestrutura consolidada:</strong> Serviços premium já estabelecidos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Segurança:</strong> Um dos bairros mais seguros da capital</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Perfil socioeconômico:</strong> Alta concentração de executivos e empresários</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA Principal */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-2xl p-10 text-center shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Encontre Seu Apartamento de Luxo no Itaim Bibi
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Conheça nossa seleção exclusiva de apartamentos de alto padrão no bairro mais valorizado de São Paulo. 
                Imóveis com 3 a 5 suítes, infraestrutura premium e localização privilegiada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/buscar/venda/apartamentos/sao-paulo/itaim-bibi"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Building2 className="w-5 h-5" />
                  Ver Apartamentos Disponíveis
                </Link>
                <a
                  href="#"
                  onClick={handleWhatsAppClick("Olá! Vi a página do Itaim Bibi no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Schema Markup */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes sobre o Itaim Bibi
            </h2>
            
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quanto custa um apartamento de alto padrão no Itaim Bibi?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  O valor do m² no Itaim Bibi varia de <strong>R$ 17.000 a R$ 100.000</strong>, dependendo da localização 
                  específica, metragem, acabamentos e infraestrutura do condomínio. Apartamentos de 3 suítes (150-200m²) 
                  geralmente custam entre R$ 2,5 milhões e R$ 5 milhões, enquanto coberturas de luxo podem ultrapassar R$ 20 milhões.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Qual a distância do Itaim Bibi até a Av. Faria Lima?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  O Itaim Bibi faz divisa com a Av. Brigadeiro Faria Lima. A distância média é de <strong>5 minutos de carro</strong> 
                  ou 10-15 minutos a pé, dependendo do ponto exato do bairro. A estação de metrô Faria Lima (Linha 4-Amarela) 
                  também está próxima, facilitando o acesso.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  O Itaim Bibi é um bairro seguro?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Sim. O Itaim Bibi é considerado <strong>um dos bairros mais seguros de São Paulo</strong>, com índices de 
                  criminalidade bem abaixo da média municipal. O bairro conta com policiamento ostensivo, segurança privada em 
                  todos os edifícios e ruas bem iluminadas. A presença de executivos e a alta concentração de empresas também 
                  contribuem para a segurança da região.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Vale a pena investir em apartamento no Itaim Bibi?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Sim. O Itaim Bibi apresenta <strong>valorização consistente há mais de 20 anos</strong> e alta liquidez no 
                  mercado imobiliário. A localização estratégica próxima à Faria Lima, infraestrutura consolidada e demanda 
                  permanente fazem do bairro uma excelente opção para investimento de longo prazo, tanto para moradia quanto 
                  para locação de alto padrão.
                </p>
              </details>
            </div>
          </section>

        </article>

        {/* Schema Markup JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": "Itaim Bibi",
              "description": "Bairro de alto padrão na Zona Sul de São Paulo, conhecido por sua localização estratégica próxima à Av. Faria Lima e infraestrutura premium completa.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.5916",
                "longitude": "-46.6831"
              }
            })
          }}
        />
      </main>

      <WhatsappFloat
        message="Olá! Vi a página do Itaim Bibi no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região."
      />

      <Footer />
    </>
  );
}
