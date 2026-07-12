import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { useScramble } from "@/hooks/use-scramble"

const projects = [
  {
    title: "Invenza",
    description:
      "Inventory management and order tracking software. A comprehensive solution for managing inventory with real-time tracking capabilities.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Vercel", "Cloudflare"],
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
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    // ScrollTrigger reveal
    gsap.fromTo(
      card,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        delay: index * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      }
    )

    // Set initial transform state before creating quickTo instances
    gsap.set(card, { rotateX: 0, rotateY: 0, scale: 1, transformPerspective: 800, transformOrigin: "center center" })

    // 3D tilt on mousemove via gsap.quickTo for butter-smooth interpolation
    const xTo = gsap.quickTo(card, "rotateY", { duration: 0.5, ease: "power3.out" })
    const yTo = gsap.quickTo(card, "rotateX", { duration: 0.5, ease: "power3.out" })
    const scaleTo = gsap.quickTo(card, "scale", { duration: 0.4, ease: "power3.out" })

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width / 2)
      const dy = (e.clientY - cy) / (rect.height / 2)
      xTo(dx * 8)
      yTo(-dy * 6)
      scaleTo(1.02)

      // Parallax image layer
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          x: dx * -10,
          y: dy * -8,
          duration: 0.5,
          ease: "power2.out",
        })
      }
    }

    const handleLeave = () => {
      xTo(0)
      yTo(0)
      scaleTo(1)
      if (imgRef.current) {
        gsap.to(imgRef.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" })
      }
    }

    card.addEventListener("mousemove", handleMove)
    card.addEventListener("mouseleave", handleLeave)
    gsap.set(card, { transformPerspective: 800, transformOrigin: "center center" })

    return () => {
      card.removeEventListener("mousemove", handleMove)
      card.removeEventListener("mouseleave", handleLeave)
    }
  }, [index])

  return (
    <div
      ref={cardRef}
      className="bg-card border border-border rounded-lg p-6 space-y-4 will-change-transform"
      style={{ opacity: 0 }}
    >
      <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
        <img
          ref={imgRef}
          src={project.image}
          alt={`${project.title} preview`}
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
      </div>

      <p className="text-sm text-muted-foreground">{project.year}</p>
      <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 pt-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs bg-muted rounded text-foreground">
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
  )
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [triggered, setTriggered] = useState(false)
  const scrambled = useScramble("Projects", triggered, 22)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: "top 85%",
        onEnter: () => setTriggered(true),
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-sm font-semibold text-foreground uppercase tracking-wide mb-12 font-mono"
        >
          {scrambled}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
