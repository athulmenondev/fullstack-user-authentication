package com.authentication.user_api;

import com.authentication.user_api.dto.LoginRequest;
import com.authentication.user_api.dto.SignupRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> getUserDetailsByUsername(@RequestBody LoginRequest loginRequest){
        System.out.println("username from frontend is "+loginRequest.getUsername());
        System.out.println("password from frontend is "+loginRequest.getPassword());
        User  user=userRepository.findByUsername(loginRequest.getUsername());
        System.out.println("username from db is"+user.getPassword());
        if(user!=null){
            if(user.getPassword().equals(loginRequest.getPassword())) {
                return new ResponseEntity<>(user, HttpStatus.OK);
            }else{
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signupRequest){
        return userService.registerNewUser(signupRequest);
    }
}
