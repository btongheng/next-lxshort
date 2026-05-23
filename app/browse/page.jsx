"use client";

import { useMemo, useState } from "react";
import MovieSeries from "@/data/movieSeries";
import ScrollToTop from "@/components/ScrollToTop";
import PosterCard from "@/components/PosterCard";

const CARDS_PER_PAGE = 6;

export default function BrowsePage() {
  const [category, setCategory] = useState("រឿងគ្រប់ប្រភេទ");
  const [displayCount, setDisplayCount] = useState(CARDS_PER_PAGE);

  const categories = useMemo(() => {
    return ["រឿងគ្រប់ប្រភេទ", ...new Set(MovieSeries.map((c) => c.category))];
  }, []);

  const filteredSeries = useMemo(() => {
    return MovieSeries.filter((series) => {
      const matchesCategory =
        category === "រឿងគ្រប់ប្រភេទ" || series?.category === category;
      return matchesCategory;
    });
  }, [category]);

  const visibleSeries = filteredSeries.slice(0, displayCount);
  const hasMore = displayCount < filteredSeries.length;

  const handleShowMore = () => {
    setDisplayCount(prev => prev + CARDS_PER_PAGE);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setDisplayCount(CARDS_PER_PAGE);
  };

  return (
    <main className="min-h-screen bg-background text-white">
      <ScrollToTop />
      <div className="mx-auto max-w-7xl p-4 md:p-6">
        <h1 className="mb-4 text-3xl font-bold">ប្រភេទរឿង</h1>

          {/* <h2>ប្រភេទរឿង</h2> */}
        <div className="mb-4 space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-2">
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => handleCategoryChange(item)}
                className={`cursor-pointer rounded-xl px-2 py-2 text-sm font-semibold ${category === item
                    ? "bg-(--primary) text-white"
                    : "bg-zinc-900 text-zinc-300 hover:text-white"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {visibleSeries.map((series) => (
            <PosterCard
              key={series.id}
              series={series}
              index={visibleSeries.indexOf(series)}
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
      </div>
    </main>
  );
}
