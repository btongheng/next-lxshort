"use client";

import { useMemo, useEffect } from "react";
import { X } from "lucide-react";
import { useSearch } from "./SearchProvider";
import movieSeries from "@/data/movieSeries";
import Image from "next/image";

export default function SearchModal({ isOpen, onClose, onSelectSeries }) {
  const { modalSearch } = useSearch();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const filteredSeries = useMemo(() => {
    if (!modalSearch.trim()) return [];
    return movieSeries.filter((series) =>
      series?.name?.toLowerCase().includes(modalSearch.toLowerCase())
    );
  }, [modalSearch]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTouchEnd = (e) => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
      onTouchEnd={handleTouchEnd}
    >
      <div className="mx-auto max-w-2xl p-4 pt-22">
        <div className="rounded-2xl border border-(--border-color) bg-zinc-950 shadow-2xl">
          <div className="flex items-center justify-between border-b border-(--border-color) p-4">
            <h2 className="text-lg font-semibold text-white">លទ្ធផល​ស្វែងរក</h2>
            <button
              onClick={onClose}
              className="rounded-lg p-1 hover:bg-zinc-800 transition"
            >
              <X className="h-5 w-5 text-zinc-400" />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
            {filteredSeries.length > 0 ? (
              <>
                <div className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-4">
                  {filteredSeries.map((series) => {
                    const thumbnail =
                      series?.thumbnail?.trim()
                        ? series.thumbnail
                        : "https://via.placeholder.com/800x450?text=No+Image";

                    return (
                      <button
                        key={series.id}
                        onClick={() => {
                          onSelectSeries(series);
                          onClose();
                        }}
                        className="group overflow-hidden rounded text-left"
                      >
                        {/* <div className="relative aspect-2/3 w-full overflow-hidden">
                          <Image
                            loading="eager"
                            src={thumbnail}
                            alt={series?.name || "Series"}
                            fill
                            unoptimized
                            className="object-cover group-hover:scale-101 transition duration-300"
                          />
                        </div>
                        <div className="p-2 bg-linear-to-t from-black/80 to-transparent">
                          <h3 className="line-clamp-2 text-sm font-semibold text-white">
                            {series?.name || "Unknown Series"}
                          </h3>
                        </div> */}
                        <div className="relative aspect-9/13 w-full overflow-hidden object-fill rounded-lg bg-zinc-900">
                          <Image
                            loading="lazy"
                            src={thumbnail}
                            alt={series?.name || "Series"}
                            fill
                            unoptimized
                            className="object-cover transition duration-300"
                          />

                          {/* HD Badge */}
                          <div className="absolute left-2 top-2 rounded bg-(--primary) px-1 py-0.3 text-[10px] font-bold text-white">
                            HD
                          </div>

                          {/* Overlay on Hover */}
                          <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                        </div>

                        {/* Info Section */}
                        <div className="mt-1 space-y-1">
                          {/* <div className="flex items-center gap-2 text-xs text-zinc-400">
                                  <span>{year}</span>
                                  <span>•</span>
                                  <span>{type}</span>
                                  <span>•</span>
                                  <span>{duration}</span>
                                </div> */}

                          <h2 className="text-left line-clamp-1 font-semibold text-white sm:text-sm text-xs transition duration-300 group-hover:text-(--primary)">
                            {series?.name || "Unknown Series"}
                          </h2>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="px-4 pb-6 text-center text-zinc-500 text-sm">
                  <p>គ្មានទិន្នន័យបន្ថែម</p>
                </div>
              </>
            ) : modalSearch.trim() ? (
              <div className="p-8 text-center text-zinc-400">
                <p>មិនមានទិន្នន័យ "{modalSearch}"</p>
              </div>
            ) : (
              <div className="p-8 text-center text-zinc-500">
                <p>ស្វែងរក...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
