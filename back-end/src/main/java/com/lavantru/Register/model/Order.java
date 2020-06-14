package com.lavantru.Register.model;

import java.util.Date;
import lombok.Data;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Data
public class Order {

  @Id
  private UUID id;
  private String status, notes, washeeId, washerId, washCycle, temperature;
  private LocalDateTime dateCreated;
  private LocalDateTime dateCompleted;
  private LocalDateTime dateRejected;
  private LocalDateTime dateConfirmed;
  @NotNull
  @NotEmpty
  private List<Item> items;
  private Date dropOffDate;
  private Date pickUpDate;
  private double orderTotal;
  boolean deliveryByWashee;

  public Order(
      UUID id,
      @NotNull @NotEmpty String status,
      LocalDateTime dateCreated,
      String washeeId,
      String washerId,
      @NotNull @NotEmpty List<Item> items,
      Date dropOffDate,
      Date pickUpDate,
      double orderTotal,
      boolean deliveryByWashee) {
    this.id = id;
    this.status = status;
    this.dateCreated = dateCreated;
    this.washeeId = washeeId;
    this.washerId = washerId;
    this.items = items;
    this.dropOffDate = dropOffDate;
    this.pickUpDate = pickUpDate;
    this.orderTotal = orderTotal;
    this.deliveryByWashee = deliveryByWashee;
  }

}
