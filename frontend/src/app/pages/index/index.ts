import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './index.html',
})
export class Index implements OnInit {
  nombreUsuario: string = '';
  negocios: any[] = [];
  negociosFiltrados: any[] = [];

  filtroZona: string = '';
  filtroRubro: string = '';
  zonasDisponibles: string[] = [];
  rubrosDisponibles: string[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const usuarioData = localStorage.getItem('usuario');
      if (usuarioData) {
        const usuario = JSON.parse(usuarioData);
        this.nombreUsuario = usuario.nombre;
      }

      const token = localStorage.getItem('token') || '';
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      this.http.get<any[]>('http://localhost:3000/api/negocios', { headers }).subscribe({
        next: (data) => {
          this.negocios = data;
          this.negociosFiltrados = data;
          this.zonasDisponibles = [...new Set(data.map(n => n.zona))];
          this.rubrosDisponibles = [...new Set(data.map(n => n.rubro))];
        },
        error: (error) => {
          console.error('Error al obtener negocios:', error);
          this.negocios = [];
          this.negociosFiltrados = [];
        }
      });
    }
  }

  filtrar(): void {
    this.negociosFiltrados = this.negocios.filter(n => {
      const coincideZona = this.filtroZona ? n.zona === this.filtroZona : true;
      const coincideRubro = this.filtroRubro ? n.rubro === this.filtroRubro : true;
      return coincideZona && coincideRubro;
    });
  }

  usarUbicacion(): void {
    if (!navigator.geolocation) {
      alert('Geolocalización no soportada');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        // Ejemplo simple: negocios más cercanos (a reemplazar por lógica real)
        this.negociosFiltrados = this.negocios.filter(n => n.lat && n.lng);
        // Ordenar por distancia (si tuviera coordenadas)
      },
      (err) => {
        alert('No se pudo obtener ubicación');
      }
    );
  }

  limpiarFiltros(): void {
    this.filtroZona = '';
    this.filtroRubro = '';
    this.negociosFiltrados = [...this.negocios];
  }

  getEstrellas(puntaje: number): number[] {
    return Array(Math.round(puntaje)).fill(0);
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      this.router.navigate(['/login']);
    }
  }

  irARegistroNegocio(): void {
    this.router.navigate(['/planes']);
  }
}
