package com.lavantru.Register.repositories;

import com.lavantru.Register.Users;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<Users, String> {
//  declaration of custom find
    Users findById(ObjectId _id);
    Users findByEmail(String email);
}