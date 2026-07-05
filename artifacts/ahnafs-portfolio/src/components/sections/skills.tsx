import {
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiPrisma,
  SiSocketdotio, SiGit, SiCloudflare, SiVercel, SiRedis, SiLangchain,
} from "react-icons/si"
import type { ComponentType, SVGProps } from "react"

// --- Inline SVG logos for tools not in react-icons ---

function PineconeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L8.5 7.5H15.5L12 2Z" fill="#00C07F" />
      <path d="M9 6L5.5 11.5H12.5L9 6Z" fill="#00C07F" opacity="0.85" />
      <path d="M15 6L11.5 11.5H18.5L15 6Z" fill="#00C07F" opacity="0.85" />
      <path d="M6.5 10.5L3 16H10L6.5 10.5Z" fill="#00C07F" opacity="0.7" />
      <path d="M12 10.5L8.5 16H15.5L12 10.5Z" fill="#00C07F" opacity="0.7" />
      <path d="M17.5 10.5L14 16H21L17.5 10.5Z" fill="#00C07F" opacity="0.7" />
      <path d="M12 15.5L10 22H14L12 15.5Z" fill="#00C07F" opacity="0.55" />
    </svg>
  )
}

function LangGraphIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="5" cy="12" r="2.5" fill="#1C7A55" />
      <circle cx="19" cy="5" r="2.5" fill="#1C7A55" />
      <circle cx="19" cy="19" r="2.5" fill="#1C7A55" />
      <line x1="7.2" y1="10.8" x2="17" y2="6.2" stroke="#1C7A55" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="7.2" y1="13.2" x2="17" y2="17.8" stroke="#1C7A55" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="7.5" x2="19" y2="16.5" stroke="#1C7A55" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function AiSdkIcon(props: SVGProps<SVGSVGElement>) {
  // Vercel AI SDK — uses Vercel's triangle mark with a sparkle accent
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L22 20H2L12 2Z" fill="currentColor" />
    </svg>
  )
}

function BullMqIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Bull head silhouette */}
      <path
        d="M3 7C3 7 4 5 6 5.5L7.5 4L8.5 6C9.5 5.5 10.7 5.2 12 5.2C13.3 5.2 14.5 5.5 15.5 6L16.5 4L18 5.5C20 5 21 7 21 7C21 7 20 8.5 18.5 8C18.8 8.8 19 9.7 19 10.5C19 14.09 15.87 17 12 17C8.13 17 5 14.09 5 10.5C5 9.7 5.2 8.8 5.5 8C4 8.5 3 7 3 7Z"
        fill="#EF4444"
      />
      <circle cx="9.5" cy="10.5" r="1" fill="white" />
      <circle cx="14.5" cy="10.5" r="1" fill="white" />
      <path d="M10 13.5C10.5 14 11.2 14.3 12 14.3C12.8 14.3 13.5 14 14 13.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  )
}

function PgVectorIcon(props: SVGProps<SVGSVGElement>) {
  // PostgreSQL elephant with a vector/arrow accent
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.128 0a10.134 10.134 0 0 0-2.755.403C13.568.626 13 .933 13 .933c.419.045.788.12 1.134.224A11.08 11.08 0 0 1 16.09 2.28c.374.274.48.335.66.416.338.153.68.12 1.04-.204.366-.323.618-.73.618-1.39a2.33 2.33 0 0 0-.127-.735c-.05-.13-.1-.25-.153-.367z"
        fill="#336791"
      />
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 1 1 0 16A8 8 0 0 1 12 4z"
        fill="#336791"
      />
      <text x="6" y="15.5" fontSize="8" fontWeight="bold" fill="#336791" fontFamily="monospace">pg</text>
    </svg>
  )
}

type SkillIcon = ComponentType<{ size?: number; className?: string }> | ComponentType<SVGProps<SVGSVGElement>>

interface Skill {
  name: string
  icon: SkillIcon
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

export function Skills() {
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

  return (
    <section id="skills" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-12">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-base font-semibold text-foreground">{cat.category}</h3>
              <div className="space-y-3">
                {cat.skills.map((skill) => {
                  const IconComponent = skill.icon as ComponentType<{ size?: number; width?: number; height?: number; className?: string }>
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <IconComponent size={16} width={16} height={16} className="shrink-0" />
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
