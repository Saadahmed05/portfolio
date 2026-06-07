"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(3, 7, 18, 0.9)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.08)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.2)",
            }}
          >
            <Code2 size={16} style={{ color: "var(--accent)" }} />
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.85rem",
              color: "var(--text-primary)",
            }}
          >
            saad<span style={{ color: "var(--accent)" }}>.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href ? "active" : ""}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Saadahmed05"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: "0.5rem 1.1rem", fontSize: "0.8rem" }}
          >
            GitHub
          </a>
          <a
            href="mailto:saadkhaziahmed2005@gmail.com"
            className="btn-primary"
            style={{ padding: "0.5rem 1.1rem", fontSize: "0.8rem" }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2"
          style={{
            background: "rgba(3,7,18,0.98)",
            borderTop: "1px solid rgba(0,212,255,0.08)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 nav-link"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 mt-4">
            <a
              href="https://github.com/Saadahmed05"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ flex: 1, justifyContent: "center" }}
            >
              GitHub
            </a>
            <a
              href="mailto:saadkhaziahmed2005@gmail.com"
              className="btn-primary"
              style={{ flex: 1, justifyContent: "center" }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
