import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-20">
      <Container className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <span className="eyebrow mb-4 uppercase tracking-[0.1em]">Error 404</span>
        <h1 className="h-display mb-4 text-primary">Page not found.</h1>
        <p className="body-lg mb-12 max-w-xl text-content-variant">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on
          track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}
