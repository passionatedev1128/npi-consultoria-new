"use client";

import { Heart, Share2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useFavoritosStore from "../../store/favoritosStore";

export function Share({ url, title = "Confira este imóvel!", imovel, variant = "primary", redirectOnFavorite = false }) {
  // Observar o array de favoritos completo para forçar re-render quando mudar
  const favoritos = useFavoritosStore((state) => state.favoritos);
  const { isFavorito, adicionarFavorito, removerFavorito, inicializar } = useFavoritosStore();
  const [shareUrl, setShareUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Define a URL de compartilhamento no lado do cliente
    setShareUrl(url);
    
    // Inicializar e recarregar favoritos do localStorage ao montar
    const { inicializar, recarregarFavoritos } = useFavoritosStore.getState();
    inicializar();
    recarregarFavoritos();
    
    console.log('Share montado - Código:', imovel?.Codigo, 'Favoritos:', favoritos.length);
    
    // Listener para sincronizar favoritos entre componentes e abas
    const handleFavoritosChanged = () => {
      console.log('Evento favoritosChanged recebido');
      recarregarFavoritos();
    };
    
    window.addEventListener('favoritosChanged', handleFavoritosChanged);
    
    return () => {
      window.removeEventListener('favoritosChanged', handleFavoritosChanged);
    };
  }, [url, imovel?.Codigo, favoritos.length]);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          url: shareUrl,
        });
      } else {
        // Fallback para navegadores que não suportam a API Share
        navigator.clipboard.writeText(shareUrl);
        alert("Link copiado para a área de transferência!");
      }
    } catch (error) {
      console.error("Erro ao compartilhar:", error);
    }
  };

  const toggleFavorite = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (imovel && imovel.Codigo) {
      const jaEhFavorito = isFavorito(imovel.Codigo);
      
      console.log('Toggle Favorito:', {
        codigo: imovel.Codigo,
        jaEhFavorito,
        totalFavoritos: favoritos.length
      });
      
      if (jaEhFavorito) {
        removerFavorito(imovel.Codigo);
        console.log('Removido dos favoritos');
      } else {
        adicionarFavorito(imovel);
        console.log('Adicionado aos favoritos');
        
        // Se redirectOnFavorite for true, redirecionar para /busca com favoritos abertos
        if (redirectOnFavorite) {
          router.push('/busca?favoritos=true');
        }
      }
      
      // Log do localStorage após mudança
      setTimeout(() => {
        const stored = localStorage.getItem('npi_favoritos');
        console.log('LocalStorage:', stored ? JSON.parse(stored).length : 0, 'favoritos');
      }, 100);
    }
  };

  // Verificar se o imóvel está nos favoritos
  const favorito = imovel && imovel.Codigo ? isFavorito(imovel.Codigo) : false;
  
  // Debug: Log sempre que verificar favorito
  useEffect(() => {
    if (imovel && imovel.Codigo) {
      console.log('Verificando favorito:', {
        codigo: imovel.Codigo,
        tipo: typeof imovel.Codigo,
        ehFavorito: favorito,
        totalFavoritos: favoritos.length,
        codigos: favoritos.map(f => ({ cod: f.Codigo, tipo: typeof f.Codigo }))
      });
    }
  }, [favorito, favoritos, imovel]);

  return (
    <div className="flex gap-4">
      <button
        onClick={toggleFavorite}
        className={`transition-colors duration-300 hover:text-[#8B6F4B] ${
          variant === "primary" ? "text-white" : "text-zinc-700"
        }`}
        aria-label="Favoritar"
      >
        <Heart
          size={22}
          fill={favorito ? "#8B6F4B" : "none"}
          color={favorito ? "#8B6F4B" : "currentColor"}
        />
      </button>
      <button
        onClick={handleShare}
        className={`transition-colors duration-300 hover:text-[#8B6F48] ${
          variant === "primary" ? "text-white" : "text-zinc-700"
        }`}
        aria-label="Compartilhar"
      >
        <Share2 size={22} />
      </button>
    </div>
  );
}
