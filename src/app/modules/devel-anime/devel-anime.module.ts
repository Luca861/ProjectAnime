import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DevelAnimeRoutingModule } from './devel-anime-routing.module';
import { ProjectComponent } from './pages/project.component';

import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MangaComponent } from './pages/manga/manga.component';
import { AnimeComponent } from './pages/anime/anime.component';
import { FormComponent } from './components/form/form.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    MangaComponent,
    AnimeComponent,
    ProjectComponent,
    FormComponent,
    ModalComponent

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
