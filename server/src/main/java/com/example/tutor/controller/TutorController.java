//package com.example.tutor.controller;
//
//import com.example.tutor.payload.request.LoginRequest;
//import com.example.tutor.model.Tutor;
//import com.example.tutor.service.TutorService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/tutor")
//public class TutorController {
//
//    @Autowired
//    private TutorService tutorService;
//
//    @PostMapping
//    public Tutor createTutor(@RequestBody Tutor tutor) {
//        return tutorService.createTutor(tutor);
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> getTutorByEmail(@RequestBody LoginRequest loginRequest) {
//        Tutor tutor = tutorService.getTutorByEmail(loginRequest.getEmail(), loginRequest.getPassword());
//
//        if (tutor != null) {
//            return ResponseEntity.ok(tutor); // Returning a Tutor object
//        } else {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials"); // Returning a string
//        }
//    }
//
//    @GetMapping("/{id}")
//    public Tutor getTutor(@PathVariable Long id) {
//        return tutorService.getTutorById(id);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteTutor(@PathVariable Long id) {
//        tutorService.deleteTutor(id);
//    }
//
//    @PutMapping("/{id}")
//    public Tutor updateTutor(@PathVariable Long id, @RequestBody Tutor updatedTutor) {
//        return tutorService.updateTutor(id, updatedTutor);
//    }
//}
