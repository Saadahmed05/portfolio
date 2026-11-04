import { Section } from "@/components/Section";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <Section id="skills" number="04" title="Skills" className="py-20 sm:py-28">
      <dl className="grid gap-x-6 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map(({ group, items }, i) => (
          <div
            key={group}
            data-reveal
            style={{ "--delay": `${(i % 3) * 60}ms` } as React.CSSProperties}
            className="border-t border-rule pb-10 pt-4"
          >
            <dt className="label mb-4">{group}</dt>
            <dd>
              <ul className="space-y-1.5 text-lg tracking-[-0.01em]">
                {items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
