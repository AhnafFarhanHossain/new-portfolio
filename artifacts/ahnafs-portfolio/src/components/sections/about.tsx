import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { useScramble } from "@/hooks/use-scramble"
import { useState } from "react"

// Wraps each word in overflow-hidden span for mask reveal
function MaskedWords({ text }: { text: string }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden leading-tight mr-[0.25em]">
          <span className="about-word inline-block translate-y-full">{word}</span>
        </span>
      ))}
    </>
  )
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [triggered, setTriggered] = useState(false)
  const scrambled = useScramble("About", triggered, 25)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading scramble trigger
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: "top 85%",
        onEnter: () => setTriggered(true),
      })

      // Word-by-word masked reveal for each paragraph
      const paragraphs = sectionRef.current?.querySelectorAll(".about-para")
      paragraphs?.forEach((para) => {
        const words = para.querySelectorAll(".about-word")
        gsap.fromTo(
          words,
          { y: "100%" },
          {
            y: "0%",
            duration: 0.7,
            stagger: 0.018,
            ease: "power3.out",
            scrollTrigger: {
              trigger: para,
              start: "top 88%",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2
              ref={headingRef}
              className="text-sm font-semibold text-foreground uppercase tracking-wide mb-8 font-mono"
            >
              {scrambled}
            </h2>
          </div>

          <div className="md:col-span-2 space-y-6">
            <p className="about-para text-base text-muted-foreground leading-relaxed">
              <MaskedWords text="I'm Ahnaf, a developer from Dhaka who got genuinely obsessed with AI after realising you could wire a language model into a real product and have it actually do useful things. These days I spend most of my time building AI-powered apps: agents that reason through tasks, pipelines that search over your own data, that kind of thing." />
            </p>
            <p className="about-para text-base text-muted-foreground leading-relaxed">
              <MaskedWords text="My stack is mostly Next.js, Node.js, and whatever the right database is for the job, but the interesting part is usually LangChain, LangGraph, or the Vercel AI SDK stitching it all together. I've worked in startups and agencies, so I'm used to shipping fast and figuring things out as I go." />
            </p>
            <p className="about-para text-base text-muted-foreground leading-relaxed">
              <MaskedWords text="Outside of work I enjoy following the AI research space (it moves fast), tinkering with side projects that probably won't go anywhere, and occasionally touching grass." />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
