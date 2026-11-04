import { nav, site } from "@/lib/content";
import { Arrow } from "@/components/Arrow";

const facts = [
  { k: "Now", v: "Final year, B.Tech CSE (AI & ML) at VJIT, Hyderabad" },
  { k: "Previously", v: "AI Developer Intern, VISWAM.AI — Telugu LLM initiative" },
  { k: "Works across", v: "NLP data, ML models, LLM tooling, backend, CI/CD" },
  { k: "Open to", v: "Internships and early roles in AI and backend engineering" },
];

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="page pb-8 pt-14 sm:pt-20 lg:pb-4 lg:pt-28">
      <p data-reveal className="label mb-8 flex items-center gap-2 sm:mb-10">
        <span aria-hidden className="inline-block h-1.5 w-1.5 bg-signal" />
        AI &amp; backend engineering · Hyderabad<span className="hidden sm:inline">, India</span>
      </p>

      <h1
        data-reveal
        style={{ "--delay": "60ms" } as React.CSSProperties}
        className="text-[clamp(3.25rem,11.5vw,10rem)] font-semibold leading-[0.86] tracking-tightest"
      >
        Saad Khazi
        <br />
        Ahmed
      </h1>

      <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12 sm:mt-16 lg:mt-20">
        <div
          data-reveal
          style={{ "--delay": "140ms" } as React.CSSProperties}
          className="col-span-12 lg:col-span-7"
        >
          <p className="max-w-[24ch] text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.12] tracking-[-0.025em]">
            I build AI systems <span className="font-serif italic">from the data up</span>, and the software
            that puts them to work.
          </p>
          <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-muted sm:text-[1.0625rem]">
            I spent the summer of 2025 on the data pipelines behind a Telugu large language model. My own projects
            go from a model that reads handwritten maths into LaTeX to a web app that tests and deploys itself to
            Kubernetes on every push.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex h-11 items-center gap-2 bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-signal"
            >
              Selected work
              <Arrow direction="down" className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center border border-ink/80 px-5 text-sm font-medium transition-colors hover:border-signal hover:text-signal"
            >
              Get in touch
            </a>
            <span className="flex items-center gap-5 text-sm sm:ml-2">
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="link">
                GitHub
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link">
                LinkedIn
              </a>
            </span>
          </div>
        </div>

        <dl
          data-reveal
          style={{ "--delay": "220ms" } as React.CSSProperties}
          className="col-span-12 self-end border-t border-rule text-sm lg:col-span-4 lg:col-start-9"
        >
          {facts.map(({ k, v }) => (
            <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-rule py-3">
              <dt className="text-muted">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Table of contents doubles as the hero's lower edge. */}
      <nav aria-label="On this page" data-reveal className="mt-20 hidden lg:block">
        <ol className="grid grid-cols-6 border-t border-ink">
          {nav.map(({ id, label }, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="group flex items-baseline gap-2 pt-3 text-sm text-muted transition-colors hover:text-ink"
              >
                <span className="font-mono text-[0.6875rem] transition-colors group-hover:text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
