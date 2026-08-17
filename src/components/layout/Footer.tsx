import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerColumns, legalLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

const socialIcons = [
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin, href: siteConfig.socialLinks.linkedin },
  { key: "instagram", label: "Instagram", Icon: Instagram, href: siteConfig.socialLinks.instagram },
  { key: "facebook", label: "Facebook", Icon: Facebook, href: siteConfig.socialLinks.facebook },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-lowest">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Image
              src={siteConfig.logo}
              alt={siteConfig.legalName}
              width={722}
              height={294}
              className="mb-4 h-12 w-auto"
            />
            <p className="mb-4 max-w-xs text-content-variant">
              A multidisciplinary engineering and technology company delivering sustainable
              infrastructure and digital solutions across Ghana.
            </p>
            <address className="mb-6 space-y-2 not-italic text-sm text-content-variant">
              <span className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" aria-hidden />
                {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.country}
              </span>
              <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="flex items-center gap-2 hover:text-secondary">
                <Phone size={16} className="shrink-0 text-secondary" aria-hidden />
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-secondary">
                <Mail size={16} className="shrink-0 text-secondary" aria-hidden />
                {siteConfig.email}
              </a>
            </address>
            <div className="flex gap-4">
              {socialIcons.map(({ key, label, Icon, href }) => (
                <a
                  key={key}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-content-variant transition-colors hover:text-secondary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h2 className="mb-4 font-display text-xs font-semibold uppercase tracking-[0.05em] text-primary">
                {column.heading}
              </h2>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={`${column.heading}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="font-display text-xs font-semibold uppercase tracking-[0.05em] text-content-variant underline-offset-2 transition-colors hover:text-secondary hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-outline-variant py-6">
        <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span className="font-display text-xs font-semibold uppercase tracking-[0.05em] text-content-variant">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </span>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-display text-xs font-semibold uppercase tracking-[0.05em] text-content-variant transition-colors hover:text-secondary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
