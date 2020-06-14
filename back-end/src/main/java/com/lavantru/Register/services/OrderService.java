package com.lavantru.Register.services;

import com.lavantru.Register.dao.OrderDao;
import com.lavantru.Register.dto.WasheeOrderListDto;
import com.lavantru.Register.dto.WasherOrderListDto;
import com.lavantru.Register.model.Item;
import com.lavantru.Register.model.Order;
import com.lavantru.Register.model.Washee;
import com.lavantru.Register.model.Washer;

import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.*;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class OrderService implements IOrderService {

  private OrderDao orderDao;

  @Autowired
  private WasheeService washeeService;

  @Autowired
  private WasherService washerService;

  @Autowired
  public OrderService(@Qualifier("OrderDao") OrderDao orderDao) {
    this.orderDao = orderDao;
  }

  @Override
  public Order createOrder(Order order) {
    UUID id = UUID.randomUUID();
    order.setId(id);
    order.setStatus("NEW");
    order.setDateCreated(LocalDateTime.now());
    return orderDao.createOrder(order);
  }

  @Override
  public Optional<Order> getOrderBy(UUID id) {
    return orderDao.getOrderById(id);
  }

  @Override
  public List<Order> getAllOrders() {
    return orderDao.getAllOrders();
  }

  @Override
  public Order confirmOrder(UUID id) {
    Order order = orderDao.getOrderById(id).get();
    order.setStatus("CONFIRMED");
    order.setDateConfirmed(LocalDateTime.now());
    return orderDao.updateOrder(order);
  }

  @Override
  public Order rejectOrder(UUID id) {
    Order order = orderDao.getOrderById(id).get();
    order.setStatus("REJECTED");
    order.setDateRejected(LocalDateTime.now());
    return orderDao.updateOrder(order);
  }

  //  Using WasherOrderListDto to return the order together with Washee details
  @Override
  public List<WasherOrderListDto> getOrdersByWasherId(String id) {
    List<Order> orderList = orderDao.getOrdersByWasherId(id);
    List<WasherOrderListDto> washerOrderList = new ArrayList<>();
    SimpleDateFormat formatter = new SimpleDateFormat("HH:mm, MMM dd");

    for (Order order : orderList) {
      WasherOrderListDto washerOrderListDto = new WasherOrderListDto(order);
      Washee washee = washeeService.getWasheeById(new ObjectId(order.getWasheeId()));
      washerOrderListDto.setWasheeFirstName(washee.getFirstName());
      washerOrderListDto.setWasheeImage(washee.getImage());

      //Format dates
      String pickUp = formatter.format(order.getPickUpDate());
      String dropOff = formatter.format(order.getDropOffDate());
      washerOrderList.add(setDtoValues(order, washerOrderListDto,pickUp, dropOff));
    }
    return washerOrderList;
  }

  //  Using WasheeOrderListDto to return the order together with Washer details
  @Override
  public List<WasheeOrderListDto> getOrdersByWasheeId(String id) {
    List<Order> orderList = orderDao.getOrdersByWasheeId(id);
    List<WasheeOrderListDto> washeeOrderList = new ArrayList<>();
    SimpleDateFormat formatter = new SimpleDateFormat("HH:mm, MMM dd");

    for (Order order : orderList) {
      WasheeOrderListDto washeeOrderListDto = new WasheeOrderListDto(order);
      Washer washer = washerService.getWasherById(new ObjectId(order.getWasherId()));
      washeeOrderListDto.setWasherFirstName(washer.getFirstName());
      washeeOrderListDto.setWasherImage(washer.getImage());

      //Format dates
      String pickUp = formatter.format(order.getPickUpDate());
      String dropOff = formatter.format(order.getDropOffDate());
      washeeOrderList.add(setDtoValues(order, washeeOrderListDto, pickUp, dropOff));
    }
    return washeeOrderList;
  }

  private WasherOrderListDto setDtoValues(Order order, WasherOrderListDto washerOrderListDto, String pickUp, String dropOff) {
    washerOrderListDto.setOrderTotal(order.getOrderTotal());
    washerOrderListDto.setDeliveryByWashee(order.isDeliveryByWashee());
    washerOrderListDto.setPickup(pickUp);
    washerOrderListDto.setDropoff(dropOff);
    return washerOrderListDto;
  }

  private WasheeOrderListDto setDtoValues(Order order, WasheeOrderListDto washeeOrderListDto, String pickUp, String dropOff) {
    washeeOrderListDto.setOrderTotal(order.getOrderTotal());
    washeeOrderListDto.setDeliveryByWashee(order.isDeliveryByWashee());
    washeeOrderListDto.setPickup(pickUp);
    washeeOrderListDto.setDropoff(dropOff);
    return washeeOrderListDto;
  }

  @Override
  public Order updateOrder(Order order) {
    return orderDao.updateOrder(order);
  }
}
