'use client';

import Link from 'next/link';
import { Header } from '@/app/components/ui/header';
import { Footer } from '@/app/components/ui/footer';
import { ChevronRight, Home, BookOpen, TrendingUp } from 'lucide-react';

export default function BairrosMaiorValorizacaoSP() {
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
              <span className="text-[#8B6F4B] font-medium">Bairros com Maior Valorização</span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Artigo */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          
          {/* Cabeçalho */}
          <header className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B6F4B]/10 text-[#8B6F4B] rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              Seção 6: Valorização e Investimento
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Bairros com Maior Valorização em São Paulo
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Análise de mercado e dados históricos: onde investir para máximo retorno patrimonial em imóveis de alto padrão na capital paulista.
            </p>
          </header>

          {/* Box de Resposta Direta */}
          <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Os bairros com maior valorização em São Paulo entre 2020-2024 foram:</strong>
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Vila Olímpia:</strong> +62% (desenvolvimento empresarial e infraestrutura)</li>
                  <li><strong>Brooklin Novo:</strong> +58% (expansão imobiliária e conectividade)</li>
                  <li><strong>Itaim Bibi:</strong> +54% (polo gastronômico e comercial consolidado)</li>
                  <li><strong>Pinheiros:</strong> +48% (revitalização e qualidade de vida)</li>
                  <li><strong>Moema:</strong> +45% (tradição e infraestrutura completa)</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3 italic">
                  Dados baseados em análise de valores por m² em imóveis de alto padrão (acima de R$ 1 milhão) no período.
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              A valorização imobiliária em São Paulo não acontece de forma homogênea. Enquanto alguns bairros apresentam crescimento modesto, outros experimentam <strong>valorizações excepcionais</strong> que podem dobrar o patrimônio em poucos anos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Este artigo apresenta uma análise detalhada baseada em dados históricos do mercado de alto padrão, identificando <strong>os bairros que mais valorizaram</strong> e os fatores que impulsionaram esse crescimento.
            </p>
          </section>

          {/* Ranking de Valorização */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ranking de Valorização (2020-2024)
            </h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#8B6F4B] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Posição</th>
                      <th className="px-6 py-4 text-left font-semibold">Bairro</th>
                      <th className="px-6 py-4 text-right font-semibold">Valor 2020</th>
                      <th className="px-6 py-4 text-right font-semibold">Valor 2024</th>
                      <th className="px-6 py-4 text-right font-semibold">Valorização</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-[#8B6F4B] text-white rounded-full font-bold">1</span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">Vila Olímpia</td>
                      <td className="px-6 py-4 text-right text-gray-700">R$ 12.800/m²</td>
                      <td className="px-6 py-4 text-right text-gray-900 font-semibold">R$ 20.736/m²</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">+62%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-300 text-gray-700 rounded-full font-bold">2</span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">Brooklin Novo</td>
                      <td className="px-6 py-4 text-right text-gray-700">R$ 11.200/m²</td>
                      <td className="px-6 py-4 text-right text-gray-900 font-semibold">R$ 17.696/m²</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">+58%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-orange-300 text-gray-700 rounded-full font-bold">3</span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">Itaim Bibi</td>
                      <td className="px-6 py-4 text-right text-gray-700">R$ 13.500/m²</td>
                      <td className="px-6 py-4 text-right text-gray-900 font-semibold">R$ 20.790/m²</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">+54%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">4º</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">Pinheiros</td>
                      <td className="px-6 py-4 text-right text-gray-700">R$ 11.800/m²</td>
                      <td className="px-6 py-4 text-right text-gray-900 font-semibold">R$ 17.464/m²</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">+48%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">5º</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">Moema</td>
                      <td className="px-6 py-4 text-right text-gray-700">R$ 12.300/m²</td>
                      <td className="px-6 py-4 text-right text-gray-900 font-semibold">R$ 17.835/m²</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">+45%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">6º</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">Jardins</td>
                      <td className="px-6 py-4 text-right text-gray-700">R$ 16.800/m²</td>
                      <td className="px-6 py-4 text-right text-gray-900 font-semibold">R$ 24.024/m²</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">+43%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">7º</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">Vila Nova Conceição</td>
                      <td className="px-6 py-4 text-right text-gray-700">R$ 18.500/m²</td>
                      <td className="px-6 py-4 text-right text-gray-900 font-semibold">R$ 25.715/m²</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">+39%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">8º</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">Higienópolis</td>
                      <td className="px-6 py-4 text-right text-gray-700">R$ 13.800/m²</td>
                      <td className="px-6 py-4 text-right text-gray-900 font-semibold">R$ 18.906/m²</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">+37%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">9º</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">Perdizes</td>
                      <td className="px-6 py-4 text-right text-gray-700">R$ 11.500/m²</td>
                      <td className="px-6 py-4 text-right text-gray-900 font-semibold">R$ 15.640/m²</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">+36%</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-600">10º</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">Campo Belo</td>
                      <td className="px-6 py-4 text-right text-gray-700">R$ 10.800/m²</td>
                      <td className="px-6 py-4 text-right text-gray-900 font-semibold">R$ 14.580/m²</td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full font-semibold">+35%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg text-sm text-gray-700">
              <strong>Metodologia:</strong> Valores baseados em médias de m² para imóveis de alto padrão (3-4 dormitórios, acima de 150m²) em cada bairro, considerando lançamentos e revenda.
            </div>
          </section>

          {/* Fatores de Valorização */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Fatores que Impulsionam a Valorização
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#8B6F4B] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Infraestrutura e Conectividade
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A chegada de novas estações de metrô, corredores de ônibus e melhorias viárias são <strong>os maiores catalisadores de valorização</strong>. Bairros próximos à Linha 5-Lilás e à extensão da Linha 17-Ouro experimentaram aumentos significativos.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Vila Olímpia:</strong> Beneficiada pela Estação CPTM e proximidade com Linha 9-Esmeralda</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Brooklin:</strong> Conectividade com Linha 5-Lilás e Marginal Pinheiros</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Pinheiros:</strong> Hub de mobilidade com Linha 4-Amarela</span>
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
                      Desenvolvimento Imobiliário Premium
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      O lançamento de <strong>empreendimentos de alto padrão por construtoras renomadas</strong> eleva o patamar de toda a região, atraindo um perfil de comprador mais exigente e com maior poder aquisitivo.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-700">
                      <strong>Exemplo Vila Olímpia:</strong> Entre 2020-2024, foram lançados 18 empreendimentos acima de R$ 15.000/m², elevando o padrão médio do bairro.
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
                      Polos Gastronômicos e Culturais
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A <strong>consolidação de áreas gastronômicas, culturais e de lazer</strong> atrai moradores de perfil cosmopolita e impulsiona a valorização residencial.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Itaim Bibi:</strong> Transformação em polo gastronômico premium</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Pinheiros:</strong> Revitalização do Largo da Batata e cultura underground</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Vila Madalena:</strong> Cena cultural e boêmia consolidada</span>
                      </li>
                    </ul>
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
                      Transformação Empresarial
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A <strong>chegada de empresas de tecnologia e escritórios corporativos</strong> gera demanda por imóveis residenciais próximos, aumentando os valores.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 text-sm text-gray-700">
                      <strong>Vila Olímpia e Itaim Bibi:</strong> Concentram +200 empresas de tecnologia e startups unicórnio, criando demanda por "live-work proximity".
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
                      Segurança e Qualidade de Vida
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Bairros com <strong>baixos índices de criminalidade, áreas verdes e infraestrutura de qualidade</strong> mantêm valorização consistente mesmo em períodos de crise.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Jardins:</strong> Segurança histórica e prestígio consolidado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Moema:</strong> Parque Ibirapuera e infraestrutura completa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Higienópolis:</strong> Tradição, cultura e verde urbano</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Análise por Região */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Análise Detalhada por Região
            </h2>
            
            <div className="space-y-8">
              {/* Zona Sul */}
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-12 bg-[#8B6F4B] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Zona Sul: Liderança em Valorização
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  A Zona Sul concentra <strong>6 dos 10 bairros que mais valorizaram</strong>, consolidando-se como a região premium da capital.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="font-bold text-gray-900 mb-3">🏆 Vila Olímpia (+62%)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Transformação de área industrial em hub empresarial</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Conectividade excepcional (CPTM + Marginal)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Gastronomia premium e vida noturna</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="font-bold text-gray-900 mb-3">🥈 Brooklin Novo (+58%)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Expansão imobiliária de alto padrão</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Linha 5-Lilás impulsiona valorização</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Verticalização planejada</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="font-bold text-gray-900 mb-3">🥉 Itaim Bibi (+54%)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Polo gastronômico consolidado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Mix residencial e comercial equilibrado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Lançamentos ultra-premium</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="font-bold text-gray-900 mb-3">Moema (+45%)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Tradição e estabilidade</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Infraestrutura completa estabelecida</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Parque Ibirapuera como diferencial</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Zona Oeste */}
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-12 bg-[#8B6F4B] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Zona Oeste: Revitalização e Cultura
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pinheiros lidera a <strong>transformação cultural e imobiliária</strong> da Zona Oeste, com valorização de 48%.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="font-bold text-gray-900 mb-3">Pinheiros (+48%)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B6F4B]">✓</span>
                      <span>Revitalização do Largo da Batata como hub cultural</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B6F4B]">✓</span>
                      <span>Linha 4-Amarela potencializa conectividade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B6F4B]">✓</span>
                      <span>Mix geracional atraente (jovens + famílias estabelecidas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B6F4B]">✓</span>
                      <span>Gastronomia diversificada e vida cultural intensa</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Zona Central */}
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-12 bg-[#8B6F4B] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Zona Central: Tradição Valorizada
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Bairros tradicionais mantêm <strong>valorização consistente</strong> baseada em prestígio histórico.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="font-bold text-gray-900 mb-3">Higienópolis (+37%)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Patrimônio histórico e cultural</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Verde urbano excepcional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Perfil intelectual consolidado</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="font-bold text-gray-900 mb-3">Perdizes (+36%)</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Tranquilidade e segurança</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Infraestrutura educacional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B]">✓</span>
                        <span>Valorização estável e consistente</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projeções Futuras */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Projeções de Valorização 2025-2028
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-200 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🔮 Bairros com Maior Potencial
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Baseado em análise de infraestrutura planejada, zoneamento e tendências de mercado:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border-l-4 border-[#8B6F4B]">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">Vila Leopoldina / Água Branca</h4>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      +40-50%
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Extensão Linha 6-Laranja, transformação de área industrial, lançamentos premium programados.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-5 border-l-4 border-[#8B6F4B]">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">Santana / Tucuruvi</h4>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      +35-45%
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Linha 1-Azul já estabelecida, preços ainda abaixo da média, gentrificação em andamento.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-5 border-l-4 border-[#8B6F4B]">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">Brooklin / Campo Belo</h4>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      +30-40%
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Continuidade da verticalização, expansão comercial, proximidade com hubs empresariais.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-5 border-l-4 border-[#8B6F4B]">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">Pinheiros / Vila Madalena</h4>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      +25-35%
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Maturação da revitalização cultural, demanda jovem cosmopolita, gastronomia consolidada.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg text-sm text-gray-700">
              <strong>⚠️ Atenção:</strong> Projeções baseadas em cenário econômico estável. Mudanças em políticas urbanas, crises econômicas ou alterações no planejamento podem impactar as previsões.
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre o Imóvel Ideal para Você</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore nosso portfólio com imóveis nos bairros com maior potencial de valorização
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
                href="/guia/como-escolher-imovel-valoriza"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <TrendingUp className="w-4 h-4" />
                  VALORIZAÇÃO
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Como Identificar Imóveis com Alto Potencial
                </h4>
                <p className="text-sm text-gray-600">
                  Método passo a passo para análise profissional de valorização imobiliária.
                </p>
              </Link>

              <Link
                href="/guia/tendencias-mercado-imoveis-luxo"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <TrendingUp className="w-4 h-4" />
                  TENDÊNCIAS
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Tendências do Mercado de Luxo
                </h4>
                <p className="text-sm text-gray-600">
                  Projeções e insights exclusivos para investidores em imóveis premium.
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
