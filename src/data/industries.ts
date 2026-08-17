import {
  Zap,
  RadioTower,
  Server,
  Building2,
  Droplets,
  Landmark,
} from "lucide-react";
import type { Industry } from "@/types";

/**
 * Sectors served   composed from the service areas LEF Signature lists across
 * its site (energy, telecoms, ICT/data centres, construction, water &
 * sanitation, and public/private sector clients).
 */
export const industries: Industry[] = [
  {
    icon: Zap,
    name: "Energy & Power",
    description:
      "Electrical infrastructure, power equipment, and customised solar and energy-storage solutions for reliable, sustainable power.",
  },
  {
    icon: RadioTower,
    name: "Telecommunications",
    description:
      "Telecommunication consultancy and the deployment of cutting-edge connectivity infrastructure.",
  },
  {
    icon: Server,
    name: "ICT & Data Centres",
    description:
      "Intelligent ICT systems plus 24/7 data centre operation, monitoring, and managed services.",
  },
  {
    icon: Building2,
    name: "Construction & Infrastructure",
    description:
      "Buildings, roads, bridges, and civil works delivered with expert planning and lasting quality.",
  },
  {
    icon: Droplets,
    name: "Water & Sanitation",
    description:
      "Water lines, sanitation, and utility services that support healthy, connected communities.",
  },
  {
    icon: Landmark,
    name: "Public & Private Sector",
    description:
      "Tailored solutions for government institutions and private enterprises across Ghana.",
  },
];
