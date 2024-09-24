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

export interface Player {
  tag: string;
  name: string;
  expLevel: number;
  eloRating: number;
  rank: number;
  clan?: {
    tag: string;
    name: string;
    badgeId: number;
  };
  trophies?: number;
  wins?: number;
  losses?: number;
  battleCount?: number;
  arena?: {
    id: number;
    name: string;
  };
  badges?: {
    name: string;
    level: number;
    maxLevel: number;
    progress: number;
    target: number;
    iconUrls: {
      large: string;
    };
  }[];
  currentFavouriteCard?: Card;
  currentDeck?: Card[];
  starPoints?: number;
  expPoints?: number;
  currentPathOfLegendSeasonResult?: {
    leagueNuber: 10;
    trophies: number;
    rank: 16;
  };
}

export interface UpcomingChests {
  index: number;
  name: string;
}

export type UpcomingChestsResponse = Response<UpcomingChests>;

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

export interface SearchClan {
  term: string;
  location: number;
  minMembers: number;
  maxMembers: number;
  minScore: number;
  maxScore: number;
}

export interface SearchPlayer {
  tag: string;
}

export interface Response<T> {
  items: T[];
}

export type LocationResponse = Response<Location>;

export type CardsResponse = Response<Card>;

export type PlayerResponse = Response<Player>;

export type ClanResponse = Response<Clan>;

export interface FeaturedClansResponse {
  northAmerica: ClanResponse;
  southAmerica: ClanResponse;
  asia: ClanResponse;
  oceania: ClanResponse;
  europe: ClanResponse;
  international: ClanResponse;
}

export interface FeaturedPlayerResponse {
  unitedStates: PlayerResponse;
  brazil: PlayerResponse;
  germany: PlayerResponse;
  japan: PlayerResponse;
  china: PlayerResponse;
}

export interface BattleLog {
  type: string;
  battleTime: string;
  isLadderTournament: false;
  arena: {
    id: number;
    name: string;
  };
  gameMode: {
    id: number;
    name: string;
  };
  deckSelection: string;
  team: {
    tag: string;
    name: string;
    startingTrophies: number;
    trophyChange: number;
    crowns: number;
    kingTowerHitPoints: number;
    princessTowersHitPoints: number[];
    cards: Card[];
    supportCards: Card[];
    globalRank: number;
    elixirLeaked: number;
    clan?: {
      tag: string;
      name: string;
      badgeId: number;
    };
  }[];
  opponent: {
    tag: string;
    name: string;
    startingTrophies: number;
    trophyChange: number;
    crowns: number;
    kingTowerHitPoints: number;
    princessTowersHitPoints: number[];
    cards: Card[];
    supportCards: Card[];
    globalRank: number;
    elixirLeaked: number;
    clan?: {
      tag: string;
      name: string;
      badgeId: number;
    };
  }[];
  isHostedMatch: boolean;
  leagueNumber: number;
}
