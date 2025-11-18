// PHOTOSORTER CORRIGIDO - Respeita ordem manual DEFINITIVAMENTE
// utils/photoSorter.js

export class PhotoSorter {
  constructor() {
    // Cache para evitar reprocessamento
    this.cacheOrdenacao = new Map();
    
    // Padrões conhecidos (expandido)
    this.padroes = [
      { prefix: 'i268P_48766b21', grupo: 'A', peso: 10000 },
      { prefix: 'iUg3s56gtAT3cfaA5U90_487', grupo: 'B', peso: 20000 },
      { prefix: 'iUG8o15s_4876', grupo: 'C', peso: 30000 },
      { prefix: 'i19Q55g4D1123W87', grupo: 'D', peso: 40000 },
      { prefix: 'ik71mgr366', grupo: 'E', peso: 50000 },
      { prefix: 'ic782Y6X12Tn', grupo: 'F', peso: 60000 },
      // Novos padrões detectados
      { prefix: 'i47Bg', grupo: 'G', peso: 70000 },
      { prefix: 'iXx9', grupo: 'H', peso: 80000 },
    ];

    this.debug = true;
  }

  // MÉTODO 1: Extrair informações avançadas do código
  analisarCodigoFoto(url) {
    if (!url) return { codigo: '', timestamp: 0, grupo: 'Z', peso: 999999 };

    const nomeArquivo = url.split('/').pop();
    const codigo = nomeArquivo.replace(/\.(jpg|jpeg|png|gif)$/i, '');
    
    if (!codigo) return { codigo: '', timestamp: 0, grupo: 'Z', peso: 999999 };

    // Detectar padrão conhecido
    const padrao = this.padroes.find(p => codigo.includes(p.prefix));
    
    if (padrao) {
      // Extrair hash/timestamp do código
      const regex = new RegExp(`${padrao.prefix}(.+)`);
      const match = codigo.match(regex);
      
      if (match && match[1]) {
        const sufixo = match[1];
        
        // NOVO: Múltiplas estratégias de timestamp
        const timestamp = this.extrairTimestamp(sufixo);
        
        return {
          codigo,
          timestamp,
          grupo: padrao.grupo,
          peso: padrao.peso + timestamp,
          padrao: padrao.prefix
        };
      }
    }

    // NOVO: Análise de padrões desconhecidos
    return this.analisarPadraoDesconhecido(codigo);
  }

  // NOVO: Múltiplas estratégias de timestamp
  extrairTimestamp(sufixo) {
    // Estratégia 1: Hash hexadecimal
    const hexMatch = sufixo.match(/[0-9a-fA-F]{6,}/);
    if (hexMatch) {
      const hex = hexMatch[0].substring(0, 8);
      const timestamp = parseInt(hex, 16);
      if (!isNaN(timestamp)) return timestamp;
    }

    // Estratégia 2: Números decimais
    const numMatch = sufixo.match(/\d{4,}/);
    if (numMatch) {
      return parseInt(numMatch[0]);
    }

    // Estratégia 3: Posição na string
    let hash = 0;
    for (let i = 0; i < sufixo.length; i++) {
      const char = sufixo.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }

  // NOVO: Análise de padrões desconhecidos
  analisarPadraoDesconhecido(codigo) {
    // Procurar por padrões tipo "i[chars]_[numero]"
    const padraoGeral = codigo.match(/^i([a-zA-Z0-9]{2,10})_?(\d+)/);
    
    if (padraoGeral) {
      const [, prefixo, numero] = padraoGeral;
      
      if (this.debug) {
        console.log(`Novo padrão detectado: i${prefixo}_${numero}`);
      }
      
      return {
        codigo,
        timestamp: parseInt(numero) || 0,
        grupo: 'NOVO',
        peso: 100000 + (parseInt(numero) || 0),
        padrao: `i${prefixo}_`
      };
    }

    // Fallback final
    return {
      codigo,
      timestamp: codigo.length, // Usar tamanho como ordenação
      grupo: 'DESCONHECIDO',
      peso: 999999,
      padrao: null
    };
  }

  // VERIFICAÇÃO CRÍTICA CORRIGIDA: Detectar ordem manual
  temOrdemManual(fotos) {
    if (!Array.isArray(fotos) || fotos.length === 0) {
      return false;
    }

    // CORREÇÃO: Verificar múltiplos campos de ordem
    const todasTemOrdem = fotos.every(foto => {
      const temOrdemMaiuscula = typeof foto.Ordem === 'number' && foto.Ordem >= 0;
      const temOrdemMinuscula = typeof foto.ordem === 'number' && foto.ordem >= 0;
      const temTipoOrdenacao = foto.tipoOrdenacao === 'manual' || foto.tipoOrdenacao === 'banco';
      
      return temOrdemMaiuscula || temOrdemMinuscula || temTipoOrdenacao;
    });

    if (!todasTemOrdem) {
      if (this.debug) {
        console.log('PhotoSorter - Nem todas têm campo Ordem válido');
        // Log detalhado dos campos encontrados
        fotos.slice(0, 3).forEach((foto, i) => {
          console.log(`  Foto ${i}: Ordem=${foto.Ordem}, ordem=${foto.ordem}, tipo=${foto.tipoOrdenacao}`);
        });
      }
      return false;
    }

    // CORREÇÃO: Extrair ordens de múltiplas fontes
    const ordens = fotos.map(foto => {
      let ordem = foto.Ordem !== undefined && foto.Ordem !== null ? foto.Ordem : foto.ordem;
      return typeof ordem === 'number' ? ordem : 0;
    }).sort((a, b) => a - b);

    // RELAXAR VERIFICAÇÃO: Aceitar qualquer ordem com números válidos >= 0
    const temOrdensValidas = ordens.every(ordem => typeof ordem === 'number' && ordem >= 0);
    
    // Verificar se não são todas iguais (seria estranho)
    const todasIguais = ordens.every(ordem => ordem === ordens[0]);
    
    // NOVA VERIFICAÇÃO: Se tem tipo banco ou manual, considerar válido
    const temTipoManual = fotos.some(foto => 
      foto.tipoOrdenacao === 'manual' || 
      foto.tipoOrdenacao === 'banco'
    );

    const resultado = (temOrdensValidas && !todasIguais) || temTipoManual;

    if (this.debug) {
      console.log('PhotoSorter - Verificação de ordem manual DETALHADA:', {
        totalFotos: fotos.length,
        todasTemOrdem,
        temOrdensValidas,
        todasIguais,
        temTipoManual,
        ordensAmostra: ordens.slice(0, 5),
        tiposAmostra: fotos.slice(0, 3).map(f => f.tipoOrdenacao),
        temOrdemManual: resultado
      });
    }

    return resultado;
  }

  // MÉTODO PRINCIPAL CORRIGIDO: Ordenação híbrida inteligente
  ordenarFotos(fotos, codigoImovel) {
    if (!Array.isArray(fotos) || fotos.length === 0) return [];

    const cacheKey = `${codigoImovel}-${fotos.length}`;
    
    try {
      if (this.debug) {
        console.group(`PHOTOSORTER - ${codigoImovel}`);
        console.log('Fotos recebidas:', fotos.length);
      }

      // VERIFICAÇÃO CRÍTICA CORRIGIDA: Se há ordem manual, PRESERVÁ-LA TOTALMENTE!
      if (this.temOrdemManual(fotos)) {
        if (this.debug) {
          console.log('ORDEM MANUAL DETECTADA - PhotoSorter preservando ordem EXATA');
          console.log('Ordens encontradas:', fotos.map(f => f.Ordem || f.ordem));
        }

        // CRITICAL FIX: Featured photo MUST always be first, regardless of Ordem
        // 1. Extract featured photo FIRST (before any sorting)
        const fotoDestaque = fotos.find(foto => foto.Destaque === "Sim");
        const outrasFotos = fotos.filter(foto => foto.Destaque !== "Sim");

        // 2. Normalize Ordem field for remaining photos
        const fotosComOrdemManual = outrasFotos.map(foto => ({
          ...foto,
          Ordem: foto.Ordem !== undefined ? foto.Ordem : foto.ordem,
          tipoOrdenacao: 'manual'
        }));

        // 3. Sort remaining photos by Ordem (featured photo is already extracted)
        fotosComOrdemManual.sort((a, b) => (a.Ordem || 0) - (b.Ordem || 0));

        // 4. ALWAYS put featured photo first, then sorted remaining photos
        const resultado = [
          ...(fotoDestaque ? [{
            ...fotoDestaque,
            Ordem: 0, // Featured photo always has Ordem 0
            tipoOrdenacao: 'destaque'
          }] : []),
          ...fotosComOrdemManual
        ];

        if (this.debug) {
          console.log('Ordem manual preservada COM DESTAQUE SEMPRE PRIMEIRO');
          console.log('Resultado ordenado:', resultado.map(f => ({ 
            codigo: f.Codigo?.substring(0, 10) + '...', 
            Ordem: f.Ordem,
            Destaque: f.Destaque 
          })));
          console.groupEnd();
        }

        return resultado;
      }

      // SE NÃO HÁ ORDEM MANUAL, APLICAR LÓGICA INTELIGENTE
      if (this.debug) {
        console.log('APLICANDO ORDEM INTELIGENTE (sem ordem manual detectada)');
      }

      // Verificar cache apenas para ordem inteligente
      if (this.cacheOrdenacao.has(cacheKey)) {
        const cached = this.cacheOrdenacao.get(cacheKey);
        if (this.debug) {
          console.log('Usando cache para ordenação inteligente');
          console.groupEnd();
        }
        return cached;
      }

      // 1. DESTAQUE SEMPRE PRIMEIRO
      const fotoDestaque = fotos.find(foto => foto.Destaque === "Sim");
      const outrasFotos = fotos.filter(foto => foto !== fotoDestaque);

      // 2. VERIFICAR CAMPO ORDEM LEGACY (MySQL original)
      const temCampoOrdemLegacy = outrasFotos.some(foto => 
        foto.ORDEM !== undefined || 
        (foto.Ordem !== undefined && foto.tipoOrdenacao !== 'manual')
      );

      let fotosOrdenadas;
      let metodo;

      if (temCampoOrdemLegacy) {
        // MÉTODO 1: Campo ORDEM do MySQL (legacy)
        fotosOrdenadas = [...outrasFotos].sort((a, b) => {
          const ordemA = a.ORDEM || a.Ordem || 999999;
          const ordemB = b.ORDEM || b.Ordem || 999999;
          return ordemA - ordemB;
        });
        metodo = 'MySQL ORDEM Legacy';
      } else {
        // MÉTODO 2: Análise inteligente de códigos
        fotosOrdenadas = [...outrasFotos].sort((a, b) => {
          const analiseA = this.analisarCodigoFoto(a.Foto);
          const analiseB = this.analisarCodigoFoto(b.Foto);

          // Primeiro por grupo (A, B, C, etc.)
          if (analiseA.grupo !== analiseB.grupo) {
            return analiseA.grupo.localeCompare(analiseB.grupo);
          }

          // Depois por peso (timestamp dentro do grupo)
          return analiseA.peso - analiseB.peso;
        });
        metodo = 'Análise Inteligente';
      }

      // 3. ADICIONAR CAMPO ORDEM BASEADO NA POSIÇÃO FINAL
      fotosOrdenadas = fotosOrdenadas.map((foto, index) => ({
        ...foto,
        Ordem: index + (fotoDestaque ? 1 : 0), // Ajustar se há destaque
        tipoOrdenacao: 'inteligente'
      }));

      // 4. RESULTADO FINAL
      const resultado = [
        ...(fotoDestaque ? [{
          ...fotoDestaque,
          Ordem: 0,
          tipoOrdenacao: 'destaque'
        }] : []),
        ...fotosOrdenadas
      ];

      // 5. LOGGING DETALHADO
      if (this.debug) {
        console.log(`Método: ${metodo}`);
        console.log(`Total: ${resultado.length} fotos`);
        console.log(`Destaque: ${fotoDestaque ? 'SIM' : 'NÃO'}`);
        
        if (metodo === 'Análise Inteligente') {
          const grupos = {};
          fotosOrdenadas.forEach((foto, i) => {
            const analise = this.analisarCodigoFoto(foto.Foto);
            if (!grupos[analise.grupo]) grupos[analise.grupo] = 0;
            grupos[analise.grupo]++;
            
            if (i < 3) {
              console.log(`${i+1}º: [${analise.grupo}:${analise.timestamp}] ${analise.codigo.substring(0, 20)}...`);
            }
          });
          console.log('Grupos detectados:', grupos);
        }
        
        console.groupEnd();
      }

      // 6. SALVAR CACHE (apenas para ordem inteligente)
      this.cacheOrdenacao.set(cacheKey, resultado);
      
      return resultado;

    } catch (error) {
      if (this.debug) {
        console.error('Erro na ordenação:', error);
        console.groupEnd();
      }
      return fotos; // Fallback seguro
    }
  }

  // UTILITÁRIOS
  limparCache() {
    this.cacheOrdenacao.clear();
    if (this.debug) {
      console.log('Cache do PhotoSorter limpo');
    }
  }

  adicionarPadrao(prefix, grupo, peso) {
    this.padroes.push({ prefix, grupo, peso });
    this.limparCache(); // Limpar cache para reprocessar
  }

  gerarRelatorio(fotos, codigoImovel) {
    const analises = fotos.map(foto => this.analisarCodigoFoto(foto.Foto));
    
    return {
      total: fotos.length,
      grupos: analises.reduce((acc, a) => {
        acc[a.grupo] = (acc[a.grupo] || 0) + 1;
        return acc;
      }, {}),
      padroes: analises.map(a => a.padrao).filter(Boolean),
      cobertura: analises.filter(a => a.grupo !== 'DESCONHECIDO').length / fotos.length
    };
  }

  // MÉTODO ESTÁTICO PARA USO DIRETO
  static preservarOrdemManual(fotos) {
    // Método estático para preservar ordem manual sem criar instância
    if (!Array.isArray(fotos) || fotos.length === 0) return [];
    
    const temOrdem = fotos.every(foto => 
      typeof foto.Ordem === 'number' || typeof foto.ordem === 'number'
    );
    
    if (temOrdem) {
      return fotos.map(foto => ({
        ...foto,
        Ordem: foto.Ordem !== undefined ? foto.Ordem : foto.ordem,
        tipoOrdenacao: 'manual'
      })).sort((a, b) => (a.Ordem || 0) - (b.Ordem || 0));
    }
    
    return fotos;
  }
}

// SINGLETON para uso global
export const photoSorter = new PhotoSorter();

// HOOK para Next.js
export function usePhotoSorter() {
  return photoSorter;
}

// FUNÇÃO HELPER PRINCIPAL
export default function ordenarFotos(fotos, codigoImovel = 'default') {
  return photoSorter.ordenarFotos(fotos, codigoImovel);
}
