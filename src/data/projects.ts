import {
  MessageSquare,
  DraftingCompass,
  PenTool,
  Cog,
  ClipboardCheck,
  Headset,
} from "lucide-react";
import type { ProcessStep, Project, ProjectCategory } from "@/types";

const WIX = "https://static.wixstatic.com/media";

export const projectFilters: Array<{ label: string; value: ProjectCategory | "all" }> = [
  { label: "All Projects", value: "all" },
  { label: "Construction", value: "Construction" },
  { label: "Infrastructure", value: "Infrastructure" },
  { label: "ICT", value: "ICT" },
];

/** Featured projects   sourced from lefsignature.com/projects. */
export const projects: Project[] = [
  {
    index: "01",
    category: "Construction",
    eyebrow: "Construction • Tamale",
    title: "Road Construction   Tamale",
    image: `${WIX}/89238f5335504d239408fb381de8c4cb.jpg`,
    imageAlt: "Road construction project in Tamale",
    span: "wide",
    hasOverlay: true,
  },
  {
    index: "02",
    category: "Construction",
    eyebrow: "Construction • Takoradi",
    title: "Peak Logistics Center   Takoradi",
    image: `${WIX}/c837a6_a0437352f7d84bb3b239f03685fb93a7~mv2.jpg`,
    imageAlt: "Peak Logistics Center building in Takoradi",
    span: "narrow",
    hasOverlay: true,
  },
  {
    index: "03",
    category: "Construction",
    eyebrow: "Construction • Residential",
    title: "Angela Residence",
    image: `${WIX}/c837a6_10bfdb7a1c1641008cb8fcc355dbb9b9~mv2.jpg`,
    imageAlt: "Angela Residence residential building",
    span: "narrow",
    hasOverlay: false,
  },
  {
    index: "04",
    category: "Infrastructure",
    eyebrow: "Infrastructure • Kumasi",
    title: "Kumasi Water Line",
    image: `${WIX}/c837a6_ebccae6fc1bb403198d95cc3b687306a~mv2.jpg`,
    imageAlt: "Kumasi water line civil infrastructure works",
    span: "wide",
    hasOverlay: false,
  },
  {
    index: "05",
    category: "ICT",
    eyebrow: "ICT • Data Centre",
    title: "Data Center Monitoring",
    image: `${WIX}/11062b_96e3089f5908483db9dcf2feb5d1d405~mv2.jpeg`,
    imageAlt: "Engineer monitoring a data centre",
    span: "narrow",
    hasOverlay: true,
  },
  {
    index: "06",
    category: "Infrastructure",
    eyebrow: "Infrastructure • Roadworks",
    title: "Road Construction",
    image: `${WIX}/11062b_54b807a15b784a148c4d2ab7e6942ea7~mv2.jpeg`,
    imageAlt: "Highway road construction works",
    span: "narrow",
    hasOverlay: false,
  },
];

export const processSteps: ProcessStep[] = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Defining objectives and project scope.",
  },
  {
    icon: DraftingCompass,
    title: "Planning",
    description: "Strategic feasibility and resource mapping.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Blueprinting and technical architecture.",
  },
  {
    icon: Cog,
    title: "Implementation",
    description: "Technical execution and construction.",
  },
  {
    icon: ClipboardCheck,
    title: "Testing",
    description: "Quality assurance and stress testing.",
  },
  {
    icon: Headset,
    title: "Support",
    description: "Ongoing maintenance and lifecycle care.",
  },
];
