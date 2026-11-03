import type { ComponentProps, ReactNode } from "react"
import { Link } from "react-router-dom"

type Variant = "primary" | "secondary" | "ghost"

type Shared = {
  children: ReactNode
  variant?: Variant
  className?: string
}

const styles: Record<Variant, string> = {
  primary:
    "bg-accent text-[#0b0d16] hover:bg-[#a397ff] shadow-[0_0_0_1px_rgba(139,125,255,0.35)]",
  secondary:
    "border border-line bg-white/4 text-white hover:border-accent/50 hover:bg-white/7",
  ghost: "text-muted hover:text-white",
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50"

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: Shared & ComponentProps<"button">) {
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className = "",
  download,
}: Shared & { to: string; download?: string | boolean }) {
  const classes = `${base} ${styles[variant]} ${className}`
  const external = to.startsWith("http") || to.startsWith("mailto:") || to.endsWith(".pdf")

  if (external) {
    return (
      <a href={to} className={classes} download={download} rel={to.startsWith("http") ? "noreferrer" : undefined} target={to.startsWith("http") ? "_blank" : undefined}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}
