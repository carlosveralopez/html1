import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Comic } from "./comic";
import { ComicService } from "./comic.service";

@Component({
  templateUrl: "./comic-detail.component.html",
  styleUrls: ["./comic-detail.component.css"]
})
export class ComicDetailComponent implements OnInit {
  comic: Comic | null = null;

  constructor(
    private route: ActivatedRoute,
    private comicService: ComicService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id != null) {
      this.comicService.getComic(+id).subscribe(comic => (this.comic = comic));
    } else {
      // TODO: navigate not found page
    }
  }
}
