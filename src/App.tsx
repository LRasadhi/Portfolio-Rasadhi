import { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"

const Home = lazy(() => import("./pages/Home").then((module) => ({ default: module.Home })))
const About = lazy(() => import("./pages/About").then((module) => ({ default: module.About })))
const Experience = lazy(() =>
  import("./pages/Experience").then((module) => ({ default: module.Experience })),
)
const Projects = lazy(() =>
  import("./pages/Projects").then((module) => ({ default: module.Projects })),
)
const ProjectDetail = lazy(() =>
  import("./pages/ProjectDetail").then((module) => ({ default: module.ProjectDetail })),
)
const Skills = lazy(() => import("./pages/Skills").then((module) => ({ default: module.Skills })))
const Contact = lazy(() =>
  import("./pages/Contact").then((module) => ({ default: module.Contact })),
)
const NotFound = lazy(() =>
  import("./pages/NotFound").then((module) => ({ default: module.NotFound })),
)

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
