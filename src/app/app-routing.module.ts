import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { environment } from "../environments/environment";
import { HeroesComponent } from "./heroes/heroes.component";
import { ComicsComponent } from "./comics/comics.component";
import { CharacterComponent } from "./Characters/characters.component";
import { HeroDetailComponent } from "./heroes/hero-detail.component";
import { ComicDetailComponent } from "./comics/comic-detail.component";
import { CharacterDetailComponent } from "./Characters/character-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "characters", component: CharacterComponent },
  { path: "comics", component: ComicsComponent },
  { path: "heroes/:id", component: HeroDetailComponent },
  { path: "comics/:id", component: ComicDetailComponent },
  { path: "character/:id", component: CharacterDetailComponent },
  { path: "", redirectTo: "heroes", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: !environment.production })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
