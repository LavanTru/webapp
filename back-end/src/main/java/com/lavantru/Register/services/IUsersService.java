package com.lavantru.Register.services;

import com.lavantru.Register.errors.UserNotFoundException;
import com.lavantru.Register.model.Users;
import com.lavantru.Register.dto.UsersDto;
import com.lavantru.Register.errors.UserAlreadyExistException;
import org.springframework.http.ResponseEntity;

public interface IUsersService {

  Users registerNewUser(UsersDto usersDto) throws UserAlreadyExistException;
  ResponseEntity<?> login(UsersDto usersDto);
  Users getUserByEmail(String email) throws UserNotFoundException;
}