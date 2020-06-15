package com.lavantru.Register.dao;

import com.lavantru.Register.model.Order;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * <h1>OrderDao</h1>
 * Interface specifies the behavior of Order Data Access Object.
 *
 * @version 1.0
 * @since 2020
 */
public interface OrderDao {

  Order createOrder(Order order);

  Optional<Order> getOrderById(UUID id);

  List<Order> getAllOrders();

  Order updateOrder(Order order);

  List<Order> getOrdersByWasherId(String id);

  List<Order> getOrdersByWasheeId(String id);
}
