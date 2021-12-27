import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevelAnimeModule } from './modules/devel-anime/devel-anime.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevelAnimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
