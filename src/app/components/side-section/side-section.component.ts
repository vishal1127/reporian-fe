import { Component } from '@angular/core';
import { RecentComponent } from "../posts/recent/recent.component";

@Component({
  selector: 'app-side-section',
  standalone: true,
  imports: [RecentComponent],
  templateUrl: './side-section.component.html',
  styleUrl: './side-section.component.scss'
})
export class SideSectionComponent {

}
