export type ExperienceItem = {
  id: string
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: "neura",
    role: "Software Engineer",
    company: "Neura Intelligence (PVT) Ltd",
    period: "Current",
    summary:
      "Building AI-powered financial content analysis products across backend services, LLM workflows, and frontend interfaces.",
    highlights: [
      "Developing AI-powered financial content analysis applications",
      "Building backend APIs using Python and FastAPI",
      "Working with LLMs, prompt engineering, and evaluation pipelines",
      "Developing frontend components using React and TypeScript",
      "Working with data processing and integration pipelines",
      "Using AWS services and CI/CD workflows",
    ],
  },
  {
    id: "booleanlab",
    role: "Trainee Software Developer (AI)",
    company: "BooleanLab (PVT) Ltd",
    period: "Previous",
    summary:
      "Supported AI/ML application development with backend APIs, data preparation, and LLM-based features.",
    highlights: [
      "Developed backend APIs using Python and FastAPI",
      "Worked with SQL databases and LLM-based applications",
      "Supported AI/ML data collection, annotation, and preprocessing",
      "Worked with API testing and backend development",
    ],
  },
]
