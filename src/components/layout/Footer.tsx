import { Mail, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import { site } from "../../data/site"
import { isPlaceholderUrl } from "../../lib/links"
import { GitHubIcon, LinkedInIcon } from "../ui/SocialIcons"

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.title}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <a className="inline-flex items-center gap-2 hover:text-white" href={`mailto:${site.email}`}>
            <Mail size={16} />
            {site.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} />
            {site.location}
          </span>
          {isPlaceholderUrl(site.github) ? (
            <span className="inline-flex items-center gap-2" title="Add your GitHub URL in src/data/site.ts">
              <GitHubIcon size={16} />
              GitHub
            </span>
          ) : (
            <a className="inline-flex items-center gap-2 hover:text-white" href={site.github} target="_blank" rel="noreferrer">
              <GitHubIcon size={16} />
              GitHub
            </a>
          )}
          {isPlaceholderUrl(site.linkedin) ? (
            <span className="inline-flex items-center gap-2" title="Add your LinkedIn URL in src/data/site.ts">
              <LinkedInIcon size={16} />
              LinkedIn
            </span>
          ) : (
            <a className="inline-flex items-center gap-2 hover:text-white" href={site.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
          )}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <Link to="/contact" className="hover:text-white">
            Get in touch
          </Link>
        </div>
      </div>
    </footer>
  )
}
