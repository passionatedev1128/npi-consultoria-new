// src/app/(site)/[slug]/componentes/related-properties.js

"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import CardImovel from "@/app/components/ui/card-imovel";

export function ImoveisRelacionados({ imoveisRelacionados, codigoPrincipal }) {
  const carouselRef = useRef(null);
  
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };
  
  return (
    <section className="relative bg-white container mx-auto p-10 mt-4 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-black">Imóveis no mesmo condomínio</h2>
        <span className="text-xs text-zinc-700 font-semibold">
          Encontrado {imoveisRelacionados.length} {imoveisRelacionados.length === 1 ? "imóvel" : "imóveis"}
        </span>
      </div>
      
      <div className="container mx-auto">
        {/* Botão Esquerda */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow-md z-10 hover:bg-gray-800 transition-colors"
          aria-label="Scroll para esquerda"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        
        {/* Carrossel de Cards */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide no-scrollbar pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {!imoveisRelacionados || imoveisRelacionados.length === 0 ? (
            <p className="text-center w-full py-8 text-gray-500">
              Nenhum imóvel relacionado encontrado.
            </p>
          ) : (
            imoveisRelacionados.map((imovel, index) => {
              // FORÇA O PRIMEIRO CARD A TER DESTAQUE
              const isDestaque = index === 0 || imovel.ehDestaque;
              
              return (
                <div 
                  key={imovel.Codigo || imovel._id || `imovel-${index}`} 
                  className={`min-w-[320px] relative ${isDestaque ? 'ring-4 ring-[#8B6F48] rounded-lg shadow-xl' : ''}`}
                >
                  {/* Badge de Destaque */}
                  {isDestaque && (
                    <div className="absolute top-2 left-2 z-20 bg-[#8B6F48] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                      Imóvel em Destaque
                    </div>
                  )}
                  
                  <CardImovel 
                    {...imovel} 
                    isLoading={false} 
                    target="_blank"
                    className={isDestaque ? 'border-2 border-[#8B6F48]' : ''}
                  />
                </div>
              )
            })
          )}
        </div>
        
        {/* Botão Direita */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10 hover:bg-black transition-colors"
          aria-label="Scroll para direita"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      
      {/* Legenda de Ordenação (opcional - remova se não quiser) */}
      <div className="mt-4 text-xs text-gray-600 text-center">
        Imóveis ordenados por valor: do mais acessível ao mais exclusivo
      </div>
    </section>
  );
}
