import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { navLinks, site } from "../../data/site"
import { ButtonLink } from "../ui/Button"

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-3 py-1.5 text-sm transition-colors ${
    isActive ? "bg-white/8 text-white" : "text-muted hover:text-white"
  }`

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled || open ? "glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <NavLink to="/" className="flex items-center gap-3 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-white/4 font-display text-sm font-bold">
            {site.shortName}
          </span>
          <span className="hidden font-medium sm:block">{site.name}</span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink to={site.cvPath} variant="secondary" download>
            Download CV
          </ButtonLink>
        </div>

        <button
          type="button"
          className="rounded-xl border border-line p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-line px-5 py-4 md:hidden"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClass}>
                  {link.label}
                </NavLink>
              ))}
              <ButtonLink to={site.cvPath} variant="secondary" className="mt-2" download>
                Download CV
              </ButtonLink>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
