import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CardsResponse,
  ClanDetails,
  ClanResponse,
  FeaturedClansResponse,
  LocationResponse,
  SearchClan,
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
