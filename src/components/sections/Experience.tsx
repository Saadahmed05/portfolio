"use client";

import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experience = [
  {
    company: "VISWAM.AI",
    subtitle: "Meta × IIIT Hyderabad × Swecha Telangana",
    role: "AI/LLM Intern",
    duration: "May 2025 – June 2025",
    location: "Hyderabad, India",
    type: "AI Developer Intern",
    color: "#00d4ff",
    bullets: [
      "Contributed to large-scale Telugu LLM under a national open-source AI initiative focused on NLP and generative AI systems.",
      "Performed data cleaning, deduplication, annotation, and preprocessing — reducing noisy samples by 25–30% before training.",
      "Supported speech and text corpus creation pipelines, accelerating model training readiness by ~20% through structured preprocessing workflows.",
      "Collaborated within a cross-institutional AI research team, gaining exposure to LLM pipelines, ML workflows, and data engineering systems.",
    ],
    tech: ["LLMs", "NLP", "Data Engineering", "Python", "Speech Corpus", "Annotation"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "7rem 1.5rem",
        background: "rgba(10,15,30,0.4)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <div className="section-tag">Experience</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Where I&apos;ve{" "}
            <span className="gradient-text-cool">worked & contributed</span>
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((job, i) => (
            <div
              key={job.company}
              className={`glass-card reveal reveal-delay-${i + 1}`}
              style={{ padding: "2rem" }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left */}
                <div className="lg:w-64 flex-shrink-0 space-y-3">
                  {/* Company badge */}
                  <div
                    style={{
                      display: "inline-block",
                      background: `rgba(0,212,255,0.08)`,
                      border: `1px solid rgba(0,212,255,0.2)`,
                      borderRadius: "8px",
                      padding: "0.4rem 0.75rem",
                      fontSize: "0.7rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: job.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {job.type}
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      {job.company}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        marginTop: "0.2rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {job.subtitle}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div
                      className="flex items-center gap-1.5"
                      style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}
                    >
                      <Briefcase size={13} style={{ color: "var(--accent)" }} />
                      {job.role}
                    </div>
                    <div
                      className="flex items-center gap-1.5"
                      style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}
                    >
                      <Calendar size={13} />
                      {job.duration}
                    </div>
                    <div
                      className="flex items-center gap-1.5"
                      style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}
                    >
                      <MapPin size={13} />
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: "1px",
                    background: "var(--border)",
                    flexShrink: 0,
                    display: "none",
                  }}
                  className="lg:block"
                />

                {/* Right */}
                <div className="flex-1 space-y-5">
                  <ul className="space-y-3">
                    {job.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3"
                        style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.7 }}
                      >
                        <ChevronRight
                          size={14}
                          style={{
                            color: "var(--accent)",
                            flexShrink: 0,
                            marginTop: "0.3rem",
                          }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2 pt-2" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                    {job.tech.map((t) => (
                      <span key={t} className="skill-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open to roles */}
        <div
          className="mt-8 reveal"
          style={{
            textAlign: "center",
            padding: "2rem",
            background: "rgba(0,212,255,0.03)",
            border: "1px dashed rgba(0,212,255,0.2)",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#00ff88",
                boxShadow: "0 0 8px #00ff88",
              }}
            />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "#00ff88",
              }}
            >
              Available for Internships — 2025
            </span>
          </div>
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
            Open to AI/ML, Product, and Software Engineering roles at startups and product companies.
          </p>
        </div>
      </div>
    </section>
  );
}
