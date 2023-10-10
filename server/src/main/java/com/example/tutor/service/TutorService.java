package com.example.tutor.service;

import com.example.tutor.model.Tutor;
import com.example.tutor.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class TutorService {
    @Autowired
    private TutorRepository tutorRepository;

    @Autowired
    private BCryptPasswordEncoder encoder;

    public Tutor createTutor(Tutor tutor) {
        String encodedPassword = encoder.encode(tutor.getPassword());
        tutor.setPassword(encodedPassword);

        try {
            return tutorRepository.save(tutor);
        } catch (Exception e) {
            // Handle the exception (log it, return an error response, etc.)
            throw new RuntimeException("Error creating tutor", e);
        }
    }

    public Tutor getTutorById(Long id) {
        return tutorRepository.findById(id).orElse(null);
    }

    public Tutor login(String email, String password) {
        Tutor tutor = tutorRepository.findByEmail(email);

        if (tutor != null && tutor.getPassword().equals(password)) {
            return tutor;
        }

        return null;
    }

    public Tutor getTutorByEmail(String email, String password) {
        return tutorRepository.findByEmail(email);
    }

    public void deleteTutor(Long id) {
        tutorRepository.deleteById(id);
    }

    public Tutor updateTutor(Long id, Tutor updateTutor) {
        Tutor existingTutor = tutorRepository.findById(id).orElse(null);
        if (existingTutor != null) {
            existingTutor.setName(updateTutor.getName());
            existingTutor.setSubject(updateTutor.getSubject());
            existingTutor.setAddress(updateTutor.getAddress());
            existingTutor.setCity((updateTutor.getCity()));
            existingTutor.setPhoneNumber(updateTutor.getPhoneNumber());
            existingTutor.setEmail(updateTutor.getEmail());
            existingTutor.setPostCode(updateTutor.getPostCode());
        }
        return null;
    }
}
