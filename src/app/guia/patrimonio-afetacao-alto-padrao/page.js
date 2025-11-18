import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, Shield, CheckCircle2, AlertTriangle, Building2, FileCheck, Scale, TrendingUp, Users, Lock, AlertCircle, BadgeCheck } from "lucide-react";

export default function PatrimonioAfetacaoAltoPadraoPage() {
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
              <span className="text-[#8B6F4B] font-medium">Patrimônio de Afetação</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              Aspectos Legais
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Patrimônio de Afetação em Incorporações de Luxo: Proteção Essencial
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Proteção jurídica indispensável ao comprar imóveis de alto padrão na planta. Entenda o que é, como funciona e por que é essencial para sua segurança patrimonial em investimentos acima de R$ 1 milhão.
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
                  <strong>Patrimônio de Afetação</strong> é uma proteção legal (Lei 10.931/2004) que separa os recursos e bens de cada incorporação imobiliária. Se a incorporadora falir, seu investimento está protegido: a obra continua ou você recebe de volta o dinheiro investido. É <strong>ESSENCIAL</strong> em imóveis na planta acima de R$ 1 milhão. Sempre verifique se há na matrícula.
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Comprar um imóvel de alto padrão <strong>na planta</strong> é uma das formas mais atrativas de adquirir propriedades de luxo com valores mais acessíveis. No entanto, também envolve riscos significativos, especialmente em investimentos acima de <strong>R$ 1 milhão</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              O <strong>Patrimônio de Afetação</strong> é o principal instrumento legal de proteção ao comprador contra problemas financeiros da incorporadora. Entender como funciona é fundamental para tomar decisões seguras.
            </p>
          </section>

          {/* O que é */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-blue-600" />
              </div>
              O que é Patrimônio de Afetação?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                O <strong>Patrimônio de Afetação</strong> é um regime jurídico criado pela <strong>Lei nº 10.931/2004</strong> que determina a <strong>separação patrimonial</strong> entre cada empreendimento imobiliário e os demais bens da incorporadora.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Na prática, significa que <strong>todos os recursos pagos pelos compradores</strong> de um determinado empreendimento ficam vinculados exclusivamente àquele projeto, não podendo ser usados em outras obras ou despesas da empresa.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Como Funciona na Prática?</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-green-200 bg-green-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BadgeCheck className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-gray-900">COM Patrimônio de Afetação</h4>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Recursos separados por empreendimento</li>
                  <li>✓ Conta bancária exclusiva do projeto</li>
                  <li>✓ Transparência total de gastos</li>
                  <li>✓ Proteção contra falência da incorporadora</li>
                  <li>✓ Obra pode continuar mesmo com problemas</li>
                  <li>✓ Direito a devolução proporcional</li>
                </ul>
              </div>

              <div className="border border-red-200 bg-red-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  <h4 className="font-bold text-gray-900">SEM Patrimônio de Afetação</h4>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✗ Recursos misturados com outros projetos</li>
                  <li>✗ Dinheiro pode financiar outras obras</li>
                  <li>✗ Menos transparência</li>
                  <li>✗ Risco total em caso de falência</li>
                  <li>✗ Obra pode parar definitivamente</li>
                  <li>✗ Dificuldade para reaver valores pagos</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Vantagens */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              Vantagens do Patrimônio de Afetação para o Comprador
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  1. Proteção Contra Falência da Incorporadora
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Se a incorporadora falir ou entrar em recuperação judicial, os recursos do empreendimento com patrimônio de afetação <strong>não entram na massa falida</strong>. Isso significa que:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                  <li>• A obra pode continuar com outra construtora</li>
                  <li>• Os compradores têm prioridade absoluta sobre os recursos</li>
                  <li>• Não há risco de perder todo o dinheiro investido</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  2. Transparência e Controle de Gastos
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Incorporadoras com patrimônio de afetação são obrigadas a:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                  <li>• Manter contabilidade separada para cada empreendimento</li>
                  <li>• Apresentar demonstrativos financeiros periódicos</li>
                  <li>• Comprovar destinação dos recursos pagos</li>
                  <li>• Permitir auditoria dos compradores</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  3. Assembleia de Compradores
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Em empreendimentos com patrimônio de afetação, os compradores têm direito a:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                  <li>• Participar de assembleias sobre decisões importantes</li>
                  <li>• Votar sobre continuidade da obra em caso de problemas</li>
                  <li>• Destituir a incorporadora e contratar outra</li>
                  <li>• Decidir sobre liquidação e devolução de valores</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-green-600" />
                  4. Regime Especial de Tributação (RET)
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Incorporadoras que aderem ao patrimônio de afetação podem optar pelo <strong>RET - Regime Especial de Tributação</strong>, que:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700 text-sm">
                  <li>• Simplifica o pagamento de impostos</li>
                  <li>• Pode reduzir custos da obra</li>
                  <li>• Oferece benefícios tributários à incorporadora</li>
                  <li>• Incentiva adesão ao patrimônio de afetação</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Como Verificar */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-amber-600" />
              </div>
              Como Verificar se um Imóvel Tem Patrimônio de Afetação?
            </h2>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Passo a Passo:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Solicite a Matrícula do Imóvel</h4>
                    <p className="text-gray-700 text-sm">Peça ao corretor ou incorporadora a matrícula atualizada do terreno no Cartório de Registro de Imóveis</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Procure pela Averbação</h4>
                    <p className="text-gray-700 text-sm">Na matrícula, busque por averbação específica mencionando "Patrimônio de Afetação" ou "Regime da Afetação" conforme Lei 10.931/2004</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Confirme o Memorial de Incorporação</h4>
                    <p className="text-gray-700 text-sm">Verifique se no Memorial de Incorporação consta expressamente que o empreendimento está sob o regime de afetação</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Verifique o Contrato de Compra e Venda</h4>
                    <p className="text-gray-700 text-sm">O contrato deve mencionar expressamente a existência do patrimônio de afetação</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">5</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Consulte um Advogado Especializado</h4>
                    <p className="text-gray-700 text-sm">Para investimentos acima de R$ 1 milhão, contrate um advogado imobiliário para analisar toda a documentação</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Casos Famosos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              Casos Reais: Por que o Patrimônio de Afetação é Essencial
            </h2>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">⚠️ Construtoras que Faliram sem Patrimônio de Afetação</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Diversos casos de grandes incorporadoras que faliram nos últimos anos mostram a diferença crucial:
                </p>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1 font-bold">•</span>
                    <span><strong>Empreendimentos SEM patrimônio de afetação:</strong> Compradores perderam todo o dinheiro investido, obras pararam, processos judiciais que duraram anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1 font-bold">•</span>
                    <span><strong>Empreendimentos COM patrimônio de afetação:</strong> Obras continuaram com outras construtoras, ou compradores receberam valores de volta proporcionalmente</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">💡 Exemplo Prático</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Situação hipotética:</strong> Você investe R$ 2 milhões em um apartamento na planta. A incorporadora faliu quando a obra estava 60% concluída.
                </p>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                  <div className="bg-green-100 p-4 rounded">
                    <p className="font-bold text-green-800 mb-2">✅ COM Afetação:</p>
                    <p className="text-sm text-gray-700">Os R$ 2 milhões estão protegidos. Uma nova construtora assume a obra ou você recebe de volta R$ 800 mil (40% não executado).</p>
                  </div>
                  <div className="bg-red-100 p-4 rounded">
                    <p className="font-bold text-red-800 mb-2">❌ SEM Afetação:</p>
                    <p className="text-sm text-gray-700">Seus R$ 2 milhões entram na massa falida junto com outras dívidas. Você vira um credor entre milhares, podendo perder tudo.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Box de Alerta Importante */}
          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">🚨 REGRA DE OURO PARA IMÓVEIS NA PLANTA</h4>
                <p className="text-gray-700 font-bold text-lg mb-3">
                  NUNCA compre um imóvel de alto padrão na planta (especialmente acima de R$ 1 milhão) sem verificar se há PATRIMÔNIO DE AFETAÇÃO na matrícula!
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sem essa proteção, você está assumindo um <strong>risco desnecessário e evitável</strong>. Em investimentos dessa magnitude, a segurança jurídica é mais importante que qualquer desconto ou condição de pagamento oferecida.
                </p>
              </div>
            </div>
          </div>

          {/* O que fazer se não tiver */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">E se o Empreendimento NÃO Tiver Patrimônio de Afetação?</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h3 className="font-bold text-gray-900 mb-4">Suas Opções:</h3>
              
              <div className="space-y-4 text-gray-700 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <div>
                    <p className="font-bold mb-1">Desista da Compra (Recomendado)</p>
                    <p>Para imóveis de alto padrão, o risco simplesmente não vale a pena. Existem muitos empreendimentos de qualidade com patrimônio de afetação.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <p className="font-bold mb-1">Exija a Inclusão do Patrimônio de Afetação</p>
                    <p>Negocie com a incorporadora para que ela institua o regime de afetação antes da compra. É possível fazer isso a qualquer momento.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <p className="font-bold mb-1">Contrate Seguro Específico</p>
                    <p>Se decidir prosseguir, contrate um seguro garantia de conclusão de obra (mais caro, mas oferece alguma proteção).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-2xl">4️⃣</span>
                  <div>
                    <p className="font-bold mb-1">Análise Rigorosa da Incorporadora</p>
                    <p>Investigue profundamente: balanços financeiros, histórico de entregas, reputação no mercado, processos judiciais, rating de crédito.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O <strong>Patrimônio de Afetação</strong> é a principal proteção legal para quem compra imóveis na planta no Brasil. Para investimentos de alto padrão acima de R$ 1 milhão, sua presença é <strong>absolutamente essencial e inegociável</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não se deixe enganar por descontos agressivos, condições especiais de pagamento ou promessas de entrega rápida. Se o empreendimento não tem patrimônio de afetação devidamente averbado na matrícula, <strong>o risco é altíssimo</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sempre contrate um <strong>advogado especializado em direito imobiliário</strong> para analisar toda a documentação antes de assinar qualquer contrato. O custo dessa consultoria é ínfimo comparado à proteção que oferece.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Busque Empreendimentos com Segurança Garantida</h3>
            <p className="text-lg mb-6 opacity-90">
              Conheça imóveis de alto padrão de incorporadoras sólidas com patrimônio de afetação
            </p>
            <Link
              href="/busca"
              className="inline-block bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Ver Imóveis na Planta
            </Link>
          </div>

          {/* Artigos Relacionados */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/guia/documentacao-imovel-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <FileCheck className="w-4 h-4" />
                  Aspectos Legais
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Documentação Necessária para Comprar Imóvel
                </h4>
                <p className="text-sm text-gray-600">
                  Lista completa de documentos para transações acima de R$ 1 milhão
                </p>
              </Link>

              <Link
                href="/guia/imovel-planta-vs-pronto"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Building2 className="w-4 h-4" />
                  Antes de Investir
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Imóvel na Planta vs Pronto
                </h4>
                <p className="text-sm text-gray-600">
                  Compare vantagens e riscos de cada modalidade
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
