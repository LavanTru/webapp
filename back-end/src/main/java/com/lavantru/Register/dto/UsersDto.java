package com.lavantru.Register.dto;

import com.lavantru.Register.validation.PasswordMatches;
import com.lavantru.Register.validation.ValidEmail;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * <h1>UsersDto</h1>
 * Using DTO pattern to decouple API from implementation. Database model and API request responses may have different structures.
 * Password validation is done at the object level, not field level.
 *
 * @version 1.0
 * @since 2020
 */
@Data
@PasswordMatches
public class UsersDto {

  @NotNull
  @NotEmpty
  private String firstName;
  @NotNull
  @NotEmpty
  private String lastName;
  @ValidEmail
  @NotNull
  @NotEmpty
  private String email;

  @NotNull
  @NotEmpty
  private String password;
  private String matchingPassword;

  @NotNull
  @NotEmpty
  private String userType;

  public UsersDto(
      @NotNull @NotEmpty String firstName,
      @NotNull @NotEmpty String lastName,
      @NotNull @NotEmpty String email,
      @NotNull @NotEmpty String password,
      @NotNull @NotEmpty String userType,
      String matchingPassword) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.matchingPassword = matchingPassword;
    this.userType = userType;
  }

  public UsersDto() {
  }

  @Override
  public String toString() {
    return "UsersDto{" +
        "firstName='" + firstName + '\'' +
        ", lastName='" + lastName + '\'' +
        ", email='" + email + '\'' +
        ", password='" + password + '\'' +
        ", matchingPassword='" + matchingPassword + '\'' +
        ", userType='" + userType + '\'' +
        '}';
  }
}
