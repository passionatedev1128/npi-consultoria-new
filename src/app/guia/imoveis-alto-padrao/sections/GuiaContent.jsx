"use client";

import Link from "next/link";
import { 
  MapPin, 
  TrendingUp, 
  Building2, 
  ClipboardCheck,
  FileText,
  Shield,
  FileCheck,
  ScrollText,
  Landmark,
  CreditCard,
  Calculator,
  Receipt,
  FileSpreadsheet,
  DollarSign,
  Building,
  Home,
  Crown,
  Palmtree,
  BarChart3,
  TrendingUpIcon,
  Gem,
  Sparkles,
  HardHat,
  Palette,
  Users
} from "lucide-react";

export function GuiaContent() {
  return (
    <section className="w-full mx-auto py-16 bg-gradient-to-b from-white to-gray-50 dark:bg-gray-900">
      <style jsx>{`
        .npi-gold-badge {
          background-color: #F5F1E8;
          color: #8B6F4B;
        }
        .npi-gold-text {
          color: #8B6F4B;
        }
        .npi-gold-bg {
          background-color: #F5F1E8;
        }
        .npi-gold-icon {
          color: #8B6F4B;
        }
        .npi-nav-btn {
          border: 2px solid #D4C4A8;
        }
        .npi-nav-btn:hover {
          border-color: #8B6F4B;
          background-color: #F5F1E8;
          color: #8B6F4B;
        }
        .npi-card {
          border: 1px solid #E5E5E5;
        }
        .npi-card:hover {
          border-color: #8B6F4B;
        }
        .npi-card-icon {
          background-color: #F5F1E8;
        }
        .npi-card:hover .npi-card-icon {
          background-color: #E8DCC8;
        }
        .npi-card:hover .npi-card-title {
          color: #8B6F4B;
        }
        .npi-gradient-cta {
          background: linear-gradient(135deg, #8B6F4B 0%, #6B5539 100%);
        }
        .npi-btn-primary {
          background-color: white;
          color: #8B6F4B;
        }
        .npi-btn-primary:hover {
          background-color: #F5F1E8;
        }
        .npi-btn-secondary {
          background-color: #6B5539;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
        .npi-btn-secondary:hover {
          background-color: #8B6F4B;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Introdução Sofisticada */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <span className="npi-gold-badge px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Guia Exclusivo
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Invista com Inteligência em Imóveis de Alto Padrão
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            A aquisição de um imóvel de alto padrão transcende uma simples transação imobiliária. 
            É um investimento estratégico que exige conhecimento aprofundado sobre localização premium, 
            aspectos legais, tributação e valorização patrimonial.
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Este guia reúne <span className="font-semibold text-gray-900 dark:text-white">tudo que você precisa saber</span> antes 
            de investir entre <span className="font-semibold npi-gold-text">R$ 1 milhão e R$ 65 milhões</span> em 
            imóveis de luxo, com insights exclusivos do maior hub de imobiliárias boutique de alto padrão de São Paulo.
          </p>
        </div>

        {/* Navegação Rápida */}
        <div className="max-w-6xl mx-auto mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Navegue pelo Guia
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { label: "Antes de Investir", id: "antes-investir" },
              { label: "Aspectos Legais", id: "aspectos-legais" },
              { label: "Financiamento", id: "financiamento" },
              { label: "Tributação", id: "tributacao" },
              { label: "Tipos de Imóveis", id: "tipos-imoveis" },
              { label: "Valorização", id: "valorizacao" },
              { label: "Lifestyle", id: "lifestyle" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="npi-nav-btn text-center p-3 rounded-lg transition-all duration-200 text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Seção 1: ANTES DE INVESTIR */}
        <div id="antes-investir" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 npi-gold-bg rounded-xl flex items-center justify-center">
              <ClipboardCheck className="w-6 h-6 npi-gold-icon" />
            </div>
            <div>
              <span className="text-sm font-semibold npi-gold-text uppercase tracking-wide">
                Etapa 01
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Antes de Investir
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ArticleCard
              icon={<MapPin className="w-6 h-6" />}
              title="Como Escolher a Localização Ideal para Imóveis de Alto Padrão"
              description="Descubra os critérios essenciais para identificar bairros nobres com maior potencial de valorização, infraestrutura premium e exclusividade."
              link="/guia/localizacao-imoveis-alto-padrao"
              badge="Essencial"
            />
            
            <ArticleCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Investimento em Imóveis de Luxo: Vale a Pena?"
              description="Análise completa sobre rentabilidade, proteção patrimonial e valorização em investimentos acima de R$ 1 milhão."
              link="/guia/investimento-imoveis-luxo"
              badge="Popular"
            />
            
            <ArticleCard
              icon={<Users className="w-6 h-6" />}
              title="Investimento em SCP: Sociedade em Conta de Participação"
              description="Entenda como funciona a SCP no mercado imobiliário de alto padrão, vantagens tributárias e estruturação de investimentos em grupo."
              link="/guia/investimento-scp-imoveis"
              badge="Novo"
            />
            
            <ArticleCard
              icon={<Building2 className="w-6 h-6" />}
              title="Imóvel na Planta vs Pronto: O que é Melhor no Alto Padrão?"
              description="Compare vantagens, riscos e oportunidades de valorização em cada modalidade para imóveis de luxo."
              link="/guia/imovel-planta-vs-pronto"
            />
            
            <ArticleCard
              icon={<ClipboardCheck className="w-6 h-6" />}
              title="Checklist Completo: O que Avaliar em um Imóvel de Alto Padrão"
              description="Do acabamento premium às áreas comuns: todos os detalhes técnicos e diferenciais que fazem a diferença."
              link="/guia/checklist-imovel-alto-padrao"
            />
          </div>
        </div>

        {/* Seção 2: ASPECTOS LEGAIS */}
        <div id="aspectos-legais" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                Etapa 02
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Aspectos Legais e Burocráticos
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ArticleCard
              icon={<FileText className="w-6 h-6" />}
              title="Documentação Necessária para Comprar Imóvel Acima de R$ 1 Milhão"
              description="Lista completa de documentos e cuidados especiais em transações de alto valor. Due diligence e verificações essenciais."
              link="/guia/documentacao-imovel-alto-padrao"
            />
            
            <ArticleCard
              icon={<Shield className="w-6 h-6" />}
              title="Patrimônio de Afetação em Incorporações de Luxo"
              description="Proteção jurídica essencial ao comprar imóveis de alto padrão na planta. Entenda seus direitos e segurança patrimonial."
              link="/guia/patrimonio-afetacao-alto-padrao"
              badge="Importante"
            />
            
            <ArticleCard
              icon={<FileCheck className="w-6 h-6" />}
              title="Due Diligence em Imóveis de Luxo: Guia Completo"
              description="Como realizar análise jurídica detalhada e evitar problemas em transações milionárias. Checklist profissional."
              link="/guia/due-diligence-imoveis-luxo"
            />
            
            <ArticleCard
              icon={<ScrollText className="w-6 h-6" />}
              title="Contrato de Compra e Venda: Cláusulas Essenciais"
              description="O que não pode faltar no contrato de imóveis de alto valor. Proteções legais e termos importantes."
              link="/guia/contrato-compra-venda-alto-padrao"
            />
          </div>
        </div>

        {/* Seção 3: FINANCIAMENTO */}
        <div id="financiamento" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
              <Landmark className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <span className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                Etapa 03
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Financiamento e Pagamento
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ArticleCard
              icon={<Landmark className="w-6 h-6" />}
              title="Como Financiar um Imóvel de Alto Padrão"
              description="Opções de crédito imobiliário para valores acima de R$ 1 milhão, taxas diferenciadas e relacionamento bancário premium."
              link="/guia/financiamento-imovel-alto-padrao"
              badge="Guia Prático"
            />
            
            <ArticleCard
              icon={<CreditCard className="w-6 h-6" />}
              title="Formas de Pagamento em Imóveis de Luxo"
              description="À vista, parcelado direto, permuta: entenda cada modalidade, vantagens fiscais e estratégias de negociação."
              link="/guia/formas-pagamento-imoveis-luxo"
            />
            
            <ArticleCard
              icon={<Calculator className="w-6 h-6" />}
              title="Simulador: Quanto Preciso de Entrada para um Imóvel Premium?"
              description="Calcule o investimento inicial necessário para imóveis de R$ 1mi a R$ 65mi. Planejamento financeiro completo."
              link="/guia/simulador-entrada-imovel-premium"
            />
          </div>
        </div>

        {/* Seção 4: TRIBUTAÇÃO */}
        <div id="tributacao" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 npi-gold-bg rounded-xl flex items-center justify-center">
              <Receipt className="w-6 h-6 npi-gold-icon" />
            </div>
            <div>
              <span className="text-sm font-semibold npi-gold-text uppercase tracking-wide">
                Etapa 04
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Tributação e Impostos
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ArticleCard
              icon={<Receipt className="w-6 h-6" />}
              title="ITBI em Imóveis de Alto Padrão: Como Calcular e Otimizar"
              description="Entenda o Imposto de Transmissão, alíquotas específicas e estratégias legais para redução de custos."
              link="/guia/itbi-imoveis-alto-padrao"
              badge="Economia"
            />
            
            <ArticleCard
              icon={<FileSpreadsheet className="w-6 h-6" />}
              title="ITCMD em Heranças e Doações de Imóveis de Luxo"
              description="Planejamento sucessório e tributação estadual em imóveis de alto valor. Estratégias de proteção patrimonial."
              link="/guia/itcmd-imoveis-luxo"
            />
            
            <ArticleCard
              icon={<DollarSign className="w-6 h-6" />}
              title="Imposto de Renda na Venda de Imóveis Premium"
              description="Como declarar e calcular ganho de capital em transações milionárias. Isenções e reduções legais."
              link="/guia/imposto-renda-venda-imoveis"
            />
            
            <ArticleCard
              icon={<Building className="w-6 h-6" />}
              title="Comprar Imóvel como PJ ou PF: O que é Mais Vantajoso?"
              description="Análise tributária comparativa para investidores e empresários. Holding patrimonial vs pessoa física."
              link="/guia/imovel-pj-vs-pf"
            />
          </div>
        </div>

        {/* Seção 5: TIPOS DE IMÓVEIS */}
        <div id="tipos-imoveis" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                Etapa 05
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Tipos de Imóveis e Características
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ArticleCard
              icon={<Building className="w-6 h-6" />}
              title="Apartamento Alto Padrão: O que Define um Imóvel de Luxo?"
              description="Metragem, acabamento, localização e tecnologia: características que classificam um apartamento como premium."
              link="/guia/apartamento-alto-padrao"
            />
            
            <ArticleCard
              icon={<Home className="w-6 h-6" />}
              title="Casa de Alto Padrão vs Apartamento de Luxo"
              description="Análise comparativa de vantagens, manutenção, segurança e valorização para seu perfil de investimento."
              link="/guia/casa-vs-apartamento-luxo"
            />
            
            <ArticleCard
              icon={<Crown className="w-6 h-6" />}
              title="Coberturas Duplex e Triplex: O Topo do Mercado de Luxo"
              description="Exclusividade máxima, terraços privativos e valorização diferenciada das coberturas premium."
              link="/guia/coberturas-duplex-triplex"
              badge="Premium"
            />
            
            <ArticleCard
              icon={<Palmtree className="w-6 h-6" />}
              title="Imóveis de Alto Padrão no Litoral: Guia de Investimento"
              description="Potencial de rentabilidade por temporada e valorização em destinos de luxo no litoral paulista."
              link="/guia/imoveis-alto-padrao-litoral"
            />
          </div>
        </div>

        {/* Seção 6: VALORIZAÇÃO */}
        <div id="valorizacao" className="mb-20 scroll-mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center">
              <TrendingUpIcon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                Etapa 06
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Valorização e Investimento
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ArticleCard
              icon={<Gem className="w-6 h-6" />}
              title="Como Escolher Imóvel que Valoriza: Guia Completo"
              description="Fatores que impactam valorização, sinais de áreas em ascensão e método passo a passo para análise profissional."
              link="/guia/como-escolher-imovel-valoriza"
              badge="Essencial"
            />
            
            <ArticleCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Bairros Nobres com Maior Valorização em São Paulo"
              description="Análise de mercado e dados históricos: onde investir para máximo retorno patrimonial na capital."
              link="/guia/bairros-maior-valorizacao-sp"
              badge="Dados 2025"
            />
            
            <ArticleCard
              icon={<TrendingUpIcon className="w-6 h-6" />}
              title="Tendências do Mercado Imobiliário de Luxo"
              description="Projeções, insights exclusivos e análise de especialistas para investidores em imóveis premium."
              link="/guia/tendencias-mercado-imoveis-luxo"
            />
          </div>
        </div>

        {/* Seção 7: LIFESTYLE */}
        <div id="lifestyle" className="mb-16 scroll-mt-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <span className="text-sm font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wide">
                Etapa 07
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Estilo de Vida e Diferenciais
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ArticleCard
              icon={<Sparkles className="w-6 h-6" />}
              title="Amenities em Condomínios de Luxo: O que Esperar"
              description="Academia premium, spa, coworking, pet place: conheça os diferenciais dos melhores condomínios de alto padrão."
              link="/guia/amenities-condominios-luxo"
            />
            
            <ArticleCard
              icon={<HardHat className="w-6 h-6" />}
              title="Construtoras e Incorporadoras Premium: Como Escolher"
              description="Reputação, solidez financeira e padrão de qualidade das principais players do mercado de luxo."
              link="/guia/construtoras-incorporadoras-premium"
            />
            
            <ArticleCard
              icon={<Palette className="w-6 h-6" />}
              title="Arquitetura e Design em Imóveis de Alto Padrão"
              description="Assinatura de arquitetos renomados, acabamentos exclusivos e tendências internacionais de design."
              link="/guia/arquitetura-design-alto-padrao"
            />
          </div>
        </div>

        {/* CTA Final Sofisticado */}
        <div className="mt-20 npi-gradient-cta rounded-3xl p-12 text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para Investir em Imóveis de Alto Padrão?
            </h2>
            <p className="text-xl mb-8" style={{ color: '#F5F1E8' }}>
              Navegue pela nossa curadoria exclusiva de imóveis de luxo entre R$ 1 milhão e R$ 65 milhões. 
              Especialistas em posicionamento digital e consultoria personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/busca"
                target="_blank"
                rel="noopener noreferrer"
                className="npi-btn-primary inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Ver Imóveis Disponíveis
              </Link>
              <Link
                href="/sobre/hub-imobiliarias"
                className="npi-btn-secondary inline-flex items-center justify-center px-8 py-4 text-white rounded-xl font-bold text-lg transition-all duration-200"
              >
                Conheça o HUB NPi
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer Footer */}
        <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Este guia foi desenvolvido pela <span className="font-semibold">NPi Consultoria</span>, 
            o maior hub de imobiliárias boutique de alto padrão de São Paulo, com mais de 20 anos de experiência 
            e +5.000 posições orgânicas no Google.
          </p>
        </div>

      </div>
    </section>
  );
}

// Componente ArticleCard Reutilizável
function ArticleCard({ icon, title, description, link, badge }) {
  return (
    <Link href={link} className="group">
      <div className="npi-card h-full bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 dark:border-gray-700 relative overflow-hidden">
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4">
            <span className="npi-gold-badge px-3 py-1 rounded-full text-xs font-semibold">
              {badge}
            </span>
          </div>
        )}
        
        {/* Icon */}
        <div className="npi-card-icon w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors">
          <div className="npi-gold-icon">
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className="npi-card-title text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors leading-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Read More Link */}
        <div className="flex items-center npi-gold-text font-semibold text-sm group-hover:gap-2 transition-all">
          <span>Ler artigo completo</span>
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
