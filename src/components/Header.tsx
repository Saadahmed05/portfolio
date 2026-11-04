"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { Arrow } from "@/components/Arrow";

/** Downloads the resume PDF; sits at the right end of the header on every screen size. */
function ResumeLink() {
  return (
    <a
      href={site.resume}
      download
      className="group inline-flex h-8 items-center gap-1.5 border border-ink/80 px-3 text-sm font-medium transition-colors hover:border-signal hover:bg-signal hover:text-paper"
    >
      Résumé
      <Arrow direction="down" className="transition-transform duration-300 group-hover:translate-y-0.5" />
      <span className="sr-only">(PDF download)</span>
    </a>
  );
}

export function Header() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track which section is under the header so the nav reflects where you are.
  useEffect(() => {
    const sections = nav
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (window.scrollY < window.innerHeight * 0.4) setActive("");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Mobile menu: lock scroll and close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-b border-rule bg-paper/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="page flex h-14 items-center justify-between">
        <a href="#top" className="text-sm font-medium tracking-tight" onClick={() => setOpen(false)}>
          {site.name}
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            {nav.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`relative py-1 transition-colors hover:text-ink ${
                    active === id ? "text-ink" : "text-muted"
                  }`}
                >
                  {label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-0.5 left-0 h-px bg-signal transition-[width] duration-300 ${
                      active === id ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            ))}
            <li>
              <ResumeLink />
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ResumeLink />
        <button
          type="button"
          className="-mr-2 px-2 py-2 font-mono text-xs uppercase tracking-[0.12em]"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="page h-[calc(100dvh-3.5rem)] overflow-y-auto bg-paper pb-10 pt-6 md:hidden"
        >
          <ol className="divide-y divide-rule border-y border-rule">
            {nav.map(({ id, label }, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    // Close first so the scroll lock is released, then jump.
                    e.preventDefault();
                    setOpen(false);
                    requestAnimationFrame(() => {
                      document.getElementById(id)?.scrollIntoView();
                      history.replaceState(null, "", `#${id}`);
                    });
                  }}
                  className="flex items-baseline gap-4 py-4 text-3xl font-medium tracking-tight"
                >
                  <span className="font-mono text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex gap-6 text-sm">
            <a className="link-static" href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="link-static" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="link-static" href={`mailto:${site.email}`}>
              Email
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
