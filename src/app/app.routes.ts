import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Register',
    component: RegisterComponent,
  }
  
];
