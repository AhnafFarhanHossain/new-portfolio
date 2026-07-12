import { useEffect, useRef } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaBehance, FaDribbble } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { ArrowRight, MapPin } from "lucide-react"
import { gsap } from "@/lib/gsap"

function SplitChars({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="hero-char inline-block"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </span>
  )
}

interface HeroProps {
  ready?: boolean
}

export function Hero({ ready = true }: HeroProps) {
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
    if (!ready) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Avatar: clip-path circle expand
      tl.fromTo(
        avatarRef.current,
        { clipPath: "circle(0% at 50% 50%)", scale: 0.7, opacity: 0 },
        { clipPath: "circle(55% at 50% 50%)", scale: 1, opacity: 1, duration: 0.7, ease: "expo.out" }
      )

      // Name: make h1 visible, then animate chars
      tl.set(nameRef.current, { opacity: 1 }, "<")
      const nameChars = nameRef.current?.querySelectorAll(".hero-char")
      if (nameChars?.length) {
        tl.fromTo(
          nameChars,
          (i) => ({
            y: gsap.utils.random(-50, 50),
            x: gsap.utils.random(-15, 15),
            opacity: 0,
            filter: "blur(6px)",
            rotate: gsap.utils.random(-12, 12),
          }),
          {
            y: 0, x: 0, opacity: 1, filter: "blur(0px)", rotate: 0,
            duration: 0.55,
            stagger: { each: 0.03, from: "random" },
            ease: "back.out(1.4)",
          },
          "-=0.35"
        )
      }

      // Title: clip-path wipe
      tl.fromTo(
        titleRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        { clipPath: "inset(0 0% 0 0)", opacity: 1, duration: 0.55 },
        "-=0.2"
      )

      // Location
      tl.fromTo(
        locationRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.3"
      )

      // Bio words
      const words = bioRef.current?.querySelectorAll(".bio-word")
      if (words?.length) {
        tl.fromTo(
          words,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.018 },
          "-=0.2"
        )
      }

      // Buttons elastic bounce
      tl.fromTo(
        buttonsRef.current?.children ?? [],
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.55, stagger: 0.1, ease: "elastic.out(1, 0.5)" },
        "-=0.15"
      )

      // Socials flip
      tl.fromTo(
        socialsRef.current?.children ?? [],
        { rotateX: 90, opacity: 0, y: 15 },
        { rotateX: 0, opacity: 1, y: 0, duration: 0.4, stagger: 0.055, ease: "back.out(1.7)" },
        "-=0.3"
      )
    }, sectionRef)

    const cleanups: (() => void)[] = []
    if (btn1Ref.current) cleanups.push(makeMagnetic(btn1Ref.current))
    if (btn2Ref.current) cleanups.push(makeMagnetic(btn2Ref.current))

    return () => {
      ctx.revert()
      cleanups.forEach((c) => c())
    }
  }, [ready])

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
            <p ref={titleRef} className="text-base md:text-xl text-muted-foreground font-medium" style={{ opacity: 0 }}>
              AI Engineer & Full Stack Developer
            </p>
            <p ref={locationRef} className="text-sm text-muted-foreground flex items-center justify-center gap-1.5" style={{ opacity: 0 }}>
              <MapPin size={14} />
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Bio */}
          <p ref={bioRef} className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
            <span className="bio-word inline-block" style={{ opacity: 0 }}>👋&nbsp;</span>
            {bioText.split(" ").map((word, i) => (
              <span key={i} className="bio-word inline-block" style={{ opacity: 0 }}>
                {word}&nbsp;
              </span>
            ))}
          </p>

          {/* CTA buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              ref={btn1Ref}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
              style={{ opacity: 0 }}
            >
              View My Work <ArrowRight size={15} />
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
          <div ref={socialsRef} className="flex gap-5 pt-2" style={{ perspective: "600px" }}>
            {[
              { href: "https://github.com/AhnafFarhanHossain", label: "GitHub", icon: <FaGithub size={20} /> },
              { href: "https://www.linkedin.com/in/ahnaf-farhan-hossain-715893305/", label: "LinkedIn", icon: <FaLinkedin size={20} /> },
              { href: "https://x.com/AhnafPresents", label: "X", icon: <FaXTwitter size={20} /> },
              { href: "https://www.behance.net/ahnaf-farhan/", label: "Behance", icon: <FaBehance size={20} /> },
              { href: "https://dribbble.com/AhnafAsADesigner", label: "Dribbble", icon: <FaDribbble size={20} /> },
              { href: "mailto:ahnaffarhanhossain@gmail.com", label: "Email", icon: <FaEnvelope size={20} /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={label}
                style={{ opacity: 0 }}
              >
                {icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
