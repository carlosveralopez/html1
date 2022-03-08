import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { ComicService } from "./comic.service";
import { Comic } from "./comic";

@Component({
  selector: "app-comics",
  templateUrl: "./comics.component.html",
  styleUrls: ["../page-panel.css", "./comics.component.css"]
})
export class ComicsComponent implements OnInit {
  comics: Comic[] = [];
  pageSize: number = 10;
  currentPage: number | null = null;
  totalPageCount: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private comicService: ComicService
  ) {}

  ngOnInit() {
    this.route.queryParamMap
      .pipe(
        switchMap(params => {
          const page = +(params.get("page") || "1");
          const offset = (page - 1) * this.pageSize;
          return this.comicService.getComics(this.pageSize, offset);
        })
      )
      .subscribe(({ results, total, offset }) => {
        this.comics = results;
        this.currentPage = offset / this.pageSize + 1;
        this.totalPageCount = Math.ceil(total / this.pageSize);
      });
  }

  goToNextPage() {
    if (this.currentPage != null) {
      this.goToPage(this.currentPage + 1);
    }
  }

  goToPrevPage() {
    if (this.currentPage != null) {
      this.goToPage(this.currentPage - 1);
    }
  }

  private goToPage(page: number | string) {
    this.router.navigate(["/comics"], { queryParams: { page } });
  }
}
