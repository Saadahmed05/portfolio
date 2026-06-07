"use client";

import { Brain, Rocket, Code2, Target } from "lucide-react";

const story = [
  {
    icon: Code2,
    title: "The Spark",
    text: "It started with curiosity — not about how software works, but about what it can do. Growing up in Kurnool and later Hyderabad, I was drawn to the question of how machines learn from data and make decisions.",
  },
  {
    icon: Brain,
    title: "Going Deeper",
    text: "At VJIT Hyderabad, pursuing CS with an AI & ML specialization, I didn't just study machine learning — I shipped it. From building IoT systems to contributing to large-scale Telugu LLM pipelines at VISWAM.AI, I learned that real engineering is about finishing, not theorizing.",
  },
  {
    icon: Rocket,
    title: "Building Products",
    text: "My Cold Email Agent project taught me the full stack of AI product development: prompt engineering, backend architecture, API design, and cloud deployment. I'm not just training models — I'm building things people can actually use.",
  },
  {
    icon: Target,
    title: "What's Next",
    text: "I want to be at the intersection of product thinking and AI engineering — at a startup where moving fast matters. I bring 9.05 CGPA, real internship experience at a national AI initiative, and the bias to ship.",
  },
];

const stats = [
  { value: "9.05", label: "CGPA", sub: "out of 10" },
  { value: "25%", label: "Data Quality", sub: "improved at VISWAM" },
  { value: "30-40%", label: "Reply Rate ↑", sub: "Cold Email Agent" },
  { value: "95%", label: "Sensor Accuracy", sub: "IoT Parking System" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "7rem 1.5rem" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <div className="section-tag">About Me</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            A builder at heart,
            <br />
            <span className="gradient-text-cool">an engineer by training.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Story cards */}
          <div className="space-y-5">
            {story.map((item, i) => (
              <div
                key={item.title}
                className={`glass-card reveal reveal-delay-${i + 1}`}
                style={{ padding: "1.5rem" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(0,212,255,0.1)",
                      border: "1px solid rgba(0,212,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={18} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats + bio */}
          <div className="space-y-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 reveal">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card"
                  style={{ padding: "1.5rem", textAlign: "center" }}
                >
                  <div
                    className="gradient-text"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginTop: "0.25rem",
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      marginTop: "0.2rem",
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Profile callout */}
            <div
              className="glass-card reveal"
              style={{
                padding: "1.75rem",
                borderLeft: "3px solid var(--accent)",
                borderRadius: "12px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  fontStyle: "italic",
                }}
              >
                &ldquo;I believe the best engineers aren&apos;t defined by their
                algorithm knowledge — they&apos;re defined by what they
                ship and how fast they learn from it.&rdquo;
              </p>
              <div
                className="flex items-center gap-3 mt-4"
                style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1rem" }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--accent), #7c6fff)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#000",
                  }}
                >
                  SA
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    Saad Khazi Ahmed
                  </div>
                  <div
                    style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}
                  >
                    AI/ML Engineer · Hyderabad, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
