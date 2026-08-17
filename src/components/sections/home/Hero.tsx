import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { images } from "@/data/images";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-surface sm:min-h-[80vh]"
      style={{
        backgroundImage: "radial-gradient(var(--outline-variant) 0.5px, transparent 0.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Faded, slowly zooming background photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.home.hero}
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover opacity-20"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, var(--surface) 10%, transparent)" }}
        />
        {/* Drifting accent glows for a dynamic, on-brand feel */}
        <span
          className="hero-glow"
          style={{ width: 460, height: 460, top: "-120px", right: "-60px" }}
          aria-hidden
        />
        <span
          className="hero-glow"
          style={{ width: 380, height: 380, bottom: "-140px", left: "-40px", animationDelay: "3s" }}
          aria-hidden
        />
      </div>

      <Container className="relative z-20 py-20">
        <div className="hero-stagger max-w-3xl">
          <span className="eyebrow">LEF SIGNATURE LIMITED</span>
          <h1 className="h-display my-4 text-primary md:my-6">
            Driving Progress Through Technology &amp; Engineering Excellence.
          </h1>
          <p className="body-lg mb-12 max-w-2xl text-content-variant">
            A multidisciplinary engineering and technology company delivering innovative,
            reliable, and future-ready solutions across Ghana   from data centres and electrical
            engineering to software and construction.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-primary">
              Get a Quote
            </Link>
            <Link href="/services" className="btn btn-outline">
              Our Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
