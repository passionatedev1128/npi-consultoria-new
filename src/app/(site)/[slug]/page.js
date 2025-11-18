// src/app/(site)/[slug]/page.js - VERSÃO FINAL COMPLETA COM ORDENAÇÃO CORRIGIDA

import { Button } from "@/app/components/ui/button";
import { getCondominioPorSlug } from "@/app/services";
import { formatterValue } from "@/app/utils/formatter-value";
import { Apartment as StructuredDataApartment } from "@/app/components/structured-data";
import { Share } from "@/app/components/ui/share";
import { PropertyTableOwner } from "./componentes/property-table-owner";
import { WhatsappFloat } from "@/app/components/ui/whatsapp";
import { PropertyTable } from "./componentes/property-table";
import { ImoveisRelacionados } from "./componentes/related-properties";
import SobreCondominio from "./componentes/SobreCondominio";
import FichaTecnica from "./componentes/FichaTecnica";
import DiferenciaisCondominio from "./componentes/DiferenciaisCondominio";
import DetalhesCondominio from "./componentes/DetalhesCondominio";
import Lazer from "./componentes/Lazer";
import VideoCondominio from "./componentes/VideoCondominio";
import TourVirtual from "./componentes/TourVirtual";
import ExploreRegiao from "./componentes/ExploreRegiao";
import { notFound, redirect } from "next/navigation";
import ExitIntentModal from "@/app/components/ui/exit-intent-modal";
import ScrollToImoveisButton from "./componentes/scroll-to-imovel-button";
import { photoSorter } from "@/app/utils/photoSorter"; 
import { ImageGallery } from "@/app/components/sections/image-gallery";

function ensureCondominio(text) {
  return /condom[ií]nio/i.test(text) ? text : `Condomínio ${text}`;
}

function detectarOrientacaoFoto(fotosOrdenadas) {
  if (!fotosOrdenadas || fotosOrdenadas.length === 0) {
    console.log('DETECÇÃO: Nenhuma foto encontrada, usando VERTICAL por padrão');
    return 'vertical';
  }

  const primeiraFoto = fotosOrdenadas[0];
  if (!primeiraFoto?.Foto) {
    console.log('DETECÇÃO: Primeira foto sem URL, usando VERTICAL por padrão');
    return 'vertical';
  }

  console.log('DETECÇÃO: Analisando foto:', primeiraFoto.Foto);
  console.log('DETECÇÃO: Metadados da foto:', {
    Largura: primeiraFoto.Largura,
    Altura: primeiraFoto.Altura,
    FotoPequena: primeiraFoto.FotoPequena
  });

  if (primeiraFoto.Largura && primeiraFoto.Altura) {
    const largura = parseInt(primeiraFoto.Largura);
    const altura = parseInt(primeiraFoto.Altura);
    const ratio = largura / altura;
    const orientacao = ratio < 0.8 ? 'vertical' : 'horizontal';
    console.log('DETECÇÃO: Por dimensões -', `${largura}x${altura}`, 'ratio:', ratio.toFixed(2), '→', orientacao);
    return orientacao;
  }

  const fotoUrl = primeiraFoto.Foto.toLowerCase();
  
  const padroesHorizontais = [
    'horizontal', 'landscape', 'wide', 'banner', 'panoramic',
    'sala', 'living', 'cozinha', 'quarto', 'bedroom', 'kitchen',
    'interior', 'inside', 'room', 'varanda', 'balcony'
  ];
  
  const isHorizontal = padroesHorizontais.some(padrao => fotoUrl.includes(padrao));
  
  if (isHorizontal) {
    console.log('DETECÇÃO: Padrão HORIZONTAL detectado na URL →', 'horizontal');
    return 'horizontal';
  }

  console.log('DETECÇÃO: Nenhum padrão horizontal encontrado → assumindo VERTICAL');
  return 'vertical';
}

function processarFotosCondominio(fotos, codigoCondominio) {
  if (!Array.isArray(fotos) || fotos.length === 0) {
    console.log('CONDOMÍNIO: Nenhuma foto para processar');
    return [];
  }

  try {
    console.log('CONDOMÍNIO: Iniciando ordenação com photoSorter...', {
      totalFotos: fotos.length,
      codigo: codigoCondominio
    });
    
    const fotosTemp = fotos.map(foto => {
      const { Ordem, ordem, ORDEM, ...fotoSemOrdem } = foto;
      return fotoSemOrdem;
    });
    
    const fotosOrdenadas = photoSorter.ordenarFotos(fotosTemp, codigoCondominio || 'condominio');
    
    console.log('CONDOMÍNIO: Ordenação finalizada usando photoSorter:', {
      totalFotos: fotosOrdenadas.length,
      primeira: fotosOrdenadas[0]?.Foto?.split('/').pop()?.substring(0, 30) + '...',
      metodo: 'photoSorter.ordenarFotos() - IGUAL AO ADMIN'
    });

    return fotosOrdenadas;

  } catch (error) {
    console.error('CONDOMÍNIO: Erro ao usar photoSorter:', error);
    return fotos;
  }
}

function limparMetragem(valor) {
  if (!valor) return valor;
  
  if (typeof valor === 'string') {
    const numero = parseFloat(valor.replace(/[^\d,.-]/g, '').replace(',', '.'));
    
    if (isNaN(numero)) return valor;
    
    if (numero === Math.floor(numero)) {
      return numero.toString();
    }
    
    return numero.toFixed(1).replace('.0', '');
  }
  
  if (typeof valor === 'number') {
    if (valor === Math.floor(valor)) {
      return valor.toString();
    }
    
    return valor.toFixed(1).replace('.0', '');
  }
  
  return valor;
}

function processarDadosImoveis(imoveis) {
  if (!Array.isArray(imoveis)) return imoveis;
  
  return imoveis.map(imovel => {
    const imovelProcessado = { ...imovel };
    
    const camposMetragem = [
      'Metragem',
      'MetragemTotal', 
      'MetragemPrivativa',
      'MetragemAnt',
      'AreaTotal',
      'AreaPrivativa',
      'Area'
    ];
    
    camposMetragem.forEach(campo => {
      if (imovelProcessado[campo]) {
        const valorOriginal = imovelProcessado[campo];
        const valorLimpo = limparMetragem(valorOriginal);
        
        if (valorOriginal !== valorLimpo) {
          console.log(`METRAGEM LIMPA: ${campo} ${valorOriginal} → ${valorLimpo} (Código: ${imovel.Codigo})`);
        }
        
        imovelProcessado[campo] = valorLimpo;
      }
    });
    
    return imovelProcessado;
  });
}

function isValidValue(value) {
  if (value === undefined || value === null || value === "") return false;
  if (typeof value === 'string' && value.trim() === "") return false;
  if (value === "0" || value === 0) return false;
  return true;
}

// FUNÇÃO CORRIGIDA E OTIMIZADA PARA ORDENAÇÃO DE IMÓVEIS
function ordenarImoveisRelacionados(imoveisRelacionados, codigoPrincipal) {
  if (!Array.isArray(imoveisRelacionados) || imoveisRelacionados.length === 0) {
    console.log('Array vazio ou inválido');
    return [];
  }

  try {
    // Converter codigoPrincipal para número e string para comparação
    const codigoNumerico = parseInt(codigoPrincipal);
    const codigoString = String(codigoPrincipal);
    
    console.log('INICIANDO ORDENAÇÃO:', {
      totalImoveis: imoveisRelacionados.length,
      codigoPrincipal: codigoPrincipal,
      codigoNumerico: codigoNumerico
    });

    // Debug: Mostrar todos os imóveis com seus valores
    console.log('IMÓVEIS ANTES DA ORDENAÇÃO:');
    imoveisRelacionados.forEach(imovel => {
      const camposValor = {
        Codigo: imovel.Codigo,
        ValorVendaSite: imovel.ValorVendaSite,
        ValorVenda: imovel.ValorVenda,
        ValorAntigo: imovel.ValorAntigo,
        ValorAluguelSite: imovel.ValorAluguelSite,
        Valor: imovel.Valor,
        PrecoVenda: imovel.PrecoVenda
      };
      console.log('Imóvel:', camposValor);
    });

    // 1. IDENTIFICAR IMÓVEL DESTAQUE (principal) - mesmo código do condomínio
    const imovelPrincipal = imoveisRelacionados.find(imovel => {
      // Comparação mais flexível - string e número
      const codigo = String(imovel.Codigo || imovel.CodigoImovel || '');
      const ehPrincipal = codigo === codigoString || parseInt(codigo) === codigoNumerico;
      
      if (ehPrincipal) {
        console.log('IMÓVEL DESTAQUE ENCONTRADO (mesmo código do condomínio):', {
          codigoImovel: codigo,
          codigoCondominio: codigoString
        });
      }
      
      return ehPrincipal;
    });

    // 2. SEPARAR DEMAIS IMÓVEIS
    const demaisImoveis = imoveisRelacionados.filter(imovel => {
      const codigo = String(imovel.Codigo || imovel.CodigoImovel || '');
      return codigo !== codigoString && parseInt(codigo) !== codigoNumerico;
    });

    console.log(`Separação: Principal: ${imovelPrincipal ? 'SIM' : 'NÃO'}, Demais: ${demaisImoveis.length}`);

    // 3. FUNÇÃO ROBUSTA PARA EXTRAIR VALOR NUMÉRICO
    const extrairValorNumerico = (imovel) => {
      // Lista expandida de campos possíveis (ordem de prioridade)
      const camposValorVenda = [
        'ValorVendaSite',
        'ValorVenda', 
        'ValorAntigo',
        'Valor',
        'PrecoVenda',
        'ValorVendaFormatado',
        'PrecoFormatado'
      ];
      
      const camposValorAluguel = [
        'ValorAluguelSite',
        'ValorAluguel',
        'ValorLocacao',
        'PrecoAluguel'
      ];

      // Primeiro tenta campos de venda
      for (const campo of camposValorVenda) {
        if (imovel[campo] !== undefined && imovel[campo] !== null && imovel[campo] !== '') {
          const valor = imovel[campo];
          
          // Se já é número
          if (typeof valor === 'number' && valor > 0) {
            console.log(`[${imovel.Codigo}] Campo ${campo} (número): ${valor}`);
            return valor;
          }
          
          // Se é string, limpa e converte
          if (typeof valor === 'string' && valor.trim() !== '') {
            // Remove tudo exceto números (incluindo pontos de milhar e vírgulas decimais)
            const valorLimpo = valor.replace(/[^\d,]/g, '').replace(/\./g, '').replace(',', '.');
            const valorNumerico = parseFloat(valorLimpo) || 0;
            
            if (valorNumerico > 0) {
              console.log(`[${imovel.Codigo}] Campo ${campo}: "${valor}" → ${valorNumerico}`);
              return valorNumerico;
            }
          }
        }
      }

      // Se não encontrou valor de venda, tenta aluguel
      for (const campo of camposValorAluguel) {
        if (imovel[campo] !== undefined && imovel[campo] !== null && imovel[campo] !== '') {
          const valor = imovel[campo];
          
          if (typeof valor === 'number' && valor > 0) {
            console.log(`[${imovel.Codigo}] Aluguel ${campo}: ${valor}`);
            return valor;
          }
          
          if (typeof valor === 'string' && valor.trim() !== '') {
            const valorLimpo = valor.replace(/[^\d,]/g, '').replace(/\./g, '').replace(',', '.');
            const valorNumerico = parseFloat(valorLimpo) || 0;
            
            if (valorNumerico > 0) {
              console.log(`[${imovel.Codigo}] Aluguel ${campo}: "${valor}" → ${valorNumerico}`);
              return valorNumerico;
            }
          }
        }
      }

      // Se não encontrou nenhum valor válido
      console.log(`[${imovel.Codigo}] SEM VALOR - será movido para o final`);
      return 0;
    };

    // 4. ORDENAR DEMAIS IMÓVEIS (menor → maior, zeros no final)
    const demaisOrdenados = [...demaisImoveis].sort((a, b) => {
      const valorA = extrairValorNumerico(a);
      const valorB = extrairValorNumerico(b);
      
      console.log(`Comparando: [${a.Codigo}] R$ ${valorA} vs [${b.Codigo}] R$ ${valorB}`);
      
      // REGRA 1: Imóveis sem valor (0) vão para o FINAL
      if (valorA === 0 && valorB > 0) {
        console.log(`   ↓ [${a.Codigo}] vai para o FINAL (sem valor)`);
        return 1; // A vai para o final
      }
      
      if (valorB === 0 && valorA > 0) {
        console.log(`   ↓ [${b.Codigo}] vai para o FINAL (sem valor)`);
        return -1; // B vai para o final
      }
      
      // REGRA 2: Se ambos são 0, mantém ordem original
      if (valorA === 0 && valorB === 0) {
        console.log(`   = Ambos sem valor, mantendo ordem`);
        return 0;
      }
      
      // REGRA 3: Ordenação normal - MENOR para MAIOR
      const resultado = valorA - valorB;
      console.log(`   ${resultado < 0 ? '↑' : resultado > 0 ? '↓' : '='} Resultado: ${resultado}`);
      return resultado;
    });

    // 5. MONTAR ARRAY FINAL
    const imoveisOrdenados = [];
    
    // Adiciona o imóvel principal primeiro (se existir)
    if (imovelPrincipal) {
      const valorPrincipal = extrairValorNumerico(imovelPrincipal);
      console.log(`DESTAQUE: [${imovelPrincipal.Codigo}] R$ ${valorPrincipal.toLocaleString('pt-BR')} (primeira posição)`);
      imoveisOrdenados.push({ 
        ...imovelPrincipal, 
        ehDestaque: true // Marca como destaque para estilo visual
      });
    }
    
    // Adiciona os demais ordenados
    demaisOrdenados.forEach((imovel, index) => {
      const valor = extrairValorNumerico(imovel);
      const textoValor = valor > 0 ? `R$ ${valor.toLocaleString('pt-BR')}` : 'Consultar';
      console.log(`${index + 2}º [${imovel.Codigo}] ${textoValor}`);
      imoveisOrdenados.push(imovel);
    });

    // SE NÃO ENCONTROU PRINCIPAL, MARCA O PRIMEIRO COMO DESTAQUE
    if (!imovelPrincipal && imoveisOrdenados.length > 0) {
      console.log('Não encontrou imóvel principal, marcando o primeiro como destaque');
      imoveisOrdenados[0] = { ...imoveisOrdenados[0], ehDestaque: true };
    }

    // 6. LOG FINAL DA ORDENAÇÃO
    console.log('ORDENAÇÃO FINALIZADA:');
    console.log('═══════════════════════');
    imoveisOrdenados.forEach((imovel, index) => {
      const valor = extrairValorNumerico(imovel);
      const textoValor = valor > 0 ? `R$ ${valor.toLocaleString('pt-BR')}` : 'Consultar Disponibilidade';
      const destaque = imovel.ehDestaque ? ' DESTAQUE' : '';
      console.log(`${index + 1}. [Código: ${imovel.Codigo}] ${textoValor}${destaque}`);
    });
    console.log('═══════════════════════');

    // Aplicar processamento de metragem antes de retornar
    return processarDadosImoveis(imoveisOrdenados);

  } catch (error) {
    console.error('ERRO CRÍTICO NA ORDENAÇÃO:', error);
    console.error('Stack:', error.stack);
    // Em caso de erro, retorna o array original processado
    return processarDadosImoveis(imoveisRelacionados);
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  
  console.log(`[METADATA] Processing slug: "${slug}"`);
  
  if (slug.match(/^imovel-(\d+)$/)) {
    return {
      title: "Redirecionando...",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  
  // CRITICAL FIX: Handle content routes (guia, blog, artigo, etc.) with proper indexing
  // These routes may not be condominios but should still be indexed if they exist
  // Check if slug contains content route prefixes (with or without slash)
  // Use multiple checks to ensure we catch all variations
  const isContentRoute = slug.match(/^(guia|blog|artigo|noticia|conteudo|pagina)(\/|$)/i) ||
                         slug.includes('guia/') || slug.includes('blog/') || 
                         slug.includes('artigo/') || slug.includes('noticia/') ||
                         slug.includes('conteudo/') || slug.includes('pagina/') ||
                         slug.startsWith('guia') || slug.startsWith('blog') ||
                         slug.startsWith('artigo') || slug.startsWith('noticia') ||
                         slug.startsWith('conteudo') || slug.startsWith('pagina');
  if (isContentRoute) {
    // For content routes, generate proper metadata with index: true
    // This prevents GSC "Crawled – currently not indexed" issues
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.npiconsultoria.com.br';
    const currentUrl = `${siteUrl}/${slug}`;
    const titleFromSlug = slug
      .split('/')
      .pop()
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    console.log(`[METADATA] Content route detected: ${slug} → Generating index:true metadata`);
    
    return {
      title: `${titleFromSlug} - NPi Consultoria`,
      description: `Guia sobre ${titleFromSlug.toLowerCase()} em condomínios de luxo. NPi Consultoria - Especialistas em imóveis de alto padrão.`,
      metadataBase: new URL(siteUrl),
      robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
      alternates: {
        canonical: currentUrl,
        languages: {
          "pt-BR": currentUrl,
        },
      },
      openGraph: {
        title: `${titleFromSlug} - NPi Consultoria`,
        description: `Guia sobre ${titleFromSlug.toLowerCase()} em condomínios de luxo.`,
        url: currentUrl,
        type: "article",
        siteName: "NPI Consultoria",
        publishedTime: new Date().toISOString(),
        modifiedTime: new Date().toISOString(),
      },
      twitter: {
        card: "summary_large_image",
        title: `${titleFromSlug} - NPi Consultoria`,
        description: `Guia sobre ${titleFromSlug.toLowerCase()} em condomínios de luxo.`,
      },
    };
  }
  
  const response = await getCondominioPorSlug(slug);
  
  // FIXED: Actually redirect instead of just returning metadata
  // Handle both status === 301 and statusCode === 301 (defensive programming)
  if ((response?.status === 301 || response?.statusCode === 301) && response?.redirect) {
    console.log(`[METADATA] Redirect 301 detectado: /${slug} → ${response.redirect}`);
    // Use permanentRedirect for 308 instead of redirect (which returns 307)
    const { permanentRedirect } = await import('next/navigation');
    permanentRedirect(response.redirect);
  }
  
  const condominio = response?.data;

  // CRITICAL FIX: If no condominio found, check again if it's a content route
  // This handles cases where the slug might not have matched the pattern initially
  if (!condominio) {
    // Double-check if it's a content route (in case pattern didn't match before)
    const isContentRouteRetry = slug.includes('guia/') || slug.includes('blog/') || 
                                slug.includes('artigo/') || slug.includes('noticia/') ||
                                slug.includes('conteudo/') || slug.includes('pagina/') ||
                                slug.startsWith('guia') || slug.startsWith('blog') ||
                                slug.startsWith('artigo') || slug.startsWith('noticia') ||
                                slug.startsWith('conteudo') || slug.startsWith('pagina');
    
    if (isContentRouteRetry) {
      console.log(`[METADATA] Content route detected on retry: ${slug} → Generating index:true metadata`);
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.npiconsultoria.com.br';
      const currentUrl = `${siteUrl}/${slug}`;
      const titleFromSlug = slug
        .split('/')
        .pop()
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return {
        title: `${titleFromSlug} - NPi Consultoria`,
        description: `Guia sobre ${titleFromSlug.toLowerCase()} em condomínios de luxo. NPi Consultoria - Especialistas em imóveis de alto padrão.`,
        metadataBase: new URL(siteUrl),
        robots: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
        alternates: {
          canonical: currentUrl,
          languages: {
            "pt-BR": currentUrl,
          },
        },
        openGraph: {
          title: `${titleFromSlug} - NPi Consultoria`,
          description: `Guia sobre ${titleFromSlug.toLowerCase()} em condomínios de luxo.`,
          url: currentUrl,
          type: "article",
          siteName: "NPI Consultoria",
          publishedTime: new Date().toISOString(),
          modifiedTime: new Date().toISOString(),
        },
        twitter: {
          card: "summary_large_image",
          title: `${titleFromSlug} - NPi Consultoria`,
          description: `Guia sobre ${titleFromSlug.toLowerCase()} em condomínios de luxo.`,
        },
      };
    }
    
    // Only return noindex if it's truly not a content route
    console.log(`[METADATA] No condominio found and not a content route: ${slug} → Returning noindex`);
    return {
      title: "Condomínio não encontrado",
      description: "A página do condomínio que você procura não foi encontrada.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const rawTitle = ensureCondominio(condominio.Empreendimento);
  
  const fotosOrdenadas = processarFotosCondominio(condominio.Foto, condominio.Codigo);
  
  const destaqueFotoObj = fotosOrdenadas?.find((f) => f.Destaque === "Sim");
  const primeiraFoto = Array.isArray(fotosOrdenadas) && fotosOrdenadas.length > 0 ? fotosOrdenadas[0] : null;
  
  // FIXED: Ensure consistent base URL for canonical
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.npiconsultoria.com.br';
  
  const destaqueFotoUrl = destaqueFotoObj?.Foto || 
                         destaqueFotoObj?.FotoPequena || 
                         primeiraFoto?.Foto || 
                         primeiraFoto?.FotoPequena ||
                         `${siteUrl}/og-image.png`;
  
  // FIXED: Ensure full URL for canonical consistency
  const currentUrl = `${siteUrl}/${slug}`;
  
  // FIXED: Use actual database dates without manipulation
  // Google prefers accurate dates over artificially "fresh" dates
  // Only use current date as fallback if no database date exists
  let modifiedDate = new Date().toISOString();
  if (condominio.DataHoraAtualizacao || condominio.DataAtualizacao) {
    try {
      const dataField = condominio.DataHoraAtualizacao || condominio.DataAtualizacao;
      const dataObj = new Date(dataField);
      if (!isNaN(dataObj.getTime())) {
        // Use actual database date - don't manipulate it
        // Google's algorithm handles stale content appropriately
        modifiedDate = dataObj.toISOString();
      }
    } catch (error) {
      // Use current date as fallback only if date parsing fails
      console.log(`[METADATA] Error parsing date, using current date as fallback`);
    }
  }

  const videoId = condominio?.Video ? Object.values(condominio.Video)[0]?.Video : null;

  // FIXED: Ensure complete description with all required fields
  const cidade = condominio.Cidade || '';
  const bairro = condominio.BairroComercial || '';
  const categoria = condominio.Categoria || '';
  const metragem = condominio.MetragemAnt || condominio.AreaUtil || condominio.Metragem || '';
  const quartos = condominio.DormitoriosAntigo || 0;
  const vagas = condominio.VagasAntigo || 0;
  const situacao = condominio.Situacao || '';
  
  const description = `${rawTitle} em ${bairro}${cidade ? ', ' + cidade : ''}. ${categoria}${metragem ? ' com ' + metragem + ' m²' : ''}, ${quartos} quartos, ${vagas} vagas. ${situacao}.`.trim();

  return {
    title: `${rawTitle}, ${condominio.TipoEndereco} ${condominio.Endereco} ${condominio.Numero}, ${condominio.BairroComercial}`,
    description,
    metadataBase: new URL(siteUrl),
    robots: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        "pt-BR": currentUrl,
      },
    },
    openGraph: {
      title: rawTitle,
      description,
      url: currentUrl,
      type: "website",
      siteName: "NPI Consultoria",
      publishedTime: modifiedDate,
      modifiedTime: modifiedDate,
      images: [
        {
          url: destaqueFotoUrl,
          width: 1200,
          height: 630,
          alt: rawTitle,
          type: "image/jpeg",
        }
      ],
      ...(videoId && {
        videos: [{
          url: `https://www.youtube.com/embed/${videoId}`,
          secureUrl: `https://www.youtube.com/embed/${videoId}`,
          type: 'text/html',
          width: 1280,
          height: 720,
        }],
      }),
      updated_time: modifiedDate,
    },
    twitter: {
      card: videoId ? "player" : "summary_large_image",
      title: rawTitle,
      description,
      site: "@NPIImoveis",
      creator: "@NPIImoveis",
      images: [
        {
          url: destaqueFotoUrl,
          alt: rawTitle,
        }
      ],
      ...(videoId && {
        players: [{
          playerUrl: `https://www.youtube.com/embed/${videoId}`,
          streamUrl: `https://www.youtube.com/watch?v=${videoId}`,
          width: 1280,
          height: 720,
        }],
      }),
    },
    other: {
      'article:published_time': modifiedDate,
      'article:modified_time': modifiedDate,
      'article:author': 'NPI Consultoria',
      'article:section': 'Imobiliário',
      'article:tag': `${condominio.Categoria}, ${condominio.BairroComercial}, ${condominio.Cidade}, condomínio`,
      'og:updated_time': modifiedDate,
      'last-modified': modifiedDate,
      'date': modifiedDate,
      'DC.date.modified': modifiedDate,
      'DC.date.created': modifiedDate,
      ...(videoId && {
        'og:video': `https://www.youtube.com/embed/${videoId}`,
        'og:video:url': `https://www.youtube.com/embed/${videoId}`,
        'og:video:secure_url': `https://www.youtube.com/embed/${videoId}`,
        'og:video:type': 'text/html',
        'og:video:width': '1280',
        'og:video:height': '720',
        'twitter:player': `https://www.youtube.com/embed/${videoId}`,
        'twitter:player:width': '1280',
        'twitter:player:height': '720',
      }),
    },
  };
}

export default async function CondominioPage({ params }) {
  // FIXED: Wrap entire page in try-catch to prevent 5xx errors
  try {
    const { slug } = params;
    
    // FIXED: Validate slug format to prevent invalid access
    const invalidKeywords = ['facebook.com', 'instagram.com', 'linkedin.com', 'twitter.com', 'youtube.com', '.swf', '.php', 'iframe', 'http://', 'https://'];
    const hasInvalidKeyword = invalidKeywords.some(keyword => slug.toLowerCase().includes(keyword));
    
    if (hasInvalidKeyword) {
      console.log(`[CONDOMINIO-PAGE] Slug inválido detectado: ${slug} → 404`);
      notFound();
    }
    
    // CRITICAL FIX: Handle content routes (guia, blog, artigo, etc.) differently
    // These routes may not be condominios but should still render if they exist
    const isContentRoute = slug.match(/^(guia|blog|artigo|noticia|conteudo|pagina)\//i);
    if (isContentRoute) {
      // For content routes, allow the page to render even if not found as condominio
      // The page will render with proper metadata (already set in generateMetadata)
      // This prevents 404 for valid content pages that aren't condominios
      console.log(`[CONDOMINIO-PAGE] Rota de conteúdo detectada: ${slug} → Permitindo renderização`);
      // Return a minimal page structure for content routes
      // The actual content should be handled by the page's client-side rendering or a separate content API
      return (
        <div className="container mx-auto pt-20 px-4">
          <article className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">
              {slug.split('/').pop().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h1>
            <div className="prose prose-lg max-w-none">
              <p>Conteúdo em desenvolvimento.</p>
            </div>
          </article>
        </div>
      );
    }
    
    const response = await getCondominioPorSlug(slug);

  // FIXED: Check for redirect FIRST before checking data (defensive programming)
  // Handle both status === 301 and statusCode === 301
  if ((response?.status === 301 || response?.statusCode === 301) && response?.redirect) {
    console.log(`[CONDOMINIO-PAGE] Redirect 301: /${slug} → ${response.redirect}`);
    // Use permanentRedirect for 308 instead of redirect (which returns 307)
    const { permanentRedirect } = await import('next/navigation');
    permanentRedirect(response.redirect);
  }

  if (!response.data) {
    notFound();
  }

  const condominio = response.data;
  const imoveisRelacionados = response.imoveisRelacionados;
  
  // FIXED: Check if condominium has minimum required data (prevent soft 404)
  if (!condominio.Empreendimento || !condominio.Cidade) {
    console.log(`[CONDOMINIO-PAGE] Condomínio sem dados essenciais: ${slug} → 404`);
    notFound();
  }
  
  // FIXED: Check for absolutely minimal content (soft 404 prevention)
  const fotosOrdenadas = processarFotosCondominio(condominio.Foto, condominio.Codigo);
  const hasFotos = fotosOrdenadas && fotosOrdenadas.length > 0;
  const hasDescricao = condominio.DescricaoUnidades || condominio.DescricaoDiferenciais || condominio.DestaquesDiferenciais;
  const hasMetragem = condominio.MetragemAnt || condominio.AreaUtil || condominio.Metragem;
  
  if (!hasFotos && !hasDescricao && !hasMetragem) {
    console.log(`[CONDOMINIO-PAGE] Condomínio com conteúdo muito limitado (soft 404): ${slug} → 404`);
    notFound();
  }

  const orientacaoFoto = detectarOrientacaoFoto(fotosOrdenadas);
  console.log('ORIENTAÇÃO DA FOTO DETECTADA:', orientacaoFoto);

  const imoveisOrdenados = ordenarImoveisRelacionados(imoveisRelacionados, condominio.Codigo);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.npiconsultoria.com.br';
  const rawTitle = ensureCondominio(condominio.Empreendimento);
  const currentUrl = `${siteUrl}/${slug}`;
  
  // CRITICAL FIX: Get actual data modification date and ensure it's recent
  // This prevents stale content signals that prevent indexing
  let modifiedDate = new Date().toISOString();
  if (condominio.DataHoraAtualizacao || condominio.DataAtualizacao) {
    try {
      const dataField = condominio.DataHoraAtualizacao || condominio.DataAtualizacao;
      const dataObj = new Date(dataField);
      if (!isNaN(dataObj.getTime())) {
        // FIXED: Use actual database date - don't manipulate it
        // Google's algorithm handles stale content appropriately
        modifiedDate = dataObj.toISOString();
      }
    } catch (error) {
      console.log(`[CONDOMINIO-PAGE] Erro ao processar data, usando data atual`);
    }
  }

  const videoId = condominio?.Video ? Object.values(condominio.Video)[0]?.Video : null;

  const primeiraImagemUrl = fotosOrdenadas?.[0]?.Foto || fotosOrdenadas?.[0]?.FotoPequena;
  
  // CRITICAL FIX: Generate RealEstateListing structured data server-side
  // Client-side structured data (useEffect) may not be seen by Googlebot
  // This ensures Googlebot always sees the structured data during crawl
  const descriptionText = `${condominio.Categoria} à venda em ${condominio.BairroComercial}, ${condominio.Cidade}. ${rawTitle}: ${condominio.DormitoriosAntigo} quartos, ${condominio.SuiteAntigo} suítes, ${condominio.BanheiroSocialQtd} banheiros, ${condominio.VagasAntigo} vagas, ${condominio.MetragemAnt} m2. ${condominio.Situacao}. Valor: ${condominio.ValorAntigo ? `R$ ${condominio.ValorAntigo}` : "Consulte"}. ${condominio.TipoEndereco} ${condominio.Endereco}.`;
  const addressText = `${condominio.TipoEndereco} ${condominio.Endereco} ${condominio.Numero}, ${condominio.BairroComercial}, ${condominio.Cidade}`;
  
  // CRITICAL FIX: Handle price properly - avoid "0" which signals invalid content
  let priceValue = null;
  let priceSpecification = null;
  if (condominio.ValorAntigo) {
    const priceStr = condominio.ValorAntigo.toString();
    const cleanedPrice = priceStr.replace(/[^\d,]/g, '').replace(',', '.');
    const numericPrice = parseFloat(cleanedPrice);
    if (!isNaN(numericPrice) && numericPrice > 0) {
      priceValue = numericPrice;
      priceSpecification = {
        "@type": "UnitPriceSpecification",
        "price": numericPrice,
        "priceCurrency": "BRL",
        "valueAddedTaxIncluded": true
      };
    }
  }
  
  // Enhanced RealEstateListing structured data with all required fields
  const realEstateStructuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "@id": `${currentUrl}#realestate`,
    "name": rawTitle,
    "description": descriptionText,
    "url": currentUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": addressText,
      "addressLocality": condominio.Cidade || "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR",
      "postalCode": condominio.CEP || null
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "NPI Consultoria",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/assets/images/logo-npi.png`
        }
      },
      "validFrom": modifiedDate,
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
    },
    "image": Array.isArray(fotosOrdenadas) && fotosOrdenadas.length > 0 
      ? fotosOrdenadas.slice(0, 10).map((item, index) => {
          const imageUrl = item.Foto || item.FotoPequena;
          if (!imageUrl) return null;
          return {
            "@type": "ImageObject",
            "position": index + 1,
            "url": imageUrl,
            "contentUrl": imageUrl
          };
        }).filter(Boolean)
      : [],
    "numberOfRooms": condominio.DormitoriosAntigo || 0,
    "numberOfBathroomsTotal": condominio.BanheiroSocialQtd || 0,
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": condominio.MetragemAnt || 0,
      "unitCode": "MTK"
    },
    "datePosted": modifiedDate,
    "category": condominio.Categoria || "Residential"
  };
  
  // Add price only if valid
  if (priceValue && priceValue > 0) {
    realEstateStructuredData.offers.price = priceValue;
    if (priceSpecification) {
      realEstateStructuredData.offers.priceSpecification = priceSpecification;
    }
  } else {
    // If no price, indicate "price on request" instead of 0
    realEstateStructuredData.offers.price = null;
    realEstateStructuredData.offers.priceSpecification = {
      "@type": "UnitPriceSpecification",
      "priceCurrency": "BRL",
      "valueAddedTaxIncluded": true
    };
  }
  
  // Add optional fields if available
  if (condominio.AnoConstrucao) {
    realEstateStructuredData.yearBuilt = condominio.AnoConstrucao;
  }
  
  if (condominio.Latitude && condominio.Longitude) {
    realEstateStructuredData.geo = {
      "@type": "GeoCoordinates",
      "latitude": parseFloat(condominio.Latitude),
      "longitude": parseFloat(condominio.Longitude)
    };
  }
  
  // Remove null postalCode if missing
  if (!realEstateStructuredData.address.postalCode) {
    delete realEstateStructuredData.address.postalCode;
  }
  
  // Add property type based on category
  if (condominio.Categoria) {
    const propertyTypeMap = {
      "Apartamento": "Apartment",
      "Casa": "House",
      "Cobertura": "Apartment",
      "Terreno": "Land",
      "Sala Comercial": "CommercialProperty",
      "Loja": "CommercialProperty"
    };
    const propertyType = propertyTypeMap[condominio.Categoria] || "Residence";
    realEstateStructuredData["@type"] = ["RealEstateListing", propertyType];
  }

  // CRITICAL FIX: Enhanced WebPage structured data with proper linking
  const structuredDataDates = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${currentUrl}#webpage`,
    url: currentUrl,
    name: `${rawTitle}, ${condominio.TipoEndereco} ${condominio.Endereco}`,
    description: descriptionText,
    datePublished: modifiedDate,
    dateModified: modifiedDate,
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      "name": "NPI Consultoria",
      "url": siteUrl
    },
    author: {
      "@type": "Organization",
      name: "NPI Consultoria",
      url: siteUrl
    },
    publisher: {
      "@type": "Organization",
      name: "NPI Consultoria",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/assets/images/logo-npi.png`
      }
    },
    mainEntity: {
      "@id": `${currentUrl}#realestate`
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: condominio.Categoria || "Imóveis",
          item: `${siteUrl}/busca?categoria=${encodeURIComponent(condominio.Categoria || '')}`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: rawTitle,
          item: currentUrl
        }
      ]
    }
  };

  let videoStructuredData = null;
  if (videoId) {
    videoStructuredData = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": `Vídeo de apresentação - ${condominio.Empreendimento}`,
      "description": `Conheça o ${condominio.Empreendimento} em ${condominio.BairroComercial}, ${condominio.Cidade}. ${condominio.Categoria} com ${condominio.DormitoriosAntigo} quartos, ${condominio.MetragemAnt} m2, ${condominio.VagasAntigo} vagas.`,
      "thumbnailUrl": `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      "uploadDate": modifiedDate,
      "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
      "embedUrl": `https://www.youtube.com/embed/${videoId}`,
      "publisher": {
        "@type": "Organization",
        "name": "NPI Consultoria",
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/logo.png`
        }
      },
      "potentialAction": {
        "@type": "WatchAction",
        "target": `https://www.youtube.com/watch?v=${videoId}`
      }
    };
  }

  return (
    <>
      {primeiraImagemUrl && (
        <link
          rel="preload"
          as="image"
          href={primeiraImagemUrl}
          fetchPriority="high"
        />
      )}

      <section className="w-full bg-zinc-100 pb-10">
        {/* CRITICAL FIX: Server-side structured data for RealEstateListing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(realEstateStructuredData),
          }}
        />
        
        {/* Client-side structured data (fallback for browsers) */}
        <StructuredDataApartment
          title={rawTitle}
          price={condominio.ValorAntigo ? `R$ ${condominio.ValorAntigo}` : "Consulte"}
          description={descriptionText}
          address={addressText}
          url={currentUrl}
          image={fotosOrdenadas}
        />

        {videoStructuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(videoStructuredData),
            }}
          />
        )}

        {/* Enhanced WebPage structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredDataDates),
          }}
        />

        <ExitIntentModal condominio={rawTitle} link={currentUrl} />

        <div className="container mx-auto pt-20">
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="flex flex-col gap-4 ">
              <div className="px-10 py-6 bg-white min-h-[350px] xl:min-h-[280px] rounded-lg flex flex-col">
                <div className="flex justify-between">
                  <span className="text-[10px]">Código:{condominio.Codigo}</span>
                  <Share
                    url={currentUrl}
                    title={`Compartilhe o imóvel ${rawTitle} em ${condominio.BairroComercial}`}
                    variant="secondary"
                  />
                </div>

                <h1 className="text-xl font-bold mt-2">{rawTitle}</h1>
                <span className="text-xs text-zinc-700 font-semibold">
                  {condominio.TipoEndereco} {condominio.Endereco} {condominio.Numero}, {condominio.BairroComercial}, {condominio.Cidade}
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-4">
                  {isValidValue(condominio.ValorAluguelSite) && (
                    <div className="flex flex-col rounded-lg bg-zinc-100 p-4">
                      <h2 className="text-zinc-600 text-[10px] font-bold">Aluguel:</h2>
                      <h2 className="text-black font-semibold text-[10px]">R$ {condominio.ValorAluguelSite}</h2>
                    </div>
                  )}

                  {isValidValue(condominio.ValorAntigo) && (
                    <div className="flex flex-col rounded-lg bg-zinc-100 p-4">
                      <h2 className="text-zinc-600 text-[10px] font-bold">Preço:</h2>
                      <h2 className="text-black font-semibold text-[10px]">R$ {condominio.ValorAntigo}</h2>
                    </div>
                  )}

                  {condominio.ValorCondominio && (
                    <div className="flex flex-col rounded-lg bg-zinc-100 p-4">
                      <h4 className="text-zinc-600 text-[10px] font-bold">Condomínio:</h4>
                      <h2 className="text-black font-semibold text-[10px]">{formatterValue(condominio.ValorCondominio)}</h2>
                    </div>
                  )}
                  {condominio.ValorIptu && (
                    <div className="flex flex-col rounded-lg bg-zinc-100 p-4">
                      <h4 className="text-zinc-600 text-[10px] font-bold">IPTU:</h4>
                      <h2 className="text-black font-semibold text-[10px]">{formatterValue(condominio.ValorIptu)}</h2>
                    </div>
                  )}
                </div>
                
                <div className="mt-auto pt-4">
                  <ScrollToImoveisButton text={`Mostrar imóveis (${imoveisOrdenados.length})`} />
                </div>
              </div>
              
              <div className="relative w-full h-[230px] overflow-y-auto bg-white rounded-lg overflow-hidden p-4">
                {isValidValue(condominio.ValorVenda2) || isValidValue(condominio.ValorGarden) || isValidValue(condominio.ValorCobertura) ? (
                  <PropertyTableOwner imovel={condominio} />
                ) : (
                  <PropertyTable imoveisRelacionados={imoveisOrdenados} />
                )}
              </div>
            </div>
            <div className={`relative w-full overflow-hidden rounded-lg ${
              orientacaoFoto === 'vertical' 
                ? 'h-[550px]'
                : 'min-h-[550px]'
            }`}>
              <ImageGallery 
                fotos={fotosOrdenadas}
                title={rawTitle}
                shareUrl={currentUrl}
                shareTitle={`Compartilhe o imóvel ${rawTitle} em ${condominio.BairroComercial}`}
                layout="single"
                priority={true}
                fetchPriority="high"
                className={orientacaoFoto === 'vertical' ? 'h-full w-full object-cover object-center' : ''}
              />
            </div>
          </div>
        </div>

        {/* CORREÇÃO: Passando codigoPrincipal como prop para o componente */}
        {imoveisOrdenados && imoveisOrdenados.length > 0 && (
          <div id="imoveis-relacionados">
            <ImoveisRelacionados 
              imoveisRelacionados={imoveisOrdenados}
              codigoPrincipal={condominio.Codigo}
            />
          </div>
        )}
        
        <SobreCondominio condominio={condominio} />

        {condominio.FichaTecnica && <FichaTecnica condominio={condominio} />}
        {condominio.DestaquesDiferenciais && <DetalhesCondominio imovel={condominio} />}
        {condominio.DestaquesLazer && <Lazer condominio={condominio} />}
        {condominio.Video && Object.keys(condominio.Video).length > 0 && (
        <VideoCondominio imovel={condominio} />
        )}
        {condominio.Tour360 && (
          <TourVirtual link={condominio.Tour360} titulo={rawTitle} />
        )}

        <ExploreRegiao condominio={condominio} currentUrl={currentUrl} />
        <WhatsappFloat
          message={`Quero saber mais sobre o ${rawTitle}, no bairro ${condominio.BairroComercial}, disponível na página de Condomínio: ${currentUrl}`}
        />
      </section>
    </>
  );
  } catch (error) {
    // FIXED: Catch any unhandled errors to prevent 5xx
    console.error('Erro na página do condomínio:', error);
    notFound();
  }
}
