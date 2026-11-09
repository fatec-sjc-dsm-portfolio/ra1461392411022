import type { CredentialType } from './types'

/** Display order and titles of the curriculum groups */
export const CREDENTIAL_TYPES: { value: CredentialType; label: string }[] = [
  { value: 'certification', label: 'Certificações técnicas' },
  { value: 'course', label: 'Cursos de extensão' },
  { value: 'language', label: 'Idiomas' },
  { value: 'event', label: 'Participação em eventos' },
  { value: 'presentation', label: 'Apresentações de trabalhos' },
  { value: 'publication', label: 'Artigos e publicações' },
]
