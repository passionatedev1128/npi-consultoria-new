// src/app/api/cities/migrate/route.js

import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/mongodb';
import City from '@/app/models/City';
import Imovel from '@/app/models/Imovel';

export const dynamic = 'force-dynamic';

// State mapping for cities (you can expand this)
const STATE_MAPPING = {
  'São Paulo': 'SP',
  'Rio de Janeiro': 'RJ',
  'Belo Horizonte': 'MG',
  'Brasília': 'DF',
  'Salvador': 'BA',
  'Fortaleza': 'CE',
  'Curitiba': 'PR',
  'Recife': 'PE',
  'Porto Alegre': 'RS',
  'Manaus': 'AM',
  'Campinas': 'SP',
  'Santo André': 'SP',
  'Guarujá': 'SP',
  'Santos': 'SP',
  'São José dos Campos': 'SP',
  'São Caetano do Sul': 'SP',
  'São Bernardo do Campo': 'SP',
  'Osasco': 'SP',
  'Barueri': 'SP',
  'Cotia': 'SP',
  'Diadema': 'SP',
  'Guarulhos': 'SP',
  'Jundiaí': 'SP',
  'Indaiatuba': 'SP',
  'Campinas': 'SP',
  'Piracicaba': 'SP',
  'Valinhos': 'SP',
  'Vinhedo': 'SP',
  'Atibaia': 'SP',
  'Itatiba': 'SP',
  'Bragança Paulista': 'SP',
  'Itu': 'SP',
  'Itupeva': 'SP',
  'Cabreúva': 'SP',
  'Louveira': 'SP',
  'Jacareí': 'SP',
  'Caçapava': 'SP',
  'Santana de Parnaíba': 'SP',
  'Ribeirão Pires': 'SP',
  'Porto Feliz': 'SP',
  'Elias Fausto': 'SP',
  'Hortolândia': 'SP',
  'Paulínia': 'SP',
  'Itaquaquecetuba': 'SP',
  'Vila Mariana': 'SP',
  'Gramado': 'RS',
  'Balneário Camboriú': 'SC',
  'Itajaí': 'SC',
  'Itapema': 'SC',
  'Porto Seguro': 'BA',
  'Arraial DAjuda (Porto Seguro)': 'BA',
  'Paraty': 'RJ',
  'São Miguel dos Milagres': 'AL'
};

const REGION_MAPPING = {
  'SP': 'Sudeste',
  'RJ': 'Sudeste',
  'MG': 'Sudeste',
  'ES': 'Sudeste',
  'DF': 'Centro-Oeste',
  'BA': 'Nordeste',
  'CE': 'Nordeste',
  'AL': 'Nordeste',
  'PR': 'Sul',
  'SC': 'Sul',
  'RS': 'Sul',
  'AM': 'Norte'
};

function inferState(cityName) {
  // Direct mapping first
  if (STATE_MAPPING[cityName]) {
    return STATE_MAPPING[cityName];
  }
  
  // For cities we don't know, try to infer
  // This is a simplified approach - in production you'd want a more complete database
  return 'SP'; // Default to SP since most cities in the database are from São Paulo
}

function cleanCityName(cityName) {
  if (!cityName) return '';
  
  // Clean up common issues found in the data
  let cleaned = cityName.trim();
  
  // Fix specific known issues
  const fixes = {
    'São Jose dos Campos': 'São José dos Campos',
    'São paulo ': 'São Paulo',
    'São Paulo ': 'São Paulo'
  };
  
  return fixes[cleaned] || cleaned;
}

export async function POST(request) {
  try {
    await connectToDatabase();
    
    console.log('Iniciando migração de cidades...');
    
    // Get all distinct cities from properties
    const existingCities = await Imovel.distinct('Cidade');
    console.log(`Encontradas ${existingCities.length} cidades únicas no banco de imóveis`);
    
    // Clean and prepare city data
    const cleanedCities = existingCities
      .map(cleanCityName)
      .filter(city => city && city.length > 0)
      .filter((city, index, arr) => arr.indexOf(city) === index); // Remove duplicates
    
    console.log(`Após limpeza: ${cleanedCities.length} cidades únicas`);
    
    const results = {
      created: 0,
      updated: 0,
      errors: [],
      cities: []
    };
    
    for (const cityName of cleanedCities) {
      try {
        const state = inferState(cityName);
        const region = REGION_MAPPING[state] || 'Não informado';
        
        // Check if city already exists
        const existingCity = await City.findOne({ name: cityName });
        
        if (existingCity) {
          // Update existing city with counts
          const totalProperties = await Imovel.countDocuments({ Cidade: cityName });
          const totalActiveProperties = await Imovel.countDocuments({ 
            Cidade: cityName, 
            Status: { $ne: 'Inativo' } 
          });
          
          existingCity.totalProperties = totalProperties;
          existingCity.totalActiveProperties = totalActiveProperties;
          existingCity.state = state;
          existingCity.region = region;
          
          await existingCity.save();
          results.updated++;
          results.cities.push({
            name: cityName,
            slug: existingCity.slug,
            state,
            region,
            totalProperties,
            action: 'updated'
          });
          
        } else {
          // Create new city
          const totalProperties = await Imovel.countDocuments({ Cidade: cityName });
          const totalActiveProperties = await Imovel.countDocuments({ 
            Cidade: cityName, 
            Status: { $ne: 'Inativo' } 
          });
          
          const newCity = new City({
            name: cityName,
            state,
            region,
            isActive: true,
            priority: totalActiveProperties > 100 ? 1 : 0, // High priority for cities with many properties
            totalProperties,
            totalActiveProperties
          });
          
          // Generate slug manually before saving
          newCity.slug = newCity.generateSlug();
          
          await newCity.save();
          results.created++;
          results.cities.push({
            name: cityName,
            slug: newCity.slug,
            state,
            region,
            totalProperties,
            action: 'created'
          });
        }
        
        console.log(`Processada: ${cityName} (${state})`);
        
      } catch (error) {
        console.error(`Erro ao processar cidade ${cityName}:`, error.message);
        results.errors.push({
          city: cityName,
          error: error.message
        });
      }
    }
    
    console.log('Migração concluída!');
    console.log(`Criadas: ${results.created} | Atualizadas: ${results.updated} | Erros: ${results.errors.length}`);
    
    return NextResponse.json({
      status: 200,
      message: 'Migração de cidades concluída com sucesso',
      data: {
        summary: {
          totalProcessed: cleanedCities.length,
          created: results.created,
          updated: results.updated,
          errors: results.errors.length
        },
        cities: results.cities,
        errors: results.errors
      }
    });
    
  } catch (error) {
    console.error('Erro durante migração:', error);
    return NextResponse.json({
      status: 500,
      message: 'Erro durante migração de cidades',
      error: error.message
    }, { status: 500 });
  }
}