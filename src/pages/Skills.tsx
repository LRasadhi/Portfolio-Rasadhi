import { Reveal } from "../components/ui/Reveal"
import { SectionHeading } from "../components/ui/SectionHeading"
import { skillGroups } from "../data/skills"
import { site } from "../data/site"
import { usePageMeta } from "../hooks/usePageMeta"

export function Skills() {
  usePageMeta(`Skills | ${site.name}`, "Programming, frontend, backend, AI, database, and cloud skills.")

  return (
    <div>
      <SectionHeading
        eyebrow="Skills"
        title="A practical engineering toolkit"
        description="Grouped by how I actually use them: languages, interfaces, services, models, data, and delivery."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.04}>
            <article className="glass h-full rounded-2xl p-6">
              <h2 className="font-display text-xl font-semibold text-white">{group.title}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-white/3 px-3 py-1.5 text-sm text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
