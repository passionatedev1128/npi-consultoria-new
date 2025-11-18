import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, TrendingUp, Building2, Users, AlertTriangle, CheckCircle2, XCircle, DollarSign, FileText, Shield, Briefcase } from "lucide-react";

export default function InvestimentoSCPPage() {
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
              <span className="text-[#8B6F4B] font-medium">Investimento em SCP</span>
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
              Investimento em SCP Imobiliário: Guia Completo
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              A Sociedade em Conta de Participação (SCP) é uma alternativa de investimento imobiliário que permite participar de empreendimentos de alto padrão com menor capital inicial. Entenda como funciona, rentabilidade esperada, riscos e como escolher a melhor SCP para seu perfil.
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
                  <strong>Sim, investir em SCP imobiliário pode ser vantajoso</strong> para quem busca participar de empreendimentos de luxo com capital reduzido (a partir de R$ 100 mil). A rentabilidade média varia entre <strong>15% e 25% ao ano</strong>, mas exige análise criteriosa do sócio ostensivo, localização do projeto e histórico da construtora.
                </p>
              </div>
            </div>
          </div>

          {/* Seção 1: O que é SCP */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O que é SCP Imobiliário?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A <strong>Sociedade em Conta de Participação (SCP)</strong> é um modelo de sociedade não personificada, regulada pelo Código Civil Brasileiro (artigos 991 a 996), onde dois tipos de sócios se unem para um empreendimento específico:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-full flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#8B6F4B]" />
                  </div>
                  <h3 className="font-bold text-gray-900">Sócio Ostensivo</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Geralmente a construtora ou incorporadora. É quem conduz o negócio, assume as obrigações legais, responde perante terceiros e tem seu nome vinculado ao empreendimento. Possui participação ativa na gestão do projeto.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">Sócio Participante</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  O investidor. Aporta capital no empreendimento, mas não tem obrigações perante terceiros nem seu nome vinculado publicamente ao projeto. Participa apenas dos resultados financeiros (lucros ou prejuízos) conforme contrato.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              No mercado imobiliário de alto padrão, a SCP é frequentemente utilizada para <strong>desenvolvimento de edifícios residenciais, comerciais ou mistos</strong>, permitindo que investidores participem de grandes empreendimentos sem assumir os riscos e responsabilidades da incorporação direta.
            </p>
          </section>

          {/* Seção 2: Como Funciona */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Funciona na Prática?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O funcionamento de uma SCP imobiliária segue um fluxo estruturado em etapas bem definidas:
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8B6F4B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Identificação do Projeto</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    O sócio ostensivo (construtora) identifica um terreno e desenvolve o projeto arquitetônico de um empreendimento de alto padrão. Realiza estudos de viabilidade econômica e define a necessidade de capital para execução.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8B6F4B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Estruturação da SCP</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    É formalizado o contrato de SCP entre o sócio ostensivo e os sócios participantes (investidores). O contrato define percentuais de participação, distribuição de resultados, prazos, garantias e condições de saída.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8B6F4B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Aporte de Capital</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Os investidores realizam o aporte financeiro conforme definido em contrato. Este capital é utilizado para aquisição do terreno, aprovações legais, construção e comercialização das unidades do empreendimento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8B6F4B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Execução do Empreendimento</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    O sócio ostensivo conduz todo o processo: incorporação, construção, obtenção de financiamento (quando aplicável), comercialização das unidades e entrega do empreendimento. Investidores recebem relatórios periódicos de andamento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#8B6F4B] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Distribuição de Resultados</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Após a venda das unidades e quitação das obrigações, os lucros são distribuídos conforme percentuais contratuais. A SCP é dissolvida automaticamente com o término do empreendimento ou conforme prazo definido em contrato.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Box de Exemplo Prático */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <Briefcase className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Exemplo Prático de SCP</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  <strong>Empreendimento:</strong> Edifício residencial de alto padrão com 20 unidades de 200m² na Vila Nova Conceição<br/>
                  <strong>Custo Total do Projeto:</strong> R$ 50 milhões<br/>
                  <strong>Estrutura da SCP:</strong>
                </p>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• <strong>Sócio Ostensivo (Construtora):</strong> Aporta R$ 20 milhões + expertise técnica = 50% dos lucros</li>
                  <li>• <strong>Sócios Participantes:</strong> 30 investidores aportam R$ 30 milhões (R$ 1 milhão cada) = 50% dos lucros</li>
                  <li>• <strong>Receita Prevista:</strong> R$ 80 milhões (venda de todas as unidades)</li>
                  <li>• <strong>Lucro Projetado:</strong> R$ 30 milhões</li>
                  <li>• <strong>Retorno do Investidor:</strong> R$ 500 mil por investidor (50% de rentabilidade em 36 meses)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Seção 3: Vantagens e Desvantagens */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vantagens e Desvantagens do Investimento em SCP</h2>
            
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
                    <span className="text-gray-700 text-sm"><strong>Rentabilidade elevada:</strong> Média de 15-25% ao ano, superior à maioria dos investimentos tradicionais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm"><strong>Acesso a grandes projetos:</strong> Participa de empreendimentos que exigiriam milhões para desenvolver sozinho</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm"><strong>Gestão profissional:</strong> Sócio ostensivo assume toda responsabilidade de execução e comercialização</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm"><strong>Responsabilidade limitada:</strong> Investidor responde apenas pelo capital aportado, sem obrigações perante terceiros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm"><strong>Diversificação:</strong> Permite investir em múltiplos empreendimentos com diferentes perfis de risco</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span className="text-gray-700 text-sm"><strong>Transparência fiscal:</strong> Resultados tributados diretamente no investidor, sem bitributação</span>
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
                    <span className="text-gray-700 text-sm"><strong>Liquidez baixa:</strong> Capital fica imobilizado por 24-48 meses até conclusão do empreendimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700 text-sm"><strong>Riscos de construção:</strong> Atrasos, estouro de orçamento, problemas técnicos podem reduzir rentabilidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700 text-sm"><strong>Dependência do sócio ostensivo:</strong> Sucesso depende totalmente da competência da construtora/incorporadora</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700 text-sm"><strong>Risco de mercado:</strong> Desaceleração econômica pode dificultar vendas e comprometer retorno</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700 text-sm"><strong>Ticket mínimo elevado:</strong> Investimento inicial geralmente entre R$ 100 mil e R$ 1 milhão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✗</span>
                    <span className="text-gray-700 text-sm"><strong>Complexidade jurídica:</strong> Contratos extensos exigem análise de advogado especializado</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seção 4: Rentabilidade e Tributação */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Rentabilidade e Tributação</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Rentabilidade Esperada</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A rentabilidade em SCP imobiliário varia conforme qualidade do projeto, localização e expertise do sócio ostensivo:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#8B6F4B] text-white">
                    <th className="px-6 py-4 text-left font-semibold">Tipo de Empreendimento</th>
                    <th className="px-6 py-4 text-left font-semibold">Prazo Médio</th>
                    <th className="px-6 py-4 text-left font-semibold">Rentabilidade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">Residencial Alto Padrão</td>
                    <td className="px-6 py-4">30-42 meses</td>
                    <td className="px-6 py-4 font-bold text-green-600">18-25% a.a.</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">Comercial (Lajes Corporativas)</td>
                    <td className="px-6 py-4">36-48 meses</td>
                    <td className="px-6 py-4 font-bold text-green-600">15-20% a.a.</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">Uso Misto (Residencial + Comercial)</td>
                    <td className="px-6 py-4">36-54 meses</td>
                    <td className="px-6 py-4 font-bold text-green-600">16-22% a.a.</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">Loteamento de Alto Padrão</td>
                    <td className="px-6 py-4">24-36 meses</td>
                    <td className="px-6 py-4 font-bold text-green-600">20-28% a.a.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Tributação</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A tributação sobre os lucros da SCP segue o regime de ganho de capital para Pessoa Física:
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Alíquotas de Imposto de Renda (Ganho de Capital)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center py-2 border-b border-amber-200">
                      <span className="text-gray-700">Até R$ 5 milhões</span>
                      <span className="font-bold text-amber-700">15%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-amber-200">
                      <span className="text-gray-700">De R$ 5 milhões a R$ 10 milhões</span>
                      <span className="font-bold text-amber-700">17,5%</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-amber-200">
                      <span className="text-gray-700">De R$ 10 milhões a R$ 30 milhões</span>
                      <span className="font-bold text-amber-700">20%</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Acima de R$ 30 milhões</span>
                      <span className="font-bold text-amber-700">22,5%</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs mt-4">
                    * O imposto é pago apenas sobre o lucro (ganho de capital), não sobre o valor total recebido. Declarado no IRPF do ano seguinte ao recebimento.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 5: Como Escolher uma Boa SCP */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Escolher uma Boa SCP Imobiliária?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A escolha de uma SCP exige análise criteriosa de diversos fatores. Seguem os principais pontos de atenção:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-[#8B6F4B] bg-gray-50 p-4">
                <h4 className="font-bold text-gray-900 mb-2">1. Reputação e Histórico do Sócio Ostensivo</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Verifique o <strong>track record</strong> da construtora: número de empreendimentos concluídos, qualidade das entregas, histórico de atrasos, solidez financeira e reputação no mercado. Prefira empresas com mais de 10 anos de atuação e certificações (PBQP-H, ISO).
                </p>
              </div>

              <div className="border-l-4 border-[#8B6F4B] bg-gray-50 p-4">
                <h4 className="font-bold text-gray-900 mb-2">2. Qualidade da Localização</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Analise a <strong>localização premium</strong> do empreendimento: proximidade de centros comerciais, infraestrutura de transporte, segurança, valorização histórica da região e potencial de crescimento. Localizações consolidadas oferecem menor risco.
                </p>
              </div>

              <div className="border-l-4 border-[#8B6F4B] bg-gray-50 p-4">
                <h4 className="font-bold text-gray-900 mb-2">3. Estudo de Viabilidade Econômica</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Solicite e analise o <strong>estudo de viabilidade</strong>: projeções de custos, receitas, margens de segurança, análise de mercado, velocidade de vendas estimada e sensibilidade a variações de preço. Desconfie de projeções excessivamente otimistas.
                </p>
              </div>

              <div className="border-l-4 border-[#8B6F4B] bg-gray-50 p-4">
                <h4 className="font-bold text-gray-900 mb-2">4. Garantias Oferecidas</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Verifique as <strong>garantias contratuais</strong>: alienação fiduciária do terreno, fianças bancárias, seguro garantia de conclusão de obras e possibilidade de saída antecipada do investimento (mesmo que com deságio).
                </p>
              </div>

              <div className="border-l-4 border-[#8B6F4B] bg-gray-50 p-4">
                <h4 className="font-bold text-gray-900 mb-2">5. Transparência e Governança</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Avalie a <strong>transparência</strong> do sócio ostensivo: frequência de relatórios financeiros, auditorias independentes, acesso a informações do canteiro de obras e clareza na distribuição de resultados. Exija relatórios mensais ou bimestrais.
                </p>
              </div>

              <div className="border-l-4 border-[#8B6F4B] bg-gray-50 p-4">
                <h4 className="font-bold text-gray-900 mb-2">6. Análise Jurídica do Contrato</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Contrate um <strong>advogado especializado</strong> para revisar o contrato: cláusulas de saída, penalidades, distribuição de lucros e prejuízos, prazos, foro de resolução de conflitos e direitos dos investidores.
                </p>
              </div>
            </div>
          </section>

          {/* Box de Alerta */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">⚠️ Principais Riscos a Evitar</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• <strong>Construtoras sem histórico:</strong> Evite empresas novas ou sem empreendimentos concluídos</li>
                  <li>• <strong>Projeções irrealistas:</strong> Rentabilidades acima de 30% a.a. são suspeitas para o mercado imobiliário</li>
                  <li>• <strong>Falta de garantias:</strong> Nunca invista sem garantias reais (alienação fiduciária, fianças)</li>
                  <li>• <strong>Ausência de transparência:</strong> Se a construtora não fornece relatórios periódicos, desconfie</li>
                  <li>• <strong>Localização duvidosa:</strong> Áreas sem infraestrutura ou potencial de valorização</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O investimento em <strong>SCP imobiliário</strong> representa uma excelente oportunidade para investidores que buscam rentabilidade superior aos investimentos tradicionais e desejam participar do mercado de alto padrão com responsabilidade limitada.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              No entanto, é fundamental realizar uma <strong>análise criteriosa</strong> do sócio ostensivo, localização do empreendimento, garantias oferecidas e transparência na gestão. O sucesso do investimento depende diretamente da competência da construtora e da qualidade do projeto.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Para investidores com perfil moderado a arrojado, capital disponível para imobilizar por 3-4 anos e que compreendem os riscos envolvidos, a SCP pode ser uma <strong>alternativa interessante de diversificação patrimonial</strong> no segmento de imóveis de luxo.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Quer Investir em Imóveis de Alto Padrão?</h3>
            <p className="text-lg mb-6 opacity-90">
              Conheça oportunidades exclusivas de investimento e empreendimentos de luxo
            </p>
            <Link
              href="/busca"
              className="inline-block bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Ver Oportunidades
            </Link>
          </div>

          {/* Artigos Relacionados */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/guia/investimento-imoveis-luxo"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <TrendingUp className="w-4 h-4" />
                  Antes de Investir
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Vale a Pena Investir em Imóveis de Luxo?
                </h4>
                <p className="text-sm text-gray-600">
                  Análise completa sobre rentabilidade e valorização em imóveis acima de R$ 1 milhão
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
                  Imóvel na Planta vs Pronto: Qual Escolher?
                </h4>
                <p className="text-sm text-gray-600">
                  Vantagens, riscos e diferenças entre comprar na planta ou pronto no alto padrão
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
