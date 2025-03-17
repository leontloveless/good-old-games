export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  gameUrl: string;
  category: string;
  categorySlug: string;
  rating: number;
  playCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  releaseDate: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  backgroundColor: string;
  gameCount: number;
}

export interface FeaturedGame extends Game {
  highlightText?: string;
}
