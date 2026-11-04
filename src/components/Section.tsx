type Props = {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  /** Wide sections put the running head above the content instead of beside it. */
  wide?: boolean;
  aside?: React.ReactNode;
};

/** Editorial section frame: a hairline rule, a numbered running head, then content on a 12-column grid. */
export function Section({ id, number, title, children, className = "", wide = false, aside }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`page ${className}`}>
      <div className="border-t border-rule pt-5 sm:pt-6">
        <div className="grid grid-cols-12 gap-x-6">
          <div
            className={`col-span-12 mb-10 sm:mb-14 ${
              wide ? "flex items-baseline justify-between gap-6" : "lg:col-span-3 lg:mb-0"
            }`}
          >
            <h2 id={`${id}-title`} data-reveal className="flex items-baseline gap-3 text-sm font-medium">
              <span className="font-mono text-xs text-signal">{number}</span>
              <span>{title}</span>
            </h2>
            {aside}
          </div>
          <div className={`col-span-12 ${wide ? "" : "lg:col-span-9"}`}>{children}</div>
        </div>
      </div>
    </section>
  );
}
