package com.example.tutor.service;

import com.example.tutor.model.Tutor;
import com.example.tutor.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TutorService {
    @Autowired
    private TutorRepository tutorRepository;

    public Tutor createTutor(Tutor tutor) {
        return tutorRepository.save(tutor);
    }

    public Tutor getTutorById(Long id) {
        return tutorRepository.findById(id).orElse(null);
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
