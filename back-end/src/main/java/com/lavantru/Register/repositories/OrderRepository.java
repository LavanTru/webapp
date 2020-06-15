package com.lavantru.Register.repositories;

import com.lavantru.Register.model.Order;
import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;
import java.util.UUID;

/**
 * <h1>OrderRepository</h1>
 * Order repository interface extends {@link MongoRepository}
 *
 * @version 1.0
 * @since 2020
 */
public interface OrderRepository extends MongoRepository <Order, UUID> {

    Optional<Order> findById(UUID id);

    List<Order> findByWasherId(String id);

    List<Order> findByWasheeId(String id);
}
