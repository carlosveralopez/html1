import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["../page-panel.css", "./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  pageSize: number = 20;
  currentPage: number | null = null;
  totalPageCount: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.route.queryParamMap
      .pipe(
        switchMap(params => {
          const page = +(params.get("page") || "1");
          const offset = (page - 1) * this.pageSize;
          return this.heroService.getHeroesRand(this.pageSize, offset);
        })
      )
      .subscribe(({ results, total, offset }) => {
        this.heroes = results;
        this.currentPage = offset / this.pageSize + 1;
        this.totalPageCount = Math.ceil(total / this.pageSize);
      });
  }

  
}
