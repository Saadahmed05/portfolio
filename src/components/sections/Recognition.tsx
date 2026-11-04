import { Section } from "@/components/Section";
import { certifications, hackathons } from "@/lib/content";

export function Recognition() {
  return (
    <Section id="recognition" number="05" title="Recognition" className="py-20 sm:py-28">
      <div className="grid gap-x-6 gap-y-14 xl:grid-cols-2">
        <div data-reveal>
          <h3 className="label mb-4">Hackathons</h3>
          <ul className="border-t border-rule">
            {hackathons.map((h) => (
              <li key={h.name} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-rule py-4">
                <span className={`text-sm ${h.result === "Finalist" ? "text-signal" : "text-muted"}`}>
                  {h.result}
                </span>
                <span>
                  <span className="font-medium">{h.name}</span>
                  <span className="block text-sm text-muted">{h.host}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal>
          <h3 className="label mb-4">Certifications</h3>
          <ul className="border-t border-rule">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex items-baseline justify-between gap-6 border-b border-rule py-3 text-sm"
              >
                <span>{c.name}</span>
                <span className="shrink-0 text-muted">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
