import { Category } from "./types";
import { getGames } from "./games";

// Array of background colors to randomly assign to categories
const backgroundColors = [
  // "bg-blue-500",
  "bg-red-500",
  // "bg-green-500",
  // "bg-yellow-500",
  // "bg-purple-500",
  // "bg-pink-500",
  // "bg-indigo-500",
  // "bg-teal-500",
  // "bg-orange-500",
  // "bg-cyan-500",
];

// Map of category slugs to icons
const categoryIcons: Record<string, string> = {
  arcade: "fas fa-gamepad",
  action: "fas fa-running",
  puzzle: "fas fa-puzzle-piece",
  strategy: "fas fa-chess",
  sports: "fas fa-football-ball",
  adventure: "fas fa-mountain",
  racing: "fas fa-car",
  idle: "fas fa-hourglass-half",
  simulation: "fas fa-desktop",
  // Default icon if not found
  default: "fas fa-dice",
};

export async function getCategories(): Promise<Category[]> {
  // Get all games
  const games = await getGames();

  // Create a map to count games per category
  const categoryMap = new Map<string, { name: string; count: number }>();

  // Extract unique categories and count games
  games.forEach((game) => {
    if (!categoryMap.has(game.categorySlug)) {
      categoryMap.set(game.categorySlug, {
        name: game.category,
        count: 1,
      });
    } else {
      const category = categoryMap.get(game.categorySlug);
      if (category) {
        category.count++;
      }
    }
  });

  // Convert map to array of Category objects
  const categories: Category[] = Array.from(categoryMap.entries()).map(
    ([slug, data], index) => {
      // Get a random color or cycle through the array
      const bgColor = backgroundColors[index % backgroundColors.length];

      return {
        id: String(index + 1),
        name: data.name,
        slug: slug,
        icon: categoryIcons[slug] || categoryIcons.default,
        backgroundColor: bgColor,
        gameCount: data.count,
      };
    }
  );

  // Sort by game count (descending)
  return categories.sort((a, b) => b.gameCount - a.gameCount);
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find((category) => category.slug === slug) || null;
}
