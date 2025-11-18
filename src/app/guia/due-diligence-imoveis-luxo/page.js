import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, FileCheck, CheckCircle2, AlertTriangle, Search, Shield, FileText, Building2, Scale, Users, TrendingUp, AlertCircle, ClipboardCheck, Eye } from "lucide-react";

export default function DueDiligenceImoveisLuxoPage() {
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
              <span className="text-[#8B6F4B] font-medium">Due Diligence</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <FileCheck className="w-4 h-4" />
              Aspectos Legais
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Due Diligence em Imóveis de Luxo: Guia Completo
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Como fazer análise jurídica detalhada e evitar problemas em transações milionárias. Checklist profissional para investigação completa de imóveis de alto padrão.
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
                  <strong>Due Diligence Imobiliária</strong> é a investigação completa (jurídica, financeira, técnica e comercial) de um imóvel antes da compra. Imóvel de alto valor, é importante ter: análise de matrícula, certidões, histórico de proprietários, situação fiscal, condição física, valorização da região e reputação da incorporadora. <strong>Essencial</strong> para evitar prejuízos milionários.
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              Em transações imobiliárias acima de <strong>R$ 1 milhão</strong>, realizar uma <strong>due diligence (devida diligência)</strong> adequada não é opcional – é absolutamente essencial. Este processo de investigação minuciosa pode fazer a diferença entre um excelente investimento e um prejuízo milionário.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              A due diligence vai muito além de verificar se os documentos estão em ordem. É uma <strong>análise profunda e multidisciplinar</strong> que envolve aspectos jurídicos, financeiros, técnicos e comerciais do imóvel.
            </p>
          </section>

          {/* O que é */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              O que é Due Diligence Imobiliária?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Due Diligence</strong> (termo em inglês que significa "devida diligência" ou "diligência devida") é o <strong>processo de investigação e verificação detalhada</strong> realizado antes de fechar um negócio de grande valor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No contexto imobiliário de alto padrão, envolve examinar minuciosamente <strong>todos os aspectos</strong> do imóvel, do vendedor, da incorporadora (se na planta) e do entorno para identificar <strong>riscos, problemas ocultos e oportunidades</strong>.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Por que é Essencial em Imóveis de Luxo?</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-red-200 bg-red-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Sem Due Diligence
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✗ Risco de comprar imóvel com ônus ocultos</li>
                  <li>✗ Possibilidade de problemas estruturais</li>
                  <li>✗ Surpresas com dívidas não declaradas</li>
                  <li>✗ Processos judiciais envolvendo o imóvel</li>
                  <li>✗ Irregularidades na documentação</li>
                  <li>✗ Prejuízo financeiro irreversível</li>
                </ul>
              </div>

              <div className="border border-green-200 bg-green-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Com Due Diligence
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Segurança jurídica total</li>
                  <li>✓ Conhecimento completo do imóvel</li>
                  <li>✓ Identificação prévia de problemas</li>
                  <li>✓ Poder de negociação fundamentado</li>
                  <li>✓ Decisão de compra embasada</li>
                  <li>✓ Proteção do investimento</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5 Pilares */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Os 5 Pilares da Due Diligence Imobiliária</h2>

            <div className="space-y-6">
              {/* Pilar 1 */}
              <div className="border-l-4 border-[#8B6F4B] bg-[#8B6F4B]/5 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-[#8B6F4B]" />
                  1. Due Diligence Jurídica (Legal)
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Análise completa dos aspectos legais do imóvel, proprietário e transação:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Análise da matrícula:</strong> Histórico completo de proprietários, ônus, penhoras, hipotecas, servidões</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidão vintenária:</strong> Verificação dos últimos 20 anos de histórico do imóvel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidões do vendedor:</strong> Cível, criminal, protestos, débitos tributários, trabalhistas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Regularização:</strong> Habite-se, IPTU, averbações, alvarás</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Ações judiciais:</strong> Processos envolvendo o imóvel ou proprietário</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Condomínio:</strong> Convenção, atas, débitos, obras futuras, problemas estruturais</span>
                  </li>
                </ul>
              </div>

              {/* Pilar 2 */}
              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-green-600" />
                  2. Due Diligence Financeira
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Verificação da saúde financeira do negócio:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Valor venal vs valor de mercado:</strong> Comparação e análise de subfaturamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Débitos:</strong> IPTU, condomínio, água, luz, gás - últimos 2 anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Custos de transferência:</strong> ITBI, cartório, taxas de registro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Valorização histórica:</strong> Apreciação do imóvel nos últimos 5-10 anos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Incorporadora (se na planta):</strong> Balanços, solidez financeira, histórico de entregas</span>
                  </li>
                </ul>
              </div>

              {/* Pilar 3 */}
              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  3. Due Diligence Técnica (Física)
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Inspeção física detalhada do imóvel:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Vistoria com engenheiro:</strong> Estrutura, instalações, infiltrações, fissuras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Sistemas prediais:</strong> Elétrica, hidráulica, climatização, automação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Acabamentos:</strong> Qualidade de materiais, marcas, estado de conservação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Áreas comuns:</strong> Estado de conservação, manutenção, equipamentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Laudos técnicos:</strong> AVCB (bombeiros), elevadores, gás, elétrica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Metragem real:</strong> Conferência com planta registrada</span>
                  </li>
                </ul>
              </div>

              {/* Pilar 4 */}
              <div className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                  4. Due Diligence Comercial (Mercadológica)
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Análise de mercado e potencial do imóvel:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Comparação de mercado:</strong> Preço por m² vs imóveis similares na região</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Liquidez:</strong> Facilidade de revenda, demanda na região</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Tendências do bairro:</strong> Valorização, infraestrutura, desenvolvimento futuro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Concorrência:</strong> Outros lançamentos, oferta vs demanda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">✓</span>
                    <span><strong>Potencial de aluguel:</strong> Valor de locação, rentabilidade</span>
                  </li>
                </ul>
              </div>

              {/* Pilar 5 */}
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-6 h-6 text-red-600" />
                  5. Due Diligence de Reputação
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  Investigação de histórico e credibilidade:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✓</span>
                    <span><strong>Incorporadora/Construtora:</strong> Histórico de entregas, reclamações, processos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✓</span>
                    <span><strong>Vendedor:</strong> Reputação, idoneidade, histórico de transações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✓</span>
                    <span><strong>Reclame Aqui/Procon:</strong> Reclamações registradas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✓</span>
                    <span><strong>Moradores:</strong> Opinião de vizinhos, qualidade de vida, problemas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">✓</span>
                    <span><strong>Imprensa:</strong> Notícias sobre a incorporadora ou empreendimento</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cronograma */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <ClipboardCheck className="w-6 h-6 text-indigo-600" />
              </div>
              Cronograma de Due Diligence (30-60 dias)
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Semana 1-2: Análise Documental Preliminar</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Solicitação de todos os documentos ao vendedor</li>
                      <li>• Análise preliminar da matrícula</li>
                      <li>• Verificação de certidões básicas</li>
                      <li>• Primeira avaliação de viabilidade</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Semana 3-4: Análise Jurídica Profunda</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Análise completa da matrícula por advogado especializado</li>
                      <li>• Certidão vintenária</li>
                      <li>• Pesquisa de processos judiciais</li>
                      <li>• Análise de convenção de condomínio e atas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Semana 5-6: Vistoria Técnica e Avaliação</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Vistoria completa com engenheiro</li>
                      <li>• Laudo técnico detalhado</li>
                      <li>• Avaliação de mercado por corretor especializado</li>
                      <li>• Análise de comparáveis</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">Semana 7-8: Análise Final e Decisão</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Compilação de todos os relatórios</li>
                      <li>• Identificação de riscos e pontos de atenção</li>
                      <li>• Recomendações e sugestões de negociação</li>
                      <li>• Decisão fundamentada: seguir, negociar ou desistir</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Custos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quanto Pode Custar uma Due Diligence Completa?</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Investimento Estimado:</h3>
              
              <div className="space-y-3 text-gray-700 text-sm mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                  <span><strong>Advogado especializado:</strong></span>
                  <span className="font-bold">R$ 8.000 - R$ 25.000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                  <span><strong>Engenheiro/Vistoria técnica:</strong></span>
                  <span className="font-bold">R$ 3.000 - R$ 8.000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                  <span><strong>Certidões e documentos:</strong></span>
                  <span className="font-bold">R$ 500 - R$ 2.000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                  <span><strong>Avaliação de mercado:</strong></span>
                  <span className="font-bold">R$ 2.000 - R$ 5.000</span>
                </div>
                <div className="flex justify-between items-center pt-2 bg-blue-100 -mx-6 px-6 py-3 rounded">
                  <span className="font-bold text-lg"><strong>TOTAL:</strong></span>
                  <span className="font-bold text-xl text-blue-700">R$ 13.500 - R$ 40.000</span>
                </div>
              </div>

              <div className="bg-white border border-blue-300 rounded-lg p-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  💡 <strong>Vale a pena?</strong> ABSOLUTAMENTE. Em um imóvel de R$ 2 milhões, investir R$ 20 mil em due diligence representa apenas <strong>1% do valor</strong> e pode evitar prejuízos de centenas de milhares ou até milhões de reais.
                </p>
              </div>
            </div>
          </section>

          {/* Red Flags */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              Red Flags: Sinais de Alerta na Due Diligence
            </h2>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-gray-700 text-sm mb-4">
                Se você encontrar qualquer um destes sinais durante a due diligence, <strong>interrompa imediatamente</strong> ou exija correção antes de prosseguir:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded p-4">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Jurídicos
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>🚩 Matrícula com ônus não quitados</li>
                    <li>🚩 Processos judiciais envolvendo o imóvel</li>
                    <li>🚩 Vendedor com certidões positivas</li>
                    <li>🚩 Documentos vencidos ou irregulares</li>
                    <li>🚩 Ausência de habite-se</li>
                  </ul>
                </div>

                <div className="bg-white rounded p-4">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Financeiros
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>🚩 Débitos de IPTU ou condomínio</li>
                    <li>🚩 Valor muito abaixo do mercado</li>
                    <li>🚩 Subfaturamento evidente</li>
                    <li>🚩 Incorporadora em dificuldades</li>
                    <li>🚩 Falta de transparência financeira</li>
                  </ul>
                </div>

                <div className="bg-white rounded p-4">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Técnicos
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>🚩 Problemas estruturais graves</li>
                    <li>🚩 Infiltrações generalizadas</li>
                    <li>🚩 Instalações elétricas inseguras</li>
                    <li>🚩 Ausência de laudos obrigatórios</li>
                    <li>🚩 Áreas comuns em péssimo estado</li>
                  </ul>
                </div>

                <div className="bg-white rounded p-4">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Comportamentais
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>🚩 Vendedor pressionando por pressa</li>
                    <li>🚩 Relutância em fornecer documentos</li>
                    <li>🚩 Histórias contraditórias</li>
                    <li>🚩 Muitas reclamações de moradores</li>
                    <li>🚩 Má reputação da incorporadora</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>due diligence</strong> é o investimento mais importante que você pode fazer antes de comprar um imóvel de alto padrão. Em transações acima de R$ 1 milhão, ela não é um custo – é uma <strong>proteção essencial</strong> do seu patrimônio.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não confie apenas na aparência do imóvel, na reputação do vendedor ou nas promessas da incorporadora. <strong>Investigue profundamente</strong> todos os aspectos antes de assinar qualquer documento ou transferir valores significativos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Contrate profissionais especializados (advogado, engenheiro, avaliador) e reserve tempo adequado para uma análise minuciosa. Os <strong>R$ 20 mil investidos em due diligence</strong> podem evitar um prejuízo de milhões.
            </p>
          </section>
         
          {/* Artigos Relacionados */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/guia/documentacao-imovel-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <FileText className="w-4 h-4" />
                  Aspectos Legais
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Documentação Necessária
                </h4>
                <p className="text-sm text-gray-600">
                  Lista completa de documentos para transações de alto valor
                </p>
              </Link>

              <Link
                href="/guia/patrimonio-afetacao-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Shield className="w-4 h-4" />
                  Aspectos Legais
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Patrimônio de Afetação
                </h4>
                <p className="text-sm text-gray-600">
                  Proteção essencial em imóveis na planta
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
