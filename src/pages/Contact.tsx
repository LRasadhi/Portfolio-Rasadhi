import { Mail, MapPin, Send } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "../components/ui/SocialIcons"
import { type FormEvent, type ReactNode, useState } from "react"
import { Button } from "../components/ui/Button"
import { SectionHeading } from "../components/ui/SectionHeading"
import { site } from "../data/site"
import { usePageMeta } from "../hooks/usePageMeta"
import { isPlaceholderUrl } from "../lib/links"

type Status = "idle" | "submitting" | "success" | "error"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  usePageMeta(`Contact | ${site.name}`, `Contact ${site.name} about AI engineering and full-stack software work.`)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>("idle")
  const [feedback, setFeedback] = useState("")

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID

  function validate() {
    const next: Record<string, string> = {}
    if (!name.trim()) next.name = "Please enter your name."
    if (!email.trim()) next.email = "Please enter your email."
    else if (!emailPattern.test(email)) next.email = "Enter a valid email address."
    if (!subject.trim()) next.subject = "Please add a subject."
    if (message.trim().length < 12) next.message = "Message should be at least 12 characters."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validate()) {
      setStatus("error")
      setFeedback("Please fix the highlighted fields.")
      return
    }

    setStatus("submitting")
    setFeedback("")

    if (formspreeId) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        })
        if (!response.ok) {
          throw new Error("Request failed")
        }
        setStatus("success")
        setFeedback("Message sent. I will get back to you soon.")
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
        setErrors({})
      } catch {
        setStatus("error")
        setFeedback("The form service could not send this message. You can email me directly instead.")
      }
      return
    }

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${body}`
    setStatus("success")
    setFeedback("Your email client should open with this message. If it does not, write to me directly.")
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s talk about the work."
          description="Use the form for project discussions, roles, or collaboration. Validation runs in the browser; optional Formspree wiring is documented in the README."
        />
        <form className="mt-8 space-y-4" onSubmit={onSubmit} noValidate>
          <Field label="Name" error={errors.name}>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              aria-invalid={Boolean(errors.name)}
              className={inputClass(Boolean(errors.name))}
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={Boolean(errors.email)}
              className={inputClass(Boolean(errors.email))}
            />
          </Field>
          <Field label="Subject" error={errors.subject}>
            <input
              id="subject"
              name="subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              aria-invalid={Boolean(errors.subject)}
              className={inputClass(Boolean(errors.subject))}
            />
          </Field>
          <Field label="Message" error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              aria-invalid={Boolean(errors.message)}
              className={`${inputClass(Boolean(errors.message))} resize-y`}
            />
          </Field>
          <Button type="submit" disabled={status === "submitting"}>
            <Send size={16} />
            {status === "submitting" ? "Sending…" : "Send message"}
          </Button>
          {feedback ? (
            <p
              role="status"
              className={`text-sm ${status === "success" ? "text-emerald-300" : "text-rose-300"}`}
            >
              {feedback}
            </p>
          ) : null}
        </form>
      </div>

      <aside className="glass h-fit rounded-2xl p-6">
        <h2 className="font-display text-xl font-semibold text-white">Direct channels</h2>
        <ul className="mt-5 space-y-4 text-sm">
          <li>
            <a className="flex items-start gap-3 text-muted hover:text-white" href={`mailto:${site.email}`}>
              <Mail size={18} className="mt-0.5 text-accent" />
              <span>
                <span className="block text-white">Email</span>
                {site.email}
              </span>
            </a>
          </li>
          <li className="flex items-start gap-3 text-muted">
            <MapPin size={18} className="mt-0.5 text-accent" />
            <span>
              <span className="block text-white">Location</span>
              {site.location}
            </span>
          </li>
          <li className="flex items-start gap-3 text-muted">
            <GitHubIcon size={18} className="mt-0.5 text-accent" />
            <span>
              <span className="block text-white">GitHub</span>
              {isPlaceholderUrl(site.github) ? (
                "Add URL in src/data/site.ts"
              ) : (
                <a className="hover:text-white" href={site.github} target="_blank" rel="noreferrer">
                  {site.github}
                </a>
              )}
            </span>
          </li>
          <li className="flex items-start gap-3 text-muted">
            <LinkedInIcon size={18} className="mt-0.5 text-accent" />
            <span>
              <span className="block text-white">LinkedIn</span>
              {isPlaceholderUrl(site.linkedin) ? (
                "Add URL in src/data/site.ts"
              ) : (
                <a className="hover:text-white" href={site.linkedin} target="_blank" rel="noreferrer">
                  {site.linkedin}
                </a>
              )}
            </span>
          </li>
        </ul>
      </aside>
    </div>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: ReactNode
}) {
  const id = label.toLowerCase()
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm text-white">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-rose-300">{error}</span> : null}
    </label>
  )
}

function inputClass(invalid: boolean) {
  return `w-full rounded-xl border bg-white/3 px-3 py-2.5 text-sm text-white outline-none placeholder:text-white/30 ${
    invalid ? "border-rose-400/60" : "border-line focus:border-accent/60"
  }`
}
