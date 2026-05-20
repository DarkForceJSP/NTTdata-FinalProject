package com.example.biblioteca.controller;

import com.example.biblioteca.model.Autor;
import com.example.biblioteca.model.Libro;
import com.example.biblioteca.service.AutorService;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/autores")
@CrossOrigin(origins = "http://localhost:4200")
public class AutorController {
    private final AutorService autorService;

    public AutorController(AutorService autorService) {
        this.autorService = autorService;
    }

    @GetMapping
    public List<Autor> listar() {
        return autorService.listarAutores();
    }

    @GetMapping("/{id}")
    public Autor detalle(@PathVariable Long id) {
        return autorService.buscarAutor(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Autor crear(@Valid @RequestBody Autor autor) {
        return autorService.crearAutor(autor);
    }

    @GetMapping("/{id}/libros")
    public List<Libro> libros(@PathVariable Long id) {
        return autorService.listarLibrosDeAutor(id);
    }
}
