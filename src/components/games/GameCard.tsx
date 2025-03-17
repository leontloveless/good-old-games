import Link from "next/link";
import Image from "next/image";
import { Game } from "@/lib/types";

interface GameCardProps {
  game: Game;
  showNewBadge?: boolean;
}

const GameCard = ({ game, showNewBadge = false }: GameCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link
        href={`/game/${game.slug}`}
        className="block relative"
        aria-label={`Play ${game.title}`}
      >
        <Image
          src={game.imageUrl}
          alt={game.title}
          width={300}
          height={200}
          className="w-full h-40 object-fill"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-yellow-400 text-gray-900 font-bold py-1 px-3 rounded-full text-sm">
            PLAY
          </span>
        </div>
        {showNewBadge && game.isNew && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            NEW
          </div>
        )}
      </Link>
      <div className="p-3">
        <h3 className="font-semibold text-gray-800 mb-1">{game.title}</h3>
        <div className="flex justify-between items-center">
          <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
            {game.category}
          </span>
          <div className="flex items-center text-yellow-500">
            <i className="fas fa-star"></i>
            <span className="text-xs text-gray-600 ml-1">
              {game.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
