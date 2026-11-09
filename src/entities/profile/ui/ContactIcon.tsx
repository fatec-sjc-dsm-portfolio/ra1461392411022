import { cn } from '@/shared/lib'
import type { ContactKind } from '../model/types'

const ICONS: Record<ContactKind, string> = {
  github: 'fa-github',
  linkedin: 'fa-linkedin',
  email: 'fa-envelope',
  instagram: 'fa-instagram',
  website: 'fa-globe',
}

export function ContactIcon({ kind, className }: { kind: ContactKind; className?: string }) {
  return <i className={cn('fa', ICONS[kind], className)} aria-hidden />
}
