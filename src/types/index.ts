import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export interface Stat {
  index: string;
  value: string;
  label: string;
  description: string;
}

export interface CoreService {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Client {
  icon: LucideIcon;
  name: string;
}

export interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description?: string;
}

export interface ServiceDivision {
  id: string;
  division: string;
  title: string;
  lead: string;
  /** Visual layout variant used on the Services page. */
  media:
    | { kind: "image"; image: string; imageAlt: string; badge?: FloatingBadge }
    | { kind: "image-badge"; image: string; imageAlt: string; badge: FloatingBadge }
    | { kind: "code" }
    | { kind: "construction" };
  features?: ServiceFeature[];
  miniCards?: ServiceFeature[];
  steps?: string[];
  iconBoxes?: ServiceFeature[];
  cta?: { label: string; variant: "solid" | "outline" };
  /** When true, the text column is rendered before the media column on desktop. */
  textFirst: boolean;
}

export interface FloatingBadge {
  position: "bl" | "tr";
  caption: string;
  value: string;
  small?: boolean;
}

export type ProjectCategory =
  | "Construction"
  | "Infrastructure"
  | "ICT"
  | "Electrical";

export interface Project {
  index: string;
  category: ProjectCategory;
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  /** Grid span on desktop: wide (8/12) or narrow (4/12). */
  span: "wide" | "narrow";
  hasOverlay: boolean;
}

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
}

export interface OfficeContact {
  address: string[];
  phone: string;
  email: string;
  hours: string;
  geo: { latitude: number; longitude: number };
  mapAlt: string;
}
