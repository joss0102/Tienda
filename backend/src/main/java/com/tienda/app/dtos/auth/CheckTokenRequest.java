package com.tienda.app.dtos.auth;

import lombok.Getter;

@Getter
public class CheckTokenRequest {

    private String username;
    private String token;

    public CheckTokenRequest(String username, String token) {
        this.username = username;
        this.token = token;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
