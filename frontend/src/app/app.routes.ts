import { Routes } from '@angular/router';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';

export const routes: Routes = [
  { path: '', component: LoginRegisterComponent },
  { path: '**', redirectTo: '' }
];
