import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AnimeComponent } from './pages/anime/anime.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    AnimeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DevelAnimeModule { }
