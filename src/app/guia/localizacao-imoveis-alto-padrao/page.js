import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, MapPin, TrendingUp, Building2, Shield, Navigation } from "lucide-react";

export default function LocalizacaoImoveisAltoPadraoPage() {
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
              <span className="text-[#8B6F4B] font-medium">Localização Ideal</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              Antes de Investir
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Como Escolher a Localização Ideal para Imóveis de Alto Padrão
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              A localização é o fator mais importante na valorização de imóveis de luxo. 
              Descubra os critérios essenciais que definem um endereço premium em São Paulo.
            </p>
          </header>

          {/* Mapa SVG - INLINE */}
          <div className="mb-12 rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200" style={{ height: '600px' }}>
            <svg viewBox="0 0 800 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {/* Fundo com gradiente suave */}
              <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#F5F1E8', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#E8DCC8', stopOpacity: 1 }} />
                </linearGradient>
                
                <linearGradient id="markerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#8B6F4B', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#6B5539', stopOpacity: 1 }} />
                </linearGradient>

                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                  <feOffset dx="0" dy="2" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background */}
              <rect width="800" height="600" fill="url(#bgGradient)" />

              {/* Contorno de São Paulo */}
              <path
                d="M 150 200 Q 180 150, 250 140 T 400 120 Q 500 130, 580 180 L 620 250 Q 630 320, 600 400 L 550 480 Q 480 520, 380 530 L 280 520 Q 200 490, 160 420 L 140 340 Q 135 270, 150 200 Z"
                fill="none"
                stroke="#8B6F4B"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.3"
              />

              {/* Grid de referência */}
              <g opacity="0.1">
                {[...Array(8)].map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={100 + i * 75}
                    y1="100"
                    x2={100 + i * 75}
                    y2="500"
                    stroke="#8B6F4B"
                    strokeWidth="0.5"
                  />
                ))}
                {[...Array(6)].map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="100"
                    y1={100 + i * 80}
                    x2="700"
                    y2={100 + i * 80}
                    stroke="#8B6F4B"
                    strokeWidth="0.5"
                  />
                ))}
              </g>

              {/* Título */}
              <text x="400" y="40" textAnchor="middle" fill="#8B6F4B" fontSize="24" fontWeight="bold" fontFamily="system-ui">
                Bairros Premium de São Paulo
              </text>
              <text x="400" y="70" textAnchor="middle" fill="#6B5539" fontSize="14" fontFamily="system-ui">
                Regiões de Alto Padrão com Maior Valorização
              </text>

              {/* Marcadores dos Bairros */}
              <g>
                {/* Jardim Europa */}
                <circle cx="320" cy="280" r="14" fill="url(#markerGradient)" filter="url(#shadow)" />
                <circle cx="320" cy="280" r="9" fill="#F5F1E8" opacity="0.9" />
                <text x="320" y="260" textAnchor="middle" fill="#2D2D2D" fontSize="13" fontWeight="700">Jardim Europa</text>
                <text x="320" y="310" textAnchor="middle" fill="#8B6F4B" fontSize="11" fontWeight="bold">R$ 20-65k/m²</text>

                {/* Jardim Paulista */}
                <circle cx="380" cy="260" r="13" fill="url(#markerGradient)" filter="url(#shadow)" />
                <circle cx="380" cy="260" r="8" fill="#F5F1E8" opacity="0.9" />
                <text x="380" y="240" textAnchor="middle" fill="#2D2D2D" fontSize="13" fontWeight="600">Jardim Paulista</text>
                <text x="380" y="290" textAnchor="middle" fill="#8B6F4B" fontSize="11" fontWeight="bold">R$ 15-45k/m²</text>

                {/* Itaim Bibi */}
                <circle cx="420" cy="300" r="14" fill="url(#markerGradient)" filter="url(#shadow)" />
                <circle cx="420" cy="300" r="9" fill="#F5F1E8" opacity="0.9" />
                <text x="420" y="280" textAnchor="middle" fill="#2D2D2D" fontSize="13" fontWeight="700">Itaim Bibi</text>
                <text x="420" y="330" textAnchor="middle" fill="#8B6F4B" fontSize="11" fontWeight="bold">R$ 17-100k/m²</text>

                {/* Moema */}
                <circle cx="380" cy="360" r="12" fill="url(#markerGradient)" filter="url(#shadow)" />
                <circle cx="380" cy="360" r="8" fill="#F5F1E8" opacity="0.9" />
                <text x="380" y="340" textAnchor="middle" fill="#2D2D2D" fontSize="13" fontWeight="600">Moema</text>
                <text x="380" y="390" textAnchor="middle" fill="#8B6F4B" fontSize="11" fontWeight="bold">R$ 13-40k/m²</text>

                {/* Vila Nova Conceição */}
                <circle cx="460" cy="340" r="13" fill="url(#markerGradient)" filter="url(#shadow)" />
                <circle cx="460" cy="340" r="8" fill="#F5F1E8" opacity="0.9" />
                <text x="460" y="320" textAnchor="middle" fill="#2D2D2D" fontSize="13" fontWeight="600">Vila Nova</text>
                <text x="460" y="332" textAnchor="middle" fill="#2D2D2D" fontSize="13" fontWeight="600">Conceição</text>
                <text x="460" y="370" textAnchor="middle" fill="#8B6F4B" fontSize="11" fontWeight="bold">R$ 17-50k/m²</text>

                {/* Vila Olímpia */}
                <circle cx="480" cy="380" r="12" fill="url(#markerGradient)" filter="url(#shadow)" />
                <circle cx="480" cy="380" r="8" fill="#F5F1E8" opacity="0.9" />
                <text x="480" y="360" textAnchor="middle" fill="#2D2D2D" fontSize="13" fontWeight="600">Vila Olímpia</text>
                <text x="480" y="410" textAnchor="middle" fill="#8B6F4B" fontSize="11" fontWeight="bold">R$ 15-36k/m²</text>

                {/* Alto de Pinheiros */}
                <circle cx="260" cy="240" r="12" fill="url(#markerGradient)" filter="url(#shadow)" />
                <circle cx="260" cy="240" r="8" fill="#F5F1E8" opacity="0.9" />
                <text x="260" y="220" textAnchor="middle" fill="#2D2D2D" fontSize="13" fontWeight="600">Alto de</text>
                <text x="260" y="232" textAnchor="middle" fill="#2D2D2D" fontSize="13" fontWeight="600">Pinheiros</text>
                <text x="260" y="270" textAnchor="middle" fill="#8B6F4B" fontSize="11" fontWeight="bold">R$ 13-25k/m²</text>

                {/* Pinheiros */}
                <circle cx="300" cy="320" r="12" fill="url(#markerGradient)" filter="url(#shadow)" />
                <circle cx="300" cy="320" r="8" fill="#F5F1E8" opacity="0.9" />
                <text x="300" y="300" textAnchor="middle" fill="#2D2D2D" fontSize="13" fontWeight="600">Pinheiros</text>
                <text x="300" y="350" textAnchor="middle" fill="#8B6F4B" fontSize="11" fontWeight="bold">R$ 12-19k/m²</text>
              </g>

              {/* Legenda */}
              <g transform="translate(550, 450)">
                <rect x="0" y="0" width="220" height="120" rx="8" fill="white" opacity="0.95" stroke="#8B6F4B" strokeWidth="1.5" />
                <text x="110" y="25" textAnchor="middle" fill="#8B6F4B" fontSize="14" fontWeight="bold">Legenda</text>
                <circle cx="20" cy="50" r="8" fill="url(#markerGradient)" />
                <circle cx="20" cy="50" r="5" fill="#F5F1E8" />
                <text x="40" y="55" fill="#2D2D2D" fontSize="12">Bairro de Alto Padrão</text>
                <line x1="20" y1="75" x2="35" y2="75" stroke="#8B6F4B" strokeWidth="2" strokeDasharray="5,5" />
                <text x="40" y="80" fill="#2D2D2D" fontSize="12">Região Premium</text>
                <text x="20" y="105" fill="#6B5539" fontSize="11" fontStyle="italic">Valores: preço médio/m² em 2025</text>
              </g>

              {/* Marca NPi */}
              <g transform="translate(30, 520)">
                <text x="0" y="0" fill="#8B6F4B" fontSize="12" fontWeight="bold">NPi Consultoria</text>
                <text x="0" y="18" fill="#6B5539" fontSize="10">Imóveis de Alto Padrão</text>
              </g>

              {/* Bússola */}
              <g transform="translate(700, 150)">
                <circle cx="0" cy="0" r="25" fill="none" stroke="#8B6F4B" strokeWidth="1.5" opacity="0.4" />
                <path d="M 0 -20 L 5 0 L 0 20 L -5 0 Z" fill="#8B6F4B" opacity="0.6" />
                <text x="0" y="-30" textAnchor="middle" fill="#8B6F4B" fontSize="12" fontWeight="bold">N</text>
              </g>
            </svg>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-6">
              No mercado imobiliário de alto padrão, a localização não é apenas um endereço – é o principal ativo do seu investimento. 
              Enquanto acabamentos podem ser renovados e áreas comuns reformadas, <strong>a localização é permanente e determina até 70% do potencial de valorização</strong> de um imóvel de luxo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Em São Paulo, cidade com mais de 12 milhões de habitantes e 96 distritos, escolher o bairro certo exige conhecimento aprofundado 
              sobre dinâmica urbana, tendências de desenvolvimento e características que conferem exclusividade a determinadas regiões.
            </p>
          </section>

          {/* Seção 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Os 7 Pilares da Localização Premium
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              1. Infraestrutura Consolidada
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bairros nobres de São Paulo se destacam pela infraestrutura completa e de qualidade superior:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Vias de acesso:</strong> Proximidade a grandes avenidas como Faria Lima, Juscelino Kubitschek, Brigadeiro Faria Lima e Rebouças</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Transporte público:</strong> Estações de metrô (Linha 4-Amarela, Linha 9-Esmeralda) e corredores de ônibus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Serviços essenciais:</strong> Hospitais de excelência (Albert Einstein, Sírio-Libanês), escolas internacionais e universidades</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Comércio sofisticado:</strong> Shopping centers premium, mercados orgânicos, restaurantes estrelados</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              2. Segurança e Privacidade
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A sensação de segurança é inegociável em imóveis de alto padrão:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Índices de segurança:</strong> Bairros com estatísticas de criminalidade abaixo da média municipal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Policiamento:</strong> Presença ostensiva de segurança pública e privada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Urbanização:</strong> Ruas arborizadas, bem iluminadas e com manutenção constante</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Discrição:</strong> Perfil residencial consolidado, com baixa circulação de estranhos</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              3. Zoneamento e Legislação Urbana
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O Plano Diretor de São Paulo estabelece zonas que protegem o caráter exclusivo de determinadas regiões:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>ZER (Zona Exclusivamente Residencial):</strong> Proíbe atividades comerciais e industriais, preservando tranquilidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Gabarito controlado:</strong> Limitação de altura de edifícios mantém baixa densidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Taxa de ocupação:</strong> Restrições que garantem áreas verdes e espaços generosos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Tombamento:</strong> Proteção histórica que valoriza características arquitetônicas únicas</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              4. Áreas Verdes e Qualidade Ambiental
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A proximidade com natureza é um diferencial crescente em imóveis de luxo:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Parques:</strong> Ibirapuera, Villa-Lobos, Burle Marx, Povo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Arborização urbana:</strong> Ruas com cobertura vegetal densa</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Qualidade do ar:</strong> Índices superiores à média da cidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Nível de ruído:</strong> Áreas protegidas de poluição sonora</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              5. Perfil Socioeconômico
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A homogeneidade socioeconômica contribui para a valorização sustentada:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Renda média:</strong> Concentração de famílias nas classes A e B</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Nível educacional:</strong> Alta escolaridade dos moradores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Perfil profissional:</strong> Executivos, empresários, profissionais liberais</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Estabilidade:</strong> Baixa rotatividade de moradores, criando senso de comunidade</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              6. Proximidade a Centros de Negócios
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              O tempo de deslocamento é fundamental para o público de alto padrão:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Faria Lima:</strong> Principal polo financeiro e corporativo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Berrini/WTC:</strong> Concentração de multinacionais e escritórios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Paulista:</strong> Eixo histórico de negócios e serviços</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Vila Olímpia:</strong> Hub de tecnologia e startups</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              7. Histórico de Valorização
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Análise do comportamento do mercado nos últimos 10-20 anos:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Valorização consistente:</strong> Crescimento acima da inflação</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Resiliência:</strong> Menor volatilidade em crises econômicas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Liquidez:</strong> Facilidade para vender o imóvel quando necessário</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8B6F4B] font-bold">•</span>
                <span className="text-gray-700 text-sm"><strong>Demanda constante:</strong> Procura superior à oferta</span>
              </li>
            </ul>
          </section>

          {/* Seção 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Os Bairros Mais Valorizados de São Paulo
            </h2>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Zona Sul Premium
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-[#8B6F4B]">Jardim Europa, Jardim Paulista, Jardim Paulistano:</strong> O triângulo mais exclusivo de São Paulo. 
              Ruas arborizadas, casas históricas e edifícios boutique. Valor do m²: R$ 15.000 a R$ 65.000.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#8B6F4B]">Itaim Bibi:</strong> Equilíbrio entre residencial e comercial de alto padrão. 
              Proximidade à Faria Lima. Valor do m²: R$ 17.000 a R$ 100.000.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#8B6F4B]">Moema:</strong> Bairro residencial consolidado com excelente infraestrutura. 
              Valor do m²: R$ 13.000 a R$ 40.000.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Região da Faria Lima
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-[#8B6F4B]">Vila Nova Conceição:</strong> Um dos bairros mais caros do Brasil. 
              Condomínios de luxo, vida noturna sofisticada. Valor do m²: R$ 17.000 a R$ 50.000.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#8B6F4B]">Vila Olímpia:</strong> Modernização acelerada, alta densidade de lançamentos premium. 
              Valor do m²: R$ 15.000 a R$ 36.000.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Zona Oeste Tradicional
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-[#8B6F4B]">Alto de Pinheiros:</strong> Perfil residencial consolidado, arborização excepcional. 
              Valor do m²: R$ 13.000 a R$ 25.000.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#8B6F4B]">Pinheiros:</strong> Revitalização recente, mix de gerações, infraestrutura completa. 
              Valor do m²: R$ 12.000 a R$ 19.000.
            </p>
          </section>

          {/* Seção 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              Sinais de Alerta: Localizações a Evitar
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Mesmo em bairros nobres, algumas características podem comprometer seu investimento:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span className="text-gray-700 text-sm">
                  <strong>Proximidade excessiva a vias de grande fluxo:</strong> Poluição sonora e do ar, 
                  redução da privacidade
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span className="text-gray-700 text-sm">
                  <strong>Áreas em processo de verticalização acelerada:</strong> Mudança do perfil do bairro, 
                  perda de exclusividade
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span className="text-gray-700 text-sm">
                  <strong>Regiões com mudança de zoneamento prevista:</strong> Risco de descaracterização futura
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span className="text-gray-700 text-sm">
                  <strong>Fundos de vale ou áreas de risco geológico:</strong> Problemas com alagamentos e deslizamentos
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">✗</span>
                <span className="text-gray-700 text-sm">
                  <strong>Proximidade a favelas sem urbanização:</strong> Questões de segurança e desvalorização
                </span>
              </li>
            </ul>
          </section>

          {/* Seção 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8B6F4B]/10 rounded-lg flex items-center justify-center">
                <Navigation className="w-6 h-6 text-[#8B6F4B]" />
              </div>
              Checklist: Avaliando a Localização
            </h2>

            <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] p-6 rounded-r-lg mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Use estes critérios na sua visita:</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span>Visite em diferentes horários (manhã, tarde, noite, fim de semana)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span>Caminhe pelo bairro e observe o estado de conservação das calçadas e fachadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span>Converse com moradores locais sobre sua experiência</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span>Verifique a distância real (e não apenas em linha reta) até seus pontos de interesse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span>Pesquise projetos urbanos futuros que possam afetar a região</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span>Analise o histórico de preços dos últimos 5 anos no bairro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span>Consulte o Plano Diretor para entender o zoneamento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B6F4B]">✓</span>
                  <span>Avalie a qualidade das escolas e hospitais próximos</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Conclusão: Localização é Investimento de Longo Prazo
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A escolha da localização ideal para imóveis de alto padrão transcende preferências pessoais – é uma decisão estratégica 
              que impacta diretamente seu patrimônio pelos próximos 20, 30 ou 50 anos.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Em São Paulo, bairros consolidados como <strong className="text-[#8B6F4B]">Jardim Europa, Itaim Bibi e Alto de Pinheiros</strong> demonstram 
              valorização consistente há décadas, enquanto regiões em desenvolvimento oferecem oportunidades de ganho mais significativo, 
              porém com maior risco.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              O investimento em localização premium não apenas protege seu capital da inflação, mas posiciona você em um mercado 
              com <strong>liquidez superior e demanda permanente</strong> – características essenciais para patrimônios acima de R$ 1 milhão.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre o Imóvel Ideal na Localização Premium</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore nossa curadoria exclusiva de imóveis de alto padrão nos melhores bairros de São Paulo.
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
                href="/guia/investimento-imoveis-luxo"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <TrendingUp className="w-4 h-4" />
                  Antes de Investir
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Investimento em Imóveis de Luxo: Vale a Pena?
                </h4>
                <p className="text-sm text-gray-600">
                  Análise completa sobre rentabilidade e valorização em investimentos acima de R$ 1 milhão
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
                  Dados históricos e projeções sobre onde investir para máximo retorno patrimonial
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
