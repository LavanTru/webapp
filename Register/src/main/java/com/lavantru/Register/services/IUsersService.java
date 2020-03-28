package com.lavantru.Register.services;

import com.lavantru.Register.Users;
import com.lavantru.Register.dto.UsersDto;
import com.lavantru.Register.errors.UserAlreadyExistException;

public interface IUsersService {

  Users registerNewUser(UsersDto usersDto) throws UserAlreadyExistException;

}