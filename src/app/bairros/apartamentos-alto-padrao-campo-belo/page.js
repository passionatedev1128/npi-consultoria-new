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
  Heart,
  Sparkles,
  Plane
} from "lucide-react";

export default function CampoBelolAltoPadraoPage() {
  const [imoveisCampoBelo, setImoveisCampoBelo] = useState([]);
  const [loadingImoveis, setLoadingImoveis] = useState(true);

  useEffect(() => {
    const buscarImoveisCampoBelo = async () => {
      setLoadingImoveis(true);
      try {
        const params = {
          cidade: "São Paulo",
          bairrosArray: [
            "Campo Belo",
            "CAMPO BELO",
            "campo belo"
          ],
          finalidade: "venda",
          status: "venda",
          sortField: "date",
          sortOrder: "desc",
        };
        
        console.log("[CAMPO-BELO-BUSCA] Buscando imóveis com params:", params);
        const response = await getImoveis(params, 1, 3);
        
        console.log("[CAMPO-BELO-BUSCA] Resposta da API:", {
          total: response?.imoveis?.length || 0,
          primeiros: response?.imoveis?.slice(0, 3).map(i => ({
            codigo: i.Codigo,
            empreendimento: i.Empreendimento,
            bairro: i.BairroComercial || i.Bairro
          }))
        });
        
        if (response?.imoveis && Array.isArray(response.imoveis)) {
          setImoveisCampoBelo(response.imoveis);
        }
      } catch (error) {
        console.error("[CAMPO-BELO-BUSCA] Erro ao buscar imóveis de Campo Belo:", error);
        setImoveisCampoBelo([]);
      } finally {
        setLoadingImoveis(false);
      }
    };

    buscarImoveisCampoBelo();
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
              <span className="text-[#8B6F4B] font-medium">Campo Belo</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[500px] w-full mt-20 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <Image
            src="/assets/images/bairros/apartamentos-alto-padrao-campo-belo.jpg"
            alt="Vista de Campo Belo - Bairro Residencial ao lado do Shopping Ibirapuera"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 pt-8 md:pt-0">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B] text-white rounded-full text-sm font-semibold mb-6">
                  <Heart className="w-4 h-4" />
                  Zona Sul - São Paulo
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Apartamentos de Alto Padrão em Campo Belo
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  Bairro residencial e familiar a 5 minutos do Aeroporto de Congonhas, ao lado do Shopping Ibirapuera, 
                  com diversos restaurantes charmosos e atmosfera tranquila próxima a Moema e Brooklin.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/buscar/venda/apartamentos/sao-paulo/campo-belo"
                    className="inline-flex items-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors shadow-lg"
                  >
                    <Building2 className="w-5 h-5" />
                    Ver Apartamentos Disponíveis
                  </Link>
                  <a
                    href="#"
                    onClick={handleWhatsAppClick("Olá! Vi a página de Campo Belo no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
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
                  <ShoppingBag className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Ao lado do Shopping Ibirapuera</h3>
                <p className="text-sm text-gray-600">Um dos maiores de SP</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Bairro Residencial</h3>
                <p className="text-sm text-gray-600">Atmosfera familiar e tranquila</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Hospital Alemão Oswaldo Cruz </h3>
                <p className="text-sm text-gray-600">UNIFESP - Excelência médica</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Aeroporto Congonhas</h3>
                <p className="text-sm text-gray-600">5 minutos do bairro</p>
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
                  Imóveis Disponíveis em Campo Belo
                </h2>
                <p className="text-gray-600">
                  {loadingImoveis 
                    ? "Carregando imóveis..." 
                    : imoveisCampoBelo.length > 0 
                      ? `${imoveisCampoBelo.length} ${imoveisCampoBelo.length === 1 ? 'imóvel' : 'Imóveis em Destaque'}`
                      : "Confira nossa seleção exclusiva de apartamentos de alto padrão"
                  }
                </p>
              </div>
              <Link
                href="/buscar/venda/apartamentos/sao-paulo/campo-belo"
                className="hidden md:inline-flex items-center gap-2 text-[#8B6F4B] font-semibold hover:gap-3 transition-all"
              >
                Veja Todos os Imóveis em Campo Belo
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
                  ) : imoveisCampoBelo.length > 0 ? (
                    imoveisCampoBelo.map((imovel) => (
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
                href="/buscar/venda/apartamentos/sao-paulo/campo-belo"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors"
              >
                Ver Todos os Apartamentos em Campo Belo
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
              Por que Campo Belo é um Bairro Residencial e Familiar?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Campo Belo</strong> é um dos bairros mais procurados da Zona Sul de São Paulo por famílias que 
              buscam <strong>qualidade de vida, tranquilidade e infraestrutura completa</strong>. Localizado 
              estrategicamente entre <strong>Moema</strong> e <strong>Brooklin</strong>, e a apenas 
              <strong> 5 minutos do Aeroporto de Congonhas</strong>, o bairro oferece atmosfera residencial sem abrir 
              mão de conveniências urbanas, com destaque para o <strong>Shopping Ibirapuera</strong>, um dos maiores 
              centros de compras da capital que fica ao lado do bairro.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Com <strong>ruas arborizadas, perfil familiar e excelente localização</strong>, Campo Belo atrai moradores 
              que valorizam proximidade com hospitais de excelência (como o <strong>Hospital Alemão Oswaldo Cruz </strong>), 
              escolas de qualidade, fácil acesso ao transporte público e a <strong>comodidade de estar próximo ao principal 
              aeroporto doméstico do país</strong>. Os <strong>apartamentos de alto padrão</strong> variam de 
              <strong> R$ 12.000 a R$ 30.000 por m²</strong>, oferecendo boa relação custo-benefício comparado 
              a bairros vizinhos como Moema e Vila Olímpia.
            </p>
          </section>

          {/* Shopping Ibirapuera */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Shopping Ibirapuera: Colado ao Bairro
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O <strong>Shopping Ibirapuera</strong> é um dos principais atrativos que fica ao lado do Campo Belo, sendo um dos 
              <strong> maiores e mais completos shoppings de São Paulo</strong>. Inaugurado em 1976, o shopping passou 
              por reformas e ampliações que o tornaram referência em compras, entretenimento e gastronomia na Zona Sul.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ShoppingBag className="w-6 h-6 text-blue-600" />
                  Infraestrutura Completa
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Com mais de <strong>400 lojas</strong>, o Shopping Ibirapuera oferece marcas nacionais e internacionais, 
                  supermercado, cinema com 14 salas, praça de alimentação com mais de 50 opções, restaurantes sofisticados 
                  e área de lazer. É ponto de encontro para moradores de Campo Belo e bairros vizinhos.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-transparent border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Conveniência para as Famílias
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A <strong>proximidade com o Shopping Ibirapuera</strong> é um dos principais motivos para famílias 
                  escolherem Campo Belo. Ter acesso fácil a compras, serviços, entretenimento e gastronomia 
                  sem precisar se deslocar grandes distâncias é um diferencial importante para qualidade de vida.
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
              Campo Belo está estrategicamente posicionado na Zona Sul de São Paulo, oferecendo fácil acesso 
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
                    <span className="text-gray-700"><strong>Avenida Ibirapuera:</strong> Principal via do bairro, conecta ao Parque Ibirapuera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Rua Vieira de Morais:</strong> Eixo gastronômico e comercial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida Vereador José Diniz:</strong> Ligação com Santo Amaro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Proximidade com Av. Bandeirantes:</strong> Acesso rápido à Marginal Pinheiros</span>
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
                      <strong className="text-gray-900">Estação Campo Belo (Linha 5-Lilás):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Conecta à Linha 1-Azul e demais regiões da cidade (10 minutos)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Estação Campo Belo conecta a Estação Hospital São Paulo (Linha 5-Lilás):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Acesso direto ao Hospital da UNIFESP
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Linhas de Ônibus:</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Diversas linhas atravessam o bairro, conectando a Moema, Brooklin, Vila Olímpia e Centro
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-transparent border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Plane className="w-6 h-6 text-emerald-600" />
                  Aeroporto de Congonhas
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Uma das maiores vantagens de Campo Belo é estar <strong>a apenas 5 minutos do Aeroporto de Congonhas</strong>, 
                  o principal hub de aviação doméstica do Brasil. Essa proximidade é ideal para executivos e profissionais 
                  que viajam frequentemente a trabalho, oferecendo comodidade incomparável para quem valoriza otimização 
                  de tempo. O acesso rápido ao aeroporto também valoriza os imóveis da região.
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
              Infraestrutura Completa para Famílias
            </h2>

            {/* Gastronomia */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Utensils className="w-6 h-6 text-[#8B6F4B]" />
                Gastronomia Diversificada
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Campo Belo oferece <strong>excelente variedade gastronômica</strong>, especialmente na 
                <strong> Rua Gabriele D'Annunzio e Rua Vieira de Morais</strong>, conhecida por seus restaurantes charmosos, bares, pizzarias e cafés:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Restaurantes variados:</strong> Italiana, japonesa, brasileira, contemporânea</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Bares e pubs:</strong> Opções para happy hour e encontros</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Cafés e padarias:</strong> Estabelecimentos tradicionais e artesanais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Delivery facilitado:</strong> Grande variedade de opções por aplicativos</span>
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
                    <strong className="text-gray-900">Hospital Alemão Oswaldo Cruz:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      O Hospital Alemão Oswaldo Cruz possui diversos centros de especialidades como Oncologia, Obesidade e Diabetes, Hérnia, entre outras. 
                      A instituição é renomada, reconhecida por sua excelência e segurança no atendimento, com acreditações internacionais e um corpo clínico qualificado.
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
                Educação de Qualidade
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Colégio Vértice Unidade II:</strong>Destaca-se pelo desempenho no Enem e atende do Ensino Fundamental ao Médio, com foco em alunos em fase pré-vestibular.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Colégio Magno/Mágico de Oz:</strong> Infraestrutura completa e diferenciada, com foco na Educação Infantil e Ensino Fundamental - Anos Iniciais, oferecendo espaços para atividades artísticas, esportivas e projetos de inovação.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Puzzle Educação Infantil Bilíngue:</strong>Uma escola bilíngue especializada na educação infantil.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Escolas particulares:</strong> Diversas opções de ensino fundamental e médio</span>
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
                      A poucos minutos de Campo Belo, o maior parque urbano de São Paulo oferece museus, pistas, 
                      eventos culturais e lazer completo (10 minutos)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Praças do bairro:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Campo Belo possui praças arborizadas ideais para caminhadas e atividades ao ar livre
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Ruas arborizadas:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Bairro conhecido pelas ruas arborizadas e tranquilas, perfeitas para famílias
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
              Perfil dos Apartamentos de Alto Padrão em Campo Belo
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Os imóveis de Campo Belo são conhecidos pelo <strong>perfil residencial</strong>, 
              <strong> plantas funcionais</strong> e <strong>boa relação custo-benefício</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Características Típicas</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Metragem: 70m² a 200m²</span>
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
                    <span className="text-gray-700 text-sm">Ruas tranquilas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Perfil familiar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Próximo ao Shopping Ibirapuera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Boa relação custo-benefício</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Localização estratégica</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8B6F4B]/10 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Áreas Comuns dos Condomínios</h4>
              <p className="text-gray-700 text-sm mb-3">
                Os edifícios em Campo Belo oferecem infraestrutura completa:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Lazer:</p>
                  <ul className="space-y-1">
                    <li>• Piscina</li>
                    <li>• Salão de festas</li>
                    <li>• Churrasqueira</li>
                    <li>• Playground</li>
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
              Segurança e Tranquilidade
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Campo Belo oferece <strong>segurança compatível com um bairro residencial familiar</strong>:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Policiamento regular nas ruas principais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Ruas residenciais tranquilas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Ambiente familiar e arborizado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Condomínios com portaria 24h</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B]">✓</span>
                <span className="text-gray-700 text-sm">Movimento constante de moradores</span>
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
              Campo Belo apresenta <strong>valorização consistente</strong> e é considerado um excelente investimento 
              para famílias que buscam qualidade de vida:
            </p>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl mb-6">
              <h4 className="text-xl font-bold mb-4">Por que investir em Campo Belo?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Aeroporto de Congonhas:</strong> A apenas 5 minutos - ideal para executivos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Bairro residencial e familiar:</strong> Atmosfera tranquila e segura</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Shopping Ibirapuera:</strong> Um dos maiores shoppings de São Paulo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Hospital Alemão Oswaldo Cruz:</strong> Referência em especialidades como Oncologia, Obesidade e Diabetes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Boa relação custo-benefício:</strong> Preços competitivos comparado a Moema</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Localização estratégica:</strong> Próximo a Moema, Brooklin e Vila Olímpia</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-2xl p-10 text-center shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Encontre Seu Apartamento de Alto Padrão em Campo Belo
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Conheça nossa seleção exclusiva de apartamentos em um dos bairros mais residenciais 
                e familiares de São Paulo, com Shopping Ibirapuera e infraestrutura completa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/buscar/venda/apartamentos/sao-paulo/campo-belo"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Building2 className="w-5 h-5" />
                  Ver Apartamentos Disponíveis
                </Link>
                <a
                  href="#"
                  onClick={handleWhatsAppClick("Olá! Vi a página de Campo Belo no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
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
              Perguntas Frequentes sobre Campo Belo
            </h2>
            
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quanto custa um apartamento de alto padrão em Campo Belo?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  O valor do m² em Campo Belo varia de <strong>R$ 12.000 a R$ 30.000</strong>, dependendo da 
                  localização, proximidade com o Shopping Ibirapuera e infraestrutura. Apartamentos de 2-3 dormitórios 
                  (80-120m²) custam entre R$ 1 milhão e R$ 3 milhões, oferecendo boa relação custo-benefício 
                  comparado a bairros vizinhos como Moema e Vila Olímpia.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Por que o Shopping Ibirapuera é importante para o bairro?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  O <strong>Shopping Ibirapuera</strong> é um dos maiores e mais completos shoppings de São Paulo, 
                  oferecendo mais de 400 lojas, cinema, gastronomia e serviços. A <strong>proximidade com o shopping</strong> 
                  é um dos principais motivos para famílias escolherem Campo Belo, proporcionando conveniência e 
                  qualidade de vida sem precisar se deslocar grandes distâncias.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Vale a pena investir em apartamento em Campo Belo?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Sim. Campo Belo oferece <strong>valorização consistente</strong>, boa relação custo-benefício e 
                  <strong> demanda permanente</strong> por sua atmosfera familiar, infraestrutura completa e 
                  localização estratégica. É ideal tanto para moradia quanto para investimento com aluguel, 
                  especialmente para famílias que valorizam proximidade com o Shopping Ibirapuera e ao Aeroporto de Congonhas.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Campo Belo é um bairro seguro?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Campo Belo é considerado <strong>um bairro seguro e tranquilo</strong>. A região tem perfil residencial, 
                  ruas arborizadas, policiamento regular e movimento constante de moradores. Os condomínios 
                  possuem portaria 24h e sistemas de segurança, contribuindo para a sensação de segurança das famílias.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Campo Belo fica próximo ao Aeroporto de Congonhas?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Sim! Campo Belo está <strong>a apenas 5 minutos do Aeroporto de Congonhas</strong>, o principal 
                  hub de aviação doméstica do Brasil. Essa proximidade é um dos maiores diferenciais do bairro, 
                  sendo ideal para <strong>executivos e profissionais que viajam frequentemente</strong> a trabalho. 
                  O acesso rápido ao aeroporto oferece comodidade incomparável e também contribui para a 
                  <strong> valorização dos imóveis da região</strong>.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quais são as principais vantagens de morar em Campo Belo?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  As principais vantagens são: <strong>Aeroporto de Congonhas a 5 minutos</strong> (ideal para executivos), 
                  <strong> bairro residencial e familiar</strong>, 
                  <strong> Shopping Ibirapuera</strong> (um dos maiores de SP), 
                  <strong> Hospital Alemão Oswaldo Cruz</strong> (referência em saúde), 
                  <strong> boa relação custo-benefício</strong>, <strong>ruas arborizadas</strong>, 
                  <strong> metrô Linha 5-Lilás</strong> (Estação Santa Cruz), 
                  <strong> proximidade com Moema e Brooklin</strong> e 
                  <strong> atmosfera tranquila</strong> ideal para famílias.
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
              "name": "Campo Belo",
              "description": "Bairro residencial e familiar na Zona Sul de São Paulo, a 5 minutos do Aeroporto de Congonhas, com Shopping Ibirapuera, Hospital Alemão Oswaldo Cruz e infraestrutura completa.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.6189",
                "longitude": "-46.6590"
              }
            })
          }}
        />
      </main>

      <WhatsappFloat
        message="Olá! Vi a página de Campo Belo no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região."
      />

      <Footer />
    </>
  );
}
