package com.lavantru.Register.dao;

import com.lavantru.Register.model.Job;
import com.lavantru.Register.model.Order;

import java.util.UUID;

public interface OrderDao {

    int createOrder(Order order);

//    default int createOrder(Order order){
//        UUID id = UUID.randomUUID();
//        return  createOrder(id, order);
//    }
}
