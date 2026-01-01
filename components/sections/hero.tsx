import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">
           <div className="flex items-center gap-6 mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
             <img
               src="/images/thailand.jpg"
               alt="Ahnaf Farhan Hossain"
               className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
             />
             <div className="text-left">
               <h1 className="text-2xl md:text-4xl text-foreground leading-tight mb-2 md:mb-4 font-medium tracking-tight">Hello, I am <br /> Ahnaf Farhan Hossain</h1>
                <p className="text-md md:text-xl text-muted-foreground font-medium">Full Stack Web Developer & Designer</p>
                <p className="text-base text-muted-foreground flex items-center gap-2 mt-2">
                  <MapPin size={16} />
                  Dhaka, Bangladesh
                </p>
             </div>
           </div>

           <p className="text-base text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 ease-out fill-mode-backwards">
             👋 Hello, I am Ahnaf from Bangladesh. I am 15, Student, and a Full Stack Developer. Currently, I am primarily focused on Frontend Development and UI/UX Designing, but I'd like to explore Backend Development in the future as well.
           </p>

          <div className="flex gap-4 flex-wrap justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 ease-out fill-mode-backwards">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 ease-out fill-mode-backwards">
            <a
              href="https://github.com/AhnafFarhanHossain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahnaf-farhan-hossain-715893305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/AhnafPresents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="mailto:ahnaffarhanhossain@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
