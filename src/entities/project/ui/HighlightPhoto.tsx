import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { asset } from '@/shared/lib'
import type { ProjectImage } from '../model/types'

export function HighlightPhoto({ image }: { image: ProjectImage }) {
  const [missing, setMissing] = useState(false)

  if (missing) {
    // Only reminds the author during development; hidden in the published site
    if (!import.meta.env.DEV) return null
    return (
      <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-4 text-center text-xs text-muted-foreground">
        <ImageOff className="size-5" aria-hidden />
        Adicione a foto em <code>public/{image.src}</code>
      </div>
    )
  }

  return (
    <img
      src={asset(image.src)}
      alt={image.alt}
      loading="lazy"
      onError={() => setMissing(true)}
      className="aspect-video w-full rounded-lg border object-cover"
    />
  )
}
