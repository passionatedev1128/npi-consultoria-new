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
  Train,
  Trophy,
  Sparkles,
  Crown,
  Gem
} from "lucide-react";

export default function JardinsAltoPadraoPage() {
  const [imoveisJardins, setImoveisJardins] = useState([]);
  const [loadingImoveis, setLoadingImoveis] = useState(true);

  useEffect(() => {
    const buscarImoveisJardins = async () => {
      setLoadingImoveis(true);
      try {
        const params = {
          cidade: "São Paulo",
          bairrosArray: [
            "Jardins", "JARDINS", "jardins",            
          ],
          finalidade: "venda",
          status: "venda",
          sortField: "date",
          sortOrder: "desc",
        };
        
        const response = await getImoveis(params, 1, 3);
        
        if (response?.imoveis && Array.isArray(response.imoveis)) {
          setImoveisJardins(response.imoveis);
        }
      } catch (error) {
        console.error("Erro ao buscar imóveis dos Jardins:", error);
        setImoveisJardins([]);
      } finally {
        setLoadingImoveis(false);
      }
    };

    buscarImoveisJardins();
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
      
      <main className="min-h-screen bg-white overflow-x-hidden" dir="ltr">
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
              <span className="text-[#8B6F4B] font-medium">Jardins</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[500px] w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <Image
            src="/assets/images/bairros/apartamentos-alto-padrao-jardins.jpg"
            alt="Vista do bairro dos Jardins - O Bairro Mais Sofisticado de São Paulo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 pt-8 md:pt-0">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B] text-white rounded-full text-sm font-semibold mb-6">
                  <Crown className="w-4 h-4" />
                  Zona Oeste - São Paulo
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Apartamentos de Alto Padrão nos Jardins
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  O bairro mais sofisticado de São Paulo, com Rua Oscar Freire (8ª mais luxuosa do mundo), 
                  tradição centenária e o melhor da cultura, gastronomia e alta-costura.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/buscar/venda/apartamentos/sao-paulo/jardins"
                    className="inline-flex items-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors shadow-lg"
                  >
                    <Building2 className="w-5 h-5" />
                    Ver Apartamentos Disponíveis
                  </Link>
                  <a
                    href="#"
                    onClick={handleWhatsAppClick("Olá! Vi a página dos Jardins no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
                    className="inline-flex items-center gap-2 bg-white text-[#8B6F4B] border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer shadow-lg"
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
                  <Crown className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Rua Oscar Freire</h3>
                <p className="text-sm text-gray-600">8ª rua mais luxuosa do mundo</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trees className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Primeiro Bairro-Jardim</h3>
                <p className="text-sm text-gray-600">Fundado em 1913 - Conceito britânico</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Gem className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Altíssimo Padrão</h3>
                <p className="text-sm text-gray-600">m² R$ 12k - R$ 65k</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Train className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">3 Estações de Metrô</h3>
                <p className="text-sm text-gray-600">Acesso à Paulista e Faria Lima</p>
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
                  Imóveis Disponíveis nos Jardins
                </h2>
                <p className="text-gray-600">
                  {loadingImoveis 
                    ? "Carregando imóveis..." 
                    : imoveisJardins.length > 0 
                      ? `${imoveisJardins.length} ${imoveisJardins.length === 1 ? 'imóvel' : 'Imóveis em Destaque'}`
                      : "Confira nossa seleção exclusiva de apartamentos de alto padrão"
                  }
                </p>
              </div>
              <Link
                href="/buscar/venda/apartamentos/sao-paulo/jardins"
                className="hidden md:inline-flex items-center gap-2 text-[#8B6F4B] font-semibold hover:gap-3 transition-all"
              >
                Veja Todos os Imóveis nos Jardins
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
                  ) : imoveisJardins.length > 0 ? (
                    imoveisJardins.map((imovel) => (
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
                href="/buscar/venda/apartamentos/sao-paulo/jardins"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#8B6F4B] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#6d5839] transition-colors"
              >
                Ver Todos os Apartamentos nos Jardins
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
              Por que os Jardins São Considerados o Bairro Mais Sofisticado de São Paulo?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Os <strong>Jardins</strong> representam o ápice do luxo e sofisticação em São Paulo. Fundado em 1913, foi o primeiro bairro-jardim do Brasil, 
              trazendo o conceito britânico de urbanização com amplas áreas verdes, ruas arborizadas e arquitetura de alto padrão. Hoje, a região é sinônimo de <strong>altíssimo padrão de vida</strong>, 
              abrigando a elite paulistana, executivos internacionais e personalidades que buscam o melhor em qualidade de vida, cultura e exclusividade.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Localizado na <strong>Zona Oeste de São Paulo</strong>, os Jardins compreendem quatro sub-bairros nobres: <strong>Jardim América, Jardim Europa, Jardim Paulista e Jardim Paulistano</strong>. 
              A região oferece <strong>apartamentos de alto padrão</strong> com valores de m² entre <strong>R$ 12.000 e R$ 65.000</strong>, atraindo compradores nacionais e internacionais que valorizam 
              tradição, segurança e o endereço mais prestigiado da capital.
            </p>
          </section>

          {/* Rua Oscar Freire */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Crown className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Rua Oscar Freire: 8ª Rua Mais Luxuosa do Mundo
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A Rua Oscar Freire foi eleita pela Mystery Shopping International como a oitava melhor rua de comércio de luxo do mundo, 
              à frente de logradouros icônicos como a Champs-Élysées em Paris e a Praça do Casino em Mônaco. Com pouco mais de 2,5 km de extensão, a Oscar Freire concentra 
              as grifes mais exclusivas do país e lojas conceito que trazem coleções inéditas para o mercado brasileiro.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-transparent border-l-4 border-amber-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ShoppingBag className="w-6 h-6 text-amber-600" />
                  Grifes Internacionais e Nacionais
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A rua abriga marcas como Tommy Hilfiger, Forum, Osklen, Camper, H. Stern, Le Lis Blanc, Calvin Klein, Animale e Schutz. 
                  As lojas investem em espaços-conceito diferenciados, transformando a experiência de compra em verdadeiros eventos de moda e lifestyle.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Utensils className="w-6 h-6 text-purple-600" />
                  Gastronomia de Alto Nível
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A Oscar Freire abriga <strong>restaurantes com pratos assinados por chefs renomados e cafés que lembram bistrôs europeus</strong>. 
                  Destaque para o Santo Grão (café moído na hora, premiado), Almanara (culinária árabe tradicional) e dezenas de opções que vão desde 
                  brunch sofisticado até alta gastronomia internacional.
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-transparent border-l-4 border-emerald-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Boulevard Paulistano
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A rua foi planejada para ser um <strong>boulevard à moda europeia</strong>, com calçadas largas, arborização, bancos e iluminação especial. 
                  É um local agradável para passear a pé, fazer compras com tranquilidade e aproveitar o melhor da vida urbana paulistana com sofisticação.
                </p>
              </div>
            </div>
          </section>

          {/* Os 4 Sub-Bairros */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Os 4 Sub-Bairros dos Jardins
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A região dos Jardins é composta por quatro sub-bairros, cada um com características únicas:
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-[#8B6F4B]/5 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  1. Jardim América
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Lançado em 1915, foi o primeiro bairro planejado no conceito de bairro-jardim. Suas ruas foram batizadas com nomes de países e 
                  estados do continente americano. É predominantemente residencial, com <strong>casas horizontais de altíssimo padrão</strong>, ruas arborizadas 
                  e atmosfera tranquila. Abriga clubes tradicionais como o Club Athletico Paulistano e a Sociedade Harmonia de Tênis.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Principais vias:</strong> Av. Brasil, Av. Nove de Julho, Rua Colômbia
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  2. Jardim Europa
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Lançado em 1922, combina planejamento paisagístico meticuloso com infraestrutura moderna. Destaca-se pelas 
                  <strong> ruas amplamente arborizadas</strong>, oferecendo um ambiente sereno. Abriga o <strong>MuBE (Museu Brasileiro da Escultura)</strong> e o 
                  <strong> MIS (Museu da Imagem e do Som)</strong>. É caracterizado por residências horizontais de luxo em amplos terrenos.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Destaques:</strong> Ruas arborizadas, MuBE, MIS, arquitetura contemporânea
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-transparent border-l-4 border-purple-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  3. Jardim Paulista
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Destaca-se por maior verticalização e desenvolvimento comercial, com edifícios de luxo, coberturas, flats e hotéis luxuosos. 
                  Suas alamedas foram batizadas com nomes de localidades paulistas. Abriga a <strong>sede da FIESP, Pão de Açúcar e Enjoei</strong>. 
                  Próximo à Av. Paulista, combina vida residencial sofisticada com dinamismo comercial.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Principais vias:</strong> Av. Paulista, Rua Haddock Lobo, Alameda Lorena
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-transparent border-l-4 border-amber-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  4. Jardim Paulistano
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Localizado nas cercanias da Av. Faria Lima, abriga sedes da Camargo Correa, Marfig, Even, BRF, Multilaser e Bradesco Investimentos. 
                  É onde fica a <strong>Rua Oscar Freire</strong> e a <strong>Hebraica</strong>, um dos maiores clubes da cidade. Combina residências de alto padrão 
                  com importante eixo corporativo.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Destaques:</strong> Oscar Freire, Av. Faria Lima, Clube Hebraica, St. Paul's School
                </p>
              </div>
            </div>
          </section>

          {/* Localização */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Train className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Localização Privilegiada e Mobilidade
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Os Jardins têm como limites a Avenida Paulista, Rua Estados Unidos, Avenida 9 de Julho, Brigadeiro Luís Antônio e Rebouças, 
              posicionando o bairro no coração da Zona Oeste, com acesso facilitado a todas as regiões da cidade.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Train className="w-6 h-6 text-blue-600" />
                  Transporte Público de Excelência
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Estação Trianon-MASP (Linha 2-Verde):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Acesso direto à Av. Paulista e ao MASP
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Estação Consolação (Linha 2-Verde):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Integração com Linha 4-Amarela na Estação Paulista
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <strong className="text-gray-900">Estação Oscar Freire (Linha 4-Amarela):</strong>
                      <p className="text-gray-700 text-sm mt-1">
                        Na Av. Rebouças esquina com Oscar Freire, conexão com Faria Lima
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#8B6F4B]/5 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Principais Vias de Acesso
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida Paulista:</strong> Eixo cultural e financeiro da cidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida Rebouças:</strong> Conexão com Pinheiros e Zona Sul</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida 9 de Julho:</strong> Ligação com Centro e Zona Sul</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Avenida Brasil:</strong> Acesso ao Parque Ibirapuera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700"><strong>Rua Augusta:</strong> Via comercial e cultural</span>
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
              Infraestrutura de Altíssimo Padrão
            </h2>

            {/* Shopping */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-[#8B6F4B]" />
                Shopping Centers e Comércio de Luxo
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Rua Oscar Freire:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      8ª rua mais luxuosa do mundo, com grifes internacionais e lojas conceito
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Shopping Iguatemi:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Na Av. Faria Lima, um dos mais sofisticados do Brasil, com mais de 200 lojas premium
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Shopping JK Iguatemi:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Centro de luxo com grifes como Dior, Ferragamo, Cartier e Louis Vuitton
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Shopping Cidade Jardim:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Luxo e exclusividade com vista panorâmica e restaurantes premiados
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Conjunto Nacional:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Na Av. Paulista, com comércio, serviços e cinema
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Cultura */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#8B6F4B]" />
                Cultura e Arte
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Os moradores dos Jardins têm à disposição inúmeras opções culturais da Avenida Paulista, como Japan House, Casa das Rosas, 
                Sesc Paulista, Itaú Cultural, MASP e Instituto Moreira Salles:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">MASP - Museu de Arte de São Paulo:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Ícone arquitetônico com acervo de arte internacional
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">MuBE - Museu Brasileiro de Escultura:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      No Jardim Europa, com exposições de esculturas e arte contemporânea
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">MIS - Museu da Imagem e do Som:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      No Jardim Europa, dedicado à preservação da cultura audiovisual
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Teatros:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Gazeta, Eva Herz, Unimed, Procópio Ferreira, Teatro do Sesi
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Cinemas:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Reserva Cultural, Cine Sesc, Shopping Cidade São Paulo
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
                    <strong className="text-gray-900">Hospital das Clínicas (HC-FMUSP):</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Maior e mais importante complexo médico-hospitalar da América Latina, referência internacional
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Instituto do Câncer de São Paulo (ICESP):</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Centro de referência em tratamento oncológico
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Faculdade de Medicina da USP:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Uma das melhores escolas médicas do mundo
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Clínicas e Consultórios:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Ampla rede de clínicas, laboratórios e consultórios médicos de alto padrão
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
                  <span className="text-gray-700 text-sm"><strong>Colégio Dante Alighieri:</strong> Uma das escolas mais tradicionais de SP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>St. Paul's School:</strong> Ensino britânico internacional no Jardim Paulistano</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Faculdade de Medicina da USP:</strong> Melhor do Brasil e da América Latina</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span className="text-gray-700 text-sm"><strong>Escolas Internacionais:</strong> Diversas opções de ensino internacional</span>
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
                    <strong className="text-gray-900">Parque Trianon:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Na Av. Paulista, refúgio verde no coração da cidade
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Parque Ibirapuera:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Acesso rápido ao maior parque urbano da América Latina
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Ruas Arborizadas:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Conceito de bairro-jardim preserva árvores e praças em todas as ruas
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Avenida Paulista aos domingos:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Fechada para carros, vira grande área de lazer
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Clubes */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-[#8B6F4B]" />
                Clubes Exclusivos
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Club Athletico Paulistano:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Um dos clubes mais tradicionais e exclusivos de São Paulo
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Clube A Hebraica:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      No Jardim Paulistano, um dos grandes clubes do município
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] font-bold text-lg">•</span>
                  <div>
                    <strong className="text-gray-900">Sociedade Harmonia de Tênis:</strong>
                    <p className="text-gray-700 text-sm mt-1">
                      Clube social e esportivo tradicional
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
              Perfil dos Apartamentos de Alto Padrão nos Jardins
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Os imóveis dos Jardins representam o <strong>ápice do mercado imobiliário paulistano</strong>, 
              combinando tradição centenária, arquitetura refinada e localização privilegiada:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Características Típicas</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Metragem: 100m² a 500m²+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">3 a 5 suítes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">3 a 4 vagas de garagem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Terraços e varandas amplas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Acabamentos premium e importados</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Diferenciais do Bairro</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Tradição centenária (desde 1913)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Oscar Freire (8ª mais luxuosa)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Ruas arborizadas (bairro-jardim)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Segurança máxima</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B]">•</span>
                    <span className="text-gray-700 text-sm">Endereço mais prestigiado de SP</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#8B6F4B]/10 to-transparent border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
              <h4 className="font-bold text-gray-900 mb-3">Áreas Comuns dos Condomínios</h4>
              <p className="text-gray-700 text-sm mb-3">
                Os edifícios de alto padrão nos Jardins oferecem infraestrutura sofisticada:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold mb-2">Lazer:</p>
                  <ul className="space-y-1">
                    <li>• Piscinas aquecidas</li>
                    <li>• Salão de festas</li>
                    <li>• Espaço gourmet</li>
                    <li>• Rooftop lounge</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Bem-estar:</p>
                  <ul className="space-y-1">
                    <li>• Academia completa</li>
                    <li>• Spa e sauna</li>
                    <li>• Sala de massagem</li>
                    <li>• Espaço zen</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Serviços:</p>
                  <ul className="space-y-1">
                    <li>• Portaria 24h</li>
                    <li>• Concierge</li>
                    <li>• Coworking</li>
                    <li>• Adega climatizada</li>
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
              Os Jardins apresentam <strong>valorização consistente</strong> e são considerados o melhor investimento 
              imobiliário de longo prazo em São Paulo:
            </p>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl mb-6">
              <h4 className="text-xl font-bold mb-4">Por que investir nos Jardins?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Tradição centenária:</strong> Primeiro bairro-jardim do Brasil (1913)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Oscar Freire:</strong> 8ª rua mais luxuosa do mundo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Escassez de terrenos:</strong> Poucos lançamentos, alta demanda</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Demanda internacional:</strong> Compradores do agronegócio e exterior</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#8B6F4B] text-xl">✓</span>
                  <span className="text-sm"><strong>Infraestrutura completa:</strong> Cultura, gastronomia, saúde e educação</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-2xl p-10 text-center shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Encontre Seu Apartamento de Alto Padrão nos Jardins
              </h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Conheça nossa seleção exclusiva de apartamentos no bairro mais sofisticado de São Paulo, 
                com Oscar Freire, tradição centenária e toda infraestrutura de altíssimo padrão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/buscar/venda/apartamentos/sao-paulo/jardins"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <Building2 className="w-5 h-5" />
                  Ver Apartamentos Disponíveis
                </Link>
                <a
                  href="#"
                  onClick={handleWhatsAppClick("Olá! Vi a página dos Jardins no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região.")}
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
              Perguntas Frequentes sobre os Jardins
            </h2>
            
            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quanto custa um apartamento de alto padrão nos Jardins?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  O valor do m² nos Jardins varia de <strong>R$ 12.000 a R$ 65.000</strong>, dependendo do sub-bairro 
                  (América, Europa, Paulista ou Paulistano), acabamentos e infraestrutura. Apartamentos de 3 suítes (150-200m²) 
                  custam entre R$ 2 milhões e R$ 8 milhões, enquanto coberturas e penthouses podem ultrapassar R$ 20 milhões.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Qual a diferença entre os 4 sub-bairros dos Jardins?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  <strong>Jardim América e Europa:</strong> Predominantemente residenciais horizontais, casas de altíssimo padrão. 
                  <strong>Jardim Paulista:</strong> Mais verticalizado, próximo à Av. Paulista, edifícios de luxo. 
                  <strong>Jardim Paulistano:</strong> Onde fica a Oscar Freire e Av. Faria Lima, mix residencial/corporativo.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Por que a Rua Oscar Freire é tão famosa?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  A <strong>Rua Oscar Freire foi eleita a 8ª rua mais luxuosa do mundo</strong> pela Mystery Shopping International, 
                  à frente da Champs-Élysées (Paris) e Praça do Casino (Mônaco). Concentra grifes internacionais, lojas conceito, 
                  restaurantes premiados e é considerada o "coração" do luxo paulistano.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Vale a pena investir em apartamento nos Jardins?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  Sim. Os Jardins oferecem <strong>valorização consistente e endereço mais prestigiado de São Paulo</strong>. 
                  O bairro tem tradição centenária, infraestrutura consolidada, escassez de terrenos (poucos lançamentos) e 
                  demanda permanente nacional e internacional. É investimento seguro de longo prazo com excelente liquidez.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-bold text-gray-900 cursor-pointer">
                  Quais são as principais vantagens de morar nos Jardins?
                </summary>
                <p className="text-gray-700 mt-4 text-sm leading-relaxed">
                  As principais vantagens são: <strong>Oscar Freire</strong> (8ª mais luxuosa do mundo), 
                  <strong> tradição centenária</strong> (desde 1913), <strong>3 estações de metrô</strong>, 
                  <strong> cultura</strong> (MASP, MuBE, MIS), <strong>gastronomia excepcional</strong>, 
                  <strong> clubes exclusivos</strong> (Paulistano, Hebraica), <strong>HC-FMUSP</strong> (melhor hospital), 
                  <strong> ruas arborizadas</strong> (conceito bairro-jardim), <strong>segurança máxima</strong> e 
                  <strong> endereço mais prestigiado de SP</strong>.
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
              "name": "Jardins",
              "description": "Bairro mais sofisticado de São Paulo, fundado em 1913, com Rua Oscar Freire (8ª mais luxuosa do mundo), tradição centenária e altíssimo padrão.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-23.5682",
                "longitude": "-46.6697"
              }
            })
          }}
        />
      </main>

      <WhatsappFloat
        message="Olá! Vi a página dos Jardins no site da NPi Consultoria e gostaria de saber mais sobre apartamentos de alto padrão na região."
      />

      <Footer />
    </>
  );
}
