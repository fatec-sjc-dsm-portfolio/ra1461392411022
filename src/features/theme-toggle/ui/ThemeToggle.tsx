import { Moon, Sun } from 'lucide-react'
import { Button } from '@/shared/ui/button'
import { useTheme } from '../model/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const label = theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={label} title={label}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  )
}
