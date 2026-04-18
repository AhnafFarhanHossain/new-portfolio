export function Experience() {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Aribaa's Ventures Ltd.",
      logo: "https://github.com/user-attachments/assets/d663b00c-b9c5-4cab-90fc-e75f1986d1e1",
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
      logo: "https://github.com/user-attachments/assets/8f40d4cf-aae7-488d-9499-50d45ab66b3a",
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
                  <div className="mt-2 flex items-center gap-3">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="h-10 w-10 rounded-lg border border-border object-cover shrink-0"
                      loading="lazy"
                    />
                    <p className="text-sm text-muted-foreground">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
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
