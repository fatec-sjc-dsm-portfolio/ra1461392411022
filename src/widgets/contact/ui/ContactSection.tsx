import { ContactIcon, profile } from '@/entities/profile'
import { Section } from '@/shared/ui/section'

function displayUrl(url: string) {
  return url.replace(/^mailto:/, '').replace(/^https?:\/\/(www\.)?/, '')
}

export function ContactSection() {
  return (
    <Section id="contato" title="Contato" description="Vamos conversar? Me encontre por aqui." className="bg-muted/30">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.contacts.map((contact) => (
          <li key={contact.kind}>
            <a
              href={contact.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-xl border bg-card p-4 transition-colors hover:bg-accent"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-lg text-primary-foreground">
                <ContactIcon kind={contact.kind} />
              </span>
              <span className="min-w-0">
                <span className="block font-medium">{contact.label}</span>
                <span className="block truncate text-sm text-muted-foreground">{displayUrl(contact.url)}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
