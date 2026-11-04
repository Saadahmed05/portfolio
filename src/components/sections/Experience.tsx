import { Section } from "@/components/Section";
import { internship as job } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience" number="02" title="Experience" className="py-20 sm:py-28">
      <article data-reveal className="grid grid-cols-9 gap-x-6 gap-y-6">
        <div className="col-span-9 sm:col-span-2">
          <p className="font-mono text-xs text-muted">{job.dates}</p>
          <p className="mt-1 font-mono text-xs text-muted">{job.place}</p>
        </div>

        <div className="col-span-9 sm:col-span-7">
          <h3 className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl">
            {job.role}, <span className="text-muted">{job.org}</span>
          </h3>
          <p className="mt-2 text-muted">{job.program}</p>

          <ul className="mt-8 max-w-[64ch] space-y-4 leading-relaxed">
            {job.points.map((p) => (
              <li key={p} className="grid grid-cols-[1.25rem_1fr]">
                <span aria-hidden className="mt-[0.7em] h-px w-2.5 bg-signal" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {/* The shape of the work: raw data in, training corpus out. */}
          <figure className="mt-12 border-t border-rule pt-5">
            <figcaption className="label mb-5">Where the work sat</figcaption>
            <ol className="grid grid-cols-2 gap-x-3 gap-y-5 text-sm sm:grid-cols-3 xl:grid-cols-6">
              {job.stages.map((s, i) => {
                const edge = i === 0 || i === job.stages.length - 1;
                return (
                  <li key={s} className={`border-t-2 pt-2.5 ${edge ? "border-rule text-muted" : "border-ink"}`}>
                    <span className="block font-mono text-[0.6875rem] text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`mt-1 block ${edge ? "" : "font-medium"}`}>{s}</span>
                  </li>
                );
              })}
            </ol>
          </figure>
        </div>
      </article>
    </Section>
  );
}
