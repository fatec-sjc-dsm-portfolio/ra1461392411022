/** 1 = ouvi falar … 5 = fluente */
export type SkillLevel = 1 | 2 | 3 | 4 | 5

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillGroup {
  title: string
  skills: Skill[]
}
