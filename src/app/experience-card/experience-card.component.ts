import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { IExperience } from '../Interfaces/IExperience';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css',
})
export class ExperienceCardComponent implements OnInit {
  localStorage = window.localStorage;
  position = signal('Software Engineer');
  companyName = signal('');
  startDate = signal('');
  endDate = signal('');
  localStorageUsername = this.localStorage.getItem('username') || '';
  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient
      .get<IExperience>(`https://localhost:7269/Experience/${this.localStorageUsername}`)
      .subscribe((data) => {
        this.position.set(data.jobTitle);
        console.log(data);
      });
  }
}