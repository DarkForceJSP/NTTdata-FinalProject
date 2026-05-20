import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
      <h1>Biblioteca FP Dual</h1>

      <nav>
        <a routerLink="/autores">Autores</a>
        <a routerLink="/libros">Libros</a>
        <a routerLink="/autores/nuevo">Nuevo autor</a>
        <a routerLink="/libros/nuevo">Nuevo libro</a>
      </nav>
    </header>

    <main>
      <router-outlet />
    </main>
  `
})
export class AppComponent {}
