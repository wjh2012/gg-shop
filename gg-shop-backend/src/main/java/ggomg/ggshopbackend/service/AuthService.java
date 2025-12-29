package ggomg.ggshopbackend.service;

import ggomg.ggshopbackend.domain.Role;
import ggomg.ggshopbackend.domain.User;
import ggomg.ggshopbackend.dto.LoginRequest;
import ggomg.ggshopbackend.dto.SignupRequest;
import ggomg.ggshopbackend.repository.UserRepository;
import ggomg.ggshopbackend.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    @Transactional
    public Long signup(SignupRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        User user = new User(
            request.getEmail(),
            passwordEncoder.encode(request.getPassword()),
            Role.USER
        );

        return userRepository.save(user).getId();
    }

    public String login(LoginRequest request) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
            request.getEmail(), request.getPassword());

        Authentication authentication = authenticationManagerBuilder.getObject()
            .authenticate(authenticationToken);
        return jwtTokenProvider.createToken(authentication);
    }
}
