"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
} from "lucide-react";

const FALLBACK_IMAGE = "https://via.placeholder.com/1600x900?text=No+Image";
const SLIDE_INTERVAL = 5000;

function getImage(series) {
  return series?.thumbnail?.trim() ? series.thumbnail : FALLBACK_IMAGE;
}

function MetaPill({ children }) {
  return (
    <span className="rounded-full border border-zinc-700 bg-black/30 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">
      {children}
    </span>
  );
}

export default function HeroSlider({ series = [] }) {
  const slides = useMemo(() => series.filter(Boolean).slice(0, 3), [series]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) {
    return null;
  }

  const activeSlide = slides[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section className="relative min-h-70 md:min-h-120 overflow-hidden border-b border-(--border-color)">
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="relative min-w-full">
            <Image
              src={getImage(slide)}
              alt={slide.name || "Featured title"}
              fill
              priority={index === 0}
              unoptimized
              className="object-cover object-center opacity-65 md:object-[70%_center]"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,transparent_0,rgba(0,0,0,0.28)_34%,rgba(0,0,0,0.92)_78%)]" />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/75 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-(--primary)/10  to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-(--background) to-transparent" />

      <div className="relative min-h-70 md:min-h-120 mx-auto flex max-w-7xl items-center px-4 pt-20 md:px-6 md:pb-28">
        <div
          key={activeSlide.id}
          className="max-w-2xl animate-[hero-copy-in_450ms_ease-out] sm:px-4 md:px-12"
        >
          <h1 className="text-3xl font-black uppercase leading-tight text-white md:text-5xl">
            {activeSlide.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-300">
            <span className="rounded bg-(--primary) px-1.5 py-0.5 text-[10px] font-black text-white">
              HD
            </span>
            <MetaPill>{activeSlide.category || "Drama"}</MetaPill>
            {/* <span>{2026 - (activeIndex % 3)}</span> */}
          </div>

          {/* s */}

          <div className="mt-6 sm:flex flex-wrap hidden items-center gap-2">
            <Link
              href={`/series/${activeSlide.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-(--primary) px-5 py-3 text-sm font-bold text-white transition hover:bg-(--primary-600)"
            >
              <PlayCircle className="h-5 w-5" />
              មើលឥឡូវនេះ
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-zinc-300 transition hover:text-white"
            >
              <Bookmark className="h-5 w-5" />
              ចាប់អារម្មណ៍
            </button>
          </div>
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur transition hover:border-(--primary) hover:bg-black/70 md:flex"
            aria-label="Previous featured series"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur transition hover:border-(--primary) hover:bg-black/70 md:flex"
            aria-label="Next featured series"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={`hero-dot-${slide.id}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${index === activeIndex
                  ? "w-8 bg-(--primary)"
                  : "w-2.5 bg-white/35 hover:bg-white/70"
                  }`}
                aria-label={`Show featured series ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
