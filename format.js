import fs from "fs";

let content = fs.readFileSync("src/data.ts", "utf8");

content = content.replace(/1\. SITE PROFISSIONAL/g, "### 1. SITE PROFISSIONAL");
content = content.replace(/2\. SEO LOCAL ESTRATÉGICO/g, "### 2. SEO LOCAL ESTRATÉGICO");
content = content.replace(/3\. TRÁFEGO PAGO/g, "### 3. TRÁFEGO PAGO");
content = content.replace(/4\. O PITCH DO ECOSSISTEMA — QUANDO VENDER OS TRÊS JUNTOS/g, "### 4. O PITCH DO ECOSSISTEMA — QUANDO VENDER OS TRÊS JUNTOS");

content = content.replace(/O Problema que Resolve\n/g, "#### O Problema que Resolve\n");
content = content.replace(/Como Explicar Sem Jargão\n/g, "#### Como Explicar Sem Jargão\n");
content = content.replace(/Script para Cold Call \(30–45 segundos\)\n/g, "#### Script para Cold Call (30–45 segundos)\n");
content = content.replace(/Script para Reunião \(versão completa\)\n/g, "#### Script para Reunião (versão completa)\n");
content = content.replace(/Analogias de Apoio\n/g, "#### Analogias de Apoio\n");
content = content.replace(/Sinal de Compra Específico\n/g, "#### Sinal de Compra Específico\n");
content = content.replace(/Como Mostrar o ROI Sem Parecer Que Está Prometendo Resultado\n/g, "#### Como Mostrar o ROI Sem Parecer Que Está Prometendo Resultado\n");

content = content.replace(/3\. ROTEIRO DE REUNIÃO ESTRATÉGICO/g, "## 3. ROTEIRO DE REUNIÃO ESTRATÉGICO");

content = content.replace(/Checklist Pré-Reunião\nAntes de cada reunião, confirme que você:\nPesquisou o site e as redes sociais do prospect\nTestou a presença dele no Google Maps e na busca orgânica local\nIdentificou ao menos um concorrente com presença digital mais forte\nTem uma hipótese inicial de qual serviço faz mais sentido para aquele perfil\nPreparou ao menos um resultado ou caso relevante para o segmento/g, `#### Checklist Pré-Reunião
Antes de cada reunião, confirme que você:
- Pesquisou o site e as redes sociais do prospect
- Testou a presença dele no Google Maps e na busca orgânica local
- Identificou ao menos um concorrente com presença digital mais forte
- Tem uma hipótese inicial de qual serviço faz mais sentido para aquele perfil
- Preparou ao menos um resultado ou caso relevante para o segmento`);

content = content.replace(/Fase (\d+) —/g, "#### Fase $1 —");
content = content.replace(/Bloco (A|B|C|D) —/g, "**Bloco $1 —**");

content = content.replace(/1\. A Lógica da Precificação/g, "### 1. A Lógica da Precificação");
content = content.replace(/2\. Opções de Fluxo de Pagamento/g, "### 2. Opções de Fluxo de Pagamento");
content = content.replace(/3\. Prazos de Execução/g, "### 3. Prazos de Execução");

content = content.replace(/4\. REFERÊNCIAS RÁPIDAS \(OBJEÇÕES\)/g, "## 4. REFERÊNCIAS RÁPIDAS (OBJEÇÕES)");

// Save formatting
fs.writeFileSync("src/data.ts", content);
console.log("Formatted data.ts with markdown!");
