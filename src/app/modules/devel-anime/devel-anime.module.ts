import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MangaComponent } from './pages/manga/manga.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { DevelAnimeRoutingModule } from './devel-anime-routing.module';
import { ProjectComponent } from './pages/project/project.component';




@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    MangaComponent,
    AnimeComponent,
    ProjectComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    DevelAnimeRoutingModule
  ],
  exports: [
    ProjectComponent
  ]
})
export class DevelAnimeModule { }
