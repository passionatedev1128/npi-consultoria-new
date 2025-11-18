//D:\Downloads\npi-consultoria\src\app\busca\page.js
"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import CardImovel, { CardImovelSkeleton } from "../components/ui/card-imovel";
import Pagination from "../components/ui/pagination";
import { Footer } from "../components/ui/footer";
import PropertyFilters from "./components/property-filters";
import { InputSearch } from "./components/InputSearch";

import { getImoveis, searchImoveis, getImoveisFavoritos } from "../services";
import useFiltersStore from "../store/filtrosStore";
import useFavoritosStore from "../store/favoritosStore";
import useImovelStore from "../store/imovelStore";
import { gerarUrlSeoFriendly } from "../utils/url-slugs";

// --- NOVO COMPONENTE GOOGLE MAPS ---
import MapOverlay from "./components/map-overlay.jsx";

// Importar o novo componente Google Maps integrado
const IntegratedMapWithNoSSR = dynamic(() => import("./components/integrated-map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-black" />
        <p className="mt-2 text-gray-700">Carregando mapa...</p>
      </div>
    </div>
  ),
});

const SORTING_RULES = {
  relevancia: { sortField: "date", sortOrder: "desc" },
  maior_valor: { sortField: "price", sortOrder: "desc" },
  menor_valor: { sortField: "price", sortOrder: "asc" },
  maior_area: { sortField: "area", sortOrder: "desc" },
  menor_area: { sortField: "area", sortOrder: "asc" },
};

const PAGE_CACHE_DURATION = 300_000; // 5 minutos

/* =========================================================
   PÁGINA
========================================================= */
export default function BuscaImoveis() {
  const router = useRouter();

  // Dados & Stores
  const [imoveis, setImoveis] = useState([]);
  const [filteredImoveis, setFilteredImoveis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(false);

  const filtrosAtuais = useFiltersStore((state) => state);
  const filtrosAplicados = useFiltersStore((state) => state.filtrosAplicados);
  const atualizacoesFiltros = useFiltersStore((state) => state.atualizacoesFiltros);

  const { favoritos, getQuantidadeFavoritos } = useFavoritosStore();
  const quantidadeFavoritos = getQuantidadeFavoritos();

  const adicionarVariosImoveisCache = useImovelStore(
    (state) => state.adicionarVariosImoveisCache
  );

  // UI / paginação
  const [ordenacao, setOrdenacao] = useState("relevancia");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    totalItems: 0,
    totalPages: 1,
    currentPage: 1,
    itemsPerPage: 12,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [mostrandoFavoritos, setMostrandoFavoritos] = useState(false);

  // Mobile overlay states
  const [mapOpenMobile, setMapOpenMobile] = useState(false);
  const [filtersMobileOpen, setFiltersMobileOpen] = useState(false);

  const [isBrowser, setIsBrowser] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  // Estados para integração com o mapa
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [isMapFilterActive, setIsMapFilterActive] = useState(false);
  const lastFetchParams = useRef(null);
  const pageDataCacheRef = useRef(new Map());
  const desktopScrollRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const prevMostrandoFavoritos = useRef(false);

  const effectiveImoveis = useMemo(() => {
    if (!isMapFilterActive) return imoveis;
    if (!Array.isArray(filteredImoveis) || filteredImoveis.length === 0) return imoveis;
    return filteredImoveis;
  }, [filteredImoveis, imoveis, isMapFilterActive]);

  // Imóveis para o mapa - sempre mostra todos os resultados da busca/filtro, não paginado
  const imoveisParaMapa = useMemo(() => {
    // Se está em busca por termo, retorna todos os resultados da busca (não paginado)
    if (searchTerm && searchTerm.trim()) {
      return imoveis;
    }
    
    // Se está com seleção de mapa ativa, mostra apenas os selecionados
    if (isMapFilterActive && Array.isArray(filteredImoveis) && filteredImoveis.length > 0) {
      return filteredImoveis;
    }
    
    // Caso padrão: mostra todos os imóveis
    return imoveis;
  }, [imoveis, filteredImoveis, isMapFilterActive, searchTerm]);

  const effectivePagination = useMemo(() => {
    const itemsPerPage = pagination.itemsPerPage || pagination.limit || 12;
    const basePagination = {
      ...pagination,
      itemsPerPage,
      limit: itemsPerPage,
      currentPage,
    };

    // Se está buscando por termo, usar paginação client-side
    if (searchTerm && searchTerm.trim()) {
      const totalItems = imoveis.length;
      const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
      const safeCurrentPage = Math.min(currentPage, totalPages);

      return {
        ...basePagination,
        totalItems,
        totalPages,
        currentPage: safeCurrentPage,
      };
    }

    if (!isMapFilterActive) {
      return basePagination;
    }

    const totalItems = Array.isArray(filteredImoveis) ? filteredImoveis.length : 0;
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    const safeCurrentPage = Math.min(basePagination.currentPage, totalPages);

    return {
      ...basePagination,
      totalItems,
      totalPages,
      currentPage: safeCurrentPage,
    };
  }, [currentPage, filteredImoveis, isMapFilterActive, pagination, imoveis, searchTerm]);

  const clearMapSelection = useCallback(() => {
    setFilteredImoveis([]);
    setIsMapFilterActive(false);
    setSelectedCluster(null);
    setSelectedProperty(null);
  }, []);

  const scrollToResultsTop = useCallback(() => {
    if (typeof window === "undefined") return;

    const mobileNode = mobileScrollRef.current;
    const desktopNode = desktopScrollRef.current;

    if (mobileNode && mobileNode.offsetParent !== null) {
      mobileNode.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        if (mobileScrollRef.current) {
          mobileScrollRef.current.scrollTop = 0;
        }
      }, 100);
      return;
    }

    if (desktopNode && desktopNode.offsetParent !== null) {
      desktopNode.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        if (desktopScrollRef.current) {
          desktopScrollRef.current.scrollTop = 0;
        }
      }, 100);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }, []);

  const mapPropertiesToImoveis = useCallback(
    (properties) => {
      if (!Array.isArray(properties) || properties.length === 0) return [];

      const ids = new Set();
      properties.forEach((property) => {
        [property?.Codigo, property?._id, property?.id, property?.IdImovel]
          .filter((value) => value !== undefined && value !== null && value !== "")
          .forEach((value) => ids.add(String(value)));
      });

      const matches = imoveis.filter((imovel) =>
        [imovel?.Codigo, imovel?._id, imovel?.id, imovel?.IdImovel]
          .filter((value) => value !== undefined && value !== null && value !== "")
          .some((value) => ids.has(String(value)))
      );

      if (matches.length === 0) {
        return properties.filter((item) =>
          [item?.Codigo, item?._id, item?.id, item?.IdImovel]
            .some((value) => value !== undefined && value !== null && value !== "")
        );
      }

      return matches;
    },
    [imoveis]
  );

  const handlePropertySelect = useCallback(
    (property) => {
      if (!property) {
        clearMapSelection();
        return;
      }

      const normalized = mapPropertiesToImoveis([property]);
      const result = normalized.length > 0 ? normalized : [property];

      setSelectedCluster(null);
      setSelectedProperty(result[0] ?? null);
      setFilteredImoveis(result);
      setIsMapFilterActive(true);
    },
    [clearMapSelection, mapPropertiesToImoveis]
  );

  const handleClusterSelect = useCallback(
    (properties) => {
      if (!Array.isArray(properties) || properties.length === 0) {
        clearMapSelection();
        return;
      }

      const normalized = mapPropertiesToImoveis(properties);
      const result = normalized.length > 0 ? normalized : properties;

      setSelectedProperty(null);
      setSelectedCluster(result);
      setFilteredImoveis(result);
      setIsMapFilterActive(true);
    },
    [clearMapSelection, mapPropertiesToImoveis]
  );

  /* ================= META + STRUCTURED DATA ================= */
  const updateStructuredData = (totalItems = 0, imoveisData = []) => {
    if (typeof document === "undefined") return;
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://npiconsultoria.com.br";
    const currentDate = new Date().toISOString();

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "SearchResultsPage",
          "@id": `${baseUrl}/busca#webpage`,
          url:
            typeof window !== "undefined"
              ? window.location.href
              : `${baseUrl}/busca`,
          name: document.title,
          datePublished: currentDate,
          dateModified: currentDate,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: totalItems,
            itemListElement: imoveisData.slice(0, 10).map((imovel, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "RealEstateAgent",
                name: imovel.NomeImovel || `Imóvel ${imovel.Codigo}`,
                url: `${baseUrl}/imovel/${imovel.Codigo}`,
                image:
                  imovel.Foto1 || `${baseUrl}/assets/default-property.jpg`,
                offers: {
                  "@type": "Offer",
                  price: imovel.ValorNumerico || 0,
                  priceCurrency: "BRL",
                  availability: "https://schema.org/InStock",
                },
                address: {
                  "@type": "PostalAddress",
                  addressLocality: imovel.Cidade || "São Paulo",
                  addressRegion: "SP",
                  addressCountry: "BR",
                },
              },
            })),
          },
        },
      ],
    };

    script.textContent = JSON.stringify(structuredData);
  };

  const updateClientMetaTags = (quantidadeResultados = null) => {
    if (typeof window === "undefined") return;

    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://npiconsultoria.com.br";
    const currentDate = new Date().toISOString();
    const fs = useFiltersStore.getState();

    const plural = {
      Apartamento: "Apartamentos",
      Casa: "Casas",
      "Casa Comercial": "Casas comerciais",
      "Casa em Condominio": "Casas em condomínio",
      Cobertura: "Coberturas",
      Flat: "Flats",
      Garden: "Gardens",
      Loft: "Lofts",
      Loja: "Lojas",
      "Prédio Comercial": "Prédios comerciais",
      "Sala Comercial": "Salas comerciais",
      Sobrado: "Sobrados",
      Terreno: "Terrenos",
    };

    const tParts = [];
    if (fs.categoriaSelecionada)
      tParts.push(plural[fs.categoriaSelecionada] || "Imóveis");
    else tParts.push("Imóveis");
    const finalidadeRotulo = obterRotuloFinalidade(fs.finalidade);
    if (finalidadeRotulo === "Comprar") tParts.push("a venda");
    else if (finalidadeRotulo === "Alugar") tParts.push("para aluguel");
    if (fs.cidadeSelecionada) tParts.push(`no ${fs.cidadeSelecionada}`);

    const qtd =
      quantidadeResultados !== null ? quantidadeResultados : pagination.totalItems;
    const title = `${tParts.join(" ")}${qtd ? ` ${qtd} imóveis` : ""}`.trim();
    const description = `Especialistas em ${tParts.join(" ")}. NPi`;

    document.title = title;

    const ensureMeta = (attr, value, isProp = false) => {
      const selector = isProp ? `meta[property="${attr}"]` : `meta[name="${attr}"]`;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        if (isProp) tag.setAttribute("property", attr);
        else tag.setAttribute("name", attr);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    ensureMeta("title", title);
    ensureMeta("description", description);
    ensureMeta("og:title", title, true);
    ensureMeta("og:description", description, true);
    ensureMeta("og:type", "website", true);
    ensureMeta("og:site_name", "NPi Imóveis", true);
    ensureMeta("og:updated_time", currentDate, true);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }

    const siteBaseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.npiconsultoria.com.br";
    const canonicalUrl = new URL(window.location.pathname, siteBaseUrl);
    const rawParams = new URLSearchParams(window.location.search);

    const trackingPrefixes = ["utm_"];
    const trackingExact = new Set([
      "fbclid",
      "gclid",
      "ref",
      "v",
      "cache",
      "t",
      "_rsc",
      "emp_cod_end",
    ]);

    const normalizeValue = (value) => {
      if (!value) return "";
      const trimmed = value.trim();
      if (!trimmed) return "";
      try {
        return decodeURIComponent(trimmed);
      } catch {
        return trimmed;
      }
    };

    const singleValues = new Map();
    const multiValues = new Map();
    const arrayKeyRegex = /^([a-zA-Z]+)\[(\d*)\]$/;

    const normalizeKeyName = (rawKey) => {
      if (!rawKey) return "";
      const lower = rawKey.toLowerCase();
      switch (lower) {
        case "page":
        case "pagina":
          return "pagina";
        case "tipo":
        case "categoria":
          return "categoria";
        case "bairro":
        case "bairros":
          return "bairros";
        case "quarto":
        case "quartos":
          return "quartos";
        case "precomin":
        case "preco_min":
        case "preco-min":
          return "precoMin";
        case "precomax":
        case "preco_max":
        case "preco-max":
          return "precoMax";
        default:
          return lower;
      }
    };

    rawParams.forEach((rawValue, rawKey) => {
      if (!rawKey) {
        return;
      }

      let key = rawKey;
      const lowerKey = key.toLowerCase();

      if (trackingPrefixes.some((prefix) => lowerKey.startsWith(prefix))) {
        return;
      }
      if (trackingExact.has(lowerKey)) {
        return;
      }

      let value = normalizeValue(rawValue);

      const arrayMatch = arrayKeyRegex.exec(key);
      if (arrayMatch) {
        key = arrayMatch[1];
      }

      const normalizedKey = normalizeKeyName(key);

      if (!value) {
        if (["pagina", "listagem", "ordenar"].includes(normalizedKey)) {
          return;
        }
        return;
      }

      if (normalizedKey === "pagina" && (value === "1" || value === "0")) {
        return;
      }

      if (normalizedKey === "bairros") {
        const existing = multiValues.get("bairros") || [];
        if (!existing.includes(value)) {
          existing.push(value);
          multiValues.set("bairros", existing);
        }
        return;
      }

      if (!singleValues.has(normalizedKey)) {
        singleValues.set(normalizedKey, value);
      }
    });

    const canonicalOrder = [
      "cidade",
      "finalidade",
      "categoria",
      "bairros",
      "quartos",
      "precoMin",
      "precoMax",
      "q",
      "pagina",
      "listagem",
      "ordenar",
    ];

    const finalParams = new URLSearchParams();

    canonicalOrder.forEach((key) => {
      if (key === "bairros") {
        const bairros = multiValues.get("bairros");
        if (bairros && bairros.length) {
          bairros.forEach((bairro) => finalParams.append("bairros", bairro));
        }
        return;
      }

      if (singleValues.has(key)) {
        finalParams.set(key, singleValues.get(key));
        singleValues.delete(key);
      }
    });

    singleValues.forEach((value, key) => {
      finalParams.set(key, value);
    });

    const finalSearch = finalParams.toString();
    canonicalUrl.search = finalSearch ? `?${finalSearch}` : "";

    canonicalLink.setAttribute("href", canonicalUrl.toString());
    
    // CRITICAL FIX: Add noindex for invalid pagination (page exceeds totalPages)
    // This prevents soft 404s when Google crawls out-of-range pages
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    
    // Check if current page exceeds total pages
    const currentPageNum = parseInt(pagina || "1", 10);
    const totalPages = pagination?.totalPages || 1;
    
    if (currentPageNum > totalPages && totalPages > 0) {
      robotsMeta.setAttribute("content", "noindex, nofollow");
    } else {
      robotsMeta.setAttribute("content", "index, follow");
    }
  };

  const obterTokenFinalidade = (valor) => {
    if (!valor) return "";
    const normalizado = valor.toString().trim().toLowerCase();
    if (["comprar", "venda"].includes(normalizado)) return "venda";
    if (["alugar", "aluguel", "locacao", "locação"].includes(normalizado)) return "locacao";
    return "";
  };

  const obterRotuloFinalidade = (valor) => {
    const token = obterTokenFinalidade(valor);
    if (token === "locacao") return "Alugar";
    if (token === "venda") return "Comprar";
    return "";
  };

  /* ======================== URL / SEO HELPERS ======================== */
  const normalizarCidade = (cidade) => {
    if (!cidade) return null;
    const m = {
      guaruja: "Guarujá",
      "guarujá": "Guarujá",
      guaruja_: "Guarujá",
      "sao-paulo": "São Paulo",
      "sao_paulo": "São Paulo",
      "santo-andre": "Santo André",
      santos: "Santos",
      "praia-grande": "Praia Grande",
      bertioga: "Bertioga",
      mongagua: "Mongaguá",
      "mongaguá": "Mongaguá",
      ubatuba: "Ubatuba",
      caraguatatuba: "Caraguatatuba",
      "sao-sebastiao": "São Sebastião",
      ilhabela: "Ilhabela",
    };
    const k = cidade.toLowerCase();
    if (m[k]) return m[k];
    return cidade
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())
      .trim();
  };

  const extractFromSeoUrl = () => {
    if (typeof window === "undefined") return null;
    const path = window.location.pathname;
    const m = path.match(/\/buscar?\/([^/]+)\/([^/]+)\/([^/]+)(?:\/([^/]+))?/);
    if (!m) return null;

    const [, finalidade, categoria, cidade, bairro] = m;

    const finalidadeToken = obterTokenFinalidade(finalidade);
    const finalidadeStore = finalidadeToken === "locacao" ? "Alugar" : "Comprar";

    const singular = {
      apartamentos: "Apartamento",
      casas: "Casa",
      coberturas: "Cobertura",
      terrenos: "Terreno",
      flats: "Flat",
      gardens: "Garden",
      lofts: "Loft",
      lojas: "Loja",
      sobrados: "Sobrado",
    };
    const categoriaStore =
      singular[categoria.toLowerCase()] ||
      categoria.charAt(0).toUpperCase() + categoria.slice(1);

    return {
      finalidade: finalidadeStore,
      categoria: categoriaStore,
      cidade: normalizarCidade(cidade),
      bairro: bairro ? normalizarCidade(bairro) : null,
    };
  };

  const updateUrlFromFilters = () => {
    const s = useFiltersStore.getState();
    if (s.cidadeSelecionada && s.finalidade && s.categoriaSelecionada) {
      const url = gerarUrlSeoFriendly(s);
      // Garantir que só atualizamos URL se for válida e diferente da atual
      if (url && url !== '/busca' && typeof window !== 'undefined') {
        const currentPath = window.location.pathname + window.location.search;
        if (currentPath !== url) {
          router.replace(url);
        }
      } else if (url === '/busca') {
        // Se gerarUrlSeoFriendly retornou /busca, usar query params
        const params = new URLSearchParams();
        if (typeof window !== "undefined") {
          const existingParams = new URLSearchParams(window.location.search);
          const preserveKeys = ["listagem", "ordenar", "pagina"];
          preserveKeys.forEach((key) => {
            const existingValue = existingParams.get(key);
            if (existingValue && !params.has(key)) {
              params.set(key, existingValue);
            }
          });
        }
        if (s.cidadeSelecionada) params.set("cidade", s.cidadeSelecionada);
        if (s.finalidade) params.set("finalidade", s.finalidade);
        if (s.categoriaSelecionada) params.set("categoria", s.categoriaSelecionada);
        if (s.bairrosSelecionados?.length)
          params.set("bairros", s.bairrosSelecionados.join(","));
        if (s.quartos) params.set("quartos", s.quartos);
        if (s.precoMin) params.set("precoMin", s.precoMin);
        if (s.precoMax) params.set("precoMax", s.precoMax);

        const newUrl = params.toString() ? `/busca?${params.toString()}` : "/busca";
        if (typeof window !== 'undefined') {
          const currentPath = window.location.pathname + window.location.search;
          if (currentPath !== newUrl) {
            router.replace(newUrl);
          }
        }
      }
    } else {
      // Filtros básicos incompletos - usar query params
      const params = new URLSearchParams();
      if (typeof window !== "undefined") {
        const existingParams = new URLSearchParams(window.location.search);
        const preserveKeys = ["listagem", "ordenar", "pagina"];
        preserveKeys.forEach((key) => {
          const existingValue = existingParams.get(key);
          if (existingValue && !params.has(key)) {
            params.set(key, existingValue);
          }
        });
      }
      if (s.cidadeSelecionada) params.set("cidade", s.cidadeSelecionada);
      if (s.finalidade) params.set("finalidade", s.finalidade);
      if (s.categoriaSelecionada) params.set("categoria", s.categoriaSelecionada);
      if (s.bairrosSelecionados?.length)
        params.set("bairros", s.bairrosSelecionados.join(","));
      if (s.quartos) params.set("quartos", s.quartos);
      if (s.precoMin) params.set("precoMin", s.precoMin);
      if (s.precoMax) params.set("precoMax", s.precoMax);

      router.replace(params.toString() ? `/busca?${params.toString()}` : "/busca");
    }
  };

  /* ======================== BUSCA ======================== */

  const applyListingResult = (
    input,
    {
      pageToFetch = 1,
      pageOverride = null,
      registerCache = false,
    } = {}
  ) => {
    const listaImoveis = Array.isArray(input?.imoveis) ? input.imoveis : [];

    if (!isMapFilterActive) {
      clearMapSelection();
    }

    if (listaImoveis.length > 0) {
      setImoveis(listaImoveis);
      setFilteredImoveis((prev) => {
        if (isMapFilterActive && Array.isArray(prev) && prev.length > 0) {
          return prev;
        }
        return listaImoveis;
      });

      if (registerCache) {
        adicionarVariosImoveisCache(listaImoveis);
      }
    } else {
      setImoveis([]);
      if (!isMapFilterActive) {
        setFilteredImoveis([]);
      }
    }

    let paginationToUse;
    if (input && input.pagination) {
      const itemsPerPage =
        Number(input.pagination.itemsPerPage || input.pagination.limit) || 12;
      paginationToUse = {
        totalItems:
          Number(input.pagination.totalItems) ||
          (Array.isArray(listaImoveis) ? listaImoveis.length : 0),
        totalPages: Number(input.pagination.totalPages) || 1,
        currentPage:
          Number(input.pagination.currentPage) || pageToFetch,
        itemsPerPage,
        limit: itemsPerPage,
      };
    } else {
      const totalLocal = Array.isArray(listaImoveis) ? listaImoveis.length : 0;
      paginationToUse = {
        totalItems: totalLocal,
        totalPages: Math.max(1, Math.ceil(totalLocal / 12)),
        currentPage: pageToFetch,
        itemsPerPage: 12,
        limit: 12,
      };
    }

    setPagination(paginationToUse);

    if (pageOverride !== null) {
      setCurrentPage(paginationToUse.currentPage || pageToFetch);
    }

    const totalItemsMeta = paginationToUse.totalItems ?? listaImoveis.length;
    
    // CRITICAL FIX: Validate pagination after setting it
    // If current page exceeds totalPages and we have results, this is invalid
    if (paginationToUse.currentPage > paginationToUse.totalPages && paginationToUse.totalPages > 0) {
      console.log(`[BUSCA] Invalid pagination: page ${paginationToUse.currentPage} > totalPages ${paginationToUse.totalPages}`);
      // This will be handled by the redirect logic in buscarImoveis
    }
    
    updateStructuredData(totalItemsMeta, listaImoveis);
    setTimeout(() => updateClientMetaTags(totalItemsMeta), 50);

    return {
      imoveis: listaImoveis,
      pagination: paginationToUse,
    };
  };

  const buildPriceParams = (isRent, min, max) => {
    const out = {};
    const hasMin = min !== null && min !== undefined && min !== "" && Number(min) > 0;
    const hasMax = max !== null && max !== undefined && max !== "" && Number(max) > 0;

    if (!hasMin && !hasMax) return out;

    if (isRent) {
      if (hasMin) {
        out.precoAluguelMin = String(min);
        out.valorAluguelMin = String(min);
        out.aluguelMin = String(min);
        out.precoMinimo = String(min);
      }
      if (hasMax) {
        out.precoAluguelMax = String(max);
        out.valorAluguelMax = String(max);
        out.aluguelMax = String(max);
        out.precoMaximo = String(max);
      }
    } else {
      if (hasMin) {
        out.precoMinimo = String(min);
        out.precoMin = String(min);
        out.valorMin = String(min);
      }
      if (hasMax) {
        out.precoMaximo = String(max);
        out.precoMax = String(max);
        out.valorMax = String(max);
      }
    }
    return out;
  };

  const buscarImoveis = async (
    comFiltros = false,
    {
      page: pageOverride = null,
      ordenacao: ordenacaoPersonalizada = null,
    } = {}
  ) => {
    if (mostrandoFavoritos) return;

    const pageToFetch = pageOverride ?? currentPage;
    const ordenacaoAtual = ordenacaoPersonalizada || ordenacao;
    const filtrosStore = comFiltros ? useFiltersStore.getState() : null;

    const filtroSnapshot = comFiltros
      ? {
          categoria: filtrosStore?.categoriaSelecionada || null,
          cidade: filtrosStore?.cidadeSelecionada || null,
          bairros: Array.isArray(filtrosStore?.bairrosSelecionados)
            ? [...filtrosStore.bairrosSelecionados]
            : [],
          finalidade: filtrosStore?.finalidade || null,
          quartos: filtrosStore?.quartos || null,
          banheiros: filtrosStore?.banheiros || null,
          vagas: filtrosStore?.vagas || null,
          precoMin: filtrosStore?.precoMin || null,
          precoMax: filtrosStore?.precoMax || null,
          areaMin: filtrosStore?.areaMin || null,
          areaMax: filtrosStore?.areaMax || null,
          abaixoMercado: Boolean(filtrosStore?.abaixoMercado),
          proximoMetro: Boolean(filtrosStore?.proximoMetro),
        }
      : null;

    const requestKey = JSON.stringify({
      comFiltros,
      page: pageToFetch,
      ordenacao: ordenacaoAtual,
      filtros: filtroSnapshot,
    });

    const cachedEntry = pageDataCacheRef.current.get(requestKey);
    if (cachedEntry && Date.now() - cachedEntry.timestamp < PAGE_CACHE_DURATION) {
      applyListingResult(cachedEntry.payload, {
        pageToFetch,
        pageOverride,
        registerCache: false,
      });
      setIsLoading(false);
      setFetchingData(false);
      lastFetchParams.current = null;
      return;
    }

    if (fetchingData || lastFetchParams.current === requestKey) {
      return;
    }

    lastFetchParams.current = requestKey;
    setFetchingData(true);
    setIsLoading(true);

    try {
      let params = {};
      if (comFiltros && filtrosStore) {
        const finalidadeToken = obterTokenFinalidade(filtrosStore.finalidade || "");
        const isRent = finalidadeToken === "locacao";

        params = {
          categoria: filtrosStore.categoriaSelecionada || undefined,
          cidade: filtrosStore.cidadeSelecionada || undefined,
          quartos: filtrosStore.quartos || undefined,
          banheiros: filtrosStore.banheiros || undefined,
          vagas: filtrosStore.vagas || undefined,
        };

        if (
          Array.isArray(filtrosStore.bairrosSelecionados) &&
          filtrosStore.bairrosSelecionados.length > 0
        ) {
          params.bairrosArray = filtrosStore.bairrosSelecionados;
        }

        // Só adicionar finalidade se foi explicitamente selecionada
        if (finalidadeToken) {
          if (isRent) {
            params.finalidade = "locacao";
            params.status = "locacao";
            params.tipoNegocio = "locacao";
            params.negocio = "locacao";
            params.modalidade = "locacao";
          } else if (finalidadeToken === "venda" || finalidadeToken === "comprar") {
            params.finalidade = "venda";
            params.status = "venda";
            params.tipoNegocio = "venda";
          }
        }
        // Se finalidadeToken estiver vazio, não adiciona nada (busca em todos)

        Object.assign(params, buildPriceParams(isRent, filtrosStore.precoMin, filtrosStore.precoMax));

        if (filtrosStore.areaMin && filtrosStore.areaMin !== "0") {
          params.areaMinima = filtrosStore.areaMin;
        }
        if (filtrosStore.areaMax && filtrosStore.areaMax !== "0") {
          params.areaMaxima = filtrosStore.areaMax;
        }

        if (filtrosStore.abaixoMercado) params.apenasCondominios = true;
        if (filtrosStore.proximoMetro) params.proximoMetro = true;
      }

      const sortParams = SORTING_RULES[ordenacaoAtual] || SORTING_RULES.relevancia;
      const paramsComOrdenacao = {
        ...params,
        sortField: sortParams.sortField,
        sortOrder: sortParams.sortOrder,
      };

      const response = await getImoveis(paramsComOrdenacao, pageToFetch, 12);
      const processed = applyListingResult(response, {
        pageToFetch,
        pageOverride,
        registerCache: true,
      });

      // CRITICAL FIX: Validate pagination - if requested page exceeds totalPages, redirect to last valid page
      if (processed.pagination && processed.pagination.totalPages > 0) {
        const requestedPage = pageToFetch;
        const totalPages = processed.pagination.totalPages;
        
        if (requestedPage > totalPages) {
          console.log(`[BUSCA] Página ${requestedPage} excede totalPages ${totalPages} → Redirecionando para página ${totalPages}`);
          
          // Update URL to last valid page
          if (typeof window !== "undefined") {
            const url = new URL(window.location.href);
            url.searchParams.set("pagina", totalPages.toString());
            // Use replace to avoid adding to history
            window.history.replaceState({}, "", url.toString());
          }
          
          // Fetch last valid page instead
          const lastPageResponse = await getImoveis(paramsComOrdenacao, totalPages, 12);
          const lastPageProcessed = applyListingResult(lastPageResponse, {
            pageToFetch: totalPages,
            pageOverride: totalPages,
            registerCache: true,
          });
          
          pageDataCacheRef.current.set(requestKey, {
            timestamp: Date.now(),
            payload: lastPageProcessed,
          });
          return;
        }
      }

      pageDataCacheRef.current.set(requestKey, {
        timestamp: Date.now(),
        payload: processed,
      });
    } catch (error) {
      console.error("Erro ao buscar imóveis:", error);
      if (!isMapFilterActive) {
        clearMapSelection();
      }
      setImoveis([]);
      if (!isMapFilterActive) {
        setFilteredImoveis([]);
      }
      setPagination({
        totalItems: 0,
        totalPages: 1,
        currentPage: 1,
        itemsPerPage: 12,
        limit: 12,
      });
      updateStructuredData(0, []);
      lastFetchParams.current = null;
    } finally {
      setIsLoading(false);
      setFetchingData(false);
      lastFetchParams.current = null;
    }
  };

  /* ======================== INITIAL LOAD ======================== */
  useEffect(() => {
    if (!initialLoad) return;
    setIsBrowser(true);

    const seoParams = extractFromSeoUrl();

    const searchParams =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search)
        : new URLSearchParams();
    const getParamValue = (param) => {
      const value = searchParams.get(param);
      return value && value.trim() !== "" ? value : null;
    };

    const collectArrayParamValues = (baseName) => {
      const values = [];
      const candidateKeys = [
        baseName,
        `${baseName}s`,
        `${baseName}[]`,
        `${baseName}s[]`
      ];

      searchParams.forEach((rawValue, key) => {
        if (!rawValue || rawValue.trim() === "") {
          return;
        }

        if (candidateKeys.includes(key)) {
          // Keys ending with [] should be treated as individual entries
          if (key.endsWith("[]")) {
            values.push(rawValue.trim());
            return;
          }

          rawValue
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean)
            .forEach((item) => values.push(item));
        }
      });

      // Deduplicate while preserving order
      return Array.from(new Set(values));
    };

    const cidade = getParamValue("cidade");
    const finalidade = getParamValue("finalidade");
    const categoria = getParamValue("categoria");
    // CRITICAL FIX: Support 'tipo' parameter (maps to 'categoria')
    const tipo = getParamValue("tipo");
    const categoriaFinal = categoria || tipo;
    const bairrosSelecionadosUrl = collectArrayParamValues("bairro");
    const quartosArrayUrl = collectArrayParamValues("quarto");
    const quartos = getParamValue("quartos") || getParamValue("quarto") || quartosArrayUrl[0] || null;
    const precoMin = getParamValue("precoMin");
    const precoMax = getParamValue("precoMax");
    const searchQuery = searchParams.get("q");
    const mostrarFavoritos = searchParams.get("favoritos") === "true";
    // CRITICAL FIX: Read pagina parameter from URL (supports both 'pagina' and 'page')
    const paginaFromUrl = searchParams.get("pagina") || searchParams.get("page");
    const initialPage = paginaFromUrl ? Math.max(1, parseInt(paginaFromUrl, 10) || 1) : 1;

    if (
      seoParams ||
      cidade ||
      finalidade ||
      categoriaFinal ||
      bairrosSelecionadosUrl.length > 0 ||
      quartos ||
      precoMin ||
      precoMax
    ) {
      const filtrosParaAplicar = {};
      if (seoParams) {
        filtrosParaAplicar.cidadeSelecionada = seoParams.cidade;
        filtrosParaAplicar.finalidade = seoParams.finalidade;
        filtrosParaAplicar.categoriaSelecionada = seoParams.categoria;
        if (seoParams.bairro) filtrosParaAplicar.bairrosSelecionados = [seoParams.bairro];
      } else {
        if (cidade) filtrosParaAplicar.cidadeSelecionada = normalizarCidade(cidade);
        if (finalidade) filtrosParaAplicar.finalidade = finalidade;
        if (categoriaFinal) filtrosParaAplicar.categoriaSelecionada = categoriaFinal;
        if (bairrosSelecionadosUrl.length > 0) {
          filtrosParaAplicar.bairrosSelecionados = bairrosSelecionadosUrl;
        }
      }
      if (quartos) filtrosParaAplicar.quartos = parseInt(quartos);
      if (precoMin) filtrosParaAplicar.precoMin = parseFloat(precoMin);
      if (precoMax) filtrosParaAplicar.precoMax = parseFloat(precoMax);

      // CRITICAL FIX: Set initial page from URL
      setCurrentPage(initialPage);

      const store = useFiltersStore.getState();
      store.limparFiltros();
      setTimeout(() => {
        store.setFilters(filtrosParaAplicar);
        store.aplicarFiltros();
        setTimeout(() => {
          buscarImoveis(true, { page: initialPage });
          setInitialLoad(false);
        }, 80);
      }, 50);
    } else if (searchQuery) {
      // CRITICAL FIX: Set initial page from URL for search queries
      setCurrentPage(initialPage);
      setSearchTerm(searchQuery);
      setTimeout(() => {
        handleSearch(searchQuery);
        setInitialLoad(false);
      }, 60);
    } else {
      // CORRIGIDO: Verificar se há filtros já aplicados no store (ex: vindos de action-section)
      const store = useFiltersStore.getState();
      
      // Verifica se algum filtro está ativo no store
      const hasFilters = 
        store.finalidade ||
        store.categoriaSelecionada ||
        store.cidadeSelecionada ||
        (Array.isArray(store.bairrosSelecionados) && store.bairrosSelecionados.length > 0) ||
        store.quartos ||
        store.banheiros ||
        store.vagas ||
        store.precoMin ||
        store.precoMax ||
        (store.areaMin && store.areaMin > 0) ||
        (store.areaMax && store.areaMax > 0) ||
        store.abaixoMercado ||
        store.proximoMetro;
      
      // CRITICAL FIX: Set initial page from URL
      setCurrentPage(initialPage);
      
      setTimeout(() => {
        buscarImoveis(Boolean(hasFilters), { page: initialPage });
        setInitialLoad(false);
      }, 60);
    }

    // Se veio com parâmetro favoritos=true, ativar visualização de favoritos
    if (mostrarFavoritos) {
      setTimeout(() => {
        setMostrandoFavoritos(true);
      }, 100);
    }

    setTimeout(() => updateClientMetaTags(), 300);
  }, [initialLoad]);

  // Buscar favoritos quando o toggle é ativado ou restaurar listagem normal
  useEffect(() => {
    // Detectar transição: estava false e agora é true (ATIVANDO favoritos)
    const ativandoFavoritos = !prevMostrandoFavoritos.current && mostrandoFavoritos;
    // Detectar transição: estava true e agora é false (DESATIVANDO favoritos)
    const desativandoFavoritos = prevMostrandoFavoritos.current && !mostrandoFavoritos;

    if (ativandoFavoritos) {
      // Limpar filtros visuais apenas quando ATIVAR favoritos
      useFiltersStore.getState().limparFiltros();
      setSearchTerm("");
      clearMapSelection();
      
      const buscarFavoritos = async () => {
        setIsLoading(true);
        try {
          const codigos = favoritos.map(f => f.Codigo);
          const response = await getImoveisFavoritos(codigos);
          
          setImoveis(response.imoveis || []);
          setFilteredImoveis([]);
          setPagination(response.pagination || {
            totalItems: 0,
            totalPages: 1,
            currentPage: 1,
            itemsPerPage: 0,
          });
          updateStructuredData(response.imoveis?.length || 0, response.imoveis || []);
        } catch (error) {
          console.error("Erro ao buscar favoritos:", error);
          setImoveis([]);
          setPagination({
            totalItems: 0,
            totalPages: 1,
            currentPage: 1,
            itemsPerPage: 0,
          });
        } finally {
          setIsLoading(false);
        }
      };
      
      buscarFavoritos();
    } else if (desativandoFavoritos) {
      // Quando desativar favoritos, recarregar a listagem normal
      const hasFiltros = verificarSePossuiFiltros();
      buscarImoveis(hasFiltros, { page: 1 });
      setCurrentPage(1);
    }

    // Atualizar ref com o valor atual
    prevMostrandoFavoritos.current = mostrandoFavoritos;
  }, [mostrandoFavoritos]);

  useEffect(() => {
    if (initialLoad || !filtrosAplicados || mostrandoFavoritos) return;
    clearMapSelection();
    setCurrentPage(1);
    const possuiFiltros = verificarSePossuiFiltros();
    buscarImoveis(possuiFiltros, { page: 1 });
  }, [filtrosAplicados, atualizacoesFiltros, initialLoad]);


  useEffect(() => {
    if (!isBrowser || initialLoad) return;
    const s = useFiltersStore.getState();
    if (s.filtrosAplicados) setTimeout(updateUrlFromFilters, 80);
  }, [atualizacoesFiltros, isBrowser, initialLoad]);

  useEffect(() => {
    if (isBrowser && !isLoading && pagination.totalItems >= 0) {
      setTimeout(() => updateClientMetaTags(pagination.totalItems), 80);
    }
  }, [isBrowser, isLoading, pagination.totalItems]);

  useEffect(() => {
    if (mapOpenMobile) {
      const prev = document.body.style.overflow;
      document.body.dataset.prevOverflow = prev || "";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = document.body.dataset.prevOverflow || "";
      };
    }
  }, [mapOpenMobile]);

  const verificarSePossuiFiltros = () => {
    const store = useFiltersStore.getState();
    
    // Verifica se algum filtro está ativo
    const temFiltros = 
      store.finalidade ||
      store.categoriaSelecionada ||
      store.cidadeSelecionada ||
      (Array.isArray(store.bairrosSelecionados) && store.bairrosSelecionados.length > 0) ||
      store.quartos ||
      store.banheiros ||
      store.vagas ||
      store.precoMin ||
      store.precoMax ||
      (store.areaMin && store.areaMin > 0) ||
      (store.areaMax && store.areaMax > 0) ||
      store.abaixoMercado ||
      store.proximoMetro;
    
    return Boolean(temFiltros);
  };

  const handlePageChange = (newPage) => {
    if (fetchingData) return;

    const clampedPage = isMapFilterActive
      ? Math.max(1, Math.min(newPage, effectivePagination.totalPages || 1))
      : newPage;

    if (clampedPage === currentPage) return;

    scrollToResultsTop();

    setCurrentPage(clampedPage);

    // Se há termo de busca ativo, a paginação é client-side (não busca novamente)
    // Se não há termo de busca e não está em favoritos/mapa, busca no servidor
    if (!isMapFilterActive && !mostrandoFavoritos && !searchTerm.trim()) {
      const possuiFiltros = verificarSePossuiFiltros();
      buscarImoveis(possuiFiltros, { page: clampedPage });
    }

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSearch = async (term) => {
    useFiltersStore.getState().limparFiltros();
    clearMapSelection();
    
    // Resetar página e limpar cache
    setCurrentPage(1);
    pageDataCacheRef.current.clear();

    if (!term || term.trim() === "") {
      setSearchTerm("");
      buscarImoveis(false);
      return;
    }

    setIsLoading(true);
    clearMapSelection();
    try {
      const response = await searchImoveis(term);
      if (response && response.data) {
        clearMapSelection();
        setImoveis(response.data);
        setFilteredImoveis([]);
        const p = {
          totalItems: response.data.length,
          totalPages: Math.ceil(response.data.length / 12),
          currentPage: 1,
          itemsPerPage: 12,
          limit: 12,
        };
        setPagination(p);
        if (Array.isArray(response.data) && response.data.length > 0) {
          adicionarVariosImoveisCache(response.data);
        }
        updateStructuredData(response.data.length, response.data);
        setTimeout(() => updateClientMetaTags(response.data.length), 50);
      } else {
        clearMapSelection();
        setImoveis([]);
        setFilteredImoveis([]);
        setPagination({
          totalItems: 0,
          totalPages: 1,
          currentPage: 1,
          itemsPerPage: 12,
          limit: 12,
        });
        updateStructuredData(0, []);
      }
    } catch {
      clearMapSelection();
      setImoveis([]);
      setFilteredImoveis([]);
      setPagination({
        totalItems: 0,
        totalPages: 1,
        currentPage: 1,
        itemsPerPage: 12,
        limit: 12,
      });
      updateStructuredData(0, []);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleSearchSubmit = (term) => {
    const trimmed = typeof term === "string" ? term.trim() : "";
    
    // Sempre atualizar o termo e forçar nova busca
    setSearchTerm(trimmed);
    
    // Limpar estados anteriores para forçar nova busca
    setCurrentPage(1);
    pageDataCacheRef.current.clear();
    
    handleSearch(trimmed);
  };

  const handleOrdenacaoChange = (valor) => {
    if (fetchingData) return;

    const proximaOrdenacao = SORTING_RULES[valor] ? valor : "relevancia";
    const possuiFiltros = verificarSePossuiFiltros();

    if (proximaOrdenacao === ordenacao && currentPage === 1 && !isLoading) {
      return;
    }

    setOrdenacao(proximaOrdenacao);
    setCurrentPage(1);

    if (initialLoad) return;

    // Se há termo de busca ativo, não refaz a busca (ordenação será client-side)
    if (!searchTerm || !searchTerm.trim()) {
      buscarImoveis(possuiFiltros, {
        page: 1,
        ordenacao: proximaOrdenacao,
      });
    }
  };

  const resetarEstadoBusca = () => {
    setSearchTerm("");
    setCurrentPage(1);
    if (mostrandoFavoritos) setMostrandoFavoritos(false);
    clearMapSelection();
  };

  const handleToggleFavoritos = () => {
    setMostrandoFavoritos(!mostrandoFavoritos);
  };

  const renderCards = () => {
    if (isLoading) {
      return Array(12)
        .fill(null)
        .map((_, i) => (
          <div
            key={`skeleton-${i}`}
            className="w-full sm:w-1/2 xl:w-[32%] min-w-0 flex-shrink-0"
          >
            <CardImovelSkeleton />
          </div>
        ));
    }

    if (Array.isArray(effectiveImoveis) && effectiveImoveis.length > 0) {
      let arr = [...effectiveImoveis];
      
      // Se há termo de busca, aplicar paginação client-side
      if (searchTerm && searchTerm.trim()) {
        const itemsPerPage = effectivePagination.itemsPerPage || 12;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        arr = arr.slice(startIndex, endIndex);
      }

      return arr.map((imovel) => {
        const key =
          imovel.Codigo || `imovel-${imovel._id || Math.random().toString(36).slice(2)}`;
        
        // Destacar o card se a propriedade está selecionada
        const isSelected = selectedProperty && 
          (selectedProperty.Codigo === imovel.Codigo || selectedProperty._id === imovel._id);
        
        return (
          <div 
            key={key} 
            className={`w-full sm:w-1/2 xl:w-[32%] min-w-0 flex-shrink-0 transition-all duration-200 ${
              isSelected ? 'ring-2 ring-blue-500 ring-opacity-50 scale-[1.02]' : ''
            }`}
          >
            <CardImovel {...imovel} target="_blank" />
          </div>
        );
      });
    }

    return <p className="text-center w-full py-8">Nenhum imóvel encontrado.</p>;
  };

  const construirTextoFiltros = () => {
    const qtd = effectivePagination.totalItems || 0;
    
    // Se está mostrando favoritos, mostrar apenas quantidade de favoritos
    if (mostrandoFavoritos) {
      return `${qtd} favorito${qtd !== 1 ? 's' : ''}`;
    }

    const s = useFiltersStore.getState();

    const plural = {
      Apartamento: "apartamentos",
      Casa: "casas",
      "Casa Comercial": "casas comerciais",
      "Casa em Condominio": "casas em condomínio",
      Cobertura: "coberturas",
      Flat: "flats",
      Garden: "gardens",
      Loft: "lofts",
      Loja: "lojas",
      "Prédio Comercial": "prédios comerciais",
      "Sala Comercial": "salas comerciais",
      Sobrado: "sobrados",
      Terreno: "terrenos",
    };

    let txt = `${qtd}`;
    if (s.categoriaSelecionada) {
      txt += ` ${plural[s.categoriaSelecionada] || "imóveis"}`;
    } else {
      txt += " imóveis";
    }

    const finalidadeRotulo = obterRotuloFinalidade(s.finalidade);
    if (finalidadeRotulo === "Comprar") {
      txt += " a venda";
    } else if (finalidadeRotulo === "Alugar") {
      txt += " para aluguel";
    }

    if (s.bairrosSelecionados?.length) {
      if (s.bairrosSelecionados.length === 1) {
        txt += ` em ${s.bairrosSelecionados[0]}`;
      } else if (s.bairrosSelecionados.length <= 3) {
        txt += ` em ${s.bairrosSelecionados.join(", ")}`;
      } else {
        txt += ` em ${s.bairrosSelecionados.slice(0, 2).join(", ")} e mais ${
          s.bairrosSelecionados.length - 2
        } bairros`;
      }
    } else if (s.cidadeSelecionada) {
      const c = s.cidadeSelecionada.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      txt += ` em ${c}`;
    }

    return txt;
  };

  /* ======================== RENDER ======================== */
  return (
    <>
      {/* DESKTOP (>= md): filtros horizontais fixos */}
      <div className="fixed top-20 left-0 w-full bg-white z-40 shadow-sm border-b px-4 md:px-10 hidden md:block overflow-x-auto">
        <PropertyFilters
          horizontal
          onFilter={resetarEstadoBusca}
          isVisible
          setIsVisible={() => {}}
          onMapSelectionClear={clearMapSelection}
          searchTerm={searchTerm}
          onSearchTermChange={handleSearchTermChange}
          onSearchSubmit={handleSearchSubmit}
          ordenacao={ordenacao}
          onOrdenacaoChange={handleOrdenacaoChange}
        />
      </div>

      {/* DESKTOP (>= md): layout 60/40 - Cards maiores, mapa menor */}
      <div className="hidden md:flex fixed top-[10rem] left-0 w-full h-[calc(100vh-7rem)] overflow-hidden bg-zinc-100">
        {/* Cards */}
        <div className="w-[60%] flex flex-col overflow-hidden">
          <div className="flex justify-between items-center gap-2 p-4 border-b border-gray-200 bg-white">
            <div className="flex flex-col">
              <h2 className="text-xs font-bold text-zinc-500">
                {construirTextoFiltros()}
              </h2>
              {isMapFilterActive && (
                <div className="flex items-center justify-between text-xs mt-1 px-2 py-1 rounded" style={{ backgroundColor: '#8B6F4B' }}>
                  <span style={{ 
                    color: 'white',
                    textShadow: '0 0 2px #8B6F4B, 0 0 4px #8B6F4B, 0 0 6px #8B6F4B',
                    fontWeight: 'bold'
                  }}>
                    {(() => {
                      const count = filteredImoveis?.length ?? 0;
                      const suffix = count === 1 ? "" : "is";
                      const selectionText =
                        selectedCluster && count !== 1
                          ? " do cluster selecionado"
                          : " selecionado no mapa";

                      return `Mostrando ${count} imóvel${suffix}${selectionText}`;
                    })()}
                  </span>
                  <button
                    onClick={clearMapSelection}
                    className="ml-2 font-bold"
                    style={{ color: 'white' }}
                  >
                    ✕ Mostrar todos
                  </button>
                </div>
              )}
              {isBrowser && mostrandoFavoritos && (
                <div className="flex items-center justify-between text-xs mt-1 px-2 py-1 rounded" style={{ backgroundColor: '#8B6F4B' }}>
                  <span style={{ 
                    color: 'white',
                    textShadow: '0 0 2px #8B6F4B, 0 0 4px #8B6F4B, 0 0 6px #8B6F4B',
                    fontWeight: 'bold'
                  }}>
                    🤍 Mostrando {quantidadeFavoritos} favorito{quantidadeFavoritos !== 1 ? "s" : ""}
                  </span>
                  <button
                    onClick={() => setMostrandoFavoritos(false)}
                    className="ml-2 font-bold"
                    style={{ color: 'white' }}
                  >
                    ✕ Mostrar todos
                  </button>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMostrandoFavoritos(!mostrandoFavoritos)}
                className={`p-2 rounded-md transition-colors flex items-center gap-1.5 ${
                  mostrandoFavoritos
                    ? "text-white hover:opacity-90"
                    : "hover:bg-zinc-200"
                }`}
                style={mostrandoFavoritos ? { backgroundColor: '#8B6F4B' } : { backgroundColor: '#f4f4f5', color: '#8B6F4B' }}
                title={mostrandoFavoritos ? "Mostrar todos" : "Mostrar favoritos"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0"
                  fill={mostrandoFavoritos ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                {isBrowser && quantidadeFavoritos > 0 && (
                  <span className="text-xs font-bold leading-none">{quantidadeFavoritos}</span>
                )}
              </button>
              <select
                className="text-xs font-bold text-zinc-500 bg-zinc-100 p-2 rounded-md"
                value={ordenacao}
                onChange={(e) => handleOrdenacaoChange(e.target.value)}
                disabled={mostrandoFavoritos}
              >
                <option value="relevancia">Mais relevantes</option>
                <option value="maior_valor">Maior Valor</option>
                <option value="menor_valor">Menor Valor</option>
                <option value="maior_area">Maior Área</option>
                <option value="menor_area">Menor Área</option>
              </select>
            </div>
          </div>

          <div ref={desktopScrollRef} className="flex-1 overflow-y-auto p-4">
            <div className="mb-4">
              <InputSearch
                value={searchTerm}
                onChange={handleSearchTermChange}
                onSubmit={handleSearchSubmit}
              />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">{renderCards()}</div>
            <div className="mt-6 mb-6">
              <Pagination
                pagination={effectivePagination}
                onPageChange={handlePageChange}
              />
            </div>
            <div className="mt-12">
              <Footer />
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-[40%] relative h-full">
          <div className="absolute inset-0 right-0 h-full overflow-hidden">
            <IntegratedMapWithNoSSR
              filtros={filtrosAtuais}
              imoveis={imoveisParaMapa}
              onPropertySelect={handlePropertySelect}
              onClusterSelect={handleClusterSelect}
              selectedCluster={selectedCluster}
              selectedProperty={selectedProperty}
              onClearSelection={clearMapSelection}
            />
          </div>
        </div>
      </div>

      {/* MOBILE (< md): barra ações + filtros off-canvas + lista */}
      <div className="md:hidden flex flex-col h-[100dvh] overflow-hidden bg-zinc-50 pt-20">
        <div className="flex flex-col flex-1 min-h-0">
          <PropertyFilters
            horizontal={false}
            onFilter={resetarEstadoBusca}
            isVisible={filtersMobileOpen}
            setIsVisible={setFiltersMobileOpen}
            onMapSelectionClear={clearMapSelection}
            onOpenMap={() => setMapOpenMobile(true)}
            searchTerm={searchTerm}
            onSearchTermChange={handleSearchTermChange}
            onSearchSubmit={handleSearchSubmit}
            ordenacao={ordenacao}
            onOrdenacaoChange={handleOrdenacaoChange}
          />

          {/* Mobile: Botão de favoritos fixo no topo */}
          {isBrowser && quantidadeFavoritos > 0 && (
            <div className="relative z-10 px-2 py-2 bg-white border-b border-gray-200 shadow-sm">
              <button
                onClick={() => setMostrandoFavoritos(!mostrandoFavoritos)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all text-white hover:opacity-90 shadow-md"
                style={{ backgroundColor: '#8B6F4B' }}
                title={mostrandoFavoritos ? "Mostrar todos os imóveis" : "Mostrar apenas favoritos"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                <span>
                  {mostrandoFavoritos ? "Mostrar todos os imóveis" : `Ver ${quantidadeFavoritos} favorito${quantidadeFavoritos !== 1 ? "s" : ""}`}
                </span>
              </button>
            </div>
          )}

          <div ref={mobileScrollRef} className="pb-24 px-2 flex-1 overflow-y-auto min-h-0">
            <div className="mt-3 flex flex-col gap-6 pb-10">
              <div className="bg-white border border-gray-200 rounded-md px-3 py-3 shadow-sm md:hidden">
                <div className="flex flex-col gap-1">
                  <h2 className="text-[12px] font-bold text-zinc-600">
                    {construirTextoFiltros()}
                  </h2>
                  {isMapFilterActive && (
                    <div className="flex items-center justify-between text-[11px] text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      <span>
                        {(() => {
                          const count = filteredImoveis?.length ?? 0;
                          const suffix = count === 1 ? "" : "is";
                          const selectionText =
                            selectedCluster && count !== 1
                              ? " do cluster selecionado"
                              : " selecionado no mapa";

                          return `Mostrando ${count} imóvel${suffix}${selectionText}`;
                        })()}
                      </span>
                      <button
                        onClick={clearMapSelection}
                        className="ml-2 text-red-500 hover:text-red-700 font-bold"
                      >
                        ✕ Mostrar todos
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">{renderCards()}</div>

              <Pagination
                pagination={effectivePagination}
                onPageChange={handlePageChange}
              />

              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE: overlay do mapa */}
      <MapOverlay
        open={mapOpenMobile}
        onClose={() => setMapOpenMobile(false)}
        filtros={filtrosAtuais}
        imoveis={imoveisParaMapa}
        onPropertySelect={handlePropertySelect}
        onClusterSelect={handleClusterSelect}
        selectedCluster={selectedCluster}
        selectedProperty={selectedProperty}
        onClearSelection={clearMapSelection}
      />
    </>
  );
}
