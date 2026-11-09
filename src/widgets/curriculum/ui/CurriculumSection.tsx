import { CREDENTIAL_TYPES, CredentialItem, credentials } from '@/entities/credential'
import { profile } from '@/entities/profile'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Section } from '@/shared/ui/section'

export function CurriculumSection() {
  const groups = CREDENTIAL_TYPES.map((type) => ({
    ...type,
    items: credentials.filter((credential) => credential.type === type.value),
  })).filter((group) => group.items.length > 0)

  return (
    <Section id="curriculo" title="Informações curriculares" description="Formação, certificações e atividades complementares.">
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Formação acadêmica</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {profile.education.map((item, index) => (
                <li key={index} className="space-y-0.5">
                  <p className="font-medium">{item.course}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.institution} · {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {groups.map((group) => (
          <Card key={group.value}>
            <CardHeader>
              <CardTitle className="text-base">{group.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {group.items.map((credential, index) => (
                  <li key={index}>
                    <CredentialItem credential={credential} />
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
