package com.lavantru.TestRegister.repositories;

import com.lavantru.TestRegister.Washee;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WasheeRepository extends MongoRepository<Washee, String> {
//  declaration of custom find?
//    Washee findBy_id(ObjectId _id);
}