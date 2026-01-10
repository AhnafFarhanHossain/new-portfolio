"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsListRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

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
      year: 2025,
      image: "/images/projects/invenza.webp",
      category: "Dev",
    },
    {
      title: "PeakFit",
      description:
        "A modern fitness center website designed with clean layout and engaging animations. Showcasing premium facilities and services.",
      technologies: ["Figma", "UI/UX Design"],
      link: "https://www.figma.com/design/W2wufaQNLELhsmj2iCNkIm/Peak-Fit-Landing?node-id=1-2&t=dMnaZxNn8B6PvMQN-1",
      year: 2025,
      image: "/images/projects/peakfit.webp",
      category: "Design",
    },
    {
      title: "ColorTailor AI",
      description:
        "AI-powered color palette generator from keywords. Generates beautiful color schemes based on user input using advanced AI.",
      technologies: ["Next.js", "OpenRouter AI", "React"],
      link: "https://colortailorai.vercel.app",
      year: 2025,
      image: "/images/projects/colortailor.webp",
      category: "Dev",
    },
    {
      title: "Creatifi Studios",
      description:
        "An affordable global creative agency. Specializing in web development, branding, and comprehensive digital solutions for clients.",
      technologies: ["Figma", "UI/UX Design"],
      link: "https://www.figma.com/design/PvSTkFgwBrB1ZBXR0lWpDl/Creatifi-Studios?node-id=0-1&t=KNDgu4X8sdKCvKlZ-1",
      year: 2025,
      image: "/images/projects/creatifi.webp",
      category: "Design",
    },
    {
      title: "AudiobookEdit",
      description:
        "Audiobook Edit is a premier audiobook editing company trusted by authors around the world. I redesigned their existing website to improve user experience and increase conversions.",
      technologies: ["Figma", "UI/UX Design"],
      link: "",
      year: 2026,
      image: "/images/projects/audiobookedit.png",
      category: "Design",
    },
    {
      title: "Global Trade Online",
      description:
        "Built the frontend for Global Trade Online, a platform connecting buyers and sellers globally. Built the dashboard and the landing page. Go to /dashboard to view the dashboard pages.",
      technologies: ["NextJS", "TypeScript", "TailwindCSS", "React", "ShadcnUI"],
      link: "https://gto-frontend.vercel.app",
      year: 2026,
      image: "/images/projects/gto.webp",
      category: "Dev",
    }
  ];

  const filteredProjects =
    selectedTab === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === selectedTab);

  const tabItems = [
    { value: "all", label: "All" },
    { value: "design", label: "Design" },
    { value: "dev", label: "Dev" },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (hoveredProject === null) return;

      const x = e.clientX;
      const y = e.clientY;

      setMousePos({ x, y });

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          x: x - 150,
          y: y - 150,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredProject]);

  useEffect(() => {
    const updateIndicator = () => {
      const activeTrigger = triggerRefs.current[selectedTab];
      if (activeTrigger) {
        setIndicatorStyle({
          left: activeTrigger.offsetLeft,
          width: activeTrigger.offsetWidth,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    // slight delay to ensure layout is computed
    const timeout = setTimeout(updateIndicator, 50);
    return () => {
      window.removeEventListener("resize", updateIndicator);
      clearTimeout(timeout);
    };
  }, [selectedTab]);

  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-12">
          Projects
        </h2>

        <Tabs defaultValue="all" onValueChange={setSelectedTab} className="mb-8">
          <TabsList ref={tabsListRef} className="relative rounded-full bg-muted/50 p-1">
            <div
              className="absolute h-[calc(100%-8px)] top-1 rounded-full bg-primary transition-all duration-300 ease-out shadow-sm"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />
            {tabItems.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                ref={(el) => {
                  triggerRefs.current[tab.value] = el;
                }}
                className="relative z-10 cursor-pointer rounded-full bg-transparent px-6 transition-colors duration-300 text-muted-foreground data-[state=active]:bg-transparent data-[state=active]:text-white dark:data-[state=active]:text-black hover:text-foreground/80"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div key={selectedTab} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-in-out"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
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

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View Project <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
