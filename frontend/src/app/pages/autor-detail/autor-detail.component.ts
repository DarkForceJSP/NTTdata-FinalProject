import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Autor } from '../../models/autor.model';
import { Libro } from '../../models/libro.model';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-autor-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (autor()) {
      <h2>{{ autor()?.nombre }}</h2>
      <p><strong>Nacionalidad:</strong> {{ autor()?.nacionalidad }}</p>

      <h3>Libros</h3>
      @for (libro of libros(); track libro.id) {
        <div class="card">
          <strong>{{ libro.titulo }}</strong>
          <p>Año de publicación: {{ libro.anioPublicacion }}</p>
        </div>
      } @empty {
        <p>Este autor todavía no tiene libros.</p>
      }

      <a class="btn" routerLink="/libros/nuevo">Añadir libro</a>
    }
  `
})
export class AutorDetailComponent implements OnInit {
  autor = signal<Autor | null>(null);
  libros = signal<Libro[]>([]);

  constructor(private route: ActivatedRoute, private autorService: AutorService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.autorService.detalle(id).subscribe(autor => this.autor.set(autor));
    this.autorService.librosDeAutor(id).subscribe(libros => this.libros.set(libros));
  }
}
