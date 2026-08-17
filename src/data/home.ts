import { Bolt, Server, Code2, HardHat, ShieldCheck, Cog, Brain, Handshake } from "lucide-react";
import { images } from "@/data/images";
import type { Advantage, CoreService, Stat } from "@/types";

/** "Our Numbers"   sourced from lefsignature.com. */
export const stats: Stat[] = [
  {
    index: "01",
    value: "48",
    label: "In-Progress Sites",
    description:
      "Active engineering and construction sites currently underway across Ghana.",
  },
  {
    index: "02",
    value: "282",
    label: "Projects Completed",
    description:
      "Successfully delivered projects across engineering, ICT, and construction.",
  },
  {
    index: "03",
    value: "35",
    label: "Business Partners",
    description:
      "Trusted long-term partners and clients who rely on our expertise.",
  },
];

export const coreServices: CoreService[] = [
  {
    icon: Bolt,
    title: "Electrical Engineering",
    description:
      "Experts in electrical system design, installation, and maintenance ensuring optimal infrastructure for businesses and facilities.",
    href: "/services#electrical-engineering",
    image: "/images/electicalwork.jpg",
    imageAlt: "Electrical engineers working on site",
  },
  {
    icon: Server,
    title: "Data Center & Managed Services",
    description:
      "Comprehensive data center solutions, ensuring reliable and efficient operations for your business.",
    href: "/services#data-center",
    image: images.home.serviceDataCenter,
    imageAlt: "Modern data center aisle",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software solutions designed to meet your business's unique technology needs.",
    href: "/services#software-development",
    image: images.home.serviceSoftware,
    imageAlt: "Software development workstation",
  },
  {
    icon: HardHat,
    title: "Building & Road Construction",
    description:
      "High-quality construction that enhances infrastructure and community connectivity through expert planning, execution, and maintenance.",
    href: "/services#construction",
    image: images.services.constructionBuilding,
    imageAlt: "Commercial building construction site",
  },
];

export const advantages: Advantage[] = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Engineered systems built for dependable, uninterrupted performance and industrial-grade resilience.",
  },
  {
    icon: Cog,
    title: "Technical Expertise",
    description:
      "Certified professionals with deep experience across electrical, ICT, and civil engineering.",
  },
  {
    icon: Brain,
    title: "Innovation",
    description:
      "Applying cutting-edge technology to traditional engineering for smarter, future-ready solutions.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We treat every client as a valuable long-term partner, not just another project.",
  },
];
