import { useEffect, useRef, useState } from "react"
import {
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiPrisma,
  SiSocketdotio, SiGit, SiCloudflare, SiVercel, SiRedis, SiLangchain,
} from "react-icons/si"
import type { ComponentType, SVGProps } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { useScramble } from "@/hooks/use-scramble"

function PineconeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L8.5 7.5H15.5L12 2Z" fill="currentColor" />
      <path d="M9 6L5.5 11.5H12.5L9 6Z" fill="currentColor" opacity="0.75" />
      <path d="M15 6L11.5 11.5H18.5L15 6Z" fill="currentColor" opacity="0.75" />
      <path d="M6.5 10.5L3 16H10L6.5 10.5Z" fill="currentColor" opacity="0.5" />
      <path d="M12 10.5L8.5 16H15.5L12 10.5Z" fill="currentColor" opacity="0.5" />
      <path d="M17.5 10.5L14 16H21L17.5 10.5Z" fill="currentColor" opacity="0.5" />
      <path d="M12 15.5L10 22H14L12 15.5Z" fill="currentColor" opacity="0.35" />
    </svg>
  )
}
function LangGraphIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="5" cy="12" r="2.5" fill="currentColor" />
      <circle cx="19" cy="5" r="2.5" fill="currentColor" />
      <circle cx="19" cy="19" r="2.5" fill="currentColor" />
      <line x1="7.2" y1="10.8" x2="17" y2="6.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="7.2" y1="13.2" x2="17" y2="17.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="7.5" x2="19" y2="16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
function AiSdkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L22 20H2L12 2Z" fill="currentColor" />
    </svg>
  )
}
function BullMqIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 7C3 7 4 5 6 5.5L7.5 4L8.5 6C9.5 5.5 10.7 5.2 12 5.2C13.3 5.2 14.5 5.5 15.5 6L16.5 4L18 5.5C20 5 21 7 21 7C21 7 20 8.5 18.5 8C18.8 8.8 19 9.7 19 10.5C19 14.09 15.87 17 12 17C8.13 17 5 14.09 5 10.5C5 9.7 5.2 8.8 5.5 8C4 8.5 3 7 3 7Z" fill="currentColor" />
    </svg>
  )
}
function PgVectorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" opacity="0.15" />
      <text x="4.5" y="15.5" fontSize="8" fontWeight="bold" fill="currentColor" fontFamily="monospace">pg</text>
      <path d="M14 8l4 4-4 4M18 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type SkillIcon = ComponentType<{ size?: number; className?: string }> | ComponentType<SVGProps<SVGSVGElement>>
interface Skill { name: string; icon: SkillIcon }
interface SkillCategory { category: string; skills: Skill[] }

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [triggered, setTriggered] = useState(false)
  const scrambled = useScramble("Skills", triggered, 22)

  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend",
      skills: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Framer Motion", icon: SiFramer },
      ],
    },
    {
      category: "Backend & AI",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "AI SDK", icon: AiSdkIcon },
        { name: "LangChain", icon: SiLangchain },
        { name: "LangGraph", icon: LangGraphIcon },
        { name: "Pinecone", icon: PineconeIcon },
        { name: "pgvector", icon: SiPostgresql },
        { name: "Redis", icon: SiRedis },
        { name: "BullMQ", icon: BullMqIcon },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Prisma", icon: SiPrisma },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Socket.io", icon: SiSocketdotio },
        { name: "Git", icon: SiGit },
        { name: "Cloudflare", icon: SiCloudflare },
        { name: "Vercel", icon: SiVercel },
      ],
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: "top 85%",
        onEnter: () => setTriggered(true),
      })

      // Cascade each skill row in with stagger + icon spin
      const columns = sectionRef.current?.querySelectorAll(".skill-col")
      columns?.forEach((col, colIdx) => {
        const items = col.querySelectorAll(".skill-item")
        const header = col.querySelector(".skill-cat-header")

        if (header) {
          gsap.fromTo(
            header,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: { trigger: col, start: "top 85%" },
              delay: colIdx * 0.1,
            }
          )
        }

        gsap.fromTo(
          items,
          { x: -20, opacity: 0, rotate: -5 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: col, start: "top 82%" },
            delay: colIdx * 0.1 + 0.1,
          }
        )

        // Icon spin on enter
        const icons = col.querySelectorAll(".skill-icon")
        gsap.fromTo(
          icons,
          { rotate: -180, scale: 0 },
          {
            rotate: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.06,
            ease: "back.out(2)",
            scrollTrigger: { trigger: col, start: "top 82%" },
            delay: colIdx * 0.1 + 0.1,
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          ref={headingRef}
          className="text-sm font-semibold text-foreground uppercase tracking-wide mb-12 font-mono"
        >
          {scrambled}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-col space-y-4">
              <h3 className="skill-cat-header text-base font-semibold text-foreground" style={{ opacity: 0 }}>
                {cat.category}
              </h3>
              <div className="space-y-3">
                {cat.skills.map((skill) => {
                  const IconComponent = skill.icon as ComponentType<{ size?: number; width?: number; height?: number; className?: string }>
                  return (
                    <div
                      key={skill.name}
                      className="skill-item flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      style={{ opacity: 0 }}
                    >
                      <span className="skill-icon inline-flex shrink-0" style={{ display: "inline-flex" }}>
                        <IconComponent size={16} width={16} height={16} />
                      </span>
                      {skill.name}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
