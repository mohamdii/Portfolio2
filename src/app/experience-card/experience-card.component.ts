import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css',
})
export class ExperienceCardComponent implements OnInit {
  position = signal('Software Engineer');

  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient
      .get<{
        company: null;
        companyId: number;
        employee: { id: number; name: string };
        employeeId: number;
        endDate: string;
        id: number;
        jobTitle: string;
        startDate: string;
      }[]>('https://localhost:7269/Experience')
      .subscribe((data) => {
        this.position.set(data[0].jobTitle);
        console.log(data);
      });
  }
}
