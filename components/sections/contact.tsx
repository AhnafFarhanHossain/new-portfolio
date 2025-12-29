"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend service
    // For now, we'll just show a success message
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Contact</h2>
            <p className="text-xs text-muted-foreground">Let's work together</p>
          </div>

          <div className="md:col-span-2">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's create something amazing</h3>
              <p className="text-base text-muted-foreground">
                Whether you have a project in mind or just want to chat, feel free to reach out. I'm always open to new
                opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Email</p>
                <a
                  href="mailto:ahnaffarhanhossain@gmail.com"
                  className="text-lg text-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  ahnaffarhanhossain@gmail.com
                  <ArrowRight size={16} />
                </a>
              </div>


              {/* Location */}
              <div>
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
