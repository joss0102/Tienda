package com.tienda.app.controllers;

import com.tienda.app.dtos.auth.*;
import com.tienda.app.models.User;
import com.tienda.app.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {

        return ResponseEntity.ok(this.userService.getAllUsers());
    }
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        Optional<User> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }




    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest credentials) {
        try {
            LoginResponse loginResponse = this.userService.login(credentials);
            // Verifica que el token se genera correctamente
            System.out.println("Generated token: " + loginResponse.getToken());
            return ResponseEntity.ok(loginResponse);
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        try {
            User user = this.userService.createUser(registerRequest);
            return ResponseEntity.ok(user);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }

    @PostMapping("/check-token")
    public ResponseEntity<Boolean> checkToken(@RequestBody CheckTokenRequest checkTokenRequest) {
        return ResponseEntity.ok(this.userService.checkToken(checkTokenRequest));
    }


    // UserController.java
    @PutMapping("/{userId}/change-password")
    public ResponseEntity<String> changePassword(@PathVariable Long userId, @RequestBody ChangePasswordRequest changePasswordRequest) {
        boolean success = this.userService.changePassword(userId, changePasswordRequest.getOldPassword(), changePasswordRequest.getNewPassword());

        if (success) {
            return ResponseEntity.ok("Contraseña cambiada con éxito");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al cambiar la contraseña");
        }
    }



}
