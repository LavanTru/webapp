package com.lavantru.Register.dto;

import com.lavantru.Register.model.Item;
import com.lavantru.Register.model.Order;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * <h1>WasheeOrderListDto</h1>
 * This DTO is used to retrieve order together with Washer details in order to reduce front-end calls to back-end for each washer.
 *
 * @version 1.0
 * @since 2020
 */
@Data
public class WasheeOrderListDto {
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
  private String washerId;
  private String washerFirstName;
  private String washerImage;
  @NotNull
  @NotEmpty
  private String washeeId;
  @NotNull
  @NotEmpty
  private List<Item> items;

  public WasheeOrderListDto(UUID id, String status, String notes, LocalDateTime dateCreated,
      LocalDateTime dateCompleted, LocalDateTime dateRejected, LocalDateTime dateConfirmed,
      @NotNull @NotEmpty String washerId,
      String washerFirstName,
      String washerImage,
      @NotNull @NotEmpty String washeeId,
      @NotNull @NotEmpty List<Item> items) {
    this.id = id;
    this.status = status;
    this.notes = notes;
    this.dateCreated = dateCreated;
    this.dateCompleted = dateCompleted;
    this.dateRejected = dateRejected;
    this.dateConfirmed = dateConfirmed;
    this.washerId = washerId;
    this.washerFirstName = washerFirstName;
    this.washerImage = washerImage;
    this.washeeId = washeeId;
    this.items = items;
  }
  public WasheeOrderListDto(Order order){
    this.id = order.getId();
    this.status = order.getStatus();
    this.notes = order.getNotes();
    this.dateCreated = order.getDateCreated();
    this.dateCompleted = order.getDateCompleted();
    this.dateRejected = order.getDateRejected();
    this.dateConfirmed = order.getDateConfirmed();
    this.washerId = order.getWasherId();
    this.washeeId = order.getWasheeId();
    this.items = order.getItems();
  }

}