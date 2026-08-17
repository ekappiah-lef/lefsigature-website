import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";

export function AboutPreview() {
  return (
    <section className="overflow-hidden bg-surface-low py-20">
      <Container>
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="relative w-full md:w-1/2">
            <div className="blueprint" aria-hidden />
            <div className="about-img-frame">
              <div className="relative h-[420px] w-full overflow-hidden rounded-[14px] md:h-[500px]">
                <Image
                  src={images.home.about}
                  alt="Senior LEF Signature engineer monitoring systems in a high-tech control room"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="eyebrow mb-4 uppercase tracking-[0.1em]">About LEF Signature</span>
            <h2 className="h-lg my-4 text-primary md:mb-6">
              Pioneering Solutions for Global Challenges.
            </h2>
            <div className="space-y-4 text-content-variant">
              <p>
                LEF Signature Limited is a multidisciplinary firm dedicated to bridging the gap
                between traditional engineering and modern technological innovation. Our expertise
                spans from high-voltage electrical installations to sophisticated software
                ecosystems.
              </p>
              <p>
                We pride ourselves on our systematic approach to complex problems, ensuring every
                project is engineered for longevity, scalability, and efficiency. With a team of
                certified professionals, we deliver turnkey solutions that power industries and
                connect communities.
              </p>
            </div>
            <Link href="/about" className="text-link mt-12">
              Learn more about our legacy
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
