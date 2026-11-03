import { ArrowLeft, ExternalLink } from "lucide-react"
import { GitHubIcon } from "../components/ui/SocialIcons"
import { Link, useParams } from "react-router-dom"
import { ButtonLink } from "../components/ui/Button"
import { SectionHeading } from "../components/ui/SectionHeading"
import { TechBadge } from "../components/ui/TechBadge"
import { getProject } from "../data/projects"
import { site } from "../data/site"
import { usePageMeta } from "../hooks/usePageMeta"
import { isPlaceholderUrl } from "../lib/links"
import { NotFound } from "./NotFound"

export function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  usePageMeta(
    project ? `${project.title} | ${site.name}` : `Project | ${site.name}`,
    project?.description ?? "Project details.",
  )

  if (!project) {
    return <NotFound />
  }

  const githubReady = !isPlaceholderUrl(project.github)
  const demoReady = !isPlaceholderUrl(project.demo)

  return (
    <div className="max-w-3xl">
      <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-white">
        <ArrowLeft size={16} />
        All projects
      </Link>
      <SectionHeading eyebrow={project.category} title={project.title} description={project.tagline} />
      <p className="mt-6 text-base leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-8 space-y-3 text-sm text-ink">
        {project.details.map((item) => (
          <li key={item} className="glass rounded-xl px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {githubReady ? (
          <ButtonLink to={project.github ?? ""} variant="secondary">
            <GitHubIcon size={16} />
            GitHub
          </ButtonLink>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-5 py-2.5 text-sm text-muted">
            <GitHubIcon size={16} />
            GitHub URL pending
          </span>
        )}
        {demoReady ? (
          <ButtonLink to={project.demo ?? ""}>
            <ExternalLink size={16} />
            Live demo
          </ButtonLink>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-5 py-2.5 text-sm text-muted">
            <ExternalLink size={16} />
            Demo URL pending
          </span>
        )}
      </div>
    </div>
  )
}
