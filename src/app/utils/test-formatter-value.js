import { formatterValue } from "./formatter-value.js";

// Função para testar os casos
function testarFormatterValue() {
  console.log("=== TESTE DA FUNÇÃO formatterValue ===\n");

  const casos = [
    // Casos básicos
    { entrada: 1000, esperado: "R$ 1.000,00", descricao: "Número inteiro" },
    { entrada: 1000.5, esperado: "R$ 1.000,50", descricao: "Número decimal" },
    { entrada: 0, esperado: "R$ 0,00", descricao: "Zero" },

    // Casos com null/undefined
    { entrada: null, esperado: "R$ 0,00", descricao: "Null" },
    { entrada: undefined, esperado: "R$ 0,00", descricao: "Undefined" },
    { entrada: "", esperado: "R$ 0,00", descricao: "String vazia" },
    { entrada: "   ", esperado: "R$ 0,00", descricao: "String só com espaços" },

    // Casos com strings numéricas
    { entrada: "1000", esperado: "R$ 1.000,00", descricao: "String número simples" },
    { entrada: "1000.50", esperado: "R$ 1.000,50", descricao: "String formato internacional" },
    { entrada: "1000,50", esperado: "R$ 1.000,50", descricao: "String formato brasileiro" },
    {
      entrada: "1.000,50",
      esperado: "R$ 1.000,50",
      descricao: "String formato brasileiro com milhares",
    },

    // CASOS CRÍTICOS: Valores já formatados (teste de duplicação)
    {
      entrada: "R$ 1.000,00",
      esperado: "R$ 1.000,00",
      descricao: " Valor já formatado (teste duplicação)",
    },
    { entrada: "R$1000", esperado: "R$ 1.000,00", descricao: " Valor já formatado sem espaço" },
    {
      entrada: "R$ 2.500,75",
      esperado: "R$ 2.500,75",
      descricao: " Valor já formatado com decimais",
    },
    {
      entrada: "R$    500,00",
      esperado: "R$ 500,00",
      descricao: " Valor formatado com espaços extras",
    },

    // Casos com caracteres especiais
    { entrada: "abc1000def", esperado: "R$ 1.000,00", descricao: "String com letras" },
    { entrada: "$ 1000", esperado: "R$ 1.000,00", descricao: "String com símbolo $ diferente" },
    {
      entrada: "1.000.000,50",
      esperado: "R$ 1.000.000,50",
      descricao: "Valor grande formato brasileiro",
    },

    // Casos extremos
    { entrada: "xyz", esperado: "R$ 0,00", descricao: "String sem números" },
    { entrada: "...", esperado: "R$ 0,00", descricao: "String só com pontos" },
    { entrada: ",,,", esperado: "R$ 0,00", descricao: "String só com vírgulas" },
    { entrada: NaN, esperado: "R$ 0,00", descricao: "NaN" },
    { entrada: Infinity, esperado: "R$ 0,00", descricao: "Infinity" },

    // Casos de formato misto
    { entrada: "1,000.50", esperado: "R$ 1.000,50", descricao: "Formato misto (ambíguo)" },
    { entrada: "1.5", esperado: "R$ 1,50", descricao: "Decimal simples com ponto" },
  ];

  let sucessos = 0;
  let falhas = 0;

  casos.forEach((caso, index) => {
    try {
      const resultado = formatterValue(caso.entrada);
      const passou = resultado === caso.esperado;

      if (passou) {
        sucessos++;
        console.log(`Teste ${index + 1}: ${caso.descricao}`);
        console.log(`   Entrada: ${JSON.stringify(caso.entrada)} -> Resultado: ${resultado}`);
      } else {
        falhas++;
        console.log(`Teste ${index + 1}: ${caso.descricao}`);
        console.log(`   Entrada: ${JSON.stringify(caso.entrada)}`);
        console.log(`   Esperado: ${caso.esperado}`);
        console.log(`   Resultado: ${resultado}`);
      }
      console.log("");
    } catch (error) {
      falhas++;
      console.log(`Teste ${index + 1} ERRO: ${caso.descricao}`);
      console.log(`   Entrada: ${JSON.stringify(caso.entrada)}`);
      console.log(`   Erro: ${error.message}`);
      console.log("");
    }
  });

  console.log("=== RESUMO DOS TESTES ===");
  console.log(`Sucessos: ${sucessos}`);
  console.log(`Falhas: ${falhas}`);
  console.log(`Total: ${casos.length}`);
  console.log(`Taxa de sucesso: ${((sucessos / casos.length) * 100).toFixed(2)}%`);

  return { sucessos, falhas, total: casos.length };
}

// Executar os testes (descomente para rodar)
// testarFormatterValue();

export { testarFormatterValue };
