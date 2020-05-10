package com.lavantru.Register.model;

import lombok.Data;
import org.bson.types.ObjectId;
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
  private String status;
  private String notes;
  private LocalDateTime dateCreated;
  private LocalDateTime dateCompleted;
  private LocalDateTime dateRejected;
  private LocalDateTime dateConfirmed;
  private String washeeId;
  private String washerId;
  @NotNull
  @NotEmpty
  private List<Item> items;

  public Order(
      UUID id,
      @NotNull @NotEmpty String status,
      LocalDateTime dateCreated,
      String washeeId,
      String washerId,
      @NotNull @NotEmpty List<Item> items) {
    this.id = id;
    this.status = status;
    this.dateCreated = dateCreated;
    this.washeeId = washeeId;
    this.washerId = washerId;
    this.items = items;
  }

}
