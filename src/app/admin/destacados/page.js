"use client";

import { useState, useEffect } from "react";
import { getImovelDestacado, atualizarImovel, getCondominioDestacado } from "@/app/services";
import AuthCheck from "../components/auth-check";

import { TrashIcon } from "lucide-react";
import { Tab } from "@headlessui/react";

export default function CondominiosDestacados() {
  const [imoveis, setImoveis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [destacados, setDestacados] = useState([]);
  const [tab, setTab] = useState("imoveis");
  const [condominios, setCondominios] = useState([]);
  const [isLoadingCondominios, setIsLoadingCondominios] = useState(false);

  useEffect(() => {
    const fetchImoveis = async () => {
      console.log("INICIANDO CARREGAMENTO DE IMÓVEIS DESTACADOS...");
      setIsLoading(true);
      try {
        const response = await getImovelDestacado();
        console.log("RESPOSTA DA API:", response);
        
        if (response && response.data) {
          console.log("TOTAL DE IMÓVEIS DESTACADOS:", response.data.length);
          console.log("PRIMEIRO IMÓVEL PARA DEBUG:", response.data[0]);
          
          setImoveis(response.data);
          // Filtrar apenas ids destacados
          const destaques = response.data
            .filter((item) => item.Destacado === "Sim")
            .map((item) => item._id || item.id || item.Codigo);
          setDestacados(destaques);
        }
      } catch (error) {
        console.error("ERRO ao carregar imóveis:", error);
      } finally {
        setIsLoading(false);
        console.log("CARREGAMENTO FINALIZADO");
      }
    };
    fetchImoveis();
  }, []);

  useEffect(() => {
    if (tab === "condominios" && condominios.length === 0) {
      const fetchCondominios = async () => {
        setIsLoadingCondominios(true);
        try {
          const response = await getCondominioDestacado();
          if (response && response.data) {
            setCondominios(response.data);
          }
        } catch (error) {
          console.error("Erro ao carregar condomínios:", error);
        } finally {
          setIsLoadingCondominios(false);
        }
      };
      fetchCondominios();
    }
  }, [tab, condominios.length]);

  // FUNÇÃO PARA BUSCAR FOTO DESTAQUE
  const getFotoDestaque = (condominio) => {
    console.log(`ANÁLISE DE FOTO - Código ${condominio.Codigo}:`);
    console.log('Estrutura completa do objeto Foto:', condominio.Foto);
    console.log('Tipo do campo Foto:', typeof condominio.Foto);
    console.log('É array?', Array.isArray(condominio.Foto));
    
    // MÉTODO 1: Buscar foto com Destaque: "Sim" no array
    if (Array.isArray(condominio.Foto) && condominio.Foto.length > 0) {
      console.log(`Processando array com ${condominio.Foto.length} fotos`);
      
      // Procurar foto marcada como destaque
      const fotoDestaque = condominio.Foto.find(foto => foto.Destaque === "Sim");
      
      if (fotoDestaque && fotoDestaque.Foto) {
        console.log(`FOTO DESTAQUE ENCONTRADA:`, fotoDestaque.Foto);
        return fotoDestaque.Foto;
      }
      
      // Se não encontrou destaque, pegar a primeira foto
      const primeiraFoto = condominio.Foto[0];
      if (primeiraFoto && primeiraFoto.Foto) {
        console.log(`📷 Usando primeira foto do array:`, primeiraFoto.Foto);
        return primeiraFoto.Foto;
      }
      
      // Fallback para string direta no array
      if (typeof primeiraFoto === 'string') {
        console.log(`📷 Primeira foto como string:`, primeiraFoto);
        return primeiraFoto;
      }
    }
    
    // MÉTODO 2: Se Foto for string direta
    if (typeof condominio.Foto === 'string' && condominio.Foto.trim() !== '') {
      console.log(`📷 Foto como string direta:`, condominio.Foto);
      return condominio.Foto;
    }
    
    console.log(`NENHUMA FOTO ENCONTRADA para ${condominio.Codigo}`);
    return null;
  };

  // Alternar o status de destaque de um imóvel
  const toggleDestaque = async (id) => {
    try {
      const response = await atualizarImovel(id, { Destacado: "Não" });
      if (response && response.success) {
        setDestacados((prev) => prev.filter((itemId) => itemId !== id));
        setImoveis((prev) =>
          prev.filter((item) => {
            const itemId = item._id || item.id || item.Codigo;
            return itemId !== id;
          })
        );
      } else {
        alert("Erro ao remover destaque do imóvel");
      }
    } catch (error) {
      alert("Ocorreu um erro ao processar sua solicitação");
    }
  };

  const removeDestaqueCondominio = async (id) => {
    try {
      const response = await atualizarImovel(id, { CondominioDestaque: "Não" });
      if (response && response.success) {
        setDestacados((prev) => prev.filter((itemId) => itemId !== id));
        setCondominios((prev) =>
          prev.filter((item) => {
            const itemId = item._id || item.id || item.Codigo;
            return itemId !== id;
          })
        );
      }
    } catch (error) {
      console.error(`Erro ao remover destaque do condomínio ${id}:`, error);
    }
  };

  // Filtros para as tabs
  const imoveisDestacados = imoveis.filter((item) => item.Destacado === "Sim");
  const condominiosDestacados = condominios;

  return (
    <AuthCheck>
      <div className="max-w-7xl mx-auto text-xs">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900 mb-4">Imóveis Destacados</h1>
          <p className="text-gray-600 mb-6 text-sm">
            Gerencie os imóveis e condomínios que estão marcados como destacados no site.
          </p>

          {/* Tabs */}
          <div className="mb-6 flex gap-2">
            <button
              className={`px-4 py-2 rounded-t-md font-semibold border-b-2 transition-colors ${
                tab === "imoveis"
                  ? "border-black text-black bg-gray-50"
                  : "border-transparent text-gray-400 bg-gray-100"
              }`}
              onClick={() => setTab("imoveis")}
            >
              Imóveis
            </button>
            <button
              className={`px-4 py-2 rounded-t-md font-semibold border-b-2 transition-colors ${
                tab === "condominios"
                  ? "border-black text-black bg-gray-50 "
                  : "border-transparent text-gray-500 bg-gray-100"
              }`}
              onClick={() => setTab("condominios")}
            >
              Condomínios
            </button>
          </div>

          {tab === "imoveis" && isLoading ? (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
              </div>
            </div>
          ) : tab === "condominios" && isLoadingCondominios ? (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
              </div>
            </div>
          ) : (
            <>
              {(tab === "imoveis" ? imoveisDestacados : condominiosDestacados).length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(tab === "imoveis" ? imoveisDestacados : condominiosDestacados).map(
                    (condominio) => {
                      const id = condominio._id || condominio.id || condominio.Codigo;
                      const isDestacado = destacados.includes(id);
                      
                      // USAR A NOVA FUNÇÃO PARA BUSCAR FOTO DESTAQUE
                      const fotoDestaque = getFotoDestaque(condominio);
                      
                      return (
                        <div
                          key={id}
                          className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow shadow-md"
                        >
                          <div className="relative">
                            <div className="h-48 bg-gray-300 flex items-center justify-center">
                              {fotoDestaque ? (
                                <img
                                  src={fotoDestaque}
                                  alt={condominio.Empreendimento}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    console.error(`Erro ao carregar imagem do ${condominio.Codigo}:`, fotoDestaque);
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                  }}
                                />
                              ) : null}
                              <div 
                                className="text-gray-500 w-full h-full flex items-center justify-center"
                                style={{ display: fotoDestaque ? 'none' : 'flex' }}
                              >
                                <div className="text-center">
                                  <div className="text-lg mb-2">📷</div>
                                  <div>Sem imagem</div>
                                  <div className="text-xs mt-1">{condominio.Codigo}</div>
                                </div>
                              </div>
                            </div>
                            {tab === "imoveis" && (
                              <button
                                onClick={() => toggleDestaque(id)}
                                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md focus:outline-none hover:bg-gray-50 transition-colors"
                                title={isDestacado ? "Remover destaque" : "Adicionar destaque"}
                              >
                                {isDestacado ? (
                                  <TrashIcon className="h-5 w-5 text-red-500" />
                                ) : (
                                  <TrashIcon className="h-5 w-5 text-gray-300 hover:text-yellow-500" />
                                )}
                              </button>
                            )}
                            {tab === "condominios" && (
                              <button
                                onClick={() => removeDestaqueCondominio(id)}
                                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md focus:outline-none hover:bg-gray-50 transition-colors"
                                title="Remover destaque"
                              >
                                <TrashIcon className="h-5 w-5 text-red-500" />
                              </button>
                            )}
                            
                            {/* Badge de destaque */}
                            {fotoDestaque && Array.isArray(condominio.Foto) && (
                              (() => {
                                const fotoComDestaque = condominio.Foto.find(foto => foto.Destaque === "Sim");
                                return fotoComDestaque ? (
                                  <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                    DESTAQUE
                                  </div>
                                ) : null;
                              })()
                            )}
                          </div>
                          <div className="p-4">
                            <span className="text-xs text-gray-500">Código: {condominio.Codigo}</span>
                            <h3 className="font-semibold text-sm mb-1 mt-1">
                              {condominio.Empreendimento || "Condomínio"}
                            </h3>
                            <p className="text-gray-600 mb-2 text-xs">
                              {condominio.BairroComercial}, {condominio.Cidade}
                            </p>
                            <span className="text-lg font-bold text-black line-clamp-2">
                              {condominio.ValorAntigo}
                            </span>
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              ) : (
                <div className="p-8 rounded-lg">
                  <p className="text-center text-lg text-gray-600">
                    Nenhum {tab === "imoveis" ? "imóvel" : "condomínio"} destacado encontrado.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </AuthCheck>
  );
}
