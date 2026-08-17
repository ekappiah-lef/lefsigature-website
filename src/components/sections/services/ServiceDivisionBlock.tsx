import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import type { FloatingBadge, ServiceDivision } from "@/types";

function FloatingBadgeEl({ badge }: { badge: FloatingBadge }) {
  return (
    <div className={`badge-float ${badge.position}`}>
      <span className="block text-xs font-bold uppercase">{badge.caption}</span>
      <span
        className={
          badge.small ? "text-sm font-bold" : "text-2xl font-bold text-secondary"
        }
      >
        {badge.value}
      </span>
    </div>
  );
}

function ImageMedia({
  image,
  imageAlt,
  badge,
}: {
  image: string;
  imageAlt: string;
  badge?: FloatingBadge;
}) {
  return (
    <div className="img-frame">
      <div className="frame-border" aria-hidden />
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-[0_20px_25px_-5px_rgba(0,13,35,0.05)]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      {badge ? <FloatingBadgeEl badge={badge} /> : null}
    </div>
  );
}

function CodeMedia() {
  return (
    <div className="code-panel">
      <div className="code-inner">
        <pre>
          <span className="kw">class</span> EnterpriseSolution {"{"}
          {"\n"}  <span className="fn">constructor</span>(requirements) {"{"}
          {"\n"}    this.scale = <span className="str">&apos;Unlimited&apos;</span>;
          {"\n"}    this.security = <span className="str">&apos;Hardened&apos;</span>;
          {"\n"}  {"}"}
          {"\n"}
          {"\n"}  <span className="fn">deploy</span>() {"{"}
          {"\n"}    <span className="kw">return</span> <span className="fn">this</span>.orchestrate();
          {"\n"}  {"}"}
          {"\n"}
          {"}"}
        </pre>
      </div>
    </div>
  );
}

function ConstructionMedia() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={images.services.constructionBuilding}
          alt="Commercial high-rise building construction site at dusk"
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <Image
            src={images.services.constructionRoad}
            alt="Newly constructed asphalt highway curving through greenery"
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="const-stat">
          <span className="block text-3xl font-bold text-white">15+</span>
          <span className="text-xs font-bold uppercase tracking-[0.1em]">
            Years of Infrastructure
          </span>
        </div>
      </div>
    </div>
  );
}

function Media({ division }: { division: ServiceDivision }) {
  const { media } = division;
  switch (media.kind) {
    case "image":
    case "image-badge":
      return <ImageMedia image={media.image} imageAlt={media.imageAlt} badge={media.badge} />;
    case "code":
      return <CodeMedia />;
    case "construction":
      return <ConstructionMedia />;
  }
}

function TextColumn({ division }: { division: ServiceDivision }) {
  const CtaTag = division.cta?.variant === "solid" ? "btn-solid-dark" : "btn-outline-dark";
  return (
    <div>
      <div className="divider-row">
        <span className="lbl">{division.division}</span>
        <span className="divider-line" aria-hidden />
      </div>
      <h2 className="h-lg mb-6 text-primary">{division.title}</h2>
      <p className="mb-12 text-content-variant">{division.lead}</p>

      {division.features ? (
        <ul className="mb-12 space-y-4">
          {division.features.map((feature) => {
            const Icon = feature.icon;
            return (
              <li key={feature.title} className="flex items-start gap-4">
                <Icon className="mt-0.5 shrink-0 text-secondary" size={22} aria-hidden />
                <div>
                  <span className="block font-display text-xs font-semibold uppercase tracking-[0.05em] text-primary">
                    {feature.title}
                  </span>
                  {feature.description ? (
                    <p className="text-sm leading-5 text-content-variant">{feature.description}</p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}

      {division.miniCards ? (
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {division.miniCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="mini-card">
                <Icon className="mb-2 text-secondary" size={22} aria-hidden />
                <h3 className="mb-1 font-display text-xs font-semibold uppercase tracking-[0.05em] text-primary">
                  {card.title}
                </h3>
                <p className="text-xs leading-4 text-content-variant">{card.description}</p>
              </div>
            );
          })}
        </div>
      ) : null}

      {division.steps ? (
        <ul className="num-list mb-12 grid gap-4">
          {division.steps.map((step, i) => (
            <li key={step}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-primary">{step}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {division.iconBoxes ? (
        <div className="mb-12 flex flex-col gap-6">
          {division.iconBoxes.map((box) => {
            const Icon = box.icon;
            return (
              <div key={box.title} className="flex items-start gap-6 icon-box">
                <div className="ib">
                  <Icon className="text-primary" size={22} aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-xs font-semibold uppercase tracking-[0.05em] text-primary">
                    {box.title}
                  </h3>
                  <p className="text-sm leading-5 text-content-variant">{box.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}

      {division.cta ? (
        <Link href="/contact" className={CtaTag}>
          {division.cta.label}
        </Link>
      ) : null}
    </div>
  );
}

export function ServiceDivisionBlock({
  division,
  last = false,
}: {
  division: ServiceDivision;
  last?: boolean;
}) {
  const text = <TextColumn key="text" division={division} />;
  const media = (
    <div key="media" className="flex items-center">
      <div className="w-full">
        <Media division={division} />
      </div>
    </div>
  );

  return (
    <Reveal
      as="article"
      id={division.id}
      className={`grid scroll-mt-24 grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
        last ? "" : "mb-20"
      }`}
    >
      {division.textFirst ? [text, media] : [media, text]}
    </Reveal>
  );
}
