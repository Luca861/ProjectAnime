import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeComponent } from './pages/anime/anime.component';
import { HomeComponent } from './pages/home/home.component';
import { MangaComponent } from './pages/manga/manga.component';
import { ProjectComponent } from './pages/project.component';


const routes: Routes = [

  { path: '', component: ProjectComponent,
    children: [
    { path: '', component:HomeComponent},
    { path: 'anime', component:AnimeComponent},
    { path: 'manga', component:MangaComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelAnimeRoutingModule { }
