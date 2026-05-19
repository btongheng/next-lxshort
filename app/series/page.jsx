"use client";

import { useMemo, useState } from "react";
import channels from "@/data/channels";
import ChannelCard from "@/components/ChannelCard";


export default function SeriesPage() {
  const [category, setCategory] = useState("រឿងគ្រប់ប្រភេទ");

  const categories = useMemo(() => {
    return ["រឿងគ្រប់ប្រភេទ", ...new Set(channels.map((c) => c.category))];
  }, []);

  const filteredChannels = useMemo(() => {
    return channels.filter((channel) => {
      const matchesCategory =
        category === "រឿងគ្រប់ប្រភេទ" || channel?.category === category;
      return matchesCategory;
    });
  }, [category]);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl p-4 md:p-6">
        <h1 className="mb-8 text-3xl font-bold">Series</h1>

        <div className="mb-8 space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-xl px-4 py-2 text-sm ${category === item
                    ? "bg-white text-black"
                    : "bg-zinc-900 text-zinc-300"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredChannels.map((channel) => (
            <ChannelCard
              key={channel.id}
              channel={channel}
            />
            
          ))}
        </div>
      </div>
    </main>
  );
}
