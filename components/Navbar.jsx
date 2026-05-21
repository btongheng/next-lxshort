"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { Search, X } from "lucide-react";
import { useSearch } from "./SearchProvider";

export default function Navbar() {
  const { modalSearch, setModalSearch, setIsModalOpen } = useSearch();
  return (
    <header className="sticky top-0 z-50 border-b border-(--border-color) bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-4 text-xl font-bold text-white">
          <Link href="/">
            <Image
              src="/LXshort.svg"
              alt="LXShort Logo"
              width={120}
              height={40}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-4 md:gap-6 text-sm text-zinc-300">
            <NavLink href="/">ទំព័រដើម</NavLink>
            <NavLink href="/browse">ភាពយន្ត</NavLink>
            <NavLink href="/movies">Movies</NavLink>
            <NavLink href="/about">About</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="[@media(max-width:375px)]:w-48 [@media(width<=320px)]:w-38 sm:w-52 md:w-72 ">
            {/* <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                placeholder="ស្វែងរករឿង..."
                value={modalSearch}
                onChange={(e) => {
                  setModalSearch(e.target.value);
                  setIsModalOpen(true);
                }}
                onFocus={() => setIsModalOpen(true)}
                className="w-full rounded-xl border hover:border-zinc-800 focus:border-zinc-800 border-zinc-900 bg-zinc-900 py-2 pl-10 pr-4 text-sm outline-none"
              />
            </div> */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />

              <input
                type="text"
                placeholder="ស្វែងរករឿង..."
                value={modalSearch}
                onChange={(e) => {
                  setModalSearch(e.target.value);
                  setIsModalOpen(true);
                }}
                onFocus={() => setIsModalOpen(true)}
                
                className="w-full rounded-xl border hover:border-zinc-800 focus:border-zinc-800 border-zinc-900 bg-zinc-900 py-2 pl-10 pr-10 text-sm outline-none"
              />

              {/* Only show the button if there is text in the input */}
              {modalSearch && (
                <button
                  type="button"
                  onClick={() => setModalSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-300 transition-colors"
                  aria-label="Clear input"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}