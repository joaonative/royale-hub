import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardsResponse } from '../models/clash-royale.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ClashRoyaleService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<any> {
    return this.http.get<any>(`/cards`);
  }
}
