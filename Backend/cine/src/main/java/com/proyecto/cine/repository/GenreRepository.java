package com.proyecto.cine.repository;

import com.proyecto.cine.model.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre, Long> {
}