import { Section } from "@/components/Section";
import { Arrow } from "@/components/Arrow";
import { CopyEmail } from "@/components/CopyEmail";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <Section id="contact" number="06" title="Contact" className="pb-16 pt-20 sm:pb-24 sm:pt-28">
      <div data-reveal>
        <p className="max-w-[22ch] text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.03em]">
          Hiring, building something, or curious about one of these projects?{" "}
          <span className="text-muted">Email is the quickest way to reach me.</span>
        </p>

        <div className="mt-12 border-y border-ink py-6 sm:py-8">
          <a
            href={`mailto:${site.email}`}
            className="group flex items-center justify-between gap-4 break-all text-[clamp(1.05rem,3.6vw,2.75rem)] font-medium tracking-[-0.03em] transition-colors hover:text-signal"
          >
            {site.email}
            <Arrow className="hidden h-6 w-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:block" />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <CopyEmail email={site.email} />
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5">
            <span className="link">LinkedIn</span>
            <Arrow className="text-muted group-hover:text-signal" />
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5">
            <span className="link">GitHub</span>
            <Arrow className="text-muted group-hover:text-signal" />
          </a>
          <span className="text-muted sm:ml-auto">Based in {site.location} · IST (UTC+5:30)</span>
        </div>
      </div>
    </Section>
  );
}
