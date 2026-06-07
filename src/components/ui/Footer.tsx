import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,212,255,0.08)",
        background: "rgba(10,15,30,0.8)",
        padding: "2rem 1.5rem",
      }}
    >
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
          }}
        >
          © 2025 Saad Khazi Ahmed — Built with Next.js & Framer Motion
        </p>
        <div className="flex items-center gap-5">
          {[
            { href: "https://github.com/Saadahmed05", Icon: Github },
            {
              href: "https://linkedin.com/in/saadahmed05",
              Icon: Linkedin,
            },
            { href: "mailto:saadkhaziahmed2005@gmail.com", Icon: Mail },
          ].map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--text-muted)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--text-muted)")
              }
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
