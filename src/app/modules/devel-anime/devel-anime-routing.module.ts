import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './pages/anime/anime.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
        children: [
       { path: 'anime', component: AnimeComponent },
    //   { path: 'details/:id', component: CocktailDetailsComponent },
    // ]
        ]
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DevelAnimeRoutingModule { }
