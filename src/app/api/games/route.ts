import { NextRequest, NextResponse } from "next/server";
import {
  getGames,
  getPopularGames,
  getNewGames,
  searchGames,
} from "@/lib/games";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const type = searchParams.get("type");
  const limit = searchParams.get("limit")
    ? parseInt(searchParams.get("limit")!)
    : undefined;

  try {
    let games;

    if (query) {
      // Handle search query
      games = await searchGames(query);
    } else if (type === "popular") {
      // Get popular games
      games = await getPopularGames(limit);
    } else if (type === "new") {
      // Get new games
      games = await getNewGames(limit);
    } else {
      // Get all games
      games = await getGames();
    }

    return NextResponse.json({ games });
  } catch (error: any) {
    console.error("Failed to fetch games:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch games" },
      { status: 500 }
    );
  }
}
