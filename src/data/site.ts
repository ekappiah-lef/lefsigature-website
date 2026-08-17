/**
 * Centralized company information sourced from lefsignature.com.
 * Update values here and they propagate across metadata, structured data,
 * the footer, and contact details.
 */
export const siteConfig = {
  name: "LEF Signature",
  legalName: "LEF Signature Limited",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://lefsignature.com",
  tagline: "Driving Progress Through Technology & Engineering Excellence",
  description:
    "LEF Signature Limited is a multidisciplinary engineering and technology company in Accra, Ghana, specialising in data centre management, electrical & civil engineering, construction, ICT consultancy, software development, and logistics.",
  logo: "/images/leflogo.png",
  email: "info@lefsignature.com",
  phone: "(+233) 256-111-811",
  address: {
    street: "North Celebrity Estate – Lashibi",
    city: "Accra",
    country: "Ghana",
  },
  geo: {
    latitude: 5.6441103,
    longitude: -0.042530,
  },
  officeHours: "Monday – Sunday: 24Hours / 7Days",
  socialLinks: {
    facebook: "https://www.facebook.com/lefsignatureltd",
    instagram: "https://www.instagram.com/lefsignatureltd",
    linkedin: "https://www.linkedin.com/lefsignatureltd",
  },
  certifications: [
    { code: "ISO 9001", label: "Quality Management" },
    { code: "ISO 14001", label: "Environmental Management" },
    { code: "ISO 45001", label: "Occupational Health & Safety" },
    { code: "GECA", label: "Certified" },
  ],
  // Served by the generated route at src/app/opengraph-image.tsx.
  ogImage: "/opengraph-image",
} as const;

export type SiteConfig = typeof siteConfig;
