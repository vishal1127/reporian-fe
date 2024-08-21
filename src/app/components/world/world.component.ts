import { Component } from '@angular/core';
import { HeroComponent } from '../posts/hero/hero.component';
import { FeaturedComponent } from '../posts/featured/featured.component';
import { ArticlesListComponent } from '../posts/articles-list/articles-list.component';
import { SideSectionComponent } from '../side-section/side-section.component';

@Component({
  selector: 'app-world',
  standalone: true,
  imports: [HeroComponent, FeaturedComponent, ArticlesListComponent, SideSectionComponent],
  templateUrl: './world.component.html',
  styleUrl: './world.component.scss'
})
export class WorldComponent {

}
