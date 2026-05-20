package com.example.biblioteca.controller;

import com.example.biblioteca.model.Libro;
import com.example.biblioteca.service.LibroService;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/libros")
@CrossOrigin(origins = "http://localhost:4200")
public class LibroController {
    private final LibroService libroService;

    public LibroController(LibroService libroService) {
        this.libroService = libroService;
    }

    @GetMapping
    public List<Libro> listar() {
        return libroService.listarLibros();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Libro crear(@Valid @RequestBody CrearLibroRequest request) {
        Libro libro = new Libro();
        libro.setTitulo(request.getTitulo());
        libro.setAnioPublicacion(request.getAnioPublicacion());
        return libroService.crearLibro(libro, request.getAutorId());
    }

    public static class CrearLibroRequest {
        private String titulo;
        private int anioPublicacion;
        private Long autorId;

        public CrearLibroRequest() {
        }

        public String getTitulo() { return titulo; }
        public void setTitulo(String titulo) { this.titulo = titulo; }
        public int getAnioPublicacion() { return anioPublicacion; }
        public void setAnioPublicacion(int anioPublicacion) { this.anioPublicacion = anioPublicacion; }
        public Long getAutorId() { return autorId; }
        public void setAutorId(Long autorId) { this.autorId = autorId; }
    }
}
