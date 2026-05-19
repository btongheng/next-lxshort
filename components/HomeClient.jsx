"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import VideoPlayer from "@/components/VideoPlayer";
import ChannelCard from "@/components/ChannelCard";
import { useSearch } from "./SearchProvider";

export default function HomeClient({ initialChannels }) {
  const [selectedChannel, setSelectedChannel] = useState(initialChannels[0]);

  const filteredChannels = useMemo(() => {
    return initialChannels;
  }, [initialChannels]);

  return (
    <main className="min-h-screen bg-black text-white">
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
            {filteredChannels.map((channel) => (
              <ChannelCard
                key={channel.id}
                channel={channel}
                onSelect={setSelectedChannel}
              />
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
