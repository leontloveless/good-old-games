"use client";

import Link from "next/link";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <div className="md:hidden bg-indigo-700 py-4 px-4 shadow-lg">
      <nav className="flex flex-col space-y-4">
        <Link
          href="/categories"
          className="text-white hover:text-yellow-300 transition-colors py-2"
          onClick={onClose}
        >
          Categories
        </Link>
        <Link
          href="/top-games"
          className="text-white hover:text-yellow-300 transition-colors py-2"
          onClick={onClose}
        >
          Top Games
        </Link>
        <Link
          href="/new-games"
          className="text-white hover:text-yellow-300 transition-colors py-2"
          onClick={onClose}
        >
          New Games
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
