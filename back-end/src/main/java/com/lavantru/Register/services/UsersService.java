package com.lavantru.Register.services;

import com.lavantru.Register.errors.PasswordNotMatchingException;
import com.lavantru.Register.errors.UserNotFoundException;
import com.lavantru.Register.model.Users;
import com.lavantru.Register.dto.UsersDto;
import com.lavantru.Register.errors.UserAlreadyExistException;
import com.lavantru.Register.model.Washee;
import com.lavantru.Register.model.Washer;
import com.lavantru.Register.repositories.UsersRepository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsersService implements IUsersService {


  @Autowired
  private WasheeService washeeService;

  @Autowired
  private WasherService washerService;

  @Override
  public ResponseEntity<?> login(UsersDto accountDto) {
    String email = accountDto.getEmail();
    String password = accountDto.getPassword();

//    First check email and password for Washee, then Washer.
    if (washeeService.emailExists(email)) {
      if (washeeService.passwordMatches(email, password)) {
        return ResponseEntity.ok(washeeService.getWasheeByEmail(email));
      } else {
        throw new PasswordNotMatchingException(
            "Password does not match for that email address:" + email);
      }
    } else if (washerService.emailExists(email)) {
      if (washerService.passwordMatches(email, password)) {
        return ResponseEntity.ok(washerService.getWasherByEmail(email));
      } else {
        throw new PasswordNotMatchingException(
            "Password does not match for that email address:" + email);
      }
    } else {
      throw new UserNotFoundException("Account not found with that email address:" + email);
    }
  }


}