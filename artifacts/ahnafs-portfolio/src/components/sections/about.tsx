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
              I'm an AI Engineer and Full Stack Developer from Bangladesh. I build AI-powered applications —
              from intelligent agents and RAG pipelines to production-grade full-stack products. I work with
              the modern AI stack (LangChain, LangGraph, Vercel AI SDK, Pinecone, pgvector) alongside a
              strong foundation in React, Next.js, and Node.js. I've shipped projects in startups and agencies,
              and I love turning complex ideas into fast, reliable software.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
