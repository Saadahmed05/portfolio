"use client";

import {
  Github,
  ExternalLink,
  Zap,
  Bot,
  Cpu,
  Wifi,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    id: "cold-email",
    featured: true,
    title: "Cold Email Agent",
    subtitle: "AI Automation Tool",
    description:
      "End-to-end AI system that generates hyper-personalized cold emails at scale. Built with GPT-based NLP, 25+ industry-specific prompt templates, and full SMTP automation.",
    icon: Bot,
    github: "https://github.com/Saadahmed05/cold-email-agent",
    tech: ["Python", "GPT", "Supabase", "Vercel", "REST APIs", "SMTP", "Prompt Engineering"],
    highlights: [
      { label: "Reply Rate Lift", value: "30–40%" },
      { label: "Prompt Templates", value: "25+" },
      { label: "Deployment", value: "Vercel" },
    ],
    bullets: [
      "AI-powered cold email generation using GPT-based NLP models with industry-specific prompt engineering",
      "25+ carefully crafted prompt templates tuned for different verticals — SaaS, agency, consulting, recruiting",
      "End-to-end backend: lead ingestion → AI generation → REST API → SMTP delivery, fully automated",
      "Scalable cloud deployment on Vercel with Supabase as the backend database",
    ],
    gradient: "from-cyan-500/10 to-purple-500/10",
    accent: "#00d4ff",
  },
  {
    id: "smart-parking",
    featured: false,
    title: "Smart Car Parking System",
    subtitle: "IoT & Embedded Systems",
    description:
      "Real-time IoT parking management system using NodeMCU and ultrasonic sensors, achieving 95% vehicle detection accuracy across 10+ parking slots.",
    icon: Cpu,
    github: null,
    tech: ["NodeMCU", "IoT", "Ultrasonic Sensors", "Embedded C", "Agile"],
    highlights: [
      { label: "Detection Accuracy", value: "95%" },
      { label: "Slots Monitored", value: "10+" },
      { label: "Team Size", value: "4-member" },
    ],
    bullets: [
      "IoT-based parking management with real-time monitoring of 10+ parking slots",
      "Sensor-based vehicle detection achieving ~95% accuracy during testing",
      "4-member Agile team: hardware integration, frontend dev, system testing — delivered in 4 weeks",
    ],
    accent: "#f5a623",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 1.5rem" }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <div className="section-tag">Projects</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Things I&apos;ve{" "}
            <span className="gradient-text">built & shipped</span>
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`glass-card reveal reveal-delay-${i + 1}`}
              style={{
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                borderColor: project.featured
                  ? "rgba(0,212,255,0.25)"
                  : undefined,
              }}
            >
              {/* Featured label */}
              {project.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    background: "rgba(0,212,255,0.1)",
                    border: "1px solid rgba(0,212,255,0.3)",
                    borderRadius: "999px",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.65rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--accent)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  ★ Featured
                </div>
              )}

              {/* Glow bg */}
              {project.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "-60px",
                    right: "-60px",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "rgba(0,212,255,0.04)",
                    filter: "blur(60px)",
                    pointerEvents: "none",
                  }}
                />
              )}

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left side */}
                <div className="flex-1">
                  {/* Icon + title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: `rgba(${project.accent === "#00d4ff" ? "0,212,255" : "245,166,35"},0.1)`,
                        border: `1px solid rgba(${project.accent === "#00d4ff" ? "0,212,255" : "245,166,35"},0.2)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <project.icon
                        size={22}
                        style={{ color: project.accent }}
                      />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--text-muted)",
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-5">
                    {project.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2"
                        style={{
                          fontSize: "0.82rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        <ArrowRight
                          size={12}
                          style={{
                            color: project.accent,
                            flexShrink: 0,
                            marginTop: "0.3rem",
                          }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-3 mt-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ fontSize: "0.8rem", padding: "0.6rem 1.25rem" }}
                      >
                        <Github size={14} />
                        View Code
                      </a>
                    )}
                    {!project.github && (
                      <span
                        className="btn-secondary"
                        style={{
                          fontSize: "0.8rem",
                          padding: "0.6rem 1.25rem",
                          opacity: 0.5,
                          cursor: "default",
                        }}
                      >
                        <Github size={14} />
                        Private Repo
                      </span>
                    )}
                    <a
                      href="#contact"
                      className="btn-secondary"
                      style={{ fontSize: "0.8rem", padding: "0.6rem 1.25rem" }}
                    >
                      <ExternalLink size={14} />
                      Ask Me About This
                    </a>
                  </div>
                </div>

                {/* Metrics side panel */}
                <div className="lg:w-52 flex-shrink-0">
                  <div className="space-y-3">
                    {project.highlights.map((h) => (
                      <div
                        key={h.label}
                        style={{
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "10px",
                          padding: "1rem",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            color: project.accent,
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {h.value}
                        </div>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            color: "var(--text-muted)",
                            marginTop: "0.25rem",
                          }}
                        >
                          {h.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
