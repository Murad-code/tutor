package com.example.tutor.repository;

import java.util.Optional;

import com.example.tutor.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);
}
