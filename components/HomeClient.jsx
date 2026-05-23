"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import HeroSlider from "./HeroSlider";
import ScrollToTop from "./ScrollToTop";
import PosterCard from "./PosterCard";

const FALLBACK_IMAGE = "https://via.placeholder.com/800x1200?text=No+Image";

function getImage(series) {
  return series?.thumbnail?.trim() ? series.thumbnail : FALLBACK_IMAGE;
}

function SectionHeader({ title, href = "/browse" }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="flex items-center gap-2 text-lg font-extrabold uppercase tracking-normal text-white ">
        <span className="flex h-5 w-5 items-center justify-center rounded bg-(--primary) text-black">
          <ChevronRight className="h-4 w-4 stroke-3" />
        </span>
        {title}
      </h2>

      <Link
        href={href}
        className="inline-flex items-center gap-1 rounded-full border border-zinc-700 px-3 py-1 text-[11px] font-semibold text-zinc-300 transition hover:border-(--primary) hover:text-white"
      >
        ស្វែងរកបន្ថែម
        <ChevronRight className="h-3 w-3" />
      </Link>
    </div>
  );
}

function MetaPill({ children }) {
  return (
    <span className="rounded-full border border-zinc-700 bg-black/30 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">
      {children}
    </span>
  );
}

function RecentItem({ series, index }) {
  return (
    <Link
      href={`/series/${series.id}`}
      className="group flex gap-3 rounded bg-zinc-950/80 p-2 transition hover:bg-zinc-900"
    >
      <div className="relative h-16 w-11 shrink-0 overflow-hidden rounded bg-zinc-900">
        <Image
          src={getImage(series)}
          alt={series.name || "Recently updated poster"}
          fill
          unoptimized
          className="object-cover"
        />
      </div>
      <div className="min-w-0 py-0.5">
        <p className="text-[10px] font-semibold uppercase text-zinc-500">
          TV / S{String((index % 5) + 1).padStart(2, "0")} / EP{" "}
          {String((index % 10) + 1).padStart(2, "0")}
        </p>
        <h3 className="line-clamp-2 text-xs font-bold leading-snug text-zinc-100 transition group-hover:text-(--primary)">
          {series.name}
        </h3>
      </div>
    </Link>
  );
}

export default function HomeClient({ initialSeries }) {
  const heroSeries = initialSeries.slice(0, 3);
  const latestMovies = initialSeries.slice(0, 8);
  const latestTvSeries = initialSeries;
  const recentlyUpdated = [...initialSeries].slice(0, 10);

  return (
    <main className="min-h-screen bg-(--background) text-white">
      <ScrollToTop />

      <HeroSlider series={heroSeries} />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-12">
          <p className=" text-center mt-4 line-clamp-2 text-sm leading-6 text-zinc-300">
            មើលរឿងនៅលើ Telegram <span className="font-bold text-(--primary)">LXShort</span> និង មើលថ្មីៗ។ <br /> យើងផ្តល់ជូននូវរឿងភាគថ្មីៗយ៉ាងឆាប់រហ័ស និង រឿងដែលមានគុណភាពខ្ពស់។
          </p>

          {/* <section>
            <SectionHeader title="Latest Movies" />
            <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
              {latestMovies.map((series, index) => (
                <PosterCard key={`movie-${series.id}-${index}`} series={series} index={index} />
              ))}
            </div>
          </section> */}

          <section>
            <SectionHeader title="រឿងថ្មីៗ" />
            <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
              {latestTvSeries.map((series, index) => (
                <PosterCard key={`tv-${series.id}-${index}`} series={series} index={index} />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <SectionHeader title="រឿងថ្មីៗ ទើបបន្ថែម" href="/browse" />
          <div className="space-y-2">
            {recentlyUpdated.map((series, index) => (
              <RecentItem key={`recent-${series.id}-${index}`} series={series} index={index} />
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
