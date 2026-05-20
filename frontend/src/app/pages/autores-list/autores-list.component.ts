import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-autores-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Listado de autores</h2>
    <p>Datos obtenidos desde la API REST del backend.</p>

    @for (autor of autorService.autores(); track autor.id) {
      <div class="card">
        <h3>{{ autor.nombre }}</h3>
        <p>Nacionalidad: {{ autor.nacionalidad }}</p>
        <a class="btn" [routerLink]="['/autores', autor.id]">Ver detalle</a>
      </div>
    } @empty {
      <p>No hay autores registrados.</p>
    }
  `
})
export class AutoresListComponent implements OnInit {
  constructor(public autorService: AutorService) {}

  ngOnInit(): void {
    this.autorService.listar().subscribe();
  }
}
