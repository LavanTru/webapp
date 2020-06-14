package com.lavantru.Register.dto;

import com.lavantru.Register.model.Item;
import com.lavantru.Register.model.Order;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

//This DTO is used to retrieve order together with Washer details in order to reduce front-end calls to back-end for each washer.
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

  public String getWasherId() {
    return washerId;
  }

  public void setWasherId(String washerId) {
    this.washerId = washerId;
  }

  public String getWasherFirstName() {
    return washerFirstName;
  }

  public void setWasherFirstName(String washerFirstName) {
    this.washerFirstName = washerFirstName;
  }

  public String getWasherImage() {
    return washerImage;
  }

  public void setWasherImage(String washerImage) {
    this.washerImage = washerImage;
  }

  public String getWasheeId() {
    return washeeId;
  }

  public void setWasheeId(String washeeId) {
    this.washeeId = washeeId;
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
