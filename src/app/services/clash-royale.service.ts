import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClashRoyaleService {
  private apiUrl = 'https://api.clashroyale.com/v1';

  constructor(private http: HttpClient) {}

  getCards(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cards`);
  }
}
