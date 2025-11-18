import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, TrendingUp, Clock, MapPin, Building2, CheckCircle2, XCircle, AlertTriangle, Sparkles, Target, LineChart } from "lucide-react";

export default function ImovelValorizaPage() {
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
              <span className="text-[#8B6F4B] font-medium">Imóvel que Valoriza</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              Valorização e Investimento
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Como Escolher Imóvel que Valoriza: Guia Completo
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Fatores que impactam valorização imobiliária em São Paulo. Localização, infraestrutura, tendências e como identificar áreas com alto potencial de crescimento antes da valorização acontecer.
            </p>

            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                15 min de leitura
              </span>
            </div>
          </header>

          {/* Box de Resposta Direta */}
          <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-[#8B6F4B]">Imóveis que mais valorizam combinam 3 fatores essenciais:</strong> (1) <strong>Localização em transição</strong> (bairros emergentes próximos a áreas nobres), (2) <strong>Infraestrutura em desenvolvimento</strong> (novas estações de metrô, shopping, hospitais) e (3) <strong>Perfil de moradores melhorando</strong> (gentrificação controlada). Em SP, bairros como <strong>Pinheiros, Vila Madalena e Mooca</strong> valorizam 8-12% a.a. vs 4-6% a.a. da média. Chave: <strong>comprar 2-3 anos ANTES</strong> da infraestrutura ficar pronta, quando preços ainda não refletem o potencial.
                </p>
                <div className="bg-white/80 rounded-lg p-4 border border-[#8B6F4B]/20">
                  <p className="text-sm text-gray-600 mb-2"><strong>Fórmula da valorização:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Localização privilegiada = 40% do potencial</li>
                    <li>• Infraestrutura nova = 30% do potencial</li>
                    <li>• Características do imóvel = 20% do potencial</li>
                    <li>• Timing da compra = 10% do potencial</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Os 10 Fatores de Valorização Imobiliária
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A valorização de um imóvel não é aleatória. Ela segue <strong>padrões previsíveis</strong> baseados em fatores objetivos. Conheça os 10 mais importantes:
            </p>

            <div className="space-y-4">
              {[
                {
                  numero: "1",
                  titulo: "Proximidade ao Metrô",
                  impacto: "ALTO",
                  descricao: "Imóveis até 500m de estação de metrô valorizam 15-25% acima da média. Anúncio de nova linha aumenta preços 10-15% imediatamente.",
                  exemplo: "Linha 5-Lilás (Moema/Brooklin): +18% em 3 anos"
                },
                {
                  numero: "2",
                  titulo: "Shopping Centers e Comércio",
                  impacto: "MÉDIO-ALTO",
                  descricao: "Shopping de alta renda no raio de 1km valoriza 8-12%. Comércio de rua forte (restaurantes, cafés) adiciona 5-8%.",
                  exemplo: "Shopping Iguatemi JK: apartamentos no entorno +12%"
                },
                {
                  numero: "3",
                  titulo: "Parques e Áreas Verdes",
                  impacto: "ALTO",
                  descricao: "Vista ou proximidade (300m) de parque grande adiciona 12-20% ao valor. Qualidade de vida é critério premium.",
                  exemplo: "Ibirapuera: imóveis com vista +25%"
                },
                {
                  numero: "4",
                  titulo: "Escolas Particulares Top",
                  impacto: "MÉDIO",
                  descricao: "Colégio de elite em 1km atrai famílias de alta renda. Valorização de 6-10% e maior demanda de aluguel.",
                  exemplo: "Entorno Colégio Bandeirantes (Paraíso)"
                },
                {
                  numero: "5",
                  titulo: "Hospitais de Referência",
                  impacto: "MÉDIO",
                  descricao: "Hospital premium próximo valoriza 5-8%. Albert Einstein, Sírio-Libanês e HCor são âncoras de valorização.",
                  exemplo: "Região Einstein (Morumbi): valorização consistente"
                },
                {
                  numero: "6",
                  titulo: "Segurança da Região",
                  impacto: "MUITO ALTO",
                  descricao: "Bairros com baixa criminalidade valorizam 20-30% mais que regiões inseguras, mesmo com infraestrutura similar.",
                  exemplo: "Jardins vs Centro: diferença de 40-60% no m²"
                },
                {
                  numero: "7",
                  titulo: "Gentrificação (Revitalização)",
                  impacto: "MUITO ALTO",
                  descricao: "Áreas em processo de gentrificação valorizam 15-25% a.a. nos primeiros 5 anos. Risco: gentrificação pode estagnar.",
                  exemplo: "Pinheiros (2010-2020): +180% acumulado"
                },
                {
                  numero: "8",
                  titulo: "Centros Empresariais",
                  impacto: "ALTO",
                  descricao: "Proximidade a eixos empresariais (Faria Lima, Berrini, Paulista) garante demanda de aluguel e valorização 8-12% a.a.",
                  exemplo: "Faria Lima: imóveis 500m valorizam +10% a.a."
                },
                {
                  numero: "9",
                  titulo: "Gastronomia e Vida Cultural",
                  impacto: "MÉDIO",
                  descricao: "Cena gastronômica forte atrai público de alta renda. Valorização de 6-10% e ótima qualidade de vida.",
                  exemplo: "Vila Madalena: bares e restaurantes impulsionam"
                },
                {
                  numero: "10",
                  titulo: "Características do Imóvel",
                  impacto: "MÉDIO",
                  descricao: "Vagas, metragem, andar alto, vista, estado de conservação impactam 10-15% no valor final.",
                  exemplo: "Cobertura vs apartamento: +50-100% no mesmo prédio"
                }
              ].map((fator, index) => (
                <div key={index} className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6 hover:border-[#8B6F4B] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8B6F4B] to-[#6d5839] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {fator.numero}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{fator.titulo}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          fator.impacto === 'MUITO ALTO' ? 'bg-red-100 text-red-900' :
                          fator.impacto === 'ALTO' ? 'bg-orange-100 text-orange-900' :
                          fator.impacto === 'MÉDIO-ALTO' ? 'bg-amber-100 text-amber-900' :
                          'bg-blue-100 text-blue-900'
                        }`}>
                          {fator.impacto}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">{fator.descricao}</p>
                      <div className="bg-[#8B6F4B]/5 rounded-lg px-3 py-2 text-xs text-gray-700">
                        <strong>Exemplo:</strong> {fator.exemplo}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seção 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Sinais de uma Área em Ascensão
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Como identificar <strong>ANTES</strong> da valorização massiva? Estes sinais indicam que um bairro está prestes a explodir:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Sinais Positivos */}
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Sinais Positivos (Compre Agora)
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Cafés e restaurantes novos:</strong>
                      <p className="text-xs mt-1">Classe média-alta chegando. Primeiro sinal de gentrificação.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Obras de infraestrutura:</strong>
                      <p className="text-xs mt-1">Metrô em construção, BRT, viadutos. Compre 2-3 anos antes de terminar.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Lançamentos de incorporadoras grandes:</strong>
                      <p className="text-xs mt-1">Cyrela, Gafisa entrando = apostando na área. Elas estudam muito.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Startups e coworkings:</strong>
                      <p className="text-xs mt-1">Público jovem de alta renda. Renda mediana subindo.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Galerias de arte e teatros:</strong>
                      <p className="text-xs mt-1">Vida cultural = gentrificação avançada. Valorização consolidada.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-3 text-xl">✓</span>
                    <div>
                      <strong>Fachadas sendo pintadas:</strong>
                      <p className="text-xs mt-1">Moradores investindo = confiança no futuro da região.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Sinais Negativos */}
              <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Sinais Negativos (Evite ou Venda)
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">✗</span>
                    <div>
                      <strong>Comércio fechando:</strong>
                      <p className="text-xs mt-1">Lojas com placas "Aluga-se" ou fechadas = declínio econômico.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">✗</span>
                    <div>
                      <strong>Prédios mal conservados:</strong>
                      <p className="text-xs mt-1">Fachadas descascadas, lixo acumulado = desvalorização iminente.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">✗</span>
                    <div>
                      <strong>Criminalidade visível:</strong>
                      <p className="text-xs mt-1">Assaltos frequentes, população de rua = fuga de moradores.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">✗</span>
                    <div>
                      <strong>Ruas escuras e vazias à noite:</strong>
                      <p className="text-xs mt-1">Falta de vida noturna = área perigosa ou sem vitalidade.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">✗</span>
                    <div>
                      <strong>Infraestrutura abandonada:</strong>
                      <p className="text-xs mt-1">Obras paradas há anos = governo não investe mais.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3 text-xl">✗</span>
                    <div>
                      <strong>Muitos imóveis à venda:</strong>
                      <p className="text-xs mt-1">Oferta alta = moradores fugindo. Pressão vendedora.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seção 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Infraestrutura que Mais Agrega Valor
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Nem toda infraestrutura valoriza igual. Veja o <strong>impacto real</strong> de cada tipo:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead className="bg-[#8B6F4B] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Infraestrutura</th>
                    <th className="px-6 py-3 text-left font-semibold">Valorização</th>
                    <th className="px-6 py-3 text-left font-semibold">Raio de Impacto</th>
                    <th className="px-6 py-3 text-left font-semibold">Tempo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Estação de Metrô</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">15-25%</td>
                    <td className="px-6 py-4 text-gray-700">500m</td>
                    <td className="px-6 py-4 text-gray-700">2-3 anos</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Shopping Center Premium</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">10-15%</td>
                    <td className="px-6 py-4 text-gray-700">1km</td>
                    <td className="px-6 py-4 text-gray-700">1-2 anos</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Parque Grande (Ibirapuera)</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">12-20%</td>
                    <td className="px-6 py-4 text-gray-700">300m</td>
                    <td className="px-6 py-4 text-gray-700">Imediato</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Hospital Premium</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">5-10%</td>
                    <td className="px-6 py-4 text-gray-700">800m</td>
                    <td className="px-6 py-4 text-gray-700">1-2 anos</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Universidade Top</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">8-12%</td>
                    <td className="px-6 py-4 text-gray-700">1,5km</td>
                    <td className="px-6 py-4 text-gray-700">3-5 anos</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Corredor de Ônibus (BRT)</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">5-8%</td>
                    <td className="px-6 py-4 text-gray-700">400m</td>
                    <td className="px-6 py-4 text-gray-700">1-2 anos</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Ciclovia/Calçadão</td>
                    <td className="px-6 py-4 text-gray-700">2-4%</td>
                    <td className="px-6 py-4 text-gray-700">200m</td>
                    <td className="px-6 py-4 text-gray-700">6-12 meses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-sm text-blue-900 mb-2">
                <strong>Timing é tudo:</strong>
              </p>
              <p className="text-sm text-blue-800">
                Compre quando o projeto é anunciado, <strong>não quando é inaugurado</strong>. Ao abrir a estação de metrô, preços já subiram 80% do potencial. O melhor momento é <strong>durante as obras</strong>, quando há desconforto temporário mas valorização futura garantida.
              </p>
            </div>
          </section>

          {/* Seção 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Bairros com Alto Potencial em São Paulo (2024-2030)
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Baseado em infraestrutura planejada e tendências, estes bairros têm <strong>potencial acima da média</strong> nos próximos 5-7 anos:
            </p>

            <div className="space-y-6">
              {[
                {
                  bairro: "Vila Leopoldina",
                  potencial: "MUITO ALTO",
                  valorização: "12-18% a.a.",
                  motivo: "Linha 6-Laranja do metrô (2025-2027) + Vila Leopoldina-Jaguaré virando hub criativo. Artistas e startups já chegando.",
                  precoAtual: "R$ 10.000-14.000/m²",
                  previsao: "R$ 18.000-25.000/m² em 2030"
                },
                {
                  bairro: "Mooca / Brás (Próximo ao Metrô)",
                  potencial: "ALTO",
                  valorização: "10-15% a.a.",
                  motivo: "Expansão da Linha 2-Verde + gentrificação acelerada. Zona Leste se conectando ao centro expandido.",
                  precoAtual: "R$ 8.000-12.000/m²",
                  previsao: "R$ 15.000-20.000/m² em 2030"
                },
                {
                  bairro: "Barra Funda",
                  potencial: "ALTO",
                  valorização: "10-14% a.a.",
                  motivo: "Arena Palmeiras + Shopping West Plaza + Linha 6. Região se transformando em novo polo empresarial.",
                  precoAtual: "R$ 9.000-13.000/m²",
                  previsao: "R$ 16.000-22.000/m² em 2030"
                },
                {
                  bairro: "Santana / Tucuruvi",
                  potencial: "MÉDIO-ALTO",
                  valorização: "8-12% a.a.",
                  motivo: "Zona Norte com infraestrutura completa mas preços ainda acessíveis. Metrô e comércio consolidados.",
                  precoAtual: "R$ 7.000-10.000/m²",
                  previsao: "R$ 12.000-17.000/m² em 2030"
                },
                {
                  bairro: "Campo Belo / Brooklin",
                  potencial: "MÉDIO",
                  valorização: "6-9% a.a.",
                  motivo: "Consolidado mas ainda tem espaço. Proximidade à Berrini e Linha 5. Perfil familiar premium.",
                  precoAtual: "R$ 12.000-16.000/m²",
                  previsao: "R$ 17.000-23.000/m² em 2030"
                }
              ].map((area, index) => (
                <div key={index} className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{area.bairro}</h3>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                        area.potencial === 'MUITO ALTO' ? 'bg-red-100 text-red-900' :
                        area.potencial === 'ALTO' ? 'bg-orange-100 text-orange-900' :
                        area.potencial === 'MÉDIO-ALTO' ? 'bg-amber-100 text-amber-900' :
                        'bg-blue-100 text-blue-900'
                      }`}>
                        {area.potencial}
                      </span>
                      <span className="text-sm font-bold text-[#8B6F4B]">{area.valorização}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{area.motivo}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Preço atual (2024):</p>
                      <p className="font-bold text-gray-900">{area.precoAtual}</p>
                    </div>
                    <div className="bg-[#8B6F4B]/10 rounded-lg p-3">
                      <p className="text-xs text-gray-600 mb-1">Previsão (2030):</p>
                      <p className="font-bold text-[#8B6F4B]">{area.previsao}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seção 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Erros Comuns ao Avaliar Potencial de Valorização
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  erro: "Comprar em bairro já valorizado esperando crescimento",
                  porque: "Jardins, Itaim e Vila Nova já chegaram ao teto. Crescimento será inflação (4-6% a.a.), não valorização real.",
                  correto: "Compre em bairros emergentes adjacentes aos consolidados"
                },
                {
                  erro: "Ignorar segurança pública",
                  porque: "Infraestrutura não adianta se a área é violenta. Criminalidade derruba 30-40% do valor potencial.",
                  correto: "Valorize bairros seguros mesmo sem metrô (ainda)"
                },
                {
                  erro: "Acreditar em projetos não confirmados",
                  porque: "Especulação de 'vai ter metrô' inflaciona preços sem garantia. Obras param, projeto cancela, você perde.",
                  correto: "Só considere projetos com licitação concluída ou em obras"
                },
                {
                  erro: "Comprar longe demais do centro",
                  porque: "Periferia pode ter infraestrutura mas falta demanda de alta renda. Liquidez baixíssima.",
                  correto: "Fique no raio de 15km do centro expandido"
                },
                {
                  erro: "Subestimar conservação do imóvel",
                  porque: "Prédio antigo mal conservado desvaloriza mesmo em ótima localização. Reforma pesada = prejuízo.",
                  correto: "Prefira prédios bem mantidos ou prontos para reforma leve"
                },
                {
                  erro: "Não pesquisar plano diretor da cidade",
                  porque: "Mudanças de zoneamento podem permitir (ou proibir) novos prédios, impactando seu imóvel.",
                  correto: "Verifique plano diretor e leis de zoneamento antes de comprar"
                }
              ].map((item, index) => (
                <div key={index} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-bold text-red-900 mb-2">{item.erro}</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        <strong>Por que é erro:</strong> {item.porque}
                      </p>
                      <div className="bg-white rounded-lg p-3 border border-red-200">
                        <p className="text-sm text-green-900">
                          <strong className="text-green-600">✓ Faça isso:</strong> {item.correto}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seção 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Como Fazer Análise de Valorização (Passo a Passo)
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Use este método para <strong>avaliar o potencial real</strong> de qualquer imóvel:
            </p>

            <div className="space-y-4">
              {[
                {
                  passo: "1",
                  titulo: "Pesquise o histórico de preços",
                  descricao: "Use portais (ZAP, Imovelweb) para ver evolução do m² nos últimos 3-5 anos. Crescimento acima de 8% a.a. = bom sinal."
                },
                {
                  passo: "2",
                  titulo: "Mapeie infraestrutura num raio de 2km",
                  descricao: "Liste: metrô, shopping, parques, hospitais, escolas. Quanto mais, melhor. Use Google Maps."
                },
                {
                  passo: "3",
                  titulo: "Verifique obras públicas planejadas",
                  descricao: "Site da SPTrans e Metrô mostram expansões. Prefeitura tem plano diretor online. Procure por licitações."
                },
                {
                  passo: "4",
                  titulo: "Analise perfil dos moradores",
                  descricao: "Visite em diferentes horários. Comércio local indica renda (cafés gourmet = alta renda, boteco = média-baixa)."
                },
                {
                  passo: "5",
                  titulo: "Compare com bairros similares",
                  descricao: "Bairro parecido mas mais consolidado mostra o teto de preço. Ex: Vila Leopoldina vs Pinheiros."
                },
                {
                  passo: "6",
                  titulo: "Calcule distância de áreas nobres",
                  descricao: "Quanto mais próximo de Jardins/Itaim/Vila Nova, maior o potencial. Gentrificação 'vaza' de áreas ricas."
                },
                {
                  passo: "7",
                  titulo: "Avalie liquidez atual",
                  descricao: "Muitos imóveis à venda = baixa demanda. Poucos à venda = alta competição. Busque equilíbrio."
                },
                {
                  passo: "8",
                  titulo: "Projete cenário otimista e pessimista",
                  descricao: "Otimista: tudo sai como planejado (+15% a.a.). Pessimista: obras atrasam (+4% a.a.). Decida com base no pessimista."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B]/50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8B6F4B] to-[#6d5839] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.passo}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.titulo}</h3>
                    <p className="text-gray-700 text-sm">{item.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Conclusão
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Escolher um <strong>imóvel que valoriza</strong> não é questão de sorte, mas de <strong>análise criteriosa</strong> de fatores objetivos. Localização, infraestrutura e timing são os pilares da valorização imobiliária.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A chave está em <strong>antecipar tendências</strong>, não segui-las. Quando todo mundo está falando de um bairro, a valorização explosiva já passou. O melhor momento é quando apenas investidores atentos percebem os sinais.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Use o método apresentado para <strong>avaliar cada oportunidade</strong>. Seja conservador nas projeções, compre com margem de segurança e tenha paciência. Valorização real leva 5-10 anos, não 6 meses. Quem espera e escolhe bem, lucra consistentemente acima da inflação.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre Imóveis com Alto Potencial de Valorização</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore oportunidades em bairros emergentes de São Paulo
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
                href="/guia/investimento-imoveis-luxo"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <LineChart className="w-4 h-4" />
                  Valorização
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Investimento em Imóveis de Luxo
                </h4>
                <p className="text-sm text-gray-600">
                  Retorno, liquidez e estratégias para investidores
                </p>
              </Link>

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
            </div>
          </div>

        </article>

        <Footer />
      </main>
    </>
  );
}
