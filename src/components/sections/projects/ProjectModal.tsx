"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Building2,
  CalendarDays,
  ArrowRight,
  Play,
} from "lucide-react";
import type { Project, ProjectMedia } from "@/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const TRANSITION_MS = 300;

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const titleId = useId();
  const gallery: ProjectMedia[] = project.gallery.length
    ? project.gallery
    : [{ type: "image", src: project.image }];
  const total = gallery.length;
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const thumbsRef = useRef<HTMLDivElement | null>(null);

  const go = useCallback(
    (i: number) => setIndex(Math.max(0, Math.min(i, total - 1))),
    [total],
  );

  // Animate out, then unmount.
  const close = useCallback(() => {
    setOpen(false);
    window.setTimeout(onClose, TRANSITION_MS);
  }, [onClose]);

  // Animate in, lock body scroll, handle keyboard, and manage focus while open.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => setOpen(true));
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") setIndex((i) => Math.min(total - 1, i + 1));
      else if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
    };
    document.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, [close, total]);

  // Only the visible slide's video may play; keep the active thumbnail in view.
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) v.pause();
    });
    const strip = thumbsRef.current;
    const thumb = strip?.children[index] as HTMLElement | undefined;
    if (strip && thumb) {
      strip.scrollTo({
        left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [index]);

  const current = gallery[index];
  const meta: Array<{ icon: typeof MapPin; label: string }> = [];
  if (project.client) meta.push({ icon: Building2, label: project.client });
  if (project.location) meta.push({ icon: MapPin, label: project.location });
  if (project.year) meta.push({ icon: CalendarDays, label: project.year });

  const arrowClass =
    "absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-primary/60 text-white backdrop-blur transition hover:bg-primary disabled:pointer-events-none disabled:opacity-0";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div
        className={`absolute inset-0 bg-primary/85 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
        aria-hidden
      />

      <div
        className={`relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-surface-lowest shadow-2xl transition-all duration-300 ease-out ${
          open ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-95 opacity-0"
        }`}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-primary/70 text-white transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <X size={20} aria-hidden />
        </button>

        <div className="overflow-y-auto">
          {/* Media slider */}
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {gallery.map((item, i) => (
                <div
                  key={item.src}
                  className="relative h-full w-full shrink-0"
                  aria-hidden={i !== index}
                >
                  {item.type === "video" ? (
                    <video
                      ref={(el) => {
                        videoRefs.current[i] = el;
                      }}
                      src={item.src}
                      poster={item.poster}
                      controls
                      playsInline
                      preload={i === index ? "metadata" : "none"}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    // Only load slides near the current one.
                    Math.abs(i - index) <= 1 && (
                      <Image
                        src={item.src}
                        alt={`${project.title} — photo ${i + 1} of ${total}`}
                        fill
                        sizes="(min-width: 1024px) 64rem, 100vw"
                        className="object-contain"
                        priority={i === 0}
                      />
                    )
                  )}
                </div>
              ))}
            </div>

            {total > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => go(index - 1)}
                  disabled={index === 0}
                  aria-label="Previous"
                  className={`${arrowClass} left-3`}
                >
                  <ChevronLeft size={22} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => go(index + 1)}
                  disabled={index === total - 1}
                  aria-label="Next"
                  className={`${arrowClass} right-3`}
                >
                  <ChevronRight size={22} aria-hidden />
                </button>
                <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary/70 px-3 py-1 font-display text-xs font-semibold tracking-[0.05em] text-white">
                  {current.type === "video" ? "Video · " : ""}
                  {index + 1} / {total}
                </span>
              </>
            ) : null}
          </div>

          {/* Thumbnails */}
          {total > 1 ? (
            <div ref={thumbsRef} className="relative flex gap-3 overflow-x-auto px-6 pb-1 pt-4">
              {gallery.map((item, i) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`View ${item.type === "video" ? "video" : "photo"} ${i + 1}`}
                  aria-current={i === index}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 bg-primary transition ${
                    i === index ? "border-secondary" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  {item.type === "video" ? (
                    <>
                      {item.poster ? (
                        <Image src={item.poster} alt="" fill sizes="96px" className="object-cover opacity-60" />
                      ) : null}
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        <Play size={22} fill="currentColor" aria-hidden />
                      </span>
                    </>
                  ) : (
                    <Image src={item.src} alt="" fill sizes="96px" className="object-cover" />
                  )}
                </button>
              ))}
            </div>
          ) : null}

          {/* Details */}
          <div className="p-6 sm:p-8">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.05em] text-secondary">
              {project.eyebrow}
            </span>
            <h2 id={titleId} className="h-lg mt-2 text-primary">
              {project.title}
            </h2>

            {meta.length ? (
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {meta.map((m) => {
                  const Icon = m.icon;
                  return (
                    <span
                      key={m.label}
                      className="inline-flex items-center gap-2 text-sm font-medium text-content-variant"
                    >
                      <Icon size={16} className="text-secondary" aria-hidden />
                      {m.label}
                    </span>
                  );
                })}
              </div>
            ) : null}

            {project.description ? (
              <p className="mt-5 text-content-variant">{project.description}</p>
            ) : null}

            <Link href="/contact" onClick={onClose} className="btn btn-primary mt-8 inline-flex">
              Start a Similar Project <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
