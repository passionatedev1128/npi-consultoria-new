import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, ClipboardCheck, Building2, Sparkles, Shield, Wrench, TreePine, Car, Wifi, Droplets, ThermometerSun, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

export default function ChecklistImovelAltoPadraoPage() {
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
              <Link href="/guia/imoveis-alto-padrao" className="text-gray-600 hover:text-[#8B6F4B] transition-colors flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                Guia Completo
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#8B6F4B] font-medium">Checklist de Avaliação</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <ClipboardCheck className="w-4 h-4" />
              Antes de Investir
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Checklist Completo: O que Avaliar em um Imóvel de Alto Padrão
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Do acabamento premium às áreas comuns: todos os detalhes técnicos, acabamentos, infraestrutura e diferenciais que fazem a diferença em imóveis de luxo acima de R$ 1 milhão.
            </p>
          </header>

          {/* Box de Resposta Direta */}
          <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Avaliar um imóvel de alto padrão exige análise minuciosa de <strong>7 categorias principais</strong>: acabamentos (pisos, mármore, metais), infraestrutura (ar-condicionado, automação), áreas comuns (amenities), segurança, localização, vagas e documentação. Use este checklist profissional para evitar surpresas e garantir um investimento seguro.
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              A aquisição de um imóvel de alto padrão, especialmente acima de <strong>R$ 1 milhão</strong>, exige critérios de avaliação muito além dos utilizados em imóveis convencionais. Acabamentos premium, tecnologia de ponta, infraestrutura sofisticada e amenities exclusivos são apenas alguns dos elementos que diferenciam um imóvel verdadeiramente luxuoso.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Este checklist profissional foi desenvolvido com base em mais de 20 anos de experiência no mercado de imóveis de luxo, reunindo os principais pontos de atenção para garantir que você faça um investimento inteligente e seguro.
            </p>
          </section>

          {/* Categoria 1: Acabamentos e Materiais */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              1. Acabamentos e Materiais Premium
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-[#8B6F4B] bg-gray-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8B6F4B]" />
                  Pisos e Revestimentos
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Porcelanato de alto padrão:</strong> Verificar se possui padrão retificado (juntas mínimas), qualidade A (sem defeitos) e tamanho mínimo de 60x60cm nas áreas sociais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Mármore e granito:</strong> Nas áreas molhadas, bancadas e detalhes. Mármores como Calacatta, Carrara ou Travertino indicam acabamento premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Piso em madeira:</strong> Se presente, deve ser madeira nobre (carvalho, freijó, ipê) com acabamento de alta qualidade e espessura mínima de 15mm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Rodapés:</strong> Altura mínima de 10cm, em material compatível com o piso e bem acabados nos cantos</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#8B6F4B] bg-gray-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8B6F4B]" />
                  Metais e Louças
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Marcas premium:</strong> Deca, Docol Gold, Grohe, Hansgrohe, Dornbracht - evite marcas genéricas em imóveis de luxo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Acabamento:</strong> Cromado de alta qualidade, preto fosco ou dourado são tendências em alto padrão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Louças:</strong> Deca, Roca ou Incepa com design moderno, vasos sanitários com caixa acoplada ou sistema de embutir</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Chuveiros:</strong> Sistema de ducha de teto (rain shower) ou chuveiro de alta pressão com múltiplos jatos</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#8B6F4B] bg-gray-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8B6F4B]" />
                  Portas e Esquadrias
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Portas internas:</strong> Madeira maciça ou MDF de alta densidade, altura mínima de 2,10m (pé-direito alto)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Porta de entrada:</strong> Porta pivotante ou de design exclusivo, com fechadura eletrônica ou biométrica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Janelas:</strong> Esquadrias em alumínio ou PVC de alta qualidade (marcas como Alcoa, Sasazaki), com vidros duplos ou laminados para isolamento acústico</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Venezianas e blackouts:</strong> Sistema automatizado de controle de luminosidade</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#8B6F4B] bg-gray-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8B6F4B]" />
                  Pinturas e Acabamentos
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Tinta premium:</strong> Marcas como Suvinil Premium, Coral Premium ou similar, com acabamento liso e uniforme</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Gesso:</strong> Rebaixamentos em gesso com iluminação embutida, molduras e sancas de alta qualidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Detalhes:</strong> Acabamentos em cantos, encontros de paredes e tetos devem estar perfeitos, sem falhas</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Categoria 2: Infraestrutura e Instalações */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              2. Infraestrutura e Instalações Técnicas
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ThermometerSun className="w-5 h-5 text-blue-600" />
                  Climatização
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Ar-condicionado central (VRF):</strong> Sistema multi-split com condensadoras externas, controle individual por ambiente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Marcas premium:</strong> Daikin, Carrier, Midea Inverter - evite marcas genéricas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Ventilação:</strong> Sistema de renovação de ar e exaustão adequados, especialmente em cozinhas e banheiros</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-blue-600" />
                  Hidráulica e Aquecimento
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Aquecimento central:</strong> Sistema a gás (Rinnai, Bosch) ou elétrico de alta capacidade para todos os pontos de água quente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Pressão de água:</strong> Sistema de pressurizadores para garantir pressão adequada em todos os andares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Tubulação:</strong> Preferencialmente em PEX ou PPR (mais durável que PVC), com registros de gaveta individuais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Filtros:</strong> Sistema de filtragem de água na entrada do apartamento</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  Elétrica e Iluminação
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Potência elétrica:</strong> Mínimo de 15kW para apartamentos grandes, com disjuntores organizados e identificados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Tomadas:</strong> Quantidade generosa (mínimo 6 por ambiente social), padrão novo brasileiro, incluindo USB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Iluminação LED:</strong> Sistema completo de iluminação embutida, com dimerização (controle de intensidade)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Projeto luminotécnico:</strong> Valorize se o imóvel possui projeto de iluminação assinado</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-blue-600" />
                  Automação e Tecnologia
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Automação residencial:</strong> Integração de iluminação, persianas, som, climatização via app (Google Home, Alexa, sistemas dedicados)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Cabeamento estruturado:</strong> Rede lógica (cat 6 ou superior) em todos os cômodos, fibra óptica até o apartamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Segurança digital:</strong> Sistema de câmeras IP, controle de acesso por aplicativo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Som ambiente:</strong> Sistema de som embutido nas áreas sociais</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Categoria 3: Áreas Comuns e Amenities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              3. Áreas Comuns e Amenities do Condomínio
            </h2>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-gray-700 text-sm mb-4">
                Condomínios de alto padrão devem oferecer amenities que justifiquem valores de condomínio elevados (R$ 2.000 a R$ 10.000+):
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Academia completa:</strong> Equipamentos Technogym ou Life Fitness, espaço para aulas coletivas, personal trainer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Spa e wellness:</strong> Sauna seca e úmida, sala de massagem, ofurô, espaço zen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Piscinas:</strong> Aquecida, coberta, raia de 25m, deck com espreguiçadeiras premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Espaços gourmet:</strong> Churrasqueira premium, forno a lenha, wine bar, adega climatizada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Coworking e business:</strong> Sala de reuniões, estações de trabalho, internet de alta velocidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Espaços kids:</strong> Brinquedoteca, playground, espaço teen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Pet care:</strong> Pet place, área para banho e tosa, dog walker</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Serviços de concierge:</strong> Portaria 24h com uniforme, recepção de encomendas, valet parking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span><strong>Paisagismo:</strong> Projeto assinado, jardins bem cuidados, árvores nativas</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Categoria 4: Segurança */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              4. Segurança e Privacidade
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✓</span>
                    <span><strong>Segurança perimetral:</strong> Muros altos, câmeras 360°, sensores de movimento, iluminação automática</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✓</span>
                    <span><strong>Controle de acesso:</strong> Catracas eletrônicas, reconhecimento facial, cartão de proximidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✓</span>
                    <span><strong>Monitoramento 24h:</strong> Central de segurança com equipe treinada, conexão com polícia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✓</span>
                    <span><strong>Porta blindada:</strong> Nível 3 de blindagem, fechadura multiponto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✓</span>
                    <span><strong>Sensores internos:</strong> Alarme com sensor de presença, fumaça, gás e inundação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✓</span>
                    <span><strong>Privacidade:</strong> Poucos apartamentos por andar (máximo 4), elevador privativo ideal</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Categoria 5: Localização e Entorno */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <TreePine className="w-6 h-6 text-purple-600" />
              </div>
              5. Localização e Qualidade do Entorno
            </h2>

            <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span><strong>Bairro nobre:</strong> Jardim Europa, Itaim Bibi, Vila Nova Conceição, Moema, Pinheiros - veja nosso guia de localização</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span><strong>Proximidade:</strong> Máximo 1km de supermercados premium, farmácias 24h, restaurantes de qualidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span><strong>Educação:</strong> Escolas internacionais e bilíngues (St. Paul's, Graded, Aubrick) a menos de 3km</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span><strong>Saúde:</strong> Hospitais de excelência (Einstein, Sírio-Libanês) a menos de 5km</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span><strong>Áreas verdes:</strong> Parques próximos (Ibirapuera, Villa-Lobos, Povo) para qualidade de vida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span><strong>Mobilidade:</strong> Acesso a avenidas principais, metrô, aeroportos sem trânsito excessivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span><strong>Vizinhança:</strong> Perfil socioeconômico homogêneo, segurança, silêncio</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Categoria 6: Vagas e Área Externa */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-amber-600" />
              </div>
              6. Vagas de Garagem e Área Externa Privativa
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-lg">
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Quantidade:</strong> Mínimo 2 vagas para apartamentos acima de R$ 1 milhão, ideal 3 ou mais para imóveis maiores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Dimensões:</strong> Vagas de 2,5m x 5m (mínimo), amplas o suficiente para SUVs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Localização das vagas:</strong> Próximas ao elevador, preferencialmente cobertas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Carregador elétrico:</strong> Infraestrutura para instalação (tomada 220V de alta potência)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Depósito:</strong> Box privativo para armazenamento, idealmente próximo às vagas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Terraço/Varanda:</strong> Para coberturas, verificar metragem, infraestrutura para churrasqueira, jacuzzi, jardim</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Categoria 7: Documentação e Legal */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-indigo-600" />
              </div>
              7. Documentação e Aspectos Legais
            </h2>

            <div className="border-l-4 border-indigo-500 bg-indigo-50 p-6 rounded-r-lg">
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">✓</span>
                  <span><strong>Matrícula do imóvel:</strong> Atualizada, sem ônus (hipoteca, penhora), registrada no Cartório de Imóveis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">✓</span>
                  <span><strong>Regularização:</strong> Habite-se, IPTU em dia, averbação de construção</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">✓</span>
                  <span><strong>Convenção de condomínio:</strong> Ler atentamente regras sobre pets, obras, aluguel, Airbnb</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">✓</span>
                  <span><strong>Atas de assembleias:</strong> Verificar histórico de decisões, obras previstas, problemas estruturais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">✓</span>
                  <span><strong>Contas do condomínio:</strong> IPTU, água, energia, gás - devem estar em dia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">✓</span>
                  <span><strong>Certidões negativas:</strong> Débitos municipais, estaduais, federais do vendedor e do imóvel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">✓</span>
                  <span><strong>Patrimônio de afetação:</strong> Se imóvel na planta, verificar se há (essencial para segurança)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Box de Alerta */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">⚠️ Sinais de Alerta - Evite!</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• <strong>Acabamentos visualmente perfeitos mas de marcas desconhecidas</strong> (economia falsa)</li>
                  <li>• <strong>Amenities "de fachada"</strong> sem manutenção ou equipamentos básicos</li>
                  <li>• <strong>Condomínio com muitos inadimplentes</strong> ou histórico de atraso em obras</li>
                  <li>• <strong>Matrícula com ônus</strong> (hipoteca não quitada, penhora)</li>
                  <li>• <strong>Construtora sem histórico</strong> ou com reclamações no Reclame Aqui/Procon</li>
                  <li>• <strong>Localização em áreas de valorização duvidosa</strong> ou próximas a favelas sem urbanização</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Avaliar um imóvel de alto padrão exige <strong>atenção aos detalhes</strong> e conhecimento técnico aprofundado. Este checklist profissional cobre os 7 pilares fundamentais, mas lembre-se: em investimentos acima de R$ 1 milhão, é altamente recomendável contratar um <strong>consultor imobiliário especializado</strong> e um <strong>engenheiro para vistoria técnica</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A diferença entre um bom e um excelente imóvel de luxo está nos <strong>detalhes invisíveis</strong>: qualidade dos materiais, reputação da construtora, infraestrutura técnica e potencial de valorização da localização.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Use este guia como base para suas visitas e não tenha pressa. <strong>Imóveis de alto padrão são investimentos de longo prazo</strong> e merecem análise criteriosa em cada item deste checklist.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre Imóveis de Alto Padrão Certificados</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore nossa seleção de imóveis de luxo previamente analisados por especialistas
            </p>
            <Link
              href="/busca"
              className="inline-block bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Ver Imóveis Disponíveis
            </Link>
          </div>

          {/* Artigos Relacionados */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/guia/localizacao-imoveis-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <TreePine className="w-4 h-4" />
                  Antes de Investir
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Como Escolher a Localização Ideal
                </h4>
                <p className="text-sm text-gray-600">
                  Os critérios essenciais para identificar bairros nobres com maior potencial de valorização
                </p>
              </Link>

              <Link
                href="/guia/investimento-imoveis-luxo"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Building2 className="w-4 h-4" />
                  Antes de Investir
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Vale a Pena Investir em Imóveis de Luxo?
                </h4>
                <p className="text-sm text-gray-600">
                  Análise completa sobre rentabilidade e valorização em investimentos acima de R$ 1 milhão
                </p>
              </Link>
            </div>
          </div>

        </article>
        
        <Footer />
      </main>
    </>
  );
}
