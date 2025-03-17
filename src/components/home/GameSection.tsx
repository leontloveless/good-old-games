import Link from "next/link";
import GameCard from "@/components/games/GameCard";
import { Game } from "@/lib/types";

interface GameSectionProps {
  title: string;
  games: Game[];
  viewAllLink: string;
  viewAllText: string;
  bgColor?: string;
  showNewBadge?: boolean;
}

const GameSection = ({
  title,
  games,
  viewAllLink,
  viewAllText,
  bgColor = "bg-white",
  showNewBadge = false,
}: GameSectionProps) => {
  return (
    <section className={`py-10 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <Link
            href={viewAllLink}
            className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
          >
            {viewAllText} <i className="fas fa-chevron-right ml-1"></i>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} showNewBadge={showNewBadge} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSection;
