export const SECTIONS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'competencias', label: 'Competências' },
  { id: 'curriculo', label: 'Currículo' },
  { id: 'contato', label: 'Contato' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']
