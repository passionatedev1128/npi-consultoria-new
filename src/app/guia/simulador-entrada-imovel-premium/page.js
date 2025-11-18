import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, Calculator, CheckCircle2, AlertTriangle, DollarSign, TrendingUp, PiggyBank, Wallet, CreditCard, PercentIcon, Target, TrendingDown, BadgeCheck, AlertCircle } from "lucide-react";

export default function SimuladorEntradaImovelPage() {
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
              <span className="text-[#8B6F4B] font-medium">Simulador de Entrada</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              <Calculator className="w-4 h-4" />
              Financiamento e Pagamento
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Simulador: Quanto Preciso de Entrada para Comprar um Imóvel de Luxo?
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Calcule quanto você precisa juntar de entrada para imóveis de alto padrão. Cenários, percentuais e estratégias para diferentes perfis e valores de imóveis acima de R$ 1 milhão.
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
                  Para imóveis de alto padrão, você precisará de <strong>30% a 50% de entrada</strong> no financiamento bancário. Em um imóvel de <strong>R$ 2 milhões</strong>, isso significa R$ 600 mil a R$ 1 milhão. Para pagamento direto com construtora (na planta), a entrada inicial é menor: <strong>10% a 30%</strong>. Para pagamento à vista com desconto: <strong>100%</strong> (mas com economia de 10-30% no valor total).
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              A <strong>entrada</strong> é um dos principais fatores que determina se você conseguirá comprar o imóvel desejado. Em imóveis de alto padrão acima de R$ 1 milhão, os percentuais de entrada são <strong>significativamente maiores</strong> do que em imóveis convencionais.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Neste guia, vamos simular diferentes cenários para você entender <strong>quanto precisa ter guardado</strong> e qual estratégia se encaixa melhor no seu perfil financeiro.
            </p>
          </section>

          {/* Simulações por Valor */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              Simulações por Valor do Imóvel
            </h2>

            <div className="space-y-8">
              {/* Simulação 1: R$ 1,5 milhão */}
              <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Imóvel de R$ 1,5 milhão</h3>
                  <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full">
                    Apartamento 2 a 3 quartos - Em Boa Localização
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BadgeCheck className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">Financiamento 80%</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Entrada:</strong> R$ 300.000 (20%)</p>
                      <p><strong>Financiamento:</strong> R$ 1.200.000</p>
                      <p><strong>Parcela (20 anos):</strong> ~R$ 10.900</p>
                      <p className="text-xs text-gray-600 mt-2">Taxa: 10% a.a. + TR</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BadgeCheck className="w-5 h-5 text-green-600" />
                      <h4 className="font-bold text-gray-900">Financiamento 50%</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Entrada:</strong> R$ 750.000 (50%)</p>
                      <p><strong>Financiamento:</strong> R$ 750.000</p>
                      <p><strong>Parcela (20 anos):</strong> ~R$ 6.800</p>
                      <p className="text-xs text-gray-600 mt-2">Taxa: 10% a.a. + TR</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BadgeCheck className="w-5 h-5 text-amber-600" />
                      <h4 className="font-bold text-gray-900">À Vista (desc. 15%)</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Valor à vista:</strong> R$ 1.275.000</p>
                      <p><strong>Economia:</strong> R$ 225.000</p>
                      <p><strong>Parcela:</strong> R$ 0</p>
                      <p className="text-xs text-gray-600 mt-2">Quitado imediatamente</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulação 2: R$ 2,5 milhões */}
              <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Imóvel de R$ 2,5 milhões</h3>
                  <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full">
                    Apartamento 4 quartos - Alto padrão
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BadgeCheck className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">Financiamento 60%</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Entrada:</strong> R$ 1.000.000 (40%)</p>
                      <p><strong>Financiamento:</strong> R$ 1.500.000</p>
                      <p><strong>Parcela (25 anos):</strong> ~R$ 14.000</p>
                      <p className="text-xs text-gray-600 mt-2">Taxa: 11% a.a. + IPCA (SFI)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BadgeCheck className="w-5 h-5 text-green-600" />
                      <h4 className="font-bold text-gray-900">Financiamento 50%</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Entrada:</strong> R$ 1.250.000 (50%)</p>
                      <p><strong>Financiamento:</strong> R$ 1.250.000</p>
                      <p><strong>Parcela (25 anos):</strong> ~R$ 11.700</p>
                      <p className="text-xs text-gray-600 mt-2">Taxa: 11% a.a. + IPCA (SFI)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BadgeCheck className="w-5 h-5 text-amber-600" />
                      <h4 className="font-bold text-gray-900">À Vista (desc. 20%)</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Valor à vista:</strong> R$ 2.000.000</p>
                      <p><strong>Economia:</strong> R$ 500.000</p>
                      <p><strong>Parcela:</strong> R$ 0</p>
                      <p className="text-xs text-gray-600 mt-2">Quitado imediatamente</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulação 3: R$ 5 milhões */}
              <div className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Imóvel de R$ 5 milhões</h3>
                  <div className="text-sm text-gray-600 bg-white px-4 py-2 rounded-full">
                    Cobertura ou Casa de Luxo
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BadgeCheck className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-gray-900">Financiamento 50%</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Entrada:</strong> R$ 2.500.000 (50%)</p>
                      <p><strong>Financiamento:</strong> R$ 2.500.000</p>
                      <p><strong>Parcela (30 anos):</strong> ~R$ 24.000</p>
                      <p className="text-xs text-gray-600 mt-2">Taxa: 12% a.a. + IPCA (SFI)</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BadgeCheck className="w-5 h-5 text-green-600" />
                      <h4 className="font-bold text-gray-900">Parcelado Construtora</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Sinal:</strong> R$ 1.000.000 (20%)</p>
                      <p><strong>Durante obra:</strong> R$ 1.500.000</p>
                      <p><strong>Nas chaves:</strong> R$ 2.500.000</p>
                      <p className="text-xs text-gray-600 mt-2">36 meses obra + Financ. final</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BadgeCheck className="w-5 h-5 text-amber-600" />
                      <h4 className="font-bold text-gray-900">À Vista (desc. 25%)</h4>
                    </div>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Valor à vista:</strong> R$ 3.750.000</p>
                      <p><strong>Economia:</strong> R$ 1.250.000</p>
                      <p><strong>Parcela:</strong> R$ 0</p>
                      <p className="text-xs text-gray-600 mt-2">Quitado imediatamente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tabela Resumo */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tabela Resumo: Entrada por Valor do Imóvel</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-[#8B6F4B] text-white">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left">Valor do Imóvel</th>
                    <th className="border border-gray-300 p-3 text-left">Entrada 30%</th>
                    <th className="border border-gray-300 p-3 text-left">Entrada 40%</th>
                    <th className="border border-gray-300 p-3 text-left">Entrada 50%</th>
                    <th className="border border-gray-300 p-3 text-left">À Vista (desc. 20%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-bold">R$ 1.000.000</td>
                    <td className="border border-gray-300 p-3">R$ 300.000</td>
                    <td className="border border-gray-300 p-3">R$ 400.000</td>
                    <td className="border border-gray-300 p-3">R$ 500.000</td>
                    <td className="border border-gray-300 p-3 text-green-600">R$ 800.000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-bold">R$ 1.500.000</td>
                    <td className="border border-gray-300 p-3">R$ 450.000</td>
                    <td className="border border-gray-300 p-3">R$ 600.000</td>
                    <td className="border border-gray-300 p-3">R$ 750.000</td>
                    <td className="border border-gray-300 p-3 text-green-600">R$ 1.200.000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-bold">R$ 2.000.000</td>
                    <td className="border border-gray-300 p-3">R$ 600.000</td>
                    <td className="border border-gray-300 p-3">R$ 800.000</td>
                    <td className="border border-gray-300 p-3">R$ 1.000.000</td>
                    <td className="border border-gray-300 p-3 text-green-600">R$ 1.600.000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-bold">R$ 3.000.000</td>
                    <td className="border border-gray-300 p-3">R$ 900.000</td>
                    <td className="border border-gray-300 p-3">R$ 1.200.000</td>
                    <td className="border border-gray-300 p-3">R$ 1.500.000</td>
                    <td className="border border-gray-300 p-3 text-green-600">R$ 2.400.000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-bold">R$ 5.000.000</td>
                    <td className="border border-gray-300 p-3">R$ 1.500.000</td>
                    <td className="border border-gray-300 p-3">R$ 2.000.000</td>
                    <td className="border border-gray-300 p-3">R$ 2.500.000</td>
                    <td className="border border-gray-300 p-3 text-green-600">R$ 4.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <p className="text-gray-700 text-sm">
                💡 <strong>Observação:</strong> Valores de entrada podem variar conforme banco, perfil do cliente e condições do mercado. Consulte sempre múltiplas instituições.
              </p>
            </div>
          </section>

          {/* Estratégias por Perfil */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              Estratégias por Perfil Financeiro
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <PiggyBank className="w-5 h-5 text-green-600" />
                  Perfil 1: Capital Total Disponível
                </h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p><strong>Situação:</strong> Você tem o valor total do imóvel em mãos</p>
                  <p><strong>Estratégia recomendada:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Se busca economia máxima:</strong> Pague à vista e negocie desconto de 15-30%</li>
                    <li>• <strong>Se tem investimentos rentáveis:</strong> Dê 40-50% de entrada e mantenha o resto investido</li>
                    <li>• <strong>Para preservar liquidez:</strong> Dê entrada mínima (30%) e financie o resto</li>
                  </ul>
                  <div className="bg-white rounded p-3 mt-3">
                    <p className="text-xs"><strong>Exemplo:</strong> Imóvel R$ 2M → À vista por R$ 1.6M (economia R$ 400k) OU entrada R$ 800k + financ. R$ 1.2M (mantém R$ 1.2M investido)</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-blue-600" />
                  Perfil 2: Capital Parcial (50-70%)
                </h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p><strong>Situação:</strong> Você tem 50-70% do valor do imóvel</p>
                  <p><strong>Estratégia recomendada:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• Dê entrada de 40-50% para conseguir melhores taxas</li>
                    <li>• Financie o restante em 20-25 anos</li>
                    <li>• Priorize imóveis na planta para diluir pagamento</li>
                  </ul>
                  <div className="bg-white rounded p-3 mt-3">
                    <p className="text-xs"><strong>Exemplo:</strong> Imóvel R$ 2M → Entrada R$ 1M + financ. R$ 1M (parcela ~R$ 9k/mês)</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-amber-600" />
                  Perfil 3: Capital Limitado (30-40%)
                </h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p><strong>Situação:</strong> Você tem apenas 30-40% do valor</p>
                  <p><strong>Estratégia recomendada:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Imóvel na planta:</strong> Entrada 20% + parcelas durante obra + financ. 40%</li>
                    <li>• <strong>Permuta:</strong> Use imóvel quitado como parte do pagamento</li>
                    <li>• <strong>Home Equity:</strong> Crédito com garantia de outro imóvel</li>
                  </ul>
                  <div className="bg-white rounded p-3 mt-3">
                    <p className="text-xs"><strong>Exemplo:</strong> Imóvel R$ 2M → Sinal R$ 400k + obra R$ 400k (36x) + chaves financ. R$ 1.2M</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-red-600" />
                  Perfil 4: Capital Insuficiente (&lt;30%)
                </h3>
                <div className="space-y-3 text-gray-700 text-sm">
                  <p><strong>Situação:</strong> Você tem menos de 30% do valor</p>
                  <p><strong>Recomendação:</strong></p>
                  <ul className="ml-4 space-y-1">
                    <li>• <strong>Ajuste expectativas:</strong> Busque imóveis de menor valor</li>
                    <li>• <strong>Acumule mais capital:</strong> Invista e aguarde para ter entrada adequada</li>
                    <li>• <strong>Considere consórcio:</strong> Forma alternativa de aquisição</li>
                  </ul>
                  <div className="bg-white rounded p-3 mt-3 border border-red-200">
                    <p className="text-xs text-red-700"><strong>Alerta:</strong> Com menos de 30% de entrada, as condições de financiamento são muito desfavoráveis ou inexistentes para imóveis de luxo.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quanto Guardar por Mês */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quanto Guardar por Mês para Juntar a Entrada?</h2>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Planejamento de Poupança Mensal</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-purple-200">
                    <tr>
                      <th className="p-3 text-left">Objetivo (Entrada)</th>
                      <th className="p-3 text-left">12 meses</th>
                      <th className="p-3 text-left">24 meses</th>
                      <th className="p-3 text-left">36 meses</th>
                      <th className="p-3 text-left">48 meses</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="border-b">
                      <td className="p-3 font-bold">R$ 300.000</td>
                      <td className="p-3">R$ 25.000/mês</td>
                      <td className="p-3">R$ 12.500/mês</td>
                      <td className="p-3 bg-green-50">R$ 8.333/mês</td>
                      <td className="p-3">R$ 6.250/mês</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-bold">R$ 500.000</td>
                      <td className="p-3">R$ 41.667/mês</td>
                      <td className="p-3">R$ 20.833/mês</td>
                      <td className="p-3 bg-green-50">R$ 13.889/mês</td>
                      <td className="p-3">R$ 10.417/mês</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-bold">R$ 1.000.000</td>
                      <td className="p-3">R$ 83.333/mês</td>
                      <td className="p-3">R$ 41.667/mês</td>
                      <td className="p-3 bg-green-50">R$ 27.778/mês</td>
                      <td className="p-3">R$ 20.833/mês</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">R$ 1.500.000</td>
                      <td className="p-3">R$ 125.000/mês</td>
                      <td className="p-3">R$ 62.500/mês</td>
                      <td className="p-3 bg-green-50">R$ 41.667/mês</td>
                      <td className="p-3">R$ 31.250/mês</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded p-4 mt-4">
                <p className="text-gray-700 text-sm">
                  💡 <strong>Dica:</strong> Considere investir esse dinheiro em CDB, Tesouro Direto ou fundos conservadores durante o período de acumulação para acelerar o objetivo com os rendimentos.
                </p>
              </div>
            </div>
          </section>

          {/* Dicas Finais */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5 Dicas para Juntar a Entrada Mais Rápido</h2>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                  Invista enquanto economiza
                </h4>
                <p className="text-gray-700 text-sm">
                  Coloque suas economias em investimentos conservadores (CDB, Tesouro IPCA+) para acelerar o processo com rendimentos de 10-14% ao ano.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                  Crie metas mensais realistas
                </h4>
                <p className="text-gray-700 text-sm">
                  Estabeleça um valor fixo mensal compatível com sua renda (máximo 30% do salário líquido) e automatize transferências.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                  Considere vender ativos
                </h4>
                <p className="text-gray-700 text-sm">
                  Venda de carro, outro imóvel ou investimentos podem acelerar significativamente sua meta de entrada.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                  Aproveite bonificações e 13º
                </h4>
                <p className="text-gray-700 text-sm">
                  Direcione integralmente bônus, PLR, 13º salário e rendas extras para o fundo de entrada do imóvel.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">5</span>
                  Reduza despesas desnecessárias
                </h4>
                <p className="text-gray-700 text-sm">
                  Corte gastos supérfluos temporariamente: assinaturas não essenciais, jantares fora, compras por impulso. Foque no objetivo maior.
                </p>
              </div>
            </div>
          </section>

          {/* Alerta */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">⚠️ Lembre-se dos Custos Adicionais</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Além da entrada, reserve recursos para:
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>ITBI:</strong> 2-3% do valor do imóvel (~R$ 40k-60k em imóvel de R$ 2M)</li>
                  <li>• <strong>Escritura e Registro:</strong> R$ 5.000 - R$ 15.000</li>
                  <li>• <strong>Mudança:</strong> R$ 5.000 - R$ 20.000</li>
                  <li>• <strong>Mobília:</strong> 10-20% do valor do imóvel para decorar adequadamente</li>
                  <li>• <strong>Reformas/Ajustes:</strong> Reserve pelo menos 5% do valor</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>entrada</strong> é o primeiro grande obstáculo na compra de um imóvel de luxo. Para imóveis acima de R$ 1 milhão, você precisará de <strong>R$ 300 mil a R$ 2,5 milhões</strong> dependendo do valor do imóvel e da modalidade de pagamento escolhida.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              O planejamento financeiro adequado, com <strong>poupança disciplinada e investimentos estratégicos</strong>, pode acelerar significativamente seu objetivo. Em média, profissionais de alta renda conseguem acumular entrada adequada em <strong>24 a 48 meses</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lembre-se: quanto maior a entrada, <strong>melhores as condições de financiamento</strong> e menores os juros pagos ao longo do tempo. Vale a pena esperar e juntar mais para conseguir um negócio mais vantajoso.
            </p>
          </section> 
          
          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre o Imóvel Ideal para Você</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore nosso portfólio com imóveis na planta e prontos em São Paulo
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
                href="/guia/financiamento-imovel-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <DollarSign className="w-4 h-4" />
                  Financiamento e Pagamento
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Como Financiar um Imóvel de Alto Padrão
                </h4>
                <p className="text-sm text-gray-600">
                  Modalidades, requisitos e melhores bancos
                </p>
              </Link>

              <Link
                href="/guia/formas-pagamento-imoveis-luxo"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <CreditCard className="w-4 h-4" />
                  Financiamento e Pagamento
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Formas de Pagamento em Imóveis de Luxo
                </h4>
                <p className="text-sm text-gray-600">
                  À vista, parcelado, financiamento e permuta
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
