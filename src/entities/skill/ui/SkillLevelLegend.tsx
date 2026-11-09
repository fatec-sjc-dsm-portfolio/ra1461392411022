import { SkillRating } from './SkillRating'
import { SKILL_LEVELS } from '../model/levels'
import type { SkillLevel } from '../model/types'

export function SkillLevelLegend() {
  const levels = Object.keys(SKILL_LEVELS).map(Number) as SkillLevel[]

  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legenda dos níveis">
      {levels.map((level) => (
        <li key={level}>
          <SkillRating level={level} showLabel />
        </li>
      ))}
    </ul>
  )
}
