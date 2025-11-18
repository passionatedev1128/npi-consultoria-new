"use client";

import { APIProvider, Map as GoogleMap, AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Supercluster from "supercluster";
import { getImovelValorPrincipal, getImovelValorNumerico } from "@/app/utils/imovel-price";
import "./google-map-infowindow.css";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const GOOGLE_MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID || "DEMO_MAP_ID";

const DEFAULT_CENTER = { lat: -23.5505, lng: -46.6333 };
const DEFAULT_ZOOM = 11;

const SUPERCLUSTER_OPTIONS = {
  radius: 80,
  maxZoom: 18,
  minZoom: 0,
  minPoints: 2,
};

const getPropertyId = (imovel = {}) => {
  const candidates = [imovel.Codigo, imovel._id, imovel.id, imovel.IdImovel]
    .map((value) => (value !== undefined && value !== null ? String(value) : ""))
    .filter(Boolean);

  if (candidates.length > 0) return candidates[0];

  const lat = imovel?.Latitude ?? imovel?.latitude;
  const lng = imovel?.Longitude ?? imovel?.longitude;
  if (lat !== undefined && lat !== null && lng !== undefined && lng !== null) {
    return `${lat}-${lng}`;
  }

  try {
    return JSON.stringify(imovel);
  } catch {
    return String(imovel);
  }
};

const formatPrecoTexto = (imovel) => {
  const valor = getImovelValorNumerico(imovel);
  if (!valor || Number.isNaN(valor)) return "Ver";
  if (valor >= 1_000_000) return `${(valor / 1_000_000).toFixed(1)}M`;
  if (valor >= 1_000) return `${(valor / 1_000).toFixed(0)}K`;
  return String(valor);
};

function ClusterMarker({ count, active = false }) {
  const baseStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#8B6F4B",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid white",
    fontFamily: "var(--font-michroma), Helvetica, sans-serif",
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: "-0.02em",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    textTransform: "uppercase",
    transition: "transform 0.2s, box-shadow 0.2s",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    padding: "0 4px",
    cursor: "pointer",
  };

  const activeStyle = active
    ? {
        ...baseStyle,
        transform: "scale(1.05)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
      }
    : baseStyle;

  return <div style={activeStyle}>{formatPrecoTexto({ ValorVenda: count })}</div>;
}

const ImovelPopup = ({ imovel, onClose }) => {
  const formatterSlug = (text) => {
    if (!text) return "";
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const getSlug = useCallback(() => {
    const codigo = imovel?.Codigo || "";
    const empreendimento = imovel?.Empreendimento || imovel?.NomeImovel || "";
    const slug = formatterSlug(empreendimento);
    
    return `/imovel/${codigo}/${slug}`;
  }, [imovel]);

  const getFotoDestaqueUrl = (imovel) => {
    // Primeiro verifica se a API já processou a foto
    if (imovel?._fotoDestaqueProcessada) {
      return imovel._fotoDestaqueProcessada;
    }

    // Verificar se existe o campo Foto e se é um array
    if (!imovel?.Foto || !Array.isArray(imovel.Foto) || imovel.Foto.length === 0) {
      // Tentar campos alternativos
      if (imovel?.FotoDestaque) return imovel.FotoDestaque;
      if (imovel?.imagemDestaque) return imovel.imagemDestaque;
      if (imovel?.FotoPrincipal) return imovel.FotoPrincipal;
      if (imovel?.Foto1) return imovel.Foto1;
      
      return "/assets/images/tour_placeholder.jpg";
    }
    
    // Procurar foto com Destaque = "Sim"
    const fotoDestaque = imovel.Foto.find(foto => 
      foto && foto.Destaque === "Sim" && foto.Foto
    );

    if (fotoDestaque?.Foto) {
      return fotoDestaque.Foto;
    }

    // Fallback: primeira foto com campo Foto preenchido
    const primeiraFoto = imovel.Foto.find(foto => 
      foto && foto.Foto && typeof foto.Foto === 'string' && foto.Foto.trim() !== ''
    );
    
    if (primeiraFoto?.Foto) {
      return primeiraFoto.Foto;
    }

    // Fallback 2: tentar FotoPequena
    const primeiraFotoPequena = imovel.Foto.find(foto => 
      foto && foto.FotoPequena && typeof foto.FotoPequena === 'string' && foto.FotoPequena.trim() !== ''
    );
    
    if (primeiraFotoPequena?.FotoPequena) {
      return primeiraFotoPequena.FotoPequena;
    }

    return "/assets/images/tour_placeholder.jpg";
  };

  const imgSrc = getFotoDestaqueUrl(imovel);
  const titulo = imovel?.NomeImovel || imovel?.Empreendimento || "Imóvel";
  const bairro = imovel?.Bairro || "";
  const valorTexto = getImovelValorPrincipal(imovel);
  
  const area = imovel?.AreaTotal || imovel?.AreaPrivativa || imovel?.AreaUtil || null;
  const vagas = imovel?.Vagas || imovel?.Garagens || null;
  
  const detalhesExtras = [];
  if (area) detalhesExtras.push(`${area} m²`);
  if (vagas) detalhesExtras.push(`${vagas} vaga${vagas > 1 ? 's' : ''}`);

  return (
    <div className="bg-white rounded-lg shadow-lg relative" style={{ width: "280px", maxWidth: "calc(-40px + 100vw)", padding: "12px", boxSizing: "border-box", overflow: "hidden" }}>
      <div className="relative rounded-lg overflow-hidden mb-2 bg-gray-200" style={{ width: "100%", height: "140px", maxWidth: "100%", flexShrink: 0 }}>
        <Image
          src={imgSrc}
          alt={titulo}
          fill
          className="object-cover"
          sizes="(max-width: 768px) calc(100vw - 64px), 300px"
          onError={(e) => {
            e.target.src = "/assets/images/tour_placeholder.jpg";
          }}
        />
      </div>

      <h3 
        className="font-bold text-base truncate mb-1" 
        title={titulo}
        style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%", paddingRight: "8px" }}
      >
        {titulo}
      </h3>
      
      <p 
        className="text-sm text-gray-600 truncate mb-2" 
        title={bairro}
        style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%" }}
      >
        {bairro}
      </p>
      
      {detalhesExtras.length > 0 && (
        <p 
          className="text-xs text-gray-500 mb-2"
          style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%" }}
        >
          {detalhesExtras.join(' • ')}
        </p>
      )}
      
      <p 
        className="text-base font-bold text-green-700 mb-2"
        style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%", fontSize: "15px" }}
      >
        {valorTexto}
      </p>
      
      <a
        href={getSlug()}
        target="_blank"
        rel="noopener noreferrer"
        className="!no-underline block"
        style={{ width: "100%" }}
      >
        <button 
          className="bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          style={{ width: "100%", padding: "8px 16px", boxSizing: "border-box", border: "none", cursor: "pointer" }}
        >
          Ver Detalhes
        </button>
      </a>
    </div>
  );
};

export default function OptimizedMapComponent({
  imoveis = [],
  center: externalCenter,
  zoom: externalZoom,
  onPropertyClick,
  onClusterClick,
  selectedCluster,
  selectedProperty,
  onClearSelection,
}) {
  const mapRef = useRef(null);
  const superclusterRef = useRef(null);
  const initialCenterRef = useRef(externalCenter || DEFAULT_CENTER);
  const initialZoomRef = useRef(externalZoom || DEFAULT_ZOOM);
  
  const [mapCenter, setMapCenter] = useState(externalCenter || DEFAULT_CENTER);
  const [mapZoom, setMapZoom] = useState(externalZoom || DEFAULT_ZOOM);
  const [bounds, setBounds] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [hoveredCluster, setHoveredCluster] = useState(null);

  const points = useMemo(() => {
    return imoveis
      .filter((imovel) => {
        const lat = parseFloat(imovel?.Latitude ?? imovel?.latitude ?? "");
        const lng = parseFloat(imovel?.Longitude ?? imovel?.longitude ?? "");
        return !Number.isNaN(lat) && !Number.isNaN(lng) && lat !== 0 && lng !== 0;
      })
      .map((imovel) => {
        const lat = parseFloat(imovel?.Latitude ?? imovel?.latitude);
        const lng = parseFloat(imovel?.Longitude ?? imovel?.longitude);
        
        return {
          type: "Feature",
          properties: {
            cluster: false,
            imovelId: getPropertyId(imovel),
            imovel: imovel,
          },
          geometry: {
            type: "Point",
            coordinates: [lng, lat],
          },
        };
      });
  }, [imoveis]);

  useEffect(() => {
    const supercluster = new Supercluster(SUPERCLUSTER_OPTIONS);
    supercluster.load(points);
    superclusterRef.current = supercluster;
  }, [points]);

  const clusters = useMemo(() => {
    if (!superclusterRef.current || !bounds) return [];

    const [west, south, east, north] = bounds;
    
    return superclusterRef.current.getClusters(
      [west, south, east, north],
      Math.floor(mapZoom)
    );
  }, [bounds, mapZoom]);

  useEffect(() => {
    if (!externalCenter && imoveis.length > 0) {
      const validImoveis = imoveis.filter((imovel) => {
        const lat = parseFloat(imovel?.Latitude ?? imovel?.latitude ?? "");
        const lng = parseFloat(imovel?.Longitude ?? imovel?.longitude ?? "");
        return !Number.isNaN(lat) && !Number.isNaN(lng);
      });

      if (validImoveis.length > 0) {
        const latSum = validImoveis.reduce((sum, item) => {
          return sum + parseFloat(item?.Latitude ?? item?.latitude);
        }, 0);
        const lngSum = validImoveis.reduce((sum, item) => {
          return sum + parseFloat(item?.Longitude ?? item?.longitude);
        }, 0);

        const center = {
          lat: latSum / validImoveis.length,
          lng: lngSum / validImoveis.length,
        };
        
        setMapCenter(center);
        setMapZoom(12);
        
        // Atualizar refs com os valores calculados
        initialCenterRef.current = center;
        initialZoomRef.current = 12;
      }
    }
  }, [imoveis, externalCenter]);

  // Detectar quando selectedProperty é limpo (botão "Mostrar todos")
  useEffect(() => {
    if (!selectedProperty && selectedMarker) {
      // Fechar InfoWindow e resetar zoom
      setSelectedMarker(null);
      
      if (mapRef.current) {
        mapRef.current.panTo(initialCenterRef.current);
        mapRef.current.setZoom(initialZoomRef.current);
      }
    }
  }, [selectedProperty, selectedMarker]);

  const handleCameraChange = useCallback((ev) => {
    const map = ev.map;
    const bounds = map.getBounds();
    
    if (bounds) {
      const ne = bounds.getNorthEast();
      const sw = bounds.getSouthWest();
      setBounds([sw.lng(), sw.lat(), ne.lng(), ne.lat()]);
    }

    setMapZoom(map.getZoom());
    setMapCenter({ lat: map.getCenter().lat(), lng: map.getCenter().lng() });
  }, []);

  const handleClusterClick = useCallback(
    (clusterId, latitude, longitude) => {
      if (!superclusterRef.current || !mapRef.current) return;

      const expansionZoom = Math.min(
        superclusterRef.current.getClusterExpansionZoom(clusterId),
        20
      );

      mapRef.current.panTo({ lat: latitude, lng: longitude });
      mapRef.current.setZoom(expansionZoom);

      if (onClusterClick) {
        const leaves = superclusterRef.current.getLeaves(clusterId, Infinity);
        const properties = leaves.map((leaf) => leaf.properties.imovel);
        onClusterClick(properties);
      }
    },
    [onClusterClick]
  );

  const handleMarkerClick = useCallback(
    (imovel) => {
      setSelectedMarker(imovel);
      onPropertyClick?.(imovel);
    },
    [onPropertyClick]
  );

  const handleCloseInfoWindow = useCallback(() => {
    setSelectedMarker(null);
    onClearSelection?.();
    
    // Resetar para o zoom/centro inicial
    if (mapRef.current) {
      mapRef.current.panTo(initialCenterRef.current);
      mapRef.current.setZoom(initialZoomRef.current);
    }
  }, [onClearSelection]);

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapId={GOOGLE_MAP_ID}
        defaultCenter={mapCenter}
        defaultZoom={mapZoom}
        gestureHandling="greedy"
        disableDefaultUI={false}
        onCameraChanged={handleCameraChange}
        onTilesLoaded={(map) => {
          if (!mapRef.current) {
            mapRef.current = map.map;
          }
        }}
        style={{ width: "100%", height: "100%" }}
      >
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount, imovel } = cluster.properties;

          if (isCluster) {
            return (
              <AdvancedMarker
                key={`cluster-${cluster.id}`}
                position={{ lat: latitude, lng: longitude }}
                onClick={() => handleClusterClick(cluster.id, latitude, longitude)}
                onMouseEnter={() => setHoveredCluster(cluster.id)}
                onMouseLeave={() => setHoveredCluster(null)}
              >
                <ClusterMarker 
                  count={pointCount} 
                  active={hoveredCluster === cluster.id}
                />
              </AdvancedMarker>
            );
          } else {
            const isSelected = selectedMarker && getPropertyId(selectedMarker) === getPropertyId(imovel);
            
            return (
              <AdvancedMarker
                key={`marker-${getPropertyId(imovel)}`}
                position={{ lat: latitude, lng: longitude }}
                onClick={() => handleMarkerClick(imovel)}
              >
                <div
                  style={{
                    padding: "28px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: isSelected ? "#6d5739" : "#8B6F4B",
                    color: "white",
                    fontFamily: "var(--font-michroma), Helvetica, sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    border: "3px solid white",
                    boxShadow: "rgba(0,0,0,0.2) 0 2px 8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                    transform: isSelected ? "scale(1.05)" : "scale(1)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {formatPrecoTexto(imovel)}
                </div>
              </AdvancedMarker>
            );
          }
        })}

        {selectedMarker && (
          <InfoWindow
            position={{
              lat: parseFloat(selectedMarker?.Latitude ?? selectedMarker?.latitude),
              lng: parseFloat(selectedMarker?.Longitude ?? selectedMarker?.longitude),
            }}
            onCloseClick={handleCloseInfoWindow}
          >
            <ImovelPopup imovel={selectedMarker} onClose={handleCloseInfoWindow} />
          </InfoWindow>
        )}
      </GoogleMap>
    </APIProvider>
  );
}
