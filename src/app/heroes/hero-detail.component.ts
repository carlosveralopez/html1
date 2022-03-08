import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | null = null;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id != null) {
      this.heroService.getHero(+id).subscribe(hero => (this.hero = hero));
    } else {
      // TODO: navigate not found page
    }
  }
}
