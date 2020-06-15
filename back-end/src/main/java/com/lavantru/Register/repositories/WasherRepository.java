package com.lavantru.Register.repositories;

import com.lavantru.Register.model.Washer;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * <h1>WasherRepository</h1>
 * Washer repository interface extends {@link MongoRepository}
 *
 * @version 1.0
 * @since 2020
 */
public interface WasherRepository extends MongoRepository<Washer, String> {
    //  declaration of custom find
    Washer findById(ObjectId _id);

    Washer findByEmail(String email);
}