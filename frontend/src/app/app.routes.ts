import { Routes } from '@angular/router';
import { AutoresListComponent } from './pages/autores-list/autores-list.component';
import { AutorDetailComponent } from './pages/autor-detail/autor-detail.component';
import { AutorFormComponent } from './pages/autor-form/autor-form.component';
import { LibroFormComponent } from './pages/libro-form/libro-form.component';
import { LibrosListComponent } from './pages/libros-list/libros-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'autores', pathMatch: 'full' },
  { path: 'autores', component: AutoresListComponent },
  { path: 'autores/nuevo', component: AutorFormComponent },
  { path: 'autores/:id', component: AutorDetailComponent },
  { path: 'libros', component: LibrosListComponent },
  { path: 'libros/nuevo', component: LibroFormComponent },
  { path: '**', redirectTo: 'autores' }
];
