import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, Waves, Clock, MapPin, DollarSign, TrendingUp, Sun, Anchor, CheckCircle2, AlertTriangle, Home as HomeIcon } from "lucide-react";

export default function ImoveisLitoralPage() {
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
              <span className="text-[#8B6F4B] font-medium">Imóveis no Litoral</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <Waves className="w-4 h-4" />
              Tipos de Imóveis
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Imóveis de Luxo no Litoral de São Paulo: Guia Completo
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Melhores praias, faixas de preço e características dos imóveis premium no litoral paulista. Descubra Guarujá, Riviera, Ilhabela e os destinos mais exclusivos para investimento e lazer.
            </p>

            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                14 min de leitura
              </span>
            </div>
          </header>

          {/* Box de Resposta Direta */}
          <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center flex-shrink-0">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-[#8B6F4B]">Os 3 melhores destinos de luxo no litoral de SP são:</strong> (1) <strong>Guarujá - Praia da Enseada</strong> (apartamentos R$ 2-8M, condominios estruturados), (2) <strong>Riviera de São Lourenço</strong> (casas R$ 3-15M, infraestrutura completa) e (3) <strong>Ilhabela</strong> (casas R$ 4-20M+, exclusividade máxima). Preços variam de <strong>R$ 15.000/m²</strong> (Litoral Sul) a <strong>R$ 35.000/m²</strong> (Ilhabela frente mar). Valorização média: <strong>5-8% a.a.</strong> Custos de manutenção: R$ 2-6k/mês. Melhor momento de compra: <strong>março a junho</strong> (pós-verão, menos competição).
                </p>
                <div className="bg-white/80 rounded-lg p-4 border border-[#8B6F4B]/20">
                  <p className="text-sm text-gray-600 mb-2"><strong>Comparação rápida:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Guarujá:</strong> Melhor infraestrutura, apartamentos</li>
                    <li>• <strong>Riviera:</strong> Condomínio clube, casas e aptos</li>
                    <li>• <strong>Ilhabela:</strong> Exclusividade, casas premium</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Top 5 Destinos de Luxo no Litoral Paulista
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O litoral de São Paulo tem mais de 600km de praias, mas apenas <strong>alguns destinos concentram o mercado de luxo</strong>. Conheça os 5 principais:
            </p>

            <div className="space-y-6">
              {/* Guarujá */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Guarujá - Praia da Enseada</h3>
                    <p className="text-sm text-gray-600">Litoral Sul • 90km de SP • 1h20 de carro</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm">
                  A <strong>praia mais estruturada</strong> do litoral paulista. Apartamentos de alto padrão com vista para o mar, restaurantes, beach clubs e comércio completo.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Tipo predominante:</p>
                    <p className="text-sm text-gray-900">Apartamentos alto padrão</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Faixa de preço:</p>
                    <p className="text-sm text-[#8B6F4B] font-bold">R$ 2M - 8M</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Preço/m²:</p>
                    <p className="text-sm text-[#8B6F4B] font-bold">R$ 18.000 - 28.000</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-semibold text-green-900 mb-1">✅ Vantagens:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Melhor infraestrutura (restaurantes, mercados, hospitais)</li>
                    <li>• Acesso fácil via Rodovia Imigrantes</li>
                    <li>• Praia calma e extensa (5,6km)</li>
                    <li>• Alta liquidez (vende rápido)</li>
                  </ul>
                </div>
              </div>

              {/* Riviera */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Riviera de São Lourenço</h3>
                    <p className="text-sm text-gray-600">Litoral Norte • 140km de SP • 2h de carro</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm">
                  <strong>Condomínio-clube de 9km²</strong> com infraestrutura completa. 18 praias privativas, campo de golfe, shopping, escolas. O mais completo do Brasil.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Tipo predominante:</p>
                    <p className="text-sm text-gray-900">Casas e apartamentos</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Faixa de preço:</p>
                    <p className="text-sm text-[#8B6F4B] font-bold">R$ 3M - 15M</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Preço/m²:</p>
                    <p className="text-sm text-[#8B6F4B] font-bold">R$ 20.000 - 32.000</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-semibold text-green-900 mb-1">✅ Vantagens:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Infraestrutura completa (hospital, escolas, shopping)</li>
                    <li>• Segurança 24h controlada</li>
                    <li>• Campo de golfe 18 buracos</li>
                    <li>• 9 restaurantes, marina, beach club</li>
                  </ul>
                </div>
              </div>

              {/* Ilhabela */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Ilhabela</h3>
                    <p className="text-sm text-gray-600">Litoral Norte • 210km de SP • 3h de carro + balsa</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm">
                  <strong>Ilha exclusiva</strong> com casas de luxo frente ao mar. Paraíso preservado, mata atlântica, cachoeiras. O mais sofisticado destino de praia de SP.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Tipo predominante:</p>
                    <p className="text-sm text-gray-900">Casas premium</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Faixa de preço:</p>
                    <p className="text-sm text-[#8B6F4B] font-bold">R$ 4M - 20M+</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Preço/m²:</p>
                    <p className="text-sm text-[#8B6F4B] font-bold">R$ 25.000 - 40.000</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-semibold text-green-900 mb-1">✅ Vantagens:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Exclusividade máxima (ilha, balsa limita acesso)</li>
                    <li>• Natureza preservada (80% Mata Atlântica)</li>
                    <li>• Comunidade seleta e discreta</li>
                    <li>• Valorização premium (8-12% a.a.)</li>
                  </ul>
                </div>
              </div>

              {/* Maresias */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Maresias (São Sebastião)</h3>
                    <p className="text-sm text-gray-600">Litoral Norte • 170km de SP • 2h30 de carro</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm">
                  Praia <strong>jovem e agitada</strong>. Surf, beach clubs, vida noturna. Público 30-45 anos, alto poder aquisitivo.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Tipo predominante:</p>
                    <p className="text-sm text-gray-900">Casas e aptos médios</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Faixa de preço:</p>
                    <p className="text-sm text-[#8B6F4B] font-bold">R$ 2M - 8M</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Preço/m²:</p>
                    <p className="text-sm text-[#8B6F4B] font-bold">R$ 18.000 - 30.000</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs font-semibold text-blue-900 mb-1">ℹ️ Perfil:</p>
                  <p className="text-xs text-gray-700">Ideal para quem busca agito, surf e vida social ativa. Menos família, mais jovem.</p>
                </div>
              </div>

              {/* Juquehy */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Juquehy (São Sebastião)</h3>
                    <p className="text-sm text-gray-600">Litoral Norte • 175km de SP • 2h40 de carro</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 text-sm">
                  Praia <strong>tranquila e familiar</strong>. Casas espaçosas, condomínios fechados, menos movimento. Ideal para famílias com crianças.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Tipo predominante:</p>
                    <p className="text-sm text-gray-900">Casas em condomínios</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Faixa de preço:</p>
                    <p className="text-sm text-[#8B6F4B] font-bold">R$ 1,5M - 6M</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-600 mb-1">Preço/m²:</p>
                    <p className="text-sm text-[#8B6F4B] font-bold">R$ 15.000 - 25.000</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-xs font-semibold text-blue-900 mb-1">ℹ️ Perfil:</p>
                  <p className="text-xs text-gray-700">Melhor custo-benefício. Tranquilidade, natureza, menos agito que Maresias.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Casa vs Apartamento na Praia
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A escolha entre casa e apartamento no litoral tem implicações diferentes da capital. Veja o comparativo:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead className="bg-[#8B6F4B] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Critério</th>
                    <th className="px-6 py-3 text-left font-semibold">Casa na Praia</th>
                    <th className="px-6 py-3 text-left font-semibold">Apartamento na Praia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Preço/m²</td>
                    <td className="px-6 py-4 text-gray-700">R$ 15.000 - 28.000</td>
                    <td className="px-6 py-4 text-gray-700">R$ 18.000 - 35.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Manutenção</td>
                    <td className="px-6 py-4 text-red-600">R$ 3.000-6.000/mês</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">R$ 1.500-3.000/mês</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Segurança</td>
                    <td className="px-6 py-4 text-gray-700">Própria (custo extra)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Portaria 24h inclusa</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Vista mar</td>
                    <td className="px-6 py-4 text-gray-700">Depende localização</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Garantida (andares altos)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Área externa</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Quintal, piscina privativa</td>
                    <td className="px-6 py-4 text-gray-700">Sacada/terraço</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Liquidez</td>
                    <td className="px-6 py-4 text-red-600">Baixa (8-18 meses)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Alta (3-8 meses)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Valorização</td>
                    <td className="px-6 py-4 text-gray-700">5-7% a.a.</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">6-9% a.a.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Uso família</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Ideal (espaço, privacidade)</td>
                    <td className="px-6 py-4 text-gray-700">Bom (mas limitado)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
              <p className="text-sm text-blue-900 mb-2">
                <strong>Recomendação:</strong>
              </p>
              <p className="text-sm text-blue-800">
                <strong>Casa:</strong> Para uso frequente (todo fim de semana), famílias grandes, quem quer privacidade total. <strong>Apartamento:</strong> Para uso esporádico (férias), facilidade de manutenção, investimento com liquidez.
              </p>
            </div>
          </section>

          {/* Seção 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Custos Reais de Manutenção na Praia
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Imóveis de praia têm custos de manutenção <strong>30-50% maiores</strong> que na capital devido à maresia, umidade e necessidade de caseiro.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Casa */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#8B6F4B] mb-4">Casa 400m² (Juquehy)</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Condomínio fechado:</span>
                    <strong>R$ 800</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>IPTU:</span>
                    <strong>R$ 600</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Caseiro (fixo):</span>
                    <strong>R$ 2.000</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Energia:</span>
                    <strong>R$ 400</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Água:</span>
                    <strong>R$ 250</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Piscina:</span>
                    <strong>R$ 500</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Jardineiro:</span>
                    <strong>R$ 400</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Manutenções/reparos:</span>
                    <strong>R$ 800</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-[#8B6F4B]/10 rounded font-bold border-2 border-[#8B6F4B]">
                    <span>TOTAL:</span>
                    <strong className="text-[#8B6F4B] text-lg">R$ 5.750</strong>
                  </div>
                </div>
              </div>

              {/* Apartamento */}
              <div className="bg-white border-2 border-blue-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Apartamento 200m² (Guarujá)</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Condomínio:</span>
                    <strong>R$ 1.800</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>IPTU:</span>
                    <strong>R$ 400</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Energia:</span>
                    <strong>R$ 250</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Água (inclusa):</span>
                    <strong>R$ 0</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Faxina eventual:</span>
                    <strong>R$ 300</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span>Manutenções/reparos:</span>
                    <strong>R$ 250</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span className="text-gray-400">-</span>
                    <strong className="text-gray-400">-</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-gray-50 rounded">
                    <span className="text-gray-400">-</span>
                    <strong className="text-gray-400">-</strong>
                  </div>
                  <div className="flex justify-between p-3 bg-blue-50 rounded font-bold border-2 border-blue-500">
                    <span>TOTAL:</span>
                    <strong className="text-blue-900 text-lg">R$ 3.000</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-yellow-900 mb-2">Maresia e Umidade</p>
                  <p className="text-yellow-800 text-sm">
                    Imóveis de praia sofrem <strong>2-3x mais desgaste</strong> que na capital. Pintura dura 2-3 anos (vs 5-7 anos em SP). Móveis de madeira deterioram rápido. Caseiro é essencial para ventilação diária e manutenção preventiva.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Investimento vs Uso Próprio
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A decisão entre <strong>comprar para alugar</strong> ou <strong>uso próprio</strong> tem dinâmicas muito diferentes no litoral:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Investimento */}
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Para Investimento (Aluguel)
                </h3>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Rentabilidade anual:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Temporada alta:</strong> R$ 3-8k/dia (Dez-Fev)</li>
                    <li>• <strong>Feriados:</strong> R$ 2-5k/dia</li>
                    <li>• <strong>Baixa temporada:</strong> R$ 800-2k/dia</li>
                    <li>• <strong>Ocupação média:</strong> 40-60 dias/ano</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-green-300">
                  <p className="text-sm font-semibold mb-2">Exemplo Guarujá (apto R$ 3M):</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Receita anual: <strong>R$ 120-150k</strong></li>
                    <li>• Custos: <strong>R$ 50-60k</strong> (condomínio, IPTU, gestão)</li>
                    <li>• <strong>Lucro líquido: R$ 60-90k (2-3% a.a.)</strong></li>
                    <li>• + Valorização: 6-8% a.a.</li>
                    <li>• = <strong className="text-green-600">Retorno total: 8-11% a.a.</strong></li>
                  </ul>
                </div>
              </div>

              {/* Uso Próprio */}
              <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <HomeIcon className="w-5 h-5" />
                  Para Uso Próprio
                </h3>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Economia vs hospedagem:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Hotel 4★:</strong> R$ 1.200/diária (família)</li>
                    <li>• <strong>Casa alugada:</strong> R$ 3.000/diária</li>
                    <li>• <strong>30 dias/ano hotel:</strong> R$ 36k</li>
                    <li>• <strong>Custo próprio:</strong> R$ 5-8k/mês fixo</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-blue-300">
                  <p className="text-sm font-semibold mb-2">Análise casa R$ 3M:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>• Custos anuais: <strong>R$ 70k</strong></li>
                    <li>• Economia hotel: <strong>R$ 36k</strong></li>
                    <li>• <strong className="text-red-600">Custo líquido: R$ 34k/ano</strong></li>
                    <li>• Mas: conforto, privacidade, sempre disponível</li>
                    <li>• + Valorização patrimonial</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mt-6">
              <p className="text-sm text-amber-900 mb-2">
                <strong>Conclusão:</strong>
              </p>
              <p className="text-sm text-amber-800">
                <strong>Investimento puro</strong> rende 8-11% a.a. (abaixo de fundos imobiliários). <strong>Uso próprio</strong> faz sentido se você usa 20+ dias/ano e valoriza conforto/privacidade. A maioria compra por <strong>qualidade de vida</strong>, não rentabilidade.
              </p>
            </div>
          </section>

          {/* Seção 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Quando Comprar: Melhor Momento do Ano
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O mercado de praia tem <strong>sazonalidade forte</strong>. Timing correto pode economizar 10-20% do valor:
            </p>

            <div className="space-y-4">
              {[
                {
                  periodo: "Janeiro - Fevereiro",
                  status: "EVITAR",
                  cor: "red",
                  descricao: "Alta temporada. Preços inflacionados, poucos vendedores (estão usando), muitos compradores impulsivos. Pior momento para negociar."
                },
                {
                  periodo: "Março - Junho",
                  status: "MELHOR ÉPOCA",
                  cor: "green",
                  descricao: "Pós-verão. Proprietários realizam que não usaram tanto quanto pensavam. Mercado calmo, boa oferta, vendedores motivados. Descontos de 10-15%."
                },
                {
                  periodo: "Julho",
                  status: "NEUTRO",
                  cor: "yellow",
                  descricao: "Férias escolares. Pequeno aumento de demanda mas menos que verão. Preços normalizados."
                },
                {
                  periodo: "Agosto - Outubro",
                  status: "BOM",
                  cor: "blue",
                  descricao: "Baixa temporada total. Vendedores com imóvel parado 6+ meses ficam flexíveis. Negociação favorável ao comprador."
                },
                {
                  periodo: "Novembro - Dezembro",
                  status: "EVITAR",
                  cor: "amber",
                  descricao: "Pré-verão. Proprietários otimistas sobre aluguel de férias. Seguram preço esperando temporada. Pouca disposição para negociar."
                }
              ].map((item, index) => (
                <div key={index} className={`bg-white border-2 border-${item.cor}-500 rounded-lg p-6`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{item.periodo}</h3>
                    <span className={`px-4 py-1 bg-${item.cor}-100 text-${item.cor}-900 rounded-full text-sm font-bold`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{item.descricao}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
              <p className="text-sm text-green-900">
                <strong>Dica de ouro:</strong> Procure em <strong>Março-Abril</strong>. Donos percebem que mantêm casa custando R$ 5k/mês e usaram só 2 semanas em Fev. Momento de maior flexibilidade. Oportunidade de negociar 10-20% abaixo da tabela.
              </p>
            </div>
          </section>

          {/* Seção 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Checklist: Antes de Comprar na Praia
            </h2>
            
            <div className="bg-[#8B6F4B]/5 rounded-lg p-6 border-2 border-[#8B6F4B]/30">
              <p className="text-gray-700 mb-4">
                Use este checklist para avaliar qualquer imóvel de praia:
              </p>

              <div className="space-y-3">
                {[
                  "Distância real de São Paulo (testar em feriado e dia útil)",
                  "Qualidade da praia (águas calmas para crianças? ondas para surf?)",
                  "Infraestrutura local (mercado, farmácia, hospital em 10km)",
                  "Segurança do condomínio/região (portaria 24h, câmeras)",
                  "Distância da praia (máximo 500m para valorizar)",
                  "Vista mar ou mata? (mar vale 30-50% mais)",
                  "Condição estrutural (maresia causa danos, verificar pintura, janelas)",
                  "Possibilidade de caseiro (essencial para casa)",
                  "Documentação ok (matrícula, IPTU quitado, débitos condomínio)",
                  "Custo mensal total realista (somar tudo + imprevistos)",
                  "Ocupação de vizinhos (imóvel vazio = insegurança)",
                  "Acesso à internet (fibra ótica para home office?)",
                  "Restrições ambientais (área de preservação limita reformas)",
                  "Histórico de enchentes/ressacas (perguntar moradores antigos)",
                  "Planos de infraestrutura (novas rodovias valorizam)"
                ].map((item, index) => (
                  <label key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                    <input type="checkbox" className="mt-1 w-5 h-5 text-[#8B6F4B] rounded focus:ring-[#8B6F4B]" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </label>
                ))}
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-[#8B6F4B]/20">
                <p className="text-sm text-gray-700">
                  <strong className="text-[#8B6F4B]">Score ideal:</strong> 12+ itens marcados = excelente negócio. 8-11 itens = bom, mas avaliar pontos negativos. Menos de 8 = repensar compra.
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
              Investir em <strong>imóvel de praia</strong> no litoral paulista é mais uma decisão de <strong>estilo de vida</strong> que puramente financeira. Rentabilidade de aluguel é modesta (2-3% a.a.), mas valorização (6-9% a.a.) e uso próprio compensam.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Os <strong>3 melhores destinos</strong> são Guarujá (infraestrutura + liquidez), Riviera (completo como resort) e Ilhabela (exclusividade máxima). Cada um atende perfis diferentes: família grande, praticidade ou status.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Compre se você usa <strong>20+ dias/ano</strong> e tem orçamento para custos mensais de R$ 3-6k. O melhor momento é <strong>março a junho</strong> (pós-verão, vendedores flexíveis). Negocie 10-15% de desconto e você terá um refúgio familiar para décadas.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre Seu Imóvel de Praia Ideal</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore casas e apartamentos de luxo no litoral paulista
            </p>
            <Link
              href="/busca?cidade=Bertioga"
              className="inline-block bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Ver Imóveis de Praia
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
                  <HomeIcon className="w-4 h-4" />
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
                  <Sun className="w-4 h-4" />
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
