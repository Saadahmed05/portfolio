"use client";

import { useEffect, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (insecure context, permissions); fall back to the mail client.
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" onClick={copy} className="inline-flex items-center gap-2 font-medium">
      <span className="link">{copied ? "Copied" : "Copy email"}</span>
      <span
        aria-hidden
        className={`h-1.5 w-1.5 transition-colors duration-300 ${copied ? "bg-signal" : "bg-rule"}`}
      />
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
}
