import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

/** Constrains content to the design's 1280px max width with 24px gutters. */
export function Container({ children, as: Tag = "div", className = "" }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-container px-6 ${className}`.trim()}>
      {children}
    </Tag>
  );
}
