import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Componente} from "../common/interfaces";
import {Usuario} from "../common/users";
import {environment} from "../../environments/environment";
import {ApiPeliculas} from "../common/peliculas";

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

  loadMovies(page: number): Observable<ApiPeliculas>{
    return this.http.get<ApiPeliculas>(
      `${environment.baseUrl}movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }
}
