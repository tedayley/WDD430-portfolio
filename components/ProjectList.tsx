import ProjectCard from "./ProjectCard";

const projects = [
  {
    number: "01",
    title: "Pokémon Companion",
    category: "Interactive web app",
    description:
      "A Pokémon companion that lets you search for any Pokémon and explore the results.",
    href: "https://tedayley.github.io/Pokemon-Companion",
    linkLabel: "Explore Pokémon Companion",
  },
  {
    number: "02",
    title: "CSE 340 Full-Stack Project",
    category: "Full-stack web project",
    description:
      "A full-stack web project built as part of CSE 340, demonstrating a complete web application experience.",
    href: "https://cse340-8465.onrender.com/",
    linkLabel: "Open the project",
    note: "The database is no longer active, so some features may not work as expected.",
  },
  {
    number: "03",
    title: "Weather Analysis Project",
    category: "Data analysis & research",
    description:
      "Python-based research investigating correlations between cloud coverage and surface temperature.",
    highlights: [
      "Retrieved and processed NOAA weather station data and satellite imagery.",
      "Applied image processing to estimate cloud coverage from satellite images.",
      "Automated data collection and analytical workflows.",
      "Presented the research at a science fair and was selected as a regional finalist.",
    ],
  },
  {
    number: "04",
    title: "D&D Stock Market Application",
    category: "Software development",
    description:
      "A web-based simulation with dynamic inventory and stock-market-style mechanics for player interaction.",
    highlights: [
      "Built frontend interfaces and backend server functionality with Python, JavaScript, HTML, and CSS.",
      "Packaged the software as a standalone application for local deployment.",
    ],
  },
  {
    number: "05",
    title: "Mairie AI Assistant",
    category: "AI development",
    description:
      "An end-to-end desktop AI assistant powered by local large language models.",
    highlights: [
      "Built with Python and Tkinter, using Ollama for local model integration.",
      "Integrated Edge TTS for conversational voice synthesis.",
      "Added configurable voice selection, response generation, and application preferences.",
      "Resolved Python environment, package dependency, and model integration challenges.",
    ],
  },
];

export default function ProjectList() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300">
            Selected work
          </p>
          <h2 className="neon-thrum text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects in the wild
          </h2>
        </div>
        <p className="max-w-md leading-7 text-slate-400">
          A selection of work spanning web development, research, and local AI
          applications.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.number} {...project} />
        ))}
      </div>
    </section>
  );
}