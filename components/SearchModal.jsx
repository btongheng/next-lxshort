"use client";

import { useMemo } from "react";
import { X } from "lucide-react";
import { useSearch } from "./SearchProvider";
import channels from "@/data/channels";
import Image from "next/image";

export default function SearchModal({ isOpen, onClose, onSelectChannel }) {
  const { modalSearch } = useSearch();

  const filteredChannels = useMemo(() => {
    if (!modalSearch.trim()) return [];
    return channels.filter((channel) =>
      channel?.name?.toLowerCase().includes(modalSearch.toLowerCase())
    );
  }, [modalSearch]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-2xl p-4 pt-24">
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

          <div className="max-h-96 overflow-y-auto">
            {filteredChannels.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 lg:grid-cols-4">
                {filteredChannels.map((channel) => {
                  const thumbnail =
                    channel?.thumbnail?.trim()
                      ? channel.thumbnail
                      : "https://via.placeholder.com/800x450?text=No+Image";

                  return (
                    <button
                      key={channel.id}
                      onClick={() => {
                        onSelectChannel(channel);
                        onClose();
                      }}
                      className="overflow-hidden rounded-lg border border-(--border-color) bg-zinc-900 text-left transition hover:bg-zinc-800"
                    >
                      <div className="relative h-24 w-full overflow-hidden">
                        <Image
                          loading="eager"
                          src={thumbnail}
                          alt={channel?.name || "Channel"}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div className="p-2">
                        <h3 className="truncate text-xs font-semibold text-white">
                          {channel?.name || "Unknown Channel"}
                        </h3>
                        <p className="truncate text-xs text-zinc-400">
                          {channel?.category || "Live TV"}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
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
