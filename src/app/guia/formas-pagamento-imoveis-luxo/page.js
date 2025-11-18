import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, CreditCard, CheckCircle2, AlertTriangle, DollarSign, TrendingUp, RefreshCw, Calendar, Wallet, Landmark, Building2, BadgePercent, AlertCircle, ArrowRightLeft, Calculator } from "lucide-react";

export default function FormasPagamentoImoveisLuxoPage() {
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
              <span className="text-[#8B6F4B] font-medium">Formas de Pagamento</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              <CreditCard className="w-4 h-4" />
              Financiamento e Pagamento
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Formas de Pagamento em Imóveis de Luxo: Guia Completo
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              À vista, parcelado direto com a construtora, financiamento bancário ou permuta: conheça todas as modalidades de pagamento para imóveis de alto padrão e escolha a melhor estratégia para seu investimento.
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
                  As principais formas de pagamento para imóveis de luxo são: <strong>(1) À vista</strong> (descontos de 10-30%), <strong>(2) Parcelado direto</strong> com construtora (durante obra, sem juros ou com juros baixos), <strong>(3) Financiamento bancário</strong> (SFH até R$ 1,5M ou SFI acima disso), <strong>(4) Permuta</strong> (troca de imóvel usado + diferença), <strong>(5) Híbrido</strong> (combinação de entrada + parcelamento + financiamento).
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              A escolha da <strong>forma de pagamento</strong> é uma das decisões mais importantes na compra de um imóvel de alto padrão. Cada modalidade tem vantagens específicas e impacta diretamente no valor final, nas condições de negociação e na sua estratégia financeira.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Em imóveis acima de <strong>R$ 1 milhão</strong>, a flexibilidade nas formas de pagamento é maior, permitindo estruturações personalizadas que podem resultar em economias significativas ou melhor aproveitamento do capital.
            </p>
          </section>

          {/* Forma 1: À Vista */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              1. Pagamento À Vista
            </h2>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Como Funciona</h3>
              <p className="text-gray-700 text-sm mb-4">
                Pagamento integral do imóvel em uma única transação, geralmente no ato da escritura ou através de conta caução (garantia até entrega das chaves).
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Vantagens
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Descontos de 8% a 25%</strong> no valor total</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Sem juros</strong> de financiamento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Processo mais rápido</strong> e menos burocrático</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span><strong>Maior poder de negociação</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Imóvel quitado imediatamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Economia total de 30-50% no longo prazo</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Desvantagens
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Imobiliza grande volume de capital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Perde oportunidade de alavancar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Reduz liquidez para outros investimentos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 mt-1">✗</span>
                      <span>Pode não ser vantajoso se tem bons investimentos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                💡 <strong>Ideal para:</strong> Quem tem capital disponível, busca economia máxima e não quer se comprometer com parcelas mensais.
              </p>
            </div>
          </section>

          {/* Forma 2: Parcelado Direto */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              2. Parcelado Direto com a Construtora
            </h2>

            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Como Funciona</h3>
              <p className="text-gray-700 text-sm mb-4">
                Pagamento em parcelas mensais diretamente à construtora/incorporadora durante a obra, sem intermediação bancária. Comum em <strong>imóveis na planta</strong>.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Estrutura Típica de Pagamento:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Sinal:</strong> 10-30% na assinatura do contrato</li>
                    <li>• <strong>Parcelas mensais:</strong> Durante a obra (24-48 meses), corrigidas por índice (INCC, IGPM)</li>
                    <li>• <strong>Chaves:</strong> 30-40% na entrega ou financiamento bancário</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Vantagens
                    </h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>✓ Entrada menor que à vista</li>
                      <li>✓ Sem juros ou juros baixos (0-6% ao ano)</li>
                      <li>✓ Parcelas durante obra geralmente menores</li>
                      <li>✓ Aproveita valorização durante construção</li>
                      <li>✓ Não compromete score de crédito</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Desvantagens
                    </h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>✗ Correção monetária nas parcelas</li>
                      <li>✗ Saldo elevado nas chaves (30-40%)</li>
                      <li>✗ Risco de atraso na obra</li>
                      <li>✗ Dependência financeira da construtora</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                💡 <strong>Ideal para:</strong> Quem compra na planta, tem fluxo de caixa constante e quer diluir o pagamento durante a obra.
              </p>
            </div>
          </section>

          {/* Forma 3: Financiamento Bancário */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Landmark className="w-6 h-6 text-purple-600" />
              </div>
              3. Financiamento Bancário (SFH ou SFI)
            </h2>

            <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Como Funciona</h3>
              <p className="text-gray-700 text-sm mb-4">
                Banco paga à vista para o vendedor/construtora, e você quita o valor com o banco em parcelas mensais ao longo de até 35 anos.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Condições Típicas:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Entrada:</strong> 20-50% do valor</li>
                    <li>• <strong>Financiamento:</strong> 50-80% do valor de avaliação</li>
                    <li>• <strong>Taxa de juros:</strong> 8-14% ao ano + TR/IPCA</li>
                    <li>• <strong>Prazo:</strong> Até 35 anos</li>
                    <li>• <strong>Renda mínima:</strong> 3-5x o valor da parcela</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Vantagens
                    </h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>✓ Preserva liquidez e capital</li>
                      <li>✓ Parcelas mensais previsíveis</li>
                      <li>✓ Dedução de juros no IR</li>
                      <li>✓ Alavancagem financeira</li>
                      <li>✓ Prazos longos (até 35 anos)</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Desvantagens
                    </h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>✗ Juros elevam custo total em 50-100%</li>
                      <li>✗ Exige entrada de 20-50%</li>
                      <li>✗ Análise de crédito rigorosa</li>
                      <li>✗ Custos de seguros e taxas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                💡 <strong>Ideal para:</strong> Quem não tem capital total disponível, quer preservar liquidez ou tem investimentos com rentabilidade superior aos juros do financiamento.
              </p>
            </div>
          </section>

          {/* Forma 4: Permuta */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <ArrowRightLeft className="w-6 h-6 text-amber-600" />
              </div>
              4. Permuta (Troca de Imóvel)
            </h2>

            <div className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Como Funciona</h3>
              <p className="text-gray-700 text-sm mb-4">
                Troca do seu imóvel atual por um imóvel de maior valor, pagando apenas a diferença. Comum em <strong>negociações com construtoras</strong>.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Exemplo Prático:</h4>
                  <div className="text-gray-700 text-sm space-y-2">
                    <p>• Imóvel novo: R$ 2.000.000</p>
                    <p>• Seu imóvel usado: R$ 1.200.000 (avaliação)</p>
                    <p>• <strong>Diferença a pagar: R$ 800.000</strong></p>
                    <p className="text-xs text-gray-600 mt-2">* Diferença pode ser paga à vista, parcelada ou financiada</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Vantagens
                    </h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>✓ Não precisa vender antes de comprar</li>
                      <li>✓ Reduz valor da entrada necessária</li>
                      <li>✓ Evita custos de venda do imóvel antigo</li>
                      <li>✓ Processo simultâneo e mais rápido</li>
                      <li>✓ Economia com ITBI em alguns casos</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Desvantagens
                    </h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>✗ Avaliação do seu imóvel pode ser baixa</li>
                      <li>✗ Menos poder de negociação</li>
                      <li>✗ Nem todas construtoras aceitam</li>
                      <li>✗ Processo mais complexo juridicamente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                💡 <strong>Ideal para:</strong> Quem tem imóvel quitado, quer fazer upgrade sem mobilizar capital e busca praticidade na transição.
              </p>
            </div>
          </section>

          {/* Forma 5: Híbrido */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              5. Pagamento Híbrido (Combinado)
            </h2>

            <div className="border-l-4 border-[#8B6F4B] bg-[#8B6F4B]/5 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Como Funciona</h3>
              <p className="text-gray-700 text-sm mb-4">
                Combinação de diferentes modalidades de pagamento para otimizar condições. <strong>Mais comum em imóveis de alto padrão.</strong>
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">Exemplos de Estruturas Híbridas:</h4>
                  
                  <div className="space-y-4">
                    <div className="border-l-2 border-[#8B6F4B] pl-4">
                      <h5 className="font-bold text-sm text-gray-900 mb-1">Opção 1: Entrada + Parcelado + Financiamento</h5>
                      <p className="text-gray-700 text-xs">
                        • 20% de entrada à vista<br/>
                        • 30% parcelado durante a obra (sem juros)<br/>
                        • 50% financiamento bancário nas chaves
                      </p>
                    </div>

                    <div className="border-l-2 border-[#8B6F4B] pl-4">
                      <h5 className="font-bold text-sm text-gray-900 mb-1">Opção 2: Permuta + Financiamento</h5>
                      <p className="text-gray-700 text-xs">
                        • Imóvel antigo como parte do pagamento<br/>
                        • Diferença financiada pelo banco
                      </p>
                    </div>

                    <div className="border-l-2 border-[#8B6F4B] pl-4">
                      <h5 className="font-bold text-sm text-gray-900 mb-1">Opção 3: Recursos Próprios + Home Equity</h5>
                      <p className="text-gray-700 text-xs">
                        • 50% com recursos próprios<br/>
                        • 50% com crédito garantido por outro imóvel
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2">Vantagens</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>✓ Máxima flexibilidade financeira</li>
                    <li>✓ Otimização de custos com juros</li>
                    <li>✓ Melhor aproveitamento de capital</li>
                    <li>✓ Personalização conforme perfil</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#8B6F4B]/5 border border-[#8B6F4B]/20 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                💡 <strong>Ideal para:</strong> Investidores experientes que querem maximizar retorno sobre capital e têm múltiplas fontes de recursos.
              </p>
            </div>
          </section>

          {/* Tabela Comparativa */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comparativo: Qual a Melhor Forma de Pagamento?</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left font-bold">Modalidade</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Desconto</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Entrada</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Custo Total</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Melhor Para</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3"><strong>À Vista</strong></td>
                    <td className="border border-gray-300 p-3 text-green-600">10-30%</td>
                    <td className="border border-gray-300 p-3">100%</td>
                    <td className="border border-gray-300 p-3 text-green-600">Menor</td>
                    <td className="border border-gray-300 p-3 text-xs">Quem tem capital disponível</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3"><strong>Parcelado</strong></td>
                    <td className="border border-gray-300 p-3 text-yellow-600">0-10%</td>
                    <td className="border border-gray-300 p-3">20-30%</td>
                    <td className="border border-gray-300 p-3 text-yellow-600">Médio</td>
                    <td className="border border-gray-300 p-3 text-xs">Compra na planta</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3"><strong>Financiamento</strong></td>
                    <td className="border border-gray-300 p-3 text-gray-600">0%</td>
                    <td className="border border-gray-300 p-3">20-50%</td>
                    <td className="border border-gray-300 p-3 text-red-600">Maior</td>
                    <td className="border border-gray-300 p-3 text-xs">Preservar liquidez</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3"><strong>Permuta</strong></td>
                    <td className="border border-gray-300 p-3 text-gray-600">0-5%</td>
                    <td className="border border-gray-300 p-3">Variável</td>
                    <td className="border border-gray-300 p-3 text-yellow-600">Médio</td>
                    <td className="border border-gray-300 p-3 text-xs">Quem tem imóvel quitado</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3"><strong>Híbrido</strong></td>
                    <td className="border border-gray-300 p-3 text-yellow-600">5-15%</td>
                    <td className="border border-gray-300 p-3">Flexível</td>
                    <td className="border border-gray-300 p-3 text-yellow-600">Otimizado</td>
                    <td className="border border-gray-300 p-3 text-xs">Investidores sofisticados</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Dicas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dicas para Escolher a Melhor Forma de Pagamento</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  1. Calcule o Custo Total
                </h4>
                <p className="text-gray-700 text-sm">
                  Compare o valor total pago em cada modalidade, incluindo juros, correções e descontos. O que parece barato mensalmente pode custar muito mais no total.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  2. Considere o Custo de Oportunidade
                </h4>
                <p className="text-gray-700 text-sm">
                  Se seus investimentos rendem mais que os juros do financiamento, pode valer mais a pena financiar e manter o dinheiro investido.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-purple-600" />
                  3. Avalie Sua Capacidade de Pagamento
                </h4>
                <p className="text-gray-700 text-sm">
                  A parcela mensal não deve comprometer mais de 30% da sua renda. Mantenha reserva de emergência equivalente a 6-12 meses de parcelas.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <BadgePercent className="w-5 h-5 text-amber-600" />
                  4. Negocie Sempre
                </h4>
                <p className="text-gray-700 text-sm">
                  Em imóveis de alto padrão, tudo é negociável: desconto à vista, prazo de parcelamento, taxa de juros, forma de correção. Peça pelo menos 3 simulações diferentes.
                </p>
              </div>
            </div>
          </section>

          {/* Alerta */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">⚠️ Atenção aos Custos Ocultos</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• <strong>ITBI:</strong> 2-3% do valor do imóvel (pago pelo comprador)</li>
                  <li>• <strong>Registro:</strong> R$ 2.000 a R$ 10.000 dependendo do valor</li>
                  <li>• <strong>Cartório:</strong> Custos de escritura e documentação</li>
                  <li>• <strong>Seguro obrigatório:</strong> Em financiamentos</li>
                  <li>• <strong>Avaliação bancária:</strong> R$ 1.500 a R$ 3.000</li>
                  <li>• <strong>Corretagem:</strong> Geralmente paga pelo vendedor, mas negocie</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não existe uma <strong>forma de pagamento ideal universal</strong>. A melhor escolha depende do seu perfil financeiro, objetivos, situação do imóvel (na planta ou pronto) e condições de mercado.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Em geral, <strong>pagamento à vista</strong> oferece maior economia total, enquanto <strong>financiamento</strong> preserva liquidez. Para imóveis na planta, <strong>parcelamento direto</strong> pode ser uma ótima opção intermediária.
            </p>
            <p className="text-gray-700 leading-relaxed">
              O mais importante é <strong>fazer as contas</strong>, simular cenários e contar com assessoria especializada para escolher a estratégia que melhor se encaixa na sua realidade financeira.
            </p>
          </section>

          {/* Artigos Relacionados */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/guia/financiamento-imovel-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Landmark className="w-4 h-4" />
                  Financiamento e Pagamento
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Como Financiar um Imóvel de Alto Padrão
                </h4>
                <p className="text-sm text-gray-600">
                  Modalidades, requisitos e melhores condições de crédito
                </p>
              </Link>

              <Link
                href="/guia/simulador-entrada-imovel"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Calculator className="w-4 h-4" />
                  Financiamento e Pagamento
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Quanto Preciso de Entrada?
                </h4>
                <p className="text-sm text-gray-600">
                  Calcule o valor ideal de entrada para seu perfil
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
