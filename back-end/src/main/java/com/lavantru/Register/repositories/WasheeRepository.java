package com.lavantru.Register.repositories;

import com.lavantru.Register.model.Washee;
import com.lavantru.Register.model.Washer;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * <h1>WasheeRepository</h1>
 * Washee repository interface extends {@link MongoRepository}
 *
 * @version 1.0
 * @since 2020
 */
public interface WasheeRepository extends MongoRepository<Washee, String> {

  Washee findByEmail(String email);

  Washee findById(ObjectId _id);
}