import { useEffect, useRef, useState } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { useScramble } from "@/hooks/use-scramble"

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [triggered, setTriggered] = useState(false)
  const scrambled = useScramble("Experience", triggered, 22)

  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "caught you:3",
      period: "June 2025 - Present",
      location: "Dhaka",
      description:
        "Developing full-scale Web3 ecosystem solutions and participating in code reviews for a decentralized blockchain protocol.",
      highlights: ["Next JS", "TailwindCSS", "React", "ShadcnUI", "MongoDB", "API Integration"],
    },
    {
      title: "UI/UX Designer",
      company: "Creatifi Studios",
      period: "October 2025 - Present",
      location: "Dhaka",
      description:
        "Designed intuitive user interfaces and experiences for web and mobile applications. Served as a contributing member in establishing the agency's strategic direction and design processes.",
      highlights: ["Figma", "Framer", "Motion"],
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: "top 85%",
        onEnter: () => setTriggered(true),
      })

      const cards = sectionRef.current?.querySelectorAll(".exp-card")
      cards?.forEach((card, i) => {
        const dir = i % 2 === 0 ? -80 : 80
        gsap.fromTo(
          card,
          {
            x: dir,
            y: 40,
            opacity: 0,
            rotateY: i % 2 === 0 ? -12 : 12,
            transformPerspective: 800,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        )

        // Stagger highlights in after card arrives
        const tags = card.querySelectorAll(".exp-tag")
        gsap.fromTo(
          tags,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.06,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-sm font-semibold text-foreground uppercase tracking-wide mb-12 font-mono"
        >
          {scrambled}
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="exp-card grid grid-cols-1 md:grid-cols-3 gap-8"
              style={{ opacity: 0 }}
            >
              <div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.company === "caught you:3" ? (
                      <span className="blur-xs">caught you :3</span>
                    ) : (
                      exp.company
                    )}{" "}
                    • {exp.location}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="exp-tag px-2 py-1 text-xs bg-muted rounded text-foreground"
                      style={{ opacity: 0 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
