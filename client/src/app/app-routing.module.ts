import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadeauListComponent } from './components/cadeaux/cadeau-list/cadeau-list.component';
import { CadeauFormComponent } from './pages/cadeau-form/cadeau-form.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path : "home", component : HomeComponent},
  { path : "cadeaux", component : CadeauListComponent},
  { path : "cadeau-form", component : CadeauFormComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : "**", component :  NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
