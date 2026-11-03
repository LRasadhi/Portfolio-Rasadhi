import { Reveal } from "../components/ui/Reveal"
import { SectionHeading } from "../components/ui/SectionHeading"
import { experience } from "../data/experience"
import { site } from "../data/site"
import { usePageMeta } from "../hooks/usePageMeta"

export function Experience() {
  usePageMeta(`Experience | ${site.name}`, "Professional experience in AI engineering and full-stack software development.")

  return (
    <div>
      <SectionHeading
        eyebrow="Experience"
        title="Where I have built software"
        description="Roles focused on AI applications, backend APIs, and full-stack delivery."
      />

      <ol className="relative mt-12 space-y-8 border-l border-line pl-6 sm:pl-8">
        {experience.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <li className="relative">
              <span className="absolute top-2 -left-[31px] h-3 w-3 rounded-full border border-accent bg-[#070a12] sm:-left-[39px]" />
              <article className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-white">{item.role}</h2>
                    <p className="mt-1 text-sm text-accent">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.summary}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}
