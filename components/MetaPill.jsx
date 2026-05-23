import React from 'react'

export default function MetaPill({ children }) {
  return (
    <div>
    <span className="rounded-full border border-zinc-700 bg-black/30 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">
      {children}
    </span>
    </div>
  )
}
