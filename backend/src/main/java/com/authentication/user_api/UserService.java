package com.authentication.user_api;

import com.authentication.user_api.dto.SignupRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;


@Service
public class UserService {
    @Autowired
    private  UserRepository userRepository;

    public ResponseEntity<?> registerNewUser(SignupRequest signupRequest) {
        // 1. Validate input (you can add more sophisticated validation)
        if (signupRequest.getUsername() == null || signupRequest.getUsername().trim().isEmpty() ||
                signupRequest.getPassword() == null || signupRequest.getPassword().trim().isEmpty() ||
                signupRequest.getEmail() == null || signupRequest.getEmail().trim().isEmpty()) {
            return new ResponseEntity<>("Username, password, and email are required.", HttpStatus.BAD_REQUEST);
        }

        User existingUserByUsername = userRepository.findByUsername(signupRequest.getUsername());
        if (existingUserByUsername != null) {
            return new ResponseEntity<>("Username already exists.", HttpStatus.BAD_REQUEST);
        }

        // 3. **INSECURE: Storing plain text password**
        String plainTextPassword = signupRequest.getPassword();

        // 4. Create a new User entity
        User newUser = new User();
        newUser.setUsername(signupRequest.getUsername());
        newUser.setPassword(plainTextPassword); // Storing plain text!
        newUser.setPhonenumber(signupRequest.getPhonenumber());
        newUser.setEmail(signupRequest.getEmail());

        // 5. Save the new user to the database
        User savedUser = userRepository.save(newUser);

        // 6. Return a success response
        return new ResponseEntity<>("User registered successfully!", HttpStatus.CREATED);
    }
}
