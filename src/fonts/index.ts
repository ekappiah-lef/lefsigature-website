import localFont from "next/font/local";

/**
 * Self-hosted fonts (Inter, IBM Plex Sans, IBM Plex Mono) loaded via
 * next/font/local. Self-hosting avoids a build-time/runtime dependency on
 * Google Fonts, eliminates external font requests, and prevents layout shift.
 * Font files live alongside this module in `src/fonts`.
 */
export const inter = localFont({
  src: [
    { path: "./inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./inter-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const plexSans = localFont({
  src: [
    { path: "./ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./ibm-plex-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plex",
  display: "swap",
});

export const plexMono = localFont({
  src: [
    { path: "./ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});
