import type { ReactNode } from 'react'
import { Award, ExternalLink, Quote } from 'lucide-react'
import { SkillList } from '@/entities/skill/@x/project'
import { asset } from '@/shared/lib'
import { Badge } from '@/shared/ui/badge'
import { Separator } from '@/shared/ui/separator'
import type { Project } from '../model/types'
import { HighlightPhoto } from './HighlightPhoto'

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-2">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{title}</h3>
      {children}
    </section>
  )
}

export function ProjectDetails({ project }: { project: Project }) {
  const partnerLabel = project.category === 'academic' ? 'Empresa parceira' : 'Empresa'

  return (
    <div className="space-y-6 text-sm leading-relaxed">
      {(project.partner || project.role) && (
        <dl className="grid gap-4 sm:grid-cols-2">
          {project.partner && (
            <div>
              <dt className="text-muted-foreground">{partnerLabel}</dt>
              <dd className="font-medium">{project.partner}</dd>
            </div>
          )}
          {project.role && (
            <div>
              <dt className="text-muted-foreground">Papel no time</dt>
              <dd className="font-medium">{project.role}</dd>
            </div>
          )}
        </dl>
      )}

      <Block title="O problema">
        <p>{project.problem}</p>
      </Block>

      <Block title="A solução">
        <p>{project.solution}</p>
      </Block>

      {project.images && project.images.length > 0 && (
        <div className={project.images.length > 1 ? 'grid gap-3 sm:grid-cols-2' : 'grid gap-3'}>
          {project.images.map((image) => (
            <figure key={image.src} className="space-y-1.5">
              <img
                src={asset(image.src)}
                alt={image.alt}
                loading="lazy"
                // White backdrop keeps transparent diagrams readable in dark mode
                className="w-full rounded-lg border bg-white"
              />
              {image.caption && (
                <figcaption className="text-xs text-muted-foreground">{image.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <Block title="Destaques">
          <ul className="space-y-4">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="grid gap-4 rounded-lg border bg-muted/30 p-4 sm:grid-cols-[1fr_14rem]">
                <div className="space-y-1">
                  <p className="flex items-start gap-2 font-medium">
                    <Award className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden />
                    {highlight.url ? (
                      <a
                        href={highlight.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
                      >
                        {highlight.title}
                        <ExternalLink className="size-3.5" aria-hidden />
                      </a>
                    ) : (
                      highlight.title
                    )}
                  </p>
                  {highlight.date && <p className="text-xs text-muted-foreground">{highlight.date}</p>}
                  <p>{highlight.description}</p>
                </div>
                {highlight.image && <HighlightPhoto image={highlight.image} />}
              </li>
            ))}
          </ul>
        </Block>
      )}

      <Block title="Tecnologias utilizadas">
        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, index) => (
            <li key={`${tech}-${index}`}>
              <Badge variant="outline">{tech}</Badge>
            </li>
          ))}
        </ul>
      </Block>

      <Block title="Contribuições pessoais">
        <ul className="list-disc space-y-1 pl-5">
          {project.contributions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Block>

      {project.testimonials && project.testimonials.length > 0 && (
        <Block title="Recomendações">
          <ul className="space-y-4">
            {project.testimonials.map((testimonial, index) => (
              <li key={index}>
                <figure className="relative rounded-lg border bg-muted/30 p-4 pl-12">
                  <Quote className="absolute top-4 left-4 size-5 text-muted-foreground" aria-hidden />
                  <blockquote className="whitespace-pre-line italic">{testimonial.quote}</blockquote>
                  <figcaption className="mt-3 text-sm">
                    <span className="font-medium not-italic">{testimonial.author}</span>
                    <span className="text-muted-foreground"> · {testimonial.authorRole}</span>
                    {testimonial.url && (
                      <a
                        href={testimonial.url}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-2 inline-flex items-center gap-1 text-muted-foreground underline-offset-4 hover:underline"
                      >
                        <i className="fa fa-linkedin" aria-hidden />
                        Ver no LinkedIn
                      </a>
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Block>
      )}

      <Separator />

      <div className="grid gap-6 md:grid-cols-2">
        <Block title="Hard skills">
          <SkillList skills={project.hardSkills} />
        </Block>

        <Block title="Soft skills">
          <ul className="space-y-3">
            {project.softSkills.map((skill, index) => (
              <li key={index}>
                <p className="font-medium">{skill.name}</p>
                <p className="text-muted-foreground">{skill.description}</p>
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </div>
  )
}
