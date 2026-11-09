import type { SkillGroup } from './types'

// Competências técnicas gerais, consolidadas a partir dos projetos.
// Nível: 1 (ouvi falar) · 2 (básico) · 3 (intermediário) · 4 (autônomo) · 5 (fluente)
export const skillGroups: SkillGroup[] = [
  {
    title: 'Linguagens',
    skills: [
      { name: 'Python', level: 4 },
      { name: 'TypeScript', level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'SQL', level: 4 },
      { name: 'Java', level: 4 },
      { name: 'C#', level: 3 },
    ],
  },
  {
    title: 'Back-end',
    skills: [
      { name: 'Django / Django REST Framework', level: 4 },
      { name: 'NestJS', level: 4 },
      { name: 'Node.js / Express', level: 4 },
      { name: 'Spring Boot', level: 4 },
      { name: 'Flask', level: 3 },
      { name: 'ORMs (TypeORM, Sequelize, Spring Data JPA)', level: 4 },
      { name: 'Tempo real (WebSocket / SSE)', level: 3 },
    ],
  },
  {
    title: 'Front-end, mobile e desktop',
    skills: [
      { name: 'React', level: 4 },
      { name: 'Next.js', level: 3 },
      { name: 'Electron', level: 3 },
      { name: 'Tailwind CSS', level: 3 },
    ],
  },
  {
    title: 'Bancos de dados',
    skills: [
      { name: 'PostgreSQL', level: 4 },
      { name: 'MySQL', level: 4 },
      { name: 'Modelagem de dados relacional', level: 4 },
      { name: 'pgvector (banco vetorial)', level: 4 },
      { name: 'MongoDB', level: 3 },
    ],
  },
  {
    title: 'PLN e Inteligência Artificial',
    skills: [
      { name: 'Processamento de Linguagem Natural (spaCy / NLTK)', level: 4 },
      { name: 'Classificação de intenções', level: 4 },
      { name: 'Construção de corpus', level: 4 },
      { name: 'Embeddings e busca semântica', level: 4 },
      { name: 'RAG (Retrieval-Augmented Generation)', level: 3 },
      { name: 'Integração com LLMs (OpenAI API)', level: 3 },
    ],
  },
  {
    title: 'DevOps e infraestrutura',
    skills: [
      { name: 'Docker / Docker Compose', level: 4 },
      { name: 'CI/CD com GitHub Actions', level: 4 },
      { name: 'Deploy em VPS (Nginx, HTTPS)', level: 4 },
      { name: 'Linux', level: 4 },
      { name: 'Redes de computadores', level: 3 },
      { name: 'MQTT e IoT', level: 3 },
    ],
  },
  {
    title: 'Arquitetura, qualidade e processos',
    skills: [
      { name: 'Arquitetura de software (microsserviços, sistemas distribuídos)', level: 4 },
      { name: 'Git e padrões de branch, commit e merge', level: 4 },
      { name: 'Revisão de código', level: 4 },
      { name: 'Testes automatizados', level: 3 },
      { name: 'Scrum / Jira', level: 4 },
      { name: 'Manutenção e modernização de sistemas legados', level: 4 },
    ],
  },
  {
    title: 'Desenvolvimento de jogos',
    skills: [
      { name: 'Unity', level: 4 },
      { name: 'GameMaker / GML', level: 3 },
    ],
  },
]
