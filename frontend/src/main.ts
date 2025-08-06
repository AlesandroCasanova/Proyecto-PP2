import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // ✅ Importar
import { LoginComponent } from './app/pages/login/login.component';

bootstrapApplication(LoginComponent, {
  providers: [provideHttpClient()] // ✅ Agregar provider global de HttpClient
});
