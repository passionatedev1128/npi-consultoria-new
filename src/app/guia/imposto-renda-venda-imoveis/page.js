import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, TrendingUp, Clock, DollarSign, AlertTriangle, CheckCircle2, Calculator, FileText, Shield } from "lucide-react";

export default function ImpostoRendaCompraVendaPage() {
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
              <span className="text-[#8B6F4B] font-medium">Imposto de Renda</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <FileText className="w-4 h-4" />
              Tributação e Impostos
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Imposto de Renda na Compra e Venda de Imóveis
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Entenda como declarar imóveis no IR, quando há isenção de ganho de capital e como evitar problemas com a Receita Federal em transações de alto valor.
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
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-[#8B6F4B]">Sim, você deve declarar imóveis no IR independente do valor.</strong> Na compra, declara-se em "Bens e Direitos" pelo valor de aquisição (incluindo ITBI, escritura e reformas). Na venda, se houver ganho de capital, paga-se imposto de <strong>15% a 22,5%</strong> sobre o lucro. Existem isenções importantes: venda única de até R$ 440 mil, uso integral do valor em novo imóvel em 180 dias, ou único imóvel até R$ 440 mil.
                </p>
                <div className="bg-white/80 rounded-lg p-4 border border-[#8B6F4B]/20">
                  <p className="text-sm text-gray-600 mb-2"><strong>Exemplo:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Compra: R$ 2.000.000 + R$ 60k (ITBI) = R$ 2.060.000 (valor declarado)</li>
                    <li>• Venda após 5 anos: R$ 3.000.000</li>
                    <li>• Ganho de capital: R$ 940.000</li>
                    <li>• <strong className="text-[#8B6F4B]">IR devido: R$ 141.000 (15%)</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 1: Declaração de Compra */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Como Declarar a Compra de Imóvel
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A compra de imóvel deve ser <strong>obrigatoriamente declarada</strong> no ano seguinte à aquisição, independente do valor. A declaração correta é essencial para evitar problemas futuros com a Receita Federal.
            </p>

            <div className="bg-[#8B6F4B]/5 rounded-lg p-6 my-8 border border-[#8B6F4B]/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Passo a Passo da Declaração</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Acesse a Ficha "Bens e Direitos"</p>
                    <p className="text-sm text-gray-700 mt-1">
                      No programa da Receita Federal, vá em "Bens e Direitos" e clique em "Novo"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Selecione o Código Correto</p>
                    <ul className="text-sm text-gray-700 mt-1 space-y-1">
                      <li>• <strong>Código 11:</strong> Apartamento</li>
                      <li>• <strong>Código 12:</strong> Casa</li>
                      <li>• <strong>Código 13:</strong> Terreno</li>
                      <li>• <strong>Código 14:</strong> Conjunto Comercial</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Preencha a Localização</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Informe endereço completo, área (m²), matrícula do cartório e nome de outros proprietários se houver
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Declare o Valor de Aquisição</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Coloque em "Situação em 31/12" o <strong>valor total pago</strong>, incluindo:
                    </p>
                    <ul className="text-sm text-gray-700 mt-2 ml-4 space-y-1">
                      <li>→ Valor do imóvel na escritura</li>
                      <li>→ ITBI pago</li>
                      <li>→ Custos de escritura e registro</li>
                      <li>→ Corretagem (se paga pelo comprador)</li>
                      <li>→ Reformas e benfeitorias realizadas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <div className="flex items-start gap-3">
                <Calculator className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Exemplo Real de Declaração</p>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p><strong>Apartamento comprado em 2024 no Jardim Paulista:</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>→ Valor escritura: R$ 2.500.000</li>
                      <li>→ ITBI (3%): R$ 75.000</li>
                      <li>→ Escritura e registro: R$ 8.000</li>
                      <li>→ Reforma inicial: R$ 150.000</li>
                      <li className="pt-2 border-t border-blue-300 font-bold text-[#8B6F4B]">
                        → <strong>Valor a declarar: R$ 2.733.000</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-yellow-900 mb-2">Atenção Importante</p>
                  <p className="text-yellow-800 text-sm">
                    <strong>NUNCA declare valor menor do que o real.</strong> A Receita Federal cruza dados com cartórios e pode autuar por sonegação. Além disso, declarar valor menor prejudica você na hora de vender, pois aumenta artificialmente o ganho de capital tributável.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 2: Declaração de Venda */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Como Declarar a Venda de Imóvel
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A venda de imóvel envolve dois processos distintos: a <strong>declaração anual do IR</strong> e o <strong>pagamento do ganho de capital</strong> (se houver lucro). Ambos são obrigatórios.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Etapa 1: Programa de Ganho de Capital (GCAP)</h3>

            <p className="text-gray-700 mb-4">
              Antes da declaração anual, você deve usar o programa <strong>GCAP</strong> da Receita Federal para calcular e pagar o imposto sobre o ganho de capital:
            </p>

            <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-3">Como Calcular o Ganho de Capital</h4>
              
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm mb-4">
                <p className="text-center text-gray-700 mb-2">Ganho de Capital = Valor de Venda - Custo de Aquisição</p>
                <p className="text-center text-gray-600 text-xs">Custo de Aquisição = Valor de Compra + ITBI + Reformas + Benfeitorias</p>
              </div>

              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Valor de Venda:</span>
                  <strong>R$ 3.500.000</strong>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>(-) Custo de Aquisição:</span>
                  <strong>R$ 2.733.000</strong>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>(-) Custos da venda (corretor 3%):</span>
                  <strong>R$ 105.000</strong>
                </div>
                <div className="flex justify-between p-3 bg-[#8B6F4B]/10 rounded font-bold border-2 border-[#8B6F4B]">
                  <span>= Ganho de Capital Tributável:</span>
                  <strong className="text-[#8B6F4B]">R$ 662.000</strong>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Alíquotas do Ganho de Capital</h3>

            <p className="text-gray-700 mb-4">
              O imposto é <strong>progressivo</strong> conforme o valor do ganho:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead className="bg-[#8B6F4B] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Ganho de Capital</th>
                    <th className="px-6 py-3 text-left font-semibold">Alíquota</th>
                    <th className="px-6 py-3 text-left font-semibold">Exemplo de IR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Até R$ 5 milhões</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">15%</td>
                    <td className="px-6 py-4 text-[#8B6F4B]">R$ 662k → <strong>R$ 99.300</strong></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">De R$ 5 a 10 milhões</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">17,5%</td>
                    <td className="px-6 py-4 text-[#8B6F4B]">R$ 7M → <strong>R$ 1.225.000</strong></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">De R$ 10 a 30 milhões</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">20%</td>
                    <td className="px-6 py-4 text-[#8B6F4B]">R$ 15M → <strong>R$ 3.000.000</strong></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Acima de R$ 30 milhões</td>
                    <td className="px-6 py-4 text-gray-700 font-semibold">22,5%</td>
                    <td className="px-6 py-4 text-[#8B6F4B]">R$ 40M → <strong>R$ 9.000.000</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-red-900 mb-2">Prazo de Pagamento</p>
                  <p className="text-red-800 text-sm">
                    O ganho de capital deve ser pago <strong>até o último dia útil do mês seguinte à venda</strong>. Exemplo: venda em 15/março → pagamento até 30/abril. Atraso gera multa de 0,33% ao dia (limitada a 20%) mais juros Selic.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Etapa 2: Declaração Anual</h3>

            <p className="text-gray-700 mb-4">
              Na declaração anual do IR (entregue até abril), você deve:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 border-l-4 border-[#8B6F4B] rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">1. Dar baixa no imóvel vendido</p>
                <p className="text-sm text-gray-700">
                  Em "Bens e Direitos", localize o imóvel e coloque em "Situação em 31/12" o valor <strong>R$ 0,00</strong>. No campo "Discriminação", informe: "Imóvel vendido em [data] por R$ [valor]"
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-[#8B6F4B] rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">2. Declarar o ganho de capital</p>
                <p className="text-sm text-gray-700">
                  Vá em "Ganhos de Capital" e importe os dados do programa GCAP. O sistema preencherá automaticamente.
                </p>
              </div>

              <div className="bg-gray-50 border-l-4 border-[#8B6F4B] rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">3. Informar o destino do valor recebido</p>
                <p className="text-sm text-gray-700">
                  Se aplicou em outra propriedade (para isenção), declare o novo imóvel em "Bens e Direitos"
                </p>
              </div>
            </div>
          </section>

          {/* Seção 3: Isenções */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Isenções de Imposto de Renda na Venda
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Existem situações em que você pode ficar <strong>isento do pagamento</strong> do ganho de capital. Conheça as principais:
            </p>

            <div className="space-y-6">
              {/* Isenção 1 */}
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Isenção 1: Imóvel Único até R$ 440 mil</h3>
                </div>
                <div className="text-gray-700 space-y-2">
                  <p className="mb-3">
                    <strong>Quem tem direito:</strong> Pessoa física que vende seu <strong>único imóvel</strong> por valor de até R$ 440 mil.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold mb-2">Requisitos:</p>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Não ter vendido outro imóvel nos últimos 5 anos com esta isenção</li>
                      <li>✓ Valor de venda até R$ 440.000</li>
                      <li>✓ Ser o único imóvel que você possui no Brasil</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Isenção 2 */}
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Isenção 2: Aplicação Total em Novo Imóvel (180 dias)</h3>
                </div>
                <div className="text-gray-700 space-y-2">
                  <p className="mb-3">
                    <strong>Quem tem direito:</strong> Quem aplica <strong>100% do valor recebido</strong> na compra de outro imóvel residencial em até 180 dias.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold mb-2">Exemplo prático:</p>
                    <ul className="space-y-1 text-sm">
                      <li>→ Vendeu imóvel por R$ 3.000.000 em janeiro</li>
                      <li>→ Comprou novo imóvel por R$ 3.500.000 em maio</li>
                      <li>→ <strong className="text-green-600">Isenção total de ganho de capital!</strong></li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-3">
                      <strong>Importante:</strong> O novo imóvel deve ser residencial. Se aplicar apenas parte do valor, a isenção será proporcional.
                    </p>
                  </div>
                </div>
              </div>

              {/* Isenção 3 */}
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Isenção 3: Primeira Venda até R$ 440 mil</h3>
                </div>
                <div className="text-gray-700 space-y-2">
                  <p className="mb-3">
                    <strong>Quem tem direito:</strong> Quem vende pela primeira vez (ou não vendeu nos últimos 5 anos) imóvel residencial por até R$ 440 mil.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold mb-2">Diferença da Isenção 1:</p>
                    <ul className="space-y-1 text-sm">
                      <li>→ Não precisa ser o único imóvel</li>
                      <li>→ Pode ter outros imóveis</li>
                      <li>→ Limite de valor: R$ 440.000</li>
                      <li>→ Não usou a isenção nos últimos 5 anos</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Isenção 4 */}
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Isenção 4: Imóvel Adquirido até 1969</h3>
                </div>
                <div className="text-gray-700 space-y-2">
                  <p className="mb-3">
                    <strong>Quem tem direito:</strong> Imóveis adquiridos antes de 1969 têm isenção total, independente do valor de venda.
                  </p>
                  <p className="text-sm text-gray-600">
                    Esta isenção é rara em imóveis de alto padrão, mas pode beneficiar heranças de família.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Dica Estratégica</p>
                  <p className="text-blue-800 text-sm">
                    <strong>Para imóveis de alto padrão, a isenção mais comum é a de aplicação em novo imóvel (180 dias).</strong> Se você planeja fazer upgrade, venda primeiro e compre o novo imóvel com o valor total recebido dentro do prazo. Isso pode economizar centenas de milhares de reais em IR.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 4: Reduções de Base de Cálculo */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Como Reduzir Legalmente o Ganho de Capital
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Existem estratégias legais para <strong>reduzir a base de cálculo</strong> do ganho de capital e, consequentemente, pagar menos imposto:
            </p>

            <div className="space-y-6">
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <span className="text-xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">1. Incluir Todas as Benfeitorias</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Toda reforma, ampliação ou melhoria feita no imóvel <strong>aumenta o custo de aquisição</strong> e reduz o ganho tributável.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-2">O que pode incluir:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Reformas estruturais</li>
                    <li>• Instalação de ar-condicionado central</li>
                    <li>• Automação residencial</li>
                    <li>• Ampliações e construções</li>
                    <li>• Piscina, sauna, academia</li>
                    <li>• Sistemas de segurança</li>
                  </ul>
                  <p className="text-xs text-amber-600 mt-3">
                    <strong>Importante:</strong> Guarde todas as notas fiscais e comprovantes!
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <span className="text-xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">2. Deduzir Custos da Venda</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Despesas com corretagem, reforma pré-venda e marketing <strong>reduzem o ganho</strong>.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-2">Custos dedutíveis:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Comissão de corretagem (geralmente 3-6%)</li>
                    <li>• Reforma para venda (pintura, reparos)</li>
                    <li>• Anúncios e marketing imobiliário</li>
                    <li>• Honorários advocatícios da transação</li>
                  </ul>
                  <div className="mt-3 p-3 bg-white rounded border border-[#8B6F4B]/20">
                    <p className="text-xs text-gray-600">Exemplo:</p>
                    <p className="text-sm">Venda de R$ 3M com corretor 3% = deduz R$ 90 mil</p>
                    <p className="text-sm font-semibold text-[#8B6F4B]">Economia de IR: R$ 13.500 (15%)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <span className="text-xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">3. Atualização pela Inflação</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  O custo de aquisição pode ser <strong>corrigido pela inflação</strong> (IPCA) até a data da venda.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2">Exemplo prático:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Compra em 2020: R$ 2.000.000</li>
                    <li>• Inflação acumulada (2020-2024): ~28%</li>
                    <li>• Custo corrigido: R$ 2.560.000</li>
                    <li className="pt-2 border-t border-gray-300 font-semibold text-[#8B6F4B]">
                      • Economia: R$ 560k a menos de ganho tributável
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 5: Erros Comuns */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Erros Comuns que Geram Problemas com a Receita
            </h2>
            
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-red-900 mb-2">❌ Erro 1: Não declarar a compra</h4>
                <p className="text-sm text-gray-700">
                  Toda aquisição é obrigatória na declaração. A Receita cruza dados com cartórios e detecta omissões automaticamente.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-red-900 mb-2">❌ Erro 2: Subdeclarar o valor de compra</h4>
                <p className="text-sm text-gray-700">
                  Além de crime de sonegação, prejudica você no futuro aumentando o ganho de capital artificialmente.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-red-900 mb-2">❌ Erro 3: Não pagar ganho de capital no prazo</h4>
                <p className="text-sm text-gray-700">
                  O pagamento deve ser até o mês seguinte à venda. Atraso gera multa pesada (até 20%) e juros.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-red-900 mb-2">❌ Erro 4: Não guardar comprovantes de reformas</h4>
                <p className="text-sm text-gray-700">
                  Sem notas fiscais, você não pode incluir benfeitorias no custo e paga mais IR na venda.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-red-900 mb-2">❌ Erro 5: Confundir isenção de ITBI com isenção de IR</h4>
                <p className="text-sm text-gray-700">
                  São impostos diferentes. Isenção de ITBI não significa isenção de ganho de capital.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 6: FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Perguntas Frequentes
            </h2>

            <div className="space-y-4">
              {[
                {
                  pergunta: "Preciso declarar imóvel herdado?",
                  resposta: "Sim. Imóveis recebidos por herança devem ser declarados pelo valor constante no inventário. Não há ganho de capital na herança, mas futura venda será tributada normalmente."
                },
                {
                  pergunta: "E se vender com prejuízo?",
                  resposta: "Se vender por menos do que pagou (prejuízo), não há imposto a pagar. Mas você deve declarar a operação normalmente na declaração anual."
                },
                {
                  pergunta: "Posso deduzir o IR pago do ganho de capital na declaração?",
                  resposta: "Não. O IR sobre ganho de capital é definitivo e exclusivo na fonte. Não gera restituição nem pode ser compensado."
                },
                {
                  pergunta: "Imóvel comercial tem as mesmas regras?",
                  resposta: "Sim, com uma diferença: imóveis comerciais não têm direito às isenções de R$ 440 mil ou aplicação em novo imóvel. Sempre paga ganho de capital."
                },
                {
                  pergunta: "Posso parcelar o imposto de ganho de capital?",
                  resposta: "Não. O imposto sobre ganho de capital deve ser pago à vista até o último dia útil do mês seguinte à venda. Não há possibilidade de parcelamento."
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
              O <strong>Imposto de Renda na compra e venda de imóveis</strong> exige atenção aos detalhes e conhecimento das regras. Em transações de alto valor, os impactos tributários podem representar centenas de milhares de reais.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As <strong>isenções existem e são legais</strong>, mas precisam ser planejadas com antecedência. A aplicação do valor total em novo imóvel residencial em 180 dias é a estratégia mais comum e eficaz no mercado de alto padrão.
            </p>
            <p className="text-gray-700 leading-relaxed">
              O mais importante: <strong>declare tudo corretamente</strong>, guarde todos os comprovantes e, se necessário, consulte um contador especializado em transações imobiliárias. O investimento em assessoria profissional sempre se paga pela economia tributária e tranquilidade jurídica.
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
                href="/guia/ganho-capital-imoveis"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <TrendingUp className="w-4 h-4" />
                  Tributação
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Ganho de Capital: Como Calcular
                </h4>
                <p className="text-sm text-gray-600">
                  Guia completo sobre cálculo, alíquotas e redução legal do ganho de capital
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
