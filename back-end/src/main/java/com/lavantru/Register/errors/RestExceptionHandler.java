package com.lavantru.Register.errors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {

  @Autowired
  private MessageSource messages;

  public RestExceptionHandler() {
    super();
  }

  // 409
  @ExceptionHandler({ UserAlreadyExistException.class })
  public ResponseEntity<Object> handleUserAlreadyExist(final RuntimeException ex, final WebRequest request) {
    logger.error("409 Status Code", ex);
    logger.error(request.getLocale());
    final GenericResponse bodyOfResponse = new GenericResponse(messages.getMessage("message.regError", null, request.getLocale()), "UserAlreadyExist",HttpStatus.CONFLICT);
    return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.CONFLICT, request);
  }
  // 404
  @ExceptionHandler({ UserNotFoundException.class })
  public ResponseEntity<Object> handleUserNotFound(final RuntimeException ex, final WebRequest request) {
    logger.error("404 Status Code", ex);
    final GenericResponse bodyOfResponse = new GenericResponse(messages.getMessage("message.userNotFound", null, request.getLocale()), "UserNotFound", HttpStatus.NOT_FOUND);
    return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.NOT_FOUND, request);
  }
  // 401
  @ExceptionHandler({ PasswordNotMatchingException.class })
  public ResponseEntity<Object> handlePasswordNotMatching(final RuntimeException ex, final WebRequest request) {
    logger.error("401 Status Code", ex);
    final GenericResponse bodyOfResponse = new GenericResponse(messages.getMessage("message.unauth", null, request.getLocale()), "UserNotFound", HttpStatus.UNAUTHORIZED);
    return handleExceptionInternal(ex, bodyOfResponse, new HttpHeaders(), HttpStatus.UNAUTHORIZED, request);
  }
}
