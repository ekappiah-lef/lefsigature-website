import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { advantages } from "@/data/home";

export function Advantage() {
  return (
    <section className="bg-primary py-20 text-white">
      <Container>
        <div className="mb-12 flex flex-col items-start gap-4 border-b border-white/20 pb-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="h-lg mb-2 text-white">The LEF Advantage</h2>
            <p className="text-primary-on-container">
              Our multidisciplinary synergy allows us to tackle challenges that others cannot.
            </p>
          </div>
          <span className="hidden font-display text-xs font-semibold uppercase tracking-[0.05em] text-white/70 md:block">
            Technical Excellence by Design
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} className="adv-card" delay={i * 80}>
                <Icon className="mb-4 text-tertiary-fixed" size={24} aria-hidden />
                <h3 className="mb-2 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-5 text-primary-on-container">{item.description}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
