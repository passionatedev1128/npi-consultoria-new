import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, Building2, Clock, DollarSign, AlertTriangle, CheckCircle2, Calculator, TrendingUp, XCircle, Shield } from "lucide-react";

export default function ComprarImovelPJouPFPage() {
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
              <span className="text-[#8B6F4B] font-medium">PJ ou PF</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" />
              Tributação e Impostos
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Comprar Imóvel como PJ ou PF: O que é Mais Vantajoso?
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Análise tributária completa para investidores e empresários. Descubra quando vale a pena comprar imóveis como pessoa jurídica e quanto você pode economizar.
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
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-[#8B6F4B]">Depende do objetivo.</strong> Para <strong>uso próprio ou 1 imóvel de aluguel</strong>, PF é mais simples e vantajoso. Para <strong>múltiplos imóveis de renda</strong> (3+), PJ pode economizar até 40% em impostos através de tributação pelo Lucro Presumido. Para <strong>patrimônio familiar acima de R$ 5 milhões</strong>, holding patrimonial facilita sucessão e protege bens. A economia fiscal compensa custos de manutenção a partir de R$ 15-20 mil/mês de aluguel.
                </p>
                <div className="bg-white/80 rounded-lg p-4 border border-[#8B6F4B]/20">
                  <p className="text-sm text-gray-600 mb-2"><strong>Resumo prático:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Uso próprio:</strong> PF (sempre)</li>
                    <li>• <strong>1-2 aluguéis:</strong> PF (mais simples)</li>
                    <li>• <strong>3+ aluguéis:</strong> PJ (economia fiscal)</li>
                    <li>• <strong>Patrimônio familiar:</strong> Holding (sucessão)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Diferenças Fundamentais entre PJ e PF
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A escolha entre <strong>pessoa física (PF)</strong> e <strong>pessoa jurídica (PJ)</strong> na compra de imóveis impacta diretamente sua carga tributária, custos operacionais e planejamento sucessório.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Pessoa Física (PF)
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Compra direta em seu nome (CPF). Modalidade tradicional usada pela maioria das pessoas.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Simplicidade:</strong> Processo de compra mais rápido</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Financiamento:</strong> Taxas menores e condições melhores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span><strong>Custos:</strong> Apenas ITBI e escritura</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>IR Aluguel:</strong> Até 27,5% (tabela progressiva)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Ganho Capital:</strong> 15% a 22,5% na venda</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#8B6F4B]/5 border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#8B6F4B] mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Pessoa Jurídica (PJ)
                </h3>
                <p className="text-gray-700 mb-4 text-sm">
                  Compra através de empresa (CNPJ). Requer estrutura empresarial ativa.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>IR Aluguel:</strong> 11,33% (Lucro Presumido)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Deduções:</strong> Despesas operacionais reduzem base</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Sucessão:</strong> Transferência de quotas (sem inventário)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Complexidade:</strong> Contabilidade obrigatória</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Custos:</strong> R$ 500-2.000/mês (contador + taxas)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seção 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Comparação Tributária: PJ vs PF
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A maior diferença está na <strong>tributação de aluguéis</strong>. Veja a comparação detalhada:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead className="bg-[#8B6F4B] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Tributação</th>
                    <th className="px-6 py-3 text-left font-semibold">Pessoa Física (PF)</th>
                    <th className="px-6 py-3 text-left font-semibold">Pessoa Jurídica (PJ)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Aluguel Mensal</td>
                    <td className="px-6 py-4 text-gray-700">Tabela progressiva IR<br/><span className="text-sm">(7,5% a 27,5%)</span></td>
                    <td className="px-6 py-4 text-green-600 font-semibold">11,33% fixo<br/><span className="text-sm">(Lucro Presumido)</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Venda (Ganho Capital)</td>
                    <td className="px-6 py-4 text-gray-700">15% a 22,5%<br/><span className="text-sm">(progressivo)</span></td>
                    <td className="px-6 py-4 text-gray-700">34% total<br/><span className="text-sm">(IRPJ + CSLL + PIS/COFINS)</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">ITBI na Compra</td>
                    <td className="px-6 py-4 text-gray-700">3% (SP)</td>
                    <td className="px-6 py-4 text-gray-700">3% (SP)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Deduções</td>
                    <td className="px-6 py-4 text-gray-700">Limitadas (INSS, dependentes)</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Amplas (todas despesas)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">IPTU</td>
                    <td className="px-6 py-4 text-gray-700">Não dedutível</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Dedutível 100%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">Reformas</td>
                    <td className="px-6 py-4 text-gray-700">Não dedutível</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">Dedutível 100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <div className="flex items-start gap-3">
                <Calculator className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Ponto de Atenção</p>
                  <p className="text-blue-800 text-sm">
                    <strong>Venda de imóveis é MAIS CARA em PJ</strong> (34% vs 15-22,5%). Por isso, a estratégia ideal é: <strong>PJ para renda de aluguel</strong> e <strong>PF para valorização/venda</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Exemplo Prático: Economia Real em PJ
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Veja quanto você economiza (ou não) em diferentes cenários:
            </p>

            <div className="space-y-6">
              {/* Cenário 1 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Aluguel de R$ 5.000/mês (1 imóvel)</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-sm mb-2">Pessoa Física (PF):</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Receita anual: R$ 60.000</li>
                      <li>• IR (27,5%): <strong className="text-red-600">R$ 16.500</strong></li>
                      <li>• Custos: R$ 0</li>
                      <li className="pt-2 border-t border-blue-200">
                        <strong>Líquido: R$ 43.500</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#8B6F4B]/10 rounded-lg p-4">
                    <p className="font-semibold text-sm mb-2">Pessoa Jurídica (PJ):</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Receita anual: R$ 60.000</li>
                      <li>• Impostos (11,33%): <strong className="text-green-600">R$ 6.800</strong></li>
                      <li>• Contabilidade: <strong className="text-red-600">R$ 12.000</strong></li>
                      <li className="pt-2 border-t border-[#8B6F4B]/30">
                        <strong>Líquido: R$ 41.200</strong>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-red-900">
                    ❌ <strong>Resultado: PF é melhor</strong> (economia de R$ 2.300/ano com PF)
                  </p>
                  <p className="text-xs text-red-800 mt-1">
                    Custos de manutenção da PJ superam economia fiscal
                  </p>
                </div>
              </div>

              {/* Cenário 2 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Aluguel de R$ 20.000/mês (3-4 imóveis)</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-sm mb-2">Pessoa Física (PF):</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Receita anual: R$ 240.000</li>
                      <li>• IR (27,5%): <strong className="text-red-600">R$ 66.000</strong></li>
                      <li>• Custos: R$ 0</li>
                      <li className="pt-2 border-t border-blue-200">
                        <strong>Líquido: R$ 174.000</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#8B6F4B]/10 rounded-lg p-4">
                    <p className="font-semibold text-sm mb-2">Pessoa Jurídica (PJ):</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Receita anual: R$ 240.000</li>
                      <li>• Impostos (11,33%): <strong className="text-green-600">R$ 27.200</strong></li>
                      <li>• Contabilidade: <strong>R$ 18.000</strong></li>
                      <li className="pt-2 border-t border-[#8B6F4B]/30">
                        <strong>Líquido: R$ 194.800</strong>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-900">
                    ✅ <strong>Resultado: PJ é melhor</strong> (economia de R$ 20.800/ano = 12% a mais)
                  </p>
                  <p className="text-xs text-green-800 mt-1">
                    Economia fiscal supera custos operacionais
                  </p>
                </div>
              </div>

              {/* Cenário 3 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Aluguel de R$ 50.000/mês (8-10 imóveis)</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="font-semibold text-sm mb-2">Pessoa Física (PF):</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Receita anual: R$ 600.000</li>
                      <li>• IR (27,5%): <strong className="text-red-600">R$ 165.000</strong></li>
                      <li>• Custos: R$ 0</li>
                      <li className="pt-2 border-t border-blue-200">
                        <strong>Líquido: R$ 435.000</strong>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#8B6F4B]/10 rounded-lg p-4">
                    <p className="font-semibold text-sm mb-2">Pessoa Jurídica (PJ):</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Receita anual: R$ 600.000</li>
                      <li>• Impostos (11,33%): <strong className="text-green-600">R$ 68.000</strong></li>
                      <li>• Contabilidade: <strong>R$ 24.000</strong></li>
                      <li className="pt-2 border-t border-[#8B6F4B]/30">
                        <strong>Líquido: R$ 508.000</strong>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-900">
                    ✅ <strong>Resultado: PJ é MUITO melhor</strong> (economia de R$ 73.000/ano = 17% a mais!)
                  </p>
                  <p className="text-xs text-green-800 mt-1">
                    Economia de mais de R$ 6.000/mês com estrutura PJ
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-yellow-900 mb-2">Ponto de Virada</p>
                  <p className="text-yellow-800 text-sm">
                    A partir de <strong>R$ 15-20 mil/mês de aluguel</strong>, a PJ começa a valer a pena. Abaixo disso, a simplicidade da PF compensa a diferença tributária.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Tipos de Empresa para Imóveis
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Se optar por PJ, existem diferentes tipos societários. Veja qual se encaixa melhor:
            </p>

            <div className="space-y-6">
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#8B6F4B] mb-4">1. Holding Patrimonial (LTDA)</h3>
                <p className="text-gray-700 mb-4">
                  Empresa criada especificamente para <strong>administrar patrimônio familiar</strong>. Ideal para planejamento sucessório.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-sm mb-2 text-green-900">✅ Vantagens:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Sucessão por quotas (sem inventário)</li>
                      <li>• Proteção patrimonial familiar</li>
                      <li>• Tributação otimizada (11,33%)</li>
                      <li>• Blindagem contra credores pessoais</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <p className="font-semibold text-sm mb-2 text-red-900">❌ Desvantagens:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Complexidade na estruturação</li>
                      <li>• Custos de R$ 1.500-3.000/mês</li>
                      <li>• Venda de imóveis mais cara (34%)</li>
                      <li>• Exige planejamento profissional</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#8B6F4B] mb-4">2. SPE (Sociedade de Propósito Específico)</h3>
                <p className="text-gray-700 mb-4">
                  Empresa criada para <strong>um único empreendimento</strong>. Comum em grandes projetos ou compra de imóveis comerciais.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Quando usar:</strong> Compra de shopping, prédio comercial ou condomínio específico. Isolamento de risco do projeto. Facilita captação de investidores.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#8B6F4B] mb-4">3. Imobiliária (LTDA ou EIRELI)</h3>
                <p className="text-gray-700 mb-4">
                  Empresa com atividade de <strong>compra, venda e locação</strong> de imóveis. Para investidores profissionais.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Quando usar:</strong> Volume alto de transações (compra e venda regular). Necessidade de emitir notas fiscais. Expansão com financiamento empresarial.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Custos de Manter uma PJ Imobiliária
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Além da economia tributária, é essencial considerar os <strong>custos fixos mensais</strong> de uma PJ:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead className="bg-[#8B6F4B] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Despesa</th>
                    <th className="px-6 py-3 text-left font-semibold">Valor Mensal</th>
                    <th className="px-6 py-3 text-left font-semibold">Anual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Contador (contabilidade completa)</td>
                    <td className="px-6 py-4 text-gray-700">R$ 500 - 2.000</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 6k - 24k</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Certificado Digital (e-CNPJ)</td>
                    <td className="px-6 py-4 text-gray-700">-</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 200</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Taxas bancárias (conta PJ)</td>
                    <td className="px-6 py-4 text-gray-700">R$ 50 - 150</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 600 - 1.800</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Alvará de funcionamento</td>
                    <td className="px-6 py-4 text-gray-700">-</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 500</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700">Licenças e registros</td>
                    <td className="px-6 py-4 text-gray-700">-</td>
                    <td className="px-6 py-4 text-[#8B6F4B] font-bold">R$ 300</td>
                  </tr>
                  <tr className="bg-[#8B6F4B]/10">
                    <td className="px-6 py-4 font-bold text-gray-900">Total Estimado</td>
                    <td className="px-6 py-4 font-bold text-gray-900">R$ 550 - 2.150</td>
                    <td className="px-6 py-4 font-bold text-[#8B6F4B] text-lg">R$ 7.600 - 26.800</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <div className="flex items-start gap-3">
                <Calculator className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 mb-2">Custo Médio Real</p>
                  <p className="text-blue-800 text-sm">
                    Para uma holding bem estruturada, espere gastar entre <strong>R$ 1.000 a R$ 2.000/mês</strong> com manutenção. Isso representa R$ 12-24 mil/ano que precisam ser cobertos pela economia fiscal.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Quando Vale a Pena Cada Opção
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Escolha PF (Pessoa Física) se:
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>Vai <strong>morar no imóvel</strong> (uso próprio sempre é PF)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>Possui <strong>1-2 imóveis</strong> de aluguel apenas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>Renda de aluguel <strong>abaixo de R$ 15 mil/mês</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>Pretende <strong>vender em breve</strong> (ganho de capital menor)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>Quer <strong>simplicidade</strong> e menos burocracia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span>Precisa de <strong>financiamento bancário</strong> (taxas menores)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#8B6F4B]/10 border-2 border-[#8B6F4B] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#8B6F4B] mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  Escolha PJ (Pessoa Jurídica) se:
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-3">✓</span>
                    <span>Possui <strong>3+ imóveis</strong> gerando aluguel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-3">✓</span>
                    <span>Renda de aluguel <strong>acima de R$ 15-20 mil/mês</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-3">✓</span>
                    <span>Foco em <strong>renda passiva de longo prazo</strong> (não venda)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-3">✓</span>
                    <span>Patrimônio familiar <strong>acima de R$ 5 milhões</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-3">✓</span>
                    <span>Quer <strong>planejamento sucessório</strong> estruturado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-3">✓</span>
                    <span>Precisa de <strong>blindagem patrimonial</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F4B] mr-3">✓</span>
                    <span>Aceita <strong>complexidade contábil</strong> pela economia fiscal</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seção 7 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Armadilhas Comuns ao Comprar como PJ
            </h2>
            
            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  1. Criar PJ só pela economia fiscal (sem estrutura)
                </h4>
                <p className="text-sm text-gray-700">
                  Muitos criam empresa para "pagar menos imposto" mas não têm estrutura contábil adequada. Resultado: multas, problemas com Receita Federal e custos maiores que economia.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  2. Usar PJ para imóvel de uso próprio
                </h4>
                <p className="text-sm text-gray-700">
                  Se você mora no imóvel, não há renda para compensar custos da PJ. Além disso, perde benefícios fiscais de PF (isenção de ganho de capital em única propriedade).
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  3. Esquecer que venda é mais cara em PJ
                </h4>
                <p className="text-sm text-gray-700">
                  Ganho de capital em PJ é 34% vs 15-22,5% em PF. Se planeja vender em 5-10 anos, PF pode ser melhor mesmo com IR maior no aluguel.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  4. Não considerar custos de manutenção
                </h4>
                <p className="text-sm text-gray-700">
                  Contador, taxas bancárias, obrigações acessórias custam R$ 12-24 mil/ano. Precisa gerar economia maior que isso para valer a pena.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  5. Comprar sem planejamento profissional
                </h4>
                <p className="text-sm text-gray-700">
                  Estruturar PJ errado pode gerar problemas irreversíveis. Consulte contador especializado e advogado tributarista ANTES de abrir empresa.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 8 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Perguntas Frequentes
            </h2>

            <div className="space-y-4">
              {[
                {
                  pergunta: "Posso transferir imóvel de PF para PJ depois?",
                  resposta: "Sim, é possível integralizar o imóvel ao capital social da empresa. Porém, essa transferência paga ITBI (3% em SP). Além disso, futura venda será tributada em 34% (PJ). Planeje desde a compra."
                },
                {
                  pergunta: "Holding familiar realmente evita inventário?",
                  resposta: "Sim. Na holding, os herdeiros recebem quotas da empresa, não os imóveis diretamente. A sucessão é regida pelo contrato social, sem necessidade de inventário judicial (que pode durar anos)."
                },
                {
                  pergunta: "Posso misturar imóveis PF e PJ?",
                  resposta: "Perfeitamente possível e até recomendado! Use PF para imóveis que planeja vender e PJ para imóveis de renda de longo prazo. É a estratégia mais inteligente."
                },
                {
                  pergunta: "MEI pode alugar imóveis?",
                  resposta: "Não. MEI não pode ter atividade de locação de imóveis próprios. Você precisará abrir como empresa normal (LTDA) no Lucro Presumido ou Real."
                },
                {
                  pergunta: "Banco financia imóvel para PJ?",
                  resposta: "Sim, mas as condições são diferentes. Taxas costumam ser 1-2 p.p. maiores que PF, prazo menor (até 20 anos) e exigência de garantias adicionais. Para PJ, compra à vista costuma ser melhor."
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
              A decisão entre <strong>PJ e PF</strong> não tem resposta única. Depende do seu volume de imóveis, renda de aluguel, horizonte de investimento e objetivos patrimoniais.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Como regra geral: <strong>até 2 imóveis de aluguel, PF é melhor pela simplicidade</strong>. A partir de 3+ imóveis e renda acima de R$ 15-20 mil/mês, a economia fiscal da PJ começa a compensar os custos operacionais.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para <strong>patrimônios familiares significativos</strong> (acima de R$ 5 milhões), a holding patrimonial oferece vantagens que vão além da economia fiscal: planejamento sucessório, proteção patrimonial e governança familiar estruturada.
            </p>
            <p className="text-gray-700 leading-relaxed">
              O mais importante: <strong>não tome essa decisão sozinho</strong>. Consulte contador especializado em tributação imobiliária e advogado tributarista para estruturar da forma mais eficiente. O investimento em consultoria sempre se paga pela economia e segurança jurídica.
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
                href="/guia/itcmd-heranca-doacao-imoveis"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Shield className="w-4 h-4" />
                  Tributação
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  ITCMD em Heranças e Doações
                </h4>
                <p className="text-sm text-gray-600">
                  Planejamento sucessório e tributação em imóveis de alto valor
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
                  Como declarar imóveis no IR e calcular ganho de capital
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
