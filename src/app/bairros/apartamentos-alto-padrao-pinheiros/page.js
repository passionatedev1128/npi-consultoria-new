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
  Palette,
  Sparkles,
  Music,
  Coffee
} from "lucide-react";

export default function PinheirosAltoPadraoPage() {
  // Estados para imóveis reais
  const [imoveisPinheiros, setImoveisPinheiros] = useState([]);
  const [loadingImoveis, setLoadingImoveis] = useState(true);

  // Buscar imóveis de Pinheiros à venda
  useEffect(() => {
    const buscarImoveisPinheiros = async () => {
      setLoadingImoveis(true);
      try {
        const params = {
          cidade: "São Paulo",
          bairrosArray: ["Pinheiros", "PINHEIROS", "Vila Madalena", "VILA MADALENA"],
          finalidade: "venda",
          status: "venda",
          sortField: "date",
          sortOrder: "desc",
        };
        
        console.log("[PINHEIROS-BUSCA] Buscando imóveis com params:", params);
        const response = await getImoveis(params, 1, 3);
        
        console.log("[PINHEIROS-BUSCA] Resposta da API:", {
          total: response?.imoveis?.length || 0,
          primeiros: response?.imoveis?.slice(0, 3).map(i => ({
            codigo: i.Codigo,
            empreendimento: i.Empreendimento,
            bairro: i.BairroComercial || i.Bairro
          }))
        });
        
        if (response?.imoveis && Array.isArray(response.imoveis)) {
          setImoveisPinheiros(response.imoveis);
        }
      } catch (error) {
        console.error("[PINHEIROS-BUSCA] Erro ao buscar imóveis de Pinheiros:", error);
        setImoveisPinheiros([]);
      } finally {
        setLoadingImoveis(false);
      }
    };

    buscarImoveisPinheiros();
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
              <span className="text-[#8B6F4B] font-medium">Pinheiros</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[500px] w-full mt-20 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <Image
            src="/assets/images/bairros/apartamentos-alto-padrao-pinheiros.jpg"
            alt="Vista do bairro de Pinheiros - Bairro Boêmio e Cultural de São Paulo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 pt-8 md:pt-0">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B] text-white rounded-full text-sm font-semibold mb-6">
                  <MapPin className="w-4 h-4" />
                  Zona Oeste - São Paulo
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Apartamentos de Alto Padrão em Pinheiros
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  O bairro mais antigo e charmoso de São Paulo, com vida cultural vibrante, 
                  Vila Madalena, Beco do Batman e acesso privilegiado à Faria Lima.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/buscar/venda/apartamentos/sao-paulo/pinheiros"
                    className="inline-flex items-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors shadow-lg"
                  >
                    <Building2 className="w-5 h-5" />
                    Ver Apartamentos Disponíveis
                  </Link>
                  <a
                    href="#"
                    onClick={handleWhatsAppClick("Olá! Vi a página de Pinheiros no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
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
                  <Palette className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Bairro Mais Antigo</h3>
                <p className="text-sm text-gray-600">Desde 1560 - História e Cultura</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Music className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Vila Madalena</h3>
                <p className="text-sm text-gray-600">13º bairro mais legal do mundo</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Train className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">3 Estações de Metrô</h3>
                <p className="text-sm text-gray-600">Linha 4-Amarela e CPTM</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Vida Boêmia</h3>
                <p className="text-sm text-gray-600">Bares, cafés e gastronomia</p>
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
                  Imóveis Disponíveis em Pinheiros
                </h2>
                <p className="text-gray-600">
                  {loadingImoveis 
                    ? "Carregando imóveis..." 
                    : imoveisPinheiros.length > 0 
                      ? `${imoveisPinheiros.length} ${imoveisPinheiros.length === 1 ? 'imóvel' : 'Imóveis em Destaque'}`
                      : "Confira nossa seleção exclusiva de apartamentos de alto padrão"
                  }
                </p>
              </div>
              <Link
                href="/buscar/venda/apartamentos/sao-paulo/pinheiros"
                className="hidden md:inline-flex items-center gap-2 text-[#8B6F4B] font-semibold hover:gap-3 transition-all"
              >
                Veja Todos os Imóveis em Pinheiros
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
                  ) : imoveisPinheiros.length > 0 ? (
                    imoveisPinheiros.map((imovel) => (
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
                href="/buscar/venda/apartamentos/sao-paulo/pinheiros"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors"
              >
                Ver Todos os Apartamentos em Pinheiros
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
              Por que Pinheiros é Considerado o Bairro Mais Charmoso de São Paulo?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Pinheiros</strong> carrega o título de <strong>bairro mais antigo de São Paulo</strong>, com origem que remonta a 
              <strong> 1560</strong>, quando indígenas se instalaram às margens do Rio Pinheiros. Ao longo dos séculos, o bairro preservou 
              seu charme histórico enquanto se modernizava, tornando-se hoje um dos <strong>endereços mais desejados da capital</strong> 
              por quem busca qualidade de vida, cultura vibrante e sofisticação.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Localizado na <strong>Zona Oeste de São Paulo</strong>, Pinheiros oferece o equilíbrio perfeito entre a agitação cultural da 
              <strong> Vila Madalena</strong> e a sofisticação da <strong>Rua Oscar Freire</strong>. O bairro abriga 
              <strong> apartamentos de alto padrão</strong> com valores de m² entre <strong>R$ 12.000 e R$ 35.000</strong>, atraindo 
              moradores que valorizam arte, gastronomia e estilo de vida cosmopolita.
            </p>
          </section>

          {/* Vila Madalena */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Vila Madalena: 13º Bairro Mais Legal do Mundo
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A <strong>Vila Madalena</strong>, parte integrante do distrito de Pinheiros, foi <strong>eleita pela revista britânica 
              Time Out como o 13º bairro mais legal do mundo em 2022</strong>. O reconhecimento internacional destaca a combinação única 
              de vida noturna vibrante, arte de rua, cafés descolados e atmosfera boêmia que fazem da Vila Mada um dos destinos mais 
              procurados de São Paulo.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Palette className="w-6 h-6 text-purple-600" />
                  Beco do Batman
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Galeria de arte a céu aberto com grafites de artistas nacionais e internacionais. Os murais são constantemente 
                  renovados, transformando o local em um museu vivo da arte urbana brasileira. É o ponto turístico mais fotografado 
                  do bairro e atrai visitantes do mundo todo.
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-transparent border-l-4 border-amber-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Music className="w-6 h-6 text-amber-600" />
                  Vida Noturna e Boemia
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  As ruas <strong>Aspicuelta, Fidalga, Fradique Coutinho, Wisard e Mourato Coelho</strong> concentram dezenas de 
                  bares, botecos, casas de show e restaurantes. O público é eclético, atraindo desde estudantes universitários até 
                  profissionais liberais e artistas. A cena de música ao vivo é especialmente forte, com apresentações todas as noites.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-transparent border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Praça Benedito Calixto
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Aos sábados, a praça recebe uma das <strong>feiras de antiguidades e artesanato mais tradicionais de São Paulo</strong>. 
                  São mais de 200 expositores vendendo objetos vintage, artesanato, livros, vinis e gastronomia. A feira atrai milhares 
                  de visitantes e é um programa clássico para moradores do bairro.
                </p>
              </div>
            </div>
          </section>

          {/* Localização */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Localização Estratégica na Zona Oeste
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Pinheiros está estrategicamente posicionado entre os principais eixos de São Paulo:
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#8B6F4B]/5 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Principais Avenidas e Vias de Acesso
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida Brigadeiro Faria Lima:</strong> Conexão direta com Itaim Bibi e Jardim Paulistano</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida Rebouças:</strong> Acesso rápido à Av. Paulista e Zona Sul</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Marginal Pinheiros:</strong> Ligação com toda a cidade e rodovias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Rua dos Pinheiros:</strong> Eixo comercial principal do bairro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Rua Teodoro Sampaio:</strong> Tradicional via comercial que atravessa o bairro</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Train className="w-6 h-6 text-blue-600" />
                  Transporte Público de Excelência
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Estação Pinheiros (Linha 4-Amarela + CPTM):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Integração entre metrô e trem, conectando Pinheiros a toda São Paulo
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Estação Faria Lima (Linha 4-Amarela):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Localizada no Largo da Batata, acesso direto ao centro financeiro
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Estação Fradique Coutinho (Linha 4-Amarela):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Próxima à Vila Madalena e região boêmia
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Estação Vila Madalena (Linha 2-Verde):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Conexão com a Zona Leste e Av. Paulista
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Ciclovias:</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Extensas ciclovias na Faria Lima, Rebouças e Rua Artur de Azevedo
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Infraestrutura */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Infraestrutura Completa e Sofisticada
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
                    <strong className="text-gray-900">Shopping Iguatemi São Paulo:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Na Av. Faria Lima, um dos mais sofisticados do Brasil, com mais de 200 lojas de marcas exclusivas, 
                      restaurantes premiados e cinema premium
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Shopping Eldorado:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Próximo à ponte Eusébio Matoso, com 280 lojas, cinema, teatro e ampla praça de alimentação
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Rua Oscar Freire:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Uma das ruas de compras mais luxuosas do mundo, conectando Pinheiros aos Jardins, com grifes 
                      internacionais e lojas conceito
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Rua Teodoro Sampaio:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Tradicional via comercial com lojas de móveis, decoração, instrumentos musicais e comércio diversificado
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Gastronomia */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Utensils className="w-6 h-6 text-[#8B6F4B]" />
                Gastronomia e Vida Noturna
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pinheiros é reconhecido como um dos <strong>principais polos gastronômicos e boêmios de São Paulo</strong>:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Rua dos Pinheiros:</strong> Concentração de restaurantes dos mais variados estilos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Rua Ferreira de Araújo:</strong> Destino para quem busca beber e comer bem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Vila Madalena:</strong> Bares descontraídos, música ao vivo e ambiente boêmio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Cafés especiais:</strong> Coffee labs, padarias artesanais e brunch spots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Culinária internacional:</strong> Italiana, japonesa, francesa, árabe, peruana</span>
                </li>
              </ul>
            </div>

            {/* Cultura */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Palette className="w-6 h-6 text-[#8B6F4B]" />
                Cultura e Arte
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Instituto Tomie Ohtake:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Centro cultural de referência com exposições de arte contemporânea, shows, palestras e cursos
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Galerias de Arte:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Diversas galerias independentes na Vila Madalena e arredores
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Teatros e Cinemas:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Cines Arteplex, teatros independentes e casas de show
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Livrarias e Sebos:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Variedade de livrarias independentes e sebos charmosos
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Saúde */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Stethoscope className="w-6 h-6 text-[#8B6F4B]" />
                Saúde de Referência
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">InCor - Instituto do Coração (HC-FMUSP):</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Referência mundial em cardiologia, próximo a Pinheiros
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Hospital das Clínicas (HC-FMUSP):</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Maior complexo hospitalar da América Latina
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Instituto Emílio Ribas:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Referência em infectologia
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Clínicas e Laboratórios:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Ampla rede de clínicas, laboratórios e consultórios no bairro
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
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Colégio Rio Branco:</strong> Uma das escolas mais tradicionais e conceituadas de SP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>FAAP:</strong> Fundação Armando Alvares Penteado, referência em artes e comunicação</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Faculdade de Medicina da USP (FMUSP):</strong> Próxima ao bairro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Escola Politécnica da USP:</strong> No Butantã, próximo a Pinheiros</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>PUC-SP:</strong> Próxima ao bairro</span>
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
                    <strong className="text-gray-900">Largo da Batata:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Praça revitalizada com eventos culturais, feiras e apresentações
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Praça Benedito Calixto:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Feira de antiguidades aos sábados, com mais de 200 expositores
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Parque Ibirapuera:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Acesso rápido pela Av. Brasil (15 minutos)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Ruas Arborizadas:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Bairro preserva árvores centenárias e clima de "vila urbana"
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
              Perfil dos Apartamentos de Alto Padrão em Pinheiros
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Os imóveis de Pinheiros combinam <strong>charme histórico</strong> com <strong>modernidade</strong>, 
              atraindo moradores que valorizam cultura e qualidade de vida:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Características Típicas</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Metragem: 70m² a 400m²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">2 a 4 suítes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">2 a 3 vagas de garagem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Varandas com vista arborizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Mix de prédios clássicos e modernos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Diferenciais do Bairro</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Charme histórico preservado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Proximidade com Vila Madalena</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Vida cultural vibrante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Gastronomia excepcional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Excelente transporte público</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8B6F4B]/10 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Áreas Comuns dos Condomínios</h4>
              <p className="text-gray-700 text-sm mb-3">
                Os edifícios de alto padrão em Pinheiros oferecem infraestrutura moderna:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Lazer:</p>
                  <ul className="space-y-1">
                    <li>• Piscinas</li>
                    <li>• Salão de festas</li>
                    <li>• Espaço gourmet</li>
                    <li>• Lounge</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Bem-estar:</p>
                  <ul className="space-y-1">
                    <li>• Academia</li>
                    <li>• Sauna</li>
                    <li>• Espaço zen</li>
                    <li>• Playground</li>
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

          {/* Valorização */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Valorização e Investimento
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Pinheiros apresenta <strong>valorização consistente</strong> e é considerado um dos melhores investimentos 
              imobiliários de São Paulo:
            </p>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl mb-6">
              <h4 className="text-xl font-bold mb-4">Por que investir em Pinheiros?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Bairro mais antigo de SP:</strong> História e tradição valorizadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Vila Madalena:</strong> 13º bairro mais legal do mundo (Time Out)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Vida cultural vibrante:</strong> Arte, gastronomia e boemia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Localização estratégica:</strong> Acesso rápido à Faria Lima e Paulista</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Transporte público:</strong> 3 estações de metrô + CPTM</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-2xl p-10 text-center shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Encontre Seu Apartamento de Alto Padrão em Pinheiros
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Conheça nossa seleção exclusiva de apartamentos no bairro mais charmoso de São Paulo, 
                com Vila Madalena, Beco do Batman e toda infraestrutura cultural e gastronômica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/buscar/venda/apartamentos/sao-paulo/pinheiros"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Building2 className="w-5 h-5" />
                  Ver Apartamentos Disponíveis
                </Link>
                <a
                  href="#"
                  onClick={handleWhatsAppClick("Olá! Vi a página de Pinheiros no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
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
              Perguntas Frequentes sobre Pinheiros
            </h2>
            
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quanto custa um apartamento de alto padrão em Pinheiros?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  O valor do m² em Pinheiros varia de <strong>R$ 12.000 a R$ 35.000</strong>, dependendo da localização 
                  específica (proximidade com Vila Madalena ou Faria Lima), acabamentos e infraestrutura do condomínio. 
                  Apartamentos de 2 suítes (70-100m²) custam entre R$ 850 mil e R$ 2,5 milhões, enquanto apartamentos 
                  maiores (150-300m²) podem variar de R$ 2,5 milhões a R$ 8 milhões.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Pinheiros é um bairro seguro?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Pinheiros é considerado um <strong>bairro relativamente seguro</strong>, especialmente nas áreas mais 
                  residenciais. Como em qualquer bairro urbano de São Paulo, é recomendável tomar precauções básicas, 
                  principalmente à noite em ruas com menos movimento. A Vila Madalena, por ser área boêmia, tem movimento 
                  noturno intenso, o que contribui para maior presença de pessoas nas ruas.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  O que é o Beco do Batman?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  O <strong>Beco do Batman</strong> é uma galeria de arte urbana a céu aberto localizada na Vila Madalena, 
                  famosa mundialmente por seus grafites e murais coloridos. Os grafites são constantemente renovados por 
                  artistas nacionais e internacionais, transformando o local em um museu vivo da arte de rua. É um dos 
                  pontos turísticos mais fotografados de São Paulo e fica na Rua Gonçalo Afonso.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Vale a pena investir em apartamento em Pinheiros?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Sim. Pinheiros oferece <strong>excelente custo-benefício</strong> comparado a outros bairros nobres de São Paulo. 
                  O bairro tem valorização constante, infraestrutura consolidada, vida cultural vibrante, 3 estações de metrô e 
                  proximidade com Faria Lima e Paulista. A demanda por imóveis é permanente, garantindo boa liquidez. É uma 
                  excelente opção tanto para moradia quanto para investimento com aluguel.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quais são as principais vantagens de morar em Pinheiros?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  As principais vantagens são: <strong>Vila Madalena e Beco do Batman</strong> (cultura e arte), 
                  <strong> 3 estações de metrô</strong> (Pinheiros, Faria Lima, Fradique Coutinho), 
                  <strong> gastronomia excepcional</strong>, <strong>vida noturna vibrante</strong>, 
                  <strong> Shopping Iguatemi e Eldorado</strong>, <strong>Rua Oscar Freire</strong> (luxo), 
                  <strong> proximidade com Faria Lima</strong>, <strong>Instituto Tomie Ohtake</strong> (cultura), 
                  <strong> charme histórico</strong> (bairro mais antigo de SP) e <strong>atmosfera cosmopolita</strong>.
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
              "name": "Pinheiros",
              "description": "Bairro mais antigo de São Paulo (desde 1560), localizado na Zona Oeste, conhecido por sua vida cultural vibrante, Vila Madalena, Beco do Batman e gastronomia sofisticada.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.5628",
                "longitude": "-46.6903"
              }
            })
          }}
        />
      </main>

      <WhatsappFloat
        message="Olá! Vi a página de Pinheiros no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região."
      />

      <Footer />
    </>
  );
}
