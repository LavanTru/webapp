package com.lavantru.Register.dto;

import com.lavantru.Register.validation.PasswordMatches;
import com.lavantru.Register.validation.ValidEmail;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

//Using DTO pattern to decouple API from implementation. Database model and API request responses may have different structures.
//Password validation is done at the object level, not field level.
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

  public UsersDto(
      @NotNull @NotEmpty String firstName,
      @NotNull @NotEmpty String lastName,
      @NotNull @NotEmpty String email,
      @NotNull @NotEmpty String password,
      String matchingPassword) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.matchingPassword = matchingPassword;
  }

  public UsersDto() {
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getMatchingPassword() {
    return matchingPassword;
  }

  public void setMatchingPassword(String matchingPassword) {
    this.matchingPassword = matchingPassword;
  }

  @Override
  public String toString() {
    return "UsersDto{" +
        "firstName='" + firstName + '\'' +
        ", lastName='" + lastName + '\'' +
        ", email='" + email + '\'' +
        ", password='" + password + '\'' +
        ", matchingPassword='" + matchingPassword + '\'' +
        '}';
  }
}
