"use client";

import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  Copy,
  Check,
  Send,
} from "lucide-react";

const contacts = [
  {
    label: "Email",
    value: "saadkhaziahmed2005@gmail.com",
    href: "mailto:saadkhaziahmed2005@gmail.com",
    Icon: Mail,
    color: "#00d4ff",
  },
  {
    label: "GitHub",
    value: "github.com/Saadahmed05",
    href: "https://github.com/Saadahmed05",
    Icon: Github,
    color: "#f5a623",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saadahmed05",
    href: "https://linkedin.com/in/saadahmed05",
    Icon: Linkedin,
    color: "#7c6fff",
  },
  {
    label: "Phone",
    value: "+91 7993366652",
    href: "tel:+917993366652",
    Icon: Phone,
    color: "#00ff88",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(value);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:saadkhaziahmed2005@gmail.com?subject=Portfolio Enquiry from ${formState.name}&body=${encodeURIComponent(formState.message)}%0A%0AFrom: ${formState.name} (${formState.email})`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" style={{ padding: "7rem 1.5rem" }}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-12">
          <div className="section-tag">Contact</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Let&apos;s build{" "}
            <span className="gradient-text">something together</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              marginTop: "0.75rem",
              maxWidth: "480px",
            }}
          >
            Open to AI/ML internships, product roles, and collaborative projects.
            Reach out — I respond fast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact cards */}
          <div className="space-y-4 reveal">
            {contacts.map((c) => (
              <div
                key={c.label}
                className="glass-card"
                style={{ padding: "1.25rem 1.5rem" }}
              >
                <div className="flex items-center justify-between">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group flex-1 min-w-0"
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: `${c.color}12`,
                        border: `1px solid ${c.color}22`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <c.Icon size={18} style={{ color: c.color }} />
                    </div>
                    <div className="min-w-0">
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--text-muted)",
                          fontFamily: "'JetBrains Mono', monospace",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {c.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--text-primary)",
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {c.value}
                      </div>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy(c.value)}
                    style={{
                      padding: "0.4rem",
                      color: copied === c.value ? "#00ff88" : "var(--text-muted)",
                      transition: "color 0.2s",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                    aria-label={`Copy ${c.label}`}
                  >
                    {copied === c.value ? (
                      <Check size={16} />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="glass-card reveal reveal-delay-2" style={{ padding: "2rem" }}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "1.5rem",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Send a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "'JetBrains Mono', monospace",
                    marginBottom: "0.5rem",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="Your name"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    color: "var(--text-primary)",
                    fontSize: "0.875rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(0,212,255,0.4)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-subtle)")
                  }
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "'JetBrains Mono', monospace",
                    marginBottom: "0.5rem",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    color: "var(--text-primary)",
                    fontSize: "0.875rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(0,212,255,0.4)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-subtle)")
                  }
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    fontFamily: "'JetBrains Mono', monospace",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Tell me about the role or project..."
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    color: "var(--text-primary)",
                    fontSize: "0.875rem",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.2s",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(0,212,255,0.4)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "var(--border-subtle)")
                  }
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                {sent ? (
                  <>
                    <Check size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
