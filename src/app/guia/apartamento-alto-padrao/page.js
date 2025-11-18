import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, Building2, Clock, Ruler, Sparkles, MapPin, CheckCircle2, Star, Shield } from "lucide-react";

export default function ApartamentoAltoPadraoPage() {
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
              <Link href="/guia" className="text-gray-600 hover:text-[#8B6F4B] transition-colors flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                Guia Completo
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#8B6F4B] font-medium">Apartamento Alto Padrão</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" />
              Tipos de Imóveis
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Apartamento Alto Padrão: O que Define um Imóvel de Luxo?
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Metragem(há exceções), acabamento, localização e amenities: descubra todas as características que classificam um apartamento como premium e o diferenciam dos imóveis convencionais.
            </p>

            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 min de leitura
              </span>
            </div>
          </header>

          {/* Box de Resposta Direta */}
          <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-[#8B6F4B]">Um apartamento é considerado alto padrão quando combina 5 fatores essenciais:</strong> (1) <strong>Metragem acima de 150m²(há exceções menores)</strong>, (2) <strong>Localização nobre</strong>, (3) <strong>Acabamentos premium</strong> (mármore, madeira nobre, automação), (4) <strong>Amenities exclusivos</strong> (concierge, spa, wine bar) e (5) <strong>Poucas unidades por andar</strong> (idealmente 1-2). Em São Paulo, valores começam em R$ 2 milhões e podem ultrapassar R$ 50 milhões em endereços icônicos.
                </p>
                <div className="bg-white/80 rounded-lg p-4 border border-[#8B6F4B]/20">
                  <p className="text-sm text-gray-600 mb-2"><strong>Critérios principais:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Metragem: 150m² - 800m+ (há exceções de imóveis menores com acabamentos de luxo)</li>
                    <li>• Suítes: 3 a 6+</li>
                    <li>• Vagas: 3 a 10+</li>
                    <li>• Preço/m²: R$ 15.000 - R$ 40.000+</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Os 5 Pilares do Alto Padrão
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A classificação de um apartamento como <strong>alto padrão</strong> não depende de um único fator, mas da combinação harmônica de múltiplos elementos que criam uma experiência de moradia exclusiva.
            </p>

            <div className="space-y-6">
              {/* Pilar 1 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <Ruler className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">1. Metragem Generosa</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  A área útil é o primeiro indicador. Apartamentos de alto padrão começam em <strong>150m²</strong> e podem ultrapassar 800m² em coberturas triplex. Há exceções de imóveis menores com acabamentos de alto luxo, e tb se enquadram nessa categoria.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-2">Faixas de metragem:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Entrada (150-200m²):</strong> 3 suítes, living amplo</li>
                    <li>• <strong>Médio (200-350m²):</strong> 4 suítes, escritório, sala de jantar</li>
                    <li>• <strong>Alto (350-500m²):</strong> 5 suítes, sala de estar/jantar separadas, home theater</li>
                    <li>• <strong>Excepcional (500m²+):</strong> 6+ suítes, múltiplas salas, spa privativo</li>
                  </ul>
                </div>
              </div>

              {/* Pilar 2 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">2. Localização Premium</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Em São Paulo, <strong>bairros nobres</strong> são critério obrigatório. Não existe alto padrão em localização periférica, independente do acabamento.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-2">Bairros de alto padrão em SP:</p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <div>
                      <p className="font-semibold text-[#8B6F4B] mb-1">Zona Sul:</p>
                      <ul className="space-y-0.5">
                        <li>• Jardim Europa</li>
                        <li>• Jardim Paulistano</li>
                        <li>• Cidade Jardim</li>
                        <li>• Vila Nova Conceição</li>
                        <li>• Itaim Bibi</li>
                        <li>• Moema</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-[#8B6F4B] mb-1">Zona Oeste:</p>
                      <ul className="space-y-0.5">
                        <li>• Alto de Pinheiros</li>
                        <li>• Perdizes</li>
                        <li>• Pacaembu</li>
                        <li>• Vila Madalena (áreas nobres)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pilar 3 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">3. Acabamentos de Luxo</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Materiais nobres e marcas premium são indispensáveis. Não há alto padrão com <strong>acabamentos medianos</strong>.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-2">Itens obrigatórios:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Pisos:</strong> Mármore, porcelanato de alto padrão, madeira nobre</li>
                    <li>• <strong>Cozinha:</strong> Corian/Silestone, equipada (Miele, Sub-Zero)</li>
                    <li>• <strong>Banheiros:</strong> Mármore, metais Deca Premium/Hansgrohe</li>
                    <li>• <strong>Esquadrias:</strong> Alumínio de alto padrão, vidros temperados</li>
                    <li>• <strong>Automação:</strong> Controle de iluminação, persianas, temperatura</li>
                    <li>• <strong>Climatização:</strong> Ar-condicionado central (VRF) ou split inverter</li>
                  </ul>
                </div>
              </div>

              {/* Pilar 4 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">4. Amenities Exclusivos</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  O condomínio deve oferecer <strong>infraestrutura de resort</strong>, indo muito além de academia e salão de festas.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-2">Amenities esperados:</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                    <ul className="space-y-1">
                      <li>• Concierge 24h</li>
                      <li>• Spa/Sauna/Massagem</li>
                      <li>• Piscina aquecida</li>
                      <li>• Academia completa</li>
                      <li>• Personal trainer</li>
                      <li>• Salão gourmet</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Wine bar/adega</li>
                      <li>• Coworking</li>
                      <li>• Brinquedoteca</li>
                      <li>• Pet place</li>
                      <li>• Quadra poliesportiva</li>
                      <li>• Cinema/teatro</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pilar 5 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">5. Privacidade e Exclusividade</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Poucas unidades por andar</strong> (idealmente 1 ou 2) garantem privacidade. Edifícios com 4+ apartamentos/andar não são considerados alto padrão.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-2">Configurações típicas:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Ultra Premium:</strong> 1 apartamento por andar (ou andar inteiro)</li>
                    <li>• <strong>Alto Padrão:</strong> 2 apartamentos por andar</li>
                    <li>• <strong>Médio-Alto:</strong> 3 apartamentos por andar (limite)</li>
                    <li>• <strong>Vagas:</strong> Mínimo 3, ideal 4-6 por unidade</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Faixas de Preço e Classificação
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Em São Paulo, apartamentos de alto padrão se dividem em diferentes categorias de preço, cada uma com características específicas:
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Alto Padrão Entrada (R$ 2M - 4M)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Características:</p>
                    <ul className="space-y-1">
                      <li>• 150-220m²</li>
                      <li>• 3-4 suítes</li>
                      <li>• 3-4 vagas</li>
                      <li>• 2 unidades/andar</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Bairros típicos:</p>
                    <ul className="space-y-1">
                      <li>• Moema</li>
                      <li>• Campo Belo</li>
                      <li>• Vila Olímpia</li>
                      <li>• Perdizes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#8B6F4B]/10 to-[#8B6F4B]/20 border-2 border-[#8B6F4B] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#8B6F4B] mb-4">Alto Padrão Premium (R$ 4M - 10M)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Características:</p>
                    <ul className="space-y-1">
                      <li>• 220-400m²</li>
                      <li>• 4-5 suítes</li>
                      <li>• 4-6 vagas</li>
                      <li>• 1-2 unidades/andar</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Bairros típicos:</p>
                    <ul className="space-y-1">
                      <li>• Itaim Bibi</li>
                      <li>• Vila Nova Conceição</li>
                      <li>• Alto de Pinheiros</li>
                      <li>• Jardins</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-2 border-amber-400 rounded-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Luxo/Ultra Premium (R$ 10M - 50M+)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">Características:</p>
                    <ul className="space-y-1">
                      <li>• 400-800m²+</li>
                      <li>• 5-6+ suítes</li>
                      <li>• 6-10+ vagas</li>
                      <li>• 1 unidade/andar ou andar inteiro</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Bairros típicos:</p>
                    <ul className="space-y-1">
                      <li>• Jardim Europa</li>
                      <li>• Cidade Jardim</li>
                      <li>• Jardim Paulistano</li>
                      <li>• Chácara Flora</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Diferenças: Médio Padrão vs Alto Padrão
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Muitos imóveis são anunciados como "alto padrão" mas não atendem os critérios reais. Veja as diferenças práticas:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead className="bg-[#8B6F4B] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Critério</th>
                    <th className="px-6 py-3 text-left font-semibold">Médio Padrão</th>
                    <th className="px-6 py-3 text-left font-semibold">Alto Padrão</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Metragem</td>
                    <td className="px-6 py-4 text-gray-700">80-150m²</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-semibold">150m²+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Suítes</td>
                    <td className="px-6 py-4 text-gray-700">2-3</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-semibold">3-6+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Vagas</td>
                    <td className="px-6 py-4 text-gray-700">2</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-semibold">3-6+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Unidades/andar</td>
                    <td className="px-6 py-4 text-gray-700">4-8</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-semibold">1-2</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Piso</td>
                    <td className="px-6 py-4 text-gray-700">Porcelanato padrão</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-semibold">Mármore, madeira nobre</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Cozinha</td>
                    <td className="px-6 py-4 text-gray-700">Semi-equipada</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-semibold">Totalmente equipada (premium)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Automação</td>
                    <td className="px-6 py-4 text-gray-700">Básica ou ausente</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-semibold">Completa (luz, clima, cortinas)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Amenities</td>
                    <td className="px-6 py-4 text-gray-700">Academia, salão de festas</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-semibold">10+ itens (spa, wine bar, etc)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Preço/m²</td>
                    <td className="px-6 py-4 text-gray-700">R$ 8.000 - 15.000</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-semibold">R$ 15.000 - 40.000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Seção 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Construtoras e Incorporadoras de Alto Padrão
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A <strong>grife da incorporadora</strong> é um indicador importante. Empresas consolidadas no segmento premium garantem padrão de qualidade:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#8B6F4B] mb-4">Top Tier (Ultra Premium)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Cyrela</strong> - Maior incorporadora, marca consolidada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Gafisa</strong> - Foco em alto padrão e luxo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Tecnisa</strong> - Projetos premium em bairros nobres</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Brookfield</strong> - Empreendimentos sofisticados</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#8B6F4B] mb-4">Boutique (Super Premium)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Yuny</strong> - Especialista em ultra luxo</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>JHSF</strong> - Cidade Jardim e projetos icônicos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Vitacon</strong> - Projetos exclusivos e limitados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span><strong>Kallas</strong> - Tradição em alto padrão</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
              <p className="text-sm text-blue-900">
                <strong>Dica:</strong> Empreendimentos assinados por arquitetos renomados (Ruy Ohtake, Isay Weinfeld, David Bastos) agregam valor e prestígio adicional.
              </p>
            </div>
          </section>

          {/* Seção 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Checklist: Como Identificar um Verdadeiro Alto Padrão
            </h2>
            
            <div className="bg-[#8B6F4B]/5 rounded-lg p-6 border-2 border-[#8B6F4B]/30">
              <p className="text-gray-700 mb-4">
                Use este checklist ao visitar um apartamento anunciado como alto padrão:
              </p>

              <div className="space-y-3">
                {[
                  "Metragem superior a 150m² (área útil)",
                  "Mínimo 3 suítes (todas com closet)",
                  "Mínimo 3 vagas de garagem (cobertas)",
                  "Máximo 2 unidades por andar",
                  "Localização em bairro nobre consolidado",
                  "Pé-direito mínimo de 2,80m (ideal 3m+)",
                  "Pisos nobres (mármore, madeira, porcelanato grande formato)",
                  "Cozinha totalmente equipada com eletrodomésticos premium",
                  "Ar-condicionado central ou split inverter em todos cômodos",
                  "Automação de iluminação e cortinas",
                  "Concierge/portaria 24h",
                  "Mínimo 8 amenities no condomínio",
                  "Sacada/varanda ampla (20m²+)",
                  "Churrasqueira na varanda",
                  "Incorporadora de reputação consolidada"
                ].map((item, index) => (
                  <label key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#8B6F4B] rounded focus:ring-[#8B6F4B]" />
                    <span className="text-gray-700">{item}</span>
                  </label>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-[#8B6F4B]/20">
                <p className="text-sm text-gray-700">
                  <strong className="text-[#8B6F4B]">Resultado:</strong> Se marcou 12+ itens, é realmente alto padrão. Entre 8-11 itens, é médio-alto. Menos de 8, não é alto padrão verdadeiro.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Conclusão
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Um <strong>apartamento de alto padrão</strong> não é definido por um único critério, mas pela combinação harmônica de metragem generosa, localização privilegiada, acabamentos premium, amenities exclusivos e privacidade.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              O mercado está repleto de imóveis anunciados como "alto padrão" que não atendem os critérios reais. Use o checklist e as referências deste guia para <strong>avaliar criticamente</strong> cada propriedade.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lembre-se: verdadeiro alto padrão preserva valor mesmo em crises. É um <strong>investimento de longo prazo</strong> em qualidade de vida e patrimônio familiar.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre Apartamentos de Alto Padrão em São Paulo</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore nosso portfólio exclusivo de imóveis premium
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
                href="/guia/casa-vs-apartamento-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Building2 className="w-4 h-4" />
                  Tipos de Imóveis
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Casa vs Apartamento de Luxo
                </h4>
                <p className="text-sm text-gray-600">
                  Vantagens e desvantagens de cada tipo para seu perfil
                </p>
              </Link>

              <Link
                href="/guia/coberturas-duplex-triplex"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Star className="w-4 h-4" />
                  Tipos de Imóveis
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Coberturas Duplex e Triplex
                </h4>
                <p className="text-sm text-gray-600">
                  O topo do mercado de luxo em São Paulo
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
