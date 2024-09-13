export interface IconUrls {
  medium: string;
  evolutionMedium: string;
}

export interface Card {
  name: string;
  id: number;
  maxLevel: number;
  maxEvolutionLevel: number;
  elixirCost: number;
  iconUrls: IconUrls;
  rarity: string;
}

export interface CardsResponse {
  items: Card[];
}
