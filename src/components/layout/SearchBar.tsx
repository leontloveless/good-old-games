"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <input
        type="text"
        placeholder="Search games..."
        className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
        aria-label="Search games"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-indigo-600"
        aria-label="Submit search"
      >
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
