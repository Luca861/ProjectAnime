import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DevelAnimeModule { }
