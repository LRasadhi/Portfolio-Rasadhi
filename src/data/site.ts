export const site = {
  name: "Landunika Rasadhi",
  shortName: "LR",
  title: "Software Engineer | AI & Full-Stack Developer",
  location: "Sri Lanka",
  email: "rasadhilandunika@gmail.com",
  github: "https://github.com/YOUR_GITHUB_USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME",
  cvPath: "/Landunika-Rasadhi-CV.pdf",
  headline:
    "I build practical AI systems and full-stack products — from LLM pipelines to interfaces people can actually use.",
  intro:
    "Software engineer with a foundation in Applied Sciences, Mathematics, ICT, and Physics. I work across AI-powered applications, backend engineering, and full-stack development, with a focus on Large Language Models and production-ready software.",
}

export const about = {
  summary: [
    "I am a software engineer working at the intersection of AI engineering and full-stack development. My academic background in applied sciences, mathematics, ICT, and physics trained me to reason from first principles — then I took that discipline into building systems that ship.",
    "In industry I have designed backend APIs, frontend interfaces, and LLM-based workflows for financial content analysis and other applied AI products. I care about software that is measurable, maintainable, and useful: clear APIs, honest evaluation, and interfaces that do not get in the way.",
  ],
  education: {
    degree:
      "B.Sc. (Hons) in Applied Sciences, Mathematics and ICT, Physics",
    institution: "University of Sri Jayewardenepura",
  },
  interests: [
    "LLM application design, RAG systems, and evaluation pipelines",
    "Backend architecture with Python and FastAPI",
    "Full-stack product development with React and TypeScript",
    "Data processing pipelines and applied machine learning",
  ],
  goals: [
    "Build reliable AI products that solve real operational problems, not demos.",
    "Grow as an AI engineer with strong software engineering fundamentals.",
    "Contribute to teams that value clarity, ownership, and user impact.",
  ],
}

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const
