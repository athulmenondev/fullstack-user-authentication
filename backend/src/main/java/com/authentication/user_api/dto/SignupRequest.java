package com.authentication.user_api.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupRequest {
    private String username;
    private  String password;
    private  String phonenumber;
    private  String email;

    public SignupRequest(){}
}
