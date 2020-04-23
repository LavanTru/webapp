package com.lavantru.Register.services;

import com.lavantru.Register.errors.UserNotFoundException;
import com.lavantru.Register.model.Users;
import com.lavantru.Register.dto.UsersDto;
import com.lavantru.Register.errors.UserAlreadyExistException;
import java.util.List;

import org.springframework.http.ResponseEntity;

public interface IUsersService {

  List<Users> getAllUsers();
  Users registerNewUser(UsersDto usersDto) throws UserAlreadyExistException;
  ResponseEntity<?> login(UsersDto usersDto);
  Users getUserByEmail(String email) throws UserNotFoundException;
  boolean passwordMatches(String email, String password);
  boolean emailExists(String email);
}