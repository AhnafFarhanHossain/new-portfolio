import { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

export function useScramble(text: string, trigger: boolean, speed = 30) {
  const [display, setDisplay] = useState(() => text.replace(/[^\s]/g, '_'))
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!trigger) return

    let iteration = 0

    const animate = () => {
      setDisplay(
        text
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' '
            if (idx < iteration) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      if (iteration < text.length) {
        iteration += 0.6
        frameRef.current = setTimeout(animate, speed)
      } else {
        setDisplay(text)
      }
    }

    animate()

    return () => {
      if (frameRef.current) clearTimeout(frameRef.current)
    }
  }, [trigger, text, speed])

  return display
}
