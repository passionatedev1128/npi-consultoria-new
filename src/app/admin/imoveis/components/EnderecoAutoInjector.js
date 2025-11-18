// src/app/admin/imoveis/components/EnderecoAutoInjector.js
"use client";

import { useEffect } from 'react';

export default function EnderecoAutoInjector() {
  useEffect(() => {
    // Só executa no cliente e uma vez
    if (typeof window === 'undefined' || window._enderecoInjected) return;
    
    window._enderecoInjected = true;
    console.log('🔍 Auto-injetor de busca por endereço ativado');
    
    const originalSetItem = localStorage.setItem.bind(localStorage);
    
    const normalizeText = (text) => {
      if (!text) return '';
      return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
    };
    
    const parseEndereco = (endereco) => {
      if (!endereco) return { endereco: '', numero: '' };
      const texto = endereco.trim();
      const match = texto.match(/[,\s]+(\d+[A-Za-z]?)$/);
      if (match) {
        return {
          endereco: texto.replace(match[0], '').trim(),
          numero: match[1]
        };
      }
      return { endereco: texto, numero: '' };
    };
    
    localStorage.setItem = function(key, value) {
      originalSetItem(key, value);
      
      if (key === 'admin_appliedFilters') {
        try {
          const filters = JSON.parse(value);
          const enderecoCompleto = filters.EnderecoCompleto || filters.enderecoCompleto;
          
          if (enderecoCompleto) {
            console.log('📍 Busca por endereço:', enderecoCompleto);
            const { endereco, numero } = parseEndereco(enderecoCompleto);
            const enderecoNorm = normalizeText(endereco);
            
            (async () => {
              try {
                const response = await fetch('/api/admin/imoveis?limit=1000');
                const data = await response.json();
                
                if (data && data.data) {
                  const imoveisFiltrados = data.data.filter(imovel => {
                    const enderecoImovel = normalizeText(imovel.Endereco || '');
                    const tipoEndereco = normalizeText(imovel.TipoEndereco || '');
                    const numeroImovel = (imovel.Numero || '').toString();
                    const enderecoCompleto = `${tipoEndereco} ${enderecoImovel}`.trim();
                    const enderecoCompletoNorm = normalizeText(enderecoCompleto);
                    
                    let enderecoMatch = !enderecoNorm || 
                      enderecoImovel.includes(enderecoNorm) || 
                      enderecoCompletoNorm.includes(enderecoNorm);
                    
                    if (!enderecoMatch && enderecoNorm) {
                      const palavras = enderecoNorm.split(' ').filter(p => p.length > 2);
                      enderecoMatch = palavras.every(p => 
                        enderecoImovel.includes(p) || enderecoCompletoNorm.includes(p)
                      );
                    }
                    
                    const numeroMatch = !numero || numeroImovel === numero;
                    return enderecoMatch && numeroMatch;
                  });
                  
                  console.log(`✅ ${imoveisFiltrados.length} imóveis encontrados`);
                  
                  if (imoveisFiltrados.length > 0) {
                    originalSetItem('admin_filterResults', JSON.stringify(imoveisFiltrados));
                    originalSetItem('admin_filterPagination', JSON.stringify({
                      totalItems: imoveisFiltrados.length,
                      totalPages: Math.ceil(imoveisFiltrados.length / 50),
                      currentPage: 1,
                      itemsPerPage: 50
                    }));
                    
                    delete filters.EnderecoCompleto;
                    delete filters.enderecoCompleto;
                    originalSetItem('admin_appliedFilters', JSON.stringify(filters));
                    
                    setTimeout(() => window.location.reload(), 500);
                  } else {
                    alert(`Nenhum imóvel encontrado: ${enderecoCompleto}`);
                    delete filters.EnderecoCompleto;
                    delete filters.enderecoCompleto;
                    originalSetItem('admin_appliedFilters', JSON.stringify(filters));
                  }
                }
              } catch (error) {
                console.error('Erro:', error);
              }
            })();
          }
        } catch (e) {}
      }
    };
    
    console.log('✅ Sistema instalado com sucesso!');
  }, []);
  
  return null; // Componente invisível
}
