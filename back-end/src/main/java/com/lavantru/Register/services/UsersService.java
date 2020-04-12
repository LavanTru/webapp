package com.lavantru.Register.services;

import com.lavantru.Register.errors.PasswordNotMatchingException;
import com.lavantru.Register.errors.UserNotFoundException;
import com.lavantru.Register.model.Users;
import com.lavantru.Register.dto.UsersDto;
import com.lavantru.Register.errors.UserAlreadyExistException;
import com.lavantru.Register.repositories.UsersRepository;
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
  private UsersRepository repository;

  @Transactional
  @Override
  public Users registerNewUser(UsersDto accountDto)
      throws UserAlreadyExistException {

    if (emailExists(accountDto.getEmail())) {
      throw new UserAlreadyExistException("There is an account with that email address: " + accountDto.getEmail());
    }
    Users user = new Users();
    user.setId(new ObjectId().toString());
    user.setFirstName(accountDto.getFirstName());
    user.setLastName(accountDto.getLastName());
    user.setPassword(accountDto.getPassword());
    user.setEmail(accountDto.getEmail());
    user.setUserType(accountDto.getUserType());
    return repository.save(user);
  }

  public ResponseEntity<?> login(UsersDto accountDto){
    String email = accountDto.getEmail();
    if (emailExists(email) && passwordMatches(email,accountDto.getPassword())){
//      return repository.findByEmail(email);
    return ResponseEntity.ok(repository.findByEmail(email));
    }
    else if (!emailExists(email)){
      throw new UserNotFoundException("Account not found with that email address:" + email);
    }
    else if (!passwordMatches(email,accountDto.getPassword())){
      throw new PasswordNotMatchingException("Password does not match  for that email address:" + email);
    }
    else{
      return ResponseEntity.badRequest().build();
    }
  }
  public Users getUserByEmail(String email) throws UserNotFoundException {
    if (!emailExists(email)) {
      throw new UserNotFoundException("There is no account with that email address: " + email);
    }
    return repository.findByEmail(email);
  }

  public List<Users> getUsersByType(String userType){
    List<Users> userTypeList = new ArrayList<>();
    repository.findByUserType(userType)
    .forEach(userTypeList::add);
    return userTypeList;
    }


  private boolean emailExists(String email) {
    Users user = repository.findByEmail(email);
    if (user != null) {
      return true;
    }
    return false;
  }

  private boolean passwordMatches(String email, String password){
    Users user = repository.findByEmail(email);
    if (user.getPassword().equals(password)){
      return true;
    }
    return false;
  }
}