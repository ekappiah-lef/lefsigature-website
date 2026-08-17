import { Hero } from "@/components/sections/home/Hero";
import { Stats } from "@/components/sections/home/Stats";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { CoreServices } from "@/components/sections/home/CoreServices";
import { Advantage } from "@/components/sections/home/Advantage";
import { AppDownload } from "@/components/sections/home/AppDownload";
import { Clients } from "@/components/sections/home/Clients";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Certifications } from "@/components/shared/Certifications";
import { HomeCta } from "@/components/sections/home/HomeCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <CoreServices />
      <Advantage />
      <AppDownload />
      <Clients />
      <Testimonials />
      <Certifications />
      <HomeCta />
    </>
  );
}
