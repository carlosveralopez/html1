import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";
import { MarvelResponse, MarvelData } from "./response";
import { Hero } from "../heroes/hero";
import { Comic } from "../comics/comic";


const headers = new HttpHeaders({ "Content-Type": "application/json" });

@Injectable()
export class MarvelService {
  private marvelApiUrl = "https://gateway.marvel.com";
  private apiKey = environment.apiKey;
  

  constructor(private http: HttpClient) {}

  getHeroes(limit: number, offset: number): Observable<MarvelResponse<Hero>> {
    const path = "/v1/public/characters"
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams()
      .set("limit", `${limit}`)
      .set("offset", `${offset}`)
      .set("orderBy", "-modified")
      .set("apikey", this.apiKey);
    return this.http.get<MarvelResponse<Hero>>(url, { headers, params });
  }

  random(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGIJLMNOPRSTUVYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

  getHeroesRand(limit: number, offset: number): Observable<MarvelResponse<Hero>> {
    const path = "/v1/public/characters?nameStartsWith="+this.random(1);
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams()
      .set("limit", `${limit}`)
      .set("offset", `${offset}`)
      .set("orderBy", "-modified")
      .set("apikey", this.apiKey);
    return this.http.get<MarvelResponse<Hero>>(url, { headers, params });
  }

  searchHeroes(term: string): Observable<MarvelResponse<Hero>>{
    const path = "/v1/public/characters?nameStartsWith=";
    const url = `${this.marvelApiUrl}${path}${term}`;
    const params = new HttpParams()
      .set("apikey", this.apiKey);
    return this.http.get<MarvelResponse<Hero>>(url, { headers, params });
      
  }

  getHero(id: number): Observable<MarvelResponse<Hero>> {
    const path = `/v1/public/characters/${id}`;
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams().set("apikey", this.apiKey);
    return this.http.get<MarvelResponse<Hero>>(url, { headers, params });
  }

  getComics(limit: number, offset: number): Observable<MarvelResponse<Comic>> {
    const path = "/v1/public/comics";
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams()
      .set("limit", `${limit}`)
      .set("offset", `${offset}`)
      .set("orderBy", "-issueNumber")
      .set("apikey", this.apiKey);
    return this.http.get<MarvelResponse<Comic>>(url, { headers, params });
  }

  getComic(id: number): Observable<MarvelResponse<Comic>> {
    const path = `/v1/public/comics/${id}`;
    const url = `${this.marvelApiUrl}${path}`;
    const params = new HttpParams().set("apikey", this.apiKey);
    return this.http.get<MarvelResponse<Comic>>(url, { headers, params });
  }

 

 /* searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }*/



}
