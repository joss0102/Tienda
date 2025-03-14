package com.tienda.app.dtos.auth;

import lombok.Getter;

// ChangePasswordRequest.java
@Getter
public class ChangePasswordRequest {
    // Getters y Setters
    private String oldPassword;
    private String newPassword;

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
