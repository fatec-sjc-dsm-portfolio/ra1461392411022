import { asset, cn, getInitials } from '@/shared/lib'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import type { Profile } from '../model/types'

interface ProfileAvatarProps {
  profile: Pick<Profile, 'fullName' | 'photo'>
  className?: string
}

export function ProfileAvatar({ profile, className }: ProfileAvatarProps) {
  return (
    <Avatar className={cn('size-40 border-4 border-background shadow-lg', className)}>
      <AvatarImage src={asset(profile.photo)} alt={`Foto de ${profile.fullName}`} className="object-cover" />
      <AvatarFallback className="text-4xl font-semibold">{getInitials(profile.fullName)}</AvatarFallback>
    </Avatar>
  )
}
