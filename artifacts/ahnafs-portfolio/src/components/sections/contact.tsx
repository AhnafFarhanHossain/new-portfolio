import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { useScramble } from "@/hooks/use-scramble"

function SplitChars({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="contact-char inline-block"
          style={{ opacity: 0, display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </span>
  )
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const bigHeadRef = useRef<HTMLHeadingElement>(null)
  const emailRef = useRef<HTMLAnchorElement>(null)
  const locationRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const scrambled = useScramble("Contact", triggered, 22)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: "top 85%",
        onEnter: () => setTriggered(true),
      })

      // Big heading chars fly in from random directions
      const chars = sectionRef.current?.querySelectorAll(".contact-char")
      if (chars?.length) {
        gsap.fromTo(
          chars,
          (i) => ({
            x: gsap.utils.random(-120, 120),
            y: gsap.utils.random(-80, 80),
            opacity: 0,
            rotate: gsap.utils.random(-30, 30),
            scale: gsap.utils.random(0.3, 1.5),
          }),
          {
            x: 0,
            y: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            duration: 0.9,
            stagger: { each: 0.025, from: "random" },
            ease: "power4.out",
            scrollTrigger: {
              trigger: bigHeadRef.current,
              start: "top 80%",
            },
          }
        )
      }

      // Email: clip-path wipe
      gsap.fromTo(
        emailRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: emailRef.current,
            start: "top 85%",
          },
        }
      )

      // Location slide in
      gsap.fromTo(
        locationRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: locationRef.current,
            start: "top 88%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2
              ref={headingRef}
              className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4 font-mono"
            >
              {scrambled}
            </h2>
            <p className="text-xs text-muted-foreground">Let's work together</p>
          </div>

          <div className="md:col-span-2">
            <div className="mb-12">
              <h3
                ref={bigHeadRef}
                className="text-2xl font-bold text-foreground mb-4 overflow-hidden"
              >
                <SplitChars text="Let's create something amazing" />
              </h3>
              <p className="text-base text-muted-foreground">
                Whether you have a project in mind or just want to chat, feel free to reach out. I'm always
                open to new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Email</p>
                <a
                  ref={emailRef}
                  href="mailto:ahnaffarhanhossain@gmail.com"
                  className="text-lg text-foreground hover:text-primary transition-colors flex items-center gap-2"
                  style={{ opacity: 0 }}
                >
                  ahnaffarhanhossain@gmail.com
                  <ArrowRight size={16} />
                </a>
              </div>

              <div ref={locationRef} style={{ opacity: 0 }}>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Location</p>
                <p className="text-lg text-foreground">Dhaka, 1205 Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
