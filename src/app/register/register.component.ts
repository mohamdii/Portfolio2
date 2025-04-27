import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  httpClient = inject(HttpClient);
  route = inject(Router);
  destroyRef = inject(DestroyRef);
  enteredUsername = signal<string>('');
  enteredPassword = signal<string>('');
  enteredEmail = signal<string>('');
  state = signal<string>('');
  onSubmit() {
    if (
      this.enteredUsername() &&
      this.enteredPassword() &&
      this.enteredEmail()
    ) {
      this.httpClient
        .post('https://localhost:7269/Api/Register', {
          email: this.enteredEmail(),
          username: this.enteredUsername(),
          password: this.enteredPassword(),
        })
        .subscribe({
          next: (response) => {
            console.log('Registration successful', response);
            this.route.navigate(['/Login']);
          },
          error: (error) => {
            console.log('Registration failed', error);
          },
        });
    }

  }
}
