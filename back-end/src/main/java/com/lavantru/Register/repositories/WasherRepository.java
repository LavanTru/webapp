package com.lavantru.Register.repositories;

import com.lavantru.Register.model.Users;
import com.lavantru.Register.model.Washer;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface WasherRepository extends MongoRepository<Washer, String> {
    //  declaration of custom find
    Washer findById(ObjectId _id);
    Washer findByEmail(String email);
}