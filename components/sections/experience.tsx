export function Experience() {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "caught you:3",
      period: "June 2025 - Present",
      location: "Dhaka",
      description:
        "Developing full-scale Web3 ecosystem solutions and participating in code reviews for a decentralized blockchain protocol.",
      highlights: [
        "Next JS",
        "TailwindCSS",
        "React",
        "ShadcnUI",
        "MongoDB",
        "API Integration",
      ],
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
  ];

  return (
    <section id="experience" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-12">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {exp.company === "caught you:3" ? (
                      <span className="blur-xs">caught you :3</span>
                    ) : (
                      exp.company
                    )}{" "}
                    • {exp.location}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-muted rounded text-foreground"
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
  );
}
