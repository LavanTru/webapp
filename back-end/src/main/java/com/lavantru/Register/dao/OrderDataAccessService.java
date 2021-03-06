package com.lavantru.Register.dao;

import com.lavantru.Register.model.Order;
import com.lavantru.Register.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * <h1>OrderDataAccessService</h1>
 * Order data access service connected with mongo db repository.
 *
 * @see com.lavantru.Register.dao.OrderDao
 * @version 1.0
 * @since 2020
 */
@Repository("OrderDao")
public class OrderDataAccessService implements OrderDao {

    @Autowired
    private OrderRepository repository;

    @Override
    public Order createOrder(Order order) {
        return repository.save(order);
    }

    @Override
    public Optional<Order> getOrderById(UUID id) {
        return repository.findById(id);
    }

    @Override
    public List<Order> getAllOrders() {
        return repository.findAll();
    }

    @Override
    public Order updateOrder(Order order) {
        return repository.save(order);
    }

    @Override
    public List<Order> getOrdersByWasherId(String id) {
        return repository.findByWasherId(id);
    }

    @Override
    public List<Order> getOrdersByWasheeId(String id) {
        return repository.findByWasheeId(id);
    }
}
