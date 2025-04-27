import { Component, inject, OnInit, signal } from '@angular/core';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { HttpClient } from '@angular/common/http';
import { IExperience } from '../Interfaces/IExperience';

@Component({
  selector: 'app-hero',
  imports: [ExperienceCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  localStorage = window.localStorage;
  experiences: IExperience[] = [];
  localStorageUsername = this.localStorage.getItem('username') || '';
  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient
      .get<IExperience[]>('https://localhost:7269/Experience')
      .subscribe((data) => {
        this.experiences = data;
        console.log(data);
      });
  }
}
