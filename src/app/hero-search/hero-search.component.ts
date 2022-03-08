import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";

import { Hero } from "../heroes/hero";
import { SearchService } from "./search.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["../page-panel.css", "./hero-search.component.css"]
})
export class HeroSearchComponent implements OnInit {
  heroes: Hero[] = [];
  term: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private SearchService: SearchService
  ) {}

  ngOnInit() {
    this.route.queryParamMap
      .pipe(
        switchMap(params => {
          
          return this.SearchService.searchHeroes(this.term);
        })
      )
      .subscribe(({ results}) => {
        this.heroes = results;
        
      });
  }
}
function term(term: any): import("rxjs").Observable<import("../marvel/response").MarvelData<Hero>> {
  throw new Error("Function not implemented.");
}

