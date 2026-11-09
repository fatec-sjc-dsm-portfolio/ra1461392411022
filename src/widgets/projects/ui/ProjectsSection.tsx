import { PROJECT_CATEGORIES, ProjectCard, projects } from '@/entities/project'
import { ProjectDetailsDialog } from '@/features/view-project-details'
import { Button } from '@/shared/ui/button'
import { Section } from '@/shared/ui/section'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'

export function ProjectsSection() {
  const categories = PROJECT_CATEGORIES.map((category) => ({
    ...category,
    items: projects.filter((project) => project.category === category.value),
  })).filter((category) => category.items.length > 0)

  return (
    <Section
      id="projetos"
      title="Projetos"
      description="Minha trajetória na FATEC e fora dela. Abra os detalhes de cada projeto para ver o problema, a solução, minhas contribuições e as habilidades desenvolvidas."
    >
      <Tabs defaultValue={categories[0]?.value}>
        <TabsList className="h-auto w-full flex-wrap justify-start sm:w-fit">
          {categories.map((category) => (
            <TabsTrigger key={category.value} value={category.value}>
              {category.label}
              <span className="text-muted-foreground">({category.items.length})</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.value} value={category.value} className="mt-6 space-y-6">
            <p className="text-sm text-muted-foreground">{category.description}</p>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((project) => (
                <li key={project.id}>
                  <ProjectCard
                    project={project}
                    actions={
                      <>
                        <ProjectDetailsDialog project={project} />
                        {project.repositoryUrl && (
                          <Button asChild size="sm" variant="outline">
                            <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                              <i className="fa fa-github" aria-hidden />
                              Código
                            </a>
                          </Button>
                        )}
                      </>
                    }
                  />
                </li>
              ))}
            </ul>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  )
}
