import { GraduationCap, Target, Telescope } from "lucide-react"
import { Link } from "react-router-dom"
import { Reveal } from "../components/ui/Reveal"
import { SectionHeading } from "../components/ui/SectionHeading"
import { experience } from "../data/experience"
import { about, site } from "../data/site"
import { usePageMeta } from "../hooks/usePageMeta"

export function About() {
  usePageMeta(`About | ${site.name}`, `Background, education, and career focus of ${site.name}.`)

  return (
    <div className="space-y-14">
      <SectionHeading
        eyebrow="About"
        title="Engineer first. Scientist by training."
        description="A concise look at how I work, what I studied, and where I am headed."
      />

      <Reveal>
        <div className="glass max-w-3xl space-y-4 rounded-2xl p-6 leading-relaxed text-muted sm:p-8">
          {about.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <h3 className="font-display text-xl font-semibold text-white">Professional experience</h3>
            <Link to="/experience" className="text-sm text-muted hover:text-white">
              Full timeline
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {experience.map((item) => (
              <article key={item.id} className="glass rounded-2xl p-6">
                <p className="text-xs tracking-[0.18em] text-accent uppercase">{item.period}</p>
                <h4 className="mt-2 font-display text-lg font-semibold text-white">{item.role}</h4>
                <p className="mt-1 text-sm text-white/80">{item.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal>
          <article className="glass h-full rounded-2xl p-6">
            <GraduationCap className="text-accent" />
            <h3 className="mt-4 font-display text-xl font-semibold text-white">Education</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{about.education.degree}</p>
            <p className="mt-2 text-sm text-white">{about.education.institution}</p>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="glass h-full rounded-2xl p-6">
            <Telescope className="text-accent" />
            <h3 className="mt-4 font-display text-xl font-semibold text-white">Technical interests</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {about.interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </Reveal>
        <Reveal delay={0.16}>
          <article className="glass h-full rounded-2xl p-6">
            <Target className="text-accent" />
            <h3 className="mt-4 font-display text-xl font-semibold text-white">Career goals</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {about.goals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </div>
  )
}
