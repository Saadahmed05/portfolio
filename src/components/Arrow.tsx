type Props = { direction?: "up" | "down" | "out"; className?: string };

const rotation = { up: -90, down: 90, out: -45 } as const;

/** A single, consistent arrow glyph used for every directional link. */
export function Arrow({ direction = "out", className = "" }: Props) {
  return (
    <svg
      aria-hidden
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`inline-block shrink-0 ${className}`}
      style={{ rotate: `${rotation[direction]}deg` }}
    >
      <path d="M1 6h9.5M6.5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
