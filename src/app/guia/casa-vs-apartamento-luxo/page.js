import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, Building2, Clock, DollarSign, TrendingUp, Shield, CheckCircle2, XCircle, Leaf, Users, Wrench } from "lucide-react";

export default function CasaVsApartamentoPage() {
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
              <span className="text-[#8B6F4B] font-medium">Casa vs Apartamento</span>
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
              Casa de Alto Padrão vs Apartamento de Luxo: Qual Escolher?
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Vantagens e desvantagens de cada tipo para seu perfil de investimento. Compare custos, valorização, privacidade, manutenção e estilo de vida para tomar a melhor decisão.
            </p>

            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                12 min de leitura
              </span>
            </div>
          </header>

          {/* Box de Resposta Direta */}
          <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-[#8B6F4B]">Depende do seu estilo de vida e prioridades.</strong> <strong>Casa</strong> oferece privacidade total, área externa, liberdade de reforma e personalização, mas exige mais manutenção (R$ 3-8k/mês) e tem liquidez menor. <strong>Apartamento</strong> oferece comodidade, segurança estruturada, amenities compartilhados e liquidez superior, mas limita privacidade e personalização. Para famílias com crianças/pets que valorizam espaço, casa é ideal. Para executivos que buscam praticidade e baixa manutenção, apartamento é melhor.
                </p>
                <div className="bg-white/80 rounded-lg p-4 border border-[#8B6F4B]/20">
                  <p className="text-sm text-gray-600 mb-2"><strong>Escolha rápida:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Casa:</strong> Privacidade, área verde, pets, personalização</li>
                    <li>• <strong>Apartamento:</strong> Segurança, praticidade, amenities, liquidez</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Comparação Completa: Casa vs Apartamento
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Veja a comparação detalhada entre os dois tipos de imóveis premium considerando 12 critérios essenciais:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead className="bg-[#8B6F4B] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Critério</th>
                    <th className="px-6 py-3 text-left font-semibold">Casa de Alto Padrão</th>
                    <th className="px-6 py-3 text-left font-semibold">Apartamento de Luxo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Privacidade</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">★★★★★ Total</td>
                    <td className="px-6 py-4 text-gray-700">★★★☆☆ Moderada</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Área Externa</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Jardim, piscina, quintal</td>
                    <td className="px-6 py-4 text-gray-700">Sacada/terraço</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Manutenção</td>
                    <td className="px-6 py-4 text-red-600">R$ 3.000-8.000/mês</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">R$ 800-2.500/mês (condomínio)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Segurança</td>
                    <td className="px-6 py-4 text-gray-700">Própria (custo adicional)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Estruturada (inclusa)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Personalização</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Total liberdade</td>
                    <td className="px-6 py-4 text-red-600">Limitada (estrutura)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Liquidez</td>
                    <td className="px-6 py-4 text-red-600">Menor (público restrito)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Maior (mais demanda)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Amenities</td>
                    <td className="px-6 py-4 text-gray-700">Privados (só seus)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Compartilhados (10+ itens)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Pets</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Liberdade total</td>
                    <td className="px-6 py-4 text-gray-700">Permitido mas limitado</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Valorização</td>
                    <td className="px-6 py-4 text-gray-700">Localização-dependente</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Mais previsível</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Custo Total/mês</td>
                    <td className="px-6 py-4 text-gray-700">R$ 5.000-12.000</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">R$ 2.000-5.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Preço/m²</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">R$ 12.000-25.000</td>
                    <td className="px-6 py-4 text-gray-700">R$ 18.000-40.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Praticidade</td>
                    <td className="px-6 py-4 text-red-600">Baixa (gestão total)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Alta (condomínio cuida)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Seção 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Vantagens e Desvantagens da Casa de Alto Padrão
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Vantagens */}
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Vantagens
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl font-bold">1</span>
                    <div>
                      <strong>Privacidade Total:</strong>
                      <p className="text-xs mt-1">Sem vizinhos acima, abaixo ou ao lado. Festa, barulho, horários flexíveis sem preocupação.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl font-bold">2</span>
                    <div>
                      <strong>Área Externa Privativa:</strong>
                      <p className="text-xs mt-1">Jardim, piscina, churrasqueira, horta próprios. Ideal para crianças e pets.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl font-bold">3</span>
                    <div>
                      <strong>Liberdade de Reforma:</strong>
                      <p className="text-xs mt-1">Modifique, amplie, derrube paredes sem autorização de condomínio.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl font-bold">4</span>
                    <div>
                      <strong>Personalização Total:</strong>
                      <p className="text-xs mt-1">Arquitetura única, decoração externa, paisagismo exclusivo.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl font-bold">5</span>
                    <div>
                      <strong>Terreno Próprio:</strong>
                      <p className="text-xs mt-1">Valorização do lote (solo criado). Possibilidade de expansão futura.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl font-bold">6</span>
                    <div>
                      <strong>Estilo de Vida Exclusivo:</strong>
                      <p className="text-xs mt-1">Casa remete a status, tradição familiar, patrimônio de gerações.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Desvantagens */}
              <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Desvantagens
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">1</span>
                    <div>
                      <strong>Alta Manutenção:</strong>
                      <p className="text-xs mt-1">Jardineiro, piscineiro, faxina, reparos constantes. R$ 3-8k/mês.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">2</span>
                    <div>
                      <strong>Segurança Própria:</strong>
                      <p className="text-xs mt-1">Sistema de alarme, câmeras, segurança 24h (custo adicional R$ 2-5k/mês).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">3</span>
                    <div>
                      <strong>Menor Liquidez:</strong>
                      <p className="text-xs mt-1">Demora 6-18 meses para vender. Público comprador mais restrito.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">4</span>
                    <div>
                      <strong>Gestão Total:</strong>
                      <p className="text-xs mt-1">Você cuida de tudo: jardinagem, limpeza, reparos, contas separadas.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">5</span>
                    <div>
                      <strong>Menos Praticidade:</strong>
                      <p className="text-xs mt-1">Sem concierge, portaria, serviços do condomínio. Tudo por sua conta.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">6</span>
                    <div>
                      <strong>Impostos Mais Altos:</strong>
                      <p className="text-xs mt-1">IPTU proporcional ao terreno. Área construída + lote = conta maior.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Leaf className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Perfil Ideal para Casa</p>
                  <p className="text-blue-800 text-sm">
                    Famílias com crianças pequenas, pessoas com pets, quem valoriza contato com natureza, indivíduos que não viajam muito (casa demanda presença) e quem tem tempo/orçamento para gestão da propriedade.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Vantagens e Desvantagens do Apartamento de Luxo
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Vantagens */}
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Vantagens
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl font-bold">1</span>
                    <div>
                      <strong>Segurança Estruturada:</strong>
                      <p className="text-xs mt-1">Portaria 24h, controle de acesso, câmeras, segurança privada inclusa.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl font-bold">2</span>
                    <div>
                      <strong>Amenities Compartilhados:</strong>
                      <p className="text-xs mt-1">Academia, spa, piscina, salão gourmet sem custo adicional de manutenção.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl font-bold">3</span>
                    <div>
                      <strong>Baixa Manutenção:</strong>
                      <p className="text-xs mt-1">Condomínio cuida de tudo: limpeza áreas comuns, elevadores, piscina.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl font-bold">4</span>
                    <div>
                      <strong>Alta Liquidez:</strong>
                      <p className="text-xs mt-1">Vende em 2-6 meses. Mercado mais amplo e ativo.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl font-bold">5</span>
                    <div>
                      <strong>Praticidade Total:</strong>
                      <p className="text-xs mt-1">Porteiro recebe encomendas, concierge resolve problemas, zeladoria mantém tudo.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl font-bold">6</span>
                    <div>
                      <strong>Vistas Privilegiadas:</strong>
                      <p className="text-xs mt-1">Andares altos oferecem panorama único da cidade.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Desvantagens */}
              <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Desvantagens
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">1</span>
                    <div>
                      <strong>Privacidade Limitada:</strong>
                      <p className="text-xs mt-1">Vizinhos próximos, barulho compartilhado, restrições de horário.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">2</span>
                    <div>
                      <strong>Sem Área Verde Privativa:</strong>
                      <p className="text-xs mt-1">Apenas sacada/terraço. Jardim e piscina são compartilhados.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">3</span>
                    <div>
                      <strong>Reforma Limitada:</strong>
                      <p className="text-xs mt-1">Não pode mexer em estrutura, fachada, áreas molhadas (limitações).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">4</span>
                    <div>
                      <strong>Dependência de Terceiros:</strong>
                      <p className="text-xs mt-1">Decisões de reforma no prédio dependem de assembleia (maioria).</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">5</span>
                    <div>
                      <strong>Pets Limitados:</strong>
                      <p className="text-xs mt-1">Restrições de tamanho, raça, quantidade. Sem liberdade total.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl font-bold">6</span>
                    <div>
                      <strong>Custo/m² Mais Alto:</strong>
                      <p className="text-xs mt-1">Apartamentos custam mais por m² que casas (R$ 18-40k vs R$ 12-25k).</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Perfil Ideal para Apartamento</p>
                  <p className="text-blue-800 text-sm">
                    Executivos que viajam muito, casais sem filhos ou com filhos adolescentes, pessoas que valorizam praticidade acima de tudo, investidores focados em liquidez e quem busca amenities sem custo de manutenção.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Custos Mensais Reais: Casa vs Apartamento
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Compare os custos mensais totais de manutenção de cada tipo de imóvel em São Paulo:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Custos Casa */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#8B6F4B] mb-4">Casa de 500m² (terreno 800m²)</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>IPTU:</span>
                    <strong>R$ 1.200</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Energia elétrica:</span>
                    <strong>R$ 800</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Água:</span>
                    <strong>R$ 300</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Gás:</span>
                    <strong>R$ 200</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Jardineiro (2x/semana):</span>
                    <strong>R$ 1.000</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Piscineiro (1x/semana):</span>
                    <strong>R$ 500</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Faxina (3x/semana):</span>
                    <strong>R$ 1.800</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Segurança (monitoramento):</span>
                    <strong>R$ 800</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Manutenções diversas:</span>
                    <strong>R$ 1.000</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-[#8B6F4B]/10 rounded font-bold border-2 border-[#8B6F4B]">
                    <span>TOTAL MENSAL:</span>
                    <strong className="text-[#8B6F4B] text-lg">R$ 7.600</strong>
                  </div>
                </div>
              </div>

              {/* Custos Apartamento */}
              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Apartamento de 350m²</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>IPTU:</span>
                    <strong>R$ 600</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Condomínio:</span>
                    <strong>R$ 2.500</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Energia elétrica:</span>
                    <strong>R$ 500</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Água (inclusa condomínio):</span>
                    <strong>R$ 0</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Gás:</span>
                    <strong>R$ 150</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Faxina (3x/semana):</span>
                    <strong>R$ 1.500</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Segurança (inclusa):</span>
                    <strong>R$ 0</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Manutenções diversas:</span>
                    <strong>R$ 300</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span className="text-gray-400">-</span>
                    <strong className="text-gray-400">-</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-blue-50 rounded font-bold border-2 border-blue-500">
                    <span>TOTAL MENSAL:</span>
                    <strong className="text-blue-900 text-lg">R$ 5.550</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <p className="text-sm text-green-900">
                <strong>Economia mensal com apartamento: R$ 2.050</strong> (27% menor). Isso representa R$ 24.600/ano ou R$ 246.000 em 10 anos!
              </p>
            </div>
          </section>

          {/* Seção 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Valorização e Liquidez: O que Esperar
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A valorização e facilidade de venda variam significativamente entre casas e apartamentos:
            </p>

            <div className="space-y-6">
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#8B6F4B] mb-4">Casas de Alto Padrão</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">Valorização:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Localização premium:</strong> 5-8% a.a.</li>
                      <li>• <strong>Localização média:</strong> 3-5% a.a.</li>
                      <li>• <strong>Forte dependência</strong> do bairro</li>
                      <li>• <strong>Terreno valoriza</strong> mais que construção</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">Liquidez:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Tempo de venda:</strong> 6-18 meses</li>
                      <li>• <strong>Desconto negociação:</strong> 10-15%</li>
                      <li>• <strong>Público-alvo:</strong> Muito restrito</li>
                      <li>• <strong>Sazonalidade:</strong> Alta (verão vende mais)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Apartamentos de Luxo</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">Valorização:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Bairros nobres:</strong> 6-10% a.a.</li>
                      <li>• <strong>Média geral:</strong> 5-7% a.a.</li>
                      <li>• <strong>Mais previsível</strong> e consistente</li>
                      <li>• <strong>Liquidez agrega</strong> valor adicional</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">Liquidez:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Tempo de venda:</strong> 2-6 meses</li>
                      <li>• <strong>Desconto negociação:</strong> 5-10%</li>
                      <li>• <strong>Público-alvo:</strong> Amplo</li>
                      <li>• <strong>Sazonalidade:</strong> Baixa (vende ano todo)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-yellow-900 mb-2">Investimento de Longo Prazo</p>
                  <p className="text-yellow-800 text-sm">
                    <strong>Apartamentos são mais líquidos e práticos para investimento.</strong> Casas são melhores para quem busca moradia de longo prazo (10+ anos) e não precisa vender rapidamente. O prêmio de liquidez do apartamento justifica preço/m² mais alto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Guia de Decisão: Qual Escolher?
            </h2>
            
            <div className="space-y-6">
              <div className="bg-[#8B6F4B]/10 border-2 border-[#8B6F4B] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#8B6F4B] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Escolha CASA se você:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tem <strong>família com crianças pequenas</strong> e quer área externa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Possui <strong>pets de grande porte</strong> e quer liberdade total</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Valoriza <strong>privacidade acima de tudo</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gosta de <strong>jardinagem, horta, piscina privativa</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quer <strong>personalizar arquitetura</strong> e decoração externa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Não viaja muito e pode <strong>cuidar da propriedade</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tem orçamento para <strong>R$ 5-10k/mês de manutenção</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] mr-2 mt-0.5 flex-shrink-0" />
                    <span>Planeja <strong>moradia de longo prazo</strong> (10+ anos)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Escolha APARTAMENTO se você:
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>É executivo que <strong>viaja frequentemente</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Valoriza <strong>praticidade e baixa manutenção</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quer <strong>segurança estruturada inclusa</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gosta de <strong>amenities compartilhados</strong> (academia, spa)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Busca <strong>investimento com liquidez</strong> (fácil revenda)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prefere <strong>condomínio cuidar de tudo</strong></span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Quer <strong>custos mensais previsíveis</strong> e menores</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prioriza <strong>localização central</strong> e vista panorâmica</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Conclusão
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A escolha entre <strong>casa e apartamento de alto padrão</strong> não tem resposta certa universal. Depende fundamentalmente do seu estilo de vida, composição familiar, disponibilidade de tempo e prioridades.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Casas</strong> oferecem privacidade total e contato com natureza, mas exigem gestão ativa e custos maiores. <strong>Apartamentos</strong> entregam praticidade e segurança, mas limitam privacidade e personalização.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Para investimento puro focado em liquidez, apartamentos são superiores. Para moradia de longo prazo com família, casas trazem qualidade de vida incomparável. Avalie com honestidade seu perfil e prioridades antes de decidir.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre Sua Casa ou Apartamento Ideal</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore nosso portfólio de imóveis de alto padrão em São Paulo
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
                href="/guia/apartamento-alto-padrao-caracteristicas"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Building2 className="w-4 h-4" />
                  Tipos de Imóveis
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Apartamento Alto Padrão: O que Define
                </h4>
                <p className="text-sm text-gray-600">
                  Características que classificam um apartamento como premium
                </p>
              </Link>

              <Link
                href="/guia/coberturas-duplex-triplex"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Shield className="w-4 h-4" />
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
