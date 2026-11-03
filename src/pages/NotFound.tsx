import { ButtonLink } from "../components/ui/Button"
import { site } from "../data/site"
import { usePageMeta } from "../hooks/usePageMeta"

export function NotFound() {
  usePageMeta(`Page not found | ${site.name}`, "The page you requested does not exist.")

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
      <p className="font-display text-sm tracking-[0.3em] text-accent uppercase">404</p>
      <h1 className="font-display mt-4 text-4xl font-bold text-white">This route is not in the graph.</h1>
      <p className="mt-4 max-w-md text-muted">
        The page does not exist. Head back to the homepage or browse projects.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink to="/">Back home</ButtonLink>
        <ButtonLink to="/projects" variant="secondary">
          View projects
        </ButtonLink>
      </div>
    </div>
  )
}
