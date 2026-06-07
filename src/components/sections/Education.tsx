"use client";

import { GraduationCap, Calendar, MapPin, TrendingUp } from "lucide-react";

const education = [
  {
    institution: "Vidya Jyothi Institute of Technology",
    degree: "B.Tech in Computer Science Engineering",
    specialization: "AI & Machine Learning",
    score: "CGPA: 9.05 / 10",
    duration: "2023 – 2027",
    location: "Hyderabad, Telangana",
    current: true,
    color: "#00d4ff",
    highlights: [
      "Specializing in AI & ML — LLMs, NLP, Deep Learning",
      "Active in interdisciplinary projects across hardware and software",
      "Securing AI internships alongside coursework",
    ],
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate (MPC)",
    specialization: "Mathematics, Physics, Chemistry",
    score: "Score: 93%",
    duration: "2021 – 2023",
    location: "Kurnool, Andhra Pradesh",
    current: false,
    color: "#f5a623",
    highlights: [
      "Strong foundation in Mathematics and Physics",
      "93% aggregate — top academic performer",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "7rem 1.5rem",
        background: "rgba(10,15,30,0.4)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <div className="section-tag">Education</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Academic{" "}
            <span className="gradient-text-cool">foundation</span>
          </h2>
        </div>

        <div className="relative space-y-6" style={{ paddingLeft: "2.5rem" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "11px",
              top: "12px",
              bottom: "12px",
              width: "1px",
              background:
                "linear-gradient(180deg, var(--accent), rgba(0,212,255,0.1))",
            }}
          />

          {education.map((edu, i) => (
            <div key={edu.institution} className={`relative reveal reveal-delay-${i + 1}`}>
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-2rem",
                  top: "1.5rem",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: edu.color,
                  boxShadow: `0 0 12px ${edu.color}`,
                  border: `2px solid var(--night-950)`,
                  zIndex: 2,
                }}
              />

              <div className="glass-card" style={{ padding: "2rem" }}>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left */}
                  <div className="md:w-60 flex-shrink-0 space-y-2">
                    {edu.current && (
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          background: "rgba(0,255,136,0.08)",
                          border: "1px solid rgba(0,255,136,0.2)",
                          borderRadius: "999px",
                          padding: "0.2rem 0.65rem",
                          fontSize: "0.68rem",
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "#00ff88",
                        }}
                      >
                        <span
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: "#00ff88",
                          }}
                        />
                        Currently Enrolled
                      </div>
                    )}

                    <div
                      className="flex items-center gap-1.5"
                      style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                    >
                      <Calendar size={13} />
                      {edu.duration}
                    </div>
                    <div
                      className="flex items-center gap-1.5"
                      style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}
                    >
                      <MapPin size={13} />
                      {edu.location}
                    </div>
                    <div
                      className="flex items-center gap-1.5"
                      style={{ fontSize: "0.85rem", fontWeight: 700, color: edu.color, marginTop: "0.5rem" }}
                    >
                      <TrendingUp size={13} />
                      {edu.score}
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap size={20} style={{ color: edu.color }} />
                      <div>
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                          }}
                        >
                          {edu.institution}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.82rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {edu.degree} · {edu.specialization}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {edu.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2"
                          style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}
                        >
                          <span style={{ color: edu.color, flexShrink: 0 }}>›</span>
                          {h}
                        </li>
                      ))}
                    </ul>
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
