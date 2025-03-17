import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGamesByCategory } from "@/lib/games";
import { getCategories } from "@/lib/categories";
import GameCard from "@/components/games/GameCard";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categories = await getCategories();
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found | Good Old Games",
    };
  }

  return {
    title: `${category.name} Games | Good Old Games`,
    description: `Play the best free ${category.name} games online at Good Old Games. No downloads required, play instantly in your browser!`,
    openGraph: {
      title: `${category.name} Games | Good Old Games`,
      description: `Play the best free ${category.name} games online at Good Old Games. No downloads required, play instantly in your browser!`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  // Get category details
  const categories = await getCategories();
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    notFound();
  }

  // Get games for this category
  const games = await getGamesByCategory(slug);

  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            {category.name} Games{" "}
            <span className="text-gray-600">({games.length})</span>
          </h1>
          <p className="text-gray-600 mt-2">
            Browse our collection of free {category.name.toLowerCase()} games
            that you can play online.
          </p>
        </div>

        {games.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-600">No games found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
