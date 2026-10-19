import DownloadCV from "@/components/DownloadCV";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUp, ArrowUpRight, Mail, Send } from "lucide-react";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    setStatus(null);
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) throw new Error("Missing configuration");
      await emailjs.send(serviceId, templateId, {
        name: String(data.get("name") ?? "").trim(),
        email: String(data.get("email") ?? "").trim(),
        message: String(data.get("message") ?? "").trim(),
      }, publicKey);
      setStatus({ type: "success", message: "Message sent! Thank you for reaching out. I'll get back to you soon." });
      form.reset();
    } catch {
      setStatus({ type: "error", message: "Your message couldn't be sent. Please try again or email me directly." });
    } finally {
      setSending(false);
    }
  };
  return <section id="contact" className="section-wrap section-space">
    <div className="contact-panel">
      <div className="contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">04 / Let's connect</p>
          <h2>Have something in mind?<br/><em>Let's talk.</em></h2>
          <p className="muted">I'm open to frontend development roles, freelance projects, and opportunities to build useful web and mobile experiences.</p>
          <a className="contact-email" href="mailto:alish55tuladhar@gmail.com"><Mail size={20}/><span>alish55tuladhar@gmail.com</span><ArrowUpRight size={20}/></a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form" aria-busy={sending}>
          <div><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" placeholder="How should I address you?" required maxLength={100} disabled={sending}/></div>
          <div><label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} disabled={sending}/></div>
          <div><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" placeholder="Tell me about your project or opportunity…" required rows={5} maxLength={5000} disabled={sending}/></div>
          <button className="primary-link" type="submit" disabled={sending}>{sending ? "Sending…" : "Send message"}<Send size={16}/></button>
          <div aria-live="polite" aria-atomic="true">{status && <p className={`form-status ${status.type}`} role={status.type === "error" ? "alert" : "status"}>{status.message}</p>}</div>
        </form>
      </div>
      <div className="contact-bottom"><a href="tel:+9779841470027">+977 9841470027</a><span>Ason, Kathmandu, Nepal</span><DownloadCV/></div>
    </div>
    <footer className="portfolio-footer">
      <div className="footer-main">
        <div className="footer-identity">
          <a className="footer-name" href="#home">Alish Tuladhar<span className="text-primary">.</span></a>
          <p>Thoughtful interfaces, from web to mobile.</p>
          <span className="footer-location">Based in Kathmandu, Nepal</span>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <span className="eyebrow">Explore</span>
          <a href="#projects">Selected work</a><a href="#about">About me</a><a href="#experience">Experience</a>
        </nav>
        <div className="footer-connect">
          <span className="eyebrow">Find me online</span>
          <a href="https://github.com/Alish545" target="_blank" rel="noreferrer"><FaGithub size={16}/>GitHub · Personal<ArrowUpRight size={14}/></a>
          <a href="https://github.com/Alish500" target="_blank" rel="noreferrer"><FaGithub size={16}/>GitHub · Work<ArrowUpRight size={14}/></a>
          <a href="https://www.linkedin.com/in/alish-tuladhar-a6377831b" target="_blank" rel="noreferrer"><FaLinkedin size={16}/>LinkedIn<ArrowUpRight size={14}/></a>
          <a href="mailto:alish55tuladhar@gmail.com"><Mail size={16}/>Email me<ArrowUpRight size={14}/></a>
        </div>
      </div>
      <div className="footer-base"><p>© {new Date().getFullYear()} Alish Tuladhar. All rights reserved.</p><a className="footer-top" href="#home">Back to top <span><ArrowUp size={17}/></span></a></div>
    </footer>
  </section>;
};
export default Contact;
