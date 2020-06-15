package com.lavantru.Register.dto;

import com.lavantru.Register.model.Address;
import com.lavantru.Register.model.Item;
import com.lavantru.Register.model.Order;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * <h1>WasherOrderListDto</h1>
 * This DTO is used to retrieve order together with Washee details in order to reduce front-end calls to back-end for each washee.
 *
 * @version 1.0
 * @since 2020
 */
@Data
public class WasherOrderListDto {

  private UUID id;
  private String status;
  private String notes;
  private LocalDateTime dateCreated;
  private LocalDateTime dateCompleted;
  private LocalDateTime dateRejected;
  private LocalDateTime dateConfirmed;
  private String pickup;
  private String dropoff;
  private double orderTotal;
  private boolean deliveryByWashee;
  @NotNull
  @NotEmpty
  private String washeeId;
  private String washeeFirstName;
  private String washeeImage;
  @NotNull
  @NotEmpty
  private String washerId;
  @NotNull
  @NotEmpty
  private List<Item> items;
  private Address address;
  private String washCycle;
  private String temperature;

  public WasherOrderListDto(UUID id, String status, String notes, LocalDateTime dateCreated,
      LocalDateTime dateCompleted, LocalDateTime dateRejected, LocalDateTime dateConfirmed,
      String pickup, String dropoff, double orderTotal, boolean deliveryByWashee,
      @NotNull @NotEmpty String washeeId, String washeeFirstName, String washeeImage,
      @NotNull @NotEmpty String washerId,
      @NotNull @NotEmpty List<Item> items, Address address, String washCycle,
      String temperature) {
    this.id = id;
    this.status = status;
    this.notes = notes;
    this.dateCreated = dateCreated;
    this.dateCompleted = dateCompleted;
    this.dateRejected = dateRejected;
    this.dateConfirmed = dateConfirmed;
    this.pickup = pickup;
    this.dropoff = dropoff;
    this.orderTotal = orderTotal;
    this.deliveryByWashee = deliveryByWashee;
    this.washeeId = washeeId;
    this.washeeFirstName = washeeFirstName;
    this.washeeImage = washeeImage;
    this.washerId = washerId;
    this.items = items;
    this.address = address;
    this.washCycle = washCycle;
    this.temperature = temperature;
  }

  public WasherOrderListDto(Order order) {
    this.id = order.getId();
    this.status = order.getStatus();
    this.notes = order.getNotes();
    this.dateCreated = order.getDateCreated();
    this.dateCompleted = order.getDateCompleted();
    this.dateRejected = order.getDateRejected();
    this.dateConfirmed = order.getDateConfirmed();
    this.washeeId = order.getWasheeId();
    this.washerId = order.getWasherId();
    this.items = order.getItems();
    this.washCycle = order.getWashCycle();
    this.temperature = order.getTemperature();
  }

}
