package com.lavantru.Register.services;

import com.lavantru.Register.model.Users;
import com.lavantru.Register.dto.UsersDto;
import com.lavantru.Register.errors.UserAlreadyExistException;
import com.lavantru.Register.repositories.UsersRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UsersService implements IUsersService {
  @Autowired
  private UsersRepository repository;

  @Transactional
  @Override
  public Users registerNewUser(UsersDto accountDto)
      throws UserAlreadyExistException {

    if (emailExists(accountDto.getEmail())) {
      throw new UserAlreadyExistException("There is an account with that email adress: " + accountDto.getEmail());
    }
    Users user = new Users();
    user.setId(new ObjectId().toString());
    user.setFirstName(accountDto.getFirstName());
    user.setLastName(accountDto.getLastName());
    user.setPassword(accountDto.getPassword());
    user.setEmail(accountDto.getEmail());
    return repository.save(user);
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