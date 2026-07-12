import { FaGithub, FaLinkedin, FaEnvelope, FaBehance, FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 md:pt-20 md:pb-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">

          {/* Avatar */}
          <div>
            <img
              src="/images/thailand.jpg"
              alt="Ahnaf Farhan Hossain"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
            />
          </div>

          {/* Name + title + location */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl text-foreground leading-tight font-medium tracking-tight">
              Ahnaf Farhan Hossain
            </h1>
            <p className="text-base md:text-xl text-muted-foreground font-medium">
              AI Engineer & Full Stack Developer
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
              <MapPin size={14} />
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Bio */}
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
            👋 Hi, I'm Ahnaf! I'm an AI Engineer and Full Stack Developer from Bangladesh. I build AI-powered applications: intelligent agents, RAG pipelines, and production-grade products using LangChain, LangGraph, and the Vercel AI SDK.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
            >
              View My Work
              <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition-colors text-sm font-medium"
            >
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-5 pt-2">
            <a href="https://github.com/AhnafFarhanHossain" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ahnaf-farhan-hossain-715893305/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="https://x.com/AhnafPresents" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X">
              <FaXTwitter size={20} />
            </a>
            <a href="https://www.behance.net/ahnaf-farhan/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Behance">
              <FaBehance size={20} />
            </a>
            <a href="https://dribbble.com/AhnafAsADesigner" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Dribbble">
              <FaDribbble size={20} />
            </a>
            <a href="mailto:ahnaffarhanhossain@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <FaEnvelope size={20} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
