import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CardsResponse,
  ClanDetails,
  ClanResponse,
  FeaturedClansResponse,
  LocationResponse,
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

  getClanByTag(clanTag: string): Observable<ClanDetails> {
    return this.http.get<ClanDetails>(`/clans/${encodeURIComponent(clanTag)}`);
  }

  getLocations(): Observable<LocationResponse> {
    return this.http.get<LocationResponse>(`/locations`);
  }
}
