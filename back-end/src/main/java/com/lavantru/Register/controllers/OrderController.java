package com.lavantru.Register.controllers;

import com.lavantru.Register.dto.WasherOrderListDto;
import com.lavantru.Register.model.Item;
import com.lavantru.Register.model.Order;
import com.lavantru.Register.services.IOrderService;
import com.mongodb.lang.NonNull;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

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
    public Order createOrder(@Valid @NonNull @RequestBody Order order){
        return orderService.createOrder(order);
    }
    @PutMapping(path = "/confirm/{id}")
    public Order confirmOrder(@PathVariable("id") UUID id){
        return orderService.confirmOrder(id);
    }
    @PutMapping(path = "/reject/{id}")
    public Order rejectOrder(@PathVariable("id") UUID id){
        return orderService.rejectOrder(id);
    }

    @GetMapping()
    public List<Order> getAllOrders(){
        return orderService.getAllOrders();
    }

    @GetMapping(path = "/{id}")
    public Order getOrderById(@PathVariable("id") UUID id){
        return orderService.getOrderBy(id).orElse(null);
    }

    @GetMapping(path = "/washer/{id}")
    public List<WasherOrderListDto> getOrdersByWasherId(@PathVariable("id") String id){
        return orderService.getOrdersByWasherId(id);
    }
}
