import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // si usás configuración
import { LoginComponent } from './app/pages/login/login.component';

export default function () {
  return bootstrapApplication(LoginComponent, appConfig);
}
