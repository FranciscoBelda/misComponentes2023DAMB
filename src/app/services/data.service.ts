import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Componente} from "../common/interfaces";
import {Usuario} from "../common/users";
import {environment} from "../../environments/environment";
import {ApiPeliculas} from "../common/peliculas";
import {Album} from "../common/albums";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getComponentesMenu(): Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  getUsers():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(
      'https://jsonplaceholder.typicode.com/users');
  }
  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(
      'https://jsonplaceholder.typicode.com/albums');
  }

  loadMovies(page: number): Observable<ApiPeliculas>{
    return this.http.get<ApiPeliculas>(
      `${environment.baseUrl}movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }

  getOtherUsers() {
    return this.http.get<any[]>('https://randomuser.me/api/?results=100&seed=Progresa');
  }
}
