package com.lavantru.Register.services;

import com.lavantru.Register.errors.UserNotFoundException;
import com.lavantru.Register.model.Users;
import com.lavantru.Register.dto.UsersDto;
import com.lavantru.Register.errors.UserAlreadyExistException;
import java.util.List;

import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IUsersService {

  ResponseEntity<?> login(UsersDto usersDto);


}