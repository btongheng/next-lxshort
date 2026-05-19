"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ href, children, className = "" }) {
  const pathname = usePathname();
  const isRoot = href === "/";
  const isActive = pathname === href || (!isRoot && pathname?.startsWith(href));

  const base = "transition ";
  const activeClass = "text-primary font-semibold";
  const inactiveClass = "text-zinc-300 hover:text-white";

  return (
    <Link href={href} className={`${base} ${isActive ? activeClass : inactiveClass} ${className}`.trim()}>
      {children}
    </Link>
  );
}
