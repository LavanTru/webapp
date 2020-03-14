package com.lavantru.TestRegister.controllers;

import com.lavantru.TestRegister.Customers;
import com.lavantru.TestRegister.repositories.CustomersRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomersController {
    @Autowired
    private CustomersRepository repository;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Customers> getAllCustomers() {
        return repository.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Customers getPetById(@PathVariable("id") ObjectId id) {
        return repository.findBy_id(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void modifyCustomertById(@PathVariable("id") ObjectId id, @Valid
    @RequestBody Customers customers) {
        customers.setId(id);
        repository.save(customers);
    }
    @RequestMapping(value = "/", method = RequestMethod.POST)
    public Customers createCustomer(@Valid @RequestBody Customers customers) {
        customers.setId(new ObjectId());
        repository.save(customers);
        return customers;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteCustomer(@PathVariable ObjectId id) {
        repository.delete(repository.findBy_id(id));
    }

}



