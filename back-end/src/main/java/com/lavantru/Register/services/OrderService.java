package com.lavantru.Register.services;

import com.lavantru.Register.dao.OrderDao;
import com.lavantru.Register.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class OrderService implements IOrderService {

    private OrderDao orderDao;

    @Autowired
    public OrderService(@Qualifier("OrderDao") OrderDao orderDao) {
        this.orderDao = orderDao;
    }

    @Override
    public int createOrder(Order order) {
        UUID id = UUID.randomUUID();
        order.setId(id);
        order.setDateCreated(LocalDateTime.now());
        System.out.println(order.toString());
        return orderDao.createOrder(order);
    }
}
