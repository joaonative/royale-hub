import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardsResponse, ClanResponse } from '../models/clash-royale.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ClashRoyaleService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<CardsResponse> {
    return this.http.get<CardsResponse>(`/cards`);
  }

  getFeaturedClans(): Observable<ClanResponse> {
    return this.http.get<ClanResponse>(`/clans/featured`);
  }
}
