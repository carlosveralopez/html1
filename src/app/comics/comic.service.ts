import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { format } from "date-fns";

import { Comic } from "./comic";
import { MarvelData } from "../marvel/response";
import { MarvelService } from "../marvel/marvel.service";
import * as helper from "../marvel/helper";

@Injectable()
export class ComicService {
  constructor(private marvelService: MarvelService) {}

  getComics(
    limit: number = 10,
    offset: number = 0
  ): Observable<MarvelData<Comic>> {
    return this.marvelService
      .getComics(limit, offset)
      .pipe(map(response => response.data));
  }

  getComic(id: number): Observable<Comic> {
    return this.marvelService
      .getComic(id)
      .pipe(map(response => response.data.results[0]));
  }

  thumbnailUrl(comic: Comic): string {
    const { path, extension } = comic.thumbnail;
    return `${path}/portrait_uncanny.${extension}`;
  }

  imageUrl(comic: Comic): string {
    if (0 < comic.images.length) {
      const { path, extension } = comic.images[0];
      return `${path}/portrait_uncanny.${extension}`;
    } else {
      return "";
    }
  }


}
