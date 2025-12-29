"use client"

 import { useState } from "react"
 import Link from "next/link"
 import Image from "next/image"
 import { Menu, X, Sun, Moon } from "lucide-react"
 import { useTheme } from "next-themes"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 md:bottom-6 md:top-auto z-50 bg-background/70 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-8">

           {/* Desktop Navigation */}
           <div className="hidden md:flex gap-6">
             {navItems.map((item) => (
               <a
                 key={item.href}
                 href={item.href}
                 className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
               >
                 {item.label}
               </a>
             ))}
           </div>

           {/* Theme Toggle */}
           <button
             onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
             className="p-1.5 hover:bg-muted rounded-lg transition-colors"
             aria-label="Toggle theme"
           >
             {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
           </button>

           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsOpen(!isOpen)}
             className="md:hidden p-1.5 hover:bg-muted rounded-lg transition-colors"
           >
             {isOpen ? <X size={18} /> : <Menu size={18} />}
           </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border/50 rounded-lg md:hidden shadow-lg">
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer removed as navbar is now at top on mobile */}
      {/* <div className="h-20" /> */}
    </>
  )
}
