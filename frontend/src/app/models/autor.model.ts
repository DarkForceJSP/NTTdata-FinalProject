import { Libro } from './libro.model';

export interface Autor {
  id?: number;
  nombre: string;
  nacionalidad: string;
  libros?: Libro[];
}
