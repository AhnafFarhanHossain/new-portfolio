import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiFramer, SiNodedotjs, SiExpress, SiNestjs, SiMongodb, SiPostgresql, SiMysql, SiPrisma, SiSocketdotio, SiGit, SiCloudflare, SiVercel } from "react-icons/si"

export function Skills() {
  const skillCategories = [
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
      category: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress },
        { name: "NestJS", icon: SiNestjs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
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
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <IconComponent size={16} className="shrink-0" />
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
