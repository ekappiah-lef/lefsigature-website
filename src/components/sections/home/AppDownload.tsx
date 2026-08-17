import Image from "next/image";
import { Smartphone, Apple, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";

/**
 * LefPower app store links. Fill these in once the app is published   badges
 * render as active links when a URL is present and as inert (accessible)
 * placeholders otherwise, so the layout never ships a dead "#" link.
 */
const appLinks: Array<{
  id: string;
  Icon: LucideIcon;
  small: string;
  strong: string;
  href: string;
  web?: boolean;
}> = [
  { id: "google", Icon: Smartphone, small: "GET IT ON", strong: "Google Play", href: "https://play.google.com/store/apps/details?id=com.lefsignature.lefpower.app" },
  { id: "apple", Icon: Apple, small: "Download on the", strong: "App Store", href: "https://apps.apple.com/us/app/lefpower/id6754718230" },
  { id: "web", Icon: Globe, small: "USE THE", strong: "Web Version", href: "https://lefpower.lefsignature.com/", web: true },
];

function StoreBadge({ Icon, small, strong, href, web }: (typeof appLinks)[number]) {
  const className = `store-badge${web ? " web" : ""}`;
  const inner = (
    <>
      <Icon size={28} aria-hidden />
      <span className="flex flex-col text-left leading-tight">
        <small className="text-[10px] tracking-[0.03em] opacity-85">{small}</small>
        <strong className="font-display text-base font-semibold">{strong}</strong>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <span className={className} role="link" aria-disabled="true">
      {inner}
    </span>
  );
}

export function AppDownload() {
  return (
    <section className="app-sec relative overflow-hidden bg-primary-container py-20 text-white">
      <Container className="relative z-[2] flex flex-col items-center gap-12 min-[900px]:flex-row min-[900px]:justify-between">
        <div className="max-w-xl">
          <span className="eyebrow mb-4 uppercase tracking-[0.1em] text-tertiary-fixed">
            Download the App
          </span>
          <h2 className="h-lg mb-4 text-white">Get LefPower in your pocket.</h2>
          <p className="mb-8 text-primary-on-container">
            Monitor your systems, request service, and stay connected to LEF Signature on the go.
            Download LefPower for Android and iOS, or use the full-featured web version from any
            browser.
          </p>
          <div className="flex flex-wrap gap-4">
            {appLinks.map((link) => (
              <StoreBadge key={link.id} {...link} />
            ))}
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <div className="relative w-[230px] overflow-hidden rounded-[40px] border-[9px] border-[#1c2f4d] bg-[#0b2343] shadow-[0_30px_60px_rgba(0,0,0,0.45)] sm:w-[250px]">
            <Image
              src="/images/lefpower.jpeg"
              alt="The LefPower mobile app home screen showing electrical services"
              width={590}
              height={1180}
              sizes="250px"
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
