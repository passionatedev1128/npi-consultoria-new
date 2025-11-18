import { useState, useEffect, useRef, useCallback } from "react";
import { formatterSlug } from "@/app/utils/formatter-slug";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { REQUIRED_FIELDS } from "../FieldGroup";
import useImovelStore from "@/app/admin/store/imovelStore";
import { getCorretorById } from "@/app/admin/services/corretor";
import { generateUniqueCode } from "@/app/utils/idgenerate";

// Implementação alternativa do debounce
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const generateRandomCode = async () => {
  return generateUniqueCode();
};

const MAX_MONETARY_VALUE = 999999999;

const INITIAL_FORM_DATA = {
  Codigo: "",
  CodigoOriginal: "",
  Empreendimento: "",
  TituloSite: "",
  Categoria: "Apartamento",
  Situacao: "PRONTO NOVO",
  Status: "VENDA",
  Slug: "",
  Destacado: "Não",
  Condominio: "Não",
  CondominioDestaque: "Não",
  Ativo: "Sim",
  Construtora: "",
  Endereco: "",
  TipoEndereco: "",
  Numero: "",
  Complemento: "",
  Bairro: "",
  BairroComercial: "",
  Cidade: "",
  UF: "",
  CEP: "",
  Latitude: "",
  Longitude: "",
  Regiao: "",
  AreaPrivativa: "",
  AreaTotal: "",
  Dormitorios: "",
  Suites: "",
  BanheiroSocialQtd: "",
  Vagas: "",
  DataEntrega: "",
  AnoConstrucao: "",
  ValorAntigo: "0",
  ValorAluguelSite: "0",
  ValorCondominio: "0",
  ValorIptu: "0",
  DescricaoUnidades: "",
  DescricaoDiferenciais: "",
  DestaquesDiferenciais: "",
  DestaquesLazer: "",
  DestaquesLocalizacao: "",
  FichaTecnica: "",
  Tour360: "",
  IdCorretor: "",
  Corretor: "",
  EmailCorretor: "",
  CelularCorretor: "",
  Imobiliaria: "",
  Video: null,
  Foto: [],
  DataHoraAtualizacao: "",
  isLoadingCEP: false,
  isLoadingCorretor: false,
  cepError: null,
  corretorError: null
};

export const useImovelForm = () => {
  const provider = useRef(new OpenStreetMapProvider());
  const fileInputRef = useRef(null);

  const imovelSelecionado = useImovelStore((state) => state.imovelSelecionado);
  const isAutomacao = imovelSelecionado?.Automacao === true;

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [displayValues, setDisplayValues] = useState({
    ValorAntigo: "R$ 0",
    ValorAluguelSite: "R$ 0",
    ValorCondominio: "R$ 0",
    ValorIptu: "R$ 0",
  });

  const [newImovelCode, setNewImovelCode] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const [validation, setValidation] = useState({
    isFormValid: false,
    photoCount: 0,
    requiredPhotoCount: 5,
    fieldValidation: {},
  });

  // Formatar data ISO para exibição
  const formatDateForDisplay = useCallback((dateValue) => {
    if (!dateValue) return "";
    
    try {
      // Se já está no formato dd/mm/yyyy, retorna como está
      if (typeof dateValue === 'string' && /^\d{2}\/\d{2}\/\d{4}/.test(dateValue)) {
        return dateValue;
      }
      
      // Converte ISO string para formato brasileiro
      const date = new Date(dateValue);
      if (isNaN(date.getTime())) {
        console.warn('Data inválida:', dateValue);
        return dateValue || ""; 
      }
      
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      
      const formatted = `${day}/${month}/${year}`;
      console.log('FORMATAÇÃO DE DATA:', {
        entrada: dateValue,
        saida: formatted
      });
      
      return formatted;
    } catch (error) {
      console.error('Erro ao formatar data:', error);
      return dateValue || "";
    }
  }, []);

  // FUNÇÃO UTILITÁRIA: Verificar se vídeo está vazio/removido
  const isVideoEmpty = useCallback((videoValue) => {
    // Verificações robustas para detectar vídeo vazio
    if (videoValue === null || videoValue === undefined) return true;
    if (videoValue === "" || videoValue === false) return true;
    
    // Se é objeto
    if (typeof videoValue === 'object') {
      // Objeto vazio
      if (Object.keys(videoValue).length === 0) return true;
      
      // Verificar se todas as propriedades relevantes estão vazias
      const hasValidContent = Object.values(videoValue).some(val => {
        if (typeof val === 'object' && val !== null) {
          return val.Video || val.url || val.videoId;
        }
        return val && val !== "";
      });
      
      return !hasValidContent;
    }
    
    return false;
  }, []);

  // Funções de formatação monetária SEM decimais
  const formatCurrency = useCallback((value) => {
    const num = typeof value === 'string' 
      ? parseInt(value.replace(/\D/g, ''), 10) 
      : Math.floor(Number(value || 0));

    return isNaN(num) 
      ? "R$ 0" 
      : num.toLocaleString("pt-BR", { 
          style: "currency", 
          currency: "BRL",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        });
  }, []);

  const parseCurrency = useCallback((value) => {
    const digitsOnly = (value?.toString() || "").replace(/\D/g, '');
    const intValue = parseInt(digitsOnly || "0", 10);
    const safeValue = Math.min(Math.max(intValue, 0), MAX_MONETARY_VALUE);
    
    return isNaN(safeValue) ? "0" : safeValue.toString();
  }, []);

  const formatCurrencyInput = useCallback((value) => {
    const digitsOnly = (value?.toString() || "").replace(/\D/g, '');
    const intValue = parseInt(digitsOnly || "0", 10);
    
    return intValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }, []);

  // FUNÇÃO UTILITÁRIA: Separar endereço completo em tipo + nome
  const separarEndereco = useCallback((enderecoCompleto) => {
    if (!enderecoCompleto || typeof enderecoCompleto !== 'string') {
      return { TipoEndereco: '', Endereco: '' };
    }

    const prefixosValidos = [
      'rua', 'avenida', 'alameda', 'travessa', 'praça', 'largo', 'rodovia',
      'estrada', 'via', 'quadra', 'setor', 'conjunto', 'vila', 'jardim',
      'parque', 'residencial', 'condomínio', 'loteamento'
    ];

    const enderecoLower = enderecoCompleto.toLowerCase().trim();
    
    for (const prefixo of prefixosValidos) {
      if (enderecoLower.startsWith(prefixo + ' ')) {
        return {
          TipoEndereco: prefixo.charAt(0).toUpperCase() + prefixo.slice(1),
          Endereco: enderecoCompleto.substring(prefixo.length + 1).trim()
        };
      }
    }

    // Se não encontrou prefixo, assume como Rua
    return {
      TipoEndereco: 'Rua',
      Endereco: enderecoCompleto.trim()
    };
  }, []);

  // FUNÇÃO UTILITÁRIA: Juntar tipo + nome em endereço completo
  const juntarEndereco = useCallback((tipoEndereco, endereco) => {
    if (!tipoEndereco && !endereco) return '';
    if (!tipoEndereco) return endereco || '';
    if (!endereco) return tipoEndereco || '';
    return `${tipoEndereco.trim()} ${endereco.trim()}`.trim();
  }, []);

  // FUNÇÃO UTILITÁRIA: Preparar dados para envio ao backend
  const prepararDadosParaEnvio = useCallback((dados) => {
    const dadosParaEnvio = { ...dados };
    
    // Separar Endereco completo em TipoEndereco + Endereco para o backend
    if (dadosParaEnvio.Endereco && typeof dadosParaEnvio.Endereco === 'string') {
      const { TipoEndereco, Endereco } = separarEndereco(dadosParaEnvio.Endereco);
      dadosParaEnvio.TipoEndereco = TipoEndereco;
      dadosParaEnvio.Endereco = Endereco;
      
      console.log('PREPARANDO DADOS PARA BACKEND:');
      console.log('Endereco original (frontend):', dados.Endereco);
      console.log('TipoEndereco (backend):', TipoEndereco);
      console.log('Endereco (backend):', Endereco);
    }
    
    // GARANTIR QUE VÍDEO VAZIO SEJA ENVIADO COMO NULL
    if (isVideoEmpty(dadosParaEnvio.Video)) {
      dadosParaEnvio.Video = null;
      console.log('BACKEND: Video vazio convertido para null');
    }
    
    return dadosParaEnvio;
  }, [separarEndereco, isVideoEmpty]);

  // FUNÇÃO UTILITÁRIA: Processar dados recebidos do backend
  const processarDadosRecebidos = useCallback((dados) => {
    if (!dados) return dados;
    
    const dadosProcessados = { ...dados };
    
    // Juntar TipoEndereco + Endereco em campo único para o frontend
    if (dados.TipoEndereco || dados.Endereco) {
      const enderecoCompleto = juntarEndereco(dados.TipoEndereco, dados.Endereco);
      dadosProcessados.Endereco = enderecoCompleto;
      
      console.log('PROCESSANDO DADOS DO BACKEND:');
      console.log('TipoEndereco (backend):', dados.TipoEndereco);
      console.log('Endereco (backend):', dados.Endereco);
      console.log('Endereco completo (frontend):', enderecoCompleto);
    }
    
    // PRESERVAR FOTOS EXATAMENTE COMO VIERAM DO BACKEND
    if (dados.Foto && Array.isArray(dados.Foto)) {
      dadosProcessados.Foto = [...dados.Foto]; // Cópia exata sem modificação
      console.log('FOTOS PRESERVADAS:', dadosProcessados.Foto.length, 'fotos mantidas intactas');
    }
    
    // PROCESSAR VÍDEO DO BACKEND
    if (isVideoEmpty(dados.Video)) {
      dadosProcessados.Video = null;
    }

    const dataAtualizacao = 
      dados.DataHoraAtualizacao ||
      dados.DataAtualizacao || 
      dados.dataHoraAtualizacao || 
      dados.dataAtualizacao ||
      dados.updatedAt ||
      dados.updated_at ||
      '';
    
    if (dataAtualizacao) {
      const dataFormatada = formatDateForDisplay(dataAtualizacao);
      dadosProcessados.DataHoraAtualizacao = dataFormatada;
      console.log('DATA PRESERVADA E FORMATADA DO BANCO:', {
        valorOriginal: dados.DataHoraAtualizacao,
        dataProcessada: dataAtualizacao,
        dataFormatada: dataFormatada
      });
    } else {
      dadosProcessados.DataHoraAtualizacao = '';
      console.warn('NENHUMA DATA ENCONTRADA NO BANCO');
    }
    
    return dadosProcessados;
  }, [juntarEndereco, isVideoEmpty, formatDateForDisplay]);

  // FUNÇÃO CORRIGIDA: Detectar e corrigir endereços (SEM salvamento automático por ora)
  const corrigirEnderecoIncompleto = useCallback(async (endereco, cep) => {
    if (!endereco || !cep) return false;
    
    // Lista de prefixos válidos de logradouro
    const prefixosValidos = [
      'rua', 'avenida', 'alameda', 'travessa', 'praça', 'largo', 'rodovia',
      'estrada', 'via', 'quadra', 'setor', 'conjunto', 'vila', 'jardim',
      'parque', 'residencial', 'condomínio', 'loteamento'
    ];
    
    // Verificar se o endereço já tem um prefixo válido
    const enderecoLower = endereco.toLowerCase().trim();
    const temPrefixo = prefixosValidos.some(prefixo => 
      enderecoLower.startsWith(prefixo + ' ')
    );
    
    // Se já tem prefixo, não precisa corrigir
    if (temPrefixo) {
      console.log('CORREÇÃO CEP: Endereço já está completo:', endereco);
      return false;
    }
    
    // Se não tem prefixo, consultar ViaCEP para corrigir
    console.log('MIGRAÇÃO: Endereço incompleto detectado:', endereco, '- CEP:', cep);
    
    const cleanCep = cep.replace(/\D/g, "");
    if (cleanCep.length !== 8) return false;
    
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      if (!response.ok) return false;
      
      const data = await response.json();
      if (data.erro || !data.logradouro) return false;
      
      // Verificar se o endereço da API é diferente e mais completo
      if (data.logradouro && data.logradouro.toLowerCase() !== enderecoLower) {
        console.log('MIGRAÇÃO - ANTES:', endereco);
        console.log('MIGRAÇÃO - DEPOIS:', data.logradouro);
        console.log('INSTRUÇÃO: Clique em ATUALIZAR IMÓVEL para salvar a correção');
        
        // Buscar coordenadas para o endereço corrigido
        let coords = null;
        try {
          const query = `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}`;
          const results = await provider.current.search({ query });
          coords = results[0] ? { 
            latitude: results[0].y?.toString() || "", 
            longitude: results[0].x?.toString() || "" 
          } : null;
        } catch (error) {
          console.error("Erro ao buscar coordenadas:", error);
        }
        
        // Atualizar formData local apenas
        setFormData(prev => ({
          ...prev,
          Endereco: data.logradouro,
          Bairro: data.bairro || prev.Bairro,
          Cidade: data.localidade || prev.Cidade,
          UF: data.uf || prev.UF,
          Latitude: coords?.latitude || prev.Latitude,
          Longitude: coords?.longitude || prev.Longitude,
        }));
        
        return true; // Indica que foi corrigido
      }
    } catch (error) {
      console.error('Erro ao corrigir endereço da migração:', error);
    }
    
    return false;
  }, []);

  // Inicialização do formulário
  useEffect(() => {
    const initializeForm = async () => {
      try {
        // Caso 1: Imóvel de automação (sempre gerar novo código)
        if (isAutomacao) {
          const newCode = await generateRandomCode();
          setNewImovelCode(newCode);
          setFormData(prev => ({
            ...prev,
            ...imovelSelecionado,
            Codigo: newCode,
            CodigoOriginal: ''
          }));
          return;
        }

        // Caso 2: Edição de imóvel existente (manter código original)
        if (imovelSelecionado?.Codigo && !isAutomacao) {
          console.log('DADOS BRUTOS DO IMOVEL SELECIONADO:', {
            codigo: imovelSelecionado.Codigo,
            DataHoraAtualizacao: imovelSelecionado.DataHoraAtualizacao,
            DataAtualizacao: imovelSelecionado.DataAtualizacao,
            updatedAt: imovelSelecionado.updatedAt,
            todasAsChaves: Object.keys(imovelSelecionado)
          });
          
          let dataParaExibir = '';
          
          const possiveisData = [
            imovelSelecionado.DataHoraAtualizacao,
            imovelSelecionado.DataAtualizacao,
            imovelSelecionado.dataHoraAtualizacao,
            imovelSelecionado.dataAtualizacao,
            imovelSelecionado.updatedAt,
            imovelSelecionado.updated_at
          ];
          
          for (const data of possiveisData) {
            if (data) {
              dataParaExibir = formatDateForDisplay(data);
              console.log('DATA ENCONTRADA E FORMATADA:', {
                original: data,
                formatada: dataParaExibir
              });
              break;
            }
          }
          
          const dadosProcessados = processarDadosRecebidos(imovelSelecionado);
          
          if (dataParaExibir) {
            dadosProcessados.DataHoraAtualizacao = dataParaExibir;
          }
          
          console.log('DADOS PROCESSADOS COM DATA:', {
            DataHoraAtualizacao: dadosProcessados.DataHoraAtualizacao,
            temData: !!dadosProcessados.DataHoraAtualizacao
          });
          
          const novoFormData = {
            ...dadosProcessados,
            CodigoOriginal: imovelSelecionado.Codigo,
            DataHoraAtualizacao: dataParaExibir || dadosProcessados.DataHoraAtualizacao || ''
          };
          
          console.log('SETANDO FORMDATA FINAL:', {
            Codigo: novoFormData.Codigo,
            DataHoraAtualizacao: novoFormData.DataHoraAtualizacao,
            temDataFinal: !!novoFormData.DataHoraAtualizacao
          });
          
          setFormData(prev => ({
            ...prev,
            ...dadosProcessados,
            CodigoOriginal: imovelSelecionado.Codigo
          }));
          
          setDisplayValues({
            ValorAntigo: formatCurrencyInput(imovelSelecionado.ValorAntigo?.toString() || "0"),
            ValorAluguelSite: formatCurrencyInput(imovelSelecionado.ValorAluguelSite?.toString() || "0"),
            ValorCondominio: formatCurrencyInput(imovelSelecionado.ValorCondominio?.toString() || "0"),
            ValorIptu: formatCurrencyInput(imovelSelecionado.ValorIptu?.toString() || "0")
          });
          
          // CORREÇÃO AUTOMÁTICA DA MIGRAÇÃO (apenas frontend por ora)
          if (imovelSelecionado.Endereco && imovelSelecionado.CEP) {
            setTimeout(() => {
              console.log('MIGRAÇÃO: Verificando se endereço precisa de correção...');
              corrigirEnderecoIncompleto(imovelSelecionado.Endereco, imovelSelecionado.CEP);
            }, 2000); // Aguardar 2s para garantir que formData esteja totalmente inicializado
          }
          
          return;
        }

        // Caso 3: Novo imóvel (gerar novo código)
        if (!imovelSelecionado) {
          const newCode = await generateRandomCode();
          setNewImovelCode(newCode);
          setFormData(prev => ({
            ...prev,
            Codigo: newCode,
            CodigoOriginal: newCode,
            DataHoraAtualizacao: ''
          }));
        }
      } catch (error) {
        console.error("Erro ao inicializar formulário:", error);
      }
    };

    initializeForm();
  }, [isAutomacao, imovelSelecionado?.Codigo, formatCurrencyInput, processarDadosRecebidos, formatDateForDisplay, corrigirEnderecoIncompleto]);

  useEffect(() => {
    if (!formData.Codigo) return;
    
    const timer = setTimeout(() => {
      localStorage.setItem('imovelFormDraft', JSON.stringify(formData));
    }, 500);
    
    return () => clearTimeout(timer);
  }, [formData]);

  // Funções auxiliares
  const maskDate = useCallback((value) => {
    if (!value) return "";
    return value
      .replace(/\D/g, "")
      .slice(0, 8)
      .replace(/^(\d{2})(\d)/, "$1/$2")
      .replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
  }, []);

  const debouncedFetchCoordinates = useCallback(
    debounce(async (address) => {
      if (!address) return null;
      
      try {
        const query = `${address.logradouro}, ${address.bairro}, ${address.localidade}, ${address.uf}`;
        const results = await provider.current.search({ query });
        return results[0] ? { 
          latitude: results[0].y?.toString() || "", 
          longitude: results[0].x?.toString() || "" 
        } : null;
      } catch (error) {
        console.error("Erro ao buscar coordenadas:", error);
        return null;
      }
    }, 500),
    []
  );

  // CORREÇÃO CIRÚRGICA - fetchAddress
  const fetchAddress = useCallback(async (cep) => {
    const cleanCep = (cep || "").replace(/\D/g, "");
    if (cleanCep.length !== 8) return;

    setFormData(prev => ({ ...prev, isLoadingCEP: true, cepError: null }));

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      if (!response.ok) throw new Error("Erro na resposta da API");
      
      const data = await response.json();
      if (data.erro) {
        setFormData(prev => ({ 
          ...prev, 
          cepError: "CEP não encontrado",
          isLoadingCEP: false 
        }));
        return;
      }

      const coords = await debouncedFetchCoordinates(data);
      
      // CORREÇÃO CRÍTICA: Sempre separar o logradouro do ViaCEP
      const enderecoCompleto = data.logradouro || '';
      const prefixosValidos = [
        'rua', 'avenida', 'alameda', 'travessa', 'praça', 'largo', 'rodovia',
        'estrada', 'via', 'quadra', 'setor', 'conjunto', 'vila', 'jardim',
        'parque', 'residencial', 'condomínio', 'loteamento'
      ];
      
      let tipoEndereco = 'Rua'; // PADRÃO se não detectar
      let endereco = enderecoCompleto;
      
      if (enderecoCompleto) {
        const enderecoLower = enderecoCompleto.toLowerCase().trim();
        
        // Tenta detectar prefixo
        for (const prefixo of prefixosValidos) {
          if (enderecoLower.startsWith(prefixo + ' ')) {
            tipoEndereco = prefixo.charAt(0).toUpperCase() + prefixo.slice(1);
            endereco = enderecoCompleto.substring(prefixo.length + 1).trim();
            break;
          }
        }
      }
      
      console.log('CEP PROCESSADO:', {
        cep: cleanCep,
        logradouro_viacep: data.logradouro,
        tipoEndereco_detectado: tipoEndereco,
        endereco_final: endereco
      });
      
      // SEMPRE FORÇA OS NOVOS VALORES (SEM FALLBACK)
      setFormData(prev => ({
        ...prev,
        TipoEndereco: tipoEndereco,
        Endereco: endereco,
        Bairro: data.bairro || '',
        Cidade: data.localidade || '',
        UF: data.uf || '',
        Latitude: coords?.latitude || '',
        Longitude: coords?.longitude || '',
        isLoadingCEP: false,
        cepError: null
      }));
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
      setFormData(prev => ({ 
        ...prev, 
        cepError: "Falha ao consultar CEP",
        isLoadingCEP: false 
      }));
    }
  }, [debouncedFetchCoordinates]);

  // handleChange COM ATUALIZAÇÃO CORRETA DE DATA
  const handleChange = useCallback((fieldOrEvent, valueOrUndefined) => {
    console.log('useImovelForm.handleChange chamado:', { fieldOrEvent, valueOrUndefined });
    
    // DETECTAR se é chamada direta (field, value) ou evento (e.target)
    let name, value;
    
    if (typeof fieldOrEvent === 'string' && valueOrUndefined !== undefined) {
      // CHAMADA DIRETA: onChange("Video", videoData)
      name = fieldOrEvent;
      value = valueOrUndefined;
      console.log('Chamada direta detectada:', { name, value });
    } else if (fieldOrEvent?.target) {
      // EVENTO: onChange(e) onde e.target.name e e.target.value
      name = fieldOrEvent.target.name;
      value = fieldOrEvent.target.value;
      console.log('Evento detectado:', { name, value });
    } else {
      console.error('handleChange: formato inválido:', { fieldOrEvent, valueOrUndefined });
      return;
    }

    // PROCESSAMENTO ESPECÍFICO PARA VIDEO COM LÓGICA ULTRA-ROBUSTA
    if (name === "Video") {
      console.log('PROCESSANDO VIDEO no useImovelForm:');
      console.log('Field:', name);
      console.log('Value recebido:', value);
      console.log('Tipo do value:', typeof value);
      
      // LÓGICA ULTRA-ROBUSTA: Determinar se vídeo deve ser null
      let processedValue = value;
      
      if (isVideoEmpty(value)) {
        processedValue = null;
        console.log('Video sendo REMOVIDO - setando como null (detectado por isVideoEmpty)');
      } else {
        console.log('Video sendo MANTIDO - valor válido detectado');
      }
      
      setFormData(prev => {
        const updated = { ...prev, Video: processedValue };
        console.log('FormData ANTES da atualização:', prev.Video);
        console.log('FormData DEPOIS da atualização:', updated.Video);
        return updated;
      });
      console.log('Video atualizado com sucesso!');
      return;
    }

    // Tratamento específico para campos numéricos
    const numericFields = ['Dormitorios', 'Suites', 'Vagas', 'BanheiroSocialQtd'];
    if (numericFields.includes(name)) {
      const numericValue = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
      return;
    }

    // Handler específico para campos numéricos (Dormitórios, Suítes, Vagas)
    const handleNumericField = (fieldName, fieldValue) => {
      const numericValue = fieldValue.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [fieldName]: numericValue }));
    };

    if (name === 'ValorAntigo') {
      const numericValue = parseCurrency(value);
      
      setFormData(prev => {
        const valorAnterior = prev.ValorAntigo;
        
        if (valorAnterior !== numericValue && numericValue !== "0") {
          const dataAtual = new Date().toISOString();
          const dataFormatada = formatDateForDisplay(dataAtual);
          
          console.log('ATUALIZANDO DATA AUTOMÁTICA:', {
            valorAnterior,
            valorNovo: numericValue,
            novaData: dataAtual,
            dataFormatada: dataFormatada,
            dataAnterior: prev.DataHoraAtualizacao
          });
          
          return {
            ...prev,
            ValorAntigo: numericValue,
            DataHoraAtualizacao: dataFormatada
          };
        }
        
        console.log('VALOR NÃO MUDOU - Mantendo data antiga:', {
          valorAnterior,
          valorAtual: numericValue,
          dataAtual: prev.DataHoraAtualizacao
        });
        
        return {
          ...prev,
          ValorAntigo: numericValue
        };
      });
      
      setDisplayValues(prev => ({ 
        ...prev, 
        ValorAntigo: formatCurrencyInput(value) 
      }));
      return;
    }

    // Handlers para campos monetários
    const handleMonetaryField = (fieldName, fieldValue) => {
      const numericValue = parseCurrency(fieldValue);
      setFormData(prev => ({ ...prev, [fieldName]: numericValue }));
      setDisplayValues(prev => ({ 
        ...prev, 
        [fieldName]: formatCurrencyInput(fieldValue) 
      }));
    };

    // Campos monetários
    const monetaryFields = ['ValorAntigo', 'ValorAluguelSite', 'ValorCondominio', 'ValorIptu'];

    // Verifica se é um campo monetário
    if (monetaryFields.includes(name)) {
      handleMonetaryField(name, value);
      return; // Sai da função após processar
    }

    // Handlers especiais
    const specialHandlers = {
      DataEntrega: () => setFormData(prev => ({ ...prev, [name]: maskDate(value) })),
      CEP: () => {
        const formattedCEP = value.replace(/\D/g, "").slice(0, 8);
        setFormData(prev => ({ ...prev, [name]: formattedCEP }));
        if (formattedCEP.length === 8) {
          fetchAddress(formattedCEP);
        }
      },
      Empreendimento: () => {
        setFormData(prev => ({ 
          ...prev, 
          [name]: value, 
          Slug: formatterSlug(value) || prev.Slug 
        }));
      },
      IdCorretor: () => {
        setFormData(prev => ({
          ...prev,
          [name]: value,
          Corretor: "",
          EmailCorretor: "",
          CelularCorretor: "",
          Imobiliaria: "",
          isLoadingCorretor: true,
          corretorError: null
        }));

        if (value?.trim()) {
          getCorretorById(value.trim())
            .then(corretor => {
              if (corretor) {
                setFormData(prev => ({
                  ...prev,
                  Corretor: corretor.Nome || "",
                  EmailCorretor: corretor.Email || "",
                  CelularCorretor: corretor.Celular || "",
                  Imobiliaria: corretor.Imobiliaria || "",
                  isLoadingCorretor: false
                }));
              }
            })
            .catch(error => {
              console.error("Erro ao buscar corretor:", error);
              setFormData(prev => ({
                ...prev,
                corretorError: "Corretor não encontrado",
                isLoadingCorretor: false
              }));
            });
        }
      }
    };

    // Verifica se é um campo especial
    if (specialHandlers[name]) {
      specialHandlers[name]();
      return; // Sai da função após processar
    }

    // Caso padrão para todos os outros campos
    setFormData(prev => ({ ...prev, [name]: value }));
  }, [maskDate, fetchAddress, parseCurrency, formatCurrencyInput, isVideoEmpty, formatDateForDisplay]);

  // Funções de manipulação de imagens
  const addImage = useCallback(() => setShowImageModal(true), []);
  
  const addSingleImage = useCallback((url) => {
    if (!url?.trim()) return;

    const cleanUrl = (() => {
      try {
        const parsed = new URL(url);
        if (parsed.pathname.startsWith("/_next/image")) {
          const innerUrl = parsed.searchParams.get("url");
          return decodeURIComponent(innerUrl || url);
        }
        return url;
      } catch {
        return url;
      }
    })();

    setFormData(prev => ({
      ...prev,
      Foto: [
        ...(Array.isArray(prev.Foto) ? prev.Foto : []),
        {
          Codigo: `img-${Date.now()}`,
          Foto: cleanUrl.trim(),
          Destaque: "Nao",
          Ordem: (Array.isArray(prev.Foto) ? prev.Foto.length + 1 : 1)
        }
      ]
    }));
  }, []);

  const updateImage = useCallback((codigo, newUrl) => {
    if (!codigo || !newUrl?.trim()) return;
    
    setFormData(prev => ({
      ...prev,
      Foto: Array.isArray(prev.Foto) 
        ? prev.Foto.map(img => 
            img.Codigo === codigo ? { ...img, Foto: newUrl.trim() } : img
          )
        : []
    }));
  }, []);

  const removeImage = useCallback((codigo) => {
    if (!codigo) return;
    
    setFormData(prev => ({
      ...prev,
      Foto: Array.isArray(prev.Foto)
        ? prev.Foto
            .filter(img => img.Codigo !== codigo)
            .map((img, i) => ({ ...img, Ordem: i + 1 }))
        : []
    }));
  }, []);

  const removeAllImages = useCallback(() => {
    if (typeof window === 'undefined') return;
    if (!confirm("Tem certeza que deseja remover TODAS as imagens?")) return;
    if (!confirm("Esta ação é irreversível! Confirmar remoção total?")) return;
    
    setFormData(prev => ({ ...prev, Foto: [] }));
  }, []);

  const setImageAsHighlight = useCallback((codigo) => {
    console.group('setImageAsHighlight');
    console.log('Código recebido:', codigo);
    
    if (!codigo) {
      console.error('Código vazio');
      console.groupEnd();
      return;
    }
    
    setFormData(prev => {
      console.log('Fotos antes:', prev.Foto?.length || 0);
      console.log('Fotos atuais:', prev.Foto?.map(f => ({ 
        codigo: f.Codigo, 
        destaque: f.Destaque 
      })));
      
      const novasFotos = Array.isArray(prev.Foto)
        ? prev.Foto.map(img => ({
            ...img,
            Destaque: img.Codigo === codigo ? "Sim" : "Nao"
          }))
        : [];
      
      console.log('Fotos depois:', novasFotos.length);
      console.log('Fotos atualizadas:', novasFotos.map(f => ({ 
        codigo: f.Codigo, 
        destaque: f.Destaque 
      })));
      console.groupEnd();
      
      return {
        ...prev,
        Foto: novasFotos
      };
    });
  }, []);

  // FUNÇÃO CORRIGIDA - changeImagePosition
  const changeImagePosition = useCallback((indexOrCode, newPosition) => {
    console.group('changeImagePosition');
    console.log('Parâmetros recebidos:', { 
      indexOrCode, 
      tipo: typeof indexOrCode,
      newPosition, 
      tipoNewPosition: typeof newPosition 
    });
    
    setFormData(prev => {
      // Validação 1: Verificar se há fotos
      if (!prev.Foto || !Array.isArray(prev.Foto) || prev.Foto.length === 0) {
        console.error('Sem fotos para reordenar');
        console.groupEnd();
        return prev;
      }
      
      console.log('Total de fotos:', prev.Foto.length);
      console.log('Fotos atuais:', prev.Foto.map((f, i) => ({ 
        indice: i, 
        codigo: f.Codigo, 
        ordem: f.Ordem 
      })));
      
      // Validação 2: Converter e validar nova posição
      let targetPosition;
      
      if (typeof newPosition === 'number') {
        targetPosition = newPosition;
      } else if (typeof newPosition === 'string') {
        targetPosition = parseInt(newPosition, 10);
      } else {
        console.error('Tipo de newPosition inválido:', typeof newPosition);
        console.groupEnd();
        return prev;
      }
      
      if (isNaN(targetPosition) || targetPosition < 1) {
        console.error('Nova posição inválida:', newPosition, '→', targetPosition);
        console.groupEnd();
        return prev;
      }
      
      // Converter posição (1-based) para índice (0-based)
      const targetIndex = targetPosition - 1;
      
      // Validação 3: Determinar índice atual
      let currentIndex;
      
      // Caso 1: Recebeu um índice direto (number)
      if (typeof indexOrCode === 'number') {
        currentIndex = indexOrCode;
        console.log('Índice numérico recebido:', currentIndex);
      } 
      // Caso 2: Recebeu string numérica (pode ser índice ou código)
      else if (typeof indexOrCode === 'string') {
        // Tenta converter para número
        const asNumber = parseInt(indexOrCode, 10);
        
        // Se conversão funciona E está dentro do range de índices válidos
        if (!isNaN(asNumber) && asNumber >= 0 && asNumber < prev.Foto.length) {
          currentIndex = asNumber;
          console.log('String convertida para índice:', indexOrCode, '→', currentIndex);
        } 
        // Senão, trata como código da foto
        else {
          currentIndex = prev.Foto.findIndex(f => f.Codigo === indexOrCode);
          if (currentIndex === -1) {
            console.error('Foto não encontrada com código:', indexOrCode);
            console.groupEnd();
            return prev;
          }
          console.log('Código encontrado:', indexOrCode, 'no índice', currentIndex);
        }
      } 
      // Caso 3: Tipo inválido
      else {
        console.error('Tipo de indexOrCode inválido:', typeof indexOrCode);
        console.groupEnd();
        return prev;
      }
      
      // Validação 4: Verificar limites
      if (currentIndex < 0 || currentIndex >= prev.Foto.length) {
        console.error('Índice atual fora dos limites:', currentIndex, 'max:', prev.Foto.length - 1);
        console.groupEnd();
        return prev;
      }
      
      if (targetIndex < 0 || targetIndex >= prev.Foto.length) {
        console.error('Índice de destino fora dos limites:', targetIndex, 'max:', prev.Foto.length - 1);
        console.groupEnd();
        return prev;
      }
      
      // Validação 5: Verificar se já está na posição
      if (currentIndex === targetIndex) {
        console.log(' Foto já está na posição desejada');
        console.groupEnd();
        return prev;
      }
      
      // Executar reordenação
      console.log(`Movendo foto: índice ${currentIndex} (pos ${currentIndex + 1}) → índice ${targetIndex} (pos ${targetPosition})`);
      
      const novasFotos = [...prev.Foto];
      const [fotoMovida] = novasFotos.splice(currentIndex, 1);
      novasFotos.splice(targetIndex, 0, fotoMovida);
      
      // CRÍTICO: Recalcular Ordem E garantir que apenas a primeira tenha Destaque="Sim"
      const fotosAtualizadas = novasFotos.map((foto, idx) => ({
        ...foto,
        Ordem: idx + 1,
        Destaque: idx === 0 ? "Sim" : "Nao"
      }));
      
      console.log('Reordenação concluída');
      console.log('Resultado:', fotosAtualizadas.map((f, i) => ({ 
        indice: i, 
        codigo: f.Codigo, 
        ordem: f.Ordem,
        destaque: f.Destaque 
      })));
      console.groupEnd();
      
      return {
        ...prev,
        Foto: fotosAtualizadas
      };
    });
  }, []);

  const handleImagesUploaded = useCallback((images = []) => {
    if (!Array.isArray(images)) return;
    
    setFormData(prev => {
      const current = Array.isArray(prev.Foto) ? prev.Foto : [];
      return {
        ...prev,
        Foto: [
          ...current,
          ...images
            .filter(img => img?.Foto || img?.url)
            .map((img, idx) => ({
              Codigo: `img-upload-${Date.now()}-${idx}`,
              Foto: img.Foto || img.url,
              Destaque: "Nao",
              Ordem: current.length + idx + 1
            }))
        ]
      };
    });
  }, []);

  // Validação do formulário
  useEffect(() => {
    const fieldValidation = {};
    let isValid = true;

    REQUIRED_FIELDS.forEach((field) => {
      if (!INITIAL_FORM_DATA.hasOwnProperty(field)) {
        console.warn(`Campo obrigatório não encontrado: ${field}`);
        return;
      }
      
      const value = formData[field];
      const valid = (typeof value === 'string' && value.trim() !== '') || 
                    (typeof value === 'number' && !isNaN(value)) || 
                    (Array.isArray(value) && value.length > 0);
      
      fieldValidation[field] = valid;
      if (!valid) isValid = false;
    });

    const photoCount = Array.isArray(formData.Foto) ? formData.Foto.length : 0;
    const hasEnoughPhotos = photoCount >= validation.requiredPhotoCount;

    setValidation(prev => ({
      ...prev,
      isFormValid: isValid && hasEnoughPhotos,
      photoCount,
      fieldValidation,
    }));
  }, [formData, validation.requiredPhotoCount]);

  // Reset do formulário
  const resetForm = useCallback((keepCode = false) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('imovelFormDraft');
    }
    
    setFormData(prev => ({
      ...INITIAL_FORM_DATA,
      Codigo: keepCode ? prev.Codigo : "",
      Video: null,
    }));
    
    setDisplayValues({
      ValorAntigo: "R$ 0",
      ValorAluguelSite: "R$ 0",
      ValorCondominio: "R$ 0",
      ValorIptu: "R$ 0",
    });
    
    if (!keepCode) {
      generateRandomCode().then(code => {
        setNewImovelCode(code);
        setFormData(prev => ({ ...prev, Codigo: code, Video: null }));
      });
    }
  }, []);

  return {
    formData,
    setFormData,
    displayValues,
    setDisplayValues,
    handleChange,
    newImovelCode,
    fileInputRef,
    showImageModal,
    setShowImageModal,
    addImage,
    addSingleImage,
    updateImage,
    removeImage,
    removeAllImages,
    setImageAsHighlight,
    changeImagePosition,
    validation,
    handleImagesUploaded,
    resetForm,
    formatCurrency,
    parseCurrency,
    formatCurrencyInput,
    corrigirEnderecoIncompleto,
    prepararDadosParaEnvio,
    processarDadosRecebidos,
    isVideoEmpty
  };
};

export default useImovelForm;
