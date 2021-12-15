import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadeau } from '../models/cadeau';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CadeauxHTTPService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Cadeau[]> {
    return this.http.get<Cadeau[]>(`${environment.apiUrl}`);
  }

  create(cadeau: Cadeau): Observable<Cadeau> {
    return this.http.post<Cadeau>(`${environment.apiUrl}`, cadeau);
  }
  delete(id: string): Observable<Cadeau> {
    return this.http.delete<Cadeau>(`${environment.apiUrl}/${id}`);
  }

}
