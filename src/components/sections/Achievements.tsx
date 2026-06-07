"use client";

import { Award, Star } from "lucide-react";

const certifications = [
  { name: "Cisco C Essentials", org: "Cisco", color: "#00d4ff" },
  { name: "Python Essentials", org: "Cisco", color: "#00d4ff" },
  { name: "Data Analytics Essentials", org: "Cisco", color: "#7c6fff" },
  { name: "Industrial Networking Essentials", org: "Cisco", color: "#00d4ff" },
  { name: "ML using Python", org: "Infosys", color: "#f5a623" },
  { name: "Red Hat Linux Fundamentals", org: "Red Hat", color: "#ff6b6b" },
];

const accomplishments = [
  {
    icon: Star,
    title: "National AI Initiative Contributor",
    desc: "Core contributor to VISWAM.AI — a national open-source Telugu LLM project backed by Meta, IIIT Hyderabad, and Swecha Telangana.",
    color: "#00d4ff",
  },
  {
    icon: Star,
    title: "Interdisciplinary Project Lead",
    desc: "Led cross-functional academic projects spanning software engineering, backend systems, hardware integration, and cloud deployment.",
    color: "#7c6fff",
  },
  {
    icon: Star,
    title: "Top Academic Performer",
    desc: "Maintaining 9.05 CGPA in B.Tech CS (AI & ML) at VJIT Hyderabad, graduating in 2027.",
    color: "#f5a623",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: "7rem 1.5rem" }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <div className="section-tag">Achievements</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Certifications &{" "}
            <span className="gradient-text">accomplishments</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="reveal">
            <h3
              style={{
                fontSize: "0.85rem",
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "1rem",
              }}
            >
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="glass-card"
                  style={{ padding: "1rem 1.25rem" }}
                >
                  <div className="flex items-start gap-3">
                    <Award
                      size={18}
                      style={{ color: cert.color, flexShrink: 0, marginTop: "2px" }}
                    />
                    <div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          lineHeight: 1.4,
                        }}
                      >
                        {cert.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: cert.color,
                          fontFamily: "'JetBrains Mono', monospace",
                          marginTop: "0.2rem",
                        }}
                      >
                        {cert.org}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accomplishments */}
          <div className="space-y-4 reveal reveal-delay-2">
            <h3
              style={{
                fontSize: "0.85rem",
                fontFamily: "'JetBrains Mono', monospace",
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "1rem",
              }}
            >
              Key Accomplishments
            </h3>
            {accomplishments.map((item) => (
              <div
                key={item.title}
                className="glass-card"
                style={{
                  padding: "1.25rem 1.5rem",
                  borderLeft: `3px solid ${item.color}`,
                  borderRadius: "12px",
                }}
              >
                <div className="flex items-start gap-3">
                  <item.icon
                    size={16}
                    style={{ color: item.color, flexShrink: 0, marginTop: "3px" }}
                  />
                  <div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
