package com.lavantru.Register.dao;

import com.lavantru.Register.model.Order;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface OrderDao {

    int createOrder(Order order);

    Optional<Order> getOrderById(UUID id);

    List<Order> getAllOrders();
}
