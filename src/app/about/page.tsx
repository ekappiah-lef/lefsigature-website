import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stats } from "@/components/sections/home/Stats";
import { Advantage } from "@/components/sections/home/Advantage";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "LEF Signature Limited is a multidisciplinary engineering and consultancy firm headquartered in Accra, Ghana, with over 20 years of experience across engineering, ICT, and construction.",
  path: "/about",
});

const servicesInBrief = [
  "Telecommunication Consultancy",
  "Electrical Engineering Works",
  "Data Centre Operation Management",
  "ICT Infrastructure & Solutions",
  "Road & Building Construction",
  "Facility Management & Monitoring",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ])}
      />

      <PageHero
        badge="About Us"
        badgeVariant="green"
        title="Why Choose Us?"
        description="A dynamic, multidisciplinary engineering and consultancy firm headquartered in Accra, Ghana — turning ideas into reality with precision, passion, and professionalism."
      />

      <section className="py-20">
        <Container>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="relative w-full md:w-1/2">
              <div className="blueprint" aria-hidden />
              <div className="about-img-frame">
                <div className="relative h-[420px] w-full overflow-hidden rounded-[14px] md:h-[500px]">
                  <Image
                    src={images.home.about}
                    alt="LEF Signature engineer monitoring systems in a high-tech control room"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="eyebrow mb-4 uppercase tracking-[0.1em]">Who We Are</span>
              <h2 className="h-lg my-4 text-primary md:mb-6">
                Your vision is our blueprint.
              </h2>
              <div className="space-y-4 text-content-variant">
                <p>
                  We are a dynamic, multidisciplinary engineering and consultancy firm headquartered
                  in Accra, Ghana, specialising in data centre management, electrical &amp; civil
                  engineering, construction, sanitation, industrial works, ICT consultancy, water and
                  electricity services, and logistics.
                </p>
                <p>
                  Driven by a commitment to excellence and innovation, LEF Signature Ltd delivers
                  high-quality, customised solutions for clients across both public and private
                  sectors. Our team of seasoned professionals combines technical expertise with
                  practical experience to ensure every project is completed efficiently, safely, and
                  to the highest standards.
                </p>
                <p>
                  With over 20 years of experience in technology and engineering, we offer end-to-end
                  services from concept to deployment and maintenance — positioning ourselves as a
                  trusted partner in Ghana&apos;s infrastructure and technology development sectors.
                </p>
              </div>
              <Link href="/services" className="text-link mt-12">
                Explore our capabilities
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-low py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Expertise"
            title="Services in Brief"
            description="A snapshot of the disciplines we bring together under one roof."
            className="mb-12"
          />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesInBrief.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-outline-variant bg-surface-lowest p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tertiary-fixed text-tertiary-on-fixed">
                  <Check size={18} aria-hidden />
                </span>
                <span className="font-display text-sm font-semibold text-primary">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Stats />

      <section className="bg-primary-container py-20 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow mb-4 uppercase tracking-[0.1em] text-tertiary-fixed">
              Our Mission
            </span>
            <h2 className="h-lg mb-6">Building a Sustainable Future</h2>
            <p className="body-lg text-primary-on-container">
              We are on a mission to transform how businesses and communities interact with
              technology. By combining our expertise in ICT services and engineering with a
              commitment to environmental responsibility, we create pathways for our clients to
              thrive amidst rapid change — providing tailored solutions that promote sustainable
              infrastructure and digital evolution.
            </p>
          </div>
        </Container>
      </section>

      <Advantage />
      <Testimonials />

      <CtaBanner
        title="Let's build the future together."
        description="Partner with LEF Signature for your next engineering, technology, or construction project."
        className="bg-surface-lowest"
      >
        <Link href="/contact" className="btn-quote">
          Get a Quote
        </Link>
        <Link href="/projects" className="btn-ghost">
          View Our Projects
        </Link>
      </CtaBanner>
    </>
  );
}
