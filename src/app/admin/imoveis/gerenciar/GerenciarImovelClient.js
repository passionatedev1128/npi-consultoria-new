"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthCheck from "../../components/auth-check";
import ImageUploadModal from "./../../components/add-modal";
import Modal from "../../components/modal";
import FormHeader from "./@components/FormHeader";
import FormFooter from "./@components/FormFooter";
import BasicInfoSection from "./@components/sections/BasicInfoSection";
import LocationSection from "./@components/sections/LocationSection";
import FeaturesSection from "./@components/sections/FeaturesSection";
import ValuesSection from "./@components/sections/ValuesSection";
import BrokerSection from "./@components/sections/BrokerSection";
import DescriptionSection from "./@components/sections/DescriptionSection";
import MediaSection from "./@components/sections/MediaSection";
import ImagesSection from "./@components/sections/ImagesSection";
import useImovelForm from "./@components/hooks/useImovelForm";
import useImovelSubmit from "./@components/hooks/useImovelSubmit";
import useImageUpload from "./@components/hooks/useImageUpload";
import useImovelStore from "../../store/imovelStore";
import { formatterSlug } from "@/app/utils/formatter-slug";
import { formatarParaReal } from "@/app/utils/formatter-real";
import ProprietariosSection from "./@components/sections/ProprietariosSection";
import VincularImovelSection from "./@components/sections/VincularImovel";
import { desativarImovel } from "@/app/services";
import { useSyncCorretor } from "./@components/hooks/useSyncCorretor";

/**
 * Normaliza CEP removendo hífen e espaços para garantir consistência
 */
const normalizeCEP = (cep) => {
  if (!cep || typeof cep !== 'string') return '';
  return cep.replace(/\D/g, ''); // Remove tudo que não for dígito
};

export default function GerenciarImovelClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showProprietarios, setShowProprietarios] = useState(false);
  const [showVincularImovel, setShowVincularImovel] = useState(false);
  const [isDesativando, setIsDesativando] = useState(false);
  const [downloadingPhotos, setDownloadingPhotos] = useState(false);
  const router = useRouter();

  const imovelSelecionado = useImovelStore((state) => state.imovelSelecionado);
  const mode = useImovelStore((state) => state.mode);
  const limparImovelSelecionado = useImovelStore((state) => state.limparImovelSelecionado);
  const isAutomacao = imovelSelecionado?.Automacao === true;

  const {
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
    changeImagePosition: originalChangeImagePosition,
    validation,
    handleImagesUploaded,
  } = useImovelForm();

  const { handleSubmit, isSaving, error, success, setError, setSuccess } = useImovelSubmit(
    formData,
    setIsModalOpen,
    mode,
    imovelSelecionado?._id
  );

  // 🎯 NOVO: Hook de sincronização automática
  const { 
    syncCorretor, 
    isSyncing, 
    syncError, 
    syncSuccess,
    resetCorretorAnterior 
  } = useSyncCorretor(formData, mode);

  // Função para definir imagem como destaque - CORRIGIDA
  const handleSetImageAsHighlight = (codigo) => {
    try {
      console.log('Definindo destaque para:', codigo);
      
      if (!formData.Foto || !Array.isArray(formData.Foto)) {
        console.error('Nenhuma foto disponível');
        return;
      }

      // Atualizar fotos: apenas UMA pode ter destaque "Sim"
      const updatedPhotos = formData.Foto.map(photo => ({
        ...photo,
        Destaque: photo.Codigo === codigo ? "Sim" : "Nao"
      }));

      // Atualizar estado
      setFormData(prev => ({
        ...prev,
        Foto: updatedPhotos
      }));

      // Se a função original existir, chamar também (para persistência)
      if (typeof setImageAsHighlight === 'function') {
        setImageAsHighlight(codigo);
      }

      setSuccess('Foto destaque atualizada');
      setTimeout(() => setSuccess(''), 2000);
      
      console.log('Destaque atualizado com sucesso');
    } catch (error) {
      console.error('Erro ao definir destaque:', error);
      setError('Erro ao definir foto destaque');
      setTimeout(() => setError(''), 2000);
    }
  };

  // Função personalizada para mudar posição das imagens
  const handleChangeImagePosition = (codigo, targetPosition) => {
    try {
      console.log('Mudando posição:', { codigo, targetPosition });
      
      if (!formData.Foto || !Array.isArray(formData.Foto) || formData.Foto.length === 0) {
        console.error('Nenhuma foto disponível');
        return;
      }

      // Se targetPosition for um número direto (vindo do select do ImagesSection)
      if (typeof targetPosition === 'number' || !isNaN(parseInt(targetPosition))) {
        const newPosition = parseInt(targetPosition) - 1; // Converter para índice 0-based
        const currentIndex = formData.Foto.findIndex(img => img.Codigo === codigo);
        
        if (currentIndex === -1) {
          console.error('Imagem não encontrada');
          return;
        }

        if (newPosition < 0 || newPosition >= formData.Foto.length) {
          console.error('Posição inválida');
          return;
        }

        if (currentIndex === newPosition) {
          console.log('Já está na posição desejada');
          return;
        }

        // Criar cópia do array
        const newPhotos = [...formData.Foto];
        
        // Remover a foto da posição atual
        const [movedPhoto] = newPhotos.splice(currentIndex, 1);
        
        // Inserir na nova posição
        newPhotos.splice(newPosition, 0, movedPhoto);
        
        // Atualizar ordem de todas as fotos
        const reorderedPhotos = newPhotos.map((photo, idx) => ({
          ...photo,
          Ordem: idx + 1
        }));

        // Atualizar estado
        setFormData(prev => ({
          ...prev,
          Foto: reorderedPhotos
        }));

        setSuccess('Posição atualizada com sucesso');
        setTimeout(() => setSuccess(''), 2000);
      }
      // Se for uma direção (up/down) - compatibilidade com outros componentes
      else if (targetPosition === 'up' || targetPosition === 'down') {
        const currentIndex = formData.Foto.findIndex(img => img.Codigo === codigo);
        
        if (currentIndex === -1) {
          console.error('Imagem não encontrada');
          return;
        }

        let newIndex;
        if (targetPosition === 'up') {
          newIndex = currentIndex - 1;
          if (newIndex < 0) return;
        } else {
          newIndex = currentIndex + 1;
          if (newIndex >= formData.Foto.length) return;
        }

        const newPhotos = [...formData.Foto];
        const temp = newPhotos[currentIndex];
        newPhotos[currentIndex] = newPhotos[newIndex];
        newPhotos[newIndex] = temp;

        const reorderedPhotos = newPhotos.map((photo, idx) => ({
          ...photo,
          Ordem: idx + 1
        }));

        setFormData(prev => ({
          ...prev,
          Foto: reorderedPhotos
        }));

        setSuccess('Posição atualizada');
        setTimeout(() => setSuccess(''), 2000);
      }
    } catch (error) {
      console.error('Erro ao mudar posição:', error);
      setError('Erro ao reordenar imagem');
      setTimeout(() => setError(''), 3000);
    }
  };

  // Função para atualizar fotos (chamada pelo ImagesSection)
  const handleUpdatePhotos = (updatedPhotos) => {
    console.log('Atualizando fotos:', updatedPhotos.length);
    setFormData(prev => ({
      ...prev,
      Foto: updatedPhotos
    }));
  };

  const downloadAllPhotos = async () => {
    if (!formData.Foto || formData.Foto.length === 0) {
      setError('Não há fotos para baixar');
      return;
    }

    setDownloadingPhotos(true);
    setError('');
    
    try {
      const downloadPromises = formData.Foto.map((photo, index) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const link = document.createElement('a');
            link.href = photo.Foto;
            link.download = `imovel-${formData.Codigo || 'novo'}-foto-${index + 1}.jpg`;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            resolve();
          }, index * 100);
        });
      });

      await Promise.all(downloadPromises);
      setSuccess(`Download de ${formData.Foto.length} fotos iniciado`);
    } catch (err) {
      console.error('Erro ao baixar fotos:', err);
      setError('Erro durante o download das fotos');
    } finally {
      setDownloadingPhotos(false);
    }
  };

  useEffect(() => {
    if (imovelSelecionado && mode === "edit") {
      const formatMonetaryDisplayValues = () => {
        const displayObj = {};
        ["ValorAntigo", "ValorAluguelSite", "ValorCondominio", "ValorIptu"].forEach((field) => {
          if (imovelSelecionado[field]) {
            const value = typeof imovelSelecionado[field] === "string"
              ? imovelSelecionado[field].replace(/\D/g, "")
              : imovelSelecionado[field];
            displayObj[field] = formatarParaReal(value);
          }
        });
        return displayObj;
      };

      // FUNÇÃO CORRIGIDA - processPhotos
      const processPhotos = () => {
        if (!imovelSelecionado.Foto) return [];
        
        let photos = [];
        
        if (Array.isArray(imovelSelecionado.Foto)) {
          photos = imovelSelecionado.Foto.map((foto, index) => {
            // PRESERVAR Ordem se existir (incluindo 0), senão usar index + 1
            let ordem = undefined;
            if (typeof foto.Ordem === 'number') {
              ordem = foto.Ordem;
            } else if (typeof foto.ordem === 'number') {
              ordem = foto.ordem;
            } else if (typeof foto.ORDEM === 'number') {
              ordem = foto.ORDEM;
            } else {
              ordem = index + 1;
            }
            
            return {
              Foto: foto.Foto || foto.url || foto,
              Codigo: foto.Codigo || `photo-${Date.now()}-${index}`,
              Destaque: foto.Destaque || "Nao",
              Ordem: ordem
            };
          });
        }
        else if (typeof imovelSelecionado.Foto === "object") {
          photos = Object.entries(imovelSelecionado.Foto).map(([key, foto], index) => {
            // PRESERVAR Ordem se existir (incluindo 0), senão usar index + 1
            let ordem = undefined;
            if (typeof foto.Ordem === 'number') {
              ordem = foto.Ordem;
            } else if (typeof foto.ordem === 'number') {
              ordem = foto.ordem;
            } else if (typeof foto.ORDEM === 'number') {
              ordem = foto.ORDEM;
            } else {
              ordem = index + 1;
            }
            
            return {
              Foto: foto.Foto || foto.url || foto,
              Codigo: foto.Codigo || key || `photo-${Date.now()}-${index}`,
              Destaque: foto.Destaque || "Nao",
              Ordem: ordem
            };
          });
        }
        
        // CRITICAL FIX: Featured photo MUST always be first, regardless of Ordem
        // 1. Extract featured photo FIRST (before any sorting)
        const fotoDestaque = photos.find(foto => foto.Destaque === "Sim");
        const outrasFotos = photos.filter(foto => foto.Destaque !== "Sim");
        
        // 2. Sort remaining photos by Ordem (featured photo is already extracted)
        const outrasFotosSorted = outrasFotos.sort((a, b) => {
          const ordemA = typeof a.Ordem === 'number' ? a.Ordem : parseInt(a.Ordem) || 999;
          const ordemB = typeof b.Ordem === 'number' ? b.Ordem : parseInt(b.Ordem) || 999;
          return ordemA - ordemB;
        });
        
        // 3. ALWAYS put featured photo first, then sorted remaining photos
        const photosProcessed = [
          ...(fotoDestaque ? [{
            ...fotoDestaque,
            Ordem: 0, // Featured photo always has Ordem 0
            Destaque: "Sim"
          }] : []),
          ...outrasFotosSorted.map((foto) => ({
            ...foto,
            Destaque: "Nao" // Ensure only featured photo has Destaque="Sim"
          }))
        ];
        
        // 4. If NO photo had destaque, force the first one
        if (!fotoDestaque && photosProcessed.length > 0) {
          photosProcessed[0] = {
            ...photosProcessed[0],
            Destaque: "Sim",
            Ordem: 0
          };
        }
        
        console.log('FOTOS PROCESSADAS DO BACKEND:', {
          total: photosProcessed.length,
          destaque: photosProcessed.find(f => f.Destaque === "Sim")?.Codigo || 'NENHUMA',
          ordens: photosProcessed.map(f => f.Ordem),
          primeiraFoto: photosProcessed[0]?.Codigo
        });
        
        return photosProcessed;
      };

      const processVideos = () => {
        if (!imovelSelecionado.Video) {
          return {};
        }
        
        try {
          if (typeof imovelSelecionado.Video === 'object' && !Array.isArray(imovelSelecionado.Video)) {
            const cleanVideos = {};
            Object.entries(imovelSelecionado.Video).forEach(([key, value]) => {
              if (value && value.Video && typeof value.Video === 'string' && value.Video.trim() !== '') {
                const cleanUrl = value.Video.trim().replace(/[\n\r\t]/g, '');
                if (cleanUrl.length > 0 && cleanUrl.length < 2000) {
                  cleanVideos[key] = { Video: cleanUrl };
                }
              }
            });
            return cleanVideos;
          }
          
          if (Array.isArray(imovelSelecionado.Video)) {
            const videosObj = {};
            imovelSelecionado.Video.forEach((video, index) => {
              if (video && video.Video && typeof video.Video === 'string' && video.Video.trim() !== '') {
                const cleanUrl = video.Video.trim().replace(/[\n\r\t]/g, '');
                if (cleanUrl.length > 0 && cleanUrl.length < 2000) {
                  videosObj[index + 1] = { Video: cleanUrl };
                }
              }
            });
            return videosObj;
          }
          
          if (typeof imovelSelecionado.Video === 'string' && imovelSelecionado.Video.trim() !== '') {
            const cleanUrl = imovelSelecionado.Video.trim().replace(/[\n\r\t]/g, '');
            if (cleanUrl.length > 0 && cleanUrl.length < 2000) {
              return {
                "1": {
                  Video: cleanUrl
                }
              };
            }
          }
        } catch (error) {
          console.error('Erro ao processar vídeos:', error);
        }
        
        return {};
      };

      // CORREÇÃO: Processar TipoEndereco para carregar imediatamente
      const processAddress = () => {
        // Pega o TipoEndereco existente ou detecta do campo Endereco
        let tipoEndereco = imovelSelecionado.TipoEndereco || imovelSelecionado.TipoEndereço || '';
        let endereco = imovelSelecionado.Endereco || imovelSelecionado.Endereço || '';
        
        // Se TipoEndereco está vazio mas o Endereco contém o tipo no início
        if (!tipoEndereco && endereco) {
          // Lista de tipos de endereço comuns
          const tiposComuns = [
            'Rua', 'RUA', 'R.', 
            'Avenida', 'AVENIDA', 'Av.', 'AV', 
            'Alameda', 'ALAMEDA', 'Al.', 
            'Travessa', 'TRAVESSA', 'Tv.', 
            'Praça', 'PRAÇA', 'Pç.', 
            'Estrada', 'ESTRADA', 'Est.',
            'Rodovia', 'RODOVIA', 'Rod.',
            'Largo', 'LARGO', 'Lg.',
            'Viela', 'VIELA',
            'Beco', 'BECO'
          ];
          
          // Verifica se o endereço começa com algum tipo conhecido
          for (const tipo of tiposComuns) {
            if (endereco.toLowerCase().startsWith(tipo.toLowerCase())) {
              // Normaliza o tipo (primeira letra maiúscula)
              tipoEndereco = tipo.replace('.', '').charAt(0).toUpperCase() + 
                            tipo.replace('.', '').slice(1).toLowerCase();
              // Remove o tipo do início do endereço para evitar duplicação
              endereco = endereco.substring(tipo.length).trim();
              // Remove possível ponto ou espaço extra
              if (endereco.startsWith('.')) {
                endereco = endereco.substring(1).trim();
              }
              break;
            }
          }
        }
        
        // Se ainda não tem tipo, usa "Rua" como padrão
        if (!tipoEndereco) {
          tipoEndereco = 'Rua';
        }
        
        return {
          tipoEndereco,
          endereco
        };
      };

      // Processa endereço
      const { tipoEndereco, endereco } = processAddress();

      const cleanFormData = {
        ...imovelSelecionado,
        // NORMALIZA CEP AO CARREGAR
        CEP: normalizeCEP(imovelSelecionado.CEP || imovelSelecionado.Cep || imovelSelecionado.cep || ''),
        // GARANTE QUE TIPOENDERECO CARREGUE IMEDIATAMENTE
        TipoEndereco: tipoEndereco,
        TipoEndereço: tipoEndereco, // Alguns componentes podem usar com ç
        Endereco: endereco,
        Endereço: endereco, // Alguns componentes podem usar com ç
        Foto: processPhotos(),
        Video: processVideos(),
        Slug: formatterSlug(imovelSelecionado.Empreendimento || ""),
      };

      setFormData(cleanFormData);
      setDisplayValues(formatMonetaryDisplayValues());
    }
  }, [imovelSelecionado, mode, setFormData, setDisplayValues]);

  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'hide-media-controls';
    style.innerHTML = `
      /* Esconder elementos de vídeo/audio indesejados */
      input[type="text"] video,
      input[type="number"] video,
      input:not([type="file"]) video,
      input:not([type="file"]) audio,
      .form-field video:not(.media-preview),
      [data-field] video:not([data-video-preview]),
      input + video,
      input ~ video,
      video:not(.video-preview):not([data-video-element]) {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      
      /* Esconder botões de play flutuantes - TODOS */
      button[aria-label*="play"],
      button[aria-label*="Play"],
      button[type="button"][style*="fixed"],
      button[type="button"][style*="absolute"],
      .play-button,
      [class*="play-button"],
      [class*="playButton"],
      [class*="play-icon"],
      [class*="playIcon"],
      [class*="PlayButton"],
      button > svg[class*="play"],
      div[role="button"] > svg[class*="play"],
      button:has(svg path[d*="M8"]),
      div[role="button"]:has(svg) {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
      
      /* Esconder overlay de controles de vídeo */
      .video-overlay,
      [class*="videoOverlay"],
      [class*="video-controls"],
      [class*="mediaControls"],
      [class*="media-overlay"] {
        display: none !important;
      }
      
      /* Esconder especificamente botões posicionados sem conteúdo texto */
      button[style*="position"]:not(:has(span)):not(:has(text)),
      div[style*="position: fixed"]:has(svg),
      div[style*="position: absolute"]:has(svg) {
        display: none !important;
      }
      
      /* Esconder ícones SVG de play */
      svg[data-testid*="play"],
      svg[aria-label*="play"],
      svg path[d*="M8 5v14l11-7z"],
      svg polygon[points*="5,3 19,12 5,21"] {
        display: none !important;
      }
      
      /* NUCLEAR: Esconder tudo no canto inferior direito que seja botão */
      body > button,
      body > div > button[style*="position"],
      [style*="bottom"][style*="right"] button,
      [style*="fixed"][style*="bottom"][style*="right"],
      div[style*="position: fixed"][style*="z-index"]:has(svg) {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        width: 0 !important;
        height: 0 !important;
        overflow: hidden !important;
      }
      
      /* Permitir vídeos legítimos */
      .media-section video,
      .video-container video,
      .video-preview,
      [data-video-element] {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      }
    `;
    
    if (!document.getElementById('hide-media-controls')) {
      document.head.appendChild(style);
    }
    
    // Observer para garantir que elementos novos também sejam escondidos
    const observer = new MutationObserver(() => {
      document.querySelectorAll('button[type="button"]:not([class])').forEach(btn => {
        if (!btn.textContent.trim() && btn.querySelector('svg')) {
          btn.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important;';
        }
      });
      
      document.querySelectorAll('[style*="position: fixed"]').forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.position === 'fixed' && 
            (style.bottom !== 'auto' || style.right !== 'auto')) {
          const hasButton = el.querySelector('button') || el.tagName === 'BUTTON';
          const hasSvg = el.querySelector('svg');
          if (hasButton || hasSvg) {
            el.style.cssText = 'display: none !important; visibility: hidden !important;';
          }
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      observer.disconnect();
      const existingStyle = document.getElementById('hide-media-controls');
      if (existingStyle && document.head.contains(existingStyle)) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const codigo = fileInputRef.current?.getAttribute("data-codigo");
      if (codigo) {
        handleFileUpload(codigo, files[0]);
      }
      e.target.value = "";
    }
  };

  const getFormTitle = () => {
    if (mode === "edit" && formData.Empreendimento) {
      return `Editar Imóvel: ${formData.Empreendimento}`;
    }
    return "Cadastrar Novo Imóvel";
  };

  const handleCancel = () => {
    const redirectPath = imovelSelecionado && imovelSelecionado.Automacao === false
      ? "/admin/imoveis"
      : "/admin/automacao";
    limparImovelSelecionado();
    router.push(redirectPath);
  };

  const toggleProprietarios = () => {
    setShowProprietarios(!showProprietarios);
    if (!showProprietarios && showVincularImovel) {
      setShowVincularImovel(false);
    }
  };

  const toggleVincularImovel = () => {
    setShowVincularImovel(!showVincularImovel);
    if (!showVincularImovel && showProprietarios) {
      setShowProprietarios(false);
    }
  };

  const handleDesativarImovel = async () => {
    if (!formData.Codigo) {
      setError("Não é possível desativar um imóvel sem código.");
      return;
    }

    if (typeof window !== 'undefined' && !window.confirm(
        "Tem certeza que deseja desativar este imóvel? Ele será movido para a lista de imóveis inativos."
      )) {
      return;
    }

    setIsDesativando(true);
    setError("");
    setSuccess("");

    try {
      const result = await desativarImovel(formData.Codigo);
      if (result && result.success) {
        setSuccess("Imóvel desativado com sucesso!");
        setTimeout(() => {
          router.push("/admin/imoveis");
        }, 2000);
      } else {
        setError(result?.message || "Erro ao desativar imóvel");
      }
    } catch (error) {
      console.error("Erro ao desativar imóvel:", error);
      setError("Ocorreu um erro ao desativar o imóvel");
    } finally {
      setIsDesativando(false);
    }
  };

  // 🎯 MODIFICADO: handleFormSubmit COM sincronização automática
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (mode === 'edit') {
        const now = new Date().toISOString();
        formData.DataHoraAtualizacao = now;
        console.log('Atualizando DataHoraAtualizacao:', now);
      }
      
      // NORMALIZA CEP ANTES DE SALVAR
      if (formData.CEP) {
        formData.CEP = normalizeCEP(formData.CEP);
      }
      if (formData.Cep) {
        formData.Cep = normalizeCEP(formData.Cep);
      }
      if (formData.cep) {
        formData.cep = normalizeCEP(formData.cep);
      }
      
      if (formData.Foto && Array.isArray(formData.Foto)) {
        formData.Foto = formData.Foto.map((foto, index) => ({
          ...foto,
          Ordem: typeof foto.Ordem === 'number' ? foto.Ordem : (index + 1)
        }));
      }
      
      if (formData.Video && typeof formData.Video === 'object') {
        const validVideos = {};
        Object.entries(formData.Video).forEach(([key, value]) => {
          if (value && value.Video && typeof value.Video === 'string' && value.Video.trim() !== '') {
            const cleanUrl = value.Video.trim().replace(/[\n\r\t]/g, '');
            if (cleanUrl.length > 0 && cleanUrl.length < 2000) {
              validVideos[key] = { Video: cleanUrl };
            }
          }
        });
        
        if (Object.keys(validVideos).length === 0) {
          delete formData.Video;
        } else {
          formData.Video = validVideos;
        }
      }
      
      console.log('📤 Enviando formulário com dados atualizados');
      
      // PASSO 1: Salvar o imóvel primeiro
      const submitResult = await handleSubmit(e);
      
      // PASSO 2: Se salvou com sucesso E tem corretor selecionado, sincronizar
      if (submitResult !== false && formData.Corretor && formData.Corretor.trim() !== '') {
        console.log('🔄 Iniciando sincronização automática do corretor...');
        
        // Usar o código do imóvel (novo ou editado)
        const codigoImovel = mode === 'create' ? newImovelCode : formData.Codigo;
        
        if (codigoImovel) {
          const syncResult = await syncCorretor(codigoImovel, formData.Corretor);
          
          if (syncResult.success) {
            console.log('✅ Sincronização automática concluída!');
            if (syncResult.vinculado) {
              setSuccess(`Imóvel salvo e vinculado automaticamente ao corretor ${formData.Corretor}`);
            }
            
            // Se é criação, resetar corretor anterior para o novo
            if (mode === 'create') {
              resetCorretorAnterior(formData.Corretor);
            }
          } else {
            console.warn('⚠️ Imóvel salvo, mas houve erro na sincronização:', syncResult.error);
            setError(`Imóvel salvo, mas erro ao vincular corretor: ${syncResult.error}`);
          }
        } else {
          console.warn('⚠️ Código do imóvel não disponível para sincronização');
        }
      } else if (submitResult !== false) {
        console.log('✅ Imóvel salvo sem corretor vinculado');
      }
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setError('Erro ao salvar. Tente novamente.');
    }
  };

  const title = () => {
    if (isAutomacao) return "Imóvel cadastrado com sucesso";
    if (mode === "create") return "Imóvel cadastrado com sucesso";
    if (mode === "edit") return `Imóvel ${formData?.Empreendimento} atualizado com sucesso`;
    return "";
  };

  const description = () => {
    if (isAutomacao) return `O imóvel ${formData?.Empreendimento} foi cadastrado com sucesso com o código ${newImovelCode}.`;
    if (mode === "create") return `O imóvel ${formData?.Empreendimento} foi cadastrado com sucesso com o código ${newImovelCode}.`;
    if (mode === "edit") return `O imóvel ${formData?.Empreendimento} com Código ${formData?.Codigo} foi atualizado com sucesso.`;
    return "";
  };

  return (
    <AuthCheck>
      {showImageModal && (
        <ImageUploadModal
          title="Upload de Imagens"
          onClose={() => setShowImageModal(false)}
          onUploadComplete={handleImagesUploaded}
        />
      )}

      {isModalOpen && (
        <Modal
          title={title()}
          description={description()}
          buttonText="Ver no site"
          link={`/imovel-${formData.Codigo || newImovelCode}/${formData?.Slug}`}
        />
      )}

      <div className="">
        <button
          onClick={handleCancel}
          className="mb-4 text-gray-600 hover:text-gray-900"
          type="button"
        >
          ← Voltar
        </button>
        
        <FormHeader
          title={getFormTitle()}
          error={error || syncError}
          success={success || syncSuccess}
          isAutomacao={isAutomacao}
        />
        
        {/* 🎯 NOVO: Indicador visual de sincronização */}
        {isSyncing && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-500 mr-3"></div>
              <p className="text-sm text-blue-700">Sincronizando corretor...</p>
            </div>
          </div>
        )}
        
        <div className="flex justify-between gap-2 py-4">
          {formData.Ativo === "Sim" && (
            <button
              onClick={handleDesativarImovel}
              disabled={isDesativando || mode !== "edit"}
              className={`border-2 bg-red-100 font-bold px-4 py-2 rounded-md min-w-[180px] ${
                isDesativando
                  ? "bg-red-300 text-red-500 cursor-not-allowed"
                  : mode !== "edit"
                  ? "bg-red-100 text-red-400 cursor-not-allowed border-red-200"
                  : "text-red-700 hover:text-red-900 hover:border-red-400"
              }`}
              type="button"
            >
              {isDesativando ? "Desativando..." : "Desativar Imóvel"}
            </button>
          )}
          
          <div className="w-full flex justify-end gap-2">
            <button
              onClick={toggleProprietarios}
              className={`font-bold px-4 py-2 rounded-md ${
                showProprietarios
                  ? "bg-[#8B6F48] text-white hover:bg-[#8B6F48]/40"
                  : "bg-gray-200 text-gray-500 hover:bg-gray-300"
              }`}
              type="button"
            >
              Proprietários
            </button>

            {mode === "edit" && (
              <button
                onClick={toggleVincularImovel}
                className={`font-bold px-4 py-2 rounded-md ${
                  showVincularImovel
                    ? "bg-[#8B6F48] text-white hover:bg-[#8B6F48]/40"
                    : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                }`}
                type="button"
              >
                Duplicar Imóvel
              </button>
            )}
          </div>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-8">
          {showProprietarios && (
            <ProprietariosSection id={formData.Codigo} key="proprietarios-section" />
          )}
          
          {showVincularImovel && (
            <VincularImovelSection
              formData={formData}
              displayValues={displayValues}
              onChange={handleChange}
              validation={validation}
              key="vincular-section"
            />
          )}

          <BasicInfoSection
            formData={{ ...formData, Ativo: formData.Ativo || "Sim" }}
            displayValues={displayValues}
            onChange={handleChange}
            validation={validation}
            key="basic-info-section"
          />

          <LocationSection
            formData={formData}
            displayValues={displayValues}
            onChange={handleChange}
            validation={validation}
            key="location-section"
          />

          <FeaturesSection
            formData={formData}
            displayValues={displayValues}
            onChange={handleChange}
            key="features-section"
          />

          <ValuesSection
            formData={formData}
            displayValues={displayValues}
            onChange={handleChange}
            key="values-section"
          />

          <BrokerSection
            formData={formData}
            displayValues={displayValues}
            onChange={handleChange}
            key="broker-section"
          />

          <DescriptionSection
            formData={formData}
            displayValues={displayValues}
            onChange={handleChange}
            key="description-section"
          />

          <MediaSection
            formData={formData}
            displayValues={displayValues}
            onChange={handleChange}
            key="media-section"
          />

          <ImagesSection
            formData={formData}
            addSingleImage={addSingleImage}
            showImageModal={addImage}
            updateImage={updateImage}
            removeImage={removeImage}
            removeAllImages={removeAllImages}
            downloadAllPhotos={downloadAllPhotos}
            downloadingPhotos={downloadingPhotos}
            setImageAsHighlight={handleSetImageAsHighlight}
            changeImagePosition={handleChangeImagePosition}
            onUpdatePhotos={handleUpdatePhotos}
            validation={validation}
            key="images-section"
          />

          {error && (
            <div className="bg-red-100 p-4 text-red-500 rounded-lg">
              {error}
            </div>
          )}

          <FormFooter
            isSaving={isSaving || isSyncing}
            isValid={validation.isFormValid}
            isEditMode={mode === "edit"}
            onCancel={handleCancel}
            key="form-footer"
          />
        </form>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          style={{ display: "none" }}
        />
      </div>
    </AuthCheck>
  );
}
