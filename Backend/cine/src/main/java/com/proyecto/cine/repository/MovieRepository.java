package com.proyecto.cine.repository;

import com.proyecto.cine.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}