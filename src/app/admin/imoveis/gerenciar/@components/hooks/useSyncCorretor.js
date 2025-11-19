// src/app/admin/imoveis/gerenciar/@components/hooks/useSyncCorretor.js
"use client";
import { useEffect, useRef, useState } from 'react';
import axiosClient from "@/app/lib/axios-client";
import { vincularImovelCorretor, desvincularImovelCorretor } from "@/app/admin/services/vincular";

/**
 * Hook para sincronizar automaticamente imóveis com corretores
 * Detecta mudanças no campo Corretor e faz vinculação/desvinculação automática
 */
export function useSyncCorretor(formData, mode) {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncError, setSyncError] = useState('');
  const [syncSuccess, setSyncSuccess] = useState('');
  const corretorAnteriorRef = useRef(null);
  const initializedRef = useRef(false); // Para rastrear se já inicializamos o corretor inicial
  const [corretoresMap, setCorretoresMap] = useState(new Map());

  // Carregar mapa de corretores (nome -> codigoD) ao montar
  useEffect(() => {
    const loadCorretores = async () => {
      try {
        let todosCorretores = [];
        
        // Buscar primeira página
        const firstResponse = await axiosClient.get("corretores");
        
        if (firstResponse.data?.corretores) {
          todosCorretores = [...firstResponse.data.corretores];
          
          // Buscar páginas adicionais
          const totalPages = firstResponse.data.pagination?.totalPages || 1;
          
          for (let page = 2; page <= totalPages; page++) {
            const response = await axiosClient.get(`corretores?page=${page}`);
            if (response.data?.corretores) {
              todosCorretores = [...todosCorretores, ...response.data.corretores];
            }
          }
        }
        
        // Criar mapa: nome -> codigoD
        const map = new Map();
        todosCorretores.forEach(corretor => {
          const nome = corretor.nome || corretor.Nome || '';
          const codigoD = corretor.codigoD || corretor.CodigoD || '';
          if (nome && codigoD) {
            map.set(nome.trim().toLowerCase(), codigoD);
          }
        });
        
        console.log('🗺️ Mapa de corretores carregado:', map.size, 'corretores');
        setCorretoresMap(map);
        
      } catch (error) {
        console.error('❌ Erro ao carregar mapa de corretores:', error);
      }
    };
    
    loadCorretores();
  }, []);

  // Guardar corretor inicial ao montar (modo edição)
  // IMPORTANTE: Só definir uma vez quando o formData.Corretor é carregado pela primeira vez
  useEffect(() => {
    // Se estamos em modo edição e há um corretor, definir a referência inicial APENAS UMA VEZ
    if (mode === 'edit' && formData.Corretor && !corretorAnteriorRef.current && !initializedRef.current) {
      corretorAnteriorRef.current = formData.Corretor;
      initializedRef.current = true;
      console.log('📌 Corretor inicial detectado (edit mode):', formData.Corretor);
    }
    // Em modo create, não definir inicial (será definido no primeiro save após syncCorretor)
  }, [mode, formData.Corretor]);

  /**
   * Busca o codigoD de um corretor pelo nome
   */
  const getCorretorCodigoD = async (nomeCorretor) => {
    if (!nomeCorretor || nomeCorretor.trim() === '') {
      return null;
    }

    try {
      const nomeLowerCase = nomeCorretor.trim().toLowerCase();
      const codigoD = corretoresMap.get(nomeLowerCase);
      
      if (codigoD) {
        console.log(`✅ CodigoD encontrado no cache para "${nomeCorretor}": ${codigoD}`);
        return codigoD;
      }

      // Fallback: buscar na API se não encontrar no cache
      console.log(`🔍 Buscando codigoD na API para "${nomeCorretor}"...`);
      const response = await axiosClient.get(`corretores?nome=${encodeURIComponent(nomeCorretor)}`);
      
      if (response.data?.corretores && response.data.corretores.length > 0) {
        const corretor = response.data.corretores[0];
        const codigoD = corretor.codigoD || corretor.CodigoD;
        
        // Atualizar cache
        corretoresMap.set(nomeLowerCase, codigoD);
        setCorretoresMap(new Map(corretoresMap));
        
        console.log(`✅ CodigoD encontrado na API: ${codigoD}`);
        return codigoD;
      }

      console.warn(`⚠️ Corretor "${nomeCorretor}" não encontrado`);
      return null;
      
    } catch (error) {
      console.error(`❌ Erro ao buscar codigoD do corretor "${nomeCorretor}":`, error);
      return null;
    }
  };

  /**
   * Sincroniza o imóvel com o corretor atual
   * Deve ser chamado APÓS salvar o imóvel
   */
  const syncCorretor = async (codigoImovel, nomeCorretorAtual) => {
    if (!codigoImovel) {
      console.warn('⚠️ Código do imóvel não fornecido para sincronização');
      return { success: false, error: 'Código do imóvel não fornecido' };
    }

    setIsSyncing(true);
    setSyncError('');
    setSyncSuccess('');

    try {
      console.log('🔄 Iniciando sincronização automática...');
      console.log('📋 Dados:', {
        codigoImovel,
        corretorAtual: nomeCorretorAtual || '(vazio)',
        corretorAnterior: corretorAnteriorRef.current || '(vazio)'
      });

      const corretorAnterior = corretorAnteriorRef.current;
      const corretorAtual = nomeCorretorAtual || '';

      // Se não mudou nada E já está vinculado, não faz nada
      // Mas se é a primeira vez (corretorAnterior é null) e há corretor, deve vincular
      if (corretorAnterior === corretorAtual && corretorAnterior !== null) {
        console.log('✅ Corretor não mudou, sem necessidade de sincronização');
        return { success: true, message: 'Sem alterações' };
      }
      
      // Se é a primeira vez e há corretor, deve vincular mesmo que corretorAnterior seja null
      if (corretorAnterior === null && corretorAtual && corretorAtual.trim() !== '') {
        console.log('🆕 Primeira vinculação detectada, vinculando corretor:', corretorAtual);
      }

      // PASSO 1: Desvincular do corretor anterior (se existir e for diferente)
      if (corretorAnterior && corretorAnterior.trim() !== '') {
        console.log(`🔓 Desvinculando do corretor anterior: "${corretorAnterior}"`);
        const codigoAnterior = await getCorretorCodigoD(corretorAnterior);
        
        if (codigoAnterior) {
          const resultDesvincular = await desvincularImovelCorretor(codigoAnterior, codigoImovel);
          if (resultDesvincular.success) {
            console.log('✅ Desvinculado com sucesso do corretor anterior');
          } else {
            console.warn('⚠️ Não foi possível desvincular do corretor anterior:', resultDesvincular.error);
          }
        } else {
          console.warn(`⚠️ CodigoD não encontrado para corretor anterior "${corretorAnterior}"`);
        }
      }

      // PASSO 2: Vincular ao novo corretor (se existir)
      if (corretorAtual && corretorAtual.trim() !== '') {
        console.log(`🔗 Vinculando ao novo corretor: "${corretorAtual}"`);
        const codigoAtual = await getCorretorCodigoD(corretorAtual);
        
        if (codigoAtual) {
          const resultVincular = await vincularImovelCorretor(codigoAtual, codigoImovel);
          
          if (resultVincular.success) {
            console.log('✅ Vinculado com sucesso ao novo corretor');
            setSyncSuccess(`Imóvel vinculado automaticamente ao corretor ${corretorAtual}`);
            
            // Atualizar referência do corretor anterior
            corretorAnteriorRef.current = corretorAtual;
            
            return { 
              success: true, 
              message: `Imóvel vinculado ao corretor ${corretorAtual}`,
              vinculado: true
            };
          } else {
            const errorMsg = `Erro ao vincular ao corretor ${corretorAtual}`;
            console.error('❌', errorMsg, resultVincular.error);
            setSyncError(errorMsg);
            return { success: false, error: errorMsg };
          }
        } else {
          const errorMsg = `Corretor "${corretorAtual}" não encontrado no sistema`;
          console.warn('⚠️', errorMsg);
          setSyncError(errorMsg);
          return { success: false, error: errorMsg };
        }
      } else {
        // Corretor foi removido (campo vazio)
        console.log('✅ Corretor removido, apenas desvinculou');
        setSyncSuccess('Corretor desvinculado do imóvel');
        corretorAnteriorRef.current = null;
        return { success: true, message: 'Corretor desvinculado', vinculado: false };
      }

    } catch (error) {
      const errorMsg = 'Erro durante sincronização automática';
      console.error('❌', errorMsg, error);
      setSyncError(errorMsg);
      return { success: false, error: errorMsg };
      
    } finally {
      setIsSyncing(false);
      
      // Limpar mensagens após 5 segundos
      setTimeout(() => {
        setSyncError('');
        setSyncSuccess('');
      }, 5000);
    }
  };

  /**
   * Reseta o corretor anterior (útil após criar novo imóvel)
   */
  const resetCorretorAnterior = (nomeCorretor) => {
    corretorAnteriorRef.current = nomeCorretor || null;
    console.log('🔄 Corretor anterior resetado para:', nomeCorretor || '(vazio)');
  };

  return {
    syncCorretor,
    isSyncing,
    syncError,
    syncSuccess,
    resetCorretorAnterior,
    getCorretorCodigoD // Exportar caso precise usar manualmente
  };
}
