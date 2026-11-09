/**
 * Resolves a file placed in /public, respecting Vite's `base`
 * (required for the site to work under a GitHub Pages sub-path).
 */
export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
