package com.lavantru.Register.repositories;

import com.lavantru.Register.model.Order;
import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

public interface OrderRepository extends MongoRepository <Order, UUID> {

    Optional<Order> findById(UUID id);

    List<Order> findByWasherId(String id);

    List<Order> findByWasheeId(String id);
}
