"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      id="back-to-top"
      className={visible ? "visible" : ""}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(13,21,38,0.9)",
        border: "1px solid var(--border)",
        borderRadius: "50%",
        color: "var(--accent)",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "all" : "none",
        transition: "all 0.3s ease",
        zIndex: 999,
        backdropFilter: "blur(12px)",
      }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
