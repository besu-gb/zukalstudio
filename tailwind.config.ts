import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand colors pulled from Zukal Studio logo */
        brand: {
          green: "#A8E320",       /* lime green — primary accent */
          dark: "#141414",        /* near-black background */
          card: "#1C1C1C",        /* card surface */
          muted: "#2A2A2A",       /* subtle borders / dividers */
          text: "#E8E8E8",        /* main body text */
          dim: "#888888",         /* secondary / muted text */
        },
      },
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'Satoshi'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease forwards",
        "fade-in":   "fadeIn 0.5s ease forwards",
        "spin-slow": "spin 8s linear infinite",
        "pulse-green": "pulseGreen 2s ease-in-out infinite",
        "marquee":   "marquee 25s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulseGreen: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(168,227,32,0)" },
          "50%":      { boxShadow: "0 0 0 12px rgba(168,227,32,0.15)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
