"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      id="loading-screen"
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--night-950)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        zIndex: 99999,
        animation: hidden ? "fadeOut 0.5s ease forwards" : undefined,
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.75rem",
          color: "var(--accent)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        Initializing...
      </div>
      <div className="loading-bar">
        <div className="loading-bar-fill" />
      </div>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.1rem",
          color: "var(--text-secondary)",
        }}
      >
        Saad Ahmed
      </div>
    </div>
  );
}
