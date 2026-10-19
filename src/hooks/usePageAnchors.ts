import { useLayoutEffect } from "react";

/** React mounts after the browser's initial fragment navigation. Retry once mounted. */
export function usePageAnchors() {
  useLayoutEffect(() => {
    let cancelled = false;
    let frame = 0;
    const initialHash = window.location.hash;
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      let target: HTMLElement | null;
      try { target = document.getElementById(decodeURIComponent(id)); } catch { return; }
      if (!target) return;
      const offset = document.querySelector(".portfolio-navbar")?.getBoundingClientRect().height ?? 0;
      window.scrollTo({ top: Math.max(0, window.scrollY + target.getBoundingClientRect().top - offset - 16), behavior: "instant" });
    };
    const alignInitial = () => {
      if (cancelled || window.location.hash !== initialHash) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scrollToHash);
    };
    const stop = () => { cancelled = true; cancelAnimationFrame(frame); };
    alignInitial();
    document.fonts.ready.then(alignInitial);
    window.addEventListener("load", alignInitial);
    window.addEventListener("hashchange", scrollToHash);
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("keydown", stop);
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("load", alignInitial);
      window.removeEventListener("hashchange", scrollToHash);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };
  }, []);
}
