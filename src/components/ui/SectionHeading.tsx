import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/** Reusable section heading: optional eyebrow, an h2 title, and lead copy. */
export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`.trim()}>
      {eyebrow ? <span className="eyebrow mb-2 uppercase tracking-[0.1em]">{eyebrow}</span> : null}
      <h2 className="h-lg text-primary">{title}</h2>
      {description ? (
        <p className={`mt-2 text-content-variant ${centered ? "mx-auto max-w-2xl" : ""}`.trim()}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
