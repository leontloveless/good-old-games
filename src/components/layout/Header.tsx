"use client";

import { useState } from "react";
import Link from "next/link";
// import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-600 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Good Old Games Home"
          >
            <span className="text-2xl font-bold text-white">
              Good<span className="text-yellow-300">Old</span>Games
            </span>
          </Link>

          {/* Search Bar - Medium screens and up */}
          {/* <div className="hidden md:flex flex-1 max-w-md mx-6"> */}
          {/* <SearchBar /> */}
          {/* </div> */}

          {/* Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/categories"
              className="text-white hover:text-yellow-300 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/top-games"
              className="text-white hover:text-yellow-300 transition-colors"
            >
              Top Games
            </Link>
            <Link
              href="/new-games"
              className="text-white hover:text-yellow-300 transition-colors"
            >
              New Games
            </Link>
          </nav> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Search - Only on mobile */}
        {/* <div className="mt-3 md:hidden">
          <SearchBar />
        </div> */}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
};

export default Header;
