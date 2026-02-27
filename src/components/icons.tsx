type IconProps = { size?: number; className?: string }

function BiIcon({ name, size, className }: { name: string; size: number; className?: string }) {
  return <i aria-hidden="true" className={`bi bi-${name} ${className ?? ""}`.trim()} style={{ fontSize: size, lineHeight: 1 }} />
}

export function AppleIcon({ size = 18, className }: IconProps) {
  return <BiIcon name="apple" size={size} className={className} />
}

export function SearchIcon({ size = 16, className }: IconProps) {
  return <BiIcon name="search" size={size} className={className} />
}

export function MenuIcon({ size = 20, className }: IconProps) {
  return <BiIcon name="list" size={size} className={className} />
}

export function HomeIcon({ size = 16, className }: IconProps) {
  return <BiIcon name="house-door-fill" size={size} className={className} />
}

export function StarIcon({ size = 16, className }: IconProps) {
  return <BiIcon name="star-fill" size={size} className={className} />
}

export function RadioIcon({ size = 16, className }: IconProps) {
  return <BiIcon name="broadcast" size={size} className={className} />
}

export function ChevronRightIcon({ size = 16, className }: IconProps) {
  return <BiIcon name="chevron-right" size={size} className={className} />
}

export function PrevIcon({ size = 16, className }: IconProps) {
  return <BiIcon name="skip-backward-fill" size={size} className={className} />
}

export function PlayIcon({ size = 16, className }: IconProps) {
  return <BiIcon name="play-fill" size={size} className={className} />
}

export function NextIcon({ size = 16, className }: IconProps) {
  return <BiIcon name="skip-forward-fill" size={size} className={className} />
}

export function MusicIcon({ size = 22, className }: IconProps) {
  return <BiIcon name="music-note-beamed" size={size} className={className} />
}
