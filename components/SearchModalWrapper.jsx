"use client";

import { useRouter, usePathname } from "next/navigation";
import { useSearch } from "./SearchProvider";
import SearchModal from "./SearchModal";

export default function SearchModalWrapper() {
  const { isModalOpen, setIsModalOpen } = useSearch();
  const router = useRouter();
  const pathname = usePathname();

  const handleSelectChannel = (channel) => {
    if (pathname === "/") {
      window.location.href = "/?selected=" + channel.id;
    } else if (pathname === "/series") {
      window.location.href = "/series?selected=" + channel.id;
    }
  };

  return (
    <SearchModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSelectChannel={handleSelectChannel}
    />
  );
}
