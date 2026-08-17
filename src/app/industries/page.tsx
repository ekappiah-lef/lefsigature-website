import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "The sectors LEF Signature serves across Ghana — energy & power, telecommunications, ICT & data centres, construction & infrastructure, water & sanitation, and public & private sector clients.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
        ])}
      />

      <PageHero
        badge="Industries"
        badgeVariant="blue"
        title="Sector Expertise That Powers Growth."
        description="From energy and telecommunications to construction and ICT, we engineer solutions tailored to the demands of each sector we serve across Ghana."
      />

      <section className="py-20">
        <Container>
          <SectionHeading
            title="Industries We Serve"
            description="Deep, cross-disciplinary experience across the sectors that keep economies and communities running."
            className="mb-12"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <Reveal
                  key={industry.name}
                  as="article"
                  delay={(i % 3) * 100}
                  className="rounded-2xl border border-outline-variant bg-surface-lowest p-8 transition-all hover:-translate-y-1 hover:border-secondary hover:shadow-[0_16px_30px_-12px_rgba(0,13,35,0.18)]"
                >
                  <Icon className="mb-4 text-secondary" size={28} aria-hidden />
                  <h3 className="h-md mb-2 text-primary">{industry.name}</h3>
                  <p className="text-content-variant">{industry.description}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Don't see your sector?"
        description="Our multidisciplinary teams adapt engineering and technology solutions to the specific demands of your industry."
        className="bg-surface-lowest"
      >
        <Link href="/contact" className="btn-quote">
          Talk to Our Team
        </Link>
      </CtaBanner>
    </>
  );
}
