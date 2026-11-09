import { ArrowDown, GraduationCap, Target, Telescope, Compass } from 'lucide-react'
import { ContactIcon, ProfileAvatar, profile } from '@/entities/profile'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'

export function Hero() {
  const [current] = profile.education

  return (
    <section id="sobre" className="scroll-mt-16 border-b bg-muted/30">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:items-center md:py-24">
        <div className="space-y-6">
          {current && <Badge variant="secondary">{current.status}</Badge>}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">{profile.fullName}</h1>
            <p className="text-xl text-muted-foreground">{profile.headline}</p>
          </div>
          {current && (
            <p className="flex items-start gap-2 text-sm">
              <GraduationCap className="mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                {current.course} — {current.institution} ({current.period})
              </span>
            </p>
          )}
          <p className="max-w-prose leading-relaxed">{profile.about}</p>
          <div className="flex flex-wrap items-center gap-2">
            <Button asChild>
              <a href="#projetos">
                Ver projetos
                <ArrowDown />
              </a>
            </Button>
            {profile.contacts.map((contact) => (
              <Button key={contact.kind} asChild variant="outline" size="icon" aria-label={contact.label}>
                <a href={contact.url} target="_blank" rel="noreferrer" title={contact.label}>
                  <ContactIcon kind={contact.kind} />
                </a>
              </Button>
            ))}
          </div>
        </div>
        <ProfileAvatar profile={profile} className="order-first size-40 md:order-none md:size-56" />
      </div>

      <div className="mx-auto grid max-w-5xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Target className="size-4" aria-hidden />
              Objetivo acadêmico
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">{profile.objectives.academic}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Telescope className="size-4" aria-hidden />
              Objetivo profissional
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">{profile.objectives.professional}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Compass className="size-4" aria-hidden />
              Áreas de interesse
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-wrap gap-1.5">
              {profile.interests.map((interest, index) => (
                <li key={index}>
                  <Badge variant="outline">{interest}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
