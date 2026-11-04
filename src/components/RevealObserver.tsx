"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page.
 * - [data-reveal]  fades in once when it enters the viewport.
 * - [data-live]    gets .figure-live while on screen, so figure animations only run when visible.
 */
export function RevealObserver() {
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            reveal.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    const live = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) entry.target.classList.toggle("figure-live", entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));
    document.querySelectorAll("[data-live]").forEach((el) => live.observe(el));
    return () => {
      reveal.disconnect();
      live.disconnect();
    };
  }, []);

  return null;
}
