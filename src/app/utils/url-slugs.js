// src/app/utils/url-slugs.js

// Cache para mapeamentos de cidades (será populado dinamicamente)
let MAPEAMENTO_CIDADES_CACHE = null;
let CACHE_TIMESTAMP = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

// Função para buscar mapeamento de cidades do banco de dados
export const getCitySlugMapping = async () => {
  // Check cache first
  if (MAPEAMENTO_CIDADES_CACHE && CACHE_TIMESTAMP && (Date.now() - CACHE_TIMESTAMP) < CACHE_DURATION) {
    return MAPEAMENTO_CIDADES_CACHE;
  }
  
  try {
    // Try to fetch from API
    const response = await fetch('/api/cities/slugs');
    if (response.ok) {
      const data = await response.json();
      MAPEAMENTO_CIDADES_CACHE = data.data;
      CACHE_TIMESTAMP = Date.now();
      return MAPEAMENTO_CIDADES_CACHE;
    }
  } catch (error) {
    console.warn('Erro ao buscar mapeamento de cidades da API, usando fallback:', error);
  }
  
  // Fallback para casos onde a API não está disponível (SSR, etc)
  return getFallbackCityMapping();
};

// Fallback mapping for when API is not available
const getFallbackCityMapping = () => {
  return {
    'arraial-dajuda-porto-seguro': 'Arraial DAjuda (Porto Seguro)',
    'atibaia': 'Atibaia',
    'balneario-camboriu': 'Balneário Camboriú',
    'barueri': 'Barueri',
    'belo-horizonte': 'Belo Horizonte',
    'bertioga': 'Bertioga',
    'braganca-paulista': 'Bragança Paulista',
    'cabreuva': 'Cabreúva',
    'caieiras': 'Caieiras',
    'campinas': 'Campinas',
    'cacapava': 'Caçapava',
    'caraguatatuba': 'Caraguatatuba',
    'cotia': 'Cotia',
    'diadema': 'Diadema',
    'elias-fausto': 'Elias Fausto',
    'gramado': 'Gramado',
    'guaruja': 'Guarujá',
    'guarulhos': 'Guarulhos',
    'hortolandia': 'Hortolândia',
    'ilhabela': 'Ilhabela',
    'indaiatuba': 'Indaiatuba',
    'itajai': 'Itajaí',
    'itapema': 'Itapema',
    'itaquaquecetuba': 'Itaquaquecetuba',
    'itatiba': 'Itatiba',
    'itu': 'Itu',
    'itupeva': 'Itupeva',
    'jacarei': 'Jacareí',
    'jundiai': 'Jundiaí',
    'louveira': 'Louveira',
    'mongagua': 'Mongaguá',
    'osasco': 'Osasco',
    'paraty': 'Paraty',
    'paulinia': 'Paulínia',
    'praia-grande': 'Praia Grande',
    'piracicaba': 'Piracicaba',
    'porto-feliz': 'Porto Feliz',
    'porto-seguro': 'Porto Seguro',
    'ribeirao-pires': 'Ribeirão Pires',
    'santana-de-parnaiba': 'Santana de Parnaíba',
    'santo-andre': 'Santo André',
    'santos': 'Santos',
    'sao-bernardo-do-campo': 'São Bernardo do Campo',
    'sao-caetano-do-sul': 'São Caetano do Sul',
    'sao-jose-dos-campos': 'São José dos Campos',
    'sao-miguel-dos-milagres': 'São Miguel dos Milagres',
    'sao-paulo': 'São Paulo',
    'sao-sebastiao': 'São Sebastião',
    'ubatuba': 'Ubatuba',
    'valinhos': 'Valinhos',
    'vila-mariana': 'Vila Mariana',
    'vinhedo': 'Vinhedo'
  };
};

const MAPEAMENTO_CATEGORIAS = {
  'apartamentos': 'Apartamento',
  'casas': 'Casa',
  'casas-comerciais': 'Casa Comercial',
  'casas-em-condominio': 'Casa em Condominio',
  'coberturas': 'Cobertura',
  'flats': 'Flat',
  'gardens': 'Garden',
  'lofts': 'Loft',
  'lojas': 'Loja',
  'predios-comerciais': 'Prédio Comercial',
  'salas-comerciais': 'Sala Comercial',
  'sobrados': 'Sobrado',
  'terrenos': 'Terreno'
};

const MAPEAMENTO_FINALIDADES = {
  'compra': 'Comprar',
  'venda': 'Comprar', // Venda é igual a Comprar no sistema
  'aluguel': 'Alugar',
  'locacao': 'Alugar'
};

// Funções para gerar slugs (do valor para URL)
export const gerarSlugCidade = (cidade) => {
  if (!cidade) return '';
  
  return cidade
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[\/\s]+/g, '-') // Substitui espaços E barras por hífens
    .replace(/[^a-z0-9-]/g, '') // Remove outros caracteres especiais
    .replace(/-+/g, '-') // Remove hífens duplos
    .replace(/^-+|-+$/g, '') // Remove hífens no início/fim
    .trim();
};

export const gerarSlugCategoria = (categoria) => {
  if (!categoria) return '';
  
  // Função para normalizar texto (remove acentos e converte para lowercase)
  const normalizar = (texto) => {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Remove acentos
  };
  
  // Busca o valor invertido no mapeamento, normalizando ambos para comparação
  const slugEncontrado = Object.keys(MAPEAMENTO_CATEGORIAS).find(
    key => normalizar(MAPEAMENTO_CATEGORIAS[key]) === normalizar(categoria)
  );
  
  // Se encontrou no mapeamento, retorna o slug
  if (slugEncontrado) return slugEncontrado;
  
  // Fallback: normaliza acentos e converte para slug
  return normalizar(categoria).replace(/\s+/g, '-');
};

export const gerarSlugFinalidade = (finalidade) => {
  if (!finalidade) return '';

  const normalized = finalidade.toString().toLowerCase();

  if (normalized === 'comprar' || normalized === 'venda') return 'venda';
  if (
    normalized === 'alugar' ||
    normalized === 'aluguel' ||
    normalized === 'locacao' ||
    normalized === 'locação'
  ) {
    return 'aluguel';
  }

  const slugEncontrado = Object.keys(MAPEAMENTO_FINALIDADES).find(
    (key) => MAPEAMENTO_FINALIDADES[key].toLowerCase() === normalized
  );

  return slugEncontrado || normalized;
};

export const gerarSlugBairros = (bairros) => {
  if (!bairros || !Array.isArray(bairros) || bairros.length === 0) return '';
  
  return bairros
    .slice(0, 4) // Máximo 4 bairros
    .map(bairro => gerarSlugCidade(bairro))
    .join('+');
};

export const gerarSlugQuartos = (quartos) => {
  if (!quartos || quartos === 0) return '';
  
  return quartos === 1 ? '1-quarto' : `${quartos}-quartos`;
};

export const gerarSlugPreco = (precoMin, precoMax) => {
  if (!precoMin && !precoMax) return '';
  
  const formatarValor = (valor) => {
    if (valor >= 1000000) {
      return `${valor / 1000000}mi`;
    } else if (valor >= 1000) {
      return `${valor / 1000}mil`;
    }
    return valor.toString();
  };
  
  if (precoMin && precoMax) {
    return `${formatarValor(precoMin)}-${formatarValor(precoMax)}`;
  } else if (precoMax) {
    return `ate-${formatarValor(precoMax)}`;
  } else if (precoMin) {
    return `acima-${formatarValor(precoMin)}`;
  }
  
  return '';
};

// Funções para converter slugs (da URL para valor)
export const converterSlugCidade = async (slug) => {
  if (!slug) return '';
  
  const mapeamento = await getCitySlugMapping();
  return mapeamento[slug] || slug;
};

// Versão síncrona para uso quando não é possível usar async
export const converterSlugCidadeSync = (slug) => {
  if (!slug) return '';
  
  // Use cache if available, otherwise fallback
  const mapeamento = MAPEAMENTO_CIDADES_CACHE || getFallbackCityMapping();
  return mapeamento[slug] || slug;
};

// Função para obter todas as cidades válidas (slugs)
export const getCityValidSlugs = async () => {
  const mapeamento = await getCitySlugMapping();
  return Object.keys(mapeamento);
};

// Versão síncrona para obter cidades válidas
export const getCityValidSlugsSync = () => {
  const mapeamento = MAPEAMENTO_CIDADES_CACHE || getFallbackCityMapping();
  return Object.keys(mapeamento);
};

export const converterSlugCategoria = (slug) => {
  if (!slug) return '';
  return MAPEAMENTO_CATEGORIAS[slug] || slug;
};

export const converterSlugFinalidade = (slug) => {
  if (!slug) return '';
  return MAPEAMENTO_FINALIDADES[slug] || slug;
};

export const converterSlugBairros = (slug) => {
  if (!slug) return [];
  
  return slug.split('+').map(bairroSlug => {
    // Converte cada slug de bairro de volta para o nome original
    return bairroSlug
      .split('-')
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(' ');
  });
};

export const converterSlugQuartos = (slug) => {
  if (!slug) return null;
  
  if (slug === '1-quarto') return 1;
  
  const match = slug.match(/^(\d+)-quartos$/);
  return match ? parseInt(match[1]) : null;
};

export const converterSlugPreco = (slug) => {
  if (!slug) return { min: null, max: null };
  
  const converterValor = (valorStr) => {
    if (valorStr.includes('mi')) {
      return parseFloat(valorStr.replace('mi', '')) * 1000000;
    } else if (valorStr.includes('mil')) {
      return parseFloat(valorStr.replace('mil', '')) * 1000;
    }
    return parseFloat(valorStr);
  };
  
  if (slug.startsWith('ate-')) {
    const valor = slug.replace('ate-', '');
    return { min: null, max: converterValor(valor) };
  } else if (slug.startsWith('acima-')) {
    const valor = slug.replace('acima-', '');
    return { min: converterValor(valor), max: null };
  } else if (slug.includes('-')) {
    const [minStr, maxStr] = slug.split('-');
    return { 
      min: converterValor(minStr), 
      max: converterValor(maxStr) 
    };
  }
  
  return { min: null, max: null };
};

// Função para gerar URL completa SEO-friendly
export const gerarUrlSeoFriendly = (filtros) => {
  const {
    cidadeSelecionada,
    finalidade,
    categoriaSelecionada,
    bairrosSelecionados,
    quartos,
    precoMin,
    precoMax
  } = filtros;
  
  if (!cidadeSelecionada || !finalidade || !categoriaSelecionada) {
    return '/busca'; // Fallback para página de busca normal
  }
  
  // Gerar slugs individuais
  const slugFinalidade = gerarSlugFinalidade(finalidade);
  const slugCategoria = gerarSlugCategoria(categoriaSelecionada);
  const slugCidade = gerarSlugCidade(cidadeSelecionada);
  
  // Validar que os slugs essenciais não estão vazios
  if (!slugFinalidade || !slugCategoria || !slugCidade) {
    console.warn('[gerarUrlSeoFriendly] Slugs essenciais vazios:', {
      finalidade,
      slugFinalidade,
      categoriaSelecionada,
      slugCategoria,
      cidadeSelecionada,
      slugCidade
    });
    return '/busca'; // Fallback para página de busca normal
  }
  
  const slugs = [
    'buscar', // Prefixo para evitar conflitos de rota
    slugFinalidade,
    slugCategoria,
    slugCidade
  ];
  
  // Adicionar bairros se existirem
  const slugBairros = gerarSlugBairros(bairrosSelecionados);
  if (slugBairros) {
    slugs.push(slugBairros);
  }
  
  // Adicionar quartos se existir
  const slugQuartos = gerarSlugQuartos(quartos);
  if (slugQuartos) {
    slugs.push(slugQuartos);
  }
  
  // Adicionar preço se existir
  const slugPreco = gerarSlugPreco(precoMin, precoMax);
  if (slugPreco) {
    slugs.push(slugPreco);
  }
  
  return '/' + slugs.join('/');
};

// Função para gerar títulos dinâmicos SEO-otimizados
export const gerarTituloSeoFriendly = (filtros, totalItems = null) => {
  const {
    cidadeSelecionada,
    finalidade,
    categoriaSelecionada,
    bairrosSelecionados,
    quartos,
    precoMin,
    precoMax
  } = filtros;

  // Base do título
  let titulo = '';
  
  // Finalidade em formato amigável
  const finalidadeTexto = finalidade === 'Comprar' ? 'à venda' : 'para alugar';
  
  // Categoria no plural
  const categoriaPluralMap = {
    'Apartamento': 'Apartamentos',
    'Casa': 'Casas',
    'Casa Comercial': 'Casas Comerciais',
    'Casa em Condominio': 'Casas em Condominio',
    'Cobertura': 'Coberturas',
    'Flat': 'Flats',
    'Garden': 'Gardens',
    'Loft': 'Lofts',
    'Loja': 'Lojas',
    'Prédio Comercial': 'Prédios Comerciais',
    'Sala Comercial': 'Salas Comerciais',
    'Sobrado': 'Sobrados',
    'Terreno': 'Terrenos'
  };
  const categoriaPlural = categoriaPluralMap[categoriaSelecionada] || categoriaSelecionada;
  
  // Construir título base
  titulo = `${categoriaPlural} ${finalidadeTexto}`;
  
  // Adicionar bairros se específicos
  if (bairrosSelecionados && bairrosSelecionados.length > 0) {
    if (bairrosSelecionados.length === 1) {
      titulo += ` no ${bairrosSelecionados[0]}`;
    } else if (bairrosSelecionados.length <= 3) {
      titulo += ` em ${bairrosSelecionados.join(', ')}`;
    } else {
      titulo += ` em ${bairrosSelecionados.slice(0, 2).join(', ')} e região`;
    }
  }
  
  // Adicionar cidade
  if (cidadeSelecionada) {
    titulo += ` - ${cidadeSelecionada}`;
  }
  
  // Adicionar quartos se especificado
  if (quartos) {
    titulo += ` com ${quartos} ${quartos === 1 ? 'quarto' : 'quartos'}`;
  }
  
  // Adicionar range de preço se especificado
  if (precoMin || precoMax) {
    const formatarPreco = (valor) => {
      if (valor >= 1000000) {
        return `R$ ${(valor / 1000000).toFixed(1).replace('.', ',')} mi`;
      } else if (valor >= 1000) {
        return `R$ ${(valor / 1000).toFixed(0)} mil`;
      }
      return `R$ ${valor.toLocaleString('pt-BR')}`;
    };
    
    if (precoMin && precoMax) {
      titulo += ` entre ${formatarPreco(precoMin)} e ${formatarPreco(precoMax)}`;
    } else if (precoMax) {
      titulo += ` até ${formatarPreco(precoMax)}`;
    } else if (precoMin) {
      titulo += ` a partir de ${formatarPreco(precoMin)}`;
    }
  }
  
  // Adicionar total de imóveis se disponível
  if (totalItems !== null && totalItems > 0) {
    titulo += ` (${totalItems} ${totalItems === 1 ? 'imóvel' : 'imóveis'})`;
  }
  
  // Adicionar marca
  titulo += ' | NPi Imóveis';
  
  return titulo;
};

// Função para gerar descrição SEO
export const gerarDescricaoSeoFriendly = (filtros, totalItems = null) => {
  const {
    cidadeSelecionada,
    finalidade,
    categoriaSelecionada,
    bairrosSelecionados,
    quartos
  } = filtros;
  
  const finalidadeTexto = finalidade === 'Comprar' ? 'venda' : 'locação';
  const categoriaLower = categoriaSelecionada?.toLowerCase() || 'imóveis';
  
  let descricao = `Encontre os melhores ${categoriaLower} para ${finalidadeTexto}`;
  
  if (cidadeSelecionada) {
    descricao += ` em ${cidadeSelecionada}`;
  }
  
  if (bairrosSelecionados && bairrosSelecionados.length > 0) {
    if (bairrosSelecionados.length === 1) {
      descricao += `, especialmente no ${bairrosSelecionados[0]}`;
    } else {
      descricao += `, incluindo ${bairrosSelecionados.slice(0, 2).join(' e ')}`;
    }
  }
  
  if (quartos) {
    descricao += ` com ${quartos} ${quartos === 1 ? 'quarto' : 'quartos'}`;
  }
  
  descricao += '. Imóveis de alto padrão, com fotos, plantas e informações completas. NPi Imóveis - sua imobiliária de confiança.';
  
  if (totalItems !== null && totalItems > 0) {
    descricao = `${totalItems} ${totalItems === 1 ? 'opção disponível' : 'opções disponíveis'}. ${descricao}`;
  }
  
  return descricao;
};

// Função para gerar keywords SEO
export const gerarKeywordsSeoFriendly = (filtros) => {
  const {
    cidadeSelecionada,
    finalidade,
    categoriaSelecionada,
    bairrosSelecionados
  } = filtros;
  
  const keywords = [];
  
  // Keywords base
  if (categoriaSelecionada) {
    keywords.push(categoriaSelecionada.toLowerCase());
    keywords.push(`${categoriaSelecionada.toLowerCase()} ${finalidade === 'Comprar' ? 'venda' : 'aluguel'}`);
  }
  
  // Keywords de localização
  if (cidadeSelecionada) {
    keywords.push(cidadeSelecionada.toLowerCase());
    if (categoriaSelecionada) {
      keywords.push(`${categoriaSelecionada.toLowerCase()} ${cidadeSelecionada.toLowerCase()}`);
    }
  }
  
  // Keywords de bairros
  if (bairrosSelecionados && bairrosSelecionados.length > 0) {
    bairrosSelecionados.forEach(bairro => {
      keywords.push(bairro.toLowerCase());
      if (categoriaSelecionada) {
        keywords.push(`${categoriaSelecionada.toLowerCase()} ${bairro.toLowerCase()}`);
      }
    });
  }
  
  // Keywords gerais
  keywords.push('imóveis', 'imobiliária', 'npi imóveis', 'alto padrão');
  
  return keywords.join(', ');
};

// Função para converter URL SEO-friendly de volta para filtros
export const converterUrlParaFiltros = (params) => {
  const { finalidade, categoria, cidade, bairros, quartos, preco } = params;
  
  console.log('[URL-SLUGS] =================== CONVERSÃO DE SLUGS ===================');
  console.log('[URL-SLUGS] Parâmetros recebidos:', params);
  
  console.log('[URL-SLUGS] Conversões individuais:');
  console.log('[URL-SLUGS] - Finalidade:', finalidade, '->', converterSlugFinalidade(finalidade));
  console.log('[URL-SLUGS] - Categoria:', categoria, '->', converterSlugCategoria(categoria));
  console.log('[URL-SLUGS] - Cidade:', cidade, '->', converterSlugCidade(cidade));
  
  const filtros = {
    cidadeSelecionada: converterSlugCidade(cidade) || '',
    finalidade: converterSlugFinalidade(finalidade) || '',
    categoriaSelecionada: converterSlugCategoria(categoria) || '',
    bairrosSelecionados: bairros ? converterSlugBairros(bairros) : [],
    quartos: quartos ? converterSlugQuartos(quartos) : null,
    precoMin: null,
    precoMax: null
  };
  
  // Converter preço se existir
  if (preco) {
    const { min, max } = converterSlugPreco(preco);
    filtros.precoMin = min;
    filtros.precoMax = max;
  }
  
  console.log('[URL-SLUGS] Filtros finais convertidos:', filtros);
  console.log('[URL-SLUGS] =======================================================');
  
  return filtros;
};
