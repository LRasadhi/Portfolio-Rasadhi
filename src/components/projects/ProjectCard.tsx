import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"
import type { Project } from "../../data/projects"
import { isPlaceholderUrl } from "../../lib/links"
import { GitHubIcon } from "../ui/SocialIcons"
import { TechBadge } from "../ui/TechBadge"

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  const number = String((index ?? 0) + 1).padStart(2, "0")
  const githubReady = !isPlaceholderUrl(project.github)
  const demoReady = !isPlaceholderUrl(project.demo)

  return (
    <article className="group glass relative flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-accent/35">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">{project.category}</p>
          <h3 className="mt-2 font-display text-xl font-semibold text-white">
            <Link to={`/projects/${project.slug}`} className="hover:text-white">
              {project.title}
            </Link>
          </h3>
        </div>
        <span className="font-display text-sm text-white/30">{number}</span>
      </div>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.technologies.slice(0, 5).map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm text-white/80 group-hover:text-white"
        >
          View project
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
        <div className="flex items-center gap-3 text-sm text-muted">
          {githubReady ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1" title="Add a GitHub URL in src/data/projects.ts">
              <GitHubIcon size={14} />
              GitHub
            </span>
          )}
          {demoReady ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-white"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-1" title="Add a demo URL in src/data/projects.ts">
              <ExternalLink size={14} />
              Demo
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
