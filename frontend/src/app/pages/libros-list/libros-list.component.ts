import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libros-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Listado de libros</h2>
    <p>Libros obtenidos desde la API REST del backend.</p>

    @for (libro of libroService.libros(); track libro.id) {
      <div class="card">
        <h3>{{ libro.titulo }}</h3>
        <p>Año de publicación: {{ libro.anioPublicacion }}</p>
      </div>
    } @empty {
      <p>No hay libros registrados.</p>
    }

    <a class="btn" routerLink="/libros/nuevo">Añadir libro</a>
  `
})
export class LibrosListComponent implements OnInit {
  constructor(public libroService: LibroService) {}

  ngOnInit(): void {
    this.libroService.listar().subscribe();
  }
}
