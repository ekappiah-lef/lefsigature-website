import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { advantages } from "@/data/home";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Build your career at LEF Signature. Join a multidisciplinary team of engineers and technologists delivering critical infrastructure and enterprise software.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ])}
      />

      <PageHero
        badge="Careers"
        badgeVariant="green"
        title="Engineer Your Career With Us."
        description="Join a multidisciplinary team solving complex challenges across electrical engineering, ICT, software, and infrastructure."
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-4 uppercase tracking-[0.1em]">Why LEF Signature</span>
            <h2 className="h-lg mb-6 text-primary">
              A place for people who build things that matter.
            </h2>
            <p className="text-content-variant">
              Our people are certified professionals who take pride in a systematic approach to
              complex problems. We invest in technical excellence, long-term partnerships, and work
              that powers industries and connects communities.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal
                  key={value.title}
                  delay={i * 80}
                  className="rounded-2xl border border-outline-variant bg-surface-lowest p-6"
                >
                  <Icon className="mb-4 text-secondary" size={24} aria-hidden />
                  <h3 className="mb-2 font-display text-lg font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-5 text-content-variant">{value.description}</p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-surface-low py-20">
        <Container>
          <SectionHeading
            title="Work With Us"
            description="We're always interested in meeting talented engineers and technologists   and in partnering with reliable subcontractors on our projects."
            className="mx-auto max-w-xl"
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href={`mailto:${siteConfig.email}?subject=Career%20Opportunities%20at%20LEF%20Signature`}
              className="btn-quote inline-flex"
            >
              Submit Your CV
            </a>
            <a
              href={`mailto:${siteConfig.email}?subject=Become%20a%20Subcontractor`}
              className="btn-quote-outline inline-flex"
            >
              Become a Subcontractor
            </a>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Questions about working with us?"
        description="Reach out to our team to learn more about life and opportunities at LEF Signature."
        className="bg-surface-lowest"
      >
        <Link href="/contact" className="btn-quote">
          Contact Us
        </Link>
      </CtaBanner>
    </>
  );
}
