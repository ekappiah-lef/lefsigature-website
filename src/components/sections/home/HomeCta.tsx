import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function HomeCta() {
  return (
    <section className="relative overflow-hidden bg-surface py-20">
      <div
        aria-hidden
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--surface-highest) 1px, transparent 1px), linear-gradient(to bottom, var(--surface-highest) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-outline-variant bg-surface-highest p-8 text-center md:flex-row md:gap-12 md:p-16 md:text-left">
          <div className="min-w-0">
            <h2 className="h-lg mb-2 text-primary">Let&apos;s Build the Future Together.</h2>
            <p className="body-lg text-content-variant">
              Partner with LEF Signature for your next major infrastructure or tech project.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-cta px-8 py-4 text-center font-display text-lg font-semibold text-white shadow-[0_10px_20px_rgba(0,158,108,0.2)] transition-transform duration-300 hover:scale-105 md:px-12"
          >
            Get Started Today
          </Link>
        </div>
      </Container>
    </section>
  );
}
