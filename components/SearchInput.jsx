"use client"
import React from 'react'
import { Search, X } from "lucide-react";
import { useSearch } from './SearchProvider';

export default function SearchInput() {
      const { modalSearch, setModalSearch, setIsModalOpen } = useSearch();

    return (
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
    )
}
