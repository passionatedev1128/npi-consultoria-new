'use client';

import Link from 'next/link';
import { Header } from '@/app/components/ui/header';
import { Footer } from '@/app/components/ui/footer';
import { ChevronRight, Home, BookOpen, Star } from 'lucide-react';

export default function ArquiteturaDesignAltoPadrao() {
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
              <span className="text-[#8B6F4B] font-medium">Arquitetura e Design</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              Seção 7: Lifestyle e Comodidades
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Arquitetura e Design em Imóveis de Alto Padrão
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Assinatura de arquitetos renomados, acabamentos exclusivos e tendências internacionais de design que definem o luxo contemporâneo.
            </p>
          </header>

          {/* Box de Resposta Direta */}
          <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>As principais características de arquitetura e design premium:</strong>
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Assinatura de Arquitetos:</strong> Projetos exclusivos por nomes reconhecidos internacionalmente</li>
                  <li><strong>Minimalismo Sofisticado:</strong> Linhas clean, espaços integrados, menos é mais</li>
                  <li><strong>Materiais Nobres:</strong> Mármore, madeira de lei, metais especiais, vidros especiais</li>
                  <li><strong>Iluminação Estratégica:</strong> Natural maximizada + artificial arquitetônica</li>
                  <li><strong>Acabamentos Premium:</strong> Marcas europeias, importados, detalhamento impecável</li>
                  <li><strong>Sustentabilidade Integrada:</strong> Design bioclimático, eficiência energética</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3 italic">
                  Imóveis com design de autor valorizam 20-35% mais que similares sem assinatura.
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              No mercado de imóveis de alto padrão, <strong>arquitetura e design</strong> não são apenas estética – são elementos fundamentais de <strong>valorização patrimonial e distinção social</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A assinatura de um arquiteto renomado, materiais exclusivos e soluções projetuais inovadoras transformam um imóvel em uma <strong>obra de arte habitável</strong>, elevando seu status e valor de mercado.
            </p>
          </section>

          {/* Arquitetos Renomados */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Arquitetos de Prestígio no Mercado Brasileiro
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A <strong>assinatura arquitetônica</strong> é um dos maiores ativos de valorização em imóveis premium. Compradores de alto padrão buscam projetos de nomes consagrados.
            </p>
            
            <div className="space-y-6">
              {/* Arthur Casas */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-12 bg-[#8B6F4B] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Arthur Casas</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Reconhecido internacionalmente, Arthur Casas é sinônimo de <strong>minimalismo sofisticado brasileiro</strong>. Seus projetos equilibram modernidade e aconchego.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Características Marcantes:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Integração entre ambientes internos e externos</li>
                    <li>• Uso de materiais naturais (madeira, pedra, fibras)</li>
                    <li>• Paleta de cores neutras com pontos de destaque</li>
                    <li>• Iluminação natural privilegiada</li>
                  </ul>
                </div>
              </div>

              {/* Isay Weinfeld */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-12 bg-[#8B6F4B] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Isay Weinfeld</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prêmio Pritzker reconhecido, Weinfeld é mestre em criar <strong>edifícios icônicos</strong> que se tornam marcos urbanos.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Características Marcantes:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Fachadas escultóricas e marcantes</li>
                    <li>• Detalhamento impecável em todos os elementos</li>
                    <li>• Uso criativo de cobogós e brises</li>
                    <li>• Projetos que dialogam com a cidade</li>
                  </ul>
                </div>
              </div>

              {/* David Bastos */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-12 bg-[#8B6F4B] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">David Bastos</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Especialista em <strong>edifícios residenciais de alto padrão</strong>, David Bastos assina alguns dos endereços mais valorizados de SP.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Características Marcantes:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Plantas generosas e bem distribuídas</li>
                    <li>• Varandas amplas com vista privilegiada</li>
                    <li>• Fachadas elegantes e atemporais</li>
                    <li>• Atenção a detalhes funcionais</li>
                  </ul>
                </div>
              </div>

              {/* Outros Arquitetos */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Outros Nomes de Prestígio
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">🎨 Marcio Kogan (mk27)</p>
                    <p className="text-sm text-gray-700">Modernismo brasileiro contemporâneo, projetos icônicos</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">🎨 Ruy Ohtake</p>
                    <p className="text-sm text-gray-700">Formas orgânicas, cores vibrantes, identidade única</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">🎨 Bernardes Arquitetura</p>
                    <p className="text-sm text-gray-700">Tradição familiar, elegância clássica contemporânea</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">🎨 Aflalo/Gasperini</p>
                    <p className="text-sm text-gray-700">Grandes torres comerciais e residenciais premium</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tendências de Design */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tendências de Design no Alto Padrão
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Minimalismo Maximalista
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Espaços <strong>clean e despojados</strong>, mas com materiais riquíssimos e acabamentos impecáveis. Menos elementos, porém de altíssima qualidade.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="font-semibold text-gray-900 mb-2">Elementos-Chave:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Paleta de cores neutras (branco, cinza, bege, preto)</li>
                        <li>• Móveis de design icônico</li>
                        <li>• Obras de arte como pontos focais</li>
                        <li>• Ausência de elementos decorativos desnecessários</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Integração Total de Ambientes
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Conceito aberto</strong> onde sala, cozinha e varanda formam um único grande espaço fluido e multifuncional.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg border border-gray-200 text-sm">
                        <p className="font-semibold text-gray-900 mb-1">Living Integrado:</p>
                        <p className="text-gray-700">Sala de estar + jantar + cozinha sem divisões físicas</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg border border-gray-200 text-sm">
                        <p className="font-semibold text-gray-900 mb-1">Indoor-Outdoor:</p>
                        <p className="text-gray-700">Varandas que se tornam extensões naturais da sala</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Materialidade Exuberante
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Uso de <strong>materiais nobres e naturais</strong> com texturas marcantes e cores autênticas.
                    </p>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-lg border-l-4 border-[#8B6F4B] text-sm">
                        <p className="font-semibold text-gray-900 mb-1">🪨 Pedras Naturais:</p>
                        <p className="text-gray-700">Mármore Calacatta, Travertino, Pedra Hijau, Quartzo natural</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg border-l-4 border-[#8B6F4B] text-sm">
                        <p className="font-semibold text-gray-900 mb-1">🌳 Madeiras Nobres:</p>
                        <p className="text-gray-700">Freijó, Nogueira, Carvalho europeu, Cumaru</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg border-l-4 border-[#8B6F4B] text-sm">
                        <p className="font-semibold text-gray-900 mb-1">✨ Metais Especiais:</p>
                        <p className="text-gray-700">Bronze escovado, Latão envelhecido, Aço inox black matte</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Iluminação Arquitetônica
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A luz se torna <strong>elemento escultural</strong>, criando atmosferas e destacando a arquitetura.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Luz Indireta:</strong> Sancas, rasgo de luz, LED embutido em rodatetos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Pendentes de Autor:</strong> Luminárias assinadas por designers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Cenários:</strong> Automação com múltiplos modos (jantar, festa, cinema)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Natural Maximizada:</strong> Pé-direito alto, janelas amplas, claraboias</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Design Bioclimático Integrado
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Sustentabilidade que não compromete a estética – pelo contrário, <strong>enriquece o design</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <p className="font-semibold text-gray-900 mb-1">Ventilação Natural:</p>
                        <p className="text-gray-700">Ventilação cruzada planejada, brises orientados</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <p className="font-semibold text-gray-900 mb-1">Proteção Solar:</p>
                        <p className="text-gray-700">Cobogós, persianas automatizadas, vidros low-e</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <p className="font-semibold text-gray-900 mb-1">Verde Integrado:</p>
                        <p className="text-gray-700">Jardins verticais, tetos verdes, varandas arborizadas</p>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg border border-gray-200">
                        <p className="font-semibold text-gray-900 mb-1">Eficiência Energética:</p>
                        <p className="text-gray-700">Painéis solares integrados, reuso de águas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Acabamentos Premium */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Acabamentos que Definem o Luxo
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              No mercado premium, <strong>cada detalhe importa</strong>. Os acabamentos são o que separa um imóvel de alto padrão de um ultra-luxo.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🛁 Banheiros</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Metais:</strong> Deca Black, Hansgrohe, Grohe (importados)</li>
                  <li><strong>Louças:</strong> Deca Hydra, Duravit, Villeroy & Boch</li>
                  <li><strong>Revestimentos:</strong> Mármore Calacatta, porcelanato 60x120cm</li>
                  <li><strong>Box:</strong> Vidro temperado 10mm, perfis invisíveis</li>
                  <li><strong>Extras:</strong> Banheira de imersão, ducha rain shower</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🍳 Cozinhas</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Bancadas:</strong> Mármore, quartzo Silestone/Caesarstone</li>
                  <li><strong>Armários:</strong> MDF laqueado ou madeira natural com ferragens Blum</li>
                  <li><strong>Eletrodomésticos:</strong> Linha built-in Brastemp/Electrolux gourmet</li>
                  <li><strong>Cooktop:</strong> Indução 4-5 bocas, coifa inox escovado</li>
                  <li><strong>Piso:</strong> Porcelanato 80x80cm antiderrapante</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🚪 Esquadrias</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Material:</strong> Alumínio anodizado ou madeira de lei</li>
                  <li><strong>Vidros:</strong> Laminados acústicos, low-e para conforto térmico</li>
                  <li><strong>Portas:</strong> Pivotantes de 3m altura, madeira nobre ou laca</li>
                  <li><strong>Automação:</strong> Persianas motorizadas integradas</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Iluminação</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Marcas:</strong> Lumini, Luminatti, Flos (importadas)</li>
                  <li><strong>Tecnologia:</strong> LED dimmerizável, temperatura ajustável</li>
                  <li><strong>Controle:</strong> Automação via app ou assistente de voz</li>
                  <li><strong>Design:</strong> Pendentes de autor, spots embutidos invisíveis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Investimento em Design */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              O Investimento em Design Vale a Pena?
            </h2>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                💰 Retorno sobre Investimento
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-lg p-5 border-l-4 border-green-600">
                  <p className="font-semibold text-gray-900 mb-2">Valorização Imediata</p>
                  <p className="text-sm text-gray-700">
                    Imóveis com <strong>design de autor</strong> valorizam 20-35% em relação a imóveis similares sem assinatura arquitetônica.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-5 border-l-4 border-green-600">
                  <p className="font-semibold text-gray-900 mb-2">Velocidade de Venda</p>
                  <p className="text-sm text-gray-700">
                    Acabamentos premium reduzem tempo de venda em <strong>40-60%</strong> comparado à média do mercado.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-5 border-l-4 border-green-600">
                  <p className="font-semibold text-gray-900 mb-2">Diferencial Competitivo</p>
                  <p className="text-sm text-gray-700">
                    Em mercados saturados, design excepcional é o <strong>único diferencial</strong> que justifica preço premium.
                  </p>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">⚖️ Custo vs Benefício</p>
                <p className="text-sm text-gray-700">
                  Investir 10-15% a mais em acabamentos premium pode resultar em valorização de 25-40% no valor final do imóvel.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre o Imóvel Ideal para Você</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore nosso portfólio com imóveis assinados pelos melhores arquitetos de São Paulo
            </p>
            <Link
              href="/busca?precoMin=10000000"
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
                href="/guia/amenities-condominios-luxo"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Star className="w-4 h-4" />
                  LIFESTYLE
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Amenities em Condomínios de Luxo
                </h4>
                <p className="text-sm text-gray-600">
                  Academia, spa, coworking: conheça os diferenciais premium.
                </p>
              </Link>

              <Link
                href="/guia/construtoras-incorporadoras-premium"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Star className="w-4 h-4" />
                  CONSTRUTORAS
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Construtoras Premium: Como Escolher
                </h4>
                <p className="text-sm text-gray-600">
                  Reputação e solidez das principais construtoras de alto padrão.
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
