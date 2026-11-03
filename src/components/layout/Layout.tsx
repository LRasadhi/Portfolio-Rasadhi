import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Suspense, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" role="status" aria-live="polite">
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-accent" />
      <span className="sr-only">Loading page</span>
    </div>
  )
}

export function Layout() {
  const location = useLocation()
  const reduce = useReducedMotion()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname])

  return (
    <div className="bg-app relative min-h-svh overflow-x-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="noise" aria-hidden="true" />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={location.pathname}
          className="relative mx-auto min-h-[70vh] max-w-6xl px-5 py-10"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
