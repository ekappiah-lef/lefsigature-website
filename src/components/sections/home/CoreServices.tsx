import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { coreServices } from "@/data/home";

export function CoreServices() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Core Specializations"
          description="Providing end-to-end technical services across the engineering and digital landscape."
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} className="svc-card flex flex-col" delay={i * 100}>
                <div className="svc-img h-44 overflow-hidden">
                  <div className="relative h-full w-full">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <Icon className="mb-4 text-secondary" size={24} aria-hidden />
                  <h3 className="h-md mb-4 text-primary">{service.title}</h3>
                  <p className="mb-6 flex-1 text-content-variant">{service.description}</p>
                  <Link href={service.href} className="svc-link mt-auto">
                    EXPLORE SERVICE <ArrowRight size={18} aria-hidden />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
