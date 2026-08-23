"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const SHOTS = [
  {
    src: "/images/langganin-dashboard.png",
    alt: "Langganin dashboard showing monthly spending overview",
  },
  {
    src: "/images/langganin-subscriptions.png",
    alt: "Langganin subscriptions list with renewals and status",
  },
  {
    src: "/images/langganin-analytics.png",
    alt: "Langganin analytics view",
  },
];

export function LangganinScreens() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTo = useCallback((i: number) => {
    setIndex(i);
    trackRef.current?.querySelectorAll<HTMLElement>("[data-slide]")[i]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    const slides = track.querySelectorAll<HTMLElement>("[data-slide]");
    let closest = 0;
    let closestDist = Infinity;
    slides.forEach((slide, i) => {
      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const dist = Math.abs(slideCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setIndex(closest);
  }, []);

  const go = useCallback(
    (delta: number) => {
      const next = (index + delta + SHOTS.length) % SHOTS.length;
      scrollTo(next);
    },
    [index, scrollTo]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => (v === null ? v : (v + 1) % SHOTS.length));
      if (e.key === "ArrowLeft") setOpen((v) => (v === null ? v : (v - 1 + SHOTS.length) % SHOTS.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="rounded-card border border-white/70 bg-white/75 p-2 shadow-clay backdrop-blur-xl">
        <div
          ref={trackRef}
          role="region"
          aria-label="Langganin screenshots"
          onScroll={onScroll}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [scrollbar-width:thin]"
        >
          {SHOTS.map((shot, i) => (
            <div
              key={shot.src}
              data-slide
              className="shrink-0 snap-center"
              style={{ width: "calc(100% - 8px)" }}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`View ${shot.alt} fullscreen`}
                className="block w-full cursor-zoom-in overflow-hidden rounded-[14px] border border-white/50 bg-white focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1900}
                  height={1500}
                  className="h-auto max-h-[420px] w-full object-contain sm:max-h-[480px] lg:max-h-[520px]"
                />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-2 flex items-center justify-between gap-3 pt-1">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous screenshot"
            className="inline-flex h-9 w-9 items-center justify-center rounded-pill text-text-muted transition-colors hover:bg-clay-100 hover:text-text focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
          >
            <ChevronLeft size={18} />
          </button>
          <p className="text-xs font-medium text-text-muted">
            {index + 1} / {SHOTS.length}
          </p>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next screenshot"
            className="inline-flex h-9 w-9 items-center justify-center rounded-pill text-text-muted transition-colors hover:bg-clay-100 hover:text-text focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={SHOTS[open].alt}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-md"
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/90 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none sm:right-4 sm:top-4"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => (v === null ? v : (v - 1 + SHOTS.length) % SHOTS.length));
            }}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/90 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none sm:left-5"
          >
            <ChevronLeft size={24} />
          </button>

          <Image
            src={SHOTS[open].src}
            alt={SHOTS[open].alt}
            width={1900}
            height={2000}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-auto max-w-full rounded-card object-contain shadow-2xl"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((v) => (v === null ? v : (v + 1) % SHOTS.length));
            }}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/90 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none sm:right-5"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
