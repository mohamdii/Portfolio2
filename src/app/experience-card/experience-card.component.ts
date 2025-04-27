import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { IExperience } from '../Interfaces/IExperience';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experience-card',
  imports: [DatePipe],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css',
})
export class ExperienceCardComponent {
  @Input({ required: true }) experience!: IExperience;
}
