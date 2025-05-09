import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { tap } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() registerPage = new EventEmitter<void>();
  httpClient = inject(HttpClient);
  route = inject(Router);
  username = signal<string>('');
  password = signal<string>('');

  onSubmit() {
    if (this.username() && this.password()) {
      this.httpClient
        .post<{ token: string; userId: string; username: string }>(
          'https://localhost:7269/Api/Login',
          {
            username: this.username(),
            password: this.password(),
          }
        )
        .pipe(
          tap((response) => {
            localStorage.setItem('loginToken', response.token);
            localStorage.setItem('username', response.username);
          })
        )
        .subscribe({
          next: (response) => {
            console.log('login successful', response);
            this.route.navigate(['']);
          },
          error: (error) => {
            console.log('login failed', error);
          },
        });
    }
  }
  onRegister() {
    this.registerPage.emit();
  }
}
