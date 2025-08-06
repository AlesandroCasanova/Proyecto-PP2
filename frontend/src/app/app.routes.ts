import { Routes } from '@angular/router';
import { LoginRegister } from './pages/login-register/login-register';
import { Dashboard } from './pages/dashboard/dashboard';
import { Index } from './pages/index/index';
import { Planes } from './pages/planes/planes';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginRegister },
  { path: 'dashboard', component: Dashboard },
  { path: 'index', component: Index },
  { path: 'planes', component: Planes }
];
