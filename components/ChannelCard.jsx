import Image from "next/image";

export default function ChannelCard({ channel, onSelect }) {
  const thumbnail =
    channel?.thumbnail?.trim()
      ? channel.thumbnail
      : "https://via.placeholder.com/800x450?text=No+Image";

  const year = channel?.year || new Date().getFullYear();
  const type = channel?.type || "Movie";
  const duration = channel?.duration || "120 min";

  return (
    <button
      onClick={() => onSelect(channel)}
      className="cursor-pointer group relative w-full max-w-52.5 mb-2 overflow-hidden transition duration-300 hover:scale-101"
    >
      {/* Image Container */}
      <div className="relative aspect-9/13 w-full overflow-hidden object-fill rounded-lg bg-zinc-900">
        <Image
          loading="lazy"
          src={thumbnail}
          alt={channel?.name || "Channel"}
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
      <div className="mt-2 space-y-1">
        {/* <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span>{year}</span>
          <span>•</span>
          <span>{type}</span>
          <span>•</span>
          <span>{duration}</span>
        </div> */}

        <h2 className="text-left line-clamp-1 font-semibold text-white sm:text-sm text-xs transition duration-300 group-hover:text-(--primary)">
          {channel?.name || "Unknown Channel"}
        </h2>
      </div>
    </button>
  );
}