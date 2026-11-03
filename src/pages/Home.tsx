import { ArrowRight, Download, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { HeroBackdrop } from "../components/home/HeroBackdrop"
import { ProjectCard } from "../components/projects/ProjectCard"
import { ButtonLink } from "../components/ui/Button"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeading } from "../components/ui/SectionHeading"
import { featuredProjects } from "../data/projects"
import { homeStack } from "../data/skills"
import { site } from "../data/site"
import { usePageMeta } from "../hooks/usePageMeta"

export function Home() {
  usePageMeta(
    `${site.name} | Software Engineer`,
    "Software Engineer specializing in AI engineering, LLM applications, and full-stack development.",
  )

  return (
    <div className="relative">
      <section className="relative overflow-hidden pt-6 pb-20 sm:pt-14">
        <HeroBackdrop />
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/4 px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Based in {site.location} · Open to AI and full-stack work
        </p>
        <h1 className="font-display max-w-4xl text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-4 text-lg text-accent sm:text-xl">{site.title}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          {site.headline}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {site.intro}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2 text-xs text-muted">
          {["AI Engineering", "LLM applications", "Full-Stack", "Backend"].map((focus) => (
            <li key={focus} className="rounded-full border border-line px-3 py-1">
              {focus}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink to="/projects">
            View Projects
            <ArrowRight size={16} />
          </ButtonLink>
          <ButtonLink to="/contact" variant="secondary">
            <Mail size={16} />
            Contact Me
          </ButtonLink>
          <ButtonLink to={site.cvPath} variant="ghost" download>
            <Download size={16} />
            Download CV
          </ButtonLink>
        </div>
      </section>

      <Reveal>
        <section className="py-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected work"
              title="Featured projects"
              description="A short list of systems I have built across AI applications, full-stack products, and data analysis."
            />
            <Link to="/projects" className="hidden text-sm text-muted hover:text-white sm:inline-flex">
              All projects
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-12">
          <SectionHeading
            eyebrow="Stack"
            title="Tools I work with"
            description="A working set of languages and platforms I use to ship AI-backed and full-stack software."
          />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {homeStack.map((item) => (
              <div
                key={item}
                className="glass rounded-2xl px-4 py-5 text-center text-sm font-medium text-white"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/skills" className="text-sm text-muted hover:text-white">
              See the full skill breakdown
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
