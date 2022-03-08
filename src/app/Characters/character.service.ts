import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Hero } from "./character";
import { MarvelData } from "../marvel/response";
import { MarvelService } from "../marvel/marvel.service";
import * as helper from "../marvel/helper";

@Injectable()
export class CharacterService {
  constructor(private marvelService: MarvelService) {}

  getHeroes(
    limit: number = 20,
    offset: number = 0
  ): Observable<MarvelData<Hero>> {
    return this.marvelService
      .getHeroes(limit, offset)
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

  detailLink(hero: Hero): string {
    return helper.detailLink(hero);
  }

  wikiLink(hero: Hero): string {
    return helper.wikiLink(hero);
  }
}
