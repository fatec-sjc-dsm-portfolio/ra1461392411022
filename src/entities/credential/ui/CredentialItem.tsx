import { ExternalLink } from 'lucide-react'
import type { Credential } from '../model/types'

export function CredentialItem({ credential }: { credential: Credential }) {
  return (
    <div className="space-y-0.5">
      <p className="font-medium leading-snug">
        {credential.url ? (
          <a
            href={credential.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
          >
            {credential.title}
            <ExternalLink className="size-3.5" aria-hidden />
          </a>
        ) : (
          credential.title
        )}
      </p>
      <p className="text-sm text-muted-foreground">
        {credential.issuer} · {credential.date}
      </p>
      {credential.description && <p className="text-sm">{credential.description}</p>}
    </div>
  )
}
