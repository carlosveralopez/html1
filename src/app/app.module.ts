import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { ComicsComponent } from "./comics/comics.component";
import { CharacterComponent } from "./Characters/characters.component";
import { HeroDetailComponent } from "./heroes/hero-detail.component";
import { ComicDetailComponent } from "./comics/comic-detail.component";
import { CharacterDetailComponent } from "./Characters/character-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { MarvelService } from "./marvel/marvel.service";
import { HeroService } from "./heroes/hero.service";
import { ComicService } from "./comics/comic.service";
import { CharacterService } from "./Characters/character.service";
import { HeroSearchComponent } from "./hero-search/hero-search.component";
import { SearchService } from "./hero-search/search.service";
import { AppRoutingModule } from ".//app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroSearchComponent,
    CharacterComponent,
    ComicsComponent,
    CharacterDetailComponent,
    HeroDetailComponent,
    ComicDetailComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [MarvelService, HeroService, ComicService,CharacterService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {}
