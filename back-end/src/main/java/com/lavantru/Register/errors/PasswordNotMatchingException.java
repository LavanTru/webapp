package com.lavantru.Register.errors;

public final class PasswordNotMatchingException extends RuntimeException {

  private static final long serialVersionUID = 5861310537366287163L;

  public PasswordNotMatchingException() {
    super();
  }

  public PasswordNotMatchingException(final String message, final Throwable cause) {
    super(message, cause);
  }

  public PasswordNotMatchingException(final String message) {
    super(message);
  }

  public PasswordNotMatchingException(final Throwable cause) {
    super(cause);
  }

}
