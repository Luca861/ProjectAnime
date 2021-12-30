import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    // children: [
    //   { path: 'list', component: CocktailsListComponent },
    //   { path: 'details/:id', component: CocktailDetailsComponent },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DevelAnimeRoutingModule { }
