const PLACEHOLDER_HOSTS = ["YOUR_GITHUB_USERNAME", "YOUR_LINKEDIN_USERNAME"]

export function isPlaceholderUrl(url?: string) {
  if (!url) {
    return true
  }
  return PLACEHOLDER_HOSTS.some((token) => url.includes(token))
}
