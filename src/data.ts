import { PlaybookSection, PlaybookCard } from './types';

export const sections: PlaybookSection[] = [
  { id: 'all', title: 'Visão Geral' },
  { id: '1', title: '1. Qualificação' },
  { id: '2', title: '2. Prospecção' },
  { id: '3', title: '3. Roteiro Reunião' },
  { id: '4', title: '4. Valores' },
  { id: '5', title: '5. Objeções' },
  { id: '6', title: '6. Não-Fechamento' },
  { id: '7', title: '7. KPIs' }
];

export const cards: PlaybookCard[] = [
  {
    id: '1-1',
    sectionId: '1',
    title: '1.1 O Que o SDR Precisa Saber Antes de Qualquer Contato',
    preview: 'Antes de realizar qualquer ligação ou abordagem, o SDR deve levantar...',
    content: `## 1. QUALIFICAÇÃO E SCORING DE LEADS

### 1.1 O Que o SDR Precisa Saber Antes de Qualquer Contato
Antes de realizar qualquer ligação ou abordagem, o SDR deve levantar e registrar as seguintes informações sobre o prospect. Esse levantamento prévio é o que diferencia uma cold call genérica de uma abordagem consultiva que gera respeito imediato.

| Campo | O que registrar |
| --- | --- |
| Nome do decisor | Nome do dono ou responsável pela decisão |
| Tipo de negócio | Segmento, produto ou serviço principal |
| Como vende hoje | Presença digital atual: site, redes, Google Maps, anúncios |
| Dor principal identificada | O que está visivelmente faltando ou errado na presença digital dele |
| Concorrente de referência | Um concorrente que está melhor posicionado digitalmente |
| Nível de interesse estimado | Quente / Morno / Frio (baseado no levantamento) |
| Observações importantes | Qualquer dado relevante que personalize a abordagem |`
  },
  {
    id: '1-2',
    sectionId: '1',
    title: '1.2 Framework de Qualificação — BANT Adaptado',
    preview: 'O BANT (Budget, Authority, Need, Timeline) é o framework de qualificação...',
    content: `### 1.2 Framework de Qualificação — BANT Adaptado
O BANT (Budget, Authority, Need, Timeline) é o framework de qualificação mais consolidado em vendas consultivas. Abaixo, cada dimensão está traduzida para a realidade da nossa agência. 

#### B — Orçamento (Budget)
O objetivo não é perguntar diretamente o orçamento do cliente, mas inferir pela operação se ele tem capacidade financeira para sustentar o investimento.

| Sinal Positivo | Sinal de Alerta |
| --- | --- |
| Faturamento mensal acima de R$ 15 mil | Negócio recém-aberto sem faturamento estabelecido |
| Já investe em marketing, mesmo que mal | Menciona que "está apertado" antes de qualquer valor ser apresentado |
| Ticket médio alto com margem de contribuição saudável | Produto ou serviço de baixo valor com margens estreitas |
| Tem estrutura de time ou sócios | Opera solo com capacidade operacional no limite |


#### A — Autoridade (Authority)
Em pequenas e médias empresas, o decisor quase sempre é o próprio dono. Em empresas com sócios ou estrutura maior, pode ser o gerente financeiro ou de marketing. Nunca avance para apresentação de proposta sem confirmar que está falando com quem decide.
Se o interlocutor não for o decisor:
*"Quando você levar essa conversa pro [sócio / diretor], qual você acha que seria a principal dúvida dele? Assim eu te deixo armado pra essa conversa."*

#### N — Necessidade (Need)
Existe um problema real e urgente que nossos serviços resolvem?

| Necessidade Alta | Necessidade Baixa |
| --- | --- |
| Não aparece no Google quando pesquisam o serviço dele | Já tem presença digital forte e resultados consistentes |
| Site desatualizado ou sem capacidade de gerar leads | Está apenas "explorando opções" sem dor específica |
| Investe em anúncios sem resultado ou sem controle | Já tem agência e não está insatisfeito |
| Concorrentes crescendo enquanto ele estagna | Negócio em retração por razões estruturais que marketing não resolve |


#### T — Prazo (Timeline)
- **Quente**: Quer começar em até 30 dias, tem pressão de mercado ou meta definida.
- **Morno**: Quer começar "em breve", mas sem urgência clara.
- **Frio**: Está pesquisando, sem prazo, sem dor imediata.`
  },
  {
    id: '1-3',
    sectionId: '1',
    title: '1.3 Scoring de Leads — Classificação Objetiva',
    preview: 'Use a tabela abaixo para pontuar cada lead após o primeiro contato...',
    content: `### 1.3 Scoring de Leads — Classificação Objetiva
Use a tabela abaixo para pontuar cada lead após o primeiro contato. O score define a prioridade de follow-up e elimina a subjetividade do "achei que era quente".

| Critério | 0 pts | 1 pt | 2 pts |
| --- | --- | --- | --- |
| É o decisor? | Não | Tem acesso ao decisor | Sim, é o decisor |
| Faturamento estimado | Abaixo de R$ 10k/mês | R$ 10k–25k/mês | Acima de R$ 25k/mês |
| Tem dor digital clara? | Não identificada | Parcialmente | Dor explícita e urgente |
| Já investiu em marketing? | Nunca | Tentou e desistiu | Investe, mas sem resultado |
| Prazo para iniciar | Indefinido | 60–90 dias | Até 30 dias |
| Cita concorrente crescendo? | Não mencionou | Citou vagamente | Mencionou com preocupação |

**Interpretação do Score:**
- **0–4 pontos: Lead frio.** Entra na cadência de nurturing de longo prazo.
- **5–8 pontos: Lead morno.** Agendar reunião com estrutura de diagnóstico completo.
- **9–12 pontos: Lead quente.** Prioridade máxima. Agendar em menos de 24 horas e preparar hipótese de solução antes da reunião.`
  },
  {
    id: '1-4',
    sectionId: '1',
    title: '1.4 Critérios de Desqualificação',
    preview: 'Desqualificar um lead no momento certo não é perder uma venda...',
    content: `### 1.4 Critérios de Desqualificação

Desqualificar um lead no momento certo não é perder uma venda — é preservar tempo e relacionamento. Insistir com um lead desqualificado desperdiça agenda e pode queimar uma indicação futura.

**Desqualifique imediatamente quando:**
- O negócio fatura abaixo de R$ 8 mil por mês e não há perspectiva clara de crescimento. Marketing resolve funil, não modelo de negócio. 
- Você não consegue acesso ao decisor após duas tentativas, e o interlocutor não tem poder de avançar. 
- O cliente já foi atendido por outra agência, está insatisfeito, mas as expectativas que levanta são irrealistas. 
- O segmento tem restrições legais que inviabilizam anúncios pagos. 
- O cliente demonstra disposição para questionar cada etapa antes mesmo de fechar — sinal de que a relação será mais desgastante do que produtiva.

**Script de desqualificação elegante:**
*"[Nome], fui direto com você durante toda essa conversa e vou continuar sendo. Com base no que você me apresentou, eu não conseguiria te entregar o resultado que você merece no momento. Seria desonesto da minha parte avançar sabendo disso. O que eu recomendo é [ação concreta: crescer um pouco mais a operação, resolver X internamente primeiro, etc.], e quando você estiver nesse ponto, eu quero ser a primeira agência que você chama."*`
  },
  {
    id: '2-1',
    sectionId: '2',
    title: '2.1 Método 1 — Boa e Má Notícia',
    preview: 'Este método funciona pela estrutura de padrão interrompido...',
    content: `## 2. PROSPECÇÃO E COLD CALLS

### 2.1 Método 1 — Boa e Má Notícia

Este método funciona pela estrutura de padrão interrompido: começa com algo inesperado que gera curiosidade imediata, e usa o gancho da concorrência para criar relevância antes de qualquer pitch.

**Abertura:**
*"Alô, [Nome]? Fala [Nome do Prospect], aqui é o [Seu Nome] da [Agência]. [Nome], eu tenho duas notícias pra você: uma boa e uma má. Qual você prefere ouvir primeiro?"*

(Aguarde a resposta.)

**A má notícia:**
*"A má notícia é que essa é uma ligação fria."*

**A boa notícia:**
*"A boa notícia é que é uma ligação fria onde eu estudei bastante o seu negócio. Inclusive, já vi como os seus concorrentes estão fazendo para vender mais que você, e estou disposto a trazer essa estratégia pra você."*

**Micro-comprometimento — ganhando permissão para continuar:**
*"Teria 1 minutinho pra eu te explicar como funciona?"*

**O pitch de valor:**
*"O nosso objetivo é identificar os gargalos na sua presença digital e implementar uma estrutura de aquisição de clientes forte — com processo, ferramenta e taxa de conversão alta para um crescimento previsível."*

**Fechamento com alternativa dupla:**
*"Meu convite é fazermos uma reunião via Meet de uns 30 minutos para eu te trazer esse diagnóstico. Conseguimos na sexta-feira às 9h ou às 17h? Qual fica melhor pra você?"*`
  },
  {
    id: '2-2',
    sectionId: '2',
    title: '2.2 Método 2 — Amigo de Longa Data',
    preview: 'Este método é mais consultivo e funciona melhor com perfis que resistem...',
    content: `### 2.2 Método 2 — Amigo de Longa Data

Este método é mais consultivo e funciona melhor com perfis que resistem a abordagens convencionais de telemarketing. O tom é informal desde o início, o que cria uma dúvida momentânea no prospect e ganha os primeiros três segundos cruciais.

**Abertura informal:**
*"Oi, [Nome], aqui é o [Seu Nome], tudo bem?"*

**Empatia reversa — antecipando a objeção:**
*"[Nome], eu sei que você provavelmente não estava esperando minha ligação agora e talvez nem tenha interesse em falar com agências..."*

**Pedido de 50 segundos — devolvendo o controle ao prospect:**
*"...mas eu trabalho na [Agência] e queria apenas 50 segundinhos para explicar o motivo da minha ligação. Se depois disso você achar que não faz sentido, a gente desliga e eu não te incomodo mais. Pode ser?"*

**Se o prospect perguntar como você conseguiu o número:**
*"Eu peguei seu contato pelo [LinkedIn / Apollo / ferramenta de prospecção], que é um software de inteligência comercial que usamos para encontrar empresas com o perfil da [Empresa do Prospect]. Transparência total."*

**O gancho da concorrência:**
*"O motivo real do meu contato é que recentemente fechamos um projeto com uma empresa que é concorrente direta de vocês, e os resultados em [métrica: vendas / leads / posicionamento no Google] foram tão fora da curva que eu senti que precisava te mostrar como fizemos isso."*

**Fechamento com alternativa dupla:**
*(Use o mesmo fechamento do Método 1.)*`
  },
  {
    id: '2-3',
    sectionId: '2',
    title: '2.3 O SDR Não Agenda — Ele "Vende" a Reunião',
    preview: 'A principal falha de um SDR é tratar o agendamento como uma tarefa...',
    content: `### 2.3 O SDR Não Agenda — Ele “Vende” a Reunião

A principal falha de um SDR é tratar o agendamento como uma tarefa administrativa. Marcar uma reunião não é registrar um horário no calendário — é convencer o prospect de que aqueles 30 minutos são o investimento de tempo mais valioso do dia dele. Se o lead não enxerga valor na reunião antes de entrar nela, ele não aparece.
Métrica de vaidade: agendar muitas reuniões com baixo comparecimento (abaixo de 70%) infla os números do SDR mas não gera faturamento. Uma reunião que não acontece tem custo zero para o prospect e custo real para a agência — tempo do Closer alocado, agenda bloqueada, energia perdida. O objetivo não é volume de agendamentos. É volume de reuniões realizadas com leads quentes.

#### Técnica 1 — Venda o Conteúdo da Reunião, Não o Serviço
O SDR não vende o serviço da agência. Isso é papel do Closer dentro da reunião. O SDR vende o que vai acontecer dentro da conversa — e esse é um produto completamente diferente.

A mudança é sutil mas decisiva:

| ❌ Framing Fraco | ✅ Framing Correto |
| --- | --- |
| "Quero te apresentar nossos serviços" | "Quero te trazer um diagnóstico da sua presença digital" |
| "A gente trabalha com tráfego pago" | "Vou te mostrar o que seus concorrentes estão fazendo que você não está" |
| "Pode me dar 30 minutos?" | "Em 30 minutos você vai saber exatamente onde está perdendo clientes" |

**Script de agendamento com foco no conteúdo:**
*"Meu convite é o seguinte: a gente faz uma reunião de 30 minutos onde eu trago um diagnóstico da sua presença digital, mapeio o que seus concorrentes estão fazendo e te apresento um plano de ação específico para o seu negócio. Você não precisa comprar nada — você vai sair da conversa com clareza sobre o que está freando seu crescimento agora. Conseguimos na [dia] às [hora] ou na [dia] às [hora]?"*

#### Técnica 2 — Deixe o Ganho Imediato Explícito
O prospect precisa saber com precisão o que leva da reunião, independente de fechar ou não. Quando o benefício é vago, o compromisso é frágil — e o no-show acontece.

**Script com ganho explícito:**
*"Ao final da conversa, você vai ter três coisas: um mapa de onde você está perdendo clientes digitalmente, o que os seus concorrentes estão fazendo que está funcionando, e uma recomendação clara de qual seria o primeiro passo pra reverter isso. Mesmo que a gente não feche nada, esse diagnóstico já tem valor por si só."*

#### Técnica 3 — Posicione a Reunião Como a Ponte Entre o Problema e a Solução
O prospect já sabe que tem um problema — é por isso que ele continuou na ligação. A reunião precisa ser apresentada não como "mais uma conversa com uma agência", mas como o passo necessário entre o problema atual e o resultado que ele quer.

**Script de bridge:**
*"Você me disse que [dor específica levantada na ligação — ex: 'não aparece no Google', 'não tem controle sobre a chegada de clientes']. Essa conversa de 40 minutos é o caminho mais rápido entre onde você está agora e entender como resolver isso. Não vou te pedir nada nessa reunião — só quero te mostrar o que eu enxergo de oportunidade no seu negócio."*

#### Conhecimento Técnico: O SDR Precisa Saber o Que Acontece na Reunião
O SDR não pode vender algo que não conhece. Para convencer o prospect com autoridade de que a reunião vale o tempo dele, o SDR precisa dominar o que o Closer faz durante os 35–45 minutos da conversa.

O roteiro de reunião da agência segue cinco fases (detalhadas na Seção 3 deste playbook):
- **#### Fase 1 — Abertura:** alinhamento de expectativas e demonstração de que o Closer estudou o negócio do prospect antes de entrar na conversa.
- **#### Fase 2 — Discovery:** diagnóstico profundo da situação atual — como o prospect traz clientes hoje, qual é a presença digital dele, onde estão os gargalos, quanto ele está deixando de ganhar.
- **#### Fase 3 — Diagnóstico espelhado:** o Closer devolve ao prospect, de forma estruturada, o problema que ele mesmo acabou de descrever — e quantifica o custo de não resolver.
- **#### Fase 4 — Apresentação da solução:** uma proposta específica para o problema mapeado, não um cardápio de serviços.
- **#### Fase 5 — Investimento e fechamento:** apresentação de valores com enquadramento e tratamento de objeções.

**Quando o prospect perguntar "do que se trata essa reunião?":**
*"A gente começa com algumas perguntas rápidas sobre como você traz clientes hoje e onde você quer chegar. Com base nisso, o especialista te apresenta um diagnóstico do que está travando o seu crescimento e uma recomendação concreta. A conversa toda dura uns 30 minutos e é totalmente focada no seu negócio."*

#### Confirmação da Reunião — Protocolo Obrigatório
O agendamento não encerra a responsabilidade do SDR. Reuniões sem confirmação têm taxa de no-show significativamente maior.

**Mensagem 24 horas antes (WhatsApp ou e-mail):**
*"[Nome], passando para confirmar nossa conversa amanhã às [hora]. Conforme combinamos, vou trazer um diagnóstico da sua presença digital e o que seus concorrentes estão fazendo. Confirma pra mim que está na agenda?"*

**Mensagem no dia da reunião (1–2 horas antes):**
*"[Nome], a gente se fala em [X horas]. O link do Meet é [link]. Qualquer imprevisto, me chama aqui."*

*Se o prospect não responder a nenhuma das confirmações, ligue antes da reunião. Não entre em uma chamada com um lead que não confirmou presença.*`
  },
  {
    id: '2-4',
    sectionId: '2',
    title: '2.4 Roteiro de Cold Call Estratégico',
    preview: 'Duração estimada: 5–10 minutos. O objetivo da ligação não é vender...',
    content: `### 2.4 Roteiro de Cold Call Estratégico

Duração estimada: 5–10 minutos. O objetivo da ligação não é vender o serviço — é vender a reunião. O SDR sai da ligação com uma data e horário confirmados ou com o lead desqualificado. Não existe meio-termo.

#### Preparação Antes de Discar
Antes de fazer qualquer ligação, o SDR deve ter em mãos:
- Nome do decisor (não ligue sem saber com quem falar)
- Tipo de negócio e segmento
- Status da presença digital (tem site? aparece no Google? roda anúncios?)
- Nome de um concorrente com presença digital mais forte — esse é o seu principal ativo na ligação
- Qual serviço provavelmente faz mais sentido para aquele perfil (hipótese inicial)

*Se não tiver pelo menos as três primeiras informações, faça o levantamento antes de discar. Uma ligação sem contexto é telemarketing. Uma ligação com contexto é prospecção consultiva.*

#### #### Fase 1 — Abertura (0–60 segundos)
Escolha o método conforme o perfil do lead. Use o Método 1 quando tiver um gancho de concorrência forte e quiser impactar imediatamente. Use o Método 2 quando o perfil for mais resistente a abordagens comerciais diretas.
*(Os dois métodos completos estão na Seção 2.1 e 2.2 deste playbook.)*

Regra de ouro da abertura: não deixe o lead perceber que está numa ligação de vendas genérica. O que diferencia é a especificidade — mencionar o segmento dele, a cidade, um concorrente pelo nome, algo que mostre que você estudou antes de ligar.

**Exemplo de abertura personalizada:**
*"[Nome], eu dei uma olhada no seu negócio antes de ligar. Vi que você atua com [segmento] em [cidade] e que o [concorrente X] está rodando anúncios e aparecendo na primeira posição do Google pra quem pesquisa [serviço] na região. Quero te mostrar como eles estão fazendo isso — e como a gente pode virar esse jogo."*

#### #### Fase 2 — Qualificação Rápida (1–3 minutos)
Depois da abertura e do micro-comprometimento ("teria 1 minutinho?"), o SDR faz no máximo três perguntas de qualificação. O objetivo não é fazer discovery completo — isso é papel do Closer na reunião. O objetivo é identificar a dor principal e confirmar que o lead vale um agendamento.

**As três perguntas de qualificação do SDR:**
1. *"Me diz rapidinho: como você traz a maioria dos seus clientes hoje — é mais por indicação, redes sociais, Google, anúncios?"* (Identifica o canal atual e o nível de maturidade digital.)
2. *"Você tem site? E quando alguém pesquisa [serviço] em [cidade] no Google, você aparece nas primeiras posições?"* (Identifica o gap de presença digital — a resposta "não sei" já é uma dor.)
3. *"Você já investiu em anúncios pagos antes — Google Ads, Meta Ads? Como foi essa experiência?"* (Identifica se já tentou e não teve resultado, ou se nunca tentou — ambos são oportunidades diferentes.)

**O que fazer com as respostas:**
- Se o lead confirmar alguma dessas situações — não aparece no Google, nunca rodou anúncio, site sem resultado, concorrente crescendo — você tem a dor. Vá para a Fase 3.
- Se o lead disser que "está tudo bem" e não apresentar nenhuma dor, aprofunde com uma pergunta: *"Entendo. E o volume de clientes que chega hoje, você está satisfeito ou tem espaço pra crescer?"*
Quase nenhum dono de negócio dirá que não quer crescer. A resposta abre a conversa para a próxima fase.

#### #### Fase 3 — Pitch Personalizado (1–2 minutos)
Com a dor identificada, conecte diretamente o que você ouviu ao que a reunião vai entregar. Não apresente a agência aqui — apresente o problema de volta para o lead, com mais clareza do que ele próprio descreveu.

**Estrutura do pitch:**
*"Pelo o que você me disse, [resuma a dor em uma frase — ex: 'você depende de indicação e não tem controle sobre a chegada de clientes']. Isso é exatamente o cenário que a gente resolve. E o que eu quero te mostrar é como seus concorrentes estão usando [tráfego pago / SEO local / presença digital] pra garantir um fluxo previsível de clientes — e como a gente pode replicar isso pro seu negócio."*

**Amplifique com o concorrente:**
*"O [concorrente X] está aparecendo antes de você pra quem pesquisa [serviço] em [cidade]. Isso significa que todo cliente que pesquisa e não te encontra, provavelmente está indo pra ele. A gente consegue reverter isso."*

#### #### Fase 4 — Venda da Reunião (1–2 minutos)
Aqui o SDR aplica as técnicas da Seção 2.3 — vender o conteúdo da reunião, deixar o ganho explícito e posicionar a conversa como a ponte entre o problema atual e a solução.

**Script de venda da reunião:**
*"Meu convite é o seguinte: a gente faz uma reunião de 30 minutos onde eu trago um diagnóstico completo da sua presença digital, te mostro o que seus concorrentes estão fazendo e apresento um plano de ação específico pro seu negócio. Você não precisa comprar nada — mas vai sair da conversa sabendo exatamente onde está perdendo clientes e o que fazer pra mudar isso."*

**Se o lead perguntar "do que se trata essa reunião?":**
*"A gente começa com algumas perguntas sobre como você traz clientes hoje e onde você quer chegar. Com base nisso, o especialista te apresenta um diagnóstico do que está travando seu crescimento e uma recomendação concreta do primeiro passo. Dura uns 30 minutos e é totalmente focada no seu negócio."*

#### #### Fase 5 — Agendamento (1 minuto)
Nunca pergunte "se" o lead quer a reunião. Ofereça sempre duas opções de horário — a alternativa dupla elimina a pergunta "quero ou não quero" e substitui por "qual dos dois".

**Script de fechamento do agendamento:**
*"Conseguimos na [dia] às [hora] ou na [dia] às [hora]? Qual fica melhor pra você?"*

**Após a confirmação, repita os detalhes e registre tudo:**
*"Perfeito. Então [dia] às [hora], reunião via Google Meet de 30 minutos. Vou te mandar o link agora no WhatsApp e uma confirmação no dia anterior. O número que você está atendendo agora é o melhor pra eu te mandar?"*

#### #### Fase 6 — Resistência Durante a Ligação (objeções)
As objeções na cold call são diferentes das objeções na reunião. Aqui o lead ainda não viu nada — ele está resistindo ao tempo, não à proposta. O tratamento deve ser rápido, sem entrar em modo de venda.

**"Não tenho interesse"**
*"Entendo. Só uma pergunta antes de encerrar: você está satisfeito com o volume de clientes que chega hoje? Pergunto porque a maioria dos negócios que me dizem isso descobre que está perdendo clientes pra concorrentes que aparecem antes deles no Google. Se não for o caso, tudo certo — só queria confirmar."*
*(Se ele confirmar que está satisfeito, desqualifique com elegância. Se hesitar, você recuperou a ligação.)*

**"Já tenho agência"**
*"Ótimo, então você já investe em marketing — fica mais fácil conversar. O que eu quero te mostrar não é substituir o que você já tem. É uma análise de onde pode estar escapando resultado que você não está capturando. Uma conversa de 30 minutos não compromete nada e pode te dar uma visão que sua agência atual talvez não esteja trazendo. Vale o tempo?"*

**"Tô sem tempo agora"**
*"Perfeito, não vou tomar seu tempo agora. Quando seria melhor — [dia] às [hora] ou [dia] às [hora]? Posso ligar nesses horários."*
*(Não explique mais nada. Ele disse que não tem tempo agora — respeite isso e proponha um momento específico imediatamente.)*

**"Me manda no WhatsApp"**
Cuidado: "me manda no WhatsApp" muitas vezes significa "quero encerrar essa ligação". Não envie material genérico — personalize antes de desligar.
*"Claro. Antes de eu preparar o material, me diz rapidinho: você tem site hoje? [resposta] Perfeito. Vou preparar algo específico pro seu caso e te mando em até duas horas. Posso confirmar seu número aqui?"*
Após enviar, siga com o agendamento via WhatsApp:
*"[Nome], conforme combinamos, segue [material]. Pelo que você me contou, acho que a reunião de diagnóstico faz muito sentido pro seu momento. Conseguimos [dia] às [hora] ou [dia] às [hora]?"*

**"Já vi isso antes / já fiz com agência e não deu resultado"**
*"Entendo — e essa é exatamente a razão pela qual eu quero conversar. O que não deu resultado antes quase sempre é rastreável: foi o público errado, a verba mal distribuída, o site que não convertia ou a gestão que não otimizava. Em 40 minutos eu consigo te mostrar onde foi o gargalo e o que seria diferente agora. Você toparia ouvir isso antes de fechar a porta?"*

#### #### Fase 7 — Registro Pós-Ligação
Imediatamente após encerrar a ligação, o SDR registra no CRM:

| Campo | O que registrar |
| --- | --- |
| Status | Agendado / Não qualificado / Follow-up pendente |
| Dor identificada | A resposta mais relevante das perguntas de qualificação |
| Serviço hipotético | Qual solução provavelmente faz sentido para aquele perfil |
| Concorrente mencionado | Se o prospect citou algum concorrente na ligação |
| Data e hora da reunião | Confirmar que está no calendário do Closer |
| Observações | Qualquer detalhe que ajude o Closer a personalizar a abertura da reunião |

*O Closer entra na reunião lendo essas observações — sem isso, ele começa do zero e perde os primeiros minutos reconstruindo contexto que o SDR já tinha levantado.*

#### Visão Geral do Fluxo
\`\`\`
DISCAR
  │
  ▼
ABERTURA (Método 1 ou 2)
  │
  ├── Lead engaja → QUALIFICAÇÃO RÁPIDA (3 perguntas)
  │
  ├── Lead resiste → TRATAMENTO DE RESISTÊNCIA → tenta recuperar
  │                  Se não recuperar → DESQUALIFICA com elegância
  │
  └── Lead pede material → SOLICITA WHATSAPP E PREPARA MATERIAL
\`\`\`
`
  },
  {
    id: '2-5',
    sectionId: '2',
    title: '2.5 Como Passar Pela Atendente e Chegar ao Dono',
    preview: 'Esta seção cobre exclusivamente a etapa anterior à cold call...',
    content: `### 2.5 Como Passar Pela Atendente e Chegar ao Dono

Esta seção cobre exclusivamente a etapa anterior à cold call — o momento em que o SDR precisa superar o filtro da atendente ou recepcionista para falar diretamente com o decisor.

#### A Lógica por Trás da Abordagem 
A atendente não é inimiga. Ela está fazendo o trabalho dela, que é filtrar ligações. O erro mais comum do SDR é tratar essa etapa como um obstáculo a ser contornado com uma mentira ou com uma história elaborada. Isso cria atrito, destrói credibilidade e eventualmente chega ao dono de forma negativa.

A abordagem correta é ser direto, confiante e breve. Atendentes filtram quem hesita, quem explica demais e quem soa como telemarketing. Quem soa como alguém que já conhece o dono, ou que tem algo concreto e específico a dizer, raramente é barrado.

**Duas regras para essa etapa:**
1. **Primeira:** quanto menos informação você der à atendente, melhor. Cada detalhe que você acrescenta é uma oportunidade para ela dizer "posso passar um recado?" ou "manda no WhatsApp da empresa". A brevidade é a sua maior aliada.
2. **Segunda:** nunca minta sobre sua identidade ou sobre o motivo da ligação. Seja estratégico com a informação, não desonesto. Se o dono descobrir depois que você se passou por outra coisa, o negócio está morto antes de começar.

#### Cenário 1 — Você Tem o Nome do Dono
Este é o cenário mais favorável. Quando você pesquisa o negócio antes de ligar (conforme o checklist da Seção 2.4) e descobre o nome do decisor — seja pelo Google, LinkedIn, Instagram ou Manus/Apify — use o primeiro nome imediatamente. Somos programados para presumir que quem pede alguém pelo nome já conhece aquela pessoa.

**Script:**
*"Boa tarde, o [Nome do dono] está?"*
*(Pausa. Nada mais. Não explique quem você é ainda. Espere a resposta.)*

**Se a atendente perguntar "quem está falando?":**
*"É o [Seu nome], da [Agência]. Pode me passar pra ele?"*
*(Ainda breve. Nome e empresa, sem mais detalhes.)*

**Se a atendente perguntar "sobre o que é?":**
*"É sobre a presença digital de vocês no Google. É rapidinho, 1 minutinho com ele."*

#### Cenário 2 — Você Não Tem o Nome do Dono
Quando não foi possível identificar o nome do decisor antes da ligação, vá direto ao cargo ou à função.

**Script:**
*"Boa tarde, com o responsável pelo negócio, por favor? Com o proprietário?"*

**Se perguntar "sobre o que é?":**
*"Tenho uma análise que fizemos sobre a presença de vocês no Google. É algo rápido, 1 minutinho com ele."*

**Se a atendente insistir em mais detalhes antes de transferir:**
*"É uma informação específica sobre o posicionamento de vocês frente aos concorrentes na internet. Prefiro passar diretamente pra ele porque é visual — fica mais claro em 1 minuto de conversa do que explicando por aí."*

*Após a ligação, se você conseguiu falar com o dono, registre o nome dele no CRM imediatamente para as próximas ligações.*

#### Cenário 3 — A Atendente Pede Mais Informações Antes de Transferir
Algumas atendentes são treinadas para extrair o máximo de informação antes de qualquer transferência. O erro aqui é ceder e começar a explicar o serviço para ela — isso quase sempre resulta em "vou passar o recado" ou "manda no e-mail da empresa".

**Script para manter a brevidade sem parecer invasivo:**
*"Entendo. Olha, o que eu tenho pra mostrar pra ele é uma análise específica do negócio de vocês — não é uma oferta genérica. Por isso prefiro falar direto com ele, porque depende de informações que só ele vai ter. Você consegue me passar?"*

**Se ela continuar resistindo:**
*"Sem problema. Qual seria o melhor horário pra eu ligar de volta e já falar com ele diretamente? Prefiro não deixar recado porque o que eu tenho é visual — num e-mail ou recado não vai fazer o mesmo sentido."*

#### Cenário 4 — O Dono Está Ocupado no Momento
Este cenário tem dois objetivos: agendar um horário de retorno e, se possível, conseguir o número direto do dono para a próxima ligação não precisar passar pela atendente de novo.

**Script:**
*"Tudo bem, entendo. Quando seria o melhor horário pra eu ligar de volta e já falar com ele? Manhã ou tarde?"*
*(Confirme o horário e anote no CRM.)*

**Depois de confirmar o horário, tente o número direto com naturalidade:**
*"Perfeito. Tem algum número direto dele ou é melhor ligar aqui mesmo nesse número?"*
*(Muitas atendentes passam o número direto quando a pergunta é feita de forma casual, logo após o horário já estar confirmado — porque a sensação é de que a ligação já foi legitimada.)*

**Se ela não passar o número direto:**
*"Sem problema, ligo aqui mesmo. Então [dia] às [hora], correto? Vou anotar aqui. Obrigado, [nome da atendente se souber]."*
*(Usar o nome da atendente no encerramento constrói rapport para as próximas ligações — se você ligar de novo, ela já te conhece.)*

#### Cenário 5 — "Manda no WhatsApp da Empresa" ou "Manda um E-mail"
Esse redirecionamento é um filtro clássico. O WhatsApp e o e-mail da empresa muitas vezes são gerenciados pela própria atendente, e sua mensagem raramente chega ao dono.

**Script:**
*"Claro, posso mandar. Mas o que eu tenho pra mostrar é visual — fica muito mais claro em 2 minutos de conversa do que num texto. Quando seria um bom horário pra eu ligar de volta e já falar diretamente com ele?"*

**Se ela insistir no WhatsApp:**
*"Tudo bem, vou mandar. Qual o número direto dele? Porque o que eu quero mostrar precisa de uma resposta rápida e prefiro ter certeza de que chegou até ele."*
*(Se ela passar o número direto, você ganhou o que precisava. Se não passar, mande a mensagem no WhatsApp da empresa de forma personalizada — nunca uma mensagem genérica — e mencione que vai ligar de volta em horário específico.)*

**Mensagem de WhatsApp para quando não tem o contato direto:**
*"Boa tarde, [Nome do dono se souber / ou 'tudo bem com você?']. Aqui é o [Seu Nome] da [Agência]. Liguei agora e a [atendente] me informou que você estava ocupado. Tenho uma análise específica sobre a presença de vocês no Google que quero te mostrar — incluindo o que seus concorrentes estão fazendo na região. É rápido, uns 15 minutinhos. Quando seria um bom horário pra conversar?"*

#### Cenário 6 — A Atendente Diz "Ele Não Atende Ligações Assim"
Este é o filtro mais duro. Significa que o dono pediu explicitamente para bloquear ligações comerciais. Aqui, a abordagem agressiva não funciona — e insistir vai queimar o lead para sempre.

**Script:**
*"Entendo, respeito isso. Só uma coisa antes de encerrar: você pode passar pra ele que o [Seu Nome], da [Agência], fez uma análise da presença de vocês no Google e encontrou uma oportunidade específica em relação a como os concorrentes de vocês estão crescendo na região? Se ele quiser ver, pode me chamar. Deixo meu número com você."*
*(Passe seu número. Encerre de forma cordial. Registre no CRM como "filtro forte — tentar via WhatsApp ou LinkedIn".)*

Em seguida, tente um canal alternativo — mensagem direta no Instagram da empresa, LinkedIn do dono, ou WhatsApp se conseguir o número por outra fonte.

#### Cenário 7 — Ligação de Retorno (Você Já Falou com a Atendente Antes)
Quando você já ligou anteriormente e está retornando no horário combinado, use o vínculo que já existe com a atendente.

**Script:**
*"Boa tarde, [nome da atendente se souber]. Aqui é o [Seu Nome] da [Agência]. Combinei de ligar hoje às [hora] pra falar com [Nome do dono]. Ele está disponível?"*
Usar o nome dela e referenciar o compromisso anterior cria continuity e reduz drasticamente a chance de ser filtrado novamente.

### Tabela de Referência Rápida

| Situação | Objetivo | Abordagem |
| --- | --- | --- |
| Tem o nome do dono | Transferência direta | Nome + empresa, zero explicação |
| Sem o nome do dono | Transferência + descobrir o nome | "Responsável / proprietário" |
| Atendente pede detalhes | Manter brevidade | "É visual, prefiro falar com ele direto" |
| Dono ocupado | Horário de retorno + número direto | Confirma horário, pergunta número casualmente |
| "Manda no WhatsApp" | Número direto ou retorno confirmado | "Quando posso ligar de volta?" |
| "Ele não atende assim" | Deixar recado estratégico + canal alternativo | Recado curto + número seu + outro canal |
| Retorno de ligação anterior | Aproveitar vínculo com a atendente | Nome dela + referência ao compromisso |`
  },
  {
    id: '2-6',
    sectionId: '2',
    title: '2.6 Como Explicar e Mostrar Valor',
    preview: 'Como explicar e mostrar valor de cada solução para que qualquer pessoa...',
    content: `### 2.6 Como Explicar e Mostrar Valor de Cada Solução
Esta seção existe para que qualquer pessoa da equipe — SDR ou Closer, veterano ou recém-contratado — consiga explicar cada serviço com clareza, mostrar valor sem jargão técnico e conectar a solução ao problema específico do lead. Cada serviço tem uma versão curta (para cold call) e uma versão completa (para reunião).

#### Como Identificar Qual Serviço Liderar
Antes de apresentar qualquer solução, o SDR ou Closer precisa saber qual serviço tem mais aderência àquele lead. A tabela abaixo orienta essa decisão com base no que foi descoberto na qualificação.
| Situação do Lead | Serviço Prioritário |
| --- | --- |
| Não tem site ou tem site desatualizado | Site Profissional — é a base de tudo |
| Tem site mas não aparece no Google Maps | SEO Local |
| Aparece no Google mas quer mais volume rápido | Tráfego Pago |
| Tem site e não roda anúncio | Tráfego Pago |
| Concorrente aparece antes dele no Google | SEO Local + Tráfego Pago |
| Não tem nada: sem site, sem SEO, sem anúncio | Site → SEO → Tráfego (nessa ordem) |

Regra geral: site sem tráfego não converte. Tráfego sem site desperdiça verba. SEO sem site não existe. O site é sempre a fundação.

### 1. SITE PROFISSIONAL

#### O Problema que Resolve
A maioria dos donos de negócio acredita que ter perfil no Instagram ou no Google Maps já é o suficiente. Não é. Redes sociais são terreno alugado — você não controla o algoritmo, não tem como otimizar para conversão e, se a plataforma mudar as regras, você perde o canal. Um site profissional é o único ativo digital que você realmente possui.
Mais do que isso: um site mal feito não é neutro — ele prejudica ativamente. Quando alguém recebe uma indicação e vai pesquisar o negócio no Google, o que aparece é o site. Se o site é lento, desatualizado, não abre bem no celular ou não tem nenhum caminho claro para o contato, a indicação se perde ali.
O problema central que o SDR e o Closer precisam comunicar: um site profissional não é uma despesa de imagem. É um vendedor que trabalha 24 horas por dia, 7 dias por semana, sem faltar, sem pedir aumento e sem precisar de treinamento.

#### Como Explicar Sem Jargão

"Pensa assim: quando alguém recebe uma indicação do seu negócio — ou te encontra por qualquer outro meio — a primeira coisa que ela faz é te pesquisar no Google. O que aparece ali é a primeira impressão real que ela vai ter de você. Se o site é lento, feio ou não tem nenhuma forma clara de entrar em contato, aquela pessoa fecha e vai pro próximo. Você perdeu um cliente sem nem saber. Um site profissional garante que essa primeira impressão converte — que a pessoa que chegou até você, fica."

#### Script para Cold Call (30–45 segundos)

"O que eu quero te mostrar na reunião é o seguinte: hoje, quando alguém pesquisa [serviço] na sua cidade e chega no seu site — ou não encontra nenhum — existe uma janela enorme pra você perder esse cliente antes de falar qualquer coisa com ele. A gente constrói sites que fecham essa janela. Não é um cartão de visita digital. É uma estrutura de conversão que trabalha pra você o tempo inteiro, sem depender de postagem, de algoritmo ou de indicação."

#### Script para Reunião (versão completa)
Contexto de uso: lead sem site, ou com site desatualizado, ou com site que não gera nenhum contato.

"Deixa eu te mostrar como eu enxergo a situação de vocês. Hoje, quando alguém pesquisa [serviço] em [cidade] — seja no Google, seja porque recebeu uma indicação sua — ela vai te procurar online. Se não encontrar nada, ou se o que ela encontrar passar uma imagem de descuido, ela fecha e vai pro concorrente. Você nunca fica sabendo que aquela pessoa existiu."

"Um site profissional resolve isso em três frentes. Primeira: credibilidade — quando alguém chega até você, ela vê um negócio organizado, profissional, que passa confiança. Segunda: conversão — o site é estruturado para que a pessoa que chegou até ali tome uma ação: ligue, mande mensagem, preencha um formulário. Terceira: base para tudo o mais — SEO, anúncios, campanhas — tudo isso só funciona bem quando tem um site sólido pra receber o tráfego. Sem site, você tá jogando dinheiro fora em qualquer outra estratégia digital."

"O que a gente entrega não é um site bonito. É um site que trabalha. Estrutura pensada pra conversão, velocidade de carregamento adequada para o Google não te penalizar, botões de WhatsApp integrados, formulários que funcionam no celular — porque mais de 70% do tráfego hoje é mobile — e um painel onde você mesmo consegue fazer atualizações simples sem depender de ninguém."

#### Analogias de Apoio
A vitrine da rua mais movimentada:

"Imagina que você tem um comércio físico, mas a vitrine está escura, a placa está apagada e a porta não abre direito. As pessoas passam, olham e seguem em frente. Seu site hoje é essa vitrine. A gente vem aqui e coloca luz, coloca placa nova e deixa a porta aberta."
O vendedor que nunca dorme:

"Todo mundo tem um limite de horário. Você atende das X às Y. Seu site não. Às 2 da manhã, quando alguém decide que precisa de [serviço] e pesquisa no Google, seu site pode estar lá, explicando o que você faz, mostrando seus trabalhos e pegando o contato dessa pessoa pra você retornar de manhã."
Terreno alugado vs. terreno próprio:

"Instagram, TikTok, Google Maps — você está em terreno alugado. O proprietário muda as regras quando quiser. Já aconteceu com o Facebook quando o alcance orgânico caiu de 30% para 2% de um dia pro outro. Site é terreno seu. Ninguém tira."

#### Sinal de Compra Específico
O lead está pronto para avançar quando diz: "meu site é velho, não gosto dele", "tenho site mas ninguém entra em contato por lá", "minha concorrente tem um site muito melhor que o meu" ou "ainda não tenho site, fico só no Instagram".

### 2. SEO LOCAL ESTRATÉGICO

#### O Problema que Resolve
SEO Local não é sobre aparecer na internet de forma genérica. É sobre aparecer no momento exato em que alguém na sua cidade está pesquisando ativamente o serviço ou produto que você oferece — no Google Maps, nas buscas do Google, nos resultados locais. Esse é o cliente de maior intenção de compra que existe: ele já decidiu que quer, está só escolhendo de quem comprar.
O problema central é a invisibilidade no momento de decisão. Se o concorrente aparece antes de você nesses resultados, você está perdendo clientes que nunca souberam que você existia. E esse custo é silencioso — ele não aparece em nenhum relatório, nenhuma planilha. Simplesmente não entra.

#### Como Explicar Sem Jargão

"SEO Local é o trabalho que garante que quando alguém abre o Google e pesquisa '[serviço] em [cidade]', o seu negócio aparece nas primeiras posições — não o do seu concorrente. É como garantir que a sua loja está na rua mais movimentada da cidade, no ponto de maior visibilidade, sem pagar aluguel extra por isso. Quem aparece primeiro no Google pega a maioria dos cliques. Quem não aparece, simplesmente não existe pra esse cliente."

#### Script para Cold Call (30–45 segundos)

"Eu pesquisei agora antes de ligar: quando alguém pesquisa [serviço] em [cidade] no Google, o [concorrente X] aparece nas primeiras posições — e você não está visível ali. Isso significa que toda pessoa que pesquisa esse serviço na sua região e não te encontra, está indo direto pra eles. SEO Local é o trabalho que reverte isso. E diferente de anúncio, que para quando você para de pagar, o SEO é um ativo — quanto mais tempo, mais forte fica. Quero te mostrar exatamente o que está acontecendo e o que dá pra fazer."

#### Script para Reunião (versão completa)
Contexto de uso: lead que não aparece no Google Maps, cujo concorrente está melhor posicionado, ou que depende de indicação sem ter presença orgânica.

"Deixa eu te mostrar um dado que muda a forma como a maioria dos donos de negócio enxerga o Google. Setenta e seis por cento das pessoas que pesquisam um serviço local visitam um negócio em até 24 horas. Não são pessoas pesquisando por curiosidade — são pessoas prontas pra comprar, prontas pra contratar, só escolhendo de quem. E a escolha delas começa pelo que aparece primeiro."

"Quando alguém abre o Google e digita [serviço] em [cidade], aparecem três coisas: o mapa com as empresas mais bem avaliadas e otimizadas, os resultados orgânicos logo abaixo, e — se alguém estiver pagando — os anúncios no topo. SEO Local é o trabalho que coloca você nas posições de destaque do mapa e dos resultados orgânicos. Não é um anúncio que some quando você para de pagar. É uma posição que você conquista — e que fica mais forte com o tempo."

"O que a gente faz envolve três frentes. Primeiro, otimização do seu perfil no Google Business — é ali que o mapa é alimentado, e a maioria das empresas tem o perfil incompleto ou mal configurado, o que faz o Google não priorizar. Segundo, construção de autoridade local — sinais que mostram pro Google que você é relevante para aquela cidade e aquele serviço. Terceiro, otimização técnica do site — porque o Google avalia o site pra decidir quem merece aparecer primeiro."

"O resultado prático é o seguinte: clientes que estão ativamente buscando o que você oferece, chegando até você sem você precisar pagar por cada clique. É o tráfego de maior intenção de compra que existe — e ele está indo pro seu concorrente agora porque ele aparece antes de você."

#### Analogias de Apoio
O ponto comercial mais valioso da cidade:

"O ponto comercial mais caro de qualquer cidade é o da esquina mais movimentada, onde todo mundo passa. No mundo digital, o equivalente é a primeira posição do Google Maps. A diferença é que lá você paga aluguel todo mês pelo ponto. No Google, você conquista a posição — e não precisa pagar por ela pra sempre."
O boca a boca mudou de endereço:

"Antigamente, boca a boca era uma pessoa comentando com outra em uma conversa. Hoje, boca a boca é alguém pesquisando no Google. Quando a [Maria] recebe uma indicação sua, a primeira coisa que ela faz é te pesquisar. Se você não aparece bem no Google, a indicação vai embora antes de virar cliente."
O ativo que cresce com o tempo:

"Tráfego pago é como alugar clientes — enquanto você paga, eles chegam. SEO Local é como comprar um terreno — você investe uma vez, e o retorno aumenta com o tempo. Os dois têm espaço na estratégia, mas o SEO é o único que cresce enquanto você dorme."

#### Sinal de Compra Específico
O lead está pronto quando diz: "meu concorrente aparece antes de mim no Google", "quando pesquiso meu serviço na minha cidade eu não aparece", "a maioria dos meus clientes vem por indicação e quero mudar isso", ou quando ele mesmo pesquisa durante a reunião e constata que não está visível.

### 3. TRÁFEGO PAGO

#### O Problema que Resolve
O tráfego pago — Google Ads e Meta Ads — resolve o problema de imprevisibilidade na chegada de clientes. A maioria dos negócios depende de indicação, sazonalidade ou sorte para ter movimento. Tráfego pago transforma isso em algo controlável: você define o volume de clientes que quer atrair, e a campanha trabalha para atingir esse número.
O segundo problema que resolve é urgência. SEO leva meses para mostrar resultado. Um anúncio bem configurado começa a gerar cliques e contatos em dias. Para negócios que precisam de resultado rápido — lançamento, baixa temporada, nova unidade — o tráfego pago é a ferramenta mais imediata disponível.
O erro mais comum na cabeça do lead é achar que "já tentei e não funcionou". Na maioria dos casos, o que não funcionou foi a gestão — público errado, anúncio genérico, site que não convertia o clique. O tráfego pago em si funciona. O que falha é a execução sem estratégia.

#### Como Explicar Sem Jargão

"Tráfego pago é basicamente você aparecer na frente de quem está buscando o que você oferece — seja no Google, quando a pessoa digita o serviço, seja no Instagram e no Facebook, quando a pessoa ainda não sabe que precisa mas tem o perfil do seu cliente ideal. Você controla quem vê, onde vê e quanto investe. E o mais importante: você mede tudo — quantas pessoas viram, quantas clicaram, quantas viraram cliente. Nada de 'acho que funcionou'. Você sabe exatamente."

#### Script para Cold Call (30–45 segundos)

"Hoje, o seu negócio depende de [indicação / boca a boca / movimento espontâneo] pra trazer clientes. Isso funciona, mas você não controla o volume — às vezes vem bastante, às vezes some. Tráfego pago resolve exatamente isso: a gente cria campanhas no Google e no Meta que colocam você na frente de quem está procurando [serviço] na sua região agora. Você define quanto quer investir, a gente gerencia e otimiza, e você começa a receber contatos de forma previsível. Quero te mostrar como isso funciona especificamente pro seu tipo de negócio."

#### Script para Reunião (versão completa)
Contexto de uso: lead que já tem site (ou vai ter), que quer resultado rápido, que tem capacidade operacional para atender mais clientes, ou que já tentou anúncios e não teve resultado.

"Deixa eu te explicar a diferença entre os dois principais canais que a gente usa — porque cada um funciona de uma forma, e os dois têm espaço na estratégia."

"Google Ads é o canal de maior intenção de compra que existe. Quando alguém abre o Google e digita [serviço] em [cidade], essa pessoa já tomou a decisão de que quer. Ela está só escolhendo de quem comprar. O anúncio coloca você no topo dessa busca — antes de qualquer resultado orgânico. O cliente mais fácil de fechar é aquele que já está com a carteira na mão. Google Ads traz esse cliente."

"Meta Ads — Instagram e Facebook — funciona diferente. Ali você não espera a pessoa pesquisar. Você vai até ela. A gente configura o perfil do seu cliente ideal — faixa etária, localização, interesses, comportamento — e o anúncio aparece pra essas pessoas enquanto elas estão no feed. É geração de demanda: você cria o desejo antes da pessoa sentir a necessidade. Funciona muito bem pra serviços que as pessoas não lembram de pesquisar até precisar."

"O que a gente entrega é a gestão completa: criamos os anúncios, definimos o público, monitoramos diariamente, ajustamos o que não está performando e te enviamos relatório com os números reais — custo por clique, custo por contato gerado, retorno sobre o investimento. Você nunca fica no escuro sobre o que está acontecendo com o seu dinheiro."
Se o lead já tentou anúncios antes e não teve resultado:

"Me conta mais sobre essa experiência. Quando você rodou antes: quem fez a gestão? Tinha site ou a pessoa ia direto pro WhatsApp? O público era segmentado por localização? Pergunto porque 'anúncio que não funcionou' na maioria dos casos é rastreável — foi o público errado, o criativo ruim ou a falta de uma página que convertesse o clique em contato. O tráfego pago em si funciona. O que falhou foi a execução. E é exatamente aí que a gente entra diferente."

#### Como Mostrar o ROI Sem Parecer Que Está Prometendo Resultado
Nunca prometa números específicos de retorno. Mas mostre a lógica do ROI de forma que o próprio lead calcule na cabeça dele.

"Deixa eu te mostrar a matemática. Você me disse que seu ticket médio é de R$ [valor]. Se a gente rodar uma campanha e cada contato gerado custar R$ [X] — o que é realista pra esse mercado — e você fechar 1 em cada [Y] contatos, cada cliente novo vai ter custado R$ [custo por aquisição]. Com o seu ticket de R$ [valor], o retorno sobre cada R$ investido é de [X vezes]. Não estou prometendo esse número porque cada campanha tem sua curva de otimização. Mas essa é a lógica. E é por isso que negócio que tem gestão profissional de tráfego escala — porque cada real investido tem retorno mensurável."

#### Analogias de Apoio
A torneira de clientes:

"Tráfego pago é como uma torneira. Você controla a pressão. Quer mais clientes? Aumenta o investimento. Tá na capacidade máxima de atendimento? Diminui. Nenhuma outra estratégia de marketing te dá esse nível de controle sobre o volume."
Google Ads — pescar onde o peixe está mordendo:

"Google Ads é você colocando a isca na frente de um peixe que já está com a boca aberta. A pessoa foi ao Google porque quer [serviço]. Você aparece. É a intenção de compra mais alta possível."
Meta Ads — mostrar o cardápio pra quem está com fome:

"Meta Ads é diferente. É você entrando no restaurante, vendo as pessoas sentadas, e mostrando seu cardápio pra quem tem cara de que vai querer. A pessoa não estava pensando em [serviço] cinco minutos atrás. Mas agora que viu, ficou interessada."
Para quem tentou e não funcionou:

"Anúncio sem gestão é como contratar um vendedor e deixar ele falar o que quiser, pra quem quiser, sem treinamento e sem acompanhamento. Às vezes dá certo por sorte. Na maioria das vezes, queima dinheiro. O anúncio não falhou — a gestão falhou."

#### Sinal de Compra Específico
O lead está pronto quando diz: "quero resultado rápido", "já tentei mas não funcionou e quero entender o que errou", "meu concorrente está anunciando e crescendo", "quero parar de depender só de indicação" ou quando pergunta "quanto eu precisaria investir por mês?".

### 4. O PITCH DO ECOSSISTEMA — QUANDO VENDER OS TRÊS JUNTOS
Quando o lead não tem nada — nem site, nem SEO, nem anúncio — existe a oportunidade de apresentar a solução completa como um ecossistema integrado. A lógica é simples e o lead entende rapidamente.

"Deixa eu te mostrar como as três peças se encaixam. Site profissional é a fundação — é onde o cliente chega e toma a decisão de entrar em contato. Sem ele, todo o resto é construído sobre areia. SEO Local é o que faz você aparecer organicamente quando alguém pesquisa — é o tráfego gratuito e sustentável. Tráfego pago é o acelerador — faz você aparecer imediatamente pra quem está buscando agora, enquanto o SEO vai crescendo no médio prazo."

"Os três juntos funcionam assim: o site converte. O SEO traz tráfego constante e gratuito. O tráfego pago traz volume imediato e escalável. Você não precisa começar com os três ao mesmo tempo — a gente monta um plano de acordo com o seu momento. Mas é importante você entender que cada peça potencializa a outra. Site sem tráfego não converte. Tráfego sem site desperdiça verba. SEO sem site não existe."

### Referência Rápida — Argumentos por Objeção Comum

| Objeção | Serviço | Resposta |
| --- | --- | --- |
| "Tenho Instagram, não preciso de site" | Site | "Instagram é terreno alugado. Você não controla o algoritmo e não tem como otimizar pra conversão. Site é seu." |
| "SEO demora muito" | SEO | "Demora mesmo — e é por isso que quem começa antes ganha. Seu concorrente pode já estar 6 meses à frente de você agora." |
| "Já tentei anúncio e não funcionou" | Tráfego Pago | "Me conta o que foi feito. Na maioria dos casos o tráfego funciona — o que falha é a gestão sem estratégia." |
| "É caro" | Todos | "Depende do que você chama de caro. Quanto você está deixando de faturar por mês sem isso?" |
| "Não sei se funciona pro meu segmento" | Todos | "Me diz: seus clientes usam o Google? Se sim, funciona." |
| "Vou pensar" | Todos | "O que você precisa saber pra tomar essa decisão? Ainda tem alguma parte que não ficou clara?" |`
  },
  {
    id: '3-1',
    sectionId: '3',
    title: '3. Roteiro de Reunião Estratégico',
    preview: 'Checklist Pré-Reunião, Fase 1 até a Fase 5...',
    content: `## 3. ROTEIRO DE REUNIÃO ESTRATÉGICO
Duração estimada: 35–45 minutos. Pode ser conduzido via Google Meet, presencialmente ou por telefone com compartilhamento de tela. O vendedor nunca abre a proposta antes de completar o diagnóstico.

#### Checklist Pré-Reunião
Antes de cada reunião, confirme que você:
- Pesquisou o site e as redes sociais do prospect
- Testou a presença dele no Google Maps e na busca orgânica local
- Identificou ao menos um concorrente com presença digital mais forte
- Tem uma hipótese inicial de qual serviço faz mais sentido para aquele perfil
- Preparou ao menos um resultado ou caso relevante para o segmento

#### Fase 1 — Abertura e Alinhamento de Expectativas (3–4 minutos)
O objetivo desta fase é criar rapport imediato, estabelecer a estrutura da conversa e demonstrar que você fez o trabalho de casa. Um detalhe específico sobre o negócio do cliente — algo que você observou antes da reunião — vale mais do que qualquer elogio genérico.

"[Nome], obrigado por reservar esse tempo. Eu já dei uma olhada no seu negócio antes de entrarmos aqui [mencione algo específico: o site, a posição no Google Maps, uma referência ao segmento]. Então a gente não precisa começar do zero — quero ir direto para o que importa."

"A proposta para essa conversa é a seguinte: nos próximos 35 minutos, eu vou fazer algumas perguntas sobre a sua operação hoje e onde você quer chegar. Com base nisso, te apresento um diagnóstico honesto e, se fizer sentido pra você, a solução que a gente pode implementar. Funciona assim?"

(Aguarde confirmação. Esse micro-comprometimento abre o cliente para o processo e cria uma estrutura psicológica que facilita o fechamento no final.)

#### Fase 2 — Discovery: Diagnóstico da Situação Atual (12–15 minutos)
Esta é a fase mais importante da reunião. A qualidade das perguntas aqui determina a qualidade da proposta e a facilidade do fechamento. As perguntas estão organizadas em quatro blocos — não é necessário fazer todas, mas é necessário cobrir todos os blocos. Leia o cliente e aprofunde onde a dor aparecer.

**Bloco A —** Entendendo o negócio

"Me conta um pouco sobre o seu negócio: há quanto tempo você atua e qual é o seu principal serviço ou produto?"

"Quem é o seu cliente típico? Você atende mais empresas, pessoas físicas, uma região específica?"

"Qual é o seu ticket médio por cliente? E em média, quantos clientes novos você fecha por mês?"

**Bloco B —** Diagnóstico de aquisição de clientes

"Como você traz clientes novos hoje? O que está funcionando e o que você sente que poderia estar melhor?"

"Você tem site atualmente? Se sim, você sabe quantas pessoas acessam por mês e quantas viram clientes a partir dele?"

"Quando alguém pesquisa [serviço do cliente] em [cidade] no Google, você aparece? Você já testou isso?"

"Você já investiu em anúncios pagos — Google Ads, Meta Ads? Como foi essa experiência?"

**Bloco C —** Mapeando a dor e o custo do problema

"Se você pudesse apontar um único gargalo no seu negócio hoje — a coisa que, se resolvida, faria mais diferença — qual seria?"

"Você tem noção de quantos clientes você deixa de fechar por mês por não ter uma presença digital mais forte? Mesmo que seja uma estimativa."

"O que os seus concorrentes estão fazendo que você sente que está funcionando pra eles?"

**Bloco D —** Projetando o futuro desejado

"Se daqui a seis meses você estivesse recebendo [X clientes novos por mês] de forma consistente e previsível, o que mudaria na sua operação? Você conseguiria atender essa demanda?"

"Qual é o tamanho de investimento que você enxerga como razoável para atingir esse resultado? Você já tem algum número em mente?"

(Esta última pergunta é opcional. Se o cliente for resistente a falar de orçamento neste momento, deixe para a Fase 5. Se ele trouxer um número, anote — ele acabou de se ancorar.)

#### Fase 3 — Diagnóstico Espelhado e Provocação (5–7 minutos)
Aqui você devolve ao cliente, nas próprias palavras dele, o que ele disse — e amplifica a urgência. Quando o cliente ouve de você o que ele mesmo articulou, estruturado de forma que o problema fique maior e mais claro, a resistência ao fechamento cai significativamente.

"Deixa eu te devolver o que eu ouvi pra ver se eu entendi direito. Você tem [X anos de mercado], atende [perfil de cliente], o seu ticket é de [valor]. Hoje você traz clientes principalmente por [canal atual — indicação, boca a boca, etc.], mas você sente que isso é inconsistente e você não tem controle sobre o volume."

"Quando a gente pesquisa [serviço + cidade] agora, você não aparece nas primeiras posições. Você já testou anúncios mas [não teve resultado / parou por falta de gestão]. E você estima que deixa de fechar em torno de [X clientes] por mês por causa disso."

(Confirme com o cliente — ele vai dizer "é exatamente isso" ou corrigir algo. Ambas as respostas são úteis.)

"Se eu considerar o seu ticket de [valor] vezes esses [X clientes] por mês, você está deixando [R$ X] na mesa todo mês. Em seis meses, são [R$ X]. Faz sentido olhar pra isso com urgência?"

#### Fase 4 — Apresentação da Solução (8–10 minutos)
Nunca apresente um cardápio de serviços. Apresente uma solução específica para o problema que acabou de ser mapeado. Use a linguagem do cliente — repita os termos que ele usou na fase de discovery.
Estrutura padrão: conectar a solução ao problema, depois mostrar um resultado concreto, depois confirmar o alinhamento.

Se a solução for Site Profissional:

"Com base no que você me apresentou, você não tem um ponto de entrada digital que converte. Quando alguém chega até você por indicação ou por anúncio, não tem onde pousar, se informar e tomar a decisão de entrar em contato. Um site profissional resolve isso — não é um cartão de visita, é uma máquina de captura. A gente desenvolve com foco em conversão: estrutura clara, velocidade de carregamento, formulário inteligente e integração com WhatsApp. Você continua vendendo, mas o site trabalha pra você 24 horas."

Se a solução for Tráfego Pago:

"Você tem produto, tem operação, tem capacidade de atender. O que falta é demanda previsível. Tráfego pago resolve exatamente isso — a gente cria campanhas no Google e no Meta direcionadas para quem já está buscando o que você oferece, na sua região. Você não espera o cliente aparecer: você vai até ele no momento em que ele está pronto pra comprar. A gestão é nossa — estratégia, criativo, otimização e relatório mensal."

Se a solução for SEO Local:

"Você me disse que quando pesquisam [serviço] em [cidade], você não aparece. Isso é problema direto no seu caixa, porque 76% das pessoas que pesquisam algo localmente visitam um negócio em até 24 horas. SEO local coloca você nas primeiras posições do Google Maps e da busca orgânica — sem pagar por clique, de forma sustentável. É um ativo que cresce com o tempo."

Se a solução for Painel Administrativo:

"O que você me descreveu é um processo que hoje depende de planilha, WhatsApp ou memória. Isso não escala e abre espaço pra erro. A gente desenvolve um painel simples e sob medida que centraliza [processo específico] — você e seu time ganham controle e velocidade sem precisar de um sistema caro e genérico."

Mostrando resultado concreto:

"A gente implementou isso pra [tipo de negócio similar] e em [prazo], o resultado foi [métrica]. Não estou prometendo o mesmo número pra você porque cada negócio tem sua curva, mas a estrutura é a mesma."
Confirmação antes do preço:

"Até aqui, você acredita que essa é a solução certa para o problema que você me apresentou?"

(Se a resposta for sim, prossiga. Se houver dúvida, resolva antes de avançar.)

#### Fase 5 — Investimento e Fechamento (7–10 minutos)

(Veja a Seção 4 para o script completo de apresentação de valores e a Seção 5 para quebras de objeção específicas.)

Sinais de Compra — Quando Acelerar o Fechamento
Quando os sinais abaixo aparecerem, é possível ir direto para o investimento sem completar todas as fases restantes.
O cliente começa a fazer perguntas operacionais, como "como funciona a entrega?" ou "quanto tempo leva?". Ele menciona um concorrente por nome e diz que "está crescendo". Ele pergunta sobre prazo de início. Ele consulta a agenda ou faz referência a uma data específica. Ele usa "a gente" ao falar do projeto, como "quando a gente colocar no ar".
Quando qualquer um desses sinais aparecer:

"[Nome], pelo que você está me falando, parece que faz sentido avançar. Deixa eu te apresentar o investimento."`
  },
  {
    id: '4-1',
    sectionId: '4',
    title: '4. Apresentação de Valores',
    preview: 'Como realizar o enquadramento financeiro e ancoragem antes do preço...',
    content: `## 4. APRESENTAÇÃO DE VALORES

### 4.1 Enquadramento Antes do Preço

Antes de qualquer número ser apresentado, faça este enquadramento. Ele tem dois objetivos: confirmar que o cliente está alinhado com a solução e identificar se existe alguma barreira não-financeira que precisaria ser resolvida antes.

"Perfeito. Tudo que eu te apresentei até agora, você acredita que vai resolver o problema, correto?"

(Aguarde confirmação.)

"Então agora a gente vai para a próxima fase, que é a de valores. O que eu peço é um sim ou um não muito claro: se estiver dentro da sua realidade, você me dá um sim. Se não estiver, tudo bem — a gente encontra um caminho. Mas antes de eu apresentar: teria algo que te impediria de avançar fora a questão de valores?"

(Se o cliente levantar uma barreira não-financeira, resolva antes de apresentar o preço. Se disser que não há outra barreira, prossiga.)

### 4.2 Como Apresentar o Preço


"Para você entrar nesse projeto com a gente hoje, o investimento é de R$ [valor]."

(Silêncio. Não complemente o preço imediatamente. Deixe o cliente processar e responder primeiro. Quem fala primeiro depois do preço, perde.)
Se o cliente aceitar:

"Ótimo. O próximo passo é [assinatura de contrato / link de pagamento / reunião de kickoff]. Você prefere resolver isso ainda hoje ou precisa de até quando?"
Se o cliente hesitar, aplique a quebra de objeção correspondente na Seção 5.

### 4.3 Qualificação Financeira Antes de Apresentar Valores de Alto Ticket

Para projetos de maior investimento, use a técnica de ancoragem reversa para mapear o teto real do cliente antes de apresentar a proposta formal.

"Para a gente conseguir avançar aqui, eu preciso ser direto e respeitar o seu tempo. Se a gente ficar uma hora conversando e, no final, eu te oferecer uma solução que custa R$ 20 mil e você não tem esse recurso, eu estaria te ajudando ou te prejudicando? Estaria roubando seu tempo, certo?"

"Digamos que para resolver [dor do cliente] o investimento seja de R$ 10 mil. Você teria disposição para isso hoje? Não estou dizendo que vai custar isso, mas se chegarmos no fim e você tiver certeza que a solução funciona, você teria o recurso disponível?"

(Se o cliente disser não, vá ajustando o valor para baixo até encontrar o teto real: R$ 5 mil, R$ 3 mil. Isso calibra a proposta antes de apresentá-la formalmente.)`
  },
  {
    id: '5-1',
    sectionId: '5',
    title: '5. Quebra de Objeções',
    preview: 'Scripts para lidar com "Preciso pensar", "Está caro", "Vou ver com o financeiro"...',
    content: `## 5. QUEBRA DE OBJEÇÕES

### 5.1 Objeção: "Preciso Pensar"

**Passo 1 — Concordância estratégica:**


"Realmente, você precisa pensar — é uma decisão importante."
**Passo 2 — Reframing: a decisão não é sobre tempo:**


"Mas esse tipo de decisão não é baseada em tempo. É baseada em informação."
**Passo 3 — Analogias para criar clareza:**


"Se alguém te ligasse agora dizendo que um familiar está no hospital e precisa de você lá, você ia pensar?"

"Se eu te dissesse que vou resolver esse problema por R$ 1, você toparia ou pensaria?"
**Passo 4 — Identificar a lacuna real:**


"Se você disse que precisa pensar, é porque alguma parte do que eu te mostrei não ficou clara o suficiente. Onde você está sentindo insegurança? Qual foi o ponto que precisa de mais informação?"

### 5.2 Objeção: "Tá Caro"

**Passo 1 — Qualificar a objeção antes de qualquer resposta:**


"Caro relacionado a quê? Você está comparando com uma proposta de outra agência, ou está avaliando se faz sentido investir nesse tipo de serviço agora?"

(Aguarde a resposta e siga o caminho correspondente.)

**Caminho A — O cliente está comparando com um concorrente:**


"Entendo. Essa outra proposta entrega o mesmo escopo? Sites têm preço porque têm horas de desenvolvimento, estratégia e resultado esperado por trás. Se você me mostrar o que eles te propuseram, posso te dizer exatamente onde estão as diferenças — porque na maioria dos casos o que muda não é o preço, é o que está incluso."
Se o cliente não tiver a proposta concorrente em mãos:

"Sem problema. Então quando você for avaliar, pergunta o seguinte: qual é o prazo de entrega deles? Está incluso SEO técnico na estrutura? Tem painel de gestão de conteúdo? E suporte pós-entrega, como funciona? Essas perguntas separam um site de R$ 800 de um site que realmente trabalha pra você. Aí a comparação fica justa."

**Caminho B — O cliente está avaliando se vale investir:**


"Então a questão não é o preço em si — é a segurança de que vai ter retorno, certo?"

(Aguarde confirmação.)

"Vou ser direto: marketing digital não é gasto, é a taxa que você paga para ter clientes chegando de forma previsível. O que eu preciso te perguntar é: hoje, quanto você deixa de ganhar por mês por não ter [site que converte / anúncios rodando / presença no Google]? Se esse número for maior que o investimento que a gente discutiu, o que está caro na verdade é continuar como está."
Feche com alternativa dupla:

"O que faz mais sentido pra você: começar pelo [serviço prioritário] e escalar depois, ou já entrar com o pacote completo e capturar tudo de uma vez?"

### 5.3 Objeção: "Agora Não É o Momento"

**Passo 1 — Mapear a causa real:**


"Normalmente quando alguém fala que não é o momento pode ser três coisas: prioridade, caixa, ou medo de não dar resultado. Qual deles é o seu caso?"
**Passo 2 — Decisão consciente:**


"Se nada mudar na sua empresa hoje, o que aconteceria com ela em 12 meses?"
**Passo 3 — Implicação:**


"O ponto não é se agora é o momento perfeito. Um problema é resolvido quando você elimina o gargalo. A pergunta certa não é sobre o momento — é se você quer continuar no mesmo cenário por mais um ano."
**Passo 4 — Fechamento:**


"Se essa é a decisão, a gente formaliza agora. Se não, qual seria o prazo real para você revisitar isso?"

### 5.4 Objeção: "Vou Verificar com Meu Financeiro e Te Retorno"

**Passo 1 — Concordância estratégica:**


"Concordo plenamente. Para avançarmos, o financeiro é fundamental. Afinal, você está gerindo um negócio sério, não uma caridade."
**Passo 2 — Identificar se é objeção real ou desculpa:**


"Sendo bem sincero aqui entre nós: essa é uma objeção real ou é uma forma de ganhar tempo? Você falou isso porque não gostou de algo que eu mostrei, ou o financeiro é o problema mesmo? Pode ser direto comigo."
**Passo 3 — Antecipar cenários:**


"E se o financeiro disser que não cabe agora, qual é o nosso próximo passo?"

"Se a verba não estiver disponível nesse formato, você tem alguma outra alternativa — outro cartão, reserva — ou vai desistir do projeto?"
**Passo 4 — Se o financeiro for genuíno:**


"Perfeito. Quando você tiver essa conversa, o que você precisaria levar de informação para que a decisão seja fácil? Posso te preparar um material de suporte."

### 5.5 Objeção: "Preciso Rezar Antes"


"Entendo perfeitamente, [Nome]. Buscar orientação é sinal de sabedoria. Essa sua fala me lembrou de uma história que ilustra bem o momento em que estamos. Posso contar rapidinho?"

(Aguarde o sim.)

"Havia um homem se afogando no mar. Ele orou: 'Deus, por favor, me salve.' Logo passou um barco e jogou uma boia. Ele disse: 'Não, obrigado, Deus vai me salvar.' Depois veio um jet ski — ele recusou de novo. Por fim, um helicóptero baixou a escada, e ele gritou: 'Podem ir, Deus está comigo.' O homem se afogou. Ao chegar no céu, perguntou: 'Senhor, por que me deixou morrer?' E Deus respondeu: 'Meu filho, eu te enviei um barco, um jet ski e um helicóptero. Você é que não quis subir.'"

"A moral é que Deus provê os meios, mas a ação tem que ser nossa. Se você tem pedido uma solução para [dor do cliente], e eu estou aqui agora te apresentando exatamente o que você precisa... talvez estejamos diante do seu barco. A oportunidade bate à porta, mas ela não gira a maçaneta por você. Vamos girar essa maçaneta juntos?"

### 5.6 Objeção: "Me Passa o Preço" (Antes do Diagnóstico)


"Pergunta justa. Hoje a gente tem algumas opções diferentes para atender nossos clientes. Mas sendo bem transparente: eu ainda não sei se faz sentido pra você. Antes disso, preciso entender melhor o seu cenário atual e, principalmente, onde você quer chegar. Aí sim consigo te dizer se realmente conseguimos te ajudar. Você é contra a gente conversar rapidinho sobre isso?"

### 5.7 Objeção: "Fechamos, Mas Não Consigo Enviar o Pix Hoje"

**Passo 1 — Entender o bloqueio real:**


"Tudo certo. Me diz uma coisa: isso é uma questão de tempo mesmo — o dinheiro vai estar disponível em alguns dias — ou aconteceu algum imprevisto que muda o cenário?"

(Se for imprevisto real: renegocie a condição ou reagende com data confirmada. Se for questão de tempo, siga.)
**Passo 2 — Propor entrada parcial:**


"Entendo. Para a gente não perder o momento e garantir as condições que alinhamos, consigo trabalhar com uma entrada hoje e o restante em [X dias]. Quanto você conseguiria deixar de entrada agora?"
**Passo 3 — Se o cliente hesitar em qualquer valor de entrada:**


"Não é nem uma questão de valor. É uma questão de comprometimento de ambas as partes. Quando você sinaliza que quer avançar, eu já começo a alocar o time e reservar o prazo. Um Pix de confiança resolve isso — o valor exato da entrada a gente alinha conforme o que estiver disponível pra você hoje."

### 5.8 Como Vender para Clientes Céticos

Quando o cliente diz que "é racional e não age pela emoção", ele está tentando criar uma barreira. A técnica consiste em mostrar que o caminho que ele percorreu até a reunião foi puramente lógico — o que invalida o argumento sem criar confronto.
Script de reversão:

"Você se considera uma pessoa emocionada? Eu também não achei que fosse. Então por que você está trazendo esse tópico agora?"
Validando a autoridade através do processo:

"Quem constrói resultados sólidos age de forma emocionada? Pense em como você chegou até aqui: você viu um anúncio segmentado, passou por um fluxo comercial estruturado, foi qualificado e recebeu lembretes automáticos. Você passou por um processo inteiramente lógico. Nada foi por acaso."
A meta-venda — seu processo é o seu produto:

"Nós chegaríamos nesse nível de organização e previsibilidade se fôssemos movidos pela emoção? É exatamente essa engrenagem que queremos implementar no seu negócio."

### 5.9 Objeção: "Estou Vendo Outras Opções Antes de Decidir"

**Passo 1 — Validação:**


"Concordo plenamente. Uma decisão estratégica como essa precisa ser bem avaliada. É sinal de que você leva o seu negócio a sério."
**Passo 2 — Sondagem — descobrindo o que ele busca:**


"O que exatamente você vem buscando nessas outras opções?"

"Teve algo na nossa proposta que você sentiu falta?"

"Existe algum ponto que, se eu ajustasse agora, faria você nos escolher hoje?"
**Passo 3 — Proteger o cliente de promessas irreais:**

Se o cliente busca algo que existe no mercado de forma duvidosa:

"Sendo honesto com você: o que você busca, o mercado não entrega de forma legítima. Se alguém te prometer isso, tome cuidado — pode ser uma promessa vazia."
Se for comparação técnica:

"Quando você falar com os outros, pergunta como eles lidam com [ponto forte da nossa entrega]. Isso vai te ajudar a comparar o que realmente importa."
**Passo 4 — Criar urgência sem pressão:**


"Posso te dizer que a condição que alinhamos aqui eu consigo manter até [data]. Depois disso, preciso reorganizar a agenda do time. Não é pressão — é apenas transparência."

### 5.10 O Enquadramento Financeiro (Para Reuniões Onde Há Sinais de Resistência)

Use este script nos primeiros minutos de qualquer reunião onde você identifica que a qualificação financeira pode ser um problema.

"Para a gente conseguir avançar essa reunião, eu preciso ser direto e respeitar o seu tempo assim como o meu. Se a gente ficar uma hora conversando e no final eu te oferecer uma solução que custa R$ 20 mil e você não tem esse recurso, eu estaria te ajudando ou te prejudicando? Eu estaria roubando seu tempo, certo? Então antes de continuarmos: você conseguiria investir nessa faixa se a solução fizer sentido?"

### 5.11 A Analogia da Mercedes — Encerrando com Autoridade

Quando o cliente realmente não tem verba e não há caminho alternativo, encerre com elegância e autoridade. Tentar fechar uma venda com quem não tem condições é prejudicá-lo — e sua postura deve refletir isso.

"Com base no que você compartilhou, nossa agência não conseguiria te entregar o resultado que você merece no momento. Avançar sabendo disso seria irresponsável da minha parte. O que eu recomendo é [ação concreta]. Quando você estiver nesse ponto, quero ser a primeira agência que você chama."`
  },
  {
    id: '6-1',
    sectionId: '6',
    title: '6. Script de Não-Fechamento Elegante',
    preview: 'Como agir quando o lead não fecha por razão genuína e manter Nurturing...',
    content: `6. SCRIPT DE NÃO-FECHAMENTO ELEGANTE

### 6.1 Saída com Autoridade

Quando um lead não fecha por razão genuína — timing ruim, caixa momentaneamente limitado, decisão societária pendente — a forma como você encerra determina se ele volta ou some para sempre. Termine com autoridade e com um próximo passo concreto.

"[Nome], eu respeito a sua posição. Não faz sentido avançar num projeto desse tamanho se o momento não é esse — e eu não trabalho assim."

"O que eu preciso antes de encerrar é garantir que, quando o momento chegar, você não precise começar do zero. Posso te enviar um resumo do que discutimos — o diagnóstico que fizemos, as oportunidades que mapeamos e a solução que propus — para que você tenha tudo documentado. E em [30 / 60 / 90 dias, conforme o contexto], eu entro em contato para ver se o cenário mudou. Isso funciona pra você?"

(Aguarde confirmação e registre a data de follow-up no CRM com o motivo da pausa.)

"Perfeito. E se antes desse prazo você sentir que o momento chegou, pode me chamar diretamente. A gente já fez o diagnóstico — não precisa passar por tudo de novo."

### 6.2 Protocolo de Nurturing de Médio Prazo

Todo lead que saiu com saída elegante entra em uma régua de contato. O objetivo de cada toque não é vender, mas manter presença e autoridade.
Semana 1 após a conversa — E-mail ou WhatsApp:

"[Nome], conforme combinamos, segue o resumo do que discutimos [link ou PDF]. Qualquer dúvida sobre os pontos que levantamos, estou à disposição."

Mês 1 — Toque de valor:
Envie um conteúdo relevante para o segmento do lead: resultado de um cliente do mesmo nicho, um dado de mercado, uma mudança no Google que o afeta diretamente. Não venda nada neste toque.

"[Nome], vi esse dado sobre [segmento] e lembrei da nossa conversa. Achei que faria sentido compartilhar."

Mês 2 ou na data combinada — Toque de retomada:

"[Nome], conforme combinamos, estou passando para ver como está o cenário. A questão que discutimos sobre [dor específica] — alguma coisa mudou? Tem algo novo que faz sentido revisitar?"`
  },
  {
    id: '7-1',
    sectionId: '7',
    title: '7. KPIs e Métricas do SDR',
    preview: 'Metas, Benchmarks, Sinais de Alerta e Ações Corretivas...',
    content: `7. KPIs E MÉTRICAS DO SDR

### 7.1 Metas e Benchmarks

| Métrica | Definição | Meta Sugerida |
| --- | --- | --- |
| Tentativas de contato por dia | Ligações realizadas + mensagens enviadas | 40–60 |
| Taxa de conexão | Contatos que responderam / tentativas | 15–25% |
| Taxa de agendamento | Reuniões marcadas / contatos conectados | 20–35% |
| Taxa de comparecimento | Reuniões realizadas / reuniões marcadas | 70–85% |
| Taxa de conversão em SQL | Leads qualificados / reuniões realizadas | 40–60% |
| Ciclo médio do lead | Dias entre primeiro contato e reunião realizada | Abaixo de 7 dias |


### 7.2 Sinais de Alerta e Ações Corretivas

A revisão das métricas deve ser semanal. Cada indicador abaixo do benchmark indica um problema específico que exige uma ação específica — não um esforço genérico de "fazer mais".
Se a taxa de conexão estiver abaixo de 15%, o problema está no horário de contato ou na lista de prospecção. Revise os horários de ligação (tente entre 8h–9h e 17h–18h30) e verifique a qualidade dos dados do Manus/Apify.
Se a taxa de agendamento estiver abaixo de 20%, o problema está na abertura da ligação ou no pitch de valor. Revise o método de cold call utilizado e teste a alternância entre o Método 1 e o Método 2.
Se a taxa de comparecimento estiver abaixo de 70%, o problema está no processo de confirmação. Implemente uma mensagem de confirmação 24 horas antes e uma no dia da reunião. Leads que não confirmam devem ser abordados por telefone, não apenas por mensagem.
Se a taxa de conversão em SQL estiver abaixo de 40%, o problema está na qualificação — leads frios estão chegando à reunião. Revise o scoring e os critérios de desqualificação da Seção 1.`
  },
  {
    id: 'outro',
    sectionId: '0',
    title: 'Documento Completo',
    preview: 'Versão e escopo do conteúdo base do Playbook de vendas...',
    content: `Playbook de Vendas — Versão 1.0 Agência de Marketing Digital Sites Profissionais · Tráfego Pago · SEO Local · Painéis Administrativos`
  }
];
