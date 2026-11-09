import { ExternalLink } from 'lucide-react'
import { ProjectDetails, type Project } from '@/entities/project'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'

export function ProjectDetailsDialog({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Ver detalhes</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader className="gap-2 text-left">
          <Badge variant="secondary" className="w-fit">
            {project.period}
          </Badge>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription>{project.summary}</DialogDescription>
        </DialogHeader>

        <ProjectDetails project={project} />

        {(project.repositoryUrl || project.demoUrl) && (
          <DialogFooter className="gap-2 sm:justify-start">
            {project.repositoryUrl && (
              <Button asChild variant="outline">
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                  <i className="fa fa-github" aria-hidden />
                  Repositório no GitHub
                </a>
              </Button>
            )}
            {project.demoUrl && (
              <Button asChild variant="outline">
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink />
                  Ver demonstração
                </a>
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}
