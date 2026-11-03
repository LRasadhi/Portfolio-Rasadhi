import { ProjectCard } from "../components/projects/ProjectCard"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeading } from "../components/ui/SectionHeading"
import { projects } from "../data/projects"
import { site } from "../data/site"
import { usePageMeta } from "../hooks/usePageMeta"

export function Projects() {
  usePageMeta(`Projects | ${site.name}`, "Selected software, AI, and data projects by Landunika Rasadhi.")

  return (
    <div>
      <SectionHeading
        eyebrow="Projects"
        title="Work worth inspecting"
        description="Selected work across AI applications, full-stack products, and data analysis. Open a card for architecture notes and links."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.04}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
