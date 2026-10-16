"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProjectModal } from "@/components/sections/projects/ProjectModal";
import { projectFilters, projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";

function mediaSummary(project: Project) {
  const videos = project.gallery.filter((m) => m.type === "video").length;
  const photos = project.gallery.length - videos;
  const parts = [`${photos} photo${photos === 1 ? "" : "s"}`];
  if (videos) parts.push(`${videos} video${videos === 1 ? "" : "s"}`);
  return parts.join(" · ");
}

export function ProjectsGrid() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [selected, setSelected] = useState<Project | null>(null);

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
            <button
              key={project.index}
              type="button"
              onClick={() => setSelected(project)}
              aria-label={`View project: ${project.title}`}
              className={`project-item block w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-left ${
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
                    sizes={
                      project.span === "wide"
                        ? "(min-width: 768px) 66vw, 100vw"
                        : "(min-width: 768px) 33vw, 100vw"
                    }
                    className="object-cover"
                  />
                </div>
                <div className="proj-overlay">
                  <span className="inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.05em] text-white">
                    <Maximize2 size={16} aria-hidden /> View Project
                    <span className="opacity-75">· {mediaSummary(project)}</span>
                  </span>
                </div>
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
            </button>
          ))}
        </div>
      </Container>

      {selected ? <ProjectModal project={selected} onClose={() => setSelected(null)} /> : null}
    </section>
  );
}
