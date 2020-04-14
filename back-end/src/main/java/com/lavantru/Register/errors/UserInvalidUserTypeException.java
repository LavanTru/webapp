package com.lavantru.Register.errors;

public class UserInvalidUserTypeException extends RuntimeException {
    public UserInvalidUserTypeException(String message) {
        super(message);
    }
}
