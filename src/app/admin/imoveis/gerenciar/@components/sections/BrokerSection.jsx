// src/app/admin/imoveis/gerenciar/@components/sections/BrokerSection.jsx

"use client";
import { memo, useEffect, useState } from "react";
import FormSection from "../FormSection";
import FieldGroup from "../FieldGroup";
import axiosClient from "@/app/lib/axios-client";

const BrokerSection = ({ formData, displayValues, onChange }) => {
  const [corretores, setCorretores] = useState([]);
  const [isLoadingCorretores, setIsLoadingCorretores] = useState(true);

  useEffect(() => {
    const fetchAllCorretores = async () => {
      setIsLoadingCorretores(true);
      try {
        let todosCorretores = [];

        // FIXED: Use correct endpoint /api/corretores (not /api/admin/corretores)
        // OPTIMIZED: Request higher limit (100) to reduce number of API calls
        const firstResponse = await axiosClient.get("corretores?limit=100");

        if (firstResponse.data?.corretores) {
          todosCorretores = [...firstResponse.data.corretores];

          // Buscar páginas adicionais
          const totalPages = firstResponse.data.pagination?.totalPages || 1;

          // Fetch remaining pages if needed (with higher limit to reduce calls)
          for (let page = 2; page <= totalPages; page++) {
            const response = await axiosClient.get(`corretores?page=${page}&limit=100`);
            if (response.data?.corretores) {
              todosCorretores = [...todosCorretores, ...response.data.corretores];
            }
          }
        }

        // FIXED: Handle both nome (lowercase) and Nome (capitalized) field names
        const corretoresList = todosCorretores
          .map((item) => {
            const nome = item.nome || item.Nome || '';
            return {
              value: nome,
              label: nome,
            };
          })
          .filter(c => c.value && c.value.trim() !== '')
          .sort((a, b) => a.label.localeCompare(b.label));

        console.log(`[BrokerSection] Total de corretores carregados: ${corretoresList.length}`);
        setCorretores(corretoresList);

      } catch (error) {
        console.error("[BrokerSection] Erro ao buscar corretores:", error);
        setCorretores([]);
      } finally {
        setIsLoadingCorretores(false);
      }
    };

    fetchAllCorretores();
  }, []);

  const corretorField = () => {
    // FIXED: Always return select type to allow dropdown to work
    // Previously switched to text field when value existed, preventing dropdown from showing
    return {
      name: "Corretor",
      label: "Nome",
      type: "select",
      options: corretores,
      value: formData.Corretor || "",
      disabled: isLoadingCorretores,
      placeholder: isLoadingCorretores ? "Carregando corretores..." : "Selecione um corretor",
    };
  };

  const brokerFields = [
    corretorField(),
    { name: "EmailCorretor", label: "E-mail", type: "text" },
    { name: "CelularCorretor", label: "Celular", type: "text" },
    {
      name: "ImobParceiro",
      label: "Imobiliaria",
      type: "text",
    },
    {
      name: "ImobiliariaObs",
      label: "Observações",
      type: "textarea",
    },
  ];

  return (
    <FormSection title="Corretores Vinculados (Imobiliária)">
      <FieldGroup
        fields={brokerFields}
        formData={formData}
        displayValues={displayValues}
        onChange={onChange}
      />
    </FormSection>
  );
};

export default memo(BrokerSection);
