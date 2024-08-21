import { Component } from '@angular/core';
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent {

}
