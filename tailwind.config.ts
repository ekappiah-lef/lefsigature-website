import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000d23",
          container: "#0b2343",
          on: "#ffffff",
          // Text on dark/blue backgrounds   lightened for readable contrast.
          "on-container": "#cdd8ec",
          // Original muted tone, kept for borders/subtle accents on dark.
          "border-muted": "#5f74a0",
        },
        secondary: {
          DEFAULT: "#0d5bbc",
          container: "#629afe",
          "on-container": "#00316d",
          "fixed-dim": "#adc7ff",
        },
        tertiary: {
          fixed: "#7efabf",
          container: "#002919",
          "on-container": "#009e6c",
          "on-fixed": "#002113",
        },
        surface: {
          DEFAULT: "#f7f9ff",
          dim: "#d7dadf",
          lowest: "#ffffff",
          low: "#f1f4f9",
          container: "#ebeef3",
          high: "#e5e8ee",
          highest: "#e0e3e8",
        },
        content: {
          DEFAULT: "#181c20",
          variant: "#44474e",
        },
        outline: {
          DEFAULT: "#74777f",
          variant: "#c4c6cf",
        },
        cta: "#009e6c",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-plex)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        "marquee-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee-x 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
