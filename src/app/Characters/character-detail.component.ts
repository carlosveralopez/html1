import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Hero } from "./character";
import { CharacterService } from "./character.service";

@Component({
  templateUrl: "./character-detail.component.html",
  styleUrls: ["./character-detail.component.css"]
})
export class CharacterDetailComponent implements OnInit {
  hero: Hero | null = null;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id != null) {
      this.characterService.getHero(+id).subscribe(hero => (this.hero = hero));
    } else {
      // TODO: navigate not found page
    }
  }
}
