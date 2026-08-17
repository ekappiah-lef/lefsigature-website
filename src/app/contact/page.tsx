import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Instagram,
  Facebook,
  FileText,
  Download,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { office } from "@/data/contact";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with LEF Signature in Accra, Ghana. Request a quote, reach our engineering team, or become a subcontractor.",
  path: "/contact",
});

const socials = [
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin, href: siteConfig.socialLinks.linkedin },
  { key: "instagram", label: "Instagram", Icon: Instagram, href: siteConfig.socialLinks.instagram },
  { key: "facebook", label: "Facebook", Icon: Facebook, href: siteConfig.socialLinks.facebook },
].filter((s) => s.href);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ])}
      />

      <PageHero
        badge="Contact Us"
        badgeVariant="ghost"
        dots={false}
        title="Request a Quote for Your Next Project."
        description="Whether you're planning a construction project, scaling a data centre, or building custom software, our team is ready to help. We'll get back to you shortly."
      />

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[5fr_7fr]">
            {/* LEFT */}
            <div className="space-y-12">
              <div className="office-card">
                <span className="idx">01</span>
                <h2 className="h-md mb-6 text-primary">Head Office</h2>
                <div className="mb-4 flex items-start gap-4">
                  <MapPin className="shrink-0 text-secondary" size={24} aria-hidden />
                  <div>
                    {office.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
                <div className="mb-4 flex items-start gap-4">
                  <Phone className="shrink-0 text-secondary" size={24} aria-hidden />
                  <a href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}>{office.phone}</a>
                </div>
                <div className="mb-4 flex items-start gap-4">
                  <Mail className="shrink-0 text-secondary" size={24} aria-hidden />
                  <a href={`mailto:${office.email}`}>{office.email}</a>
                </div>
                <div className="mb-4 flex items-start gap-4">
                  <Clock className="shrink-0 text-secondary" size={24} aria-hidden />
                  <p>{office.hours}</p>
                </div>
                <div className="map">
                  <iframe
                    title={office.mapAlt}
                    src={`https://maps.google.com/maps?q=${office.geo.latitude},${office.geo.longitude}&z=15&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>
              </div>

              <div>
                <h2 className="label mb-4 uppercase tracking-[0.1em] text-outline">
                  Connect Globally
                </h2>
                <div className="flex gap-4">
                  <a
                    href={`mailto:${office.email}`}
                    aria-label={`Email ${siteConfig.legalName}`}
                    className="flex h-12 w-12 items-center justify-center border border-outline-variant text-content-variant transition-colors hover:border-secondary hover:text-secondary"
                  >
                    <Mail size={20} aria-hidden />
                  </a>
                  {socials.map(({ key, label, Icon, href }) => (
                    <a
                      key={key}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center border border-outline-variant text-content-variant transition-colors hover:border-secondary hover:text-secondary"
                    >
                      <Icon size={20} aria-hidden />
                    </a>
                  ))}
                </div>
              </div>

              <div className="support">
                <h2 className="h-md mb-2 text-secondary-on-container">Technical Support</h2>
                <p className="text-content-variant">
                  Existing clients requiring immediate technical assistance for deployed systems
                  should contact our 24/7 engineering hotline.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div id="inquiry-form" className="scroll-mt-24">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-outline-variant bg-surface-low py-20 text-center">
        <Container>
          <h2 className="h-lg mb-4 text-primary">Ready to begin your project?</h2>
          <p className="body-lg mx-auto mb-6 max-w-2xl text-content-variant">
            Download our Capability Statement or request a formal quotation for large-scale
            engineering deployments.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a href="#inquiry-form" className="btn-quote">
              <FileText size={18} aria-hidden /> Request a formal Quote
            </a>
            <a
              href={`mailto:${office.email}?subject=Capability%20Statement%20Request`}
              className="btn-quote-outline"
            >
              <Download size={18} aria-hidden /> Capability Statement
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
