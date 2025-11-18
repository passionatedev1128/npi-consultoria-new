import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, TrendingUp, DollarSign, Shield, BarChart3, AlertTriangle, Target, Award, TrendingDown } from "lucide-react";

export default function InvestimentoImoveisLuxoPage() {
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
              <span className="text-[#8B6F4B] font-medium">Investimento em Imóveis de Luxo</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              Antes de Investir
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Investimento em Imóveis de Luxo: Vale a Pena?
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Análise completa sobre rentabilidade, valorização histórica e proteção patrimonial em investimentos 
              acima de R$ 1 milhão no mercado imobiliário de alto padrão.
            </p>
          </header>

          {/* Box de Resposta Direta */}
          <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Sim, vale a pena</strong> – desde que você invista com estratégia, escolha a localização correta 
                  e tenha horizonte de longo prazo (mínimo 5 anos). Imóveis de luxo em São Paulo apresentaram 
                  <strong> valorização média de 8-12% ao ano</strong> nos últimos 15 anos, 
                  superando a inflação e oferecendo proteção patrimonial superior a muitas alternativas.
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              A decisão de investir entre <strong>R$ 1 milhão e R$ 65 milhões</strong> em um imóvel 
              de alto padrão transcende questões meramente financeiras. Trata-se de uma escolha estratégica que combina 
              proteção patrimonial, geração de renda passiva, benefícios fiscais e, frequentemente, realização pessoal.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nos últimos 20 anos, o mercado imobiliário de luxo em São Paulo demonstrou resiliência excepcional, 
              mantendo valorização consistente mesmo durante crises econômicas. Bairros como <strong>Jardim Europa, 
              Itaim Bibi e Vila Nova Conceição</strong> registraram valorização acumulada de 180% a 350% no período, 
              muito acima da inflação de 157% (IPCA).
            </p>
          </section>

          {/* Seção 1 - Rentabilidade */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Rentabilidade: Os Números Reais
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Valorização Histórica (2010-2025)
            </h3>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#8B6F4B] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Bairro</th>
                    <th className="px-6 py-4 text-right font-semibold">Valorização</th>
                    <th className="px-6 py-4 text-right font-semibold">% ao Ano</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">Jardim Europa</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">+285%</td>
                    <td className="px-6 py-4 text-right">~9,5%</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">Itaim Bibi</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">+320%</td>
                    <td className="px-6 py-4 text-right">~10,2%</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">Vila Nova Conceição</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">+295%</td>
                    <td className="px-6 py-4 text-right">~9,8%</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">Moema</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">+245%</td>
                    <td className="px-6 py-4 text-right">~8,6%</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">Alto de Pinheiros</td>
                    <td className="px-6 py-4 text-right font-bold text-green-600">+265%</td>
                    <td className="px-6 py-4 text-right">~9,1%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold">IPCA (Inflação)</td>
                    <td className="px-6 py-4 text-right font-bold text-red-600">+157%</td>
                    <td className="px-6 py-4 text-right font-bold">~6,4%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Conclusão:</strong> Imóveis de alto padrão superaram a inflação em <strong className="text-[#8B6F4B]">88 a 163 
              pontos percentuais</strong> no período, demonstrando excelente proteção contra desvalorização monetária.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Renda por Locação
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Imóveis de luxo para locação em bairros nobres apresentam:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Yield bruto:</strong> 0,3% a 0,5% ao mês (3,6% a 6% ao ano)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Perfil de inquilino:</strong> Executivos, diplomatas, empresários estrangeiros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Vacância:</strong> Baixíssima em localizações premium (média de 2-4% ao ano)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Contratos:</strong> Geralmente 12-24 meses, com garantias sólidas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Valorização + Renda:</strong> Retorno total pode chegar a 12-15% ao ano</span>
              </li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-2">Exemplo Prático:</h4>
              <p className="text-gray-700 text-sm mb-2">
                Apartamento de R$ 3 milhões no Itaim Bibi:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Aluguel mensal: R$ 12.000 a R$ 15.000</li>
                <li>• Renda anual: R$ 144.000 a R$ 180.000 (4,8% a 6%)</li>
                <li>• Valorização anual: ~10% = R$ 300.000</li>
                <li>• <strong className="text-[#8B6F4B]">Retorno total: R$ 444.000 a R$ 480.000/ano (14,8% a 16%)</strong></li>
              </ul>
            </div>
          </section>

          {/* Seção 2 - Comparação com Outros Investimentos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Imóveis vs Outros Investimentos
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#8B6F4B] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Investimento</th>
                    <th className="px-6 py-4 text-right font-semibold">Retorno/Ano</th>
                    <th className="px-6 py-4 text-right font-semibold">Liquidez</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-[#8B6F4B]">Imóvel Luxo (SP)</td>
                    <td className="px-6 py-4 text-right font-bold text-[#8B6F4B]">12-16%*</td>
                    <td className="px-6 py-4 text-right">Baixa/Média</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">Tesouro IPCA+</td>
                    <td className="px-6 py-4 text-right">IPCA + 6%</td>
                    <td className="px-6 py-4 text-right">Alta</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">CDB</td>
                    <td className="px-6 py-4 text-right">11-13%</td>
                    <td className="px-6 py-4 text-right">Média</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">Ações (Ibovespa)</td>
                    <td className="px-6 py-4 text-right">8-18%</td>
                    <td className="px-6 py-4 text-right">Alta</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">Fundos Imobiliários</td>
                    <td className="px-6 py-4 text-right">9-14%</td>
                    <td className="px-6 py-4 text-right">Alta</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">Poupança</td>
                    <td className="px-6 py-4 text-right text-red-600">~7%</td>
                    <td className="px-6 py-4 text-right">Alta</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-4">* Valorização + renda de locação</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Vantagens dos Imóveis de Luxo
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700 text-sm">
                  <strong>Tangibilidade:</strong> Ativo físico que você pode usar, morar ou visitar
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700 text-sm">
                  <strong>Proteção inflacionária:</strong> Aluguéis e valores se ajustam automaticamente pela inflação
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700 text-sm">
                  <strong>Diversificação:</strong> Descorrelação com mercado de ações e renda fixa
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700 text-sm">
                  <strong>Alavancagem:</strong> Possibilidade de financiamento com taxas competitivas
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700 text-sm">
                  <strong>Benefícios fiscais:</strong> Depreciação, dedução de despesas, isenção parcial de IR
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-gray-700 text-sm">
                  <strong>Herança:</strong> Facilita planejamento sucessório e transferência patrimonial
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Desvantagens a Considerar
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span className="text-gray-700 text-sm">
                  <strong>Baixa liquidez:</strong> Venda pode levar 3-12 meses em condições normais
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span className="text-gray-700 text-sm">
                  <strong>Custos de transação:</strong> ITBI (2-3%), corretagem (6%), escritura (~1%)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span className="text-gray-700 text-sm">
                  <strong>Manutenção:</strong> Condomínio, IPTU, reformas (1-2% do valor ao ano)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span className="text-gray-700 text-sm">
                  <strong>Investimento mínimo alto:</strong> Barreira de entrada significativa
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span className="text-gray-700 text-sm">
                  <strong>Concentração:</strong> Grande parte do patrimônio em um único ativo
                </span>
              </li>
            </ul>
          </section>

          {/* Seção 3 - Proteção Patrimonial */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Proteção Patrimonial e Hedge Contra Crises
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Imóveis de alto padrão se destacam como <strong>reserva de valor</strong> em momentos de turbulência econômica:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Performance em Crises Recentes
            </h3>

            <div className="space-y-4 mb-6">
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Crise de 2008-2009 (Subprime)</h4>
                <p className="text-gray-700 text-sm">
                  Enquanto imóveis nos EUA despencaram 30-40%, o mercado de luxo em SP manteve estabilidade, 
                  com <strong className="text-[#8B6F4B]">queda máxima de 8%</strong> e recuperação total em 18 meses.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Recessão 2014-2016</h4>
                <p className="text-gray-700 text-sm">
                  PIB brasileiro caiu 7%. Imóveis de luxo em bairros nobres <strong className="text-[#8B6F4B]">valorizaram 
                  12% no período</strong>, servindo como porto seguro para investidores.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2">Pandemia COVID-19 (2020-2021)</h4>
                <p className="text-gray-700 text-sm">
                  Demanda por imóveis de alto padrão <strong className="text-[#8B6F4B]">explodiu +35%</strong>, 
                  com fuga para ativos reais. Valorização média de 18% em 2020-2021.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Por Que Imóveis de Luxo São Resilientes?
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>Escassez:</strong> Oferta limitada em localizações premium cria demanda constante
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>Público estável:</strong> Compradores de alto patrimônio menos afetados por crises
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>Uso próprio:</strong> Muitos adquirem para morar, não apenas investir
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>Ativo real:</strong> Tangível, impossível de "sumir" como ativos financeiros
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>Mercado global:</strong> Atrai compradores estrangeiros que veem Brasil como oportunidade
                </span>
              </li>
            </ul>
          </section>

          {/* Seção 4 - Riscos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              Riscos e Como Mitigá-los
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-2">
                  ⚠️ Risco 1: Escolha Errada de Localização
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Problema:</strong> Bairro desvaloriza ou perde status premium.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong className="text-[#8B6F4B]">Mitigação:</strong> Foque em bairros consolidados há 30+ anos 
                  (Jardins, Itaim, Vila Nova). Evite áreas em "transformação" sem garantias.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-2">
                  ⚠️ Risco 2: Liquidez em Momento de Necessidade
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Problema:</strong> Precisar vender rápido e aceitar deságio de 15-25%.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong className="text-[#8B6F4B]">Mitigação:</strong> Mantenha reserva de emergência equivalente 
                  a 12-24 meses de despesas. Nunca invista 100% do patrimônio líquido.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-2">
                  ⚠️ Risco 3: Problemas Jurídicos e Documentação
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Problema:</strong> Descobrir ônus, dívidas ou irregularidades após compra.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong className="text-[#8B6F4B]">Mitigação:</strong> Invista em due diligence completa. 
                  Contrate advogado especializado. Exija certidões negativas atualizadas.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-2">
                  ⚠️ Risco 4: Custos Ocultos Subestimados
                </h4>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Problema:</strong> Condomínio, IPTU, reformas consomem mais que o esperado.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong className="text-[#8B6F4B]">Mitigação:</strong> Calcule 1,5-2% do valor do imóvel/ano 
                  para manutenção. Some condomínio + IPTU na análise de retorno.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 5 - Perfil Ideal */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Perfil Ideal do Investidor
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Investir em imóveis de luxo faz sentido se você se identifica com este perfil:
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">✅ Você Deve Investir Se:</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Tem patrimônio líquido acima de R$ 3 milhões (imóvel deve ser 30-50% do total)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Horizonte de investimento de 5-10+ anos (longo prazo)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Busca diversificação fora de renda fixa e ações</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Quer proteção contra inflação e crises</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Pode eventualmente usar o imóvel (moradia, escritório, temporada)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Tem estabilidade financeira e renda previsível</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">❌ Reconsidere Se:</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Precisa de liquidez imediata (pode precisar do dinheiro em 1-2 anos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Não tem reserva de emergência de 6-12 meses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Busca retorno rápido (especulação de curto prazo)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Não quer lidar com burocracia, manutenção e inquilinos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">✗</span>
                  <span>Todo seu patrimônio seria concentrado no imóvel</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conclusão: Vale a Pena, Mas Não Para Todos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Investir em imóveis de luxo <strong className="text-[#8B6F4B]">vale a pena para quem tem perfil adequado, 
              escolhe localização estratégica e pensa em longo prazo</strong>. Os números históricos comprovam: 
              valorização média de 8-12% ao ano + renda de locação de 4-6% = retorno total de 12-18% ao ano.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Além do retorno financeiro, imóveis de alto padrão oferecem <strong>benefícios intangíveis</strong>: 
              qualidade de vida, status, uso próprio e herança para gerações futuras.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              A chave do sucesso está em <strong>não concentrar todo o patrimônio em um único ativo</strong>, 
              escolher bairros consolidados (Jardins, Itaim, Vila Nova Conceição, Moema) e ter horizonte mínimo de 5 anos.
            </p>
            
            <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💎 Regra de Ouro NPi:</h3>
              <p className="text-gray-700 leading-relaxed">
                "Imóveis de luxo não são para enriquecer rápido, mas para <strong className="text-[#8B6F4B]">construir 
                e preservar patrimônio</strong> ao longo de décadas. Escolha bem, compre certo e aguarde. 
                O tempo é seu maior aliado neste mercado."
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Pronto para Investir com Inteligência?</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore nossa curadoria de imóveis de alto padrão entre R$ 1 milhão e R$ 65 milhões, 
              em localizações estratégicas de São Paulo.
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
                href="/guia/localizacao-imoveis-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <TrendingUp className="w-4 h-4" />
                  Antes de Investir
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Como Escolher a Localização Ideal
                </h4>
                <p className="text-sm text-gray-600">
                  Descubra os critérios essenciais para identificar bairros nobres com maior potencial de valorização
                </p>
              </Link>

              <Link
                href="/guia/investimento-scp-imoveis"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <DollarSign className="w-4 h-4" />
                  Antes de Investir
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Investimento em SCP Imobiliário
                </h4>
                <p className="text-sm text-gray-600">
                  Entenda como funciona a Sociedade em Conta de Participação e se vale a pena investir
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
