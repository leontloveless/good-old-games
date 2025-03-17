import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import GameSection from "@/components/home/GameSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import GameCard from "@/components/games/GameCard";
import {
  getPopularGames,
  getNewGames,
  getFeaturedGames,
  getGames,
} from "@/lib/games";
import { getCategories } from "@/lib/categories";

export const metadata: Metadata = {
  title: "Good Old Games - Play Free HTML5 Games Online",
  description:
    "Play thousands of free HTML5 games online at Good Old Games. No login required, just click and play your favorite retro and classic games instantly!",
  openGraph: {
    title: "Good Old Games - Play Free HTML5 Games Online",
    description:
      "Play thousands of free HTML5 games online at Good Old Games. No login required, just click and play your favorite retro and classic games instantly!",
    url: "https://good-old-games.com",
    siteName: "Good Old Games",
    type: "website",
  },
};

export default async function Home() {
  // Fetch data in parallel for better performance
  const [featuredGames, popularGames, newGames, categories, allGames] =
    await Promise.all([
      getFeaturedGames(),
      getPopularGames(5), // Limit to 5 games
      getNewGames(5), // Limit to 5 games
      getCategories(),
      getGames(), // Get all games
    ]);

  return (
    <main>
      <HeroSection featuredGames={featuredGames} />
      <CategoriesSection categories={categories} />
      <GameSection
        title="Popular Games"
        games={popularGames}
        viewAllLink="/popular"
        viewAllText="View All"
        bgColor="bg-gray-100"
      />
      <GameSection
        title="New Games"
        games={newGames}
        viewAllLink="/new-games"
        viewAllText="View All"
        bgColor="bg-white"
        showNewBadge
      />

      {/* Display all games */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              All Games ({allGames.length})
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {allGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </main>
  );
}
