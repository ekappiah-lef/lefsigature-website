import { siteConfig } from "@/data/site";
import type { OfficeContact } from "@/types";

export const office: OfficeContact = {
  address: [
    siteConfig.address.street,
    `${siteConfig.address.city}, ${siteConfig.address.country}`,
  ],
  phone: siteConfig.phone,
  email: siteConfig.email,
  hours: siteConfig.officeHours,
  geo: siteConfig.geo,
  mapAlt: "Map of the LEF Signature head office in Lashibi, Accra",
};

export const serviceInterests = [
  "Electrical Engineering",
  "Data Center & Managed Services",
  "Software Development",
  "Building & Road Construction",
  "Facility Management & Monitoring",
] as const;
