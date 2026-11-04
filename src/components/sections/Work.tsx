import { Section } from "@/components/Section";
import { Arrow } from "@/components/Arrow";
import { ColdEmailFigure, HmerFigure, ParkingFigure, PipelineFigure } from "@/components/ProjectFigures";
import { current, moreWork, projects, site, type Project } from "@/lib/content";

const figures: Record<Project["slug"], { el: React.ReactNode; caption: string }> = {
  hmer: { el: <HmerFigure />, caption: "Illustrative input → output. Not a recorded model run." },
  "cold-email": { el: <ColdEmailFigure />, caption: "Inputs and output format, as defined in the code." },
  parking: { el: <ParkingFigure />, caption: "Schematic of the system, not live data." },
  cicd: { el: <PipelineFigure />, caption: "Pipeline stages, from the repository's workflow files." },
};

export function Work() {
  return (
    <Section
      id="work"
      number="03"
      title="Selected work"
      wide
      className="py-20 sm:py-28"
      aside={<p className="hidden text-sm text-muted sm:block">Now building, then four projects A–D</p>}
    >
      <NowBuilding />

      <div className="mt-24 space-y-24 sm:mt-32 sm:space-y-32">
        {projects.map((p, i) => (
          <ProjectSpread key={p.slug} project={p} flip={i % 2 === 1} />
        ))}
      </div>

      <MoreWork />
    </Section>
  );
}

function ProjectSpread({ project: p, flip }: { project: Project; flip: boolean }) {
  const figure = figures[p.slug];
  return (
    <article aria-labelledby={`${p.slug}-title`} className="grid grid-cols-12 gap-x-6 gap-y-10">
      {/* Title block */}
      <header data-reveal className="col-span-12 grid grid-cols-12 gap-x-6 gap-y-5 border-t border-ink pt-5">
        <span className="col-span-2 font-mono text-sm text-signal sm:col-span-1">{p.index}</span>
        <div className="col-span-10 sm:col-span-11 lg:col-span-7">
          <h3 id={`${p.slug}-title`} className="text-[clamp(2rem,4.6vw,3.75rem)] font-medium leading-[0.98] tracking-[-0.04em]">
            {p.title}
          </h3>
          <p className="mt-3 text-muted">{p.kicker}</p>
        </div>
        <div className="col-span-12 flex flex-wrap items-start gap-x-6 gap-y-2 text-sm sm:col-start-2 lg:col-span-4 lg:col-start-9 lg:justify-end">
          <span className="text-muted">{p.context}</span>
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-medium"
            >
              <span className="link">{l.label}</span>
              <Arrow className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="sr-only">for {p.title} on GitHub (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </header>

      {/* Figure */}
      <figure
        data-reveal
        className={`col-span-12 lg:sticky lg:top-24 lg:col-span-7 lg:self-start ${
          flip ? "lg:order-2 lg:col-start-6" : ""
        }`}
      >
        <div data-live className="bg-raised p-5 sm:p-8">
          {figure.el}
        </div>
        <figcaption className="mt-3 font-mono text-[0.6875rem] text-muted">{figure.caption}</figcaption>
      </figure>

      {/* Text */}
      <div
        data-reveal
        className={`col-span-12 space-y-8 text-[0.9375rem] leading-relaxed sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 lg:col-span-5 lg:block lg:space-y-8 ${
          flip ? "lg:order-1 lg:col-start-1 lg:pr-6" : "lg:pl-6"
        }`}
      >
        <div>
          <h4 className="label mb-2">Problem</h4>
          <p className="text-muted">{p.problem}</p>
        </div>
        <div>
          <h4 className="label mb-2">What I built</h4>
          <p>{p.built}</p>
          <ul className="mt-4 space-y-2">
            {p.details.map((d) => (
              <li key={d} className="grid grid-cols-[1rem_1fr] text-muted">
                <span aria-hidden className="mt-[0.7em] h-px w-2 bg-signal" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-2 sm:mt-8 lg:mt-0">
          <h4 className="label mb-2">{p.decision.label}</h4>
          <p className="border-l border-signal pl-4">{p.decision.text}</p>
        </div>
        <p className="font-mono text-xs leading-relaxed text-muted sm:col-span-2 sm:mt-8 lg:mt-0">
          {p.stack.join("  /  ")}
        </p>
      </div>
    </article>
  );
}

function NowBuilding() {
  const c = current;
  return (
    <article aria-labelledby="now-title" data-reveal className="border border-ink p-5 sm:p-8 lg:p-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="label flex items-center gap-2 !text-ink">
          <span aria-hidden className="h-1.5 w-1.5 bg-signal" />
          Now building · in progress
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <span className="text-muted">
            Open source · building it with{" "}
            <a href={c.partnerUrl} target="_blank" rel="noopener noreferrer" className="link-static text-ink">
              @{c.partner}
            </a>
          </span>
          {c.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 font-medium">
              <span className="link">{l.label}</span>
              <Arrow className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span className="sr-only">for {c.title} on GitHub (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 lg:col-span-5">
          <h3 id="now-title" className="text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[0.95] tracking-[-0.045em]">
            {c.title}
          </h3>
          <p className="mt-3 text-muted">{c.kicker}</p>
          <p className="mt-6 text-[0.9375rem] leading-relaxed">{c.summary}</p>
          <p className="mt-4 border-l border-signal pl-4 text-[0.9375rem] leading-relaxed text-muted">
            {c.contribution}
          </p>
          <p className="mt-6 font-mono text-xs leading-relaxed text-muted">{c.stack.join("  /  ")}</p>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <h4 className="label mb-3">{c.status}</h4>
          <ol className="border-t border-rule">
            {c.spikes.map((s, i) => (
              <li key={s.q} className="grid grid-cols-[2rem_1fr] gap-x-3 border-b border-rule py-4 text-sm">
                <span className="font-mono text-xs text-signal">{String.fromCharCode(65 + i)}</span>
                <div>
                  <p className="font-medium leading-snug">{s.q}</p>
                  <p className="mt-1.5 leading-relaxed text-muted">{s.a}</p>
                  <p className="mt-2 font-mono text-[0.6875rem] uppercase tracking-[0.1em]">{s.verdict}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-3 font-mono text-[0.6875rem] text-muted">
            First results on one laptop, as recorded in the repository.
          </p>
        </div>
      </div>
    </article>
  );
}

function MoreWork() {
  return (
    <div data-reveal className="mt-28 grid grid-cols-12 gap-x-6 sm:mt-36">
      <div className="col-span-12 mb-6 flex items-baseline justify-between lg:col-span-3">
        <h3 className="text-sm font-medium">Also on GitHub</h3>
      </div>
      <ul className="col-span-12 border-t border-rule lg:col-span-9">
        {moreWork.map((w) => (
          <li
            key={w.title}
            className="grid grid-cols-12 gap-x-6 gap-y-1 border-b border-rule py-5 text-sm"
          >
            <span className="col-span-12 font-medium sm:col-span-3">{w.title}</span>
            <span className="col-span-12 text-muted sm:col-span-6">{w.text}</span>
            <span className="col-span-12 mt-2 flex gap-4 sm:col-span-3 sm:mt-0 sm:justify-end">
              {w.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1"
                >
                  <span className="link">{l.label}</span>
                  <Arrow className="text-muted transition-colors group-hover:text-signal" />
                  <span className="sr-only">: {w.title} (opens in a new tab)</span>
                </a>
              ))}
            </span>
          </li>
        ))}
        <li className="pt-5 text-sm">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-muted hover:text-ink">
            <span className="link">Everything else at github.com/Saadahmed05</span>
            <Arrow />
          </a>
        </li>
      </ul>
    </div>
  );
}
