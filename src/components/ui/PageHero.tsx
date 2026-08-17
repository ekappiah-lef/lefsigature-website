import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type BadgeVariant = "green" | "blue" | "ghost";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  badgeVariant?: BadgeVariant;
  /** Render the subtle radial dot texture behind the hero. */
  dots?: boolean;
  children?: ReactNode;
}

const badgeStyles: Record<BadgeVariant, string> = {
  green: "bg-tertiary-fixed text-tertiary-on-container",
  blue: "bg-secondary-container text-secondary-on-container",
  ghost: "bg-tertiary-container/20 text-tertiary-on-container",
};

/**
 * Dark hero band used by interior pages (Services, Projects, Contact, About,
 * Industries, Careers), matching the supplied primary-container hero design.
 */
export function PageHero({
  badge,
  title,
  description,
  badgeVariant = "blue",
  dots = true,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary-container py-20 text-white">
      {dots ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#768bb1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      ) : null}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <span
            className={`mb-6 inline-block px-2 py-1 font-display text-xs font-semibold uppercase tracking-[0.05em] ${badgeStyles[badgeVariant]}`}
          >
            {badge}
          </span>
          <h1 className="h-display mb-6">{title}</h1>
          <p className="body-lg max-w-2xl text-primary-on-container">{description}</p>
          {children ? <div className="mt-12">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
