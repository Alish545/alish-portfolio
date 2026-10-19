import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePortfolioMotion(root: RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const entrance = gsap.timeline({ defaults: { duration: 0.75, ease: "power3.out" } });
        entrance.from("header nav", { y: -16, opacity: 0 })
          .from(".hero-main-copy > *", { y: 24, opacity: 0, stagger: 0.11 }, "-=0.5")
          .from(".hero-portrait", { y: 24, opacity: 0, scale: 0.97 }, "-=0.8")
          .from(".hero-toolkit, .hero-scroll", { opacity: 0, y: 12, stagger: 0.12 }, "-=0.3");

        gsap.utils.toArray<HTMLElement>(".section-heading, .project-row, .about-copy, .skill-row, .career-row, .contact-intro, .contact-form, .contact-bottom, footer").forEach((element) => {
          gsap.from(element, {
            y: 28, opacity: 0, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: element, start: "top 92%", once: true },
          });
        });
        gsap.to(".hero-portrait .animate-float", { y: -7, duration: 2.4, stagger: 0.4, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".hero-scroll svg", { y: 5, duration: 1, repeat: -1, yoyo: true, ease: "sine.inOut" });
        gsap.to(".skills-marquee", { xPercent: -50, duration: 28, repeat: -1, ease: "none" });
      }, root);
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      document.fonts.ready.then(() => { if (root.current) ScrollTrigger.refresh(); });
      return () => {
        window.removeEventListener("load", refresh);
        context.revert();
      };
    }, root);
    return () => media.revert();
  }, [root]);
}
