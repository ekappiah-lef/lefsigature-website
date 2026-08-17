"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { projectFilters, projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";

export function ProjectsGrid() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="h-lg mb-1">Selected Projects</h2>
            <div className="head-underline" aria-hidden />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {projectFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                aria-pressed={filter === f.value}
                className={`filter-btn ${filter === f.value ? "active" : ""}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {visible.map((project) => (
            <article
              key={project.index}
              className={`project-item ${
                project.span === "wide" ? "md:col-span-8" : "md:col-span-4"
              }`}
            >
              <div
                className={`proj-media ${project.span === "wide" ? "aspect-video" : "aspect-square"}`}
              >
                <span className="idx">{project.index}</span>
                <div className="bg absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes={project.span === "wide" ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                    className="object-cover"
                  />
                </div>
                {project.hasOverlay ? (
                  <div className="proj-overlay">
                    <span className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.05em] text-white">
                      View Case Study <ArrowRight size={16} aria-hidden />
                    </span>
                  </div>
                ) : null}
              </div>
              <div className="proj-info mt-4">
                <span className="font-display text-xs font-semibold uppercase tracking-[0.05em] text-secondary">
                  {project.eyebrow}
                </span>
                <h3 className="h-md mt-1 text-primary transition-colors">{project.title}</h3>
                {project.description ? (
                  <p className="mt-2 max-w-2xl text-content-variant">{project.description}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
