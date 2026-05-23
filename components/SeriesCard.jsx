import Image from "next/image";
import Link from "next/link";

function MetaPill({ children }) {
  return (
    <span className="rounded-full border border-zinc-700 bg-black/30 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">
      {children}
    </span>
  );
}

export default function SeriesCard({ movieSeries, onSelect }) {
  const thumbnail =
    movieSeries?.thumbnail?.trim()
      ? movieSeries.thumbnail
      : "https://via.placeholder.com/800x450?text=No+Image";

  const handleClick = (e) => {
    if (onSelect) {
      e.preventDefault();
      onSelect(movieSeries);
    }
  };

  

  return (
    <Link href={`/series/${movieSeries?.id}`} className="group block min-w-0">
      <div className="relative aspect-2/3 overflow-hidden rounded-lg bg-zinc-900">
        <Image
          src={thumbnail}
          alt={movieSeries.name || "Series poster"}
          fill
          unoptimized
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 rounded bg-(--primary) px-1.5 py-0.5 text-[9px] font-bold text-white">
          HD
        </span>
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>

      <div className="mt-2 space-y-1">
        <div className="flex items-center justify-between text-[10px] text-zinc-500">
          <span>{2026}</span>
          <MetaPill>{movieSeries.category || "Series"}</MetaPill>
        </div>
        <h3 className="line-clamp-2 text-xs font-semibold leading-snug text-zinc-100 transition group-hover:text-(--primary) sm:text-sm">
          {movieSeries.name}
        </h3>
      </div>
    </Link>
  );
}
