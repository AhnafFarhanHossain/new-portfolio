import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

interface LoaderProps {
  onComplete: () => void
}

export function Loader({ onComplete }: LoaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const barFillRef = useRef<HTMLDivElement>(null)
  const barTrackRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete()
      },
    })

    // Entrance: fade in the loader elements
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    )
    tl.fromTo(
      barTrackRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.4, ease: "power2.out" },
      "-=0.2"
    )
    tl.fromTo(
      labelRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 },
      "-=0.2"
    )

    // Counter: 0 → 100
    const counter = { val: 0 }
    tl.to(
      counter,
      {
        val: 100,
        duration: 1.8,
        ease: "power1.inOut",
        onUpdate() {
          if (counterRef.current) {
            counterRef.current.textContent = String(Math.floor(counter.val)).padStart(2, "0")
          }
          // Drive the bar fill
          if (barFillRef.current) {
            barFillRef.current.style.width = `${counter.val}%`
          }
        },
        onComplete() {
          if (counterRef.current) counterRef.current.textContent = "100"
          if (barFillRef.current) barFillRef.current.style.width = "100%"
        },
      },
      "-=0.1"
    )

    // Brief pause at 100
    tl.to({}, { duration: 0.35 })

    // Exit: slide the whole overlay upward
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.9,
      ease: "expo.inOut",
    })
  }, [onComplete])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-foreground flex flex-col items-center justify-center"
      style={{ willChange: "transform" }}
    >
      {/* Name */}
      <div
        ref={nameRef}
        className="text-background text-5xl md:text-7xl font-bold tracking-widest uppercase select-none mb-12"
        style={{ opacity: 0, fontFamily: "inherit", letterSpacing: "0.18em" }}
      >
        Ahnaf
      </div>

      {/* Counter + bar */}
      <div className="w-64 md:w-96 space-y-3">
        <div className="flex items-center justify-between">
          <span
            ref={labelRef}
            className="text-xs text-background/40 uppercase tracking-widest font-mono"
            style={{ opacity: 0 }}
          >
            Loading
          </span>
          <span
            ref={counterRef}
            className="text-xs text-background/70 font-mono tabular-nums"
          >
            00
          </span>
        </div>

        {/* Progress track */}
        <div
          ref={barTrackRef}
          className="relative h-[2px] bg-background/15 w-full overflow-hidden"
          style={{ transformOrigin: "left", scaleX: 0, opacity: 0 }}
        >
          {/* Fill */}
          <div
            ref={barFillRef}
            className="absolute inset-y-0 left-0 bg-background transition-none"
            style={{ width: "0%" }}
          />
          {/* Shimmer head */}
          <div
            className="absolute inset-y-0 right-0 w-8 bg-gradient-to-r from-transparent to-background/60"
            style={{ mixBlendMode: "screen" }}
          />
        </div>
      </div>
    </div>
  )
}
