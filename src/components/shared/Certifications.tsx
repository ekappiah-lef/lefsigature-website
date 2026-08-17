import { Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

/** Trust strip showing the company's certifications, shown above the footer. */
export function Certifications() {
  return (
    <section aria-label="Certifications" className="border-t border-outline-variant bg-primary py-12 text-white">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-sm">
            <span className="eyebrow mb-2 uppercase tracking-[0.1em] text-tertiary-fixed">
              Accredited &amp; Certified
            </span>
            <h2 className="font-display text-xl font-semibold">
              Held to international standards of quality, safety &amp; environment.
            </h2>
          </div>
          <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 lg:w-auto">
            {siteConfig.certifications.map((cert) => (
              <li
                key={cert.code}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.03] px-5 py-4 text-center"
              >
                <Award size={22} className="text-tertiary-fixed" aria-hidden />
                <span className="font-display text-base font-bold">{cert.code}</span>
                <span className="text-xs text-primary-on-container">{cert.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
