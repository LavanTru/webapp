package com.lavantru.TestRegister.repositories;

import com.lavantru.TestRegister.Customers;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomersRepository extends MongoRepository<Customers, String> {
Customers findById(ObjectId id);
}