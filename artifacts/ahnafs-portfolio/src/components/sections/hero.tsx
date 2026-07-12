import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaBehance, FaDribbble } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { ArrowRight, MapPin } from "lucide-react"
import { gsap } from "@/lib/gsap"

// Splits text into individual character <span> elements
function SplitChars({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </span>
  )
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const locationRef = useRef<HTMLParagraphElement>(null)
  const bioRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const socialsRef = useRef<HTMLDivElement>(null)
  const btn1Ref = useRef<HTMLAnchorElement>(null)
  const btn2Ref = useRef<HTMLAnchorElement>(null)

  // Magnetic button effect
  const makeMagnetic = (el: HTMLElement) => {
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)
      gsap.to(el, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: "power2.out" })
    }
    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" })
    }
    el.addEventListener("mousemove", handleMove)
    el.addEventListener("mouseleave", handleLeave)
    return () => {
      el.removeEventListener("mousemove", handleMove)
      el.removeEventListener("mouseleave", handleLeave)
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Avatar: clip-path circle expand from tiny dot
      tl.fromTo(
        avatarRef.current,
        { clipPath: "circle(0% at 50% 50%)", scale: 0.6, opacity: 0 },
        { clipPath: "circle(55% at 50% 50%)", scale: 1, opacity: 1, duration: 1, ease: "expo.out" }
      )

      // Name chars: stagger from random Y + blur
      const nameChars = nameRef.current?.querySelectorAll("span.inline-block")
      if (nameChars?.length) {
        tl.fromTo(
          nameChars,
          (i) => ({
            y: gsap.utils.random(-60, 60),
            x: gsap.utils.random(-20, 20),
            opacity: 0,
            filter: "blur(8px)",
            rotate: gsap.utils.random(-15, 15),
          }),
          {
            y: 0,
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            rotate: 0,
            duration: 0.7,
            stagger: { each: 0.04, from: "random" },
            ease: "back.out(1.4)",
          },
          "-=0.5"
        )
      }

      // Title: clip-path wipe from left
      tl.fromTo(
        titleRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.8 },
        "-=0.3"
      )

      // Location: fade + slide
      tl.fromTo(
        locationRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4"
      )

      // Bio: word by word reveal
      const words = bioRef.current?.querySelectorAll(".bio-word")
      if (words?.length) {
        tl.fromTo(
          words,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.025 },
          "-=0.3"
        )
      }

      // Buttons: elastic scale bounce
      tl.fromTo(
        buttonsRef.current?.children ?? [],
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, stagger: 0.12, ease: "elastic.out(1, 0.5)" },
        "-=0.2"
      )

      // Socials: flip in from Y
      tl.fromTo(
        socialsRef.current?.children ?? [],
        { rotateX: 90, opacity: 0, y: 20 },
        { rotateX: 0, opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "back.out(1.7)" },
        "-=0.4"
      )
    }, sectionRef)

    // Magnetic buttons
    const cleanups: (() => void)[] = []
    if (btn1Ref.current) cleanups.push(makeMagnetic(btn1Ref.current))
    if (btn2Ref.current) cleanups.push(makeMagnetic(btn2Ref.current))

    return () => {
      ctx.revert()
      cleanups.forEach((c) => c())
    }
  }, [])

  const bioText = "Hi, I'm Ahnaf! I'm an AI Engineer and Full Stack Developer from Bangladesh. I build AI-powered applications: intelligent agents, RAG pipelines, and production-grade products using LangChain, LangGraph, and the Vercel AI SDK."

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center pt-24 pb-16 md:pt-20 md:pb-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">

          {/* Avatar */}
          <div ref={avatarRef} style={{ opacity: 0 }}>
            <img
              src="/images/thailand.jpg"
              alt="Ahnaf Farhan Hossain"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
            />
          </div>

          {/* Name + title + location */}
          <div className="space-y-2">
            <h1
              ref={nameRef}
              className="text-3xl md:text-4xl text-foreground leading-tight font-medium tracking-tight"
              style={{ opacity: 0 }}
            >
              <SplitChars text="Ahnaf Farhan Hossain" />
            </h1>
            <p
              ref={titleRef}
              className="text-base md:text-xl text-muted-foreground font-medium"
              style={{ opacity: 0 }}
            >
              AI Engineer & Full Stack Developer
            </p>
            <p
              ref={locationRef}
              className="text-sm text-muted-foreground flex items-center justify-center gap-1.5"
              style={{ opacity: 0 }}
            >
              <MapPin size={14} />
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Bio — each word wrapped for stagger */}
          <p
            ref={bioRef}
            className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl"
          >
            {/* emoji separate so it doesn't split weird */}
            <span className="bio-word inline-block" style={{ opacity: 0 }}>👋&nbsp;</span>
            {bioText.split(" ").map((word, i) => (
              <span key={i} className="bio-word inline-block" style={{ opacity: 0 }}>
                {word}&nbsp;
              </span>
            ))}
          </p>

          {/* CTA buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <a
              ref={btn1Ref}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
              style={{ opacity: 0 }}
            >
              View My Work
              <ArrowRight size={15} />
            </a>
            <a
              ref={btn2Ref}
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition-colors text-sm font-medium"
              style={{ opacity: 0 }}
            >
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div
            ref={socialsRef}
            className="flex gap-5 pt-2"
            style={{ perspective: "600px" }}
          >
            <a href="https://github.com/AhnafFarhanHossain" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub" style={{ opacity: 0 }}>
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ahnaf-farhan-hossain-715893305/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn" style={{ opacity: 0 }}>
              <FaLinkedin size={20} />
            </a>
            <a href="https://x.com/AhnafPresents" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X" style={{ opacity: 0 }}>
              <FaXTwitter size={20} />
            </a>
            <a href="https://www.behance.net/ahnaf-farhan/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Behance" style={{ opacity: 0 }}>
              <FaBehance size={20} />
            </a>
            <a href="https://dribbble.com/AhnafAsADesigner" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Dribbble" style={{ opacity: 0 }}>
              <FaDribbble size={20} />
            </a>
            <a href="mailto:ahnaffarhanhossain@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email" style={{ opacity: 0 }}>
              <FaEnvelope size={20} />
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
