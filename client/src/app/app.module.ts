import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CadeauCardComponent } from './components/cadeaux/cadeau-card/cadeau-card.component';
import { CadeauListComponent } from './components/cadeaux/cadeau-list/cadeau-list.component';
import { PageCadeauxComponent } from './pages/page-cadeaux/page-cadeaux.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CadeauFormComponent } from './pages/cadeau-form/cadeau-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CadeauCardComponent,
    CadeauListComponent,
    PageCadeauxComponent,
    HomeComponent,
    NotFoundComponent,
    CadeauFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
