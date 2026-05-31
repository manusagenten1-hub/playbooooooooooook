const fs = require('fs');

let content = fs.readFileSync('src/data.ts', 'utf8');

// Section 4
content = content.replace("4.1 Enquadramento Antes do Preço\n", "### 4.1 Enquadramento Antes do Preço\n\n");
content = content.replace("4.2 Como Apresentar o Preço\n", "### 4.2 Como Apresentar o Preço\n\n");
content = content.replace("4.3 Qualificação Financeira Antes de Apresentar Valores de Alto Ticket\n", "### 4.3 Qualificação Financeira Antes de Apresentar Valores de Alto Ticket\n\n");

// Section 5
content = content.replace(/5\.1 Objeção: "Preciso Pensar"\n/g, "### 5.1 Objeção: \"Preciso Pensar\"\n\n");
content = content.replace(/5\.2 Objeção: "Tá Caro"\n/g, "### 5.2 Objeção: \"Tá Caro\"\n\n");
content = content.replace(/5\.3 Objeção: "Agora Não É o Momento"\n/g, "### 5.3 Objeção: \"Agora Não É o Momento\"\n\n");
content = content.replace(/5\.4 Objeção: "Vou Verificar com Meu Financeiro e Te Retorno"\n/g, "### 5.4 Objeção: \"Vou Verificar com Meu Financeiro e Te Retorno\"\n\n");
content = content.replace(/5\.5 Objeção: "Preciso Rezar Antes"\n/g, "### 5.5 Objeção: \"Preciso Rezar Antes\"\n\n");
content = content.replace(/5\.6 Objeção: "Me Passa o Preço" \(Antes do Diagnóstico\)\n/g, "### 5.6 Objeção: \"Me Passa o Preço\" (Antes do Diagnóstico)\n\n");
content = content.replace(/5\.7 Objeção: "Fechamos, Mas Não Consigo Enviar o Pix Hoje"\n/g, "### 5.7 Objeção: \"Fechamos, Mas Não Consigo Enviar o Pix Hoje\"\n\n");
content = content.replace(/5\.8 Como Vender para Clientes Céticos\n/g, "### 5.8 Como Vender para Clientes Céticos\n\n");
content = content.replace(/5\.9 Objeção: "Estou Vendo Outras Opções Antes de Decidir"\n/g, "### 5.9 Objeção: \"Estou Vendo Outras Opções Antes de Decidir\"\n\n");
content = content.replace(/5\.10 O Enquadramento Financeiro \(Para Reuniões Onde Há Sinais de Resistência\)\n/g, "### 5.10 O Enquadramento Financeiro (Para Reuniões Onde Há Sinais de Resistência)\n\n");
content = content.replace(/5\.11 A Analogia da Mercedes — Encerrando com Autoridade\n/g, "### 5.11 A Analogia da Mercedes — Encerrando com Autoridade\n\n");

// Section 6
content = content.replace(/6\.1 Saída com Autoridade\n/g, "### 6.1 Saída com Autoridade\n\n");
content = content.replace(/6\.2 Protocolo de Nurturing de Médio Prazo\n/g, "### 6.2 Protocolo de Nurturing de Médio Prazo\n\n");

// Section 7
content = content.replace(/7\.2 Sinais de Alerta e Ações Corretivas\n/g, "### 7.2 Sinais de Alerta e Ações Corretivas\n\n");

// Fixing missing double newlines for quotes
content = content.replace(/\n"/g, "\n\n\"");
content = content.replace(/\n\(/g, "\n\n\(");

// Make "Passo X" bold and add newlines
content = content.replace(/Passo 1 — ([^\n]+)\n/g, "**Passo 1 — $1**\n\n");
content = content.replace(/Passo 2 — ([^\n]+)\n/g, "**Passo 2 — $1**\n\n");
content = content.replace(/Passo 3 — ([^\n]+)\n/g, "**Passo 3 — $1**\n\n");
content = content.replace(/Passo 4 — ([^\n]+)\n/g, "**Passo 4 — $1**\n\n");
content = content.replace(/Caminho A — ([^\n]+)\n/g, "**Caminho A — $1**\n\n");
content = content.replace(/Caminho B — ([^\n]+)\n/g, "**Caminho B — $1**\n\n");

fs.writeFileSync('src/data.ts', content);
console.log('Fixed markdown formatting!');
