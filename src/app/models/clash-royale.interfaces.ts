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

export interface Clan {
  tag: string;
  name: string;
  type: string;
  badgeId: number;
  clanScore: number;
  clanWarTrophies: number;
  location: {
    id: number;
    name: string;
    isCountry: boolean;
  };
  requiredTrophies: number;
  donationsPerWeek: number;
  clanChestLevel: number;
  clanChestMaxLevel: number;
  members: number;
}

export interface Response<T> {
  items: T[];
}

export type CardsResponse = Response<Card>;

export type ClanResponse = Response<Clan>;

export interface FeaturedClansResponse {
  northAmerica: ClanResponse;
  southAmerica: ClanResponse;
  asia: ClanResponse;
  oceania: ClanResponse;
  europe: ClanResponse;
  international: ClanResponse;
}
