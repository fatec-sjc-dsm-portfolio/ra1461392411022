import type { ReactNode } from 'react'
import { Award, Building2, Quote } from 'lucide-react'
import { Badge } from '@/shared/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card'
import type { Project } from '../model/types'

const MAX_VISIBLE_TECHNOLOGIES = 5

interface ProjectCardProps {
  project: Project
  /** Slot for actions provided by upper layers (details, links…) */
  actions?: ReactNode
}

export function ProjectCard({ project, actions }: ProjectCardProps) {
  const visible = project.technologies.slice(0, MAX_VISIBLE_TECHNOLOGIES)
  const hidden = project.technologies.length - visible.length

  return (
    <Card className="h-full">
      <CardHeader className="gap-2">
        <Badge variant="secondary" className="w-fit">
          {project.period}
        </Badge>
        <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
        {project.partner && (
          <CardDescription className="flex items-center gap-1.5">
            <Building2 className="size-3.5 shrink-0" aria-hidden />
            {project.partner}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <p className="text-sm text-muted-foreground">{project.summary}</p>
        {project.highlights?.map((highlight, index) => (
          <p key={index} className="flex items-start gap-1.5 text-xs font-medium">
            <Award className="mt-px size-3.5 shrink-0 text-amber-500" aria-hidden />
            {highlight.title}
          </p>
        ))}
        {project.testimonials?.map((testimonial, index) => (
          <p key={index} className="flex items-start gap-1.5 text-xs font-medium">
            <Quote className="mt-px size-3.5 shrink-0 text-sky-500" aria-hidden />
            Recomendação de {testimonial.author}
          </p>
        ))}
        <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologias">
          {visible.map((tech, index) => (
            <li key={`${tech}-${index}`}>
              <Badge variant="outline">{tech}</Badge>
            </li>
          ))}
          {hidden > 0 && (
            <li>
              <Badge variant="outline">+{hidden}</Badge>
            </li>
          )}
        </ul>
      </CardContent>
      {actions && <CardFooter className="flex flex-wrap gap-2">{actions}</CardFooter>}
    </Card>
  )
}
