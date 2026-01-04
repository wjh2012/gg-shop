package ggomg.ggshopbackend.init;

import ggomg.ggshopbackend.domain.Role;
import ggomg.ggshopbackend.domain.User;
import ggomg.ggshopbackend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@RequiredArgsConstructor
public class AdminInitRunner implements ApplicationRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        if (!userRepository.existsByEmail("admin@example.com")) {
            User admin = new User(
                    "admin@example.com",
                    passwordEncoder.encode("admin"),
                    Role.ADMIN);
            userRepository.save(admin);
            log.info("Default admin user created: admin@example.com / admin");
        } else {
            log.info("Admin user already exists.");
        }
    }
}
