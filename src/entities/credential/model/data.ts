import type { Credential } from './types'

// Certificações, cursos, idiomas, eventos, apresentações e publicações.
// Apenas itens relevantes ao curso. Grupos sem itens não aparecem no site.
export const credentials: Credential[] = [
  {
    type: 'language',
    title: 'Inglês — nível C1 (avançado)',
    issuer: 'TOEIC (ETS)',
    date: 'out/2026',
    // PREENCHER (opcional): link para o certificado
    url: undefined,
  },
  {
    type: 'presentation',
    title: 'SmartFarm: monitoramento de estufa com Flask, Docker e Raspberry Pi',
    issuer: 'Comunidade Python São José dos Campos',
    date: 'set/2025',
    description: 'Apresentação do Projeto Integrador (API) do 1º semestre.',
  },
]
