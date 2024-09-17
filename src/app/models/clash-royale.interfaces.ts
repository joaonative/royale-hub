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
  location: Location;
  requiredTrophies: number;
  donationsPerWeek: number;
  clanChestLevel: number;
  clanChestMaxLevel: number;
  members: number;
}

export interface ClanDetails extends Clan {
  description: string;
  memberList: {
    tag: string;
    name: string;
    role: string;
    lastSeen: string;
    expLevel: number;
    trophies: number;
    arena: {
      id: number;
      name: string;
    };
    clanRank: number;
    previousClanRank: number;
    donations: number;
    donationsRecived: number;
    clanChestPoints: number;
  }[];
}

export interface Location {
  id: number;
  name: string;
  isCountry: boolean;
}

export interface Response<T> {
  items: T[];
}

export type LocationResponse = Response<Location>;

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
