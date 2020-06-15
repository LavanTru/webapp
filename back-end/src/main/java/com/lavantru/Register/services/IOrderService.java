package com.lavantru.Register.services;

import com.lavantru.Register.dto.WasheeOrderListDto;
import com.lavantru.Register.dto.WasherOrderListDto;
import com.lavantru.Register.model.Order;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * <h1>IOrderService</h1>
 * Interface that defines OrderService behavior
 *
 * @version 1.0
 * @since 2020
 */
public interface IOrderService {

  Order createOrder(Order order);

  Optional<Order> getOrderBy(UUID id);

  List<Order> getAllOrders();

  Order confirmOrder(UUID id);

  Order rejectOrder(UUID id);

  List<WasherOrderListDto> getOrdersByWasherId(String id);

  List<WasheeOrderListDto> getOrdersByWasheeId(String id);

  Order updateOrder(Order order);

  WasherOrderListDto getWasherOrderListDtoBy(UUID id);

  WasheeOrderListDto getWasheeOrderListDtoBy(UUID id);
}
