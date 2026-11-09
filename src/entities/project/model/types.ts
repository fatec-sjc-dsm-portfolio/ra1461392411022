import type { Skill } from '@/entities/skill/@x/project'

export type ProjectCategory = 'academic' | 'professional' | 'personal'

export interface SoftSkill {
  name: string
  /** How the skill was exercised in this project */
  description: string
}

export interface ProjectImage {
  /** Path inside /public, e.g. 'projects/api-1.png' */
  src: string
  alt: string
  caption?: string
}

/** Event presentations, awards and other recognition the project received */
export interface ProjectHighlight {
  title: string
  description: string
  /** Free text, e.g. 'jun/2024' */
  date?: string
  url?: string
  image?: ProjectImage
}

/** Recommendation received from someone who worked with you (e.g. LinkedIn) */
export interface Testimonial {
  quote: string
  author: string
  /** Author's position, e.g. 'Presidente da Associação Atlética Ferroviária' */
  authorRole: string
  /** Link to where the recommendation can be verified */
  url?: string
}

export interface Project {
  id: string
  category: ProjectCategory
  title: string
  /** e.g. '1º semestre · 2024/1' or 'Estágio · 2025' */
  period: string
  /** Partner company (API) or employer (professional). Never a logo. */
  partner?: string
  /** Your role in the team, e.g. 'Desenvolvedor back-end', 'Scrum Master' */
  role?: string
  summary: string
  problem: string
  solution: string
  technologies: string[]
  repositoryUrl?: string
  demoUrl?: string
  images?: ProjectImage[]
  highlights?: ProjectHighlight[]
  testimonials?: Testimonial[]
  contributions: string[]
  hardSkills: Skill[]
  softSkills: SoftSkill[]
}
