package com.lavantru.Register.dao;

import com.lavantru.Register.model.Order;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface OrderDao {

  Order createOrder(Order order);

  Optional<Order> getOrderById(UUID id);

  List<Order> getAllOrders();

  Order updateOrder(Order order);

  List<Order> getOrdersByWasherId(String id);
}
