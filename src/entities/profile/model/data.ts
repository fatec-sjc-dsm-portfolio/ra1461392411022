import type { Profile } from './types'

// PREENCHER: seus dados pessoais. A foto deve ser recente e profissional:
// salve-a como public/profile.jpg (ou altere o caminho abaixo).
export const profile: Profile = {
  fullName: 'Eric Lourenço Mendes da Silva',
  headline: 'Especialista em Django em formação',
  photo: 'profile.jpg',
  about:
    'Desenvolvedor Full Stack em formação, apaixonado por criar soluções web robustas e escaláveis. Atuo com foco em Python, Django e React, sempre buscando boas práticas e arquiteturas limpas.',
  education: [
    {
      course: 'Desenvolvimento de Software Multiplataforma',
      institution: 'FATEC São José dos Campos',
      period: '2024 – 2026',
      status: 'Cursando o 6º semestre',
    },
  ],
  objectives: {
    academic:
      'Concluir a graduação em Desenvolvimento de Software Multiplataforma aprofundando os estudos em Processamento de Linguagem Natural e em práticas de DevOps, e seguir em uma pós-graduação voltada a Engenharia de Machine Learning (MLOps), unindo as duas áreas.',
    professional:
      'Evoluir da atuação atual como Analista de Sistemas para uma carreira em DevOps/Engenharia de Plataforma, construindo pipelines de CI/CD, infraestrutura como código e ambientes confiáveis para colocar em produção aplicações que usam modelos de linguagem.',
  },
  interests: [
    'DevOps',
    'CI/CD',
    'Infraestrutura como Código',
    'Contêineres e Kubernetes',
    'Computação em nuvem',
    'Processamento de Linguagem Natural',
    'LLMs e MLOps',
  ],
  contacts: [
    { kind: 'github', label: 'GitHub', url: 'https://github.com/ericloumendes' },
    { kind: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/eric-lourenço-319240323' },
    // Opcional: remova a linha abaixo se não quiser exibir seu e-mail
    { kind: 'email', label: 'E-mail', url: 'mailto:ericloumendes@gmail.com' },
  ],
}
