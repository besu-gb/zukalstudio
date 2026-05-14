"use client";

import { useEffect, useRef } from "react";

/*
  CursorGlow – renders a soft lime-green radial gradient that follows
  the user's cursor, giving the site a premium interactive feel.
  It is purely decorative and has pointer-events: none so it never
  interferes with clicks.
*/
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glow = glowRef.current;
      if (!glow) return;

      // Move the glow to follow the cursor
      glow.style.left = `${e.clientX}px`;
      glow.style.top  = `${e.clientY}px`;

      // Fade in on first move (starts hidden)
      glow.style.opacity = "1";
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position:        "fixed",
        pointerEvents:   "none",
        zIndex:          9999,
        width:           "500px",
        height:          "500px",
        borderRadius:    "50%",
        transform:       "translate(-50%, -50%)",
        background:      "radial-gradient(circle, rgba(168,227,32,0.06) 0%, transparent 70%)",
        opacity:         "0",
        transition:      "opacity 0.3s ease",
        top:             "0",
        left:            "0",
        willChange:      "left, top",
      }}
    />
  );
}
