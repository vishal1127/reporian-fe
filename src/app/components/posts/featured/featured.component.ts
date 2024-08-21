import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss'
})
export class FeaturedComponent implements OnInit {
  articleId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');
    // Use this.articleId to fetch the article details, e.g., from a service
  }

}
