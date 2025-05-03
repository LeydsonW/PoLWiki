// Pokemon types
export interface Pokemon {
  id: number;
  name: string;
  image: string;
  description: string;
  types: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefense: number;
    speed: number;
  };
  abilities: {
    name: string;
    description: string;
  }[];
  locations: {
    name: string;
    minLevel: number;
    maxLevel: number;
  }[];
  relatedQuests: {
    id: number;
    name: string;
    description: string;
  }[];
}

// Map types
export interface Map {
  id: number;
  name: string;
  image: string;
  region: string;
  location: string;
  description: string;
  tags: string[];
  pokemonSpawns: number[]; // Pokemon IDs
}

// Quest types
export interface Quest {
  id: number;
  name: string;
  description: string;
  status: 'New' | 'Popular' | 'Limited';
  difficulty: number; // 1-5 stars
  estimatedTime: string;
  rewards: string[];
  requiredLevel: number;
  requiredItems: string[];
  steps: {
    description: string;
    completed?: boolean;
  }[];
}

// Skin types
export interface Skin {
  id: number;
  name: string;
  image: string;
  description: string;
  creator: string;
  premium: boolean;
  price: number | null;
  rating: number; // 1-5 stars
  releaseDate: string;
}

// System types
export interface System {
  id: number;
  name: string;
  description: string;
  keyFeatures: string[];
}

// News types
export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content?: string;
  date: string;
  image?: string;
  category: string;
  author: string;
}