import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { Hero } from "./character";
import { CharacterService } from "./character.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./character.component.html",
  styleUrls: ["../page-panel.css", "./character.component.css"]
})
export class CharacterComponent implements OnInit {
  heroes: Hero[] = [];
  pageSize: number = 20;
  currentPage: number | null = null;
  totalPageCount: number | null = null;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.route.queryParamMap
      .pipe(
        switchMap(params => {
          const page = +(params.get("page") || "1");
          const offset = (page - 1) * this.pageSize;
          return this.characterService.getHeroes(this.pageSize, offset);
        })
      )
      .subscribe(({ results, total, offset }) => {
        this.heroes = results;
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
    this.router.navigate(["/characters"], { queryParams: { page } });
  }
  
}
