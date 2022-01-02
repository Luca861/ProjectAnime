import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DevelAnimeModule { }
