"use client";

import { createContext, useContext, useState } from "react";

const SearchContext = createContext(undefined);

export function SearchProvider({ children }) {
  const [modalSearch, setModalSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SearchContext.Provider value={{ modalSearch, setModalSearch, isModalOpen, setIsModalOpen }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within SearchProvider");
  return ctx;
}
