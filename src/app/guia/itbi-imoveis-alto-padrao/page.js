"use client";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";

export default function ITBIImoveisAltoPadraoPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.npiconsultoria.com.br" },
    { name: "Guia", url: "https://www.npiconsultoria.com.br/guia" },
    { name: "ITBI em Imóveis de Alto Padrão", url: "https://www.npiconsultoria.com.br/guia/itbi-imoveis-alto-padrao" },
  ];

  const artigosRelacionados = [
    {
      titulo: "Ganho de Capital: Como Calcular",
      url: "/guia/ganho-capital-imoveis",
      categoria: "Tributação",
    },
    {
      titulo: "Imposto de Renda na Venda",
      url: "/guia/imposto-renda-venda-imovel",
      categoria: "Tributação",
    },
    {
      titulo: "Documentação Completa",
      url: "/guia/documentacao-imovel-alto-padrao",
      categoria: "Aspectos Legais",
    },
  ];

  return (
    <>
      <Header effect={false} />

      {/* Breadcrumbs */}
      <nav className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {index === breadcrumbItems.length - 1 ? (
                  <span className="text-gray-600 font-medium">{item.name}</span>
                ) : (
                  <Link href={item.url} className="text-[#8B6F4B] hover:underline">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Conteúdo Principal */}
      <article className="bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header do Artigo */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white text-sm font-semibold rounded-full">
                Tributação e Impostos
              </span>
              <span className="text-sm text-gray-500">8 min de leitura</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ITBI em Imóveis de Alto Padrão: Guia Completo 2024
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Entenda como funciona o ITBI em imóveis de luxo, alíquotas em São Paulo, 
              isenções possíveis e como economizar até R$ 100 mil na compra.
            </p>
          </header>

          {/* Box de Resposta Direta */}
          <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] rounded-lg p-8 mb-12 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Resposta Direta</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-[#8B6F4B]">O ITBI (Imposto de Transmissão de Bens Imóveis) é um tributo municipal cobrado na compra de imóveis.</strong> Em São Paulo, a alíquota é de 3% sobre o valor venal ou de compra (o maior). Em um imóvel de R$ 3 milhões, o ITBI pode chegar a <strong>R$ 90.000</strong>. Existem estratégias legais para reduzir esse valor, como análise da base de cálculo e verificação de isenções.
                </p>
                <div className="bg-white/80 rounded-lg p-4 border border-[#8B6F4B]/20">
                  <p className="text-sm text-gray-600 mb-2"><strong>Exemplo prático:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Valor do imóvel: R$ 3.000.000</li>
                    <li>• Alíquota ITBI (SP): 3%</li>
                    <li>• ITBI a pagar: <strong className="text-[#8B6F4B]">R$ 90.000</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo do Artigo */}
          <div className="prose prose-lg max-w-none">
            
            {/* Seção 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
                O que é ITBI e Quando é Cobrado
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                O <strong>ITBI (Imposto sobre Transmissão de Bens Imóveis)</strong> é um tributo municipal obrigatório pago pelo comprador sempre que há mudança de propriedade de um imóvel. Em transações de alto padrão, esse imposto representa um valor significativo que precisa ser planejado com antecedência.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-8 border-l-4 border-[#8B6F4B]">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Situações que Geram ITBI</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-3 text-xl">•</span>
                    <span><strong>Compra e venda:</strong> a forma mais comum de incidência</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-3 text-xl">•</span>
                    <span><strong>Dação em pagamento:</strong> quando o imóvel é usado para quitar dívida</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-3 text-xl">•</span>
                    <span><strong>Arrematação judicial:</strong> em leilões judiciais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-3 text-xl">•</span>
                    <span><strong>Permuta:</strong> troca de um imóvel por outro</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-3 text-xl">•</span>
                    <span><strong>Cessão de direitos:</strong> transferência de direitos de compra</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-yellow-900 mb-2">Atenção Importante</p>
                    <p className="text-yellow-800 text-sm">
                      O ITBI deve ser pago <strong>antes do registro da escritura no cartório</strong>. Sem a quitação, não é possível finalizar a transferência do imóvel.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
                Como é Calculado o ITBI em São Paulo
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                O cálculo do ITBI em São Paulo segue regras específicas que consideram tanto o valor venal (determinado pela prefeitura) quanto o valor de transação (declarado na escritura).
              </p>

              <div className="bg-[#8B6F4B]/5 rounded-lg p-6 my-8 border border-[#8B6F4B]/20">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fórmula do ITBI</h3>
                <div className="bg-white rounded-lg p-6 font-mono text-center text-lg border-2 border-[#8B6F4B]/30">
                  <p className="text-gray-700 mb-2">ITBI = Base de Cálculo × Alíquota</p>
                  <p className="text-sm text-gray-600 mt-3">Base de Cálculo = Maior valor entre:</p>
                  <p className="text-[#8B6F4B] font-bold mt-2">Valor Venal ou Valor de Compra</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Alíquotas por Município</h3>
              
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-[#8B6F4B] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold">Município</th>
                      <th className="px-6 py-3 text-left font-semibold">Alíquota</th>
                      <th className="px-6 py-3 text-left font-semibold">ITBI em R$ 3 milhões</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">São Paulo</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">3%</td>
                      <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 90.000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">São Bernardo do Campo</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">3%</td>
                      <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 90.000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">Santo André</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">2,5%</td>
                      <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 75.000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">Guarulhos</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">3%</td>
                      <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 90.000</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">Barueri</td>
                      <td className="px-6 py-4 text-gray-700 font-semibold">2%</td>
                      <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 60.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-blue-900 mb-2">Dica de Especialista</p>
                    <p className="text-blue-800 text-sm">
                      Em imóveis de alto padrão, o valor de transação costuma ser maior que o valor venal. Por isso, a base de cálculo do ITBI geralmente será o valor de compra declarado na escritura.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
                Exemplos Práticos de Cálculo
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Para facilitar o entendimento, veja exemplos reais de cálculo de ITBI em diferentes faixas de valor:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Exemplo 1 */}
                <div className="bg-white border-2 border-[#8B6F4B]/20 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Apartamento R$ 2 milhões</h4>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Localização:</strong> Jardim Europa, São Paulo</p>
                    <p><strong>Valor de compra:</strong> R$ 2.000.000</p>
                    <p><strong>Valor venal:</strong> R$ 1.750.000</p>
                    <p><strong>Base de cálculo:</strong> R$ 2.000.000 (maior)</p>
                    <p><strong>Alíquota:</strong> 3%</p>
                    <p className="pt-3 border-t border-gray-200">
                      <strong className="text-[#8B6F4B] text-lg">ITBI: R$ 60.000</strong>
                    </p>
                  </div>
                </div>

                {/* Exemplo 2 */}
                <div className="bg-white border-2 border-[#8B6F4B]/20 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Cobertura R$ 5 milhões</h4>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Localização:</strong> Vila Nova Conceição, SP</p>
                    <p><strong>Valor de compra:</strong> R$ 5.000.000</p>
                    <p><strong>Valor venal:</strong> R$ 4.200.000</p>
                    <p><strong>Base de cálculo:</strong> R$ 5.000.000 (maior)</p>
                    <p><strong>Alíquota:</strong> 3%</p>
                    <p className="pt-3 border-t border-gray-200">
                      <strong className="text-[#8B6F4B] text-lg">ITBI: R$ 150.000</strong>
                    </p>
                  </div>
                </div>

                {/* Exemplo 3 */}
                <div className="bg-white border-2 border-[#8B6F4B]/20 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Casa R$ 8 milhões</h4>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Localização:</strong> Alto de Pinheiros, SP</p>
                    <p><strong>Valor de compra:</strong> R$ 8.000.000</p>
                    <p><strong>Valor venal:</strong> R$ 6.800.000</p>
                    <p><strong>Base de cálculo:</strong> R$ 8.000.000 (maior)</p>
                    <p><strong>Alíquota:</strong> 3%</p>
                    <p className="pt-3 border-t border-gray-200">
                      <strong className="text-[#8B6F4B] text-lg">ITBI: R$ 240.000</strong>
                    </p>
                  </div>
                </div>

                {/* Exemplo 4 */}
                <div className="bg-white border-2 border-[#8B6F4B]/20 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Mansão R$ 15 milhões</h4>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Localização:</strong> Cidade Jardim, São Paulo</p>
                    <p><strong>Valor de compra:</strong> R$ 15.000.000</p>
                    <p><strong>Valor venal:</strong> R$ 12.500.000</p>
                    <p><strong>Base de cálculo:</strong> R$ 15.000.000 (maior)</p>
                    <p><strong>Alíquota:</strong> 3%</p>
                    <p className="pt-3 border-t border-gray-200">
                      <strong className="text-[#8B6F4B] text-lg">ITBI: R$ 450.000</strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
                Isenções e Imunidades do ITBI
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Existem situações específicas em que o ITBI pode ser isento ou ter imunidade tributária. Conhecer essas possibilidades pode gerar economia significativa:
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-green-900 mb-3">✓ Casos de Isenção</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl font-bold">•</span>
                      <span><strong>Programas habitacionais:</strong> compra através do Minha Casa Minha Vida (até limite de valor)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl font-bold">•</span>
                      <span><strong>Primeiro imóvel:</strong> algumas cidades oferecem isenção para primeira compra até determinado valor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl font-bold">•</span>
                      <span><strong>Deficiência física:</strong> pessoas com deficiência podem ter isenção em alguns municípios</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">✓ Casos de Imunidade</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl font-bold">•</span>
                      <span><strong>Herança e doação:</strong> não há cobrança de ITBI, apenas ITCMD (imposto estadual)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl font-bold">•</span>
                      <span><strong>Integralização de capital:</strong> imóvel incorporado ao patrimônio de empresa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 text-xl font-bold">•</span>
                      <span><strong>Entidades religiosas e filantrópicas:</strong> quando relacionado às suas finalidades</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-red-900 mb-2">Cuidado</p>
                    <p className="text-red-800 text-sm">
                      <strong>Em imóveis de alto padrão, dificilmente haverá isenção de ITBI.</strong> As isenções costumam ter limites de valor muito abaixo dos preços praticados no mercado de luxo.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
                Como Pagar o ITBI: Passo a Passo
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                O processo de pagamento do ITBI segue um fluxo específico que deve ser cumprido antes do registro da escritura:
              </p>

              <div className="space-y-4">
                {[
                  {
                    numero: "1",
                    titulo: "Escritura de Compra e Venda",
                    descricao: "Após assinatura da escritura no cartório, você receberá a declaração para ITBI"
                  },
                  {
                    numero: "2",
                    titulo: "Cadastro no Sistema Municipal",
                    descricao: "Acesse o site da prefeitura e cadastre a transação com os dados da escritura"
                  },
                  {
                    numero: "3",
                    titulo: "Emissão da Guia",
                    descricao: "O sistema calculará o ITBI e emitirá a guia de recolhimento (DAM)"
                  },
                  {
                    numero: "4",
                    titulo: "Pagamento",
                    descricao: "Pague a guia no banco ou via internet banking até o vencimento"
                  },
                  {
                    numero: "5",
                    titulo: "Comprovação",
                    descricao: "Após compensação, baixe o comprovante de quitação no sistema"
                  },
                  {
                    numero: "6",
                    titulo: "Registro no Cartório",
                    descricao: "Apresente o comprovante no cartório para registro da transferência"
                  }
                ].map((passo, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B]/50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8B6F4B] to-[#6d5839] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {passo.numero}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{passo.titulo}</h3>
                      <p className="text-gray-700">{passo.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-yellow-900 mb-2">Prazo de Pagamento</p>
                    <p className="text-yellow-800 text-sm">
                      Em São Paulo, o prazo para pagamento do ITBI é de <strong>30 dias após a lavratura da escritura</strong>. Pagamentos em atraso estão sujeitos a multa e juros.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
                Estratégias Legais para Reduzir o ITBI
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Existem estratégias legais que podem resultar em economia no pagamento do ITBI. Veja as principais:
              </p>

              <div className="space-y-6">
                <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Revisão do Valor Venal</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Se o valor venal estiver muito acima do valor de mercado, é possível contestar administrativamente através de processo de impugnação. Isso pode reduzir a base de cálculo em casos onde o valor de compra seja menor que o venal.
                  </p>
                  <p className="text-sm text-[#8B6F4B] font-semibold">
                    Economia potencial: 10% a 30% do ITBI em casos específicos
                  </p>
                </div>

                <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Separação de Bens Móveis</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Em imóveis decorados de alto padrão, móveis planejados e equipamentos de luxo podem ser destacados do valor do imóvel. O ITBI incide apenas sobre bens imóveis, não sobre móveis.
                  </p>
                  <p className="text-sm text-[#8B6F4B] font-semibold">
                    Economia potencial: até R$ 30 mil em imóveis com decoração premium
                  </p>
                </div>

                <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Estruturação via Holdings</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Para múltiplas transações, a estruturação através de holdings patrimoniais pode otimizar a carga tributária total. Consulte um planejador tributário para análise do seu caso.
                  </p>
                  <p className="text-sm text-[#8B6F4B] font-semibold">
                    Economia potencial: variável conforme estrutura patrimonial
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-red-900 mb-2">Alerta Legal</p>
                    <p className="text-red-800 text-sm">
                      <strong>Nunca subdeclare o valor do imóvel para pagar menos ITBI.</strong> Isso é crime de sonegação fiscal e pode resultar em multas pesadas, processos criminais e impossibilidade de deduzir o valor real para cálculo de ganho de capital futuro.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 7 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
                ITBI vs ITCMD: Qual a Diferença?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                É comum haver confusão entre ITBI e ITCMD. Entenda as diferenças:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#8B6F4B]/5 border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#8B6F4B] mb-4">ITBI</h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-[#8B6F4B] mr-2">•</span>
                      <span><strong>Natureza:</strong> Imposto municipal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#8B6F4B] mr-2">•</span>
                      <span><strong>Incide sobre:</strong> Compra e venda onerosa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#8B6F4B] mr-2">•</span>
                      <span><strong>Quem paga:</strong> Comprador</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#8B6F4B] mr-2">•</span>
                      <span><strong>Alíquota SP:</strong> 3%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#8B6F4B] mr-2">•</span>
                      <span><strong>Quando pagar:</strong> Antes do registro</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-700 mb-4">ITCMD</h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      <span><strong>Natureza:</strong> Imposto estadual</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      <span><strong>Incide sobre:</strong> Herança e doação</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      <span><strong>Quem paga:</strong> Herdeiro/donatário</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      <span><strong>Alíquota SP:</strong> 4%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      <span><strong>Quando pagar:</strong> Prazo conforme processo</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-blue-900 mb-2">Importante Saber</p>
                    <p className="text-blue-800 text-sm">
                      <strong>Em herança não se paga ITBI, apenas ITCMD.</strong> Já em doação, dependendo da estrutura, pode haver incidência de ambos os impostos. Consulte um advogado tributarista para planejamento sucessório adequado.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 8 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
                Perguntas Frequentes sobre ITBI
              </h2>

              <div className="space-y-4">
                {[
                  {
                    pergunta: "Posso parcelar o ITBI?",
                    resposta: "Em São Paulo, o ITBI deve ser pago à vista. Não há possibilidade de parcelamento. Alguns municípios do interior oferecem parcelamento, mas com juros."
                  },
                  {
                    pergunta: "O que acontece se não pagar o ITBI?",
                    resposta: "Sem o ITBI pago, não é possível registrar a transferência do imóvel no cartório. Além disso, haverá multa de 20% sobre o valor devido mais juros de 1% ao mês."
                  },
                  {
                    pergunta: "ITBI entra no financiamento?",
                    resposta: "Não. O ITBI deve ser pago com recursos próprios do comprador. Os bancos não financiam impostos, apenas o valor do imóvel."
                  },
                  {
                    pergunta: "Posso deduzir o ITBI do Imposto de Renda?",
                    resposta: "Não. O ITBI não é dedutível na declaração de IR. Porém, ele compõe o custo de aquisição do imóvel para cálculo de ganho de capital em venda futura."
                  },
                  {
                    pergunta: "Quem paga o ITBI: comprador ou vendedor?",
                    resposta: "Por lei, o ITBI é responsabilidade do comprador. No entanto, as partes podem negociar no contrato que o vendedor assuma esse custo."
                  }
                ].map((faq, index) => (
                  <details key={index} className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#8B6F4B]/50 transition-colors">
                    <summary className="cursor-pointer p-6 font-semibold text-gray-900 flex items-center justify-between">
                      <span>{faq.pergunta}</span>
                      <svg className="w-5 h-5 text-[#8B6F4B] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-gray-700 border-t border-gray-100 pt-4">
                      {faq.resposta}
                    </div>
                  </details>
                ))}
              </div>
            </section>

          </div>

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
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Artigos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {artigosRelacionados.map((artigo, index) => (
                <Link
                  key={index}
                  href={artigo.url}
                  className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
                >
                  <span className="inline-block px-3 py-1 bg-[#8B6F4B]/10 text-[#8B6F4B] text-xs font-semibold rounded-full mb-3">
                    {artigo.categoria}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8B6F4B] transition-colors mb-2">
                    {artigo.titulo}
                  </h3>
                  <span className="text-[#8B6F4B] text-sm font-semibold inline-flex items-center gap-1">
                    Ler artigo
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>                
          </section>
        </div>     
      </article>
     <Footer />          
     </>
  );
}
