export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  details: string[]
  technologies: string[]
  github?: string
  demo?: string
  featured: boolean
  category: string
}

export const projects: Project[] = [
  {
    slug: "electoral-systems-calculator",
    title: "Sri Lankan Electoral Systems Calculator",
    tagline: "Seat apportionment with an AI assistant",
    description:
      "Full-stack web application for electoral systems and seat apportionment, with an AI-powered assistant that uses RAG and LLMs to explain methods and results.",
    details: [
      "Models electoral systems and seat apportionment workflows for Sri Lankan election contexts.",
      "Pairs structured calculation with an assistant backed by retrieval-augmented generation.",
      "Separates computation, retrieval, and presentation so results stay inspectable.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Angular",
      "TypeScript",
      "LangChain",
      "ChromaDB",
      "Gemini",
    ],
    featured: true,
    category: "AI / Full-Stack",
  },
  {
    slug: "financial-content-analysis",
    title: "AI-Powered Financial Content Analysis Platform",
    tagline: "Summarization and insight from financial text",
    description:
      "AI-based platform for financial content analysis and summarization, combining LLM pipelines with a modern application stack.",
    details: [
      "Processes financial content for analysis and concise summarization.",
      "Uses backend services to orchestrate model calls, data handling, and delivery to the UI.",
      "Built with a production-oriented stack across Python services, React, and AWS.",
    ],
    technologies: ["Python", "FastAPI", "React", "TypeScript", "LLMs", "AWS"],
    featured: true,
    category: "AI / Backend",
  },
  {
    slug: "youtube-analytics-dashboard",
    title: "YouTube Analytics Dashboard",
    tagline: "Trends, measures, and visual storytelling",
    description:
      "Power BI dashboard analyzing trending YouTube videos, covering data cleaning, transformation, DAX measures, and visualization.",
    details: [
      "Cleans and transforms trending video data into a model suitable for analysis.",
      "Defines DAX measures to surface patterns in performance and category trends.",
      "Presents findings through a dashboard designed for comparison and drill-down.",
    ],
    technologies: ["Power BI", "DAX", "Data Cleaning", "Visualization"],
    featured: true,
    category: "Data",
  },
  {
    slug: "transaction-pdf-generator",
    title: "Transaction PDF Generator",
    tagline: "Structured reports from transaction data",
    description:
      "Application for generating transaction reports in PDF format, with a lightweight data layer and an interactive frontend.",
    details: [
      "Stores and queries transaction records for report generation.",
      "Produces PDF output suitable for sharing and record-keeping.",
      "Exposes a simple interface for generating and reviewing reports.",
    ],
    technologies: ["Python", "FastAPI", "SQLite", "SQLAlchemy", "Streamlit"],
    featured: true,
    category: "Backend",
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export const featuredProjects = projects.filter((project) => project.featured)
