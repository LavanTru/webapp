package com.lavantru.TestRegister.controllers;

import com.lavantru.TestRegister.Users;
import com.lavantru.TestRegister.repositories.UsersRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UsersController {
    @Autowired
    private UsersRepository repository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Users> getAllUsers() {
        return repository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Users getPetById(@PathVariable("id") ObjectId id) {
        return repository.findById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void modifyUserById(@PathVariable("id") String id, @Valid
    @RequestBody Users user) {
        user.setId(id);
        repository.save(user);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Users createUser(@Valid @RequestBody Users user) {
        user.setId(new ObjectId().toString());
        repository.save(user);
        return user;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable ObjectId id) {
        repository.delete(repository.findById(id));
    }
}



