import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorldComponent } from './components/world/world.component';
import { AboutComponent } from './components/about/about.component';
import { ArticleComponent } from './components/posts/article/article.component';

const routes: Routes = [
  { path: 'world', component: WorldComponent },
  { path: 'about', component: AboutComponent },
  { path: 'article/:id', component: ArticleComponent }, // Dynamic route with parameter
  { path: '', redirectTo: '/world', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
