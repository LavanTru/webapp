package com.lavantru.Register.errors;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;

public class GenericResponse {
  private String message;
  private String error;
  private HttpStatus status;

  public GenericResponse(final String message) {
    super();
    this.message = message;
  }

  public GenericResponse(final String message, final String error,final HttpStatus status) {
    super();
    this.message = message;
    this.error = error;
    this.status = status;
  }

  public GenericResponse(List<ObjectError> allErrors, String error) {
    this.error = error;
    String temp = allErrors.stream().map(e -> {
      if (e instanceof FieldError) {
        return "{\"field\":\"" + ((FieldError) e).getField() + "\",\"defaultMessage\":\"" + e.getDefaultMessage() + "\"}";
      } else {
        return "{\"object\":\"" + e.getObjectName() + "\",\"defaultMessage\":\"" + e.getDefaultMessage() + "\"}";
      }
    }).collect(Collectors.joining(","));
    this.message = "[" + temp + "]";
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(final String message) {
    this.message = message;
  }

  public String getError() {
    return error;
  }

  public void setError(final String error) {
    this.error = error;
  }

  public HttpStatus getStatus() {
    return status;
  }

  public void setStatus(HttpStatus status) {
    this.status = status;
  }
}
