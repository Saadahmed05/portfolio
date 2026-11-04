import { Arrow } from "@/components/Arrow";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="page pb-10 pt-4">
      <div className="flex flex-col gap-3 border-t border-rule pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with Next.js and Tailwind CSS.</p>
        <a href="#top" className="group inline-flex items-center gap-1.5 hover:text-ink">
          Back to top
          <Arrow direction="up" className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
