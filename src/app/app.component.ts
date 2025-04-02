import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, LoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  registerPage = signal<boolean>(false);
  loginPage = signal<boolean>(false);
  title = 'Portfolio';
  
  onLogin() {
    this.registerPage.set(false);
    this.loginPage.set(true);
    
  }
  onRegister() {
    this.registerPage.set(true);
    this.loginPage.set(false);
  }
}
