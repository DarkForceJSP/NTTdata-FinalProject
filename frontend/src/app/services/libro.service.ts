import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Libro } from '../models/libro.model';

@Injectable({ providedIn: 'root' })
export class LibroService {
  private readonly apiUrl = 'http://localhost:8080/api/libros';

  libros = signal<Libro[]>([]);

  constructor(private http: HttpClient) {}

  listar(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl).pipe(
      tap(libros => this.libros.set(libros))
    );
  }

  crear(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, libro);
  }
}
