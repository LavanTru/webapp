package com.lavantru.Register.services;

import com.lavantru.Register.dto.WasheeOrderListDto;
import com.lavantru.Register.dto.WasherOrderListDto;
import com.lavantru.Register.model.Order;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface IOrderService {

  public Order createOrder(Order order);

  public Optional<Order> getOrderBy(UUID id);

  public List<Order> getAllOrders();

  public Order confirmOrder(UUID id);

  public Order rejectOrder(UUID id);

  public List<WasherOrderListDto> getOrdersByWasherId(String id);

  public List<WasheeOrderListDto> getOrdersByWasheeId(String id);

  public Order updateOrder(Order order);
}
