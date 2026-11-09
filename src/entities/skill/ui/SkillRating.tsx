import { Star } from 'lucide-react'
import { cn } from '@/shared/lib'
import { SKILL_LEVELS } from '../model/levels'
import type { SkillLevel } from '../model/types'

interface SkillRatingProps {
  level: SkillLevel
  showLabel?: boolean
  className?: string
}

export function SkillRating({ level, showLabel = false, className }: SkillRatingProps) {
  const label = SKILL_LEVELS[level]

  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <span className="flex gap-0.5" role="img" aria-label={`Nível ${level} de 5: ${label}`} title={label}>
        {([1, 2, 3, 4, 5] as const).map((step) => (
          <Star
            key={step}
            aria-hidden
            className={cn(
              'size-3.5',
              step <= level ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/40',
            )}
          />
        ))}
      </span>
      {showLabel && <span className="text-xs text-muted-foreground">{label}</span>}
    </span>
  )
}
