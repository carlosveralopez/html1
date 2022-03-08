import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Hero } from "../heroes/hero";
import { MarvelData } from "../marvel/response";
import { MarvelService } from "../marvel/marvel.service";
import * as helper from "../marvel/helper";

@Injectable()
export class SearchService {
  constructor(private marvelService: MarvelService) {}

  searchHeroes(
    term = ""
  ): Observable<MarvelData<Hero>> {
    return this.marvelService
      .searchHeroes(term)
      .pipe(map(response => response.data));
  }

  

  thumbnailUrl(hero: Hero): string {
    const { path, extension } = hero.thumbnail;
    return `${path}/standard_fantastic.${extension}`;
  }

  imageUrl(hero: Hero): string {
    const { path, extension } = hero.thumbnail;
    return `${path}/portrait_uncanny.${extension}`;
  }

 
}
