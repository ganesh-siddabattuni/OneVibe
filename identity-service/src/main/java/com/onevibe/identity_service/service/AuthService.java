package com.onevibe.identity_service.service;

import com.onevibe.identity_service.dto.AuthResponse;
import com.onevibe.identity_service.dto.LoginRequest;
import com.onevibe.identity_service.dto.RegisterRequest;
import com.onevibe.identity_service.model.User;
import com.onevibe.identity_service.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public User register(RegisterRequest request) {
        var user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .build();
        return userRepository.save(user);
    }

    public AuthResponse login(LoginRequest request) {
        Authentication authenticate = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

        if (authenticate.isAuthenticated()) {
            String token = jwtService.generateToken(request.getEmail());
            return AuthResponse.builder().token(token).build();
        } else {
            throw new RuntimeException("Invalid credentials");
        }
    }
}
