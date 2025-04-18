import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
