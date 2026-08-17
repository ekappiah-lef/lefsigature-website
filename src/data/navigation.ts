import type { FooterColumn, NavLink } from "@/types";

/** Primary navigation, matching the supplied design's header order. */
export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
];

/** Footer link columns. */
export const footerColumns: FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { label: "Electrical Engineering", href: "/services#electrical-engineering" },
      { label: "Data Center & Managed Services", href: "/services#data-center" },
      { label: "Software Development", href: "/services#software-development" },
      { label: "Building & Road Construction", href: "/services#construction" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Projects", href: "/projects" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Inquiries",
    links: [
      { label: "Get a Quote", href: "/contact" },
      { label: "Become a Subcontractor", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export const legalLinks: NavLink[] = [{ label: "Privacy Policy", href: "/contact" }];
