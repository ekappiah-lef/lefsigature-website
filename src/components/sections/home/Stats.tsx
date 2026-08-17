import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/data/home";

export function Stats() {
  return (
    <section className="py-20" aria-label="Company at a glance">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.index} className="stat-card" delay={i * 100}>
              <span className="idx">{stat.index}</span>
              <div className="num">{stat.value}</div>
              <div className="lbl">{stat.label}</div>
              <p>{stat.description}</p>
              <div className="bar" aria-hidden />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
