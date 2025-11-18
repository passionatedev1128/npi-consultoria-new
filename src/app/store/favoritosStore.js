import { create } from "zustand";

const STORAGE_KEY = "npi_favoritos";

// Função para carregar favoritos do localStorage
const loadFavoritosFromStorage = () => {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Erro ao carregar favoritos:", error);
    return [];
  }
};

// Função para salvar favoritos no localStorage
const saveFavoritosToStorage = (favoritos) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritos));
    // Disparar evento customizado para sincronizar entre componentes e abas
    window.dispatchEvent(new CustomEvent('favoritosChanged', { detail: favoritos }));
    // Disparar evento storage para sincronizar entre abas
    window.dispatchEvent(new StorageEvent('storage', {
      key: STORAGE_KEY,
      newValue: JSON.stringify(favoritos),
      storageArea: localStorage
    }));
  } catch (error) {
    console.error("Erro ao salvar favoritos:", error);
  }
};

const useFavoritosStore = create((set, get) => ({
  favoritos: [], // Inicializa vazio - será carregado no cliente
  _inicializado: false, // Flag para saber se já carregou do storage

  // Inicializar store no cliente
  inicializar: () => {
    if (typeof window !== "undefined" && !get()._inicializado) {
      const favoritosCarregados = loadFavoritosFromStorage();
      set({ favoritos: favoritosCarregados, _inicializado: true });
      console.log('Store inicializado com', favoritosCarregados.length, 'favoritos');
      
      // Adicionar listener para sincronizar entre abas
      window.addEventListener('storage', (e) => {
        if (e.key === STORAGE_KEY) {
          const novosFavoritos = e.newValue ? JSON.parse(e.newValue) : [];
          set({ favoritos: novosFavoritos });
          console.log('Favoritos sincronizados entre abas:', novosFavoritos.length);
        }
      });
    }
  },

  // Adicionar um imóvel aos favoritos
  adicionarFavorito: (imovel) => {
    const { favoritos } = get();
    console.log('Adicionando favorito:', { Codigo: imovel.Codigo, tipo: typeof imovel.Codigo });
    
    // Comparar tanto como string quanto como número para evitar duplicatas
    const codigoStr = String(imovel.Codigo);
    const codigoNum = Number(imovel.Codigo);
    const jaExiste = favoritos.some((fav) => {
      const favCodigoStr = String(fav.Codigo);
      const favCodigoNum = Number(fav.Codigo);
      return favCodigoStr === codigoStr || favCodigoNum === codigoNum || fav.Codigo === imovel.Codigo;
    });
    
    if (!jaExiste) {
      const novosFavoritos = [...favoritos, imovel];
      saveFavoritosToStorage(novosFavoritos);
      set({ favoritos: novosFavoritos });
      console.log('Favorito adicionado! Total:', novosFavoritos.length);
    } else {
      console.log('Imóvel já está nos favoritos');
    }
  },

  // Remover um imóvel dos favoritos
  removerFavorito: (codigo) => {
    const { favoritos } = get();
    // Comparar tanto como string quanto como número para garantir compatibilidade
    const codigoStr = String(codigo);
    const codigoNum = Number(codigo);
    const novosFavoritos = favoritos.filter((imovel) => {
      const imovelCodigoStr = String(imovel.Codigo);
      const imovelCodigoNum = Number(imovel.Codigo);
      return !(imovelCodigoStr === codigoStr || imovelCodigoNum === codigoNum || imovel.Codigo === codigo);
    });
    saveFavoritosToStorage(novosFavoritos);
    set({ favoritos: novosFavoritos });
  },

  // Verificar se um imóvel está nos favoritos
  isFavorito: (codigo) => {
    const { favoritos } = get();
    // Comparar tanto como string quanto como número para garantir compatibilidade
    const codigoStr = String(codigo);
    const codigoNum = Number(codigo);
    return favoritos.some((imovel) => {
      const imovelCodigoStr = String(imovel.Codigo);
      const imovelCodigoNum = Number(imovel.Codigo);
      return imovelCodigoStr === codigoStr || imovelCodigoNum === codigoNum || imovel.Codigo === codigo;
    });
  },

  // Obter todos os favoritos
  getFavoritos: () => get().favoritos,

  // Obter a quantidade de favoritos
  getQuantidadeFavoritos: () => get().favoritos.length,

  // Recarregar favoritos do localStorage (útil após mudanças de página)
  recarregarFavoritos: () => {
    if (typeof window !== "undefined") {
      const favoritosAtualizados = loadFavoritosFromStorage();
      set({ favoritos: favoritosAtualizados, _inicializado: true });
      console.log('Favoritos recarregados:', favoritosAtualizados.length);
    }
  },
}));

export default useFavoritosStore;
