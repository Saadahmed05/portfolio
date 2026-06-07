"use client";

import { useEffect, useRef } from "react";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
      alpha: number;
    }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.alpha})`;
        ctx.fill();
      });
      // Draw connecting lines
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "4rem" }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: "600px",
          height: "600px",
          background: "rgba(0,212,255,0.15)",
          top: "-200px",
          right: "-100px",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: "400px",
          height: "400px",
          background: "rgba(124,111,255,0.12)",
          bottom: "-100px",
          left: "-100px",
        }}
      />

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 mb-8"
            style={{
              background: "rgba(0,212,255,0.06)",
              border: "1px solid rgba(0,212,255,0.2)",
              borderRadius: "999px",
              padding: "0.4rem 1rem",
              fontSize: "0.78rem",
              color: "var(--accent)",
              fontFamily: "'JetBrains Mono', monospace",
              animation: "fadeUp 0.6s ease both",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#00ff88",
                boxShadow: "0 0 8px #00ff88",
                flexShrink: 0,
              }}
            />
            <Sparkles size={12} />
            Open to AI Startup & PM Internships · 2025
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              marginBottom: "1.5rem",
              animation: "fadeUp 0.7s ease both 0.1s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Building{" "}
            <span className="gradient-text">AI-Powered</span>
            <br />
            Products That{" "}
            <span
              style={{
                color: "var(--text-secondary)",
                fontStyle: "italic",
              }}
            >
              Ship.
            </span>
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: "520px",
              marginBottom: "2.5rem",
              animation: "fadeUp 0.7s ease both 0.2s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            CS (AI & ML) student at VJIT Hyderabad — ex AI/LLM Intern at
            VISWAM.AI. I build end-to-end systems: from LLM pipelines to
            production deployments.
          </p>

          {/* Floating chips */}
          <div
            className="flex flex-wrap gap-2 mb-10"
            style={{
              animation: "fadeUp 0.7s ease both 0.3s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {["LLM Engineer", "NLP", "Python", "Product Thinker", "Open Source"].map(
              (tag) => (
                <span key={tag} className="skill-chip">
                  {tag}
                </span>
              )
            )}
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-3"
            style={{
              animation: "fadeUp 0.7s ease both 0.4s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <a href="#projects" className="btn-primary">
              <Sparkles size={15} />
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary"
            >
              <Download size={15} />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={15} />
              Contact Me
            </a>
          </div>

          {/* Social row */}
          <div
            className="flex items-center gap-5 mt-10"
            style={{
              animation: "fadeUp 0.7s ease both 0.5s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <a
              href="https://github.com/Saadahmed05"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-muted)")
              }
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/saadahmed05"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-muted)")
              }
            >
              <Linkedin size={20} />
            </a>
            <span
              style={{
                width: "1px",
                height: "20px",
                background: "var(--border-subtle)",
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
              }}
            >
              CGPA 9.05 · VJIT Hyderabad
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2"
        style={{
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--text-muted)",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
          }}
        >
          scroll
        </span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
