"use client";

import { Share } from "@/app/components/ui/share";
import { useEffect, useState } from "react";
import useFavoritosStore from "@/app/store/favoritosStore";

export default function ShareImovelClient({ imovel, currentUrl }) {
    const { inicializar, recarregarFavoritos } = useFavoritosStore();
    const [mounted, setMounted] = useState(false);
    
    console.log('ShareImovelClient renderizado:', { 
        Codigo: imovel?.Codigo, 
        mounted,
        sessionStorage: typeof window !== 'undefined' ? sessionStorage.getItem('npi_favoritos') : 'N/A'
    });
    
    // Garantir que o componente está montado no cliente
    useEffect(() => {
        console.log('ShareImovelClient montando...');
        setMounted(true);
        
        // Inicializar store antes de recarregar
        console.log('Chamando inicializar()...');
        inicializar();
        
        console.log('Chamando recarregarFavoritos()...');
        recarregarFavoritos();
        
        // Verificar sessionStorage
        if (typeof window !== 'undefined') {
            const stored = sessionStorage.getItem('npi_favoritos');
            console.log('SessionStorage após reload:', stored);
        }
    }, [inicializar, recarregarFavoritos]);

    // Não renderizar até estar montado no cliente (evita hidration mismatch)
    if (!mounted) {
        return (
            <div className="flex gap-4">
                <button className="text-zinc-700" aria-label="Favoritar">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </button>
                <button className="text-zinc-700" aria-label="Compartilhar">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                </button>
            </div>
        );
    }

    // Salvar o objeto imovel completo com todos os campos necessários para o CardImovel
    const imovelData = {
        ...imovel, // Passa todos os campos do imóvel
        // Garantir que campos críticos existem
        Codigo: imovel.Codigo,
        Empreendimento: imovel.Empreendimento,
        Foto: imovel.Foto,
        DormitoriosAntigo: imovel.DormitoriosAntigo || imovel.Dormitorios,
        Dormitorios: imovel.Dormitorios || imovel.DormitoriosAntigo,
        VagasAntigo: imovel.VagasAntigo || imovel.Vagas,
        Vagas: imovel.Vagas || imovel.VagasAntigo,
        AreaPrivativa: imovel.AreaPrivativa || imovel.MetragemAnt,
    };

    return (
        <Share 
            url={currentUrl} 
            title={`Compartilhe o imóvel ${imovel.Empreendimento} em ${imovel.BairroComercial}`} 
            variant="secondary"
            imovel={imovelData}
        />
    );
}
