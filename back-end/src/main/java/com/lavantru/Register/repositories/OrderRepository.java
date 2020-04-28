package com.lavantru.Register.repositories;

import com.lavantru.Register.model.Order;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository <Order, ObjectId> {
}
