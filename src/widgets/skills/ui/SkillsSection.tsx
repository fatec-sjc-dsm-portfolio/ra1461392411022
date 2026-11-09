import { SkillLevelLegend, SkillList, skillGroups } from '@/entities/skill'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Section } from '@/shared/ui/section'

export function SkillsSection() {
  return (
    <Section
      id="competencias"
      title="Competências técnicas"
      description="Autoavaliação por nível de domínio, de 1 (ouvi falar) a 5 (fluente)."
      className="bg-muted/30"
    >
      <div className="mb-8 rounded-lg border bg-background p-4">
        <SkillLevelLegend />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle className="text-base">{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <SkillList skills={group.skills} />
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
