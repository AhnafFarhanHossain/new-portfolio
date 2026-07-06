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
              I'm Ahnaf — a developer from Dhaka who got genuinely obsessed with AI after realising you could
              wire a language model into a real product and have it actually do useful things. These days I spend
              most of my time building AI-powered apps: agents that reason through tasks, pipelines that search
              over your own data, that kind of thing.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              My stack is mostly Next.js, Node.js, and whatever the right database is for the job — but the
              interesting part is usually LangChain, LangGraph, or the Vercel AI SDK stitching it all together.
              I've worked in startups and agencies, so I'm used to shipping fast and figuring things out as I go.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Outside of work I enjoy following the AI research space (it moves fast), tinkering with side
              projects that probably won't go anywhere, and occasionally touching grass.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
