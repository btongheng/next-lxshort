"use client";

import { Home, Film, Clapperboard, Info } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "ទំព័រដើម", icon: Home },
    { href: "/series", label: "ភាពយន្ត", icon: Film },
    { href: "/movies", label: "Movies", icon: Clapperboard },
    { href: "/about", label: "About", icon: Info },
  ];

  const isActive = (href) => {
    const isRoot = href === "/";
    return pathname === href || (!isRoot && pathname?.startsWith(href));
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-md z-40">
      <div className="flex justify-around items-center">
        {links.map((link) => {
          const Icon = link.icon;
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center flex-1 py-3 px-2 transition ${
                active
                  ? "text-primary border-t-2 border-primary"
                  : "text-zinc-400 hover:text-primary border-t-2 border-transparent hover:border-primary"
              }`}
            >
              <Icon className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
