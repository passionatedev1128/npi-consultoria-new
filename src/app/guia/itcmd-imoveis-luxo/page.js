import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, Users, Clock, DollarSign, AlertTriangle, CheckCircle2, Calculator, FileText, Shield, TrendingDown } from "lucide-react";

export default function ITCMDHerancasDoacoesPage() {
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
              <span className="text-[#8B6F4B] font-medium">ITCMD</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <Users className="w-4 h-4" />
              Tributação e Impostos
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ITCMD em Heranças e Doações de Imóveis de Luxo
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Planejamento sucessório e tributação em imóveis de alto valor. Entenda como funciona o ITCMD, alíquotas, prazos e estratégias legais para otimizar a transmissão patrimonial.
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
                  <strong className="text-[#8B6F4B]">O ITCMD (Imposto sobre Transmissão Causa Mortis e Doação) é um tributo estadual</strong> cobrado em heranças e doações de bens. Em São Paulo, a alíquota é de <strong>4% sobre o valor venal</strong> do imóvel. Em uma herança de R$ 5 milhões, o ITCMD será de <strong>R$ 200.000</strong>. O planejamento sucessório adequado pode reduzir significativamente este custo através de estratégias legais como holdings familiares e doações fracionadas.
                </p>
                <div className="bg-white/80 rounded-lg p-4 border border-[#8B6F4B]/20">
                  <p className="text-sm text-gray-600 mb-2"><strong>Exemplo prático:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Imóvel herdado: R$ 5.000.000</li>
                    <li>• Alíquota ITCMD (SP): 4%</li>
                    <li>• <strong className="text-[#8B6F4B]">ITCMD devido: R$ 200.000</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              O que é ITCMD e Quando Incide
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O <strong>ITCMD (Imposto sobre Transmissão Causa Mortis e Doação)</strong> é um imposto estadual que incide em duas situações principais: quando há transmissão de bens por falecimento (herança) ou por doação em vida.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#8B6F4B]/5 border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#8B6F4B] mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Causa Mortis (Herança)
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Transmissão de bens em razão do falecimento do proprietário para seus herdeiros ou legatários.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-2">•</span>
                    <span>Herança legítima (filhos, cônjuge, pais)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-2">•</span>
                    <span>Legados (bens específicos no testamento)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-2">•</span>
                    <span>Sucessão testamentária</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Doação (Inter Vivos)
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Transferência gratuita de bens entre pessoas vivas, com intenção de liberalidade.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Doação pura e simples</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Doação com reserva de usufruto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Adiantamento de herança</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-yellow-900 mb-2">Diferença Fundamental</p>
                  <p className="text-yellow-800 text-sm">
                    <strong>ITCMD é estadual, ITBI é municipal.</strong> Em herança, paga-se apenas ITCMD (sem ITBI). Em doação, pode haver incidência de ambos dependendo da estrutura jurídica utilizada.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Alíquotas do ITCMD por Estado
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O ITCMD é um imposto estadual, portanto cada estado define sua própria alíquota (limitada a 8% pela Constituição Federal). Veja as alíquotas dos principais estados:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead className="bg-[#8B6F4B] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Estado</th>
                    <th className="px-6 py-3 text-left font-semibold">Alíquota</th>
                    <th className="px-6 py-3 text-left font-semibold">ITCMD em R$ 5 milhões</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700 font-semibold">São Paulo</td>
                    <td className="px-6 py-4 text-gray-700">4%</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 200.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Rio de Janeiro</td>
                    <td className="px-6 py-4 text-gray-700">4% a 8% (progressiva)</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 200k a 400k</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Minas Gerais</td>
                    <td className="px-6 py-4 text-gray-700">5%</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 250.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Paraná</td>
                    <td className="px-6 py-4 text-gray-700">4%</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 200.000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Santa Catarina</td>
                    <td className="px-6 py-4 text-gray-700">1% a 8% (progressiva)</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 50k a 400k</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <div className="flex items-start gap-3">
                <Calculator className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Alíquota em São Paulo</p>
                  <p className="text-blue-800 text-sm">
                    São Paulo adota alíquota <strong>única de 4%</strong> tanto para heranças quanto doações. Não há progressividade: um imóvel de R$ 1 milhão e outro de R$ 10 milhões pagam a mesma alíquota proporcional.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Como Calcular o ITCMD em Heranças
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O cálculo do ITCMD em heranças é feito sobre o <strong>valor venal</strong> dos bens transmitidos. O processo segue etapas específicas no inventário:
            </p>

            <div className="bg-[#8B6F4B]/5 rounded-lg p-6 my-8 border border-[#8B6F4B]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fórmula de Cálculo</h3>
              <div className="bg-white rounded-lg p-6 font-mono text-center text-lg border-2 border-[#8B6F4B]/30">
                <p className="text-gray-700 mb-2">ITCMD = Valor Venal do Imóvel × Alíquota (4%)</p>
                <p className="text-sm text-gray-600 mt-3">Base de cálculo = Valor declarado no inventário</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Exemplo Prático Completo</h3>

            <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-4">Cenário: Herança de Imóvel de Alto Padrão</h4>
              
              <div className="space-y-3 text-sm text-gray-700 mb-6">
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Apartamento em Moema:</span>
                  <strong>R$ 5.000.000</strong>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Cobertura em Pinheiros:</span>
                  <strong>R$ 8.000.000</strong>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Casa no Jardim Europa:</span>
                  <strong>R$ 12.000.000</strong>
                </div>
                <div className="flex justify-between p-3 bg-[#8B6F4B]/10 rounded font-bold border-2 border-[#8B6F4B]">
                  <span>= Total do espólio:</span>
                  <strong className="text-[#8B6F4B]">R$ 25.000.000</strong>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold mb-3">Distribuição entre 3 herdeiros (viúva + 2 filhos):</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Cada herdeiro recebe: R$ 8.333.333</li>
                  <li>• ITCMD total (4%): <strong className="text-[#8B6F4B]">R$ 1.000.000</strong></li>
                  <li>• ITCMD por herdeiro: <strong className="text-[#8B6F4B]">R$ 333.333</strong></li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-red-900 mb-2">Atenção ao Prazo</p>
                  <p className="text-red-800 text-sm">
                    O ITCMD deve ser pago <strong>antes da homologação do inventário</strong>. Sem a quitação, o inventário não pode ser finalizado e os herdeiros não recebem os bens. O prazo é de até 180 dias após o óbito (prorrogáveis).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              ITCMD em Doações de Imóveis
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Na doação em vida, o <strong>doador paga o ITCMD</strong> antes de lavrar a escritura pública. O cálculo segue a mesma lógica da herança, mas com possibilidades de planejamento:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Tipos de Doação</h3>

            <div className="space-y-6">
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <span className="text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Doação Simples (Nua Propriedade)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Transfere a <strong>propriedade do imóvel</strong> para o donatário, mas o doador mantém o direito de morar ou alugar (usufruto). Estratégia comum em planejamento sucessório.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2"><strong>Exemplo:</strong></p>
                  <p className="text-sm text-gray-700">
                    Pai doa imóvel de R$ 5 milhões para filho mantendo usufruto vitalício. ITCMD incide sobre o valor da nua propriedade (cerca de 60-70% = R$ 3,5 milhões). <strong className="text-[#8B6F4B]">ITCMD: R$ 140.000</strong>
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <span className="text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Doação com Reserva de Usufruto</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Similar à anterior, mas <strong>formalizada expressamente</strong> na escritura. Usufruto extingue-se com o falecimento do doador, sem novo ITCMD.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Vantagem:</strong> Evita novo ITCMD quando o doador falecer, pois o imóvel já pertence ao donatário. Economia pode chegar a <strong className="text-green-600">50% do imposto total</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <span className="text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Doação Fracionada (Múltiplas Doações)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Doar <strong>frações do imóvel</strong> ao longo dos anos. Em estados com alíquota progressiva, pode reduzir a carga tributária total.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Atenção:</strong> Em SP a alíquota é única (4%), então fracionamento não reduz imposto. Mas pode ajudar no <strong>fluxo de caixa</strong>, distribuindo pagamento ao longo do tempo.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Herança vs Doação: O que é Melhor?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A escolha entre deixar como herança ou doar em vida depende de múltiplos fatores. Veja a comparação:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead className="bg-[#8B6F4B] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Critério</th>
                    <th className="px-6 py-3 text-left font-semibold">Herança</th>
                    <th className="px-6 py-3 text-left font-semibold">Doação em Vida</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Momento do ITCMD</td>
                    <td className="px-6 py-4 text-gray-700">Após falecimento (inventário)</td>
                    <td className="px-6 py-4 text-gray-700">No ato da doação</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Quem paga</td>
                    <td className="px-6 py-4 text-gray-700">Herdeiros</td>
                    <td className="px-6 py-4 text-gray-700">Doador</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Controle do doador</td>
                    <td className="px-6 py-4 text-gray-700">Mantém até falecer</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Pode reservar usufruto</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Custos adicionais</td>
                    <td className="px-6 py-4 text-red-600">Inventário (5-10% do espólio)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Apenas escritura</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Tempo</td>
                    <td className="px-6 py-4 text-red-600">12-36 meses (inventário)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Imediato</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Flexibilidade</td>
                    <td className="px-6 py-4 text-gray-700">Baixa (regras sucessórias)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Alta (livre escolha)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Economia tributária</td>
                    <td className="px-6 py-4 text-gray-700">Padrão (4%)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Possível com usufruto</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <div className="flex items-start gap-3">
                <TrendingDown className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-green-900 mb-2">Economia Potencial com Doação</p>
                  <p className="text-green-800 text-sm">
                    Doar com reserva de usufruto <strong>economiza os custos de inventário</strong> (5-10% do valor) e acelera a transmissão. Em um patrimônio de R$ 10 milhões, a economia pode chegar a <strong>R$ 1 milhão</strong> em custos processuais.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Estratégias de Planejamento Sucessório
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O planejamento sucessório visa <strong>reduzir custos tributários</strong> e agilizar a transmissão patrimonial. Conheça as principais estratégias:
            </p>

            <div className="space-y-6">
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Holding Familiar</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Criação de empresa (geralmente LTDA) para concentrar patrimônio imobiliário da família. <strong>Principal vantagem do planejamento sucessório.</strong>
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-2">Benefícios:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>Sucessão por quotas:</strong> Transmite-se participação societária (mais rápido)</li>
                    <li>• <strong>Evita inventário:</strong> Sucessão regida por contrato social</li>
                    <li>• <strong>Proteção patrimonial:</strong> Blindagem contra credores pessoais</li>
                    <li>• <strong>Planejamento tributário:</strong> Possibilidade de pagamento parcelado</li>
                  </ul>
                  <p className="text-xs text-amber-600 mt-3">
                    <strong>Economia potencial:</strong> 30-50% do custo total de inventário
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Doações Graduais com Usufruto</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Doar imóveis aos poucos, mantendo usufruto vitalício. Estratégia ideal para quem quer <strong>manter controle</strong> enquanto otimiza sucessão.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-2">Como funciona:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Doa a propriedade mas mantém direito de usar e receber aluguéis</li>
                    <li>• ITCMD calculado apenas sobre valor da nua propriedade (60-70%)</li>
                    <li>• Com falecimento, não há novo ITCMD (usufruto extinto)</li>
                    <li>• Economia de até <strong className="text-green-600">30-40% no ITCMD total</strong></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Testamento Bem Estruturado</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Testamento permite definir destinação de até 50% do patrimônio (parte disponível), além de nomear administrador.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-2">Vantagens:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Acelera inventário (partilha definida)</li>
                    <li>• Evita conflitos entre herdeiros</li>
                    <li>• Possibilidade de legados específicos</li>
                    <li>• Nomeia testamenteiro de confiança</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Previdência Privada (VGBL)</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  VGBL não entra no inventário e <strong>não paga ITCMD</strong>. Estratégia complementar para proteção patrimonial.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    Ideal para líquido de caixa. Os beneficiários recebem diretamente sem inventário, tributos ou possibilidade de penhora. Limite prático de cerca de R$ 10 milhões por instituição.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 7 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Prazos e Como Pagar o ITCMD
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Prazo em Heranças</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span><strong>Abertura do inventário:</strong> até 60 dias após falecimento</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span><strong>Pagamento ITCMD:</strong> até 180 dias (prorrogáveis)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2 font-bold">•</span>
                    <span><strong>Multa por atraso:</strong> 0,33% ao dia (até 20%) + juros Selic</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4">Prazo em Doações</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span><strong>Pagamento:</strong> antes da escritura pública</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span><strong>Guia DARE-SP:</strong> emitida online no site da Sefaz</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">•</span>
                    <span><strong>Validade:</strong> guia válida por 30 dias</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Passo a Passo do Pagamento</h3>

            <div className="space-y-4">
              {[
                {
                  numero: "1",
                  titulo: "Avaliação dos Bens",
                  descricao: "Laudo de avaliação do imóvel por empresa credenciada ou valor venal da prefeitura"
                },
                {
                  numero: "2",
                  titulo: "Cálculo do ITCMD",
                  descricao: "Aplicar alíquota de 4% sobre o valor avaliado do imóvel"
                },
                {
                  numero: "3",
                  titulo: "Emissão da Guia DARE",
                  descricao: "Acessar site da Secretaria da Fazenda e emitir guia de recolhimento"
                },
                {
                  numero: "4",
                  titulo: "Pagamento",
                  descricao: "Pagar em banco autorizado ou via internet banking"
                },
                {
                  numero: "5",
                  titulo: "Certidão Negativa",
                  descricao: "Após pagamento, solicitar certidão de quitação do ITCMD"
                },
                {
                  numero: "6",
                  titulo: "Registro/Homologação",
                  descricao: "Apresentar certidão no cartório (doação) ou no inventário (herança)"
                }
              ].map((passo, index) => (
                <div key={index} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B]/50 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8B6F4B] to-[#6d5839] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {passo.numero}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{passo.titulo}</h3>
                    <p className="text-gray-700 text-sm">{passo.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seção 8 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Perguntas Frequentes sobre ITCMD
            </h2>

            <div className="space-y-4">
              {[
                {
                  pergunta: "Posso parcelar o ITCMD?",
                  resposta: "Em São Paulo, é possível parcelar em até 12 vezes com juros de 1% ao mês. O parcelamento deve ser solicitado na própria guia de recolhimento. Valor mínimo da parcela: R$ 100."
                },
                {
                  pergunta: "E se não tiver dinheiro para pagar o ITCMD?",
                  resposta: "Opções: (1) Parcelamento em até 12x, (2) Venda antecipada de um dos bens do espólio para pagar o imposto, (3) Empréstimo com garantia do imóvel herdado, ou (4) Dação em pagamento (entregar bem para quitar imposto - raro)."
                },
                {
                  pergunta: "ITCMD é dedutível do Imposto de Renda?",
                  resposta: "Não é dedutível diretamente. Porém, compõe o custo de aquisição do imóvel para futuro cálculo de ganho de capital. Guarde todos os comprovantes de pagamento do ITCMD."
                },
                {
                  pergunta: "Cônjuge paga ITCMD em regime de comunhão?",
                  resposta: "Depende do regime. Em comunhão universal, não há ITCMD (meação, não herança). Em separação total, há incidência total. Em comunhão parcial, incide sobre bens particulares do falecido."
                },
                {
                  pergunta: "Holding familiar evita ITCMD?",
                  resposta: "Não evita, mas otimiza. O ITCMD incide na transferência de quotas, mas o processo é mais rápido e barato que inventário. Além disso, permite parcelamento e planejamento tributário mais eficiente."
                }
              ].map((faq, index) => (
                <details key={index} className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#8B6F4B]/50 transition-colors">
                  <summary className="cursor-pointer p-6 font-semibold text-gray-900 flex items-center justify-between">
                    <span>{faq.pergunta}</span>
                    <ChevronRight className="w-5 h-5 text-[#8B6F4B] group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 border-t border-gray-100 pt-4 text-sm">
                    {faq.resposta}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Conclusão
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O <strong>ITCMD em imóveis de luxo</strong> representa um custo significativo na transmissão patrimonial. Em heranças acima de R$ 10 milhões, o imposto pode facilmente ultrapassar R$ 400 mil, sem contar os custos de inventário.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              O <strong>planejamento sucessório adequado</strong> não elimina o ITCMD, mas pode reduzir substancialmente os custos totais através de estratégias como holdings familiares, doações com reserva de usufruto e estruturação societária.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Para patrimônios de alto valor, o investimento em <strong>assessoria especializada</strong> (advogados tributaristas e planejadores patrimoniais) sempre se paga pela economia fiscal e tranquilidade jurídica. Quanto antes iniciar o planejamento, maiores as possibilidades de otimização.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre Imóveis de Alto Padrão em São Paulo</h3>
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
                href="/guia/itbi-imoveis-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <FileText className="w-4 h-4" />
                  Tributação
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  ITBI em Imóveis de Alto Padrão
                </h4>
                <p className="text-sm text-gray-600">
                  Como funciona, alíquotas e estratégias para economizar no imposto de transmissão
                </p>
              </Link>

              <Link
                href="/guia/imposto-renda-compra-venda-imovel"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <DollarSign className="w-4 h-4" />
                  Tributação
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Imposto de Renda na Compra e Venda
                </h4>
                <p className="text-sm text-gray-600">
                  Como declarar imóveis no IR e calcular ganho de capital corretamente
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
