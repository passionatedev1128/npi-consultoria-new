"use client";

import { memo, useState, useEffect } from 'react';
import FormSection from '../FormSection';

const MediaSection = ({ formData, displayValues, onChange }) => {

  // Estados locais sincronizados com formData (evita interferência)
  const [localTour360, setLocalTour360] = useState('');
  const [localVideoId, setLocalVideoId] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);
  const [showFullTourPreview, setShowFullTourPreview] = useState(false);

  // Sincronizar com props quando mudarem (mas só uma vez)
  useEffect(() => {
    if (!isInitialized) {
      const tour360Value = displayValues?.Tour360 || formData?.Tour360 || '';
      const videoIdValue = formData?.Video?.["1"]?.Video || '';

      setLocalTour360(tour360Value);
      setLocalVideoId(videoIdValue);
      setIsInitialized(true);

      console.log('MediaSection inicializado:', { tour360Value, videoIdValue });
    }
  }, [formData, displayValues, isInitialized]);

  // FUNÇÃO CORRIGIDA: Validar se é URL válida (QUALQUER provedor)
  const isValidUrl = (url) => {
    if (!url || typeof url !== 'string') return false;

    try {
      // Aceita URLs que começam com http:// ou https://
      if (url.startsWith('http://') || url.startsWith('https://')) {
        new URL(url); // Valida se é URL bem formada
        return true;
      }

      // Aceita URLs relativas que começam com /
      if (url.startsWith('/')) {
        return true;
      }

      return false;
    } catch {
      return false;
    }
  };

  // FUNÇÃO: Extrair ID do Matterport (OPCIONAL - só para preview)
  const extractMatterportId = (url) => {
    if (!url || typeof url !== 'string') return null;

    try {
      // Patterns do Matterport
      const patterns = [
        /my\.matterport\.com\/show\/\?m=([^&\n?#]+)/,
        /matterport\.com\/.*[?&]m=([^&\n?#]+)/,
        /\/show\/\?m=([^&\n?#]+)/
      ];

      for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
          console.log('Matterport ID extraído:', match[1]);
          return match[1];
        }
      }

      return null;
    } catch (error) {
      console.error('Erro ao extrair ID do Matterport:', error);
      return null;
    }
  };

  // Handler para Tour 360 - Atualiza local E pai
  const handleTour360Change = (e) => {
    const value = e.target.value;

    // 1. Atualização LOCAL imediata (garante responsividade)
    setLocalTour360(value);

    // 2. Atualização no COMPONENTE PAI (com debounce/batch)
    if (typeof onChange === 'function') {
      try {
        onChange("Tour360", value);
      } catch (error) {
        console.error('Erro ao atualizar Tour360:', error);
      }
    }
  };

  // Handler para Video ID completo e funcional
  const handleVideoIdChange = (e) => {
    const value = e.target.value;
    console.log('handleVideoIdChange chamado:', value);

    // Extrator de ID do YouTube (aceita URL ou ID)
    const extractYouTubeId = (input) => {
      if (!input) return '';

      console.log('Extraindo ID de:', input);

      // Se não tem youtube.com/youtu.be, assumir que já é ID
      if (!input.includes('youtube.com') && !input.includes('youtu.be')) {
        console.log('Assumindo que é ID direto:', input);
        return input;
      }

      // Extrair ID de URLs
      const patterns = [
        /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
        /(?:youtu\.be\/)([^&\n?#]+)/,
        /(?:youtube\.com\/embed\/)([^&\n?#]+)/
      ];

      for (const pattern of patterns) {
        const match = input.match(pattern);
        if (match) {
          console.log('ID extraído com pattern:', match[1]);
          return match[1];
        }
      }

      console.log('Nenhum pattern funcionou, usando input original:', input);
      return input;
    };

    const cleanId = extractYouTubeId(value);
    console.log('ID limpo extraído:', cleanId);

    // 1. Atualização LOCAL imediata
    setLocalVideoId(cleanId);

    // 2. Atualização no COMPONENTE PAI
    if (typeof onChange === 'function') {
      try {
        const videoData = {
          "1": {
            Video: cleanId
          }
        };

        console.log('MediaSection criando videoData:', videoData);
        console.log('Chamando onChange com:', "Video", videoData);

        onChange("Video", videoData);

        console.log('onChange executado com sucesso!');
      } catch (error) {
        console.error('Erro ao atualizar Video:', error);
      }
    }
  };

  // NOVO: Detectar tipo de tour virtual
  const matterportId = extractMatterportId(localTour360);
  const isValidTourUrl = isValidUrl(localTour360);

  return (
    <FormSection title="Mídia">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Tour 360° */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Link do Tour Virtual 360°
          </label>
          <input
            type="text"
            value={localTour360}
            onChange={handleTour360Change}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                       transition-colors"
            placeholder="Cole a URL completa do tour virtual"
          />

          {/* CORRIGIDO: Preview apenas para Matterport (quando detectado) */}
          {matterportId && (
            <div className="mt-3">
              <p className="text-xs text-gray-500 mb-2">Preview do Matterport:</p>
              <div className="relative aspect-video w-full max-w-xs group">
                <div
                  className="relative w-full h-full rounded-lg shadow-md overflow-hidden cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 hover:shadow-lg transition-all duration-300"
                  onClick={() => window.open(`https://my.matterport.com/show/?m=${matterportId}`, '_blank')}
                >
                  <img
                    src={`https://cdn-2.matterport.com/apifs/models/${matterportId}/images/poster.jpg`}
                    alt="Preview do Tour 360°"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/assets/images/tour_placeholder.jpg';
                      e.target.onerror = () => {
                        e.target.style.display = 'none';
                        e.target.parentElement.querySelector('.fallback-placeholder').style.display = 'flex';
                      };
                    }}
                  />

                  <div className="fallback-placeholder absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 flex items-center justify-center text-white hidden">
                    <div className="text-center">
                      <div className="mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 mx-auto opacity-80">
                          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V9M19 9H14V4H5V19L8.5 15.5L11 18L14.5 14.5L19 19V9Z" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium opacity-90">Tour Virtual 360°</div>
                      <div className="text-xs opacity-70 mt-1">Matterport</div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-gray-700">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xs px-2.5 py-1 rounded-full font-medium shadow-sm">
                    360°
                  </div>

                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gray-400/30 transition-colors duration-300"></div>
                </div>

                <p className="text-xs text-gray-400 mt-1">
                  Clique para abrir o tour virtual
                  {!showFullTourPreview && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowFullTourPreview(true);
                      }}
                      className="ml-2 text-blue-600 hover:text-blue-800 underline"
                    >
                      • Preview completo
                    </button>
                  )}
                </p>
              </div>

              {showFullTourPreview && (
                <div className="mt-3">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-gray-500">Preview completo:</p>
                    <button
                      type="button"
                      onClick={() => setShowFullTourPreview(false)}
                      className="text-xs text-red-600 hover:text-red-800"
                    >
                      ✕ Fechar
                    </button>
                  </div>
                  <div className="relative aspect-video w-full max-w-sm">
                    <iframe
                      src={`https://my.matterport.com/show/?m=${matterportId}&play=1&qs=1`}
                      className="w-full h-full rounded border"
                      frameBorder="0"
                      allowFullScreen
                      title="Preview completo do Tour 360°"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CORRIGIDO: Indicador genérico para outras plataformas */}
          {localTour360 && localTour360.length > 10 && isValidTourUrl && !matterportId && (
            <div className="mt-3">
              <div className="flex items-center gap-2 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-xs">
                  URL válida detectada • Tour Virtual será exibido no site
                </p>
              </div>
            </div>
          )}

          {/* CORRIGIDO: Erro apenas se URL inválida (não só se não for Matterport) */}
          {localTour360 && localTour360.length > 10 && !isValidTourUrl && (
            <div className="mt-2">
              <p className="text-xs text-amber-600">
                URL inválida. Verifique se começa com https:// ou http://
              </p>
            </div>
          )}
        </div>

        {/* Vídeo YouTube */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ID do Vídeo (YouTube)
          </label>
          <input
            type="text"
            value={localVideoId}
            onChange={handleVideoIdChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                       transition-colors"
            placeholder="Ex: mdcsckJg7rc ou URL completa"
          />

          {localVideoId && localVideoId.length > 5 && (
            <div className="mt-3">
              <p className="text-xs text-gray-500 mb-2">Preview:</p>
              <div className="relative aspect-video w-full max-w-xs">
                <iframe
                  src={`https://www.youtube.com/embed/${localVideoId}`}
                  className="w-full h-full rounded border"
                  frameBorder="0"
                  allowFullScreen
                  title="Preview do YouTube"
                />
              </div>
            </div>
          )}
        </div>

      </div>

      {/* Dica atualizada */}
      <div className="mt-4 p-3 bg-blue-50 rounded-md">
        <p className="text-sm text-blue-700">
          <strong>Dica:</strong> Para o vídeo do YouTube, você pode colar a URL completa ou apenas o ID.
          Para o Tour 360°, cole a URL completa de qualquer plataforma (Matterport, Kuula, etc.) -
          o preview só será exibido para URLs do Matterport.
        </p>
      </div>
    </FormSection>
  );
};

export default memo(MediaSection);
