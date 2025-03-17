import { Metadata } from "next";
import { notFound } from "next/navigation";
import GamePlayer from "@/components/games/GamePlayer";
import { getGameBySlug, getGamesByCategory } from "@/lib/games";
import GameSection from "@/components/home/GameSection";

type GamePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  console.log(`slug: ${slug}`);
  const game = await getGameBySlug(slug);

  if (!game) {
    return {
      title: "Game Not Found | Good Old Games",
    };
  }

  return {
    title: `Play ${game.title} | Good Old Games`,
    description: game.description,
    openGraph: {
      title: `Play ${game.title} | Good Old Games`,
      description: game.description,
      type: "website",
    },
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;

  console.log(`slug: ${slug}`);
  const game = await getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  // Get related games from the same category
  const relatedGames = await getGamesByCategory(game.categorySlug);

  return (
    <main className="py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl font-bold mb-4">{game.title}</h1>

          {/* Game Player */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <GamePlayer game={game} />
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mr-2">
                  {game.category}
                </span>
                <span className="text-yellow-500">
                  <i className="fas fa-star mr-1"></i>
                  {game.rating.toFixed(1)}
                </span>
              </div>
              <div className="text-gray-600">
                <i className="fas fa-gamepad mr-1"></i>
                {game.playCount.toLocaleString()} plays
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700">{game.description}</p>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">How to Play</h3>
                <p>
                  Use your keyboard and mouse to interact with the game. Each
                  game has its own controls and objectives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Games Section */}
        <GameSection
          title="More Games Like This"
          games={relatedGames.filter((g) => g.id !== game.id).slice(0, 5)}
          viewAllLink={`/category/${game.categorySlug}`}
          viewAllText={`More ${game.category} Games`}
          bgColor="bg-gray-100"
        />
      </div>
    </main>
  );
}
