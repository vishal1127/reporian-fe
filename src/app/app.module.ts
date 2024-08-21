import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/posts/hero/hero.component';
import { ArticlesListComponent } from './components/posts/articles-list/articles-list.component';
import { RecentComponent } from './components/posts/recent/recent.component';
import { FeaturedComponent } from "./components/posts/featured/featured.component";
import { SideSectionComponent } from "./components/side-section/side-section.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HeroComponent,
    FeaturedComponent,
    ArticlesListComponent,
    RecentComponent,
    SideSectionComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
