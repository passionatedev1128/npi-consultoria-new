import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, ScrollText, CheckCircle2, AlertTriangle, FileText, Shield, Scale, Clock, DollarSign, Key, Home as HomeIcon, Users, FileCheck, AlertCircle, Ban } from "lucide-react";

export default function ContratoCompraVendaAltoPadraoPage() {
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
              <span className="text-[#8B6F4B] font-medium">Contrato de Compra e Venda</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <ScrollText className="w-4 h-4" />
              Aspectos Legais
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Contrato de Compra e Venda: Cláusulas Essenciais em Imóveis de Alto Padrão
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              O que não pode faltar no contrato de imóveis de alto valor. Proteções legais, termos importantes e cláusulas essenciais para transações seguras acima de R$ 1 milhão.
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
                  Um contrato de compra e venda de imóvel de luxo deve conter: <strong>qualificação completa das partes</strong>, descrição detalhada do imóvel (matrícula, metragem, vagas), <strong>preço e forma de pagamento</strong> (especificar valores, prazos, correção), <strong>prazo de entrega</strong> (com multas por atraso), <strong>cláusula de rescisão</strong>, garantias, responsabilidades pós-entrega e foro judicial. Sempre com revisão jurídica especializada.
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              O <strong>Contrato de Compra e Venda</strong> é o documento mais importante de toda a transação imobiliária. Em negócios acima de <strong>R$ 1 milhão</strong>, cada palavra, cada cláusula e cada vírgula têm relevância jurídica e financeira significativa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Um contrato bem redigido é sua principal <strong>proteção legal</strong> contra problemas futuros. Por outro lado, um contrato mal elaborado pode gerar prejuízos milionários e disputas judiciais que se arrastam por anos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Este guia detalha as <strong>cláusulas essenciais</strong> que não podem faltar em um contrato de imóvel de alto padrão, protegendo tanto comprador quanto vendedor.
            </p>
          </section>

          {/* Tipos de Contrato */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              Tipos de Contratos Imobiliários
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3">1. Contrato de Promessa de Compra e Venda (Compromisso)</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Documento inicial que formaliza a intenção de compra, geralmente acompanhado de sinal/entrada.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Quando usar:</strong> Imóveis na planta, reserva de unidade, negociações longas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Característica:</strong> Pode ser registrado no cartório para ter "força de escritura"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Vantagem:</strong> Garante direitos do comprador durante a construção</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3">2. Escritura Pública de Compra e Venda</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Documento definitivo lavrado em cartório que transfere a propriedade do imóvel.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Quando usar:</strong> Imóveis prontos, quitação total, transferência imediata</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Característica:</strong> Obrigatório para transferência definitiva da propriedade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Vantagem:</strong> Segurança jurídica máxima, registro em cartório</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-3">3. Contrato Particular de Compra e Venda</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Documento privado entre as partes, sem necessidade de cartório.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Quando usar:</strong> Negociações diretas, imóveis de menor valor (não recomendado para luxo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Característica:</strong> Mais simples e barato, mas menos seguro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Desvantagem:</strong> Não tem força de escritura pública, menor proteção legal</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cláusulas Essenciais */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-purple-600" />
              </div>
              10 Cláusulas Essenciais em Contratos de Imóveis de Luxo
            </h2>

            <div className="space-y-6">
              {/* Cláusula 1 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#8B6F4B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">1. Qualificação Completa das Partes</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Identificação detalhada de comprador e vendedor:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Nome completo, CPF/CNPJ, RG, estado civil, regime de bens</li>
                      <li>• Endereço completo, nacionalidade, profissão</li>
                      <li>• Se casado: dados completos do cônjuge (mesmo que não seja parte)</li>
                      <li>• Se PJ: razão social, CNPJ, representantes legais com poderes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cláusula 2 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HomeIcon className="w-6 h-6 text-[#8B6F4B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">2. Descrição Detalhada do Imóvel</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Especificação completa e precisa do bem:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>Matrícula no Cartório de Registro de Imóveis</strong> (número + cartório)</li>
                      <li>• Endereço completo (rua, número, complemento, bairro, cidade, CEP)</li>
                      <li>• Área privativa e área total (em m²) conforme matrícula</li>
                      <li>• Número de vagas de garagem (especificar localização e números)</li>
                      <li>• Número de depósitos/boxes</li>
                      <li>• Confrontações (limites do imóvel)</li>
                      <li>• Benfeitorias, acabamentos especiais, móveis planejados incluídos</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cláusula 3 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-[#8B6F4B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">3. Preço e Forma de Pagamento</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Condições financeiras claras e detalhadas:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>Valor total do imóvel</strong> (por extenso e em algarismos)</li>
                      <li>• Sinal/Entrada: valor, data e forma de pagamento</li>
                      <li>• Parcelas intermediárias: quantidade, valores, datas, índice de correção</li>
                      <li>• Saldo final: valor, data, condições (à vista ou financiamento)</li>
                      <li>• Índice de correção monetária (INCC, IGP-M, IPCA)</li>
                      <li>• Multa e juros em caso de atraso de pagamento</li>
                      <li>• Forma de pagamento: dinheiro, transferência, financiamento bancário</li>
                      <li>• Responsabilidade por custos: ITBI, escritura, registro</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cláusula 4 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#8B6F4B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">4. Prazo de Entrega e Multas por Atraso</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      <strong>ESSENCIAL para imóveis na planta:</strong>
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Data específica de entrega (dia/mês/ano)</li>
                      <li>• Prazo de tolerância (máximo 180 dias pela Lei nº 4.591/64)</li>
                      <li>• <strong>Multa por atraso:</strong> percentual sobre valor pago (mínimo 0,5% ao mês)</li>
                      <li>• Possibilidade de rescisão após X dias de atraso</li>
                      <li>• Indenização por lucros cessantes (aluguel que deixou de receber)</li>
                      <li>• Direito a vistoria prévia antes da entrega definitiva</li>
                      <li>• Prazo para correção de vícios e defeitos</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cláusula 5 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Ban className="w-6 h-6 text-[#8B6F4B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">5. Cláusula de Rescisão e Penalidades</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Condições para cancelamento do contrato:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>Se comprador desistir:</strong> retenção de percentual (10-25% usual), restituição do saldo</li>
                      <li>• <strong>Se vendedor desistir:</strong> devolução em dobro do valor pago + indenização</li>
                      <li>• Hipóteses de rescisão por inadimplência (quantas parcelas em atraso)</li>
                      <li>• Direito de arrependimento (CDC se aplicável)</li>
                      <li>• Procedimento de notificação para rescisão</li>
                      <li>• Prazo para devolução de valores em caso de rescisão</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cláusula 6 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#8B6F4B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">6. Garantias e Responsabilidades</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Proteções para o comprador:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>Garantia legal:</strong> 5 anos para problemas estruturais (art. 618 CC)</li>
                      <li>• <strong>Garantia de vícios aparentes:</strong> 90 dias após entrega</li>
                      <li>• Responsabilidade da construtora por defeitos na construção</li>
                      <li>• Seguro garantia de conclusão da obra (se na planta)</li>
                      <li>• Declaração do vendedor de que o imóvel está livre de ônus</li>
                      <li>• Garantia de que documentos e certidões são autênticos</li>
                      <li>• Responsabilidade por dívidas anteriores (IPTU, condomínio)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cláusula 7 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Key className="w-6 h-6 text-[#8B6F4B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">7. Condições de Entrega e Imissão na Posse</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Como será a transferência física do imóvel:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Data e local para entrega de chaves</li>
                      <li>• Condição em que o imóvel será entregue (limpo, vazio, com mobília)</li>
                      <li>• Vistoria conjunta no ato da entrega</li>
                      <li>• Termo de entrega de chaves (documento separado)</li>
                      <li>• Responsabilidade por danos durante a mudança</li>
                      <li>• Prazo para apresentação de defeitos ocultos</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cláusula 8 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-[#8B6F4B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">8. Documentação e Regularização</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Obrigações quanto à documentação:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Relação de documentos que serão entregues pelo vendedor</li>
                      <li>• Prazo para apresentação de certidões negativas</li>
                      <li>• Responsabilidade por regularização de pendências</li>
                      <li>• Compromisso de averbação no cartório (prazo)</li>
                      <li>• Declaração de quitação de débitos (IPTU, condomínio)</li>
                      <li>• Obrigação de fornecer habite-se e averbação de construção</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cláusula 9 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-[#8B6F4B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">9. Disposições Gerais e Foro</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Cláusulas complementares importantes:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>Foro de eleição:</strong> comarca onde será resolvida qualquer disputa</li>
                      <li>• Idioma do contrato e lei aplicável</li>
                      <li>• Vedação de cessão de direitos sem autorização</li>
                      <li>• Comunicações e notificações (endereços oficiais)</li>
                      <li>• Alterações contratuais devem ser por escrito</li>
                      <li>• Cláusula de irrevogabilidade e irretratabilidade</li>
                      <li>• Validade de assinaturas digitais ou físicas</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cláusula 10 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-purple-400 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-[#8B6F4B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">10. Cláusulas Específicas para Alto Padrão</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Proteções adicionais em imóveis de luxo:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>Mobiliário sob medida:</strong> lista detalhada do que está incluído</li>
                      <li>• <strong>Obras de arte e decoração:</strong> especificar se incluídas ou não</li>
                      <li>• <strong>Automação residencial:</strong> garantia e assistência técnica</li>
                      <li>• <strong>Piscina/SPA privativos:</strong> responsabilidade de manutenção</li>
                      <li>• <strong>Sistema de segurança:</strong> especificação e garantia</li>
                      <li>• <strong>Ar-condicionado central:</strong> garantia estendida</li>
                      <li>• <strong>Acabamentos premium:</strong> marcas e qualidades especificadas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Box de Alerta */}
          <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">🚨 NUNCA Assine um Contrato Sem Revisão Jurídica!</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Em transações acima de R$ 1 milhão, <strong>SEMPRE</strong> contrate um advogado especializado em direito imobiliário para revisar o contrato ANTES de assinar.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  O custo de R$ 3.000 a R$ 10.000 para revisão jurídica é <strong>insignificante</strong> comparado ao risco de assinar um contrato desfavorável que pode custar milhões em disputas futuras.
                </p>
              </div>
            </div>
          </div>

          {/* Cláusulas Abusivas */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Ban className="w-6 h-6 text-red-600" />
              </div>
              Cláusulas Abusivas que Você Deve RECUSAR
            </h2>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-gray-700 text-sm mb-4">
                Fique atento e <strong>NUNCA aceite</strong> as seguintes cláusulas:
              </p>
              
              <div className="space-y-3 text-gray-700 text-sm">
                <div className="bg-white rounded p-4">
                  <p className="font-bold text-red-800 mb-2">❌ Retenção excessiva em caso de desistência</p>
                  <p>Retenção acima de 25% do valor pago é considerada abusiva. O padrão de mercado é 10-20%.</p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-red-800 mb-2">❌ Prazo de tolerância acima de 180 dias</p>
                  <p>A Lei nº 4.591/64 permite no máximo 180 dias de tolerância para atraso na entrega.</p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-red-800 mb-2">❌ Ausência de multa para a incorporadora em caso de atraso</p>
                  <p>Se há multa para o comprador por atraso no pagamento, DEVE haver multa equivalente para atraso na entrega.</p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-red-800 mb-2">❌ Cláusula de "motivo de força maior" muito abrangente</p>
                  <p>Não pode incluir problemas previsíveis (falta de material, mão de obra, fornecedores).</p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-red-800 mb-2">❌ Correção monetária após entrega das chaves</p>
                  <p>Parcelas não podem ser corrigidas após a entrega do imóvel (Súmula STJ).</p>
                </div>

                <div className="bg-white rounded p-4">
                  <p className="font-bold text-red-800 mb-2">❌ Possibilidade de alteração unilateral do projeto</p>
                  <p>Alterações significativas devem ser aprovadas pelos compradores.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Checklist */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Checklist Antes de Assinar</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">✅ Verifique se o contrato contém:</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2 text-gray-700 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Qualificação completa das partes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Matrícula do imóvel</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Preço total e forma de pagamento detalhada</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Data de entrega com prazo de tolerância</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Multas por atraso (ambas as partes)</span>
                  </div>
                </div>
                
                <div className="space-y-2 text-gray-700 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Condições de rescisão</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Garantias e responsabilidades</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Lista de documentos a serem entregues</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Foro de eleição</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Assinatura de todas as partes e testemunhas</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusão</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O <strong>Contrato de Compra e Venda</strong> é o alicerce legal de toda transação imobiliária. Em negócios de alto padrão acima de R$ 1 milhão, cada cláusula deve ser cuidadosamente elaborada e negociada para proteger os interesses de ambas as partes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Não tenha pressa ao assinar. Leia atentamente, questione pontos obscuros, negocie cláusulas desfavoráveis e, mais importante, <strong>sempre contrate um advogado especializado</strong> para revisar o documento antes da assinatura.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Um contrato bem feito é seu melhor seguro contra problemas futuros. O investimento em assessoria jurídica de qualidade é <strong>infinitamente menor</strong> que o custo de um contrato mal elaborado.
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
                  Lista completa de documentos para transações acima de R$ 1 milhão
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
                  Como fazer análise jurídica completa e evitar problemas
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
