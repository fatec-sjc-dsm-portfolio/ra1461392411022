export type ContactKind = 'github' | 'linkedin' | 'email' | 'instagram' | 'website'

export interface Contact {
  kind: ContactKind
  label: string
  url: string
}

export interface Education {
  course: string
  institution: string
  period: string
  status: string
}

export interface Profile {
  fullName: string
  headline: string
  /** Path inside /public, e.g. 'profile.jpg'. Falls back to initials if missing. */
  photo: string
  about: string
  /** First item is shown as the current education in the hero */
  education: Education[]
  objectives: {
    academic: string
    professional: string
  }
  interests: string[]
  contacts: Contact[]
}
