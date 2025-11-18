import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, RefreshCw, Building2, DollarSign, FileText, AlertTriangle, CheckCircle2, XCircle, Calculator, Scale } from "lucide-react";

export default function PermutaImoveisPage() {
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
              <span className="text-[#8B6F4B] font-medium">Permuta de Imóveis</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <RefreshCw className="w-4 h-4" />
              Antes de Investir
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Permuta de Imóveis: Como Funciona? Guia Completo
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              A permuta de imóveis é uma modalidade de negociação cada vez mais comum no mercado de alto padrão, permitindo que proprietários troquem seus imóveis por unidades em lançamentos ou projetos personalizados. Entenda os tipos de permuta, vantagens, tributação e quando esta pode ser a melhor opção para você.
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
                  <strong>Sim, a permuta pode valer muito a pena</strong>, especialmente para quem possui imóvel valorizado e deseja migrar para um novo empreendimento sem mobilizar grande capital. O ponto mais difícil de fazer uma negociação com permuta é conciliar a necessidade e desejo das partes em relação ao imóvel a ser permutado, mas quando isso acontece, o resultado é excelente! <strong>permuta financeira</strong> (mais comum no alto padrão) permite que você use seu imóvel atual como parte do pagamento, eliminando intermediários, economizando em comissões e agilizando a transação. O desconto pode chegar a <strong>10-20%</strong> do valor total da negociação.
                </p>
              </div>
            </div>
          </div>

          {/* Seção 1: O que é Permuta */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O que é Permuta de Imóveis?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Permuta é uma <strong>operação de troca</strong> em que o proprietário de um imóvel o utiliza como parte ou totalidade do pagamento de outro imóvel, geralmente um lançamento ou empreendimento ainda em construção. No mercado de alto padrão, é especialmente comum em transações com incorporadoras e construtoras.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Diferente de uma venda tradicional seguida de compra, a permuta <strong>consolida ambas as operações</strong> em um único negócio, reduzindo custos, tempo e burocracia. O imóvel antigo é avaliado e seu valor é creditado como entrada ou pagamento parcial do novo imóvel.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Tipos de Permuta</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-[#8B6F4B]/10 rounded-full flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6 text-[#8B6F4B]" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Permuta Física</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Troca direta de um imóvel por outro, sem envolver dinheiro. Exemplo: Trocar um apartamento de 3 quartos por um de 2 quartos em bairro melhor. Rara no alto padrão devido à dificuldade de encontrar equivalência de valores.
                </p>
              </div>

              <div className="border border-[#8B6F4B] border-2 rounded-lg p-6 bg-[#8B6F4B]/5">
                <div className="w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Permuta Financeira ⭐</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Mais comum no alto padrão.</strong> O imóvel atual é avaliado e seu valor é usado como entrada de um novo imóvel (geralmente na planta). O saldo é financiado ou pago em parcelas durante a obra. Exemplo: Permuta de casa de R$ 2mi + R$ 1mi = apartamento de R$ 3mi.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Permuta Mista</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Combinação das duas anteriores. Você entrega seu imóvel, paga uma diferença em dinheiro e recebe um ou mais imóveis novos. Comum quando o valor do imóvel antigo é inferior ao novo ou quando você quer adquirir múltiplas unidades.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 2: Como Funciona */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Funciona a Permuta Financeira na Prática?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              No mercado de alto padrão, a <strong>permuta financeira</strong> com incorporadoras funciona em 7 etapas:
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#8B6F4B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Manifestação de Interesse</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Você identifica um novo empreendimento de interesse e informa à incorporadora que deseja fazer permuta do seu imóvel atual. A construtora realiza uma <strong>pré-análise</strong> para verificar se tem interesse no seu imóvel (localização, estado de conservação, liquidez).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#8B6F4B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Avaliação do Imóvel Atual</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A incorporadora contrata <strong>2-3 empresas especializadas</strong> para avaliar seu imóvel. A avaliação considera: valor de mercado, estado de conservação, potencial de revenda, custos de eventuais reformas. Geralmente, a incorporadora oferece <strong>85-90% do valor de mercado</strong> (desconto para cobrir custos de revenda e risco).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#8B6F4B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Negociação e Proposta</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Com base na avaliação, a incorporadora apresenta uma proposta: <strong>valor creditado pelo seu imóvel</strong>, preço do novo imóvel, forma de pagamento do saldo e condições. Há espaço para negociação, especialmente sobre o desconto aplicado ao imóvel permutado e condições de pagamento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#8B6F4B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Assinatura do Contrato de Permuta</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Aceita a proposta, é assinado o <strong>Contrato de Permuta</strong>, que formaliza: valor atribuído ao imóvel permutado, unidade adquirida no novo empreendimento, forma de pagamento do saldo, prazos de entrega do imóvel antigo, condições de rescisão. Este contrato deve ser registrado em cartório.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#8B6F4B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Entrega do Imóvel Permutado</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Você precisa <strong>desocupar e entregar</strong> seu imóvel atual à incorporadora no prazo acordado (geralmente 60-120 dias). O imóvel deve estar livre de ônus (quitado), ocupantes e em condições conforme vistoria inicial. Eventuais divergências podem gerar redução no valor creditado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#8B6F4B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  6
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Pagamento do Saldo Devedor</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    O valor do seu imóvel foi creditado como entrada. O <strong>saldo remanescente</strong> pode ser pago através de: parcelamento direto com a construtora durante a obra, financiamento bancário na entrega das chaves, ou combinação de ambos. Taxas e condições variam conforme negociação.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#8B6F4B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  7
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Recebimento do Novo Imóvel</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Após conclusão da obra e quitação total (ou obtenção de financiamento), você recebe as chaves do novo imóvel. A incorporadora se responsabiliza por vender seu imóvel antigo, eliminando esta preocupação.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Box de Exemplo Prático */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <Calculator className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Exemplo Prático de Permuta Financeira</h4>
                <div className="text-gray-700 text-sm space-y-2">
                  <p><strong>Situação:</strong> Você possui casa de 300m² na Vila Madalena avaliada em R$ 2.500.000</p>
                  <p><strong>Objetivo:</strong> Adquirir apartamento de 180m² em lançamento no Itaim Bibi por R$ 3.500.000</p>
                  <p className="pt-2 border-t border-blue-300"><strong>Proposta da Incorporadora:</strong></p>
                  <ul className="space-y-1 pl-4">
                    <li>• Sua casa vale R$ 2.500.000, mas incorporadora oferece R$ 2.200.000 (88% do valor de mercado)</li>
                    <li>• Apartamento novo custa R$ 3.500.000</li>
                    <li>• <strong>Saldo a pagar:</strong> R$ 1.300.000</li>
                    <li>• Forma de pagamento: R$ 300k entrada + R$ 27k/mês x 36 meses + saldo de R$ 28k financiado</li>
                  </ul>
                  <p className="font-bold text-green-600 pt-2 border-t border-blue-300">
                    ✅ <strong>Vantagens:</strong> Você economiza comissão de venda (6% = R$ 150k), não precisa se preocupar em vender sua casa, aproveita desconto da planta e dilui pagamento.
                  </p>
                  <p className="font-bold text-red-600">
                    ⚠️ <strong>Desvantagens:</strong> Recebeu R$ 300k a menos que vendendo direto no mercado (88% vs 94% líquido após comissão).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 3: Vantagens e Desvantagens */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vantagens e Desvantagens da Permuta</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Vantagens */}
              <div className="border border-green-200 bg-green-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <h3 className="font-bold text-gray-900">Vantagens</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm"><strong>Rapidez:</strong> Elimina etapa de vender o imóvel antigo (economiza 6-12 meses)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm"><strong>Economia de comissões:</strong> Não paga 6% de corretagem na venda do imóvel antigo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm"><strong>Menos burocracia:</strong> Uma única operação em vez de venda + compra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm"><strong>Segurança:</strong> Incorporadoras assumem risco de revenda do imóvel antigo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm"><strong>Flexibilidade de pagamento:</strong> Saldo pode ser diluído em anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm"><strong>Liquidez garantida:</strong> Não depende de encontrar comprador para seu imóvel</span>
                  </li>
                </ul>
              </div>

              {/* Desvantagens */}
              <div className="border border-red-200 bg-red-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <h3 className="font-bold text-gray-900">Desvantagens</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700 text-sm"><strong>Desconto no imóvel permutado:</strong> Incorporadora oferece 85-90% do valor de mercado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700 text-sm"><strong>Menor poder de negociação:</strong> Preços do lançamento são menos flexíveis em permutas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700 text-sm"><strong>Prazo rígido de desocupação:</strong> Você precisa sair em 60-120 dias, independente de ter outro lugar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700 text-sm"><strong>Escolha limitada:</strong> Só funciona com empreendimentos da incorporadora que aceita seu imóvel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700 text-sm"><strong>Complexidade jurídica:</strong> Contratos mais complexos exigem análise detalhada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700 text-sm"><strong>Tributação:</strong> Pode gerar imposto de renda sobre ganho de capital do imóvel antigo</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seção 4: Tributação */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tributação na Permuta de Imóveis</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A permuta é considerada pela Receita Federal como uma <strong>venda seguida de compra</strong>, portanto está sujeita ao imposto de renda sobre <strong>ganho de capital</strong> do imóvel antigo.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Como Calcular o Imposto de Renda</h4>
                  <div className="text-gray-700 text-sm space-y-2">
                    <p><strong>Fórmula:</strong> Ganho de Capital = Valor Permutado - Custo de Aquisição Atualizado</p>
                    <p className="pt-2 border-t border-amber-300"><strong>Exemplo:</strong></p>
                    <ul className="space-y-1 pl-4">
                      <li>• Você comprou sua casa por R$ 1.000.000 em 2010</li>
                      <li>• Custo atualizado pela inflação (IPCA): R$ 1.600.000</li>
                      <li>• Valor permutado: R$ 2.200.000</li>
                      <li>• <strong>Ganho de Capital:</strong> R$ 2.200.000 - R$ 1.600.000 = R$ 600.000</li>
                      <li>• <strong>Imposto (15%):</strong> R$ 90.000</li>
                    </ul>
                    <p className="font-bold text-amber-700 pt-2 border-t border-amber-300">
                      💰 Você pagará R$ 90.000 de IR em até 3 parcelas mensais (sem juros)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Isenção de Imposto de Renda</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Você pode estar <strong>isento de IR</strong> na permuta se:
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">1.</span>
                <span className="text-gray-700 text-sm">O imóvel permutado foi seu <strong>único imóvel</strong> nos últimos 5 anos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">2.</span>
                <span className="text-gray-700 text-sm">Você <strong>não vendeu outro imóvel</strong> com isenção nos últimos 5 anos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">3.</span>
                <span className="text-gray-700 text-sm">O valor do imóvel permutado seja até <strong>R$ 440.000</strong> (limite para isenção)</span>
              </li>
            </ul>

            <p className="text-gray-600 text-sm italic">
              ⚠️ Consulte sempre um contador especializado para avaliar sua situação específica e possibilidades de redução tributária.
            </p>
          </section>

          {/* Box de Cuidados */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">⚠️ Cuidados Essenciais ao Fazer Permuta</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• <strong>Avaliação realista:</strong> Contrate sua própria avaliação para saber o valor real do seu imóvel</li>
                  <li>• <strong>Contrato detalhado:</strong> Exija clareza sobre prazos, penalidades, condições de rescisão e garantias</li>
                  <li>• <strong>Reputação da incorporadora:</strong> Pesquise histórico, entregas anteriores e solidez financeira</li>
                  <li>• <strong>Analise o desconto:</strong> Compare: (valor permutado - comissões) vs (valor de mercado - 6%) para saber se compensa</li>
                  <li>• <strong>Patrimônio de Afetação:</strong> Exija que o novo empreendimento tenha este regime de garantia</li>
                  <li>• <strong>Assessoria jurídica:</strong> Contrate advogado para revisar contrato antes de assinar</li>
                  <li>• <strong>Prazo de desocupação:</strong> Negocie prazo realista para conseguir um local temporário</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seção 5: Quando Vale a Pena */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quando a Permuta Vale a Pena?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A permuta é mais vantajosa em situações específicas. Avalie se seu caso se encaixa:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-[#8B6F4B] bg-gray-50 p-4">
                <h4 className="font-bold text-gray-900 mb-2">✅ Vale a Pena Quando:</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Seu imóvel está <strong>difícil de vender</strong> (perfil muito específico, mercado lento)</li>
                  <li>• Você precisa de <strong>rapidez</strong> na mudança e não pode esperar venda tradicional</li>
                  <li>• O <strong>desconto oferecido</strong> (10-15%) é compensado pela economia de comissão e tempo</li>
                  <li>• Você encontrou um lançamento <strong>perfeito</strong> da incorporadora que aceita permuta</li>
                  <li>• Não quer se preocupar com <strong>intermediários, visitas, negociações</strong></li>
                  <li>• Seu imóvel tem <strong>alta liquidez</strong> (boa localização, fácil de revender)</li>
                  <li>• A incorporadora tem <strong>sólida reputação</strong> e histórico de entregas</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-4">
                <h4 className="font-bold text-gray-900 mb-2">❌ Evite Quando:</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• O desconto é <strong>maior que 15%</strong> do valor de mercado (você perde muito dinheiro)</li>
                  <li>• Você pode vender facilmente no mercado por <strong>preço melhor</strong></li>
                  <li>• A incorporadora tem <strong>histórico ruim</strong> ou problemas financeiros</li>
                  <li>• O novo empreendimento não tem <strong>Patrimônio de Afetação</strong></li>
                  <li>• O prazo de desocupação é muito curto e você <strong>não tem alternativa</strong> de moradia</li>
                  <li>• O contrato tem <strong>cláusulas abusivas</strong> ou penalidades excessivas</li>
                  <li>• Você precisa do valor total em dinheiro para <strong>outros investimentos</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>permuta de imóveis</strong> é uma ferramenta estratégica no mercado de alto padrão que pode trazer vantagens significativas quando bem estruturada. A eliminação de intermediários, rapidez na transação e facilidade de pagamento são benefícios inegáveis.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              No entanto, é crucial realizar uma <strong>análise financeira detalhada</strong> comparando o valor oferecido na permuta com o que você obteria vendendo independentemente. O desconto médio de 10-15% aplicado pela incorporadora pode ser compensado pela economia de comissões e ganho de tempo, mas nem sempre esta é a melhor opção.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A chave está em <strong>escolher uma incorporadora sólida</strong>, negociar boas condições, contar com assessoria jurídica especializada e ter clareza sobre seus objetivos. Quando todos estes elementos se alinham, a permuta pode ser uma excelente alternativa para <strong>migrar de imóvel sem mobilizar grande capital inicial</strong>.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Quer Fazer Permuta do Seu Imóvel?</h3>
            <p className="text-lg mb-6 opacity-90">
              Consulte especialistas e descubra as melhores oportunidades de permuta no mercado de alto padrão
            </p>
            <Link
              href="/contato"
              className="inline-block bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Fale com Especialista
            </Link>
          </div>

          {/* Artigos Relacionados */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/guia/imovel-planta-vs-pronto"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Building2 className="w-4 h-4" />
                  Antes de Investir
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Imóvel na Planta vs Pronto: Qual Escolher?
                </h4>
                <p className="text-sm text-gray-600">
                  Compare vantagens e desvantagens para tomar a melhor decisão
                </p>
              </Link>

              <Link
                href="/guia/itbi-imoveis-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <FileText className="w-4 h-4" />
                  Aspectos Legais
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  ITBI em Imóveis de Alto Padrão
                </h4>
                <p className="text-sm text-gray-600">
                  Cálculo, alíquotas e isenções especiais para imóveis acima de R$ 1 milhão
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
