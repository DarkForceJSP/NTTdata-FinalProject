import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Autor } from '../../models/autor.model';
import { AutorService } from '../../services/autor.service';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libro-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Nuevo libro</h2>

    <form [formGroup]="form" (ngSubmit)="guardar()">
      <label>Título</label>
      <input formControlName="titulo" placeholder="Ej: La casa de Bernarda Alba">

      @if (form.controls.titulo.invalid && form.controls.titulo.touched) {
        <p class="error">El título es obligatorio.</p>
      }

      <label>Año de publicación</label>
      <input type="number" formControlName="anioPublicacion">

      @if (form.controls.anioPublicacion.invalid && form.controls.anioPublicacion.touched) {
        <p class="error">Introduce un año válido.</p>
      }

      <label>ID del autor</label>
      <input type="number" formControlName="autorId" placeholder="Ej: 1">

      <p>Autores disponibles:</p>
      <ul>
        @for (autor of autores(); track autor.id) {
          <li>{{ autor.id }} - {{ autor.nombre }}</li>
        }
      </ul>

      <button type="submit" [disabled]="form.invalid">Guardar</button>
    </form>
  `
})
export class LibroFormComponent implements OnInit {
  private fb = inject(FormBuilder);

  autores = signal<Autor[]>([]);

  form = this.fb.nonNullable.group({
    titulo: ['', Validators.required],
    anioPublicacion: [2000, [Validators.required, Validators.min(1000)]],
    autorId: [1, [Validators.required, Validators.min(1)]]
  });

  constructor(
    private autorService: AutorService,
    private libroService: LibroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.autorService.listar().subscribe(autores => this.autores.set(autores));
  }

  guardar(): void {
    if (this.form.invalid) return;

    this.libroService.crear(this.form.getRawValue()).subscribe(() => {
      this.router.navigateByUrl('/libros');
    });
  }
}
