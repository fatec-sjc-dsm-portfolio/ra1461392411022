import { ContactSection } from '@/widgets/contact'
import { CurriculumSection } from '@/widgets/curriculum'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { ProjectsSection } from '@/widgets/projects'
import { SkillsSection } from '@/widgets/skills'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <CurriculumSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
