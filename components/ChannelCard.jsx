import Image from "next/image";

export default function ChannelCard({ channel, onSelect }) {
  const thumbnail =
    channel?.thumbnail?.trim()
      ? channel.thumbnail
      : "https://via.placeholder.com/800x450?text=No+Image";

  return (
    <button
      onClick={() => onSelect(channel)}
      className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 text-left transition hover:bg-zinc-800"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          loading="eager"
          src={thumbnail}
          alt={channel?.name || "Channel"}
          fill
          unoptimized
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-white">
          {channel?.name || "Unknown Channel"}
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          {channel?.category || "Live TV"}
        </p>
      </div>
    </button>
  );
}