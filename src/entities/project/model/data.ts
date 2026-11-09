import type { Project } from './types'

/*
 * PREENCHER: todos os textos entre [colchetes].
 *
 * - problem: descreva a SITUAÇÃO-PROBLEMA que motivou o projeto, não "falta de um sistema".
 *   Ex.: "Necessidade de monitorar, organizar e controlar o atendimento das demandas…"
 * - repositoryUrl: aponte para a CÓPIA (fork) do repositório no SEU GitHub.
 * - hardSkills: nível de 1 (ouvi falar) a 5 (fluente). Nada de porcentagens.
 * - images (opcional): coloque os arquivos em public/projects/ e informe o caminho.
 * - Remova um projeto apagando o objeto inteiro; o site se adapta.
 */
export const projects: Project[] = [
  {
    id: 'api-1',
    category: 'academic',
    title: 'SmartFarm — Monitoramento de estufa',
    period: '1º semestre · 2024/1',
    partner: 'CLIENTE INTERNO - FATEC',
    role: 'Arquitetura back-end e infraestrutura (Docker)',
    summary:
      'Painel web que importa os dados ambientais coletados em uma estufa, armazena o histórico e os apresenta em gráficos interativos, hospedado em um Raspberry Pi.',
    problem:
      'A estufa possui um equipamento que registra temperatura, umidade do solo, umidade do ar e volume de água, gerando arquivos CSV. A equipe do cliente consolidava e analisava esses dados manualmente no Excel, um processo lento e trabalhoso que dificultava acompanhar a evolução das condições de cultivo ao longo do tempo e reagir rapidamente a variações.',
    solution:
      'Aplicação web em Flask que importa os arquivos CSV, trata duplicidades e grava os registros em um banco MySQL. O painel mostra as últimas leituras de cada variável e gera gráficos interativos com Plotly, com filtro por período e combinação de variáveis, além de exportar em CSV os dados do intervalo selecionado. A aplicação e o banco rodam em contêineres Docker e foram hospedados em um Raspberry Pi 3 junto à estufa.',
    technologies: ['Python', 'Flask', 'Pandas', 'Plotly', 'MySQL', 'SQLAlchemy', 'HTML', 'CSS', 'Docker', 'Docker Compose', 'Raspberry Pi'],
    // PREENCHER: faça um fork para o seu GitHub e troque o link pelo da sua cópia
    repositoryUrl: 'https://github.com/SkyFlyTeam/SmartFarm',
    demoUrl: 'https://youtu.be/bqNpXkbuNLw',
    images: [],
    highlights: [
      {
        title: 'Apresentado na comunidade Python São José dos Campos',
        description:
          'Apresentei o SmartFarm em um evento da comunidade Python São José dos Campos, mostrando como o projeto foi estruturado em Flask, empacotado com Docker e adaptado para rodar em um Raspberry Pi 3 junto à estufa, além dos desafios de executar a aplicação em hardware limitado.',
        date: '06/09/2025',
        url: 'https://lnkd.in/p/dYBqaUpD',
        image: {
          src: 'projects/smartfarm-python-sjc.jpg',
          alt: 'Apresentação do SmartFarm no evento da comunidade Python São José dos Campos',
        },
      },
    ],
    contributions: [
      'Defini a arquitetura da aplicação Flask, separando rotas, acesso ao banco de dados, geração de gráficos e configurações.',
      'Containerizei a aplicação com um Dockerfile baseado em imagem Python slim, executando com usuário sem privilégios e com cache de dependências no build.',
      'Orquestrei a aplicação e o MySQL com Docker Compose, incluindo a criação automática do schema na inicialização e um volume para persistir os dados.',
      'Gerei e publiquei no Docker Hub uma imagem para arquitetura ARM64, permitindo executar o sistema no Raspberry Pi.',
      'Otimizei a aplicação e o ambiente para rodar com os recursos limitados do Raspberry Pi 3, viabilizando a hospedagem local na estufa.',
      'Automatizei a preparação do ambiente no dispositivo com um script de instalação do Python e do Docker.',
    ],
    hardSkills: [
      { name: 'Docker', level: 4 },
      { name: 'Docker Compose', level: 4 },
      { name: 'Python / Flask', level: 3 },
      { name: 'Linux e Raspberry Pi', level: 3 },
      { name: 'MySQL', level: 2 },
      { name: 'Pandas e Plotly', level: 2 },
    ],
    softSkills: [
      {
        name: 'Liderança técnica',
        description:
          'Tomei as decisões de arquitetura e infraestrutura e orientei o time sobre como executar o projeto localmente com Docker.',
      },
      {
        name: 'Resolução de problemas',
        description:
          'Encontrei soluções para fazer a aplicação rodar em um hardware limitado e em uma arquitetura diferente (ARM) da usada no desenvolvimento.',
      },
      {
        name: 'Trabalho em equipe',
        description:
          'Atuei em um time de nove pessoas organizado com Scrum, ao longo de quatro sprints e da Feira de Soluções.',
      },
    ],
  },
  {
    id: 'api-2',
    category: 'academic',
    title: 'Cloud Stock — Gestão de estoque',
    period: '2º semestre · 2024/2',
    partner: 'CLIENTE INTERNO - FATEC',
    role: 'Arquitetura, back-end, modelagem de dados e infraestrutura (Docker)',
    summary:
      'Sistema web de controle de estoque com movimentações por lote, alertas de estoque mínimo e validade, relatórios gerenciais e auditoria de alterações.',
    problem:
      'O controle de estoque era feito de forma pouco integrada e dependente de registros manuais, o que gerava erros humanos, perda de sincronia entre o estoque físico e o registrado e falta de visibilidade sobre produtos em falta ou próximos do vencimento. Sem histórico confiável de entradas, saídas e alterações, os gestores também não tinham dados para auditar movimentações nem planejar compras.',
    solution:
      'Aplicação web com front-end em React e uma API REST em Node.js/Express com TypeScript, persistindo os dados em MySQL via Sequelize. O sistema cadastra produtos, categorias, fornecedores, setores e locais de armazenamento, registra entradas e saídas por lote com responsável e data, e controla o acesso em três níveis (funcionário, gerente e administrador) com autenticação JWT. Uma rotina agendada verifica estoque mínimo e validade e envia notificações em tempo real via WebSocket. Relatórios mostram lucro, perdas, produtos mais vendidos e rentabilidade, e triggers no banco registram um log de auditoria de todas as alterações.',
    technologies: [
      'TypeScript',
      'Node.js',
      'Express',
      'Sequelize',
      'MySQL',
      'JWT',
      'WebSocket',
      'React',
      'React Bootstrap',
      'Recharts',
      'Docker',
      'Jira',
    ],
    repositoryUrl: 'https://github.com/SkyFlyTeam/cloudStock',
    demoUrl: 'https://youtu.be/eyDyj7bAfGM',
    images: [],
    contributions: [
      'Defini a arquitetura da aplicação, separando front-end e back-end e organizando a API em camadas de rotas, controllers e models.',
      'Modelei o banco de dados relacional (produtos, lotes, entradas, saídas, fornecedores, locais, setores, categorias, usuários e cargos), com suas relações e restrições.',
      'Desenvolvi o serviço back-end em Node.js/Express com TypeScript e Sequelize: CRUDs, movimentações por lote, autenticação JWT com níveis de acesso, notificações de estoque e validade e rotas de estatísticas para os relatórios.',
      'Desenvolvi parte do front-end em React.',
      'Criei os Dockerfiles do back-end e do front-end para padronizar a execução da aplicação em qualquer ambiente.',
    ],
    hardSkills: [
      { name: 'Node.js / Express', level: 4 },
      { name: 'TypeScript', level: 4 },
      { name: 'Modelagem de banco relacional / MySQL', level: 4 },
      { name: 'Sequelize (ORM)', level: 3 },
      { name: 'Autenticação com JWT', level: 3 },
      { name: 'React', level: 3 },
      { name: 'Docker', level: 3 },
      { name: 'WebSocket', level: 2 },
    ],
    softSkills: [
      {
        name: 'Liderança técnica',
        description:
          'Defini a arquitetura e o modelo de dados que serviram de base para o trabalho de todo o time, orientando colegas na implementação.',
      },
      {
        name: 'Comunicação',
        description:
          'Alinhei com o time de front-end os contratos da API e as regras de negócio do estoque, garantindo a integração entre as camadas.',
      },
      {
        name: 'Organização e planejamento',
        description:
          'Participei do planejamento das quatro sprints com Scrum e Jira, quebrando user stories em tarefas estimadas e acompanhando o burndown.',
      },
    ],
  },
  {
    id: 'api-3',
    category: 'academic',
    title: 'BeeOnTime — Controle de ponto eletrônico',
    period: '3º semestre · 2025/1',
    partner: 'Necto Systems',
    role: 'Arquitetura do back-end e do front-end, espelho de ponto e assinatura, e infraestrutura (Docker)',
    summary:
      'Plataforma web de ponto eletrônico com marcação de ponto, banco de horas, solicitações, relatórios e geração e assinatura do espelho de ponto mensal em PDF.',
    problem:
      'A empresa precisava registrar e controlar a jornada dos colaboradores (entradas, saídas, intervalos, horas extras, férias, folgas e ausências) e formalizar mensalmente essas horas. Sem um processo centralizado, ajustes, justificativas e o fechamento do mês dependiam de controles manuais, o que dificultava conferir o banco de horas, gerar o espelho de ponto e obter a validação formal de cada colaborador.',
    solution:
      'Aplicação web com front-end em Next.js e back-end em microsserviços Spring Boot (usuários, ponto, solicitações, banco de horas, notificações e espelho de ponto), orquestrados com Docker Compose. Os colaboradores registram o ponto e solicitam ajustes, férias e justificativas, e os gestores aprovam solicitações e acompanham relatórios. Ao fim de cada mês, o sistema gera automaticamente o espelho de ponto em PDF com todos os registros, as horas trabalhadas e o saldo do banco de horas. O colaborador visualiza o documento e o assina. Após isso o PDF assinado fica disponível para download.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'Microsserviços',
      'MySQL',
      'MongoDB',
      'wkhtmltopdf',
      'TypeScript',
      'Next.js',
      'React',
      'Tailwind CSS',
      'shadcn/ui',
      'Docker',
      'Docker Compose',
      'Jira',
    ],
    // PREENCHER: faça um fork para o seu GitHub e troque o link pelo da sua cópia.
    // O repositório de documentação aponta para os repositórios de back-end e front-end.
    repositoryUrl: 'https://github.com/SkyFlyTeam/BeeOnTime-documentation',
    images: [],
    contributions: [
      'Defini a arquitetura do back-end em microsserviços Spring Boot, separando os domínios de usuário, ponto, solicitações, banco de horas, notificações e espelho de ponto.',
      'Defini a arquitetura do front-end em Next.js com TypeScript, organizando componentes, serviços de acesso às APIs e interfaces de dados.',
      'Desenvolvi o microsserviço de espelho de ponto, que consulta dados de usuário, empresa, pontos e banco de horas em outros serviços e gera o PDF a partir de um template HTML convertido com wkhtmltopdf.',
      'Implementei a geração automática e agendada dos espelhos ao encerramento de cada mês.',
      'Implementei o fluxo de assinatura do espelho: visualização do PDF, assinatura, registro da data de assinatura e download do documento assinado.',
      'Dockerizei a aplicação, criando os Dockerfiles de cada microsserviço e o Docker Compose que sobe todos os serviços e o banco de dados com suas dependências e configurações, permitindo executar o ambiente completo com um único comando.',
    ],
    hardSkills: [
      { name: 'Java / Spring Boot', level: 4 },
      { name: 'Arquitetura de microsserviços', level: 4 },
      { name: 'Geração de PDF (HTML → PDF)', level: 4 },
      { name: 'Next.js / React', level: 3 },
      { name: 'TypeScript', level: 4 },
      { name: 'MySQL', level: 3 },
      { name: 'Docker Compose', level: 4 },
    ],
    softSkills: [
      {
        name: 'Liderança técnica',
        description:
          'Defini as arquiteturas do back-end e do front-end, padronizei o ambiente de execução com Docker e orientei o time na divisão do sistema em microsserviços e na integração entre eles.',
      },
      {
        name: 'Visão de negócio',
        description:
          'Traduzi os requisitos do espelho de ponto (formato do documento, regras de disponibilidade e validação da assinatura) em uma solução que atendesse às expectativas do cliente.',
      },
      {
        name: 'Trabalho em equipe',
        description:
          'Colaborei com um time organizado em Scrum ao longo de três sprints, com entregas versionadas por tags nos repositórios de front-end e back-end.',
      },
    ],
  },
  {
    id: 'api-4',
    category: 'academic',
    title: 'Atmos — Monitoramento meteorológico',
    period: '4º semestre · 2025/2',
    partner: 'Tecsus',
    role: 'Product Owner, arquitetura e deploy (DevOps)',
    summary:
      'Plataforma IoT que coleta dados de estações meteorológicas espalhadas por São José dos Campos, exibe dashboards e emite alertas em situações de risco climático.',
    problem:
      'Acidentes ligados a eventos meteorológicos, como deslizamentos de terra e inundações, têm se tornado mais frequentes, e as áreas mais carentes de São José dos Campos são as mais atingidas, muitas vezes sem nenhum tipo de aviso prévio. Faltava uma forma de acompanhar continuamente as condições do clima e do solo em diferentes pontos da cidade e de transformar essas leituras em alertas a tempo de prevenir acidentes.',
    solution:
      'Solução distribuída em que estações com ESP32 publicam as leituras dos sensores via MQTT em um broker Mosquitto. Um receptor em Python assina o tópico e grava os dados em lote no MongoDB; um processador em Node.js valida cada leitura contra o cadastro de estações e parâmetros no PostgreSQL e persiste os valores tratados. Uma API em Express serve o front-end em Next.js, que oferece dashboards com filtros por estação e período, configuração de parâmetros e unidades de medida, alertas para condições extremas, relatórios e guias educativos sobre cada parâmetro. Todos os serviços rodam em contêineres e são publicados automaticamente em ambientes de homologação e produção.',
    technologies: [
      'TypeScript',
      'Node.js',
      'Express',
      'Next.js',
      'React',
      'Tailwind CSS',
      'Recharts',
      'Python',
      'MQTT (Mosquitto)',
      'ESP32 / Arduino',
      'MongoDB Atlas',
      'PostgreSQL',
      'Sequelize',
      'Docker',
      'Docker Compose',
      'GitHub Actions',
      'Jira',
    ],
    // PREENCHER: faça um fork para o seu GitHub e troque o link pelo da sua cópia.
    // O repositório de documentação aponta para os demais repositórios do projeto.
    repositoryUrl: 'https://github.com/SkyFlyTeam/Atmos-documentation',
    images: [
      {
        src: 'projects/atmos-arquitetura.png',
        alt: 'Diagrama da arquitetura do Atmos: estações ESP32 publicam no broker Mosquitto, o receptor de dados grava no MongoDB, o processador transfere para o PostgreSQL, consumido pelo back-end e pelo front-end',
        caption: 'Arquitetura que projetei para o Atmos, da estação ao front-end.',
      },
    ],
    contributions: [
      'Atuei como Product Owner: conduzi o alinhamento com a Tecsus, escrevi e priorizei o backlog com user stories, critérios de aceitação e estimativas, e validei as entregas de cada sprint.',
      'Planejei e distribuí as tarefas do projeto entre o time, quebrando as user stories em atividades por repositório.',
      'Projetei toda a arquitetura da solução: comunicação das estações via MQTT, receptor com gravação em lote no MongoDB, processador que consolida os dados no PostgreSQL, API REST e front-end.',
      'Fiz o deploy da aplicação com pipelines no GitHub Actions para cada serviço: CI com testes unitários e de integração, build de imagens Docker publicadas no GitHub Container Registry e deploy automatizado via SSH com Docker Compose nos ambientes de homologação e produção.',
    ],
    hardSkills: [
      { name: 'Arquitetura de software distribuída', level: 4 },
      { name: 'CI/CD com GitHub Actions', level: 4 },
      { name: 'Docker / Docker Compose', level: 4 },
      { name: 'Gestão de backlog (Scrum / Jira)', level: 4 },
      { name: 'MQTT e IoT', level: 3 },
      { name: 'PostgreSQL e MongoDB', level: 3 },
      { name: 'Node.js / TypeScript', level: 4 },
    ],
    softSkills: [
      {
        name: 'Liderança',
        description:
          'Como Product Owner, conduzi o time na direção do produto, definindo prioridades e garantindo que cada sprint entregasse valor ao cliente.',
      },
      {
        name: 'Comunicação com o cliente',
        description:
          'Fui o ponto de contato com a Tecsus, traduzindo as necessidades do cliente em requisitos claros e apresentando os resultados de cada sprint.',
      },
      {
        name: 'Tomada de decisão',
        description:
          'Equilibrei escopo, prazo e complexidade técnica ao priorizar o backlog e definir a arquitetura, assumindo a responsabilidade pelas escolhas do projeto.',
      },
      {
        name: 'Visão sistêmica',
        description:
          'Conectei hardware, mensageria, bancos de dados, aplicação e infraestrutura em uma solução coerente de ponta a ponta.',
      },
    ],
  },
  {
    id: 'api-5',
    category: 'academic',
    title: 'Veredito — Precedentes jurídicos com IA',
    period: '5º semestre · 2026/1',
    partner: 'Xertica AI',
    role: 'Desenvolvedor back-end (NestJS) e arquitetura de deploy',
    summary:
      'Aplicativo para magistrados e advogados que analisa petições e processos com IA, gera resumos e sugere precedentes ranqueados por similaridade semântica.',
    problem:
      'O volume de processos judiciais e a complexidade das teses apresentadas cresceram muito, e juízes e assessores têm dificuldade para localizar rapidamente os precedentes adequados a cada caso. Essa busca manual prolonga a tramitação dos processos e aumenta o risco de decisões pouco alinhadas à jurisprudência consolidada.',
    solution:
      'Aplicativo móvel em Flutter integrado a uma API em NestJS. O usuário envia a petição inicial ou o processo completo (PDF, DOCX ou TXT); o back-end extrai e segmenta o texto, gera embeddings e faz uma busca vetorial no PostgreSQL com pgvector para encontrar os precedentes mais próximos da tese apresentada. Um modelo de linguagem gera o resumo da peça, a síntese explicativa de cada precedente e a classificação de aplicabilidade, com filtros por tribunal e espécie. Para processos completos, um pipeline de RAG (Retrieval-Augmented Generation) recupera os trechos relevantes do documento e extrai com o modelo de linguagem as partes do processo, como a petição inicial, a tese jurídica e a contestação; a partir delas, o sistema gera minutas de sentença e de petição inicial. A API roda em uma VPS com Docker Compose, atrás de um proxy reverso Nginx com HTTPS.',
    technologies: [
      'TypeScript',
      'NestJS',
      'TypeORM',
      'PostgreSQL',
      'pgvector',
      'OpenAI API',
      'LangChain',
      'Embeddings / busca semântica',
      'RAG',
      'Flutter',
      'Docker',
      'Docker Compose',
      'Nginx',
      "Let's Encrypt (Certbot)",
      'GitHub Actions',
      'Jira',
    ],
    // PREENCHER: faça um fork para o seu GitHub e troque o link pelo da sua cópia.
    // O repositório de documentação aponta para os repositórios de back-end e front-end.
    repositoryUrl: 'https://github.com/SkyFlyTeam/veredito-documentation',
    images: [
      {
        src: 'projects/veredito-arquitetura.png',
        alt: 'Diagrama de deploy do Veredito: aplicativo Flutter no Android se comunica com o back-end NestJS em Docker hospedado em um servidor, que acessa o PostgreSQL também em Docker',
        caption: 'Arquitetura de deploy do Veredito.',
      },
    ],
    contributions: [
      'Projetei a arquitetura de deploy: VPS com Docker Compose orquestrando a API, o PostgreSQL com pgvector, um contêiner dedicado às migrações e o Nginx como proxy reverso com certificado HTTPS via Certbot.',
      'Criei os pipelines no GitHub Actions: CI que executa as migrações e os testes em contêineres isolados e CD que publica a aplicação na VPS via SSH, com as credenciais gerenciadas em GitHub Secrets.',
      'Desenvolvi o módulo de precedentes (modelos e CRUDs de precedentes, espécies, status e precedentes sugeridos).',
      'Implementei a busca vetorial de precedentes por similaridade semântica, incluindo o cálculo de similaridade e os filtros por tribunal e espécie.',
      'Desenvolvi e refatorei o pipeline de análise da petição, com um orquestrador que envia o progresso ao aplicativo em tempo real via Server-Sent Events.',
      'Desenvolvi um RAG para a análise de processos jurídicos completos: o documento é segmentado, os trechos são pontuados e recuperados por busca textual por páginas e enviados como contexto ao LLM, que extrai as partes do processo, como a petição inicial, a tese jurídica e a contestação, com uma etapa de validação por IA dos resultados.',
      'Desenvolvi o pipeline de caso jurídico, base para a geração da minuta de petição inicial.',
    ],
    hardSkills: [
      { name: 'NestJS / TypeScript', level: 4 },
      { name: 'Processamento de Linguagem Natural', level: 3 },
      { name: 'Embeddings e busca vetorial (pgvector)', level: 3 },
      { name: 'RAG (Retrieval-Augmented Generation)', level: 3 },
      { name: 'Integração com LLMs (OpenAI API)', level: 3 },
      { name: 'PostgreSQL / TypeORM', level: 4 },
      { name: 'CI/CD com GitHub Actions', level: 4 },
      { name: 'Docker / Nginx / deploy em VPS', level: 4 },
    ],
    softSkills: [
      {
        name: 'Aprendizado contínuo',
        description:
          'Aprendi na prática conceitos de PLN, embeddings, busca semântica e RAG para construir pipelines de análise de documentos jurídicos.',
      },
      {
        name: 'Resolução de problemas',
        description:
          'Investiguei e corrigi falhas na recuperação de precedentes e no cálculo de similaridade, além de refatorar o pipeline para dar retorno em tempo real ao usuário.',
      },
      {
        name: 'Trabalho em equipe',
        description:
          'Trabalhei com o time de front-end em Flutter para integrar o progresso das análises e segui o fluxo de branches e tarefas do Jira ao longo das três sprints.',
      },
    ],
  },
  {
    id: 'api-6',
    category: 'academic',
    title: 'VariSkill — Plataforma de aprendizagem com assistente virtual',
    period: '6º semestre · 2026/2 (em andamento)',
    partner: 'GSW',
    role: 'Estrutura do back-end (Django) e módulo de PLN',
    summary:
      'Plataforma de trilhas de aprendizagem gamificada, com um assistente virtual que entende comandos em linguagem natural e tira dúvidas conceituais sem entregar a resposta.',
    problem:
      'Na capacitação técnica corporativa, os colaboradores costumam seguir trilhas lineares e despersonalizadas, o que gera alta evasão e baixa retenção do conhecimento prático. As empresas têm dificuldade em identificar as lacunas de cada aluno e em oferecer um acompanhamento pedagógico contínuo e motivador, e depender de uma IA externa para cada interação torna esse suporte caro e sujeito a indisponibilidade.',
    solution:
      'Aplicação web em React com back-end em Django REST Framework e PostgreSQL com pgvector. O aluno é acolhido por um assistente virtual que apresenta as trilhas, aplica um teste de nivelamento opcional e acompanha o progresso em módulos com conteúdos, questões de correção automática e gamificação (XP, níveis, streaks e insígnias). As mensagens do chat passam por um pipeline de PLN local: pré-processamento, geração de embeddings e busca por similaridade de cosseno em um corpus de intenções e em uma base de conhecimento. Quando a similaridade passa do limiar, o sistema executa a ação correspondente ou responde com o conteúdo local; apenas mensagens não reconhecidas são encaminhadas a uma IA externa, cujas respostas são incorporadas à base para reuso.',
    technologies: [
      'Python',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'pgvector',
      'spaCy',
      'NLTK',
      'Sentence Transformers',
      'React',
      'TypeScript',
      'Vite',
      'Docker',
      'Docker Compose',
      'GitHub Actions',
      'pytest',
      'Jira',
    ],
    // PREENCHER: faça um fork para o seu GitHub e troque o link pelo da sua cópia.
    // O repositório de documentação aponta para os repositórios de back-end e front-end.
    repositoryUrl: 'https://github.com/SkyFlyTeam/VariSkill-documentantion',
    images: [
      {
        src: 'projects/variskill-pipeline-pln.png',
        alt: 'Diagrama de atividades do pipeline de PLN do VariSkill: pré-processamento, geração de embedding, busca por similaridade de cosseno e decisão por limiar de 0,70 entre executar ação, entregar dica local ou consultar a IA externa com fallback',
        caption: 'Pipeline de PLN do assistente virtual.',
      },
    ],
    contributions: [
      'Montei a estrutura do serviço back-end em Django: organização dos apps por domínio, ambiente com Docker Compose (PostgreSQL com pgvector), pipeline de testes no GitHub Actions e template de pull request.',
      'Desenvolvi o pré-processamento de texto em português com spaCy e NLTK: tokenização, normalização, remoção de stopwords (preservando palavras relevantes para os comandos) e lematização.',
      'Desenvolvi o serviço de embeddings com Sentence Transformers (all-MiniLM-L6-v2, 384 dimensões) e a indexação vetorial no PostgreSQL com índice HNSW.',
      'Desenvolvi o classificador de intenções por similaridade de cosseno com limiar configurável e fallback para mensagens não reconhecidas, cobrindo intenções como saudação, listagem e matrícula em trilhas, nivelamento, dicas, recomendação de trilha, consulta de nível e próxima atividade.',
      'Criei o corpus de texto do assistente: exemplos e respostas de cada intenção e uma base de conhecimento com cerca de 95 perguntas e variações sobre Python, desenvolvimento web e análise de dados, com comandos para popular o banco.',
      'Implementei a recomendação de trilhas considerando os interesses e o histórico do usuário e a sugestão de perguntas relacionadas para dúvidas específicas.',
    ],
    hardSkills: [
      { name: 'Processamento de Linguagem Natural (spaCy / NLTK)', level: 4 },
      { name: 'Classificação de intenções', level: 4 },
      { name: 'Construção de corpus', level: 4 },
      { name: 'Embeddings e busca semântica (pgvector)', level: 4 },
      { name: 'Python / Django REST Framework', level: 4 },
      { name: 'Testes automatizados (pytest)', level: 3 },
      { name: 'Docker / CI com GitHub Actions', level: 4 },
    ],
    softSkills: [
      {
        name: 'Pensamento analítico',
        description:
          'Calibrei limiares de similaridade e ajustei exemplos de intenções muito parecidas para reduzir classificações erradas do assistente.',
      },
      {
        name: 'Responsabilidade',
        description:
          'Assumi diretamente o módulo de PLN, peça central do produto, garantindo que o assistente funcione mesmo sem a IA externa.',
      },
      {
        name: 'Colaboração',
        description:
          'Estruturei o back-end e os padrões do repositório (testes, PRs e ambiente Docker) para que o restante do time pudesse desenvolver sobre uma base comum.',
      },
    ],
  },
  {
    id: 'professional-aaf',
    category: 'professional',
    title: 'Infraestrutura de rede e sistema de gestão do clube',
    period: 'Estágio · fev/2024 – set/2024',
    partner: 'Associação Atlética Ferroviária',
    role: 'Estagiário de TI',
    testimonials: [
      {
        // PREENCHER: cole o texto da recomendação exatamente como está no LinkedIn
        quote: 'Recomendo Eric Lourenço, pois é um profissional com destreza e da maior qualidade.  amplos conhecimentos Técnicos, sempre prestativo e pró-ativo. Estamos contentes pelo seu crescimento profissional e estaremos sempre de braços abertos para um breve retorno. desejamos toda sorte e continue desempenhando seus conhecimentos nas empresas por onde passar.',
        author: 'Júlio Piorino',
        authorRole: 'Presidente da Associação Atlética Ferroviária',
        url: 'https://www.linkedin.com/in/eric-louren%C3%A7o-319240323/',
      },
    ],
    summary:
      'Responsável pela infraestrutura de rede da associação e pela manutenção do RealClube, o software de gestão utilizado no dia a dia do clube.',
    problem:
      'A rotina administrativa da associação, como o atendimento aos sócios e a gestão do clube, dependia de uma rede estável e do funcionamento contínuo do sistema de gestão RealClube. Falhas de conectividade ou no sistema interrompiam o atendimento e as operações, e o clube precisava de alguém para manter esse ambiente funcionando e resolver os problemas rapidamente.',
    solution:
      'Atuei na manutenção preventiva e corretiva da rede, diagnosticando e resolvendo problemas de conectividade, e no suporte ao RealClube, mantendo o sistema em funcionamento e auxiliando os funcionários no seu uso.',
    technologies: [
      'Redes TCP/IP',
      'Roteadores e switches',
      'Wi-Fi',
      'Cabeamento estruturado',
      'Windows',
      'RealClube',
    ],
    contributions: [
      'Mantive a infraestrutura de rede da associação, configurando equipamentos e diagnosticando falhas de conectividade.',
      'Realizei a manutenção do RealClube, sistema de gestão do clube, garantindo sua disponibilidade para as operações do dia a dia.',
      'Dei suporte técnico aos funcionários no uso do sistema e dos equipamentos de TI.',
    ],
    hardSkills: [
      { name: 'Redes de computadores', level: 3 },
      { name: 'Configuração de roteadores, switches e Wi-Fi', level: 3 },
      { name: 'Suporte técnico e diagnóstico de falhas', level: 4 },
      { name: 'Manutenção de sistemas de gestão', level: 3 },
    ],
    softSkills: [
      {
        name: 'Comunicação',
        description:
          'Atendi funcionários sem formação técnica, explicando problemas e soluções de forma simples e acessível.',
      },
      {
        name: 'Autonomia',
        description:
          'Fui o responsável pela TI no dia a dia, priorizando chamados e resolvendo problemas sem depender de uma equipe técnica maior.',
      },
      {
        name: 'Resolução de problemas',
        description:
          'Diagnostiquei falhas de rede e de sistema sob pressão, buscando restabelecer rapidamente o funcionamento das operações do clube.',
      },
    ],
  },
  {
    id: 'professional-necto',
    category: 'professional',
    title: 'Módulo de editais e modernização de aplicação legada em Django',
    period: 'Estágio · fev/2025 – abr/2026',
    partner: 'Necto Systems',
    role: 'Desenvolvedor (estágio) / Desenvolvedor',
    summary:
      'Desenvolvimento do módulo de editais de uma aplicação para a Fundação SOS Mata Atlântica e, em seguida, manutenção de todo o sistema, incluindo sua atualização a partir de uma versão beta do Django 2.0.',
    problem:
      'A aplicação, desenvolvida para a Fundação SOS Mata Atlântica, estava em produção havia mais de sete anos e ainda rodava sobre uma versão beta do Django 2.0. Além de precisar de uma nova funcionalidade para a gestão de editais, o sistema acumulava dependências desatualizadas, o que dificultava a manutenção, aumentava o risco de falhas e de vulnerabilidades e tornava cada mudança arriscada sem testes automatizados para garantir que nada fosse quebrado.',
    solution:
      'Desenvolvi o módulo de editais da aplicação e, depois, assumi a manutenção do sistema como um todo. Participei do processo de atualização da aplicação para versões suportadas do Django e de suas dependências, apoiado por uma cultura de testes automatizados e de entrega contínua, o que permitiu evoluir o sistema com mais segurança e previsibilidade.',
    technologies: [
      'Python',
      'Django',
      'Testes automatizados',
      'CI/CD',
      'Git',
      'Docker',
      'PostgresSQL'
    ],
    contributions: [
      'Desenvolvi o módulo de editais da aplicação.',
      'Assumi a manutenção da aplicação como um todo, corrigindo falhas e evoluindo funcionalidades de um sistema com mais de sete anos de existência.',
      'Participei da atualização da aplicação, que partia de uma versão beta do Django 2.0, para versões suportadas do framework e de suas dependências.',
      'Contribuí para a adoção de uma cultura de testes automatizados e de entrega contínua no projeto.',
    ],
    hardSkills: [
      { name: 'Python / Django', level: 4 },
      { name: 'Manutenção de sistemas legados', level: 4 },
      { name: 'Atualização de frameworks e dependências', level: 3 },
      { name: 'Testes automatizados', level: 3 },
      { name: 'CI/CD', level: 3 },
    ],
    softSkills: [
      {
        name: 'Responsabilidade',
        description:
          'Assumi a manutenção de toda a aplicação, respondendo pela estabilidade de um sistema em produção usado pelo cliente.',
      },
      {
        name: 'Adaptabilidade',
        description:
          'Aprendi Django na prática trabalhando em uma base de código extensa e antiga, entendendo decisões tomadas anos antes por outros desenvolvedores.',
      },
      {
        name: 'Melhoria contínua',
        description:
          'Ajudei a fortalecer práticas de testes e de entrega contínua, tornando as mudanças no sistema mais seguras para todo o time.',
      },
    ],
  },
  {
    id: 'professional-autaza',
    category: 'professional',
    title: 'VisionAI — Software de inspeção com IA',
    period: 'abr/2026 – atual',
    partner: 'Autaza',
    role: 'Analista de Sistemas',
    summary:
      'Responsável pelo VisionAI, software que realiza inspeções utilizando inteligência artificial, desenvolvido com Django, React e Electron.',
    problem:
      'Inspeções feitas apenas de forma visual e manual são lentas, dependem da atenção de cada inspetor e estão sujeitas a falhas e a resultados inconsistentes. O VisionAI automatiza esse processo com inteligência artificial, e por ser um produto em evolução constante, o projeto também precisava de processos e padrões de código que permitissem crescer o time e o software com qualidade.',
    solution:
      'Atuo no desenvolvimento do VisionAI, uma aplicação com back-end em Django, interface em React e distribuição como aplicativo desktop com Electron. Além de evoluir as funcionalidades do produto, introduzi no projeto processos e uma cultura de boas práticas de código: organização do trabalho com Scrum, pipelines de testes automatizados, revisão de código e padrões de branches, commits e merge. Também treino os estagiários que entram no time.',
    technologies: [
      'Python',
      'Django',
      'React',
      'Electron',
      'Git',
      'Pipelines de CI',
      'Scrum',
    ],
    contributions: [
      'Desenvolvo e mantenho o VisionAI no back-end (Django), no front-end (React) e no aplicativo desktop (Electron).',
      'Implantei a metodologia Scrum e fluxos de trabalho estruturados para organizar o desenvolvimento do time.',
      'Criei pipelines de testes automatizados, garantindo que cada alteração seja validada antes de ser integrada.',
      'Instituí a revisão de código (code review) como etapa obrigatória do fluxo de desenvolvimento.',
      'Defini padrões de branches, de commits e do fluxo de merge, tornando o histórico do projeto organizado e as entregas mais previsíveis.',
      'Treinei estagiários, orientando-os no código do projeto, nas boas práticas adotadas e no fluxo de trabalho do time.',
    ],
    hardSkills: [
      { name: 'Python / Django', level: 4 },
      { name: 'React', level: 4 },
      { name: 'Electron', level: 3 },
      { name: 'Boas práticas e qualidade de código', level: 4 },
      { name: 'Pipelines de testes (CI)', level: 4 },
      { name: 'Git flow: padrões de branch, commit e merge', level: 4 },
      { name: 'Scrum', level: 4 },
    ],
    softSkills: [
      {
        name: 'Liderança e mentoria',
        description:
          'Treino estagiários, acompanhando seu desenvolvimento técnico e ajudando-os a se tornarem produtivos no projeto.',
      },
      {
        name: 'Proatividade',
        description:
          'Tomei a iniciativa de propor e implantar Scrum, revisão de código, pipelines de testes e padrões de versionamento, conduzindo o time na adoção dessas práticas.',
      },
      {
        name: 'Comunicação',
        description:
          'Explico decisões técnicas e boas práticas de forma clara, tanto para os estagiários quanto para o restante da equipe.',
      },
    ],
  },
  {
    id: 'personal-slimegrind',
    category: 'personal',
    title: 'SlimeGrind — Jogo de plataforma mobile',
    period: '2023',
    role: 'Desenvolvedor independente',
    summary:
      'Jogo de plataforma para celular, publicado na Google Play Store, em que o jogador derrota slimes e tenta sobreviver ao maior número possível de ondas com a ajuda de power-ups.',
    problem:
      'Depois de participar de um jogo em equipe, eu queria passar pelo ciclo completo de um jogo comercial por conta própria: da ideia e da programação até a publicação em uma loja de aplicativos, enfrentando os desafios de controles por toque e de desempenho em dispositivos móveis.',
    solution:
      'Desenvolvi o SlimeGrind em Unity com C#: um jogo de plataforma com ondas de slimes de dificuldade crescente e power-ups que ajudam o jogador a sobreviver por mais tempo. Adaptei os controles para telas sensíveis ao toque, gerei a build para Android e publiquei o jogo na Google Play Store.',
    technologies: ['Unity', 'C#', 'Android', 'Google Play Console'],
    // PREENCHER (opcional): link da página na Play Store, se ainda estiver disponível
    demoUrl: undefined,
    // PREENCHER (opcional): salve capturas em public/projects/ e liste aqui
    images: [],
    contributions: [
      'Desenvolvi o jogo do início ao fim, da concepção à publicação.',
      'Programei em C# a movimentação de plataforma, o combate contra os slimes e o sistema de ondas com dificuldade progressiva.',
      'Implementei os power-ups que auxiliam o jogador durante as ondas.',
      'Adaptei os controles para toque, gerei a build Android e publiquei o jogo na Google Play Store.',
    ],
    hardSkills: [
      { name: 'Unity', level: 4 },
      { name: 'C#', level: 3 },
      { name: 'Desenvolvimento mobile (Android)', level: 3 },
      { name: 'Publicação na Google Play Store', level: 3 },
    ],
    softSkills: [
      {
        name: 'Autonomia',
        description:
          'Conduzi sozinho todas as etapas do projeto, organizando prioridades e aprendendo o que fosse necessário para chegar ao lançamento.',
      },
      {
        name: 'Persistência',
        description: 'Levei o jogo até a publicação, superando as dificuldades de terminar e lançar um produto completo.',
      },
    ],
  },
  {
    id: 'personal-alphacore',
    category: 'personal',
    title: 'AlphaCore — Jogo de tiro top-down',
    period: '2020',
    partner: 'Equipe T4E (projeto independente)',
    role: 'Programador',
    summary:
      'Protótipo de um jogo de tiro com visão de cima e estética retrô, desenvolvido em GameMaker com amigos: o jogador controla o alienígena Rocky, coleta armas e enfrenta slimes e outros inimigos.',
    problem:
      'Desenvolver jogos é um dos meus hobbies, e o AlphaCore nasceu da vontade de criar um jogo completo com amigos, cada um em uma área (programação, design, arte e música). O desafio era transformar as ideias e os assets do time em um jogo jogável, com sistemas de combate e inimigos funcionando juntos.',
    solution:
      'Programei o jogo em GameMaker, implementando a movimentação e o tiro do personagem, a coleta de armas, o comportamento e a vida dos inimigos e a interface com vida e munição. O projeto acabou descontinuado, mas uma versão de teste jogável foi publicada no Game Jolt para Windows.',
    technologies: ['GameMaker', 'GML (GameMaker Language)'],
    demoUrl: 'https://gamejolt.com/games/AlphaCore/563020',
    images: [
      { src: 'projects/alphacore-1.png', alt: 'Captura do AlphaCore: o personagem Rocky diante de um inimigo grande e de outros inimigos com barras de vida' },
      { src: 'projects/alphacore-2.png', alt: 'Captura do AlphaCore: o personagem atira em um grupo de inimigos, com a barra de munição à esquerda' },
    ],
    contributions: [
      'Fui o programador do jogo, responsável por toda a lógica implementada em GameMaker.',
      'Implementei a movimentação do personagem, o sistema de tiro e a coleta de armas.',
      'Programei os inimigos, com comportamento próprio e barras de vida, e a interface com vida e munição do jogador.',
      'Integrei ao jogo os sprites, a arte e as músicas produzidos pelos demais integrantes da equipe.',
    ],
    hardSkills: [
      { name: 'GameMaker / GML', level: 3 },
      { name: 'Lógica de programação de jogos', level: 3 },
    ],
    softSkills: [
      {
        name: 'Trabalho em equipe',
        description:
          'Trabalhei com designer, artistas e músicos, integrando as contribuições de cada um em um único jogo.',
      },
      {
        name: 'Criatividade',
        description: 'Ajudei a transformar ideias de jogabilidade em mecânicas funcionais e divertidas.',
      },
    ],
  },
]
