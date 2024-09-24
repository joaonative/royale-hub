import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  BattleLog,
  CardsResponse,
  ClanDetails,
  ClanResponse,
  FeaturedClansResponse,
  FeaturedPlayerResponse,
  LocationResponse,
  Player,
  SearchClan,
  UpcomingChestsResponse,
} from '../models/clash-royale.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ClashRoyaleService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<CardsResponse> {
    return this.http.get<CardsResponse>(`/cards`);
  }

  getFeaturedClans(): Observable<FeaturedClansResponse> {
    return this.http.get<FeaturedClansResponse>(`/clans/featured`);
  }

  getFeaturedPLayers(): Observable<FeaturedPlayerResponse> {
    return this.http.get<FeaturedPlayerResponse>(`/players/featured`);
  }

  getClanByTag(clanTag: string): Observable<ClanDetails> {
    return this.http.get<ClanDetails>(`/clans/${encodeURIComponent(clanTag)}`);
  }

  searchClan(formData: SearchClan): Observable<ClanResponse> {
    const params = buildHttpParams({
      name: formData.term,
      locationId: formData.location,
      minMembers: formData.minMembers,
      maxMembers: formData.maxMembers,
      minScore: formData.minScore,
      maxScore: formData.maxScore,
      limit: '9',
    });
    return this.http.get<ClanResponse>(`/clans/search`, { params });
  }

  searchPlayer(playerTag: string): Observable<Player> {
    return this.http.get<Player>(`/players/${encodeURIComponent(playerTag)}`);
  }

  getUpcomingChests(playerTag: string): Observable<UpcomingChestsResponse> {
    return this.http.get<UpcomingChestsResponse>(
      `/players/chests/${encodeURIComponent(playerTag)}`
    );
  }

  getBattleLog(playerTag: string): Observable<BattleLog[]> {
    return this.http.get<BattleLog[]>(
      `/players/battlelog/${encodeURIComponent(playerTag)}`
    );
  }

  getLocations(): Observable<LocationResponse> {
    return this.http.get<LocationResponse>(`/locations`);
  }
}

function buildHttpParams(data: { [key: string]: any }) {
  let params = new HttpParams();

  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (value !== undefined && value !== null && value !== '') {
      params = params.set(key, value.toString());
    }
  });

  return params;
}
