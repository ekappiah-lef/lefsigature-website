import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface CtaBannerProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

/** Centered call-to-action band used at the foot of interior pages. */
export function CtaBanner({ title, description, children, className = "" }: CtaBannerProps) {
  return (
    <section className={`border-t border-outline-variant py-20 text-center ${className}`.trim()}>
      <Container>
        <h2 className="h-lg mb-4 text-primary">{title}</h2>
        {description ? (
          <p className="mx-auto mb-12 max-w-xl text-content-variant">{description}</p>
        ) : null}
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          {children}
        </div>
      </Container>
    </section>
  );
}
