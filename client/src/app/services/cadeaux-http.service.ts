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

  /**
   * Méthode Read du CRUD, méthode  pour récupérer une liste d'objet Cadeau 
   * @returns liste d'objet Cadeaux depuis la bdd via le back
   */
  getAll(): Observable<Cadeau[]> {
    return this.http.get<Cadeau[]>(`${environment.apiUrl}`);
  }

  /**
   * Méthode Create du CRUD, méthode pour créer un cadeau et l'ajouter en base
   * @param cadeau 
   * @returns le cadeau créé
   */
  create(cadeau: Cadeau): Observable<Cadeau> {
    return this.http.post<Cadeau>(`${environment.apiUrl}`, cadeau);
  }

  /**
   * Méthode Delete du CRUD, méthode pour supprimer un cadeau de 
   * @param id 
   * Id de l'objet Cadeau à supprimer de la Bdd
   * @returns supprime le cadeau identifié
   */
  delete(id: string): Observable<Cadeau> {
    return this.http.delete<Cadeau>(`${environment.apiUrl}/${id}`);
  }

}
