package com.authentication.user_api.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginRequest {

    private String username;
    private String password;

    public LoginRequest(){}

}
