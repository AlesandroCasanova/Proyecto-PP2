import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planes.html'
})
export class Planes {
  planes = [
    {
      nombre: 'Básico',
      descripcion: 'Ideal para emprendimientos pequeños que recién comienzan.',
      precio: 0
    },
    {
      nombre: 'Profesional',
      descripcion: 'Incluye estadísticas, agenda avanzada y perfil destacado.',
      precio: 2499
    },
    {
      nombre: 'Premium',
      descripcion: 'Máxima visibilidad y funciones completas sin límites.',
      precio: 4999
    }
  ];

  constructor(private router: Router) {}

  seleccionarPlan(plan: any) {
    localStorage.setItem('planSeleccionado', JSON.stringify(plan));
    this.router.navigate(['/registro-negocio']); // Ajustá esta ruta según tu estructura
  }
}
