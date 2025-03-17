"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FeaturedGame } from "@/lib/types";

interface HeroSectionProps {
  featuredGames: FeaturedGame[];
}

const HeroSection = ({ featuredGames }: HeroSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredGames.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredGames.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-gradient-to-r from-indigo-800 to-purple-700 text-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Play Awesome HTML5 Games
        </h1>
        <p className="text-xl text-center mb-8">
          Thousands of free games at your fingertips. No login required!
        </p>

        {featuredGames.length > 0 && (
          <div className="relative overflow-hidden rounded-lg shadow-xl max-w-5xl mx-auto">
            <div className="flex md:space-x-4 p-4 bg-black bg-opacity-30 rounded-lg relative">
              {/* Mobile Carousel (one slide at a time) */}
              <div className="w-full md:hidden">
                <div className="relative group">
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    <Image
                      src={featuredGames[currentIndex].imageUrl}
                      alt={featuredGames[currentIndex].title}
                      width={400}
                      height={225}
                      className="rounded-lg w-full h-44 object-fill"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <Link
                      href={`/game/${featuredGames[currentIndex].slug}`}
                      className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      PLAY NOW
                    </Link>
                  </div>
                  <h3 className="text-lg font-semibold mt-2">
                    {featuredGames[currentIndex].title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {featuredGames[currentIndex].category}
                  </p>
                </div>
              </div>

              {/* Desktop Carousel (3 slides visible) */}
              <div className="hidden md:flex md:space-x-4 w-full">
                {featuredGames.map((game, index) => {
                  // Calculate visible indices (current, next, next+1)
                  const visibleIndices = [
                    currentIndex,
                    (currentIndex + 1) % featuredGames.length,
                    (currentIndex + 2) % featuredGames.length,
                  ];

                  return visibleIndices.includes(index) ? (
                    <div
                      key={game.id}
                      className="w-1/3 flex-shrink-0 relative group"
                      style={{ minWidth: "calc(33.333% - 0.75rem)" }}
                    >
                      <div className="aspect-w-16 aspect-h-9 w-full">
                        <Image
                          src={game.imageUrl}
                          alt={game.title}
                          width={400}
                          height={225}
                          className="rounded-lg w-full h-44 object-fill"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <Link
                          href={`/game/${game.slug}`}
                          className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          PLAY NOW
                        </Link>
                      </div>
                      <h3 className="text-lg font-semibold mt-2">
                        {game.title}
                      </h3>
                      <p className="text-sm text-gray-200">{game.category}</p>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            {/* Carousel Controls - Improved */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-3 text-white shadow-lg z-10 transition-all duration-200"
              aria-label="Previous game"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full p-3 text-white shadow-lg z-10 transition-all duration-200"
              aria-label="Next game"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Pagination Indicators */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-10">
              {featuredGames.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-white w-4" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
