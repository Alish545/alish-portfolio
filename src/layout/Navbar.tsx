import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

type NavbarProps = { caseStudy?: boolean; nextProject?: number };


const Navbar = ({ caseStudy = false, nextProject = 1 }: NavbarProps) => {
  const home = caseStudy ? window.location.pathname : "";
  const links = caseStudy
    ? [[`${home}#projects`, "All projects"], ["#case-overview", "Overview"], [`${home}#contact`, "Contact"]]
    : [["#projects", "Work"], ["#about", "About"], ["#experience", "Experience"]];
  const actionHref = caseStudy ? `?project=${nextProject}` : "#contact";
  const actionLabel = caseStudy ? "Next project" : "Let's talk";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <header className={`portfolio-navbar fixed top-0 right-0 left-0 z-50 ${scrolled ? "is-scrolled" : ""}`}>
    <nav className="section-wrap nav-inner" aria-label="Main navigation">
      <a href={`${home}#home`} className="wordmark" onClick={() => setOpen(false)}>Alish T<span className="text-primary">.</span></a>
      <div className="desktop-links">
        {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        <a href={actionHref} className="nav-contact">{actionLabel} <ArrowUpRight size={16}/></a>
      </div>
      <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </nav>
    {open && <div id="mobile-navigation" className="navbar-mobile-panel"><div className="section-wrap navbar-mobile-links">
      {[...links, [actionHref, actionLabel]].map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}{href === actionHref && <ArrowUpRight size={16}/>}</a>)}
    </div></div>}
  </header>;
};
export default Navbar;
