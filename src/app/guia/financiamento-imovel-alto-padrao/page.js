import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, Landmark, CheckCircle2, AlertTriangle, TrendingUp, DollarSign, PercentIcon, FileText, CreditCard, Building2, Calculator, BadgeCheck, AlertCircle } from "lucide-react";

export default function FinanciamentoImovelAltoPadraoPage() {
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
              <span className="text-[#8B6F4B] font-medium">Financiamento</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
              <Landmark className="w-4 h-4" />
              Financiamento e Pagamento
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Como Financiar um Imóvel de Alto Padrão: Guia Completo
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Modalidades de financiamento, requisitos, melhores bancos e condições especiais para imóveis de luxo acima de R$ 1 milhão. Tudo que você precisa saber para conseguir o melhor crédito imobiliário.
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
                  Para financiar um imóvel de alto padrão acima de R$ 1 milhão: <strong>(1) Entre com 30-50% de entrada</strong>, (2) comprove renda compatível (mínimo 3-4x o valor da parcela), (3) apresente documentação completa (IR, holerites, extratos), (4) busque bancos especializados em alta renda (Itaú Private, Bradesco Prime, Santander Select), (5) negocie taxa diferenciada (partir de 8% ao ano). Prazo máximo: 35 anos.
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Financiar um <strong>imóvel de alto padrão acima de R$ 1 milhão</strong> é diferente de financiar imóveis convencionais. As exigências são maiores, as taxas podem ser diferenciadas e o processo requer mais documentação e análise criteriosa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              No entanto, com planejamento adequado e conhecimento das melhores opções, é possível conseguir <strong>condições vantajosas</strong> e realizar o sonho do imóvel de luxo com crédito bancário.
            </p>
          </section>

          {/* Modalidades */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              Modalidades de Financiamento para Imóveis de Alto Padrão
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-blue-600" />
                  1. Sistema de Financiamento Habitacional (SFH)
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Limite:</strong> Até R$ 2.250.000,00 (teto ajustado periodicamente)
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Taxa de juros:</strong> Entre 8% e 12% ao ano + TR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Prazo:</strong> Até 35 anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Entrada mínima:</strong> 20% do valor do imóvel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Financiamento máximo:</strong> 80% do valor de avaliação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Vantagem:</strong> Taxas reguladas e condições padronizadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span><strong>Limitação:</strong> Imóveis acima de R$ R$ 2.250.000,00 não se enquadram</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-green-600" />
                  2. Sistema de Financiamento Imobiliário (SFI)
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Indicado para:</strong> Imóveis acima de R$ 2.250.000,00
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Sem limite de valor:</strong> Pode financiar imóveis de qualquer valor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Taxa de juros:</strong> Entre 10% e 14% ao ano + IPCA (taxas livres)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Prazo:</strong> Até 35 anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Entrada mínima:</strong> 30% a 50% do valor (negociável)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Financiamento máximo:</strong> 50% a 70% do valor de avaliação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Alienação fiduciária:</strong> Processo de retomada mais rápido em caso de inadimplência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Vantagem:</strong> Flexibilidade nas condições e valores</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-amber-600" />
                  3. Crédito com Garantia de Imóvel (Home Equity)
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  <strong>Para quem já tem imóvel quitado</strong>
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Use imóvel quitado como garantia</strong> para comprar outro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Taxa de juros:</strong> Entre 1% e 2% ao mês (mais baixa que empréstimo pessoal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Valor liberado:</strong> Até 60% do valor de avaliação do imóvel dado em garantia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Prazo:</strong> Até 20 anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Vantagem:</strong> Taxas menores e aprovação mais fácil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span><strong>Risco:</strong> Imóvel dado em garantia pode ser executado em caso de inadimplência</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Bancos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Landmark className="w-6 h-6 text-purple-600" />
              </div>
              Melhores Bancos para Financiar Imóveis de Alto Padrão
            </h2>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <p className="text-gray-700 text-sm mb-4">
                Bancos com <strong>linhas especiais para alta renda</strong> oferecem melhores condições:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-purple-600" />
                    Itaú Private Banking / Personnalité
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Taxas a partir de 8,5% ao ano</li>
                    <li>• Financiamento até R$ 10 milhões</li>
                    <li>• Atendimento exclusivo e análise personalizada</li>
                    <li>• Flexibilidade nas condições para clientes private</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-purple-600" />
                    Bradesco Prime / Private
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Taxas a partir de 8,8% ao ano</li>
                    <li>• Financiamento de imóveis de alto padrão sem limite</li>
                    <li>• Condições diferenciadas para clientes Prime</li>
                    <li>• Possibilidade de carência e flexibilização de pagamento</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-purple-600" />
                    Santander Select / Private
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Taxas a partir de 9% ao ano</li>
                    <li>• Financiamento até 70% do valor do imóvel</li>
                    <li>• Análise de crédito personalizada</li>
                    <li>• Condições especiais para investidores</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-purple-600" />
                    Caixa Econômica Federal
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Maior banco de crédito imobiliário do Brasil</li>
                    <li>• Taxas competitivas para SFH e SFI</li>
                    <li>• Financiamento até R$ 1,5 milhão no SFH</li>
                    <li>• Linha especial SFI para imóveis de maior valor</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-purple-600" />
                    Banco do Brasil / Estilo
                  </h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Financiamento imobiliário SFH e SFI</li>
                    <li>• Condições especiais para clientes Estilo</li>
                    <li>• Taxas a partir de 9,2% ao ano</li>
                    <li>• Atendimento personalizado</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                💡 <strong>Dica:</strong> Se você tem patrimônio investido em um banco, negocie! Clientes private e de alta renda conseguem taxas até 2% menores que as praticadas publicamente.
              </p>
            </div>
          </section>

          {/* Requisitos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Requisitos e Documentação Necessária
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-[#8B6F4B] bg-[#8B6F4B]/5 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3">Requisitos Básicos</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Idade mínima:</strong> 18 anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Renda comprovada:</strong> Mínimo 3-4x o valor da parcela (alguns bancos exigem até 5x)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Nome limpo:</strong> Sem restrições em órgãos de proteção ao crédito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Entrada:</strong> 30% a 50% do valor do imóvel em espécie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Score de crédito alto:</strong> Acima de 700 pontos (ideal 800+)</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#8B6F4B] bg-[#8B6F4B]/5 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3">Documentação Necessária</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Documentos pessoais:</strong> RG, CPF, comprovante de residência, certidão de estado civil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Comprovação de renda:</strong> 3 últimas declarações de IR, 6 últimos holerites ou Decore</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Extratos bancários:</strong> 3 a 6 meses de movimentação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Comprovante de entrada:</strong> Extrato ou carta de crédito</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Documentos do imóvel:</strong> Matrícula, IPTU, escritura, memorial (se na planta)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Para empresários:</strong> Balanço patrimonial, DRE, contrato social</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dicas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              7 Dicas para Conseguir Melhores Condições
            </h2>

            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                  Negocie com múltiplos bancos
                </h4>
                <p className="text-gray-700 text-sm">
                  Consulte pelo menos 3-5 instituições financeiras. Use as propostas para negociar melhores condições.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                  Dê entrada maior
                </h4>
                <p className="text-gray-700 text-sm">
                  Quanto maior a entrada (acima de 40%), menores são as taxas de juros e melhor a aprovação.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                  Concentre relacionamento bancário
                </h4>
                <p className="text-gray-700 text-sm">
                  Clientes private e de alta renda com patrimônio investido conseguem taxas até 2% menores.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                  Melhore seu score de crédito
                </h4>
                <p className="text-gray-700 text-sm">
                  Score acima de 800 pontos garante aprovação mais rápida e melhores condições.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">5</span>
                  Considere prazo menor
                </h4>
                <p className="text-gray-700 text-sm">
                  Prazos menores (15-20 anos) têm juros menores que financiamentos de 30-35 anos.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">6</span>
                  Use assessoria especializada
                </h4>
                <p className="text-gray-700 text-sm">
                  Correspondentes bancários e consultores especializados conhecem as melhores linhas de crédito.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">7</span>
                  Prepare documentação completa
                </h4>
                <p className="text-gray-700 text-sm">
                  Documentação organizada e completa agiliza aprovação e demonstra credibilidade ao banco.
                </p>
              </div>
            </div>
          </section>

          {/* Comparação */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Financiamento vs Pagamento à Vista</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-green-200 bg-green-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Vantagens do Financiamento
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Preserva liquidez e capital de giro</li>
                  <li>✓ Permite diversificação de investimentos</li>
                  <li>✓ Deduções no Imposto de Renda (juros)</li>
                  <li>✓ Aproveita alavancagem financeira</li>
                  <li>✓ Descontos em imóveis na planta</li>
                </ul>
              </div>

              <div className="border border-blue-200 bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                  Vantagens do Pagamento à Vista
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Descontos de 10% a 30% no valor</li>
                  <li>✓ Sem juros de financiamento</li>
                  <li>✓ Processo mais rápido e simples</li>
                  <li>✓ Sem análise de crédito rigorosa</li>
                  <li>✓ Economia total de 30-50% no longo prazo</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Alerta */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">⚠️ Cuidados Importantes</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• <strong>Não comprometa mais de 30%</strong> da sua renda mensal com a parcela do financiamento</li>
                  <li>• <strong>Considere custos extras:</strong> ITBI, registro, seguro obrigatório, taxas bancárias</li>
                  <li>• <strong>Simule cenários:</strong> Veja o impacto de diferentes prazos e valores de entrada</li>
                  <li>• <strong>Fique atento à inflação:</strong> Índices como IPCA podem aumentar significativamente o valor das parcelas</li>
                  <li>• <strong>Tenha reserva de emergência:</strong> Mínimo 6 meses de parcelas guardadas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Financiar um <strong>imóvel de alto padrão</strong> exige planejamento, boa capacidade financeira e pesquisa criteriosa das melhores condições de mercado. Com entrada adequada, documentação completa e negociação estratégica, é possível conseguir taxas competitivas mesmo em imóveis acima de R$ 1 milhão.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para clientes de <strong>alta renda</strong>, os bancos oferecem linhas diferenciadas através de seus segmentos private e prime, com taxas a partir de 8% ao ano e atendimento personalizado.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Consulte múltiplas instituições, compare propostas e, se possível, conte com assessoria especializada para encontrar a <strong>melhor solução</strong> para seu perfil e objetivos.
            </p>
          </section>

          {/* Artigos Relacionados */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
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
                  Todas as modalidades de pagamento para imóveis de alto padrão
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
                  Calcule o valor ideal de entrada para seu imóvel
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
