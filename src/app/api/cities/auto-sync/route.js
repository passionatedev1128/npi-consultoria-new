// src/app/api/cities/auto-sync/route.js

import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb';
import City from '@/app/models/City';
import Imovel from '@/app/models/Imovel';

export const dynamic = 'force-dynamic';

// Cache para evitar múltiplas execuções simultâneas
let syncInProgress = false;
let lastSyncTime = null;
let syncResults = null;

const MIN_SYNC_INTERVAL = 5 * 60 * 1000; // 5 minutos entre sincronizações

// Função principal de sincronização automática
async function performAutoSync() {
  if (syncInProgress) {
    console.log('[AUTO-SYNC] Sincronização já em andamento, ignorando...');
    return { skipped: true, reason: 'Sync already in progress' };
  }

  // Verificar intervalo mínimo
  if (lastSyncTime && (Date.now() - lastSyncTime) < MIN_SYNC_INTERVAL) {
    console.log('[AUTO-SYNC] Aguardando intervalo mínimo entre sincronizações...');
    return { skipped: true, reason: 'Minimum interval not reached' };
  }

  syncInProgress = true;
  const startTime = Date.now();
  
  try {
    console.log('[AUTO-SYNC] Iniciando sincronização automática de cidades...');
    
    await connectToDatabase();
    
    // Buscar cidades distintas dos imóveis
    const existingCities = await Imovel.distinct('Cidade');
    console.log(`[AUTO-SYNC] ${existingCities.length} cidades encontradas nos imóveis`);
    
    // Buscar cidades já cadastradas
    const registeredCities = await City.find({}, 'name').lean();
    const registeredCityNames = registeredCities.map(c => c.name);
    
    // Encontrar cidades que não estão cadastradas
    const newCities = existingCities.filter(cityName => {
      const cleanName = cleanCityName(cityName);
      return cleanName && cleanName.length > 0 && !registeredCityNames.includes(cleanName);
    });
    
    console.log(`[AUTO-SYNC] ${newCities.length} cidades novas para cadastrar:`, newCities);
    
    const results = {
      created: 0,
      updated: 0,
      errors: [],
      newCities: [],
      duration: 0
    };
    
    // Processar apenas cidades novas para não sobrecarregar
    for (const cityName of newCities) {
      try {
        const cleanName = cleanCityName(cityName);
        
        // Verificar novamente se não foi criada por outro processo
        const existingCity = await City.findOne({ name: cleanName });
        if (existingCity) {
          console.log(`[AUTO-SYNC] Cidade ${cleanName} já existe, pulando...`);
          continue;
        }
        
        const state = inferState(cleanName);
        const region = getRegionByState(state);
        
        // Contar propriedades para a nova cidade
        const totalProperties = await Imovel.countDocuments({ Cidade: cleanName });
        const totalActiveProperties = await Imovel.countDocuments({ 
          Cidade: cleanName, 
          Status: { $ne: 'Inativo' } 
        });
        
        const newCity = new City({
          name: cleanName,
          state,
          region,
          isActive: true,
          priority: totalActiveProperties > 50 ? 1 : 0,
          totalProperties,
          totalActiveProperties
        });
        
        // Gerar slug manualmente
        newCity.slug = newCity.generateSlug();
        
        await newCity.save();
        results.created++;
        results.newCities.push({
          name: cleanName,
          slug: newCity.slug,
          state,
          totalProperties
        });
        
        console.log(`[AUTO-SYNC] Criada: ${cleanName} (${state}) - ${totalProperties} imóveis`);
        
      } catch (error) {
        console.error(`[AUTO-SYNC] Erro ao criar cidade ${cityName}:`, error.message);
        results.errors.push({
          city: cityName,
          error: error.message
        });
      }
    }
    
    // Atualizar contadores das cidades existentes (somente se houve mudanças)
    if (results.created > 0) {
      console.log('[AUTO-SYNC] Atualizando contadores das cidades existentes...');
      await City.updatePropertyCounts();
      results.updated = registeredCities.length;
    }
    
    results.duration = Date.now() - startTime;
    lastSyncTime = Date.now();
    syncResults = results;
    
    console.log(`[AUTO-SYNC] Concluída! Criadas: ${results.created}, Atualizadas: ${results.updated}, Erros: ${results.errors.length}, Tempo: ${results.duration}ms`);
    
    return results;
    
  } catch (error) {
    console.error('[AUTO-SYNC] Erro durante sincronização:', error);
    return {
      error: error.message,
      duration: Date.now() - startTime
    };
  } finally {
    syncInProgress = false;
  }
}

// Função para limpar nome da cidade
function cleanCityName(cityName) {
  if (!cityName) return '';
  
  let cleaned = cityName.trim();
  
  // Fixes conhecidos
  const fixes = {
    'São Jose dos Campos': 'São José dos Campos',
    'São paulo ': 'São Paulo',
    'São Paulo ': 'São Paulo'
  };
  
  return fixes[cleaned] || cleaned;
}

// Função para inferir estado (simplificada)
function inferState(cityName) {
  const stateMapping = {
    'São Paulo': 'SP', 'Campinas': 'SP', 'Santos': 'SP', 'Guarujá': 'SP',
    'Santo André': 'SP', 'São Caetano do Sul': 'SP', 'São Bernardo do Campo': 'SP',
    'São José dos Campos': 'SP', 'Jundiaí': 'SP', 'Osasco': 'SP', 'Barueri': 'SP',
    'Cotia': 'SP', 'Diadema': 'SP', 'Guarulhos': 'SP', 'Indaiatuba': 'SP',
    'Piracicaba': 'SP', 'Valinhos': 'SP', 'Vinhedo': 'SP', 'Atibaia': 'SP',
    'Itatiba': 'SP', 'Bragança Paulista': 'SP', 'Itu': 'SP', 'Itupeva': 'SP',
    'Cabreúva': 'SP', 'Louveira': 'SP', 'Jacareí': 'SP', 'Caçapava': 'SP',
    'Santana de Parnaíba': 'SP', 'Ribeirão Pires': 'SP', 'Porto Feliz': 'SP',
    'Elias Fausto': 'SP', 'Hortolândia': 'SP', 'Paulínia': 'SP', 'Itaquaquecetuba': 'SP',
    'Vila Mariana': 'SP', 'Bertioga': 'SP',
    'Belo Horizonte': 'MG',
    'Gramado': 'RS',
    'Balneário Camboriú': 'SC', 'Itajaí': 'SC', 'Itapema': 'SC',
    'Porto Seguro': 'BA', 'Arraial DAjuda (Porto Seguro)': 'BA',
    'Paraty': 'RJ',
    'São Miguel dos Milagres': 'AL'
  };
  
  return stateMapping[cityName] || 'SP'; // Default SP
}

// Função para obter região por estado
function getRegionByState(state) {
  const regionMapping = {
    'SP': 'Sudeste', 'RJ': 'Sudeste', 'MG': 'Sudeste', 'ES': 'Sudeste',
    'PR': 'Sul', 'SC': 'Sul', 'RS': 'Sul',
    'BA': 'Nordeste', 'CE': 'Nordeste', 'AL': 'Nordeste', 'PE': 'Nordeste',
    'DF': 'Centro-Oeste', 'GO': 'Centro-Oeste', 'MT': 'Centro-Oeste', 'MS': 'Centro-Oeste',
    'AM': 'Norte', 'PA': 'Norte', 'RO': 'Norte', 'AC': 'Norte'
  };
  
  return regionMapping[state] || 'Sudeste';
}

// Endpoint GET para verificar status
export async function GET(request) {
  return NextResponse.json({
    status: 200,
    data: {
      syncInProgress,
      lastSyncTime: lastSyncTime ? new Date(lastSyncTime).toISOString() : null,
      lastResults: syncResults,
      nextSyncAvailable: lastSyncTime ? 
        new Date(lastSyncTime + MIN_SYNC_INTERVAL).toISOString() : 
        'now'
    }
  });
}

// Endpoint POST para triggerar sincronização
export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { force = false } = body;
    
    // Se force=true, ignora intervalo mínimo
    if (force) {
      lastSyncTime = null;
    }
    
    const result = await performAutoSync();
    
    return NextResponse.json({
      status: 200,
      message: result.skipped ? 'Sincronização ignorada' : 'Sincronização executada',
      data: result
    });
    
  } catch (error) {
    console.error('Erro na API de auto-sync:', error);
    return NextResponse.json({
      status: 500,
      message: 'Erro durante sincronização automática',
      error: error.message
    }, { status: 500 });
  }
}