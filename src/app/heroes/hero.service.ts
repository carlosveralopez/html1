import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Hero } from "./hero";
import { MarvelData } from "../marvel/response";
import { MarvelService } from "../marvel/marvel.service";
import * as helper from "../marvel/helper";

@Injectable()
export class HeroService {
  constructor(private marvelService: MarvelService) {}

  getHeroesRand(
    limit: number = 20,
    offset: number = 0
  ): Observable<MarvelData<Hero>> {
    return this.marvelService
      .getHeroesRand(limit, offset)
      .pipe(map(response => response.data));
  }

  getHero(id: number): Observable<Hero> {
    return this.marvelService
      .getHero(id)
      .pipe(map(response => response.data.results[0]));
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
