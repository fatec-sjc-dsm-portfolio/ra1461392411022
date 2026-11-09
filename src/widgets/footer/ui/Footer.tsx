import { profile } from '@/entities/profile'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p>Feito com React, Vite, Tailwind CSS e shadcn/ui</p>
      </div>
    </footer>
  )
}
