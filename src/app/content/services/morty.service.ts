import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MortyService {

  constructor(private http: HttpClient) { }

  fetchCharacters(page: number): Observable<any> {
    return this.http.get(`https://rickandmortyapi.com/api/character?page=${page}`)
  }

  fetchCharacter(id: number): Observable<any> {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
  }

}
