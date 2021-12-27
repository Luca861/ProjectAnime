import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'develAnime', pathMatch: 'full' },
  { path: 'develAnime', loadChildren: () => import('./modules/devel-anime/devel-anime.module').then(m => m.DevelAnimeModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
