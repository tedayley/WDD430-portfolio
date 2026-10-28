import TechStackCard from "./TechStackCard";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript", "C#", "C++", "SQL"],
  },
  {
    category: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "React",
      "JavaScript",
      "jQuery",
      "Responsive Design",
      "Vite",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "NoSQL"],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      "Ollama",
      "Local LLMs",
      "Prompt Engineering",
      "AI Assistants",
      "Text-to-Speech Integration",
    ],
  },
  {
    category: "Development Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman"],
  },
  {
    category: "Cloud & Deployment",
    skills: ["Render", "Heroku"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="accent-label mb-3 font-mono text-xs uppercase tracking-[0.25em]">
            Technical skills
          </p>
          <h2 className="neon-thrum text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools I work with
          </h2>
        </div>
        <p className="max-w-md leading-7 text-slate-400">
          A snapshot of the languages, frameworks, and tools I use to build
          across the stack.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <TechStackCard
            key={group.category}
            number={String(index + 1).padStart(2, "0")}
            {...group}
          />
        ))}
      </div>
    </section>
  );
}
