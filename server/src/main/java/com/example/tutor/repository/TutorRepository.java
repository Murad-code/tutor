package com.example.tutor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.tutor.model.Tutor;

public interface TutorRepository extends JpaRepository<Tutor, Long> {
}
