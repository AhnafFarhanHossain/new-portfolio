import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Invenza",
    description:
      "Inventory management and order tracking software. A comprehensive solution for managing inventory with real-time tracking capabilities.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Vercel",
      "Cloudflare",
    ],
    link: "https://invenza.me",
    github: "https://github.com/AhnafFarhanHossain/Invenza",
    year: 2025,
    image: "/images/projects/invenza.webp",
  },
  {
    title: "ColorTailor AI",
    description:
      "AI-powered color palette generator from keywords. Generates beautiful color schemes based on user input using advanced AI.",
    technologies: ["Next.js", "OpenRouter AI", "React"],
    link: "https://colortailorai.vercel.app",
    github: "https://github.com/AhnafFarhanHossain/colortailor",
    year: 2025,
    image: "/images/projects/colortailor.webp",
  },
  {
    title: "Global Trade Online",
    description:
      "Built the frontend for Global Trade Online, a platform connecting buyers and sellers globally. Built the dashboard and the landing page. Go to /dashboard to view the dashboard pages.",
    technologies: [
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "React",
      "ShadcnUI",
    ],
    link: "https://gto-frontend.vercel.app",
    github: "https://github.com/AhnafFarhanHossain/GTO-frontend",
    year: 2026,
    image: "/images/projects/gto.webp",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-in-out"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-muted-foreground">{project.year}</p>

              <h3 className="text-lg font-semibold text-foreground">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-muted rounded text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
