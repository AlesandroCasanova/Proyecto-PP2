import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  // Formulario login
  loginEmail: string = '';
  loginPassword: string = '';
  loginError: string = '';

  // Formulario registro
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  password: string = '';
  confirmarPassword: string = '';
  registroError: string = '';

  // Control de vista activa
  isLoginView: boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  toggleView() {
    this.isLoginView = !this.isLoginView;
    this.clearErrors();
  }

  clearErrors() {
    this.loginError = '';
    this.registroError = '';
  }

  login() {
    if (!this.loginEmail || !this.loginPassword) {
      this.loginError = 'Completa todos los campos';
      return;
    }

    this.authService.login(this.loginEmail, this.loginPassword).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('usuario', JSON.stringify(res.usuario));
        this.router.navigate(['/index']);
      },
      error: () => {
        this.loginError = 'Email o contraseña incorrectos';
      }
    });
  }

  registrar() {
    if (!this.nombre || !this.apellido || !this.email || !this.password || !this.confirmarPassword) {
      this.registroError = 'Completa todos los campos';
      return;
    }

    if (this.password !== this.confirmarPassword) {
      this.registroError = 'Las contraseñas no coinciden';
      return;
    }

    const data = {
      nombre: this.nombre,
      apellido: this.apellido,
      email: this.email,
      contraseña: this.password
    };

    this.authService.registro(data).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('usuario', JSON.stringify(res.usuario));
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.registroError = 'Error al registrar usuario';
      }
    });
  }
}
