package com.lavantru.Register.controllers;

import com.lavantru.Register.model.Order;
import com.lavantru.Register.services.IOrderService;
import com.mongodb.lang.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private IOrderService orderService;

    @Autowired
    public OrderController(IOrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping(path = "/create")
    public void createOrder(@Valid @NonNull @RequestBody Order order){
        orderService.createOrder(order);
    }

}
