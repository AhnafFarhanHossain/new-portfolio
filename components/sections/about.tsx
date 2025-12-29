export function About() {
  return (
    <section id="about" className="py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-8">About</h2>
          </div>

           <div className="md:col-span-2 space-y-6">
              <p className="text-base text-muted-foreground leading-relaxed">
                I'm a full-stack web developer and a UI/UX designer. I work as a UI/UX Designer at Creatifi Studios, delivering enterprise-grade websites and designs to clients from around the world. I have experience in startups and agencies. I also love to build open-source SaaS applications and MVPs.
              </p>
           </div>
        </div>
      </div>
    </section>
  )
}
