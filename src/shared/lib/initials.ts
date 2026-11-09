export function getInitials(name: string) {
  const words = name.split(/\s+/).filter((word) => /^\p{L}/u.test(word))
  const first = words[0]?.[0] ?? ''
  const last = words.length > 1 ? words[words.length - 1][0] : ''
  return (first + last).toUpperCase()
}
