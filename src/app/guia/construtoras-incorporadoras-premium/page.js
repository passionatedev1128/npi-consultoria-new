'use client';

import Link from 'next/link';
import { Header } from '@/app/components/ui/header';
import { Footer } from '@/app/components/ui/footer';
import { ChevronRight, Home, BookOpen, Star } from 'lucide-react';

export default function ConstrutorasIncorporadorasPremium() {
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
              <span className="text-[#8B6F4B] font-medium">Construtoras Premium</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              Seção 7: Lifestyle e Comodidades
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Construtoras e Incorporadoras Premium: Como Escolher
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Reputação, solidez financeira e padrão de qualidade das principais construtoras de alto padrão em São Paulo.
            </p>
          </header>

          {/* Box de Resposta Direta */}
          <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🏗️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>As construtoras premium mais consolidadas em São Paulo:</strong>
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Cyrela:</strong> Maior construtora do Brasil, portfólio diversificado em alto padrão</li>
                  <li><strong>Lindenberg:</strong> Tradição de 70 anos, criadora do conceito "mansões sobrepostas"</li>
                  <li><strong>Eztec:</strong> Maior lucratividade do setor, projetos icônicos, 46 anos de história</li>
                  <li><strong>JHSF:</strong> Ultra-luxo, marca Fasano, empreendimentos exclusivos</li>
                  <li><strong>Mitre Realty:</strong> 60 anos de história, foco em lifestyle e experiências</li>
                  <li><strong>Even:</strong> Pioneira em sustentabilidade, certificação AQUA, +250 empreendimentos</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3 italic">
                  Avalie: histórico de entregas, saúde financeira, qualidade construtiva e valor de revenda.
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              A escolha da <strong>construtora</strong> é tão importante quanto a localização do imóvel. Uma incorporadora com reputação sólida garante <strong>qualidade construtiva, cumprimento de prazos e valorização patrimonial</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              No mercado de alto padrão, algumas construtoras destacam-se pela <strong>excelência em acabamentos, inovação arquitetônica e solidez financeira</strong>. Este guia ajuda você a avaliar e escolher as melhores.
            </p>
          </section>

          {/* Critérios de Avaliação */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Critérios para Avaliar Construtoras Premium
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Solidez Financeira
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A saúde financeira da construtora garante que seu empreendimento será <strong>concluído no prazo e com qualidade</strong>.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Capital aberto:</strong> Construtoras listadas na B3 têm transparência obrigatória</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Demonstrações financeiras:</strong> Consulte balanços trimestrais e anuais</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Rating de crédito:</strong> Avaliações de agências como Moody's e Fitch</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Histórico:</strong> Empresa com +20 anos de atuação tem track record comprovado</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Reputação e Histórico de Entregas
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      O passado da construtora indica como será sua experiência futura.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                      <p className="font-semibold text-gray-900 mb-2">Como Pesquisar:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Reclame Aqui:</strong> Índice de resolução acima de 80%</li>
                        <li>• <strong>Google Reviews:</strong> Avaliações de moradores reais</li>
                        <li>• <strong>Procon:</strong> Histórico de reclamações e processos</li>
                        <li>• <strong>Imprensa especializada:</strong> Prêmios e reconhecimentos</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg text-sm text-gray-700">
                      <strong>⚠️ Red Flags:</strong> Atrasos recorrentes, obras paralisadas, alta rotatividade de executivos.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Padrão de Qualidade Construtiva
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Construtoras premium investem em <strong>tecnologia, materiais superiores e controle de qualidade rigoroso</strong>.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="font-semibold text-gray-900 mb-2">Tecnologia Construtiva:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Lajes protendidas</li>
                          <li>• Fachadas ventiladas</li>
                          <li>• Isolamento acústico superior</li>
                          <li>• Automação predial</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <p className="font-semibold text-gray-900 mb-2">Acabamentos:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Marcas premium (Deca, Portobello)</li>
                          <li>• Piso porcelanato 60x60+</li>
                          <li>• Vidros temperados/laminados</li>
                          <li>• Metais cromados/black matte</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Valorização dos Empreendimentos
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Imóveis de construtoras renomadas <strong>valorizam mais e vendem mais rápido</strong>.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="font-semibold text-gray-900 mb-3">Análise de Revenda:</p>
                      <p className="text-sm text-gray-700 mb-2">
                        Pesquise imóveis antigos da construtora em sites de classificados:
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Compare valor de lançamento vs revenda atual</li>
                        <li>• Observe tempo médio de venda</li>
                        <li>• Verifique conservação após 5-10 anos</li>
                        <li>• Analise taxa de vacância em locações</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Pós-Venda e Garantias
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      O relacionamento com a construtora continua <strong>após a entrega das chaves</strong>.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Garantia estrutural:</strong> 5 anos (Lei 4.591/64)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Garantia de instalações:</strong> 2 anos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Atendimento:</strong> SAC dedicado e equipe de manutenção</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Revisões:</strong> Vistoria 6 meses após entrega</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Principais Construtoras */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Principais Construtoras de Alto Padrão em SP
            </h2>
            
            <div className="space-y-6">
              {/* Cyrela */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-12 bg-[#8B6F4B] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Cyrela Brazil Realty</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Fundação:</strong> 1962</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Listada na B3:</strong> Sim (CYRE3)</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Faturamento:</strong> R$ 5+ bilhões/ano</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Unidades entregues:</strong> +200 mil</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Foco:</strong> Alto e médio padrão</p>
                    <p className="text-sm text-gray-600"><strong>Destaque:</strong> Maior construtora do Brasil</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Diferenciais:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Solidez financeira inquestionável</li>
                    <li>• Portfólio diversificado (residencial e comercial)</li>
                    <li>• Parcerias com arquitetos renomados</li>
                    <li>• Linha Living (alto padrão) consolidada</li>
                  </ul>
                </div>
              </div>

              {/* Lindenberg */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-12 bg-[#8B6F4B] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Adolpho Lindenberg</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Fundação:</strong> 1954</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Listada na B3:</strong> Sim (CALI3)</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Empreendimentos:</strong> +700</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>História:</strong> 70 anos</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Foco:</strong> Altíssimo padrão</p>
                    <p className="text-sm text-gray-600"><strong>Destaque:</strong> Estilo neoclássico icônico</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Diferenciais:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Criador do conceito "mansões sobrepostas"</li>
                    <li>• Estilo neoclássico reconhecido como "Estilo Lindenberg"</li>
                    <li>• Pioneira no lançamento do primeiro flat do Brasil</li>
                    <li>• Tradição centenária e exclusividade</li>
                    <li>• Parceria estratégica com Eztec</li>
                  </ul>
                </div>
              </div>

              {/* JHSF */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-12 bg-[#8B6F4B] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">JHSF Participações</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Fundação:</strong> 1972</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Listada na B3:</strong> Sim (JHSF3)</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Marca Fasano:</strong> Ultra-luxo</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Foco:</strong> Altíssimo padrão</p>
                    <p className="text-sm text-gray-600"><strong>Destaque:</strong> Exclusividade absoluta</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Diferenciais:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Empreendimentos ultra-exclusivos</li>
                    <li>• Serviços Fasano integrados</li>
                    <li>• Acabamentos sob medida</li>
                    <li>• Condomínios com pouquíssimas unidades</li>
                  </ul>
                </div>
              </div>

              {/* Mitre Realty */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-12 bg-[#8B6F4B] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Mitre Realty</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Fundação:</strong> 1962</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Listada na B3:</strong> Sim (MTRE3) desde 2020</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Empreendimentos:</strong> +20 entregues</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>História:</strong> 60+ anos</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Foco:</strong> Médio e alto padrão</p>
                    <p className="text-sm text-gray-600"><strong>Destaque:</strong> Empresa familiar (3ª geração)</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Diferenciais:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Certificação ISO 9001</li>
                    <li>• 4 linhas de produtos segmentadas (Origem, Raízes, Haus, Exclusive)</li>
                    <li>• Vendas de R$ 1+ bilhão em 2023</li>
                    <li>• Alto índice de satisfação de clientes</li>
                    <li>• Foco em design, cultura e lifestyle</li>
                  </ul>
                </div>
              </div>

              {/* Eztec */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-12 bg-[#8B6F4B] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Eztec</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Fundação:</strong> 1979</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Listada na B3:</strong> Sim (EZTC3) desde 2007</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Empreendimentos:</strong> +191 lançados</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Área construída:</strong> 5,7+ milhões m²</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Foco:</strong> Médio e alto padrão</p>
                    <p className="text-sm text-gray-600"><strong>Destaque:</strong> Maior lucratividade do setor</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Diferenciais:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Maior lucratividade entre empresas de capital aberto do setor</li>
                    <li>• Certificações ISO 9001 e PBQP-H nível A</li>
                    <li>• Modelo de negócio totalmente integrado</li>
                    <li>• Projetos icônicos (EZ Towers, Esther Towers)</li>
                    <li>• Joint-venture com Lindenberg desde 2022</li>
                  </ul>
                </div>
              </div>

              {/* Even */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-12 bg-[#8B6F4B] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">Even Construtora</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Fundação:</strong> 2002 (empresas base: 1974 e 1978)</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Listada na B3:</strong> Sim (EVEN3) desde 2007</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Empreendimentos:</strong> +250 entregues</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2"><strong>Área construída:</strong> 4,5+ milhões m²</p>
                    <p className="text-sm text-gray-600 mb-2"><strong>Foco:</strong> Alto e altíssimo padrão</p>
                    <p className="text-sm text-gray-600"><strong>Destaque:</strong> Pioneira em sustentabilidade</p>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Diferenciais:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Pioneira em sustentabilidade no setor (ISE B3)</li>
                    <li>• 1ª incorporadora da América Latina com certificação AQUA</li>
                    <li>• Atuação verticalizada (controle total do processo)</li>
                    <li>• 1ª incorporadora pet friendly do mercado</li>
                    <li>• Foco regiões Oeste e Sul de São Paulo</li>
                  </ul>
                </div>
              </div>

              {/* Outras Construtoras */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Outras Construtoras de Destaque
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">🏗️ Tegra</p>
                    <p className="text-sm text-gray-700">45+ anos, Grupo Brookfield, certificações AQUA-HQE e sustentabilidade</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">🏗️ Stan</p>
                    <p className="text-sm text-gray-700">70 anos de história, projetos icônicos, pioneira em Carbon Control</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">🏗️ Exto</p>
                    <p className="text-sm text-gray-700">35+ anos, +80 empreendimentos, certificação PBQP-H nível A</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">🏗️ Tecnisa</p>
                    <p className="text-sm text-gray-700">Design contemporâneo arrojado, inovação tecnológica, sustentabilidade</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Checklist Final */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Checklist: Avaliando sua Construtora
            </h2>
            
            <div className="bg-white rounded-xl p-8 border-2 border-[#8B6F4B]">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Pesquisei a saúde financeira da construtora</p>
                    <p className="text-sm text-gray-600">Balanços, rating, capital aberto</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Verifiquei histórico de entregas no prazo</p>
                    <p className="text-sm text-gray-600">Últimos 5 anos, percentual de atraso</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Consultei Reclame Aqui e Procon</p>
                    <p className="text-sm text-gray-600">Índice de resolução, principais reclamações</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Visitei obras entregues recentemente</p>
                    <p className="text-sm text-gray-600">Qualidade após 1-2 anos, conservação</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Conversei com moradores de outros empreendimentos</p>
                    <p className="text-sm text-gray-600">Satisfação real, problemas enfrentados</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Analisei valorização de imóveis antigos</p>
                    <p className="text-sm text-gray-600">Comparativo lançamento vs revenda</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Li o contrato de compra e venda na íntegra</p>
                    <p className="text-sm text-gray-600">Com auxílio de advogado especializado</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Verifiquei garantias e pós-venda</p>
                    <p className="text-sm text-gray-600">Cobertura, canais de atendimento</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre o Imóvel Ideal para Você</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore nosso portfólio com empreendimentos das melhores construtoras de São Paulo
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
                href="/guia/amenities-condominios-luxo"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Star className="w-4 h-4" />
                  LIFESTYLE
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Amenities em Condomínios de Luxo
                </h4>
                <p className="text-sm text-gray-600">
                  Academia, spa, coworking: conheça os diferenciais premium.
                </p>
              </Link>

              <Link
                href="/guia/arquitetura-design-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Star className="w-4 h-4" />
                  DESIGN
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Arquitetura e Design de Alto Padrão
                </h4>
                <p className="text-sm text-gray-600">
                  Assinatura de arquitetos renomados e tendências internacionais.
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
