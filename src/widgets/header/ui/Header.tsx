import { Menu } from 'lucide-react'
import { profile } from '@/entities/profile'
import { ThemeToggle } from '@/features/theme-toggle'
import { SECTIONS } from '@/shared/config'
import { getInitials } from '@/shared/lib'
import { Button } from '@/shared/ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/shared/ui/sheet'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#sobre" className="font-semibold tracking-tight" aria-label="Voltar ao início">
          {getInitials(profile.fullName)}
          <span className="text-muted-foreground"> · portfólio</span>
        </a>

        <nav aria-label="Seções" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <Button asChild variant="ghost" size="sm">
                  <a href={`#${section.id}`}>{section.label}</a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle>Navegação</SheetTitle>
              </SheetHeader>
              <nav aria-label="Seções" className="px-4">
                <ul className="flex flex-col gap-1">
                  {SECTIONS.map((section) => (
                    <li key={section.id}>
                      <SheetClose asChild>
                        <a
                          href={`#${section.id}`}
                          className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                        >
                          {section.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
