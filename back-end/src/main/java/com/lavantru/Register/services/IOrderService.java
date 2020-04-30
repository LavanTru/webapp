package com.lavantru.Register.services;

import com.lavantru.Register.model.Order;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface IOrderService {

    public int createOrder(Order order);

    public Optional<Order> getOrderBy(UUID id);

    public List<Order> getAllOrders();
}
