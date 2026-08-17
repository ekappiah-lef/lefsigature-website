import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ShieldCheck, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ServiceDivisionBlock } from "@/components/sections/services/ServiceDivisionBlock";
import { serviceDivisions } from "@/data/services";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "LEF Signature's services: electrical engineering, data center & managed services, software development, and building & road construction across Ghana.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
          ]),
          ...serviceDivisions.map((d) => serviceSchema(d.title, d.lead)),
        ]}
      />

      <PageHero
        badge="Our Capabilities"
        badgeVariant="green"
        title="Engineering & Technology Solutions."
        description="We offer a range of services to meet all types of needs — from critical electrical infrastructure and data centres to software and large-scale construction."
      >
        <div className="flex flex-wrap items-center gap-6">
          <Link href="#electrical-engineering" className="btn btn-blue">
            OUR CAPABILITIES <ArrowDown size={18} aria-hidden />
          </Link>
          <span className="flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.05em] text-primary-on-container">
            <ShieldCheck size={20} className="text-tertiary-fixed" aria-hidden />
            ISO 9001, 14001 &amp; 45001 Certified
          </span>
        </div>
      </PageHero>

      <section className="py-20">
        <Container>
          {serviceDivisions.map((division, i) => (
            <ServiceDivisionBlock
              key={division.id}
              division={division}
              last={i === serviceDivisions.length - 1}
            />
          ))}
        </Container>
      </section>

      <CtaBanner
        title="Ready to Engineer Your Vision?"
        description="Contact our consultation team to discuss technical requirements, project timelines, and strategic implementation."
        className="bg-surface-lowest"
      >
        <Link href="/contact" className="btn-quote">
          Request a Quote
        </Link>
        <Link href="/contact" className="btn-ghost">
          <Download size={18} aria-hidden className="mr-2" /> Download Portfolio
        </Link>
      </CtaBanner>
    </>
  );
}
