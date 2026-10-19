import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [["#projects", "Work"], ["#about", "About"], ["#experience", "Experience"]];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return <header className={`portfolio-navbar fixed top-0 right-0 left-0 z-50 ${scrolled ? "is-scrolled" : ""}`}>
    <nav className="section-wrap nav-inner" aria-label="Main navigation">
      <a href="#home" className="wordmark" onClick={() => setOpen(false)}>Alish T<span className="text-primary">.</span></a>
      <div className="desktop-links">
        {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        <a href="#contact" className="nav-contact">Let's talk <ArrowUpRight size={16}/></a>
      </div>
      <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </nav>
    {open && <div id="mobile-navigation" className="navbar-mobile-panel"><div className="section-wrap navbar-mobile-links">
      {[...links, ["#contact", "Let's talk"]].map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}{href === "#contact" && <ArrowUpRight size={16}/>}</a>)}
    </div></div>}
  </header>;
};
export default Navbar;
