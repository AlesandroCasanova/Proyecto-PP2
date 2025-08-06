import { Component } from '@angular/core';
import { LoginComponent } from './pages/login/login.component'; // ✅ Ruta corregida

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent], // ✅ Muy importante
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
