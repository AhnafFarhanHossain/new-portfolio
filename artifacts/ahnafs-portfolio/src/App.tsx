import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Loader } from "@/components/loader";
import { useLenis } from "@/hooks/use-lenis";

function PortfolioPage() {
  const [loaderDone, setLoaderDone] = useState(false);
  useLenis();

  return (
    <>
      <Loader onComplete={() => setLoaderDone(true)} />
      <Navigation />
      <main className="min-h-screen bg-background">
        <Hero ready={loaderDone} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <PortfolioPage />
    </ThemeProvider>
  );
}

export default App;
