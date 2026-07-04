import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaBehance, FaDribbble } from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Ahnaf Farhan</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer & Designer crafting digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-end gap-8">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">Navigation</p>
              <div className="space-y-2">
                <a
                  href="#about"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">© {currentYear} Ahnaf Farhan Hossain. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="https://github.com/AhnafFarhanHossain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahnaf-farhan-hossain-715893305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://x.com/AhnafPresents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://www.behance.net/ahnaf-farhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Behance"
            >
              <FaBehance size={18} />
            </a>
            <a
              href="https://dribbble.com/AhnafAsADesigner"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Dribbble"
            >
              <FaDribbble size={18} />
            </a>
            <a
              href="mailto:ahnaffarhanhossain@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
