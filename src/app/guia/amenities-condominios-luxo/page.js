'use client';

import Link from 'next/link';
import { Header } from '@/app/components/ui/header';
import { Footer } from '@/app/components/ui/footer';
import { ChevronRight, Home, BookOpen, Star } from 'lucide-react';

export default function AmenitiesCondominiosLuxo() {
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
              <span className="text-[#8B6F4B] font-medium">Amenities em Condomínios de Luxo</span>
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
              Amenities em Condomínios de Luxo: O que Esperar
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Academia premium, spa, coworking, pet place: conheça os diferenciais dos melhores condomínios de alto padrão em São Paulo.
            </p>
          </header>

          {/* Box de Resposta Direta */}
          <div className="bg-gradient-to-br from-[#8B6F4B]/5 to-[#8B6F4B]/10 border-l-4 border-[#8B6F4B] rounded-lg p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#8B6F4B] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Resposta Direta:</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Os amenities ou diferenciais essenciais em condomínios de alto padrão incluem:</strong>
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Academia Premium:</strong> Equipamentos profissionais, personal trainer, salas de aula</li>
                  <li><strong>Spa & Wellness:</strong> Sauna, sala de massagem, piscina aquecida indoor</li>
                  <li><strong>Coworking:</strong> Salas de reunião, cabines de videoconferência, business center</li>
                  <li><strong>Pet Place:</strong> Área exclusiva com pet care, banho e tosa, veterinário</li>
                  <li><strong>Gastronomia:</strong> Restaurante, wine bar, espaço gourmet com chef</li>
                  <li><strong>Lazer Completo:</strong> Cinema, sala de jogos, espaço kids, playground</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3 italic">
                  Condomínios ultra-premium podem oferecer até 30+ amenities exclusivos.
                </p>
              </div>
            </div>
          </div>

          {/* Introdução */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed mb-4">
              O conceito de <strong>condomínio de luxo</strong> evoluiu dramaticamente na última década. Hoje, não basta ter uma boa localização e metragem generosa – os compradores exigem <strong>amenities premium</strong> que proporcionem qualidade de vida, conveniência e exclusividade.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Em São Paulo, condomínios de alto padrão competem para oferecer a <strong>infraestrutura mais completa</strong>, transformando edifícios em verdadeiros resorts urbanos com serviços que rivalizam com hotéis cinco estrelas.
            </p>
          </section>

          {/* Amenity 1: Academia */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              1. Academia Premium e Fitness Center
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200 mb-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                A academia deixou de ser apenas um espaço com esteiras. <strong>Fitness centers premium</strong> rivalizam com as melhores academias comerciais da cidade.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🏋️ Equipamentos de Última Geração
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Área de Musculação:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Estações profissionais Life Fitness ou Technogym</li>
                        <li>• Free weights até 50kg</li>
                        <li>• Racks para agachamento e supino</li>
                        <li>• Área de cross training</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Cardio Premium:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Esteiras com TV individual</li>
                        <li>• Bicicletas ergométricas e spinning</li>
                        <li>• Elípticos e simuladores de escada</li>
                        <li>• Remo indoor</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🧘 Salas de Aula e Modalidades
                  </h3>
                  <div className="bg-white rounded-lg p-5">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Yoga e Pilates:</strong> Salas com piso especial e equipamentos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Spinning:</strong> Bikes profissionais com métricas de desempenho</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Dança:</strong> Sala espelhada com som profissional</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8B6F4B] font-bold">•</span>
                        <span><strong>Funcional:</strong> Área externa ou coberta para treinos funcionais</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    👨‍🏫 Serviços Profissionais
                  </h3>
                  <div className="bg-white rounded-lg p-5 border-l-4 border-[#8B6F4B]">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Personal Trainer Residente:</strong> Disponível para agendamento</li>
                      <li><strong>Aulas em Grupo:</strong> Agenda semanal com instrutores certificados</li>
                      <li><strong>Avaliação Física:</strong> Testes periódicos de composição corporal</li>
                      <li><strong>Nutricionista:</strong> Consultoria disponível (alguns condomínios)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg text-sm text-gray-700">
              <strong>💰 Economia:</strong> Academia premium equivale a mensalidade de R$ 300-600/mês em academia comercial de alto padrão. Economia de R$ 3.600-7.200/ano por morador.
            </div>
          </section>

          {/* Amenity 2: Spa & Wellness */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              2. Spa & Wellness Center
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O conceito de <strong>wellness</strong> está no centro dos condomínios de luxo modernos. Espaços dedicados ao relaxamento e cuidado pessoal são diferenciais cada vez mais valorizados.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🧖 Instalações de Spa
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Sauna Seca e Úmida</p>
                      <p className="text-sm text-gray-700">Cabines individuais ou coletivas com controle de temperatura e umidade</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Sala de Massagem</p>
                      <p className="text-sm text-gray-700">Ambiente dedicado com macas profissionais e aromaterapia</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Ofurô / Jacuzzi</p>
                      <p className="text-sm text-gray-700">Hidromassagem aquecida para até 6 pessoas</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 mb-2">Sala de Relaxamento</p>
                      <p className="text-sm text-gray-700">Ambiente silencioso com poltronas e iluminação suave</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  💧 Piscinas Premium
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Piscina Aquecida Indoor</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Temperatura controlada (28-30°C)</li>
                      <li>• Raias para natação</li>
                      <li>• Área para hidroginástica</li>
                      <li>• Iluminação subaquática LED</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Piscina Infinity Rooftop</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Vista panorâmica da cidade</li>
                      <li>• Deck molhado com espreguiçadeiras</li>
                      <li>• Bar molhado integrado</li>
                      <li>• Sistema de som ambiente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Amenity 3: Coworking */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              3. Coworking e Business Center
            </h2>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-200 mb-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                Com o trabalho híbrido, <strong>espaços profissionais dentro do condomínio</strong> tornaram-se essenciais. Condomínios premium oferecem infraestrutura comparável a coworkings comerciais.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    💼 Espaços de Trabalho
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Salas de Reunião:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>• 4-12 pessoas</li>
                        <li>• TV 65" para apresentações</li>
                        <li>• Sistema de videoconferência</li>
                        <li>• Quadro branco e flipchart</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Cabines Individuais:</p>
                      <ul className="text-gray-700 space-y-1">
                        <li>• Isolamento acústico</li>
                        <li>• Mesa regulável de altura</li>
                        <li>• Tomadas e USB</li>
                        <li>• Climatização individual</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🖨️ Business Center
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B6F4B] font-bold">•</span>
                      <span><strong>Impressora/Scanner Profissional:</strong> Multifuncional colorida de alto volume</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B6F4B] font-bold">•</span>
                      <span><strong>Internet Ultra-Rápida:</strong> Fibra óptica 500MB-1GB dedicada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B6F4B] font-bold">•</span>
                      <span><strong>Sistema de Reserva:</strong> App para agendamento de salas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8B6F4B] font-bold">•</span>
                      <span><strong>Café Completo:</strong> Máquina profissional, água, chá</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Amenity 4: Pet Place */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              4. Pet Place e Pet Care
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>70% dos moradores de alto padrão</strong> possuem pets. Condomínios premium oferecem infraestrutura completa para animais de estimação.
            </p>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3">🐕 Área Pet</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Gramado sintético de alta qualidade</li>
                      <li>• Brinquedos e obstáculos (agility)</li>
                      <li>• Bebedouros automáticos</li>
                      <li>• Área coberta para dias de chuva</li>
                      <li>• Iluminação noturna</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3">🛁 Pet Care</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Banheira profissional</li>
                      <li>• Secador de alta potência</li>
                      <li>• Mesa de tosa</li>
                      <li>• Produtos de higiene fornecidos</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3">👨‍⚕️ Serviços Veterinários</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Alguns condomínios ultra-premium oferecem:
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Veterinário residente (horários específicos)</li>
                      <li>• Consultório equipado</li>
                      <li>• Vacinas e check-ups básicos</li>
                      <li>• Pet sitting (para viagens)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3">🚶 Dog Walker</h4>
                    <p className="text-sm text-gray-700">
                      Serviço de passeio para pets, com agenda via app do condomínio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Amenity 5: Gastronomia */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              5. Gastronomia e Entretenimento
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🍽️ Espaços Gourmet
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Espaço Gourmet</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Churrasqueira profissional</li>
                      <li>• Forno de pizza à lenha</li>
                      <li>• Cozinha completa</li>
                      <li>• Mesas para 20-40 pessoas</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Wine Bar</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Adega climatizada</li>
                      <li>• Bar completo</li>
                      <li>• Sommelier (eventos)</li>
                      <li>• Degustações mensais</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Restaurante</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Chef residente</li>
                      <li>• Menu executivo</li>
                      <li>• Delivery interno</li>
                      <li>• Eventos especiais</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🎬 Entretenimento
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Cinema Privativo</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Tela 4K de 100-150"</li>
                      <li>• Sistema Dolby Atmos</li>
                      <li>• Poltronas reclináveis</li>
                      <li>• Pipoqueira profissional</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">Sala de Jogos</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Mesa de sinuca profissional</li>
                      <li>• Pebolim e ping-pong</li>
                      <li>• Consoles de videogame</li>
                      <li>• Jogos de tabuleiro</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Outros Amenities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Outros Amenities Essenciais
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  👶 Espaço Kids
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Brinquedoteca equipada</li>
                  <li>• Playground outdoor e indoor</li>
                  <li>• Sala de leitura infantil</li>
                  <li>• Monitores em horários específicos</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🌳 Áreas Verdes
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Jardins paisagísticos</li>
                  <li>• Horta orgânica comunitária</li>
                  <li>• Trilhas para caminhada</li>
                  <li>• Área de contemplação</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🔐 Segurança Premium
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Portaria 24h blindada</li>
                  <li>• Câmeras HD em todas as áreas</li>
                  <li>• Controle biométrico</li>
                  <li>• Segurança ostensiva</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🚗 Infraestrutura
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Carregadores elétricos</li>
                  <li>• Valet parking 24h</li>
                  <li>• Lavagem de carros</li>
                  <li>• Depósito privativo</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Custos */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Impacto no Condomínio
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                💰 Custos vs Benefícios
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Amenities premium aumentam o condomínio em <strong>20-40%</strong>, mas agregam valor significativo:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Valorização:</strong> Imóveis com amenities completos valorizam 15-25% mais rápido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Economia:</strong> Academia + spa substituem mensalidades externas (R$ 500-1.000/mês)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Conveniência:</strong> Reduz necessidade de deslocamentos e serviços externos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong>Qualidade de Vida:</strong> Integração social e bem-estar dos moradores</span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#8B6F4B] to-[#6d5839] text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Encontre o Imóvel Ideal para Você</h3>
            <p className="text-lg mb-6 opacity-90">
              Explore nosso portfólio com condomínios que oferecem os melhores amenities de São Paulo
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
                href="/guia/construtoras-incorporadoras-premium"
                className="group border border-gray-200 rounded-lg p-6 hover:border-[#8B6F4B] hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 text-[#8B6F4B] text-sm font-semibold mb-3">
                  <Star className="w-4 h-4" />
                  LIFESTYLE
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8B6F4B] transition-colors">
                  Construtoras Premium: Como Escolher
                </h4>
                <p className="text-sm text-gray-600">
                  Reputação, solidez financeira e padrão de qualidade das principais players.
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
                  Assinatura de arquitetos renomados e tendências de design premium.
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
