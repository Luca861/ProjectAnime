import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'develanime', pathMatch: 'full' },
  { path: 'develanime', loadChildren: () => import('./modules/devel-anime/devel-anime.module').then(m => m.DevelAnimeModule) },
  { path: '**', redirectTo: 'develanime', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
