import Link from "next/link";
import { Header } from "@/app/components/ui/header";
import { Footer } from "@/app/components/ui/footer";
import { ChevronRight, Home, BookOpen, Building2, Clock, Star, Sparkles, TrendingUp, Eye, CheckCircle2, DollarSign, Ruler, Crown } from "lucide-react";

export default function CoberturasDuplexTriplexPage() {
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
              <Link href="/guia" className="text-gray-600 hover:text-[#8B6F4B] transition-colors flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                Guia Completo
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#8B6F4B] font-medium">Coberturas Duplex e Triplex</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <Crown className="w-4 h-4" />
              Tipos de Imóveis
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Coberturas Duplex e Triplex: O Topo do Mercado de Luxo
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Diferenciais, preços e valorização das coberturas premium em São Paulo. Descubra o que torna duplex e triplex os imóveis mais exclusivos e desejados da cidade.
            </p>

            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                13 min de leitura
              </span>
            </div>
          </header>

          {/* Box de Resposta Direta */}
          <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center flex-shrink-0">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-[#8B6F4B]">Coberturas são os imóveis mais exclusivos do mercado</strong> por combinarem localização premium, vista panorâmica 360°, terraço amplo (100-500m²), piscina privativa e privacidade total. <strong>Duplex</strong> tem 2 andares (média 400-600m²), <strong>Triplex</strong> tem 3 andares (600-1.200m²+). Em São Paulo, preços começam em <strong>R$ 5 milhões</strong> (Moema) e podem ultrapassar <strong>R$ 100 milhões</strong> (Cidade Jardim). Valorizam <strong>10-15% a.a.</strong> em bairros nobres e representam o topo absoluto do status imobiliário.
                </p>
                <div className="bg-white/80 rounded-lg p-4 border border-[#8B6F4B]/20">
                  <p className="text-sm text-gray-600 mb-2"><strong>Características essenciais:</strong></p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Terraço com piscina privativa</li>
                    <li>• Vista panorâmica desobstruída</li>
                    <li>• 4-8 suítes, 6-12 vagas</li>
                    <li>• Elevador privativo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              O que Define uma Cobertura Premium
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Uma <strong>cobertura</strong> não é apenas o último andar do prédio. Para ser considerada premium, precisa atender critérios específicos que a diferenciam de apartamentos comuns:
            </p>

            <div className="space-y-6">
              {/* Característica 1 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <Ruler className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">1. Terraço Amplo e Privativo</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  O <strong>diferencial número 1</strong> de qualquer cobertura. Terraço deve ter no mínimo 80-100m² e ser totalmente privativo (não compartilhado).
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-sm mb-2">Tamanhos típicos de terraço:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Cobertura entrada:</strong> 80-150m²</li>
                    <li>• <strong>Cobertura premium:</strong> 150-300m²</li>
                    <li>• <strong>Cobertura excepcional:</strong> 300-500m²+</li>
                    <li>• <strong>Penthouse:</strong> 500-1.000m²+ (raro)</li>
                  </ul>
                </div>
              </div>

              {/* Característica 2 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">2. Vista Panorâmica 360°</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Coberturas oferecem <strong>vista desobstruída</strong> da cidade. Em São Paulo, isso significa skyline completo, parques, por do sol.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Vistas premium em SP:</strong> Parque Ibirapuera, Pico do Jaraguá, Marginal Pinheiros, Avenida Faria Lima, Parque do Povo. Uma vista única pode adicionar <strong>20-30% ao valor</strong> do imóvel.
                  </p>
                </div>
              </div>

              {/* Característica 3 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">3. Piscina Privativa</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  <strong>Obrigatória</strong> em coberturas de alto padrão. Piscina aquecida, borda infinita, hidromassagem são comuns.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    Tamanhos variam de 15m² (spa) até 60m²+ (piscina olímpica). Custo de manutenção: R$ 800-1.500/mês (piscineiro, químicos, aquecimento).
                  </p>
                </div>
              </div>

              {/* Característica 4 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">4. Elevador Privativo</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Acesso exclusivo, sem compartilhar com outros moradores. <strong>Essencial para privacidade total.</strong>
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    Algumas coberturas ultra premium têm 2 elevadores: social e serviço. Permite festas sem que funcionários cruzem com convidados.
                  </p>
                </div>
              </div>

              {/* Característica 5 */}
              <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white">
                    <Star className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">5. Acabamentos Exclusivos</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Materiais <strong>além do alto padrão</strong>: mármore Calacatta, madeira de lei, automação completa, home theater, spa.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    Comum encontrar: adega climatizada (500+ garrafas), sauna seca/úmida, ofurô, cinema privativo, academia equipada.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Diferenças: Simplex, Duplex e Triplex
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              As coberturas se classificam pelo <strong>número de pavimentos</strong> privativos. Cada tipo tem características e preços distintos:
            </p>

            <div className="space-y-6">
              {/* Simplex */}
              <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Cobertura Simplex (1 Pavimento)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">Características:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 1 pavimento + terraço</li>
                      <li>• 200-400m² área interna</li>
                      <li>• 3-5 suítes</li>
                      <li>• 4-6 vagas</li>
                      <li>• Terraço: 80-150m²</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">Faixa de preço em SP:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Moema:</strong> R$ 4-7M</li>
                      <li>• <strong>Itaim:</strong> R$ 6-10M</li>
                      <li>• <strong>Jardins:</strong> R$ 8-15M</li>
                      <li>• <strong>Vila Nova:</strong> R$ 10-20M</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg text-sm text-blue-900">
                  <strong>Vantagem:</strong> Tudo em um andar (acessibilidade). <strong>Desvantagem:</strong> Menos área privativa que duplex.
                </div>
              </div>

              {/* Duplex */}
              <div className="bg-[#8B6F4B]/10 border-2 border-[#8B6F4B] rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#8B6F4B] mb-4">Cobertura Duplex (2 Pavimentos) ⭐ Mais Comum</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">Características:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 2 pavimentos + terraço</li>
                      <li>• 350-600m² área interna</li>
                      <li>• 4-6 suítes</li>
                      <li>• 5-8 vagas</li>
                      <li>• Terraço: 150-300m²</li>
                      <li>• Escada interna privativa</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">Faixa de preço em SP:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Moema:</strong> R$ 6-12M</li>
                      <li>• <strong>Itaim:</strong> R$ 10-18M</li>
                      <li>• <strong>Jardins:</strong> R$ 15-30M</li>
                      <li>• <strong>Cidade Jardim:</strong> R$ 25-50M</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-[#8B6F4B]/20 rounded-lg text-sm text-gray-900">
                  <strong>Vantagem:</strong> Separação social/íntimo perfeita. <strong>Configuração típica:</strong> Pavimento inferior = salas, cozinha, home. Superior = suítes, closets.
                </div>
              </div>

              {/* Triplex */}
              <div className="bg-gradient-to-r from-amber-50 to-amber-100 border-2 border-amber-400 rounded-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Cobertura Triplex (3 Pavimentos) 👑 Ultra Premium</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-sm mb-2">Características:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 3 pavimentos + terraço</li>
                      <li>• 600-1.200m²+ área interna</li>
                      <li>• 6-8+ suítes</li>
                      <li>• 8-12+ vagas</li>
                      <li>• Terraço: 300-500m²+</li>
                      <li>• Elevador privativo interno</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-2">Faixa de preço em SP:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Itaim:</strong> R$ 20-35M</li>
                      <li>• <strong>Jardins:</strong> R$ 30-60M</li>
                      <li>• <strong>Cidade Jardim:</strong> R$ 50-100M+</li>
                      <li>• <strong>Jardim Europa:</strong> R$ 60-120M+</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-amber-100 rounded-lg text-sm text-amber-900">
                  <strong>Vantagem:</strong> Status absoluto + área gigantesca. <strong>Desvantagem:</strong> Liquidez muito baixa (público ultra restrito). Manutenção R$ 15-30k/mês.
                </div>
              </div>
            </div>
          </section>

          {/* Seção 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Custos Reais de Manutenção
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Coberturas têm custos mensais <strong>significativamente maiores</strong> que apartamentos comuns. Veja o breakdown completo:
            </p>

            <div className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-[#8B6F4B] mb-4">Cobertura Duplex 500m² (Itaim Bibi)</h3>
              
              <div className="space-y-3 text-sm text-gray-700 mb-6">
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>IPTU:</span>
                  <strong>R$ 1.500</strong>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Condomínio:</span>
                  <strong>R$ 4.000</strong>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Energia elétrica:</span>
                  <strong>R$ 1.200</strong>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Água:</span>
                  <strong>R$ 400</strong>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Gás:</span>
                  <strong>R$ 300</strong>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Piscineiro (semanal):</span>
                  <strong>R$ 800</strong>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Jardineiro (plantas terraço):</span>
                  <strong>R$ 600</strong>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Faxina (3x/semana):</span>
                  <strong>R$ 2.500</strong>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Manutenções diversas:</span>
                  <strong>R$ 1.500</strong>
                </div>
                <div className="flex justify-between p-3 bg-[#8B6F4B]/10 rounded font-bold border-2 border-[#8B6F4B]">
                  <span>TOTAL MENSAL:</span>
                  <strong className="text-[#8B6F4B] text-lg">R$ 12.800</strong>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-900">
                  <strong>Custo anual:</strong> R$ 153.600 (~R$ 307/m²/ano). Para triplex de 1.000m², pode chegar a <strong>R$ 25-30k/mês</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Melhores Bairros para Coberturas em São Paulo
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Nem todo bairro nobre tem coberturas de qualidade. Veja os <strong>5 melhores endereços</strong> para coberturas premium:
            </p>

            <div className="space-y-4">
              {[
                {
                  numero: "1",
                  bairro: "Cidade Jardim",
                  descricao: "O topo absoluto. Coberturas em edifícios icônicos (Cyrela, JHSF) com vista para Pinheiros e Marginal.",
                  preco: "R$ 25M - 100M+",
                  destaque: "Morumbi Town e Parque Cidade Jardim"
                },
                {
                  numero: "2",
                  bairro: "Jardim Europa / Jardim Paulistano",
                  descricao: "Bairros jardins tradicionais. Coberturas em ruas arborizadas com privacidade total.",
                  preco: "R$ 20M - 80M",
                  destaque: "Al. Gabriel Monteiro da Silva"
                },
                {
                  numero: "3",
                  bairro: "Vila Nova Conceição",
                  descricao: "Próximo ao Parque Ibirapuera. Vista privilegiada do parque e skyline da Paulista.",
                  preco: "R$ 15M - 50M",
                  destaque: "Rua Groenlândia e Rua Amauri"
                },
                {
                  numero: "4",
                  bairro: "Itaim Bibi",
                  descricao: "Centro financeiro e gastronômico. Coberturas modernas com vista para Faria Lima.",
                  preco: "R$ 10M - 40M",
                  destaque: "Região da Faria Lima"
                },
                {
                  numero: "5",
                  bairro: "Alto de Pinheiros",
                  descricao: "Bairro residencial tranquilo. Coberturas com área verde preservada e privacidade.",
                  preco: "R$ 8M - 25M",
                  destaque: "Praça Panamericana"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white border-2 border-[#8B6F4B]/30 rounded-lg p-6 hover:border-[#8B6F4B] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8B6F4B] to-[#6d5839] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {item.numero}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.bairro}</h3>
                      <p className="text-gray-700 text-sm mb-3">{item.descricao}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="bg-[#8B6F4B]/10 px-3 py-1 rounded-full">
                          <strong className="text-[#8B6F4B]">Preço:</strong> {item.preco}
                        </div>
                        <div className="bg-blue-50 px-3 py-1 rounded-full">
                          <strong className="text-blue-900">Destaque:</strong> {item.destaque}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seção 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Valorização e Retorno de Investimento
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Coberturas têm características únicas de valorização e liquidez que diferem de apartamentos comuns:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Valorização */}
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Valorização
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Bairros nobres:</strong>
                      <p className="text-xs mt-1">10-15% a.a. (Cidade Jardim, Jardins)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Bairros médios:</strong>
                      <p className="text-xs mt-1">6-8% a.a. (Moema, Vila Olímpia)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Vista única:</strong>
                      <p className="text-xs mt-1">Prêmio de 20-30% sobre coberturas comuns</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Raridade:</strong>
                      <p className="text-xs mt-1">Pouquíssimas coberturas = valorização garantida</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Liquidez */}
              <div className="bg-amber-50 border-2 border-amber-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Liquidez
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-0.5">⚠️</span>
                    <div>
                      <strong>Simplex:</strong>
                      <p className="text-xs mt-1">6-12 meses para vender (liquidez média)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-0.5">⚠️</span>
                    <div>
                      <strong>Duplex:</strong>
                      <p className="text-xs mt-1">8-18 meses (liquidez moderada-baixa)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2 mt-0.5">❌</span>
                    <div>
                      <strong>Triplex:</strong>
                      <p className="text-xs mt-1">12-36 meses (liquidez muito baixa)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2 mt-0.5">⚠️</span>
                    <div>
                      <strong>Desconto negociação:</strong>
                      <p className="text-xs mt-1">Comum aceitar 10-20% abaixo do pedido</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
              <p className="text-sm text-blue-900 mb-2">
                <strong>Investimento de Longo Prazo:</strong>
              </p>
              <p className="text-sm text-blue-800">
                Coberturas são <strong>ativos de baixa liquidez</strong> mas <strong>alta valorização</strong>. Ideal para quem não precisa vender rápido e busca reserva de valor + qualidade de vida. Não recomendado para investidores focados em liquidez.
              </p>
            </div>
          </section>

          {/* Seção 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Vantagens e Desvantagens de Coberturas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Vantagens */}
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Vantagens
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Status absoluto:</strong> Topo do mercado imobiliário</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Vista panorâmica:</strong> Impossível em outros imóveis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Terraço privativo:</strong> Área externa de 100-500m²+</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Piscina própria:</strong> Sem compartilhar com ninguém</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Privacidade total:</strong> Sem vizinhos acima</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Valorização premium:</strong> 10-15% a.a. em bairros nobres</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Raridade:</strong> Pouquíssimas unidades disponíveis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span><strong>Festas:</strong> Espaço para grandes eventos</span>
                  </li>
                </ul>
              </div>

              {/* Desvantagens */}
              <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Desvantagens
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Preço altíssimo:</strong> 50-100% mais caro/m² que apto comum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Baixa liquidez:</strong> Demora 12-36 meses para vender</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Manutenção cara:</strong> R$ 10-30k/mês de custos fixos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>IPTU e condomínio:</strong> 2-3x mais alto que apartamentos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Gestão complexa:</strong> Piscina, jardim, sistemas especiais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Público restrito:</strong> Pouquíssimos compradores qualificados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Exposição ao sol:</strong> Terraço pode ser muito quente no verão</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span><strong>Escadas (duplex/triplex):</strong> Acessibilidade comprometida</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusão */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#8B6F4B]/20">
              Conclusão
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Coberturas duplex e triplex</strong> representam o <strong>topo absoluto do mercado imobiliário</strong>. São imóveis únicos que combinam localização premium, vista panorâmica, área externa privativa e status incomparável.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Porém, não são para qualquer perfil. Exigem <strong>altíssimo poder aquisitivo</strong> (R$ 10-100M+), capacidade de manter custos elevados (R$ 10-30k/mês) e paciência com baixa liquidez (12-36 meses para venda).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Se você busca o <strong>melhor que o mercado oferece</strong>, tem orçamento compatível e planeja morar a longo prazo (10+ anos), uma cobertura duplex ou triplex em bairro nobre de São Paulo é o investimento definitivo em qualidade de vida e patrimônio familiar.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre Coberturas Exclusivas em São Paulo</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore nosso portfólio de coberturas premium
            </p>
            <Link
              href="/busca?categoria=Cobertura"
              className="inline-block bg-white text-[#8B6F4B] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Ver Coberturas Disponíveis
            </Link>
          </div>

          {/* Artigos Relacionados */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/guia/apartamento-alto-padrao-caracteristicas"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Building2 className="w-4 h-4" />
                  Tipos de Imóveis
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Apartamento Alto Padrão: O que Define
                </h4>
                <p className="text-sm text-gray-600">
                  Características que classificam um apartamento como premium
                </p>
              </Link>

              <Link
                href="/guia/casa-vs-apartamento-alto-padrao"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Star className="w-4 h-4" />
                  Tipos de Imóveis
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Casa vs Apartamento de Luxo
                </h4>
                <p className="text-sm text-gray-600">
                  Vantagens e desvantagens de cada tipo para seu perfil
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
