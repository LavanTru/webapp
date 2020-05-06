package com.lavantru.Register.dao;

import com.lavantru.Register.model.Order;
import com.lavantru.Register.repositories.OrderRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("OrderDao")
public class OrderDataAccessService implements OrderDao {

    @Autowired
    private OrderRepository repository;

    @Override
    public int createOrder(Order order) {
        repository.save(order);
        return 1;
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
    public Order  updateOrder(Order order) {
        return repository.save(order);
    }
}
