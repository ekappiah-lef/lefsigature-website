import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { clients } from "@/data/clients";

export function Clients() {
  // Rendered twice so the CSS marquee loops seamlessly without JavaScript.
  const loop = [...clients, ...clients];

  return (
    <section className="bg-surface py-20 text-center">
      <Container>
        <span className="eyebrow mb-2 uppercase tracking-[0.1em]">Trusted By Industry Leaders</span>
        <h2 className="h-lg mb-12 text-primary">Our Clients &amp; Partners</h2>
      </Container>

      <div className="marquee">
        <ul className="marquee-track animate-marquee">
          {loop.map((client, i) => (
            <li
              className="client-logo px-6"
              key={`${client.name}-${i}`}
              aria-hidden={i >= clients.length}
            >
              <div className="relative h-14 w-full">
                <Image
                  src={client.src}
                  alt={`${client.name} logo`}
                  fill
                  sizes="220px"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
