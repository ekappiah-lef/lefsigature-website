import {
  MessageSquare,
  DraftingCompass,
  PenTool,
  Cog,
  ClipboardCheck,
  Headset,
} from "lucide-react";
import type { ProcessStep, Project, ProjectCategory, ProjectMedia } from "@/types";

/**
 * PROJECT MEDIA.
 * Photos and videos live in `public/images/projects/<folder>/`, named
 * `<folder>-<n>.jpg` and `<folder>-video-<n>.mp4`. To add more, drop files in
 * the folder and bump the counts below.
 */
const base = "/images/projects";

function media(folder: string, photos: number, videos = 0): ProjectMedia[] {
  const items: ProjectMedia[] = Array.from({ length: photos }, (_, i) => ({
    type: "image" as const,
    src: `${base}/${folder}/${folder}-${i + 1}.jpg`,
  }));
  for (let i = 1; i <= videos; i++) {
    items.push({
      type: "video",
      src: `${base}/${folder}/${folder}-video-${i}.mp4`,
      poster: items[0]?.src,
    });
  }
  return items;
}

const cover = (folder: string, n = 1) => `${base}/${folder}/${folder}-${n}.jpg`;

export const projectFilters: Array<{ label: string; value: ProjectCategory | "all" }> = [
  { label: "All Projects", value: "all" },
  { label: "Data Centre", value: "Data Centre" },
  { label: "ICT", value: "ICT" },
  { label: "Electrical", value: "Electrical" },
  { label: "Solar", value: "Solar" },
];

/** LEF Signature projects. */
export const projects: Project[] = [
  {
    index: "01",
    category: "ICT",
    eyebrow: "ICT • Fibre • MPS Ghana",
    title: "Fibre Provision & Installation — MPS Ghana",
    description:
      "Provision and installation of fibre-optic infrastructure for MPS Ghana, delivering reliable high-capacity connectivity.",
    client: "MPS Ghana",
    image: cover("mps-fibre"),
    imageAlt: "Fibre-optic network infrastructure installation",
    gallery: media("mps-fibre", 5, 1),
    span: "wide",
  },
  {
    index: "02",
    category: "Data Centre",
    eyebrow: "Data Centre • AirtelTigo",
    title: "AirtelTigo Data Centre — HVAC & Power Maintenance",
    description:
      "Mechanical/HVAC, air-conditioning, and power-systems maintenance for the AirtelTigo data centre, keeping critical infrastructure running reliably.",
    client: "AirtelTigo",
    image: cover("airteltigo-datacentre"),
    imageAlt: "Data centre cooling and power infrastructure",
    gallery: media("airteltigo-datacentre", 15, 1),
    span: "narrow",
  },
  {
    index: "03",
    category: "Data Centre",
    eyebrow: "Data Centre • MTN Ghana",
    title: "MTN Ghana Data Centre — Passive Maintenance",
    description:
      "Passive infrastructure maintenance for the MTN Ghana data centre, ensuring environmental and structural systems perform to standard.",
    client: "MTN Ghana",
    image: cover("mtn-datacentre"),
    imageAlt: "Engineer maintaining data centre infrastructure",
    gallery: media("mtn-datacentre", 9),
    span: "narrow",
  },
  {
    index: "04",
    category: "Electrical",
    eyebrow: "Electrical • Accra",
    title: "Airport Residential — Electrical Works",
    description:
      "Complete electrical installation and works for a property at Airport Residential, Accra.",
    location: "Airport Residential, Accra",
    image: cover("airport-residential"),
    imageAlt: "Electrical installation works on site",
    gallery: media("airport-residential", 4),
    span: "wide",
  },
  {
    index: "05",
    category: "Solar",
    eyebrow: "Solar • Water • Assewa",
    title: "Solar-Powered Water Pumping Station — Assewa",
    description:
      "A community solar-powered water pumping station at Assewa, providing a clean, sustainable water supply.",
    location: "Assewa",
    image: cover("assewa-water"),
    imageAlt: "Solar panel array powering a water pumping station",
    gallery: media("assewa-water", 5),
    span: "wide",
  },
  {
    index: "06",
    category: "Solar",
    eyebrow: "Solar • Residential & Commercial",
    title: "Solar Installation — Residential & Commercial",
    description:
      "Design and installation of solar power systems for residential and commercial clients.",
    image: cover("solar-installation"),
    imageAlt: "Rooftop solar panel installation",
    gallery: media("solar-installation", 6),
    span: "narrow",
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
