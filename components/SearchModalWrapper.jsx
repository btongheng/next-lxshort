"use client";

import { useRouter } from "next/navigation";
import { useSearch } from "./SearchProvider";
import SearchModal from "./SearchModal";

export default function SearchModalWrapper() {
  const { isModalOpen, setIsModalOpen } = useSearch();
  const router = useRouter();

  const handleSelectSeries = (series) => {
    router.push(`/series/${series.id}`);
    setIsModalOpen(false);
  };

  return (
    <SearchModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSelectSeries={handleSelectSeries}
    />
  );
}
