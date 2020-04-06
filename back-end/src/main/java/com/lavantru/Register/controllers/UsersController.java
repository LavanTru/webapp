package com.lavantru.Register.controllers;

import com.lavantru.Register.model.Users;
import com.lavantru.Register.dto.UsersDto;
import com.lavantru.Register.repositories.UsersRepository;
import com.lavantru.Register.services.IUsersService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UsersController {
    @Autowired
    private IUsersService usersService;

    @Autowired
    private UsersRepository repository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Users> getAllUsers() {
        return repository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Users getUserById(@PathVariable("id") ObjectId id) {
        return repository.findById(id);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> loginUser(@RequestBody UsersDto usersDto){
        return usersService.login(usersDto);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void modifyUserById(@PathVariable("id") String id, @Valid
    @RequestBody Users user) {
        user.setId(id);
        repository.save(user);
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public Users createUser(@Valid @RequestBody UsersDto usersDto) {
        return usersService.registerNewUser(usersDto);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable ObjectId id) {
        repository.delete(repository.findById(id));
    }

//    Handling the error if created user does not correspond with the annotation requirements. Outputs the field errors in a clear way
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}



