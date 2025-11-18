import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, FileText, Shield, CheckCircle2, AlertTriangle, FileCheck, ScrollText, Building2, User, Landmark, FileSpreadsheet, ClipboardList, AlertCircle } from "lucide-react";

export default function DocumentacaoImovelAltoPadraoPage() {
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
              <span className="text-[#8B6F4B] font-medium">Documentação Necessária</span>
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
              Documentação Necessária para Comprar Imóvel Acima de R$ 1 Milhão
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Lista completa de documentos e cuidados especiais em transações de alto valor. Due diligence documental e verificações essenciais para garantir segurança jurídica.
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
                  Para comprar um imóvel acima de R$ 1 milhão são necessários: <strong>documentos pessoais completos</strong> (RG, CPF, comprovante residência, estado civil), <strong>documentos do imóvel</strong> (matrícula atualizada, IPTU, certidões negativas), <strong>comprovação financeira</strong> (IR, holerite, extratos bancários) e <strong>certidões do vendedor</strong> (débitos federais, estaduais, trabalhistas). Transações de alto valor exigem due diligence rigorosa.
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              A compra de um imóvel de alto padrão, especialmente acima de <strong>R$ 1 milhão</strong>, envolve um volume significativamente maior de documentação do que transações convencionais. A complexidade aumenta proporcionalmente ao valor do negócio, exigindo uma <strong>análise documental minuciosa</strong> para evitar problemas futuros.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Este guia reúne todos os documentos necessários, organizados por categoria, e explica a importância de cada um para garantir uma <strong>transação segura e juridicamente válida</strong>.
            </p>
          </section>

          {/* Categoria 1: Documentos Pessoais do Comprador */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              1. Documentos Pessoais do Comprador
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Documentação Básica Obrigatória
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>RG (Cédula de Identidade) original:</strong> Dentro do prazo de validade, em bom estado de conservação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>CPF (Cadastro de Pessoa Física):</strong> Situação cadastral regular na Receita Federal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Comprovante de residência atualizado:</strong> Conta de luz, água ou telefone dos últimos 3 meses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Certidão de estado civil:</strong> Solteiro, casado, divorciado ou viúvo (certidão de nascimento ou casamento atualizada nos últimos 90 dias)</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-blue-600" />
                  Documentos Adicionais para Casados
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Certidão de casamento atualizada:</strong> Emitida há menos de 90 dias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Pacto antenupcial (se houver):</strong> Documento registrado que define o regime de bens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>RG e CPF do cônjuge:</strong> Mesmo que o imóvel seja adquirido apenas em nome de um dos cônjuges</span>
                  </li>                 
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-blue-600" />
                  Comprovação de Capacidade Financeira para Imóveis de Construtora
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Declaração de Imposto de Renda (3 últimos anos):</strong> Completa com recibo de entrega</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Holerites (6 últimos meses):</strong> Para assalariados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Decore (Declaração Comprobatória de Rendimentos):</strong> Para profissionais autônomos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Extratos bancários (3 a 6 meses):</strong> Comprovação de movimentação financeira</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Balanço patrimonial e DRE:</strong> Para empresários (empresa PJ)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span><strong>Comprovante de origem dos recursos:</strong> Especialmente importante em transações acima de R$ 30 mil (Lei de Lavagem de Dinheiro)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Categoria 2: Documentos do Imóvel */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              2. Documentos do Imóvel (a serem fornecidos pelo vendedor)
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ScrollText className="w-5 h-5 text-green-600" />
                  Documentação Fundamental do Imóvel
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Matrícula atualizada do imóvel:</strong> Emitida pelo Cartório de Registro de Imóveis há no máximo 30 dias, contendo todo o histórico de proprietários e ônus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Escritura ou Contrato de Compra e Venda anterior:</strong> Documento que comprova a propriedade do vendedor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>IPTU (último ano):</strong> Comprovante de pagamento em dia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Certidão de valor venal atualizada:</strong> Emitida pela Prefeitura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Habite-se:</strong> Certificado de conclusão da obra emitido pela Prefeitura para imóveis recém entregues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Averbação de construção:</strong> Registro da construção na matrícula do imóvel</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-green-600" />
                  Documentos do Condomínio
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Convenção de condomínio:</strong> Regras e normas do condomínio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Regimento interno:</strong> Normas complementares de uso e convivência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Certidão negativa de débitos condominiais:</strong> Comprovação de que não há valores em aberto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Demonstrativo financeiro do condomínio:</strong> Balanço e situação das reservas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Boletos de condomínio quitados (3 meses):</strong> Comprovação de pagamento regular</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-green-600" />
                  Documentos para Imóvel na Planta
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Memorial de incorporação:</strong> Documento com todas as características do empreendimento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Certidão de matrícula do terreno:</strong> Com a averbação da incorporação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Patrimônio de Afetação:</strong> Comprovação de que há proteção patrimonial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span><strong>Alvará de construção:</strong> Autorização da Prefeitura para construir</span>
                  </li>            
                 </ul>
              </div>
            </div>
          </section>

          {/* Categoria 3: Certidões Negativas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              3. Certidões Negativas e Verificações
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-[#8B6F4B] bg-[#8B6F4B]/5 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#8B6F4B]" />
                  Certidões do Vendedor (Pessoa Física)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidão de Distribuição Cível:</strong> Verifica ações judiciais no âmbito cível (Justiça Estadual)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidão de Distribuição Criminal:</strong> Verifica ações criminais (Justiça Estadual e Federal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidão Negativa de Débitos Tributários Federais:</strong> Comprova ausência de dívidas com a Receita Federal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidão Negativa de Débitos Estaduais:</strong> Comprova ausência de dívidas estaduais (ICMS, etc)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidão Negativa de Débitos Municipais:</strong> Comprova ausência de dívidas municipais (ISS, etc)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidão Negativa de Débitos Trabalhistas (CNDT):</strong> Comprova ausência de débitos com o TST</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidão de Protestos:</strong> Verifica se há títulos protestados em cartórios</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#8B6F4B] bg-[#8B6F4B]/5 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-[#8B6F4B]" />
                  Certidões do Imóvel
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidão de ônus reais:</strong> Verifica se há hipotecas, penhoras ou outras garantias sobre o imóvel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidão vintenária:</strong> Histórico completo do imóvel nos últimos 20 anos (recomendada para imóveis de alto valor)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidão de inteiro teor:</strong> Cópia completa da matrícula com todas as averbações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B6F4B] mt-1">✓</span>
                    <span><strong>Certidão negativa de débitos do IPTU:</strong> Emitida pela Prefeitura</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Categoria 4: Documentos para Financiamento */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <Landmark className="w-6 h-6 text-amber-600" />
              </div>
              4. Documentos Adicionais para Financiamento Bancário
            </h2>

            <div className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-lg">
              <p className="text-gray-700 text-sm mb-4">
                Se a compra envolver financiamento bancário, serão necessários documentos adicionais:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span><strong>Proposta de financiamento aprovada:</strong> Documento do banco com condições do crédito</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span><strong>Avaliação do imóvel:</strong> Laudo técnico de avaliação bancária</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span><strong>Apólice de seguro habitacional:</strong> Seguro obrigatório para imóveis financiados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span><strong>Contrato de hipoteca:</strong> Garantia real do financiamento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">✓</span>
                  <span><strong>Documentos de fiadores (se necessário):</strong> Toda documentação pessoal, patrimonial e certidões</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Prazos de Validade */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Prazos de Validade dos Documentos</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">⏰ Atenção aos Prazos!</h4>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <p>• <strong>Certidões de cartório:</strong> 90 a 180 dias (verificar validade específica)</p>
                    <p>• <strong>Certidão de casamento/nascimento:</strong> 90 dias</p>
                    <p>• <strong>Matrícula atualizada do imóvel:</strong> 30 dias (recomendado)</p>
                    <p>• <strong>Comprovante de residência:</strong> 3 meses</p>
                    <p>• <strong>Certidões negativas:</strong> 180 dias (maioria)</p>
                    <p>• <strong>Documentos bancários:</strong> Conforme exigência do banco</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Box de Alerta */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">🚨 Documentos que Devem Acender Alerta Vermelho</h4>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• <strong>Matrícula com ônus não quitados</strong> (hipoteca, penhora, alienação fiduciária)</li>
                  <li>• <strong>Certidões com pendências</strong> (débitos tributários, processos judiciais)</li>
                  <li>• <strong>IPTU em atraso</strong> ou com valores muito baixos (possível subfaturamento)</li>
                  <li>• <strong>Vendedor sem documentos atualizados</strong> ou relutante em fornecer certidões</li>
                  <li>• <strong>Documentos falsificados ou adulterados</strong> (sempre verificar autenticidade nos órgãos emissores)</li>
                  <li>• <strong>Imóvel na planta sem patrimônio de afetação</strong> ou registro irregular</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dicas Importantes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dicas Importantes para Due Diligence Documental</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  O que Fazer
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Contratar advogado especializado em direito imobiliário</li>
                  <li>✓ Verificar autenticidade de todas as certidões nos sites oficiais</li>
                  <li>✓ Solicitar segunda via de documentos diretamente aos órgãos emissores</li>
                  <li>✓ Fazer cópia autenticada de todos os documentos importantes</li>
                  <li>✓ Organizar documentação em pasta física e digital</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  O que Evitar
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✗ Aceitar cópias simples sem verificar originais</li>
                  <li>✗ Dispensar certidões por confiar no vendedor</li>
                  <li>✗ Assinar documentos sem ler completamente</li>
                  <li>✗ Pular etapas para acelerar o processo</li>
                  <li>✗ Fazer análise documental sozinho em transações milionárias</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A documentação completa e verificada é a <strong>base de uma transação imobiliária segura</strong>, especialmente em imóveis de alto padrão acima de R$ 1 milhão. Cada documento tem uma função específica na proteção jurídica e financeira de comprador e vendedor.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Em transações de alto valor, é <strong>essencial contratar um ADVOGADO ESPECIALIZADO EM DIREITO IMOBILIÁRIO </strong>para realizar a análise documental completa (due diligence) e identificar potenciais problemas antes da assinatura do contrato.
              Não contrate um advogado que não é especializado em direito imobiliário. Já vimos casos de clientes perderem ótimos negócios por estar mal assessorado por um advogado amigo, parentes, colega de trabalho etc. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              Não economize tempo ou dinheiro nesta etapa: os custos de uma análise documental profissional são <strong>insignificantes comparados aos riscos</strong> de uma transação mal documentada em um imóvel milionário.
            </p>
          </section>        

          {/* Artigos Relacionados */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/guia/patrimonio-afetacao-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Shield className="w-4 h-4" />
                  Aspectos Legais
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Patrimônio de Afetação em Incorporações de Luxo
                </h4>
                <p className="text-sm text-gray-600">
                  Proteção jurídica essencial ao comprar imóveis de alto padrão na planta
                </p>
              </Link>

              <Link
                href="/guia/due-diligence-imoveis-luxo"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <FileCheck className="w-4 h-4" />
                  Aspectos Legais
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Due Diligence em Imóveis de Luxo
                </h4>
                <p className="text-sm text-gray-600">
                  Como fazer análise jurídica completa em transações milionárias
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
