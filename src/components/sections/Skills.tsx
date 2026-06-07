"use client";

const skillGroups = [
  {
    label: "Languages",
    color: "#00d4ff",
    skills: ["Python", "Java", "C", "SQL", "JavaScript"],
  },
  {
    label: "AI / ML",
    color: "#7c6fff",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLMs",
      "Prompt Engineering",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
    ],
  },
  {
    label: "Backend & APIs",
    color: "#f5a623",
    skills: [
      "Flask",
      "Django",
      "REST APIs",
      "API Integration",
      "SMTP Automation",
      "Backend Development",
    ],
  },
  {
    label: "Tools & Platforms",
    color: "#00ff88",
    skills: ["Git", "GitHub", "VS Code", "Cursor", "Supabase", "Vercel"],
  },
  {
    label: "Core CS",
    color: "#ff6b9d",
    skills: [
      "DSA",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "System Design",
    ],
  },
  {
    label: "Practices",
    color: "#4fc3f7",
    skills: [
      "Agile Development",
      "Debugging",
      "Cloud Deployment",
      "Full-Stack Development",
      "Technical Documentation",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "7rem 1.5rem",
        background: "rgba(10,15,30,0.4)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <div className="section-tag">Technical Skills</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Tools of the{" "}
            <span className="gradient-text-cool">trade</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className={`glass-card reveal reveal-delay-${(i % 4) + 1}`}
              style={{ padding: "1.5rem" }}
            >
              {/* Group label */}
              <div className="flex items-center gap-2 mb-4">
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: group.color,
                    boxShadow: `0 0 8px ${group.color}`,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: group.color,
                  }}
                >
                  {group.label}
                </span>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: "inline-flex",
                      padding: "0.3rem 0.7rem",
                      background: `${group.color}0d`,
                      border: `1px solid ${group.color}22`,
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "var(--text-secondary)",
                      whiteSpace: "nowrap",
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = `${group.color}1a`;
                      el.style.borderColor = `${group.color}55`;
                      el.style.color = group.color;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = `${group.color}0d`;
                      el.style.borderColor = `${group.color}22`;
                      el.style.color = "var(--text-secondary)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
