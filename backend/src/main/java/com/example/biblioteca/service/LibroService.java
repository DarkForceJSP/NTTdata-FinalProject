package com.example.biblioteca.service;

import com.example.biblioteca.model.Autor;
import com.example.biblioteca.model.Libro;
import com.example.biblioteca.repository.LibroRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class LibroService {
    private final LibroRepository libroRepository;
    private final AutorService autorService;

    public LibroService(LibroRepository libroRepository, AutorService autorService) {
        this.libroRepository = libroRepository;
        this.autorService = autorService;
    }

    public List<Libro> listarLibros() {
        return libroRepository.findAll();
    }

    public Libro crearLibro(Libro libro, Long autorId) {
        Autor autor = autorService.buscarAutor(autorId);
        libro.setAutor(autor);
        return libroRepository.save(libro);
    }
}
