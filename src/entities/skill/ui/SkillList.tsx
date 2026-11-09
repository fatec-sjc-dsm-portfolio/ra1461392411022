import { SkillRating } from './SkillRating'
import type { Skill } from '../model/types'

export function SkillList({ skills }: { skills: Skill[] }) {
  return (
    <ul className="divide-y">
      {skills.map((skill, index) => (
        <li key={`${skill.name}-${index}`} className="flex items-center justify-between gap-4 py-2 text-sm">
          <span>{skill.name}</span>
          <SkillRating level={skill.level} className="shrink-0" />
        </li>
      ))}
    </ul>
  )
}
