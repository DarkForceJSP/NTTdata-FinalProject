import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-autor-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Nuevo autor</h2>

    <form [formGroup]="form" (ngSubmit)="guardar()">
      <label>Nombre</label>
      <input formControlName="nombre" placeholder="Ej: Federico García Lorca">

      @if (form.controls.nombre.invalid && form.controls.nombre.touched) {
        <p class="error">El nombre es obligatorio y debe tener al menos 2 caracteres.</p>
      }

      <label>Nacionalidad</label>
      <input formControlName="nacionalidad" placeholder="Ej: Española">

      @if (form.controls.nacionalidad.invalid && form.controls.nacionalidad.touched) {
        <p class="error">La nacionalidad es obligatoria.</p>
      }

      <button type="submit" [disabled]="form.invalid">Guardar</button>
    </form>
  `
})
export class AutorFormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    nacionalidad: ['', Validators.required]
  });

  constructor(private autorService: AutorService, private router: Router) {}

  guardar(): void {
    if (this.form.invalid) return;

    this.autorService.crear(this.form.getRawValue()).subscribe(() => {
      this.router.navigateByUrl('/autores');
    });
  }
}
