package com.lavantru.Register.dao;

import com.lavantru.Register.model.Order;
import com.lavantru.Register.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository("OrderDao")
public class OrderDataAccessService implements OrderDao {

    @Autowired
    private OrderRepository repository;

    @Override
    public int createOrder(Order order) {
        repository.save(order);
        return 1;
    }
}
