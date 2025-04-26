import { Component } from '@angular/core';
import { ExperienceCardComponent } from "../experience-card/experience-card.component";

@Component({
  selector: 'app-hero',
  imports: [ExperienceCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
