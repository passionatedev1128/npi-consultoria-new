"use client";

import { Share } from "@/app/components/ui/share";

export default function ShareWrapper({ imovel, currentUrl }) {
    return (
        <Share 
            url={currentUrl} 
            title={`Compartilhe o imóvel ${imovel.Empreendimento} em ${imovel.BairroComercial}`}
            variant="secondary"
            imovel={{
                Codigo: imovel.Codigo,
                Empreendimento: imovel.Empreendimento,
                BanheiroSocialQtd: imovel.BanheiroSocialQtd,
                Foto: imovel.Foto,
                Status: imovel.Status,
                TipoEndereco: imovel.TipoEndereco,
                Endereco: imovel.Endereco,
                ValorAntigo: imovel.ValorAntigo,
                Numero: imovel.Numero,
                Dormitorios: imovel.Dormitorios,
                DormitoriosAntigo: imovel.DormitoriosAntigo,
                Suites: imovel.Suites,
                AreaPrivativa: imovel.AreaPrivativa,
                MetragemAnt: imovel.MetragemAnt,
                Vagas: imovel.Vagas,
                VagasAntigo: imovel.VagasAntigo,
                BairroComercial: imovel.BairroComercial,
                Categoria: imovel.Categoria,
                Cidade: imovel.Cidade,
            }}
        />
    );
}
