import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  experiences = signal([]);
  keys: string[] = [];
  httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient.get<[]>('https://localhost:7269/Experience').subscribe({
      next: (response) => {
        console.log('Experience data:', response);
        this.experiences.set(response);
        if (response.length > 0) {
          this.keys = Object.keys(response);

        }
      },
      error: (error) => {
        console.error('Error fetching experience data:', error);
      },
    });
  }
}
