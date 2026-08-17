import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/projects";

export function ProcessSection() {
  return (
    <section className="bg-surface-container py-20">
      <Container>
        <SectionHeading
          title="Our Engineering Process"
          description="A systematic, multi-phase methodology ensures every project is delivered with technical precision and operational excellence."
          className="mx-auto max-w-xl"
        />

        {/* Desktop timeline */}
        <div className="relative mt-12 hidden md:block">
          <div className="timeline-line" aria-hidden />
          <ol className="relative grid grid-cols-6 gap-4">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="flex flex-col items-center text-center">
                  <div className="circle">
                    <Icon size={30} className="text-secondary" aria-hidden />
                  </div>
                  <h3 className="mb-2 font-display text-xs font-bold uppercase tracking-[0.05em]">
                    {step.title}
                  </h3>
                  <p className="px-1 text-xs leading-4 text-content-variant">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile stacked list */}
        <ol className="mt-12 flex flex-col gap-6 md:hidden">
          {processSteps.map((step, i) => (
            <li key={step.title} className="mp-item">
              <span className="font-bold text-secondary">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.05em]">
                  {step.title}
                </h3>
                <p className="mt-1 text-content-variant">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
