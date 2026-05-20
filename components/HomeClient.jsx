"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import VideoPlayer from "@/components/VideoPlayer";
import SeriesCard from "@/components/SeriesCard";
import ScrollToTop from "./ScrollToTop";

const CARDS_PER_PAGE = 6;

export default function HomeClient({ initialSeries }) {
  const [selectedSeries, setSelectedSeries] = useState(initialSeries[0]);
  const [displayCount, setDisplayCount] = useState(CARDS_PER_PAGE);
  const router = useRouter();

  const filteredSeries = useMemo(() => {
    return initialSeries;
  }, [initialSeries]);

  const visibleSeries = filteredSeries.slice(0, displayCount);
  const hasMore = displayCount < filteredSeries.length;

  const handleShowMore = () => {
    setDisplayCount(prev => prev + CARDS_PER_PAGE);
  };

    const handleSelectSeries = (series) => {
    router.push(`/series/${series.id}`);
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-(--background) text-white">
      <ScrollToTop />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:p-6 lg:grid-cols-3">
        <section className="space-y-4 lg:col-span-2">
          <VideoPlayer stream={selectedSeries?.stream} />

          <div>
            <h1 className="text-2xl font-bold md:text-3xl">
              រឿងថ្មីៗ
            </h1>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-2">
            {visibleSeries.map((series) => (
              <SeriesCard
                key={series.id}
                movieSeries={series}
                onSelect={handleSelectSeries}
              />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center text-xs">
          {hasMore ? (
            <button
              onClick={handleShowMore}
              className="px-6 py-2 bg-(--primary) cursor-pointer hover:bg-opacity-80 text-white rounded-lg font-semibold transition duration-300"
            >
              បង្ហាញបន្ថែម
            </button>
          ) : (
            visibleSeries.length > 0 && (
              <div className="px-6 py-2 pointer-events-none select-none text-center text-zinc-700 rounded-lg font-regular">
                គ្មានទិន្នន័យបន្ថែម
              </div>
            )
          )}
        </div>
        </aside>
      </div>
    </main>
  );
}
