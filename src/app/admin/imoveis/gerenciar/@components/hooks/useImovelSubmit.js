"use client";

import { useState, useCallback, useMemo } from "react";
import { atualizarImovel, criarImovel } from "@/app/services";
import { formatterNumber } from "@/app/utils/formatter-number";
import { getTipoEndereco } from "@/app/utils/formater-tipo-address";
import { formatAddress } from "@/app/utils/formatter-address";
import { salvarLog } from "@/app/admin/services/log-service";
import { getCurrentUserAndDate } from "@/app/utils/get-log";

export const useImovelSubmit = (formData, setIsModalOpen, mode = "create", imovelId = null) => {
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = useMemo(() => {
    return (data) => {
      const requiredFields = [
        { field: "Empreendimento", label: "Empreendimento" },
        { field: "Slug", label: "Slug" },
        { field: "CEP", label: "CEP" },
        { field: "Endereco", label: "Endereço" },
        { field: "Numero", label: "Número" },
        { field: "Bairro", label: "Bairro" },
        { field: "Cidade", label: "Cidade" },
      ];

      const missingFields = requiredFields.filter(
        (item) => !data[item.field] || data[item.field].trim() === ""
      );

      if (missingFields.length > 0) {
        const fieldNames = missingFields.map((f) => f.label).join(", ");
        return {
          isValid: false,
          error: `Campos obrigatórios não preenchidos: ${fieldNames}`,
        };
      }

      const photoCount = data.Foto ? Object.keys(data.Foto).length : 0;
      if (photoCount < 5) {
        return {
          isValid: false,
          error: `É necessário adicionar pelo menos 5 fotos (atualmente: ${photoCount})`,
        };
      }

      return { isValid: true };
    };
  }, []);

  const sanitizeDate = (dateValue) => {
    if (!dateValue) return undefined;
    
    try {
      // Se for string vazia, retorna undefined
      if (typeof dateValue === 'string' && dateValue.trim() === '') {
        return undefined;
      }
      
      // Se for uma data válida em formato ISO (mantém como está)
      if (typeof dateValue === 'string' && dateValue.includes('T')) {
        const testDate = new Date(dateValue);
        if (!isNaN(testDate.getTime())) {
          return dateValue; // Retorna a string ISO original
        }
      }
      
      // Se estiver em formato brasileiro dd/mm/yyyy HH:mm ou dd/mm/yyyy
      if (typeof dateValue === 'string' && /^\d{2}\/\d{2}\/\d{4}/.test(dateValue)) {
        const parts = dateValue.split(' ');
        const datePart = parts[0];
        const timePart = parts[1] || '12:00:00';
        
        const [day, month, year] = datePart.split('/');
        const [hours, minutes, seconds] = timePart.split(':');
        
        const parsedDate = new Date(Date.UTC(
          parseInt(year), 
          parseInt(month) - 1, 
          parseInt(day),
          parseInt(hours || 12),
          parseInt(minutes || 0),
          parseInt(seconds || 0)
        ));
        
        if (!isNaN(parsedDate.getTime())) {
          return parsedDate.toISOString();
        }
      }
      
      // Se for um objeto Date válido
      if (dateValue instanceof Date && !isNaN(dateValue.getTime())) {
        return dateValue.toISOString();
      }
      
      // Se for timestamp numérico
      if (typeof dateValue === 'number' && !isNaN(dateValue)) {
        const parsedDate = new Date(dateValue);
        if (!isNaN(parsedDate.getTime())) {
          return parsedDate.toISOString();
        }
      }
      
      // Se chegou aqui e não conseguiu converter, retorna undefined
      console.warn('Data inválida detectada e removida:', dateValue);
      return undefined;
      
    } catch (error) {
      console.error('Erro ao sanitizar data:', error);
      return undefined;
    }
  };

  const preparePayload = useMemo(() => {
    return (data) => {
      // PRESERVAR ORDEM: Converter Foto de objeto para array mantendo ordem numérica
      let fotosArray = [];
      if (data.Foto) {
        if (Array.isArray(data.Foto)) {
          fotosArray = data.Foto;
        } else if (typeof data.Foto === 'object') {
          // Se for objeto, converter preservando ordem das chaves numéricas
          const keys = Object.keys(data.Foto).sort((a, b) => {
            const numA = parseInt(a);
            const numB = parseInt(b);
            // Se ambas são números, ordenar numericamente
            if (!isNaN(numA) && !isNaN(numB)) {
              return numA - numB;
            }
            // Caso contrário, manter ordem original
            return a.localeCompare(b);
          });
          fotosArray = keys.map(key => data.Foto[key]);
        }
      }

      let videoData = data.Video || {};
      
      if (Array.isArray(data.Video)) {
        const videosObj = {};
        data.Video.forEach((video, index) => {
          if (video && video.Video && typeof video.Video === 'string' && video.Video.trim()) {
            videosObj[index + 1] = { Video: video.Video.trim() };
          }
        });
        videoData = videosObj;
      } else if (typeof data.Video === 'object' && data.Video !== null) {
        const cleanVideos = {};
        Object.entries(data.Video).forEach(([key, value]) => {
          if (value && value.Video && typeof value.Video === 'string' && value.Video.trim()) {
            cleanVideos[key] = { Video: value.Video.trim() };
          }
        });
        videoData = cleanVideos;
      }

      // Sanitizar as datas (a DataHoraAtualizacao já vem atualizada do formData)
      const dataHoraAtualizacao = sanitizeDate(data.DataHoraAtualizacao);
      const dataCadastro = sanitizeDate(data.DataCadastro);

      // ATUALIZAR STATUS PARA VERDE quando DataHoraAtualizacao é modificada no modo edit
      let statusCor = data.StatusCor;
      if (mode === 'edit' && dataHoraAtualizacao) {
        const dataAtual = new Date();
        const dataAtualizacao = new Date(dataHoraAtualizacao);
        
        // Se a data de atualização é recente (diferença menor que 1 minuto), status fica verde
        const diferencaMs = Math.abs(dataAtual.getTime() - dataAtualizacao.getTime());
        const diferencaMinutos = diferencaMs / (1000 * 60);
        
        if (diferencaMinutos < 1) {
          statusCor = 'green';
          console.log('STATUS ATUALIZADO PARA VERDE');
        }
      }

      const payload = {
        ...data,
        ValorAntigo: data.ValorAntigo ? formatterNumber(data.ValorAntigo) : undefined,
        TipoEndereco: getTipoEndereco(data.Endereco),
        Endereco: formatAddress(data.Endereco),
        Foto: fotosArray,
        Video: Object.keys(videoData).length > 0 ? videoData : undefined,
        DataHoraAtualizacao: dataHoraAtualizacao,
        DataCadastro: dataCadastro,
        StatusCor: statusCor
      };
      
      // Remover APENAS campos undefined ou null
      Object.keys(payload).forEach(key => {
        if (payload[key] === undefined || payload[key] === null) {
          delete payload[key];
        }
      });
      
      console.log('📤 PAYLOAD PREPARADO:', {
        temDataHoraAtualizacao: !!payload.DataHoraAtualizacao,
        valorDataHoraAtualizacao: payload.DataHoraAtualizacao,
        ValorAntigo: payload.ValorAntigo,
        StatusCor: payload.StatusCor
      });
      
      return payload;
    };
  }, [mode]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSaving(true);
      setError("");
      setSuccess("");

      try {
        const validation = validateForm(formData);
        if (!validation.isValid) {
          setError(validation.error);
          setIsSaving(false);
          return false; // Retornar false quando validação falha
        }

        const payload = preparePayload(formData);
        
        console.log('PAYLOAD FINAL PARA BACKEND:', {
          temDataHoraAtualizacao: !!payload.DataHoraAtualizacao,
          valorDataHoraAtualizacao: payload.DataHoraAtualizacao,
          ValorAntigo: payload.ValorAntigo,
          Codigo: payload.Codigo,
          mode: mode
        });

        let result;
        let saveSuccess = false;

        if (formData.Automacao) {
          result = await criarImovel(formData.Codigo, payload);
          if (result && result.success) {
            saveSuccess = true;
            setSuccess("Imóvel cadastrado com sucesso!");
            setIsModalOpen(true);

            try {
              const { user, timestamp } = await getCurrentUserAndDate();
              await salvarLog({
                user: user.displayName ? user.displayName : "Não Identificado",
                email: user.email,
                data: timestamp.toISOString(),
                action: `Automação: ${user.email} - criou o imóvel ${formData.Codigo} a partir da automação`,
              });
            } catch (logError) {
              console.error('Erro no log:', logError);
            }
          } else {
            setError(result?.message || "Erro ao criar imóvel");
          }
        } else if (mode === "edit") {
          const id = imovelId || formData.Codigo;
          if (!id) {
            throw new Error('ID do imóvel não encontrado para atualização');
          }
          
          result = await atualizarImovel(id, payload);

          try {
            const { user, timestamp } = await getCurrentUserAndDate();
            await salvarLog({
              user: user.displayName ? user.displayName : "Não Identificado",
              email: user.email,
              data: timestamp.toISOString(),
              action: `Usuário ${user.email} atualizou o imóvel ${formData.Codigo}`,
            });
          } catch (logError) {
            console.error('Erro no log:', logError);
          }

          if (result && result.success) {
            saveSuccess = true;
            setSuccess("Imóvel atualizado com sucesso!");
            setIsModalOpen(true);
          } else {
            setError(result?.message || "Erro ao atualizar imóvel");
          }
        } else {
          result = await criarImovel(formData.Codigo, payload);

          if (result && result.success) {
            saveSuccess = true;
            setSuccess("Imóvel cadastrado com sucesso!");
            setIsModalOpen(true);
            try {
              const { user, timestamp } = await getCurrentUserAndDate();
              await salvarLog({
                user: user.displayName,
                email: user.email,
                data: timestamp.toISOString(),
                action: `Usuário ${user.email} criou o imóvel ${formData.Codigo}`,
              });
            } catch (logError) {
              console.error('Erro no log:', logError);
            }
          } else {
            setError(result?.message || "Erro ao cadastrar imóvel");
          }
        }
        
        // Retornar resultado do save para permitir que o componente pai saiba se foi bem-sucedido
        return saveSuccess;
      } catch (error) {
        console.error(`Erro ao ${mode === "edit" ? "atualizar" : "cadastrar"} imóvel:`, error);
        setError(`Ocorreu um erro ao ${mode === "edit" ? "atualizar" : "cadastrar"} o imóvel`);
        return false; // Retornar false em caso de erro
      } finally {
        setIsSaving(false);
      }
    },
    [formData, setIsModalOpen, validateForm, preparePayload, mode, imovelId]
  );

  return {
    handleSubmit,
    isSaving,
    error,
    success,
    setError,
    setSuccess,
  };
};

export default useImovelSubmit;
