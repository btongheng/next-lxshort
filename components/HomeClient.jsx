"use client";

import { useMemo, useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import ChannelCard from "@/components/ChannelCard";

const CARDS_PER_PAGE = 6;

export default function HomeClient({ initialChannels }) {
  const [selectedChannel, setSelectedChannel] = useState(initialChannels[0]);
  const [displayCount, setDisplayCount] = useState(CARDS_PER_PAGE);

  const filteredChannels = useMemo(() => {
    return initialChannels;
  }, [initialChannels]);

  const visibleChannels = filteredChannels.slice(0, displayCount);
  const hasMore = displayCount < filteredChannels.length;

  const handleShowMore = () => {
    setDisplayCount(prev => prev + CARDS_PER_PAGE);
  };

  return (
    <main className="min-h-screen bg-(--background) text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 md:p-6 lg:grid-cols-3">
        <section className="space-y-4 lg:col-span-2">
          <VideoPlayer stream={selectedChannel?.stream} />

          <div>
            <h1 className="text-2xl font-bold md:text-3xl">
              រឿងថ្មីៗ
            </h1>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {visibleChannels.map((channel) => (
              <ChannelCard
                key={channel.id}
                channel={channel}
                onSelect={setSelectedChannel}
              />
            ))}
          </div>
          
          {hasMore ? (
            <button
              onClick={handleShowMore}
              className="w-full px-4 py-2 bg-(--primary) hover:bg-opacity-80 text-white rounded-lg font-semibold transition duration-300"
            >
              Show More
            </button>
          ) : (
            visibleChannels.length > 0 && (
              <div className="w-full px-4 py-2 text-center text-zinc-400 rounded-lg font-semibold">
                No More Data
              </div>
            )
          )}
        </aside>
      </div>
    </main>
  );
}
