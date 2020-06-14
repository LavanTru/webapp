package com.lavantru.Register.dto;

import com.lavantru.Register.model.Item;
import com.lavantru.Register.model.Order;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

//This DTO is used to retrieve order together with Washee details in order to reduce front-end calls to back-end for each washee.
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

  public WasherOrderListDto(UUID id, String status, String notes, LocalDateTime dateCreated,
      LocalDateTime dateCompleted, LocalDateTime dateRejected, LocalDateTime dateConfirmed,
      @NotNull @NotEmpty String washeeId,
      String washeeFirstName,
      String washeeImage,
      @NotNull @NotEmpty String washerId,
      @NotNull @NotEmpty List<Item> items) {
    this.id = id;
    this.status = status;
    this.notes = notes;
    this.dateCreated = dateCreated;
    this.dateCompleted = dateCompleted;
    this.dateRejected = dateRejected;
    this.dateConfirmed = dateConfirmed;
    this.washeeId = washeeId;
    this.washeeFirstName = washeeFirstName;
    this.washeeImage = washeeImage;
    this.washerId = washerId;
    this.items = items;
  }
  public WasherOrderListDto(Order order){
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
  }

  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public String getNotes() {
    return notes;
  }

  public void setNotes(String notes) {
    this.notes = notes;
  }

  public LocalDateTime getDateCreated() {
    return dateCreated;
  }

  public void setDateCreated(LocalDateTime dateCreated) {
    this.dateCreated = dateCreated;
  }

  public LocalDateTime getDateCompleted() {
    return dateCompleted;
  }

  public void setDateCompleted(LocalDateTime dateCompleted) {
    this.dateCompleted = dateCompleted;
  }

  public LocalDateTime getDateRejected() {
    return dateRejected;
  }

  public void setDateRejected(LocalDateTime dateRejected) {
    this.dateRejected = dateRejected;
  }

  public LocalDateTime getDateConfirmed() {
    return dateConfirmed;
  }

  public void setDateConfirmed(LocalDateTime dateConfirmed) {
    this.dateConfirmed = dateConfirmed;
  }

  public String getWasheeId() {
    return washeeId;
  }

  public void setWasheeId(String washeeId) {
    this.washeeId = washeeId;
  }

  public String getWasheeFirstName() {
    return washeeFirstName;
  }

  public void setWasheeFirstName(String washeeFirstName) {
    this.washeeFirstName = washeeFirstName;
  }

  public String getWasheeImage() {
    return washeeImage;
  }

  public void setWasheeImage(String washeeImage) {
    this.washeeImage = washeeImage;
  }

  public String getWasherId() {
    return washerId;
  }

  public void setWasherId(String washerId) {
    this.washerId = washerId;
  }

  public List<Item> getItems() {
    return items;
  }

  public void setItems(List<Item> items) {
    this.items = items;
  }

  public String getPickup() {
    return pickup;
  }

  public void setPickup(String pickup) {
    this.pickup = pickup;
  }

  public String getDropoff() {
    return dropoff;
  }

  public void setDropoff(String dropoff) {
    this.dropoff = dropoff;
  }

  public double getOrderTotal() {
    return orderTotal;
  }

  public void setOrderTotal(double orderTotal) {
    this.orderTotal = orderTotal;
  }

  public boolean isDeliveryByWashee() {
    return deliveryByWashee;
  }

  public void setDeliveryByWashee(boolean deliveryByWashee) {
    this.deliveryByWashee = deliveryByWashee;
  }
}
