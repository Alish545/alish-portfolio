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
  return (
    <div ref={root} className="portfolio-motion min-h-screen overflow-x-hidden">
      <Navbar />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content">
        <Hero />
        <Project />
        <About />
        <Experience />
        {/* <Testimonials /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
