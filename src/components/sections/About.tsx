import { Section } from "@/components/Section";
import { education } from "@/lib/content";

export function About() {
  return (
    <Section id="about" number="01" title="About" className="py-20 sm:py-28">
      <div className="grid grid-cols-9 gap-x-6 gap-y-14">
        <div data-reveal className="col-span-9 xl:col-span-6">
          <p className="text-[clamp(1.35rem,2.4vw,1.85rem)] leading-[1.3] tracking-[-0.018em]">
            I&apos;m studying Computer Science with a specialisation in AI and machine learning at Vidya Jyothi
            Institute of Technology in Hyderabad, and graduate in 2027.
          </p>
          <div className="mt-8 max-w-[62ch] space-y-5 leading-relaxed text-muted">
            <p>
              Most of what I know I learned by taking things all the way through: training a model and then working
              out how to evaluate it, wrapping an LLM in a tool someone could actually use, putting a small web app
              behind tests, containers and a Kubernetes deployment.
            </p>
            <p>
              In 2025 I interned at VISWAM.AI on the Telugu LLM initiative with Meta, IIIT Hyderabad and Swecha
              Telangana. My work was the data side of the model — cleaning, deduplicating and validating speech and
              text corpora before any of it reached training.
            </p>
            <p>
              I want to work on products that people use, somewhere I can move between models, backend services and
              the infrastructure that runs them.
            </p>
          </div>
        </div>

        <div data-reveal className="col-span-9 xl:col-span-3">
          <h3 className="label mb-4">Education</h3>
          <ul className="border-t border-rule">
            {education.map((e) => (
              <li key={e.school} className="border-b border-rule py-4 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-medium">{e.school}</span>
                  <span className="shrink-0 font-mono text-xs text-muted">{e.years}</span>
                </div>
                <p className="mt-1 text-muted">{e.detail}</p>
                <p className="mt-1 text-muted">
                  {e.place} · {e.result}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
