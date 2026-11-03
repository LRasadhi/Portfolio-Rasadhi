export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Angular", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["FastAPI", "REST APIs", "Node.js", "Express.js"],
  },
  {
    title: "AI & Data",
    items: ["LLMs", "RAG", "NLP", "Machine Learning", "Pandas", "Power BI"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    title: "Tools & Cloud",
    items: ["Git", "GitHub", "AWS", "Postman", "GitHub Actions"],
  },
]

export const homeStack = [
  "Python",
  "TypeScript",
  "React",
  "FastAPI",
  "LLMs",
  "RAG",
  "AWS",
  "SQL",
]
