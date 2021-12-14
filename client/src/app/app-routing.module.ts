import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadeauFormComponent } from './pages/cadeau-form/cadeau-form.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PageCadeauxComponent } from './pages/page-cadeaux/page-cadeaux.component';

const routes: Routes = [
  // { path : "home", component : HomeComponent} cadeau-list
  { path : "page-cadeaux", component : PageCadeauxComponent},
  { path : "cadeau-list", component : PageCadeauxComponent},
  { path : "cadeau-form", component : CadeauFormComponent},
  { path : "**", component :  HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
