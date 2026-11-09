import type { ReactNode } from 'react'
import type { SectionId } from '@/shared/config'
import { cn } from '@/shared/lib'

interface SectionProps {
  id: SectionId
  title: string
  description?: string
  className?: string
  children: ReactNode
}

export function Section({ id, title, description, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-16 py-16 md:py-24', className)}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <header className="mb-10 space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          {description && <p className="max-w-2xl text-muted-foreground">{description}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
