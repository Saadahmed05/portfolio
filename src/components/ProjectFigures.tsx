/*
 * One diagram per project. Each one shows how that system is shaped,
 * built from the project's own code or description. None of them is a screenshot or a recorded result.
 */

const Box = ({ children, strong = false }: { children: React.ReactNode; strong?: boolean }) => (
  <span
    className={`inline-flex items-center whitespace-nowrap px-2.5 py-1.5 text-xs ${
      strong ? "border border-ink/80 font-medium" : "border border-rule text-muted"
    }`}
  >
    {children}
  </span>
);

const Wire = () => <span aria-hidden className="h-px w-3 shrink-0 bg-rule sm:w-5" />;

/* ---------- A. HMER ---------- */
const tokens = ["\\frac", "{", "x", "^", "{", "2", "}", "+", "1", "}", "{", "\\sqrt", "{", "y", "}", "}"];

export function HmerFigure() {
  return (
    <div className="flex h-full flex-col justify-between gap-10">
      <div className="flex flex-wrap items-center gap-y-2">
        <span className="inline-flex items-center border border-dashed border-muted/60 px-2.5 py-1.5 text-xs text-muted">
          Handwritten image
        </span>
        <Wire />
        <Box>Preprocess</Box>
        <Wire />
        <Box strong>Visual encoder</Box>
        <Wire />
        <Box strong>Attention decoder</Box>
      </div>

      <div>
        <p className="label mb-3">Decoded token by token</p>
        <ol className="flex flex-wrap gap-1 font-mono text-[0.8125rem]">
          {tokens.map((t, i) => (
            <li
              key={i}
              className="token border border-rule px-1.5 py-0.5"
              style={{ "--i": i } as React.CSSProperties}
            >
              {t}
            </li>
          ))}
        </ol>
      </div>

      <div className="flex items-end justify-between gap-6 border-t border-rule pt-5">
        <p className="label">Typeset result</p>
        {/* x²+1 over √y, set with HTML so it stays crisp and themeable. */}
        <span
          role="img"
          aria-label="Fraction: x squared plus one, over the square root of y"
          className="inline-flex flex-col items-center font-serif text-4xl italic leading-none"
        >
          <span className="px-2 pb-1.5">
            x<sup className="text-xl not-italic">2</sup>
            <span className="not-italic"> + 1</span>
          </span>
          <span className="h-px w-full bg-ink" />
          <span className="flex items-start pt-1.5">
            <span className="not-italic">√</span>
            <span className="border-t border-ink px-1">y</span>
          </span>
        </span>
      </div>
    </div>
  );
}

/* ---------- B. Cold email agent ---------- */
// Input prompts and output sections are taken directly from the project's main.py.
const inputs = [
  { k: "Sender", v: "Who are you? e.g. a SaaS copywriter" },
  { k: "Offer", v: "What do you offer?" },
  { k: "Target", v: "Who are you targeting?" },
  { k: "Tone", v: "friendly · casual · corporate" },
];
const outputs = [
  { k: "Subject", lines: 1 },
  { k: "Body", note: "under 120 words", lines: 3 },
  { k: "CTA", lines: 1 },
  { k: "Follow-up", note: "next day", lines: 2 },
];

export function ColdEmailFigure() {
  return (
    <div className="grid h-full gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      <dl className="text-sm">
        {inputs.map(({ k, v }) => (
          <div key={k} className="border-b border-rule py-2.5 first:border-t">
            <dt className="label">{k}</dt>
            <dd className="mt-1 font-serif text-lg italic leading-snug">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="flex items-center gap-3 sm:flex-col">
        <span aria-hidden className="h-px w-6 bg-rule sm:h-6 sm:w-px" />
        <span className="border border-ink/80 px-2.5 py-1.5 text-center font-mono text-[0.6875rem] leading-snug">
          Mistral 7B
          <br />
          via OpenRouter
        </span>
        <span aria-hidden className="h-px w-6 bg-rule sm:h-6 sm:w-px" />
      </div>

      <div className="border border-ink/80 bg-paper p-4">
        {outputs.map(({ k, note, lines }) => (
          <div key={k} className="py-2">
            <p className="flex items-baseline justify-between font-mono text-[0.6875rem] uppercase tracking-[0.1em]">
              {k}
              {note && <span className="normal-case tracking-normal text-muted">{note}</span>}
            </p>
            <div aria-hidden className="mt-2 space-y-1.5">
              {Array.from({ length: lines }).map((_, i) => (
                <span
                  key={i}
                  className="block h-1.5 bg-rule"
                  style={{ width: i === lines - 1 && lines > 1 ? "62%" : "100%" }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- C. Smart parking ---------- */
// Schematic only: a fixed pattern of occupied and free bays.
const bays = [1, 0, 1, 1, 0, 0, 1, 0, 1, 1];

export function ParkingFigure() {
  const free = bays.filter((b) => b === 0).length;
  return (
    <div className="flex h-full flex-col justify-between gap-8">
      <div className="flex flex-wrap items-center gap-y-2">
        <Box>Slot sensor</Box>
        <Wire />
        <Box strong>NodeMCU</Box>
        <Wire />
        <Box strong>Live slot status</Box>
      </div>

      <div>
        <div
          role="img"
          aria-label={`Schematic of ten parking bays, ${free} shown free`}
          className="grid grid-cols-5 border-l border-t border-ink/80"
        >
          {bays.map((occupied, i) => (
            <div
              key={i}
              className="relative flex aspect-[4/5] items-end border-b border-r border-ink/80 p-2"
            >
              <span className="font-mono text-[0.625rem] text-muted">P{String(i + 1).padStart(2, "0")}</span>
              {occupied ? (
                <span aria-hidden className="absolute inset-x-[30%] bottom-[30%] top-[16%] bg-ink/70" />
              ) : (
                <span aria-hidden className="absolute right-2 top-2 h-1.5 w-1.5 bg-signal" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-5 text-xs text-muted">
          <span className="flex items-center gap-2">
            <span aria-hidden className="h-2.5 w-2 bg-ink/70" /> Occupied
          </span>
          <span className="flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 bg-signal" /> Free
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- D. CI/CD ---------- */
const stages = ["Push", "Test", "Build image", "Smoke test", "Push to registry", "Rolling deploy"];

export function PipelineFigure() {
  return (
    <div className="flex h-full flex-col justify-between gap-10">
      <ol className="grid grid-cols-3 gap-x-2 gap-y-6 sm:grid-cols-6">
        {stages.map((s, i) => (
          <li key={s} className="relative">
            <span
              aria-hidden
              className="stage-dot relative z-10 block h-2.5 w-2.5 bg-rule"
              style={{ "--i": i } as React.CSSProperties}
            />
            {i < stages.length - 1 && (
              <span aria-hidden className="absolute left-2.5 right-0 top-[4.5px] hidden h-px bg-rule sm:block" />
            )}
            <span className="mt-3 block pr-2 text-xs leading-snug">{s}</span>
          </li>
        ))}
      </ol>

      <div className="grid gap-px border border-rule bg-rule text-xs sm:grid-cols-2">
        <div className="bg-paper p-4">
          <p className="label">GitHub Actions</p>
          <p className="mt-2 leading-relaxed">Deploys to a temporary kind cluster inside the runner, then checks /health.</p>
        </div>
        <div className="bg-paper p-4">
          <p className="label">Jenkins</p>
          <p className="mt-2 leading-relaxed">Same stages, defined as code, deploying to the local Kubernetes cluster.</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-1.5" aria-hidden>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className={`h-5 w-5 ${i < 3 ? "bg-ink" : "border border-dashed border-muted/60"}`} />
          ))}
        </div>
        <p className="text-xs text-muted">Pods scale 2 → 6 at 70% CPU · rollback on failed rollout</p>
      </div>
    </div>
  );
}
