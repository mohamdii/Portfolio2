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

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() registerPage = new EventEmitter<void>();
  httpClient = inject(HttpClient);

  username = signal<string>('');
  password = signal<string>('');

  onSubmit() {
    if (this.username() && this.password()) {
      this.httpClient
        .post<{ token: string, userId: string, username: string }>('https://localhost:7269/Api/Login', {
          username: this.username(),
          password: this.password(),
        })
        .pipe(
          tap((response) => {
            localStorage.setItem('loginToken', response.token);
            console.log('Token stored in local storage:', response.token);
          })
        )
        .subscribe({
          next: (response) => {
            console.log('login successful', response);
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
