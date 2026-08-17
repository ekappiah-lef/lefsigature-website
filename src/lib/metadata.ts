import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageMetaOptions {
  title: string;
  description: string;
  /** Path beginning with "/" — used for canonical + OG url. */
  path: string;
}

/**
 * Builds consistent per-page metadata: unique title/description, canonical URL,
 * and Open Graph / Twitter sharing tags anchored to the site config.
 */
export function buildMetadata({ title, description, path }: PageMetaOptions): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;
  const ogImage = {
    url: siteConfig.ogImage,
    width: 1200,
    height: 630,
    alt: `${siteConfig.legalName} — ${siteConfig.tagline}`,
  };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: siteConfig.legalName,
      title: fullTitle,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
