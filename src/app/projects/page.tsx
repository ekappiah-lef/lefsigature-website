import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { ProcessSection } from "@/components/sections/projects/ProcessSection";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "Projects we've delivered across Ghana   road construction in Tamale, the Peak Logistics Center in Takoradi, Angela Residence, the Kumasi water line, and data centre works.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
        ])}
      />

      <PageHero
        badge="Portfolio"
        badgeVariant="blue"
        title="We Build Projects That Last."
        description="Strategic engineering, construction, and technology projects delivered across Ghana   built for quality, connectivity, and long-term value."
      />

      <ProjectsGrid />
      <ProcessSection />

      <CtaBanner title="Ready to start your next project?" className="bg-surface">
        <Link href="/contact" className="btn-quote">
          Get a Quote
        </Link>
      </CtaBanner>
    </>
  );
}
