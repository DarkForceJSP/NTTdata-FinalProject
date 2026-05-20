import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Autor } from '../models/autor.model';
import { Libro } from '../models/libro.model';

@Injectable({ providedIn: 'root' })
export class AutorService {
  private readonly apiUrl = 'http://localhost:8080/api/autores';

  autores = signal<Autor[]>([]);

  constructor(private http: HttpClient) {}

  listar(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.apiUrl).pipe(
      tap(autores => this.autores.set(autores))
    );
  }

  detalle(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.apiUrl}/${id}`);
  }

  crear(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(this.apiUrl, autor);
  }

  librosDeAutor(id: number): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.apiUrl}/${id}/libros`);
  }
}
