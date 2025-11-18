import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, Building2, Clock, DollarSign, TrendingUp, AlertTriangle, CheckCircle2, XCircle, Shield, Calculator } from "lucide-react";

export default function PlantaVsProntoPage() {
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
              <span className="text-[#8B6F4B] font-medium">Planta vs Pronto</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" />
              Antes de Investir
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Imóvel na Planta vs Pronto: Qual Escolher?
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              A decisão entre comprar um imóvel na planta ou pronto é uma das mais importantes no processo de aquisição. Cada modalidade tem vantagens e riscos específicos que impactam diretamente seu investimento. Entenda as diferenças e descubra qual se encaixa melhor no seu perfil.
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
                  <strong>Depende do seu objetivo e perfil.</strong> Na planta oferece <strong>desconto de 15-30%</strong> e potencial de valorização durante a obra, mas exige espera de 3-4 anos. Imóvel pronto permite <strong>uso imediato</strong>, financiamento facilitado e eliminação de riscos de construção, porém com preço mais alto. Para investidores de longo prazo, planta é melhor. Para quem precisa morar logo, pronto é a escolha.
                </p>
              </div>
            </div>
          </div>

          {/* Tabela Comparativa Destacada */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comparação Rápida: Planta vs Pronto</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#8B6F4B] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Critério</th>
                    <th className="px-6 py-4 text-left font-semibold">Na Planta</th>
                    <th className="px-6 py-4 text-left font-semibold">Pronto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Preço</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">15-30% mais barato</span>
                    </td>
                    <td className="px-6 py-4">Preço de mercado atual</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Prazo de Entrega</td>
                    <td className="px-6 py-4">36-48 meses</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Imediato</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Financiamento</td>
                    <td className="px-6 py-4">
                      <span className="text-amber-600">Mais difícil</span> (até 50% do valor)
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Mais fácil</span> (até 80% do valor)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Valorização</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">8-15% ao ano</span> durante obra
                    </td>
                    <td className="px-6 py-4">Valorização padrão (4-6% a.a.)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Risco de Atraso</td>
                    <td className="px-6 py-4">
                      <span className="text-red-600">Alto</span> (30-40% dos casos)
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Zero</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Personalização</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Alta</span> (plantas flexíveis)
                    </td>
                    <td className="px-6 py-4">Limitada ou inexistente</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Uso Imediato</td>
                    <td className="px-6 py-4">
                      <span className="text-red-600">Não</span> (espera de 3-4 anos)
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">Sim</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Garantias Legais</td>
                    <td className="px-6 py-4">Patrimônio de Afetação obrigatório</td>
                    <td className="px-6 py-4">
                      <span className="text-green-600 font-bold">5 anos estrutural</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Seção 1: Imóvel na Planta */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Imóvel na Planta: Vantagens e Desvantagens</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Comprar na planta significa adquirir o imóvel <strong>antes ou durante a construção</strong>. No mercado de alto padrão em São Paulo, esta modalidade representa cerca de 35% das transações, especialmente em bairros nobres com forte demanda.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Principais Vantagens</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div>
                  <strong className="text-gray-900">Desconto Significativo (15-30%):</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Imóveis na planta são até 30% mais baratos que o preço final após a entrega. Em um apartamento de R$ 3 milhões, você economiza entre R$ 450 mil e R$ 900 mil. Este desconto é oferecido pela construtora para captar recursos e acelerar vendas durante a obra.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div>
                  <strong className="text-gray-900">Valorização Durante a Obra:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Além do desconto inicial, o imóvel valoriza conforme avança a construção. Em bairros nobres de São Paulo, a valorização média durante a obra fica entre 8% e 15% ao ano. Comprando por R$ 2 milhões, após 3 anos você pode ter um imóvel valendo R$ 2,5 milhões ou mais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">3</span>
                </div>
                <div>
                  <strong className="text-gray-900">Personalização de Plantas:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    No alto padrão, a maioria dos empreendimentos oferece <strong>plantas flexíveis</strong>. Você pode juntar apartamentos, alterar layout de cômodos, escolher acabamentos premium e criar um imóvel único. Esta personalização agrega valor adicional de 10-20% ao imóvel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">4</span>
                </div>
                <div>
                  <strong className="text-gray-900">Facilidade de Pagamento (Durante Obra):</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    As construtoras oferecem condições facilitadas: entrada de 20-30%, parcelamento do saldo em 36-48 meses durante a obra e saldo final no financiamento. Você dilui o pagamento ao longo do tempo com parcelas mensais geralmente menores que um aluguel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">5</span>
                </div>
                <div>
                  <strong className="text-gray-900">Tudo Novo e com Garantia:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Você recebe um imóvel <strong>zerado</strong>, com acabamentos atuais, tecnologia de ponta e garantia legal de 5 anos para estrutura. Não há custos de reforma ou manutenção corretiva nos primeiros anos.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">❌ Principais Desvantagens</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div>
                  <strong className="text-gray-900">Longa Espera (3-4 anos):</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    O maior obstáculo: você precisa esperar 36-48 meses até a entrega. Durante este período, você paga parcelas sem poder usar ou alugar o imóvel. Se precisar morar imediatamente, esta não é a melhor opção.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div>
                  <strong className="text-gray-900">Risco de Atraso:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Segundo o Secovi-SP, cerca de <strong>35% dos empreendimentos</strong> sofrem atrasos de 6-12 meses. Causas: problemas climáticos, falta de mão de obra, problemas financeiros da construtora ou burocracias legais. Atrasos geram custos extras com aluguel provisório.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">3</span>
                </div>
                <div>
                  <strong className="text-gray-900">Financiamento Mais Restrito:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Bancos limitam financiamento na planta a <strong>50% do valor</strong> (vs 80% em imóveis prontos). Você precisa ter maior capital próprio para entrada e parcelas durante obra. Taxas de juros também podem ser 0,3-0,5% maiores.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">4</span>
                </div>
                <div>
                  <strong className="text-gray-900">Risco de Problemas Construtivos:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Apesar de raro no alto padrão, existe o risco de <strong>problemas técnicos</strong> descobertos apenas após conclusão: infiltrações, falhas estruturais, qualidade inferior dos materiais. Escolha construtoras consolidadas para minimizar este risco.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">5</span>
                </div>
                <div>
                  <strong className="text-gray-900">Baixa Liquidez:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Vender um imóvel na planta antes da entrega é <strong>difícil e com deságio</strong>. Se precisar liquidar o investimento por emergência, você pode perder 10-20% do valor pago ou ter dificuldade em encontrar comprador.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Box de Simulação */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <Calculator className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Exemplo de Rentabilidade na Planta</h4>
                <div className="text-gray-700 text-sm space-y-2">
                  <p><strong>Empreendimento:</strong> Edifício de alto padrão no Itaim Bibi, 4 quartos, 250m²</p>
                  <p><strong>Preço na Planta (2022):</strong> R$ 2.500.000</p>
                  <p><strong>Pagamento:</strong> R$ 500k entrada + R$ 55k/mês x 36 meses = R$ 2.480.000 total</p>
                  <p><strong>Entrega (2025):</strong> Imóvel pronto valendo R$ 3.500.000</p>
                  <p className="font-bold text-green-600 pt-2 border-t border-blue-300">
                    💰 Lucro: R$ 1.020.000 (41% de rentabilidade em 3 anos = 12,1% a.a.)
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    * Sem contar valorização adicional pós-entrega. Cálculo não considera custos de oportunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 2: Imóvel Pronto */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Imóvel Pronto: Vantagens e Desvantagens</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Imóveis prontos representam <strong>65% das transações</strong> no mercado de alto padrão. São propriedades já construídas e habitáveis, podendo ser novos (até 2 anos) ou usados (com histórico de ocupação).
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Principais Vantagens</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div>
                  <strong className="text-gray-900">Uso Imediato:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    A maior vantagem: você pode <strong>morar ou alugar imediatamente</strong>. Ideal para quem precisa mudar de cidade, encerrar aluguel atual, iniciar locação para renda passiva ou simplesmente não quer esperar anos pela entrega.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div>
                  <strong className="text-gray-900">O Que Você Vê é o Que Você Compra:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    <strong>Zero risco de surpresas</strong>. Você visita, avalia acabamentos reais, verifica layout, testa acústica, vê vista, conhece vizinhos e área comum. Não há dúvidas sobre o produto final.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">3</span>
                </div>
                <div>
                  <strong className="text-gray-900">Financiamento Facilitado (até 80%):</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Bancos oferecem <strong>melhores condições</strong> para imóveis prontos: financiamento de até 80% do valor, taxas de juros menores (até 0,5 p.p. abaixo), análise de crédito mais rápida e menor exigência de entrada inicial.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">4</span>
                </div>
                <div>
                  <strong className="text-gray-900">Eliminação de Riscos de Construção:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Sem risco de atraso, abandono de obra, problemas com construtora ou resultado final diferente do esperado. O imóvel está pronto, testado e habitável. Garantias estruturais (5 anos) já estão em vigor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">5</span>
                </div>
                <div>
                  <strong className="text-gray-900">Possibilidade de Negociação:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Em imóveis usados ou com estoque, há margem para <strong>negociação de preço</strong> (5-15%), inclusão de móveis planejados, pagamento de ITBI pelo vendedor ou condições especiais de pagamento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">6</span>
                </div>
                <div>
                  <strong className="text-gray-900">Geração Imediata de Renda (Locação):</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Se o objetivo é investimento, você começa a <strong>receber aluguel imediatamente</strong>. No alto padrão, o yield médio é de 0,4-0,6% ao mês, recuperando o investimento em 15-20 anos enquanto o imóvel valoriza.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">❌ Principais Desvantagens</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">1</span>
                </div>
                <div>
                  <strong className="text-gray-900">Preço Mais Alto (15-30% acima da planta):</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Você paga o <strong>preço de mercado atual</strong>, sem o desconto da planta. Um apartamento que custaria R$ 2 milhões na planta pode sair por R$ 2,6-2,8 milhões pronto. Esta diferença pode representar centenas de milhares de reais.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div>
                  <strong className="text-gray-900">Menor Potencial de Valorização Rápida:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Imóveis prontos valorizam na média do mercado (4-6% ao ano). Você perde a <strong>valorização acelerada</strong> que ocorre durante a construção. Para investidores de longo prazo, o retorno total tende a ser menor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">3</span>
                </div>
                <div>
                  <strong className="text-gray-900">Zero Personalização:</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    O layout já está definido. Se quiser modificações, você arca com <strong>custos de reforma</strong> (R$ 150-300 mil em apartamentos de alto padrão), perda de tempo e possíveis problemas com o condomínio ou estrutura.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold">4</span>
                </div>
                <div>
                  <strong className="text-gray-900">Possíveis Custos de Atualização (Imóveis Usados):</strong>
                  <p className="text-gray-700 text-sm mt-1">
                    Se o imóvel tem mais de 10 anos, pode precisar de reformas, troca de sistemas (ar-condicionado, aquecimento), modernização tecnológica e adequação a novas normas. Estes custos podem somar 10-20% do valor do imóvel.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 3: Qual Escolher? */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Qual Escolher? Guia de Decisão</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A escolha depende de múltiplos fatores. Use este guia para tomar a melhor decisão para seu caso:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Escolha Planta */}
              <div className="border-2 border-[#8B6F4B] rounded-lg p-6 bg-[#8B6F4B]/5">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#8B6F4B]" />
                  Escolha NA PLANTA se:
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Você <strong>não tem pressa</strong> e pode esperar 3-4 anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Seu objetivo é <strong>investimento de longo prazo</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Quer maximizar <strong>retorno financeiro</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Deseja <strong>personalizar</strong> planta e acabamentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Tem capital para <strong>entrada robusta</strong> (30-50%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Pode pagar parcelas <strong>durante obra</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Aceita o <strong>risco de atraso</strong> na entrega</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B6F4B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Busca imóvel <strong>100% novo</strong></span>
                  </li>
                </ul>
              </div>

              {/* Escolha Pronto */}
              <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  Escolha PRONTO se:
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Precisa <strong>morar imediatamente</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Quer <strong>gerar renda</strong> com locação agora</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Não pode esperar 3-4 anos pela entrega</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Prefere <strong>eliminar riscos</strong> de construção</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Precisa de <strong>financiamento alto</strong> (70-80%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Quer <strong>ver exatamente</strong> o que está comprando</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Valoriza <strong>certeza</strong> sobre incerteza</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Busca <strong>liquidez futura</strong> mais rápida</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Box de Alerta */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">⚠️ Dicas de Segurança (Compra na Planta)</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• <strong>Pesquise a construtora:</strong> Verifique histórico, entregas anteriores e reputação no Reclame Aqui</li>
                  <li>• <strong>Exija Patrimônio de Afetação:</strong> Obrigatório por lei, garante que recursos sejam usados apenas naquela obra</li>
                  <li>• <strong>Leia todo o contrato:</strong> Atenção especial para cláusulas de atraso, multas e rescisão</li>
                  <li>• <strong>Verifique registro no cartório:</strong> Garanta que a incorporação está regularizada</li>
                  <li>• <strong>Acompanhe a obra pessoalmente:</strong> Visite canteiro trimestralmente para monitorar andamento</li>
                  <li>• <strong>Guarde todos os comprovantes:</strong> Recibos de pagamento são essenciais em caso de problemas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não existe uma resposta única sobre qual modalidade é melhor. A escolha entre <strong>planta ou pronto</strong> depende fundamentalmente dos seus objetivos, prazo, perfil de risco e situação financeira.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para <strong>investidores pacientes</strong> focados em rentabilidade máxima, a planta oferece retorno superior através do desconto inicial e valorização durante a obra. Para quem <strong>necessita uso imediato</strong>, segurança e previsibilidade, o imóvel pronto é a escolha natural.
            </p>
            <p className="text-gray-700 leading-relaxed">
              No mercado de alto padrão em São Paulo, ambas as modalidades têm se mostrado <strong>excelentes investimentos</strong> quando feitos com análise criteriosa e visão de longo prazo. O importante é alinhar sua escolha com seus objetivos pessoais e capacidade financeira.
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
                  Financiamento
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Financiamento para Imóveis de Alto Padrão
                </h4>
                <p className="text-sm text-gray-600">
                  Condições especiais, taxas e como conseguir aprovação acima de R$ 1 milhão
                </p>
              </Link>

              <Link
                href="/guia/investimento-scp-imoveis"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <TrendingUp className="w-4 h-4" />
                  Antes de Investir
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Investimento em SCP Imobiliário
                </h4>
                <p className="text-sm text-gray-600">
                  Entenda como investir em Sociedades em Conta de Participação no mercado de luxo
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
