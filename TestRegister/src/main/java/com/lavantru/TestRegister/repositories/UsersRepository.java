package com.lavantru.TestRegister.repositories;

import com.lavantru.TestRegister.Users;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<Users, String> {
//  declaration of custom find
    Users findById(ObjectId _id);
}