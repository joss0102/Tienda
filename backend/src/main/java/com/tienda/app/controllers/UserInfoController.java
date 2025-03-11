package com.tienda.app.controllers;

import com.tienda.app.models.UserInfo;
import com.tienda.app.services.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user-info")
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @GetMapping("/{id}")
    public ResponseEntity<UserInfo> getUserInfoById(@PathVariable Long id) {
        Optional<UserInfo> userInfo = userInfoService.getUserInfoById(id);
        return userInfo.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<UserInfo> getUserInfoByUserId(@PathVariable Long userId) {
        Optional<UserInfo> userInfo = userInfoService.getUserInfoByUserId(userId);
        return userInfo.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<UserInfo> createUserInfo(@RequestBody UserInfo userInfo) {
        UserInfo createdUserInfo = userInfoService.createUserInfo(userInfo);
        return new ResponseEntity<>(createdUserInfo, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserInfo(@PathVariable Long id) {
        userInfoService.deleteUserInfo(id);
        return ResponseEntity.noContent().build();
    }
}
