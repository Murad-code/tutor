package com.example.tutor.controller;

import com.example.tutor.config.services.UserDetailsImpl;
import com.example.tutor.model.User;
import com.example.tutor.payload.request.LoginRequest;
import com.example.tutor.payload.response.JwtResponse;
import com.example.tutor.payload.response.MessageResponse;
import com.example.tutor.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

}
