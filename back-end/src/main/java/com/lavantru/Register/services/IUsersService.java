package com.lavantru.Register.services;

import com.lavantru.Register.dto.UsersDto;
import org.springframework.http.ResponseEntity;

/**
 * <h1>IUsersService</h1>
 * Interface that defines UsersService behavior
 *
 * @version 1.0
 * @since 2020
 */
public interface IUsersService {

  ResponseEntity<?> login(UsersDto usersDto);


}