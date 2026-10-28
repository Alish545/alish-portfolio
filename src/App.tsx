import Experiments from "@/section/Experiments";
import { usePageAnchors } from "@/hooks/usePageAnchors";
import CaseStudy from "@/section/CaseStudy";
import { useRef } from "react";
import { usePortfolioMotion } from "@/hooks/usePortfolioMotion";
import Navbar from "@/layout/Navbar";
import Hero from "@/section/Hero";
import About from "@/section/About";
import Project from "./section/Project";
import Experience from "@/section/Experience";
// import Testimonials from "@/section/Testimonials";
import Contact from "@/section/Contact";

function App() {
  const root = useRef<HTMLDivElement>(null);
  usePortfolioMotion(root);
  usePageAnchors();
  const projectId = new URLSearchParams(window.location.search).get("project");
  if (projectId && /^[1-6]$/.test(projectId))
    return <CaseStudy index={Number(projectId) - 1} />;
  return (
    <div ref={root} className="portfolio-motion min-h-screen overflow-x-hidden">
      <Navbar />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <main id="main-content">
        <Hero />
        <Project />
        <Experiments />
        <About />
        <Experience />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
