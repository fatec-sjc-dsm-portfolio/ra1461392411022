import type { ProjectCategory } from './types'

export const PROJECT_CATEGORIES: { value: ProjectCategory; label: string; description: string }[] = [
  {
    value: 'academic',
    label: 'Acadêmicos (API)',
    description: 'Projetos Integradores desenvolvidos a cada semestre na FATEC com empresas parceiras.',
  },
  {
    value: 'professional',
    label: 'Profissionais',
    description: 'Projetos e atividades desenvolvidos em estágio e outros vínculos profissionais.',
  },
  {
    value: 'personal',
    label: 'Pessoais',
    description: 'Projetos próprios que exercitam competências técnicas e humanas.',
  },
]
