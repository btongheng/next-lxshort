import React from 'react'
import Image from "next/image";
import Link from "next/link";
import MetaPill from "./MetaPill";

export default function PosterCard({ series, index }) {

    const thumbnail =
        series?.thumbnail?.trim()
            ? series.thumbnail
            : "https://via.placeholder.com/800x450?text=No+Image";


    return (
        <div><Link href={`/series/${series.id}`} className="group block min-w-0">
            <div className="relative aspect-2/3 overflow-hidden rounded-lg bg-zinc-900">
                <Image
                    src={thumbnail}
                    alt={series.name || "Series poster"}
                    fill
                    unoptimized
                    className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute w-full px-2 top-2 flex justify-between items-center">
                    <span className="rounded-md bg-(--primary) px-1 py-0.5 text-[10px] font-semibold text-white">
                        HD
                    </span>
                    <MetaPill>{series.category || "Series"}</MetaPill>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>

            <div className="mt-2 space-y-1">
                <div className="flex items-center justify-between text-[10px] text-zinc-500">
                    <span>{2026}</span>
                    {/* <span>EP {String((index % 12) + 1).padStart(2, "0")}</span> */}
                </div>
                <h3 className="line-clamp-2 text-xs font-semibold leading-snug text-zinc-100 transition group-hover:text-(--primary) sm:text-sm">
                    {series.name}
                </h3>
            </div>
        </Link></div>
    )
}
