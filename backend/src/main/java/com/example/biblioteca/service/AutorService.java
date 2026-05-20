package com.example.biblioteca.service;

import com.example.biblioteca.model.Autor;
import com.example.biblioteca.model.Libro;
import com.example.biblioteca.repository.AutorRepository;
import com.example.biblioteca.repository.LibroRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AutorService {
    private final AutorRepository autorRepository;
    private final LibroRepository libroRepository;

    public AutorService(AutorRepository autorRepository, LibroRepository libroRepository) {
        this.autorRepository = autorRepository;
        this.libroRepository = libroRepository;
    }

    public List<Autor> listarAutores() {
        return autorRepository.findAll();
    }

    public Autor buscarAutor(Long id) {
        return autorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Autor no encontrado"));
    }

    public Autor crearAutor(Autor autor) {
        return autorRepository.save(autor);
    }

    public List<Libro> listarLibrosDeAutor(Long autorId) {
        buscarAutor(autorId);
        return libroRepository.findByAutorId(autorId);
    }
}
