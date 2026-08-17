import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-surface-low py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Client Success Stories"
          description="Hear what our clients say about working with LEF Signature."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.author}
              as="figure"
              delay={i * 100}
              className="flex h-full flex-col rounded-2xl border border-outline-variant bg-surface-lowest p-8"
            >
              <Quote size={28} className="mb-4 text-secondary" aria-hidden />
              <blockquote className="flex-1 text-content">
                <p className="body-lg">&ldquo;{item.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-outline-variant pt-4">
                <span className="block font-display font-semibold text-primary">{item.author}</span>
                <span className="text-sm text-content-variant">{item.location}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
