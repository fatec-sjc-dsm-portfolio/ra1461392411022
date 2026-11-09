export type CredentialType =
  | 'certification'
  | 'course'
  | 'language'
  | 'event'
  | 'presentation'
  | 'publication'

export interface Credential {
  type: CredentialType
  title: string
  /** Institution, platform or event organizer */
  issuer: string
  /** Free text, e.g. '2025' or 'mar/2025' */
  date: string
  description?: string
  /** Certificate, publication or event link */
  url?: string
}
