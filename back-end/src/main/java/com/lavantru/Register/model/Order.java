package com.lavantru.Register.model;

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
    @NotNull @NotEmpty
    private String status;
    private String notes;
    private LocalDateTime dateCreated;
    private LocalDateTime dateCompleted;
    private LocalDateTime dateClosed;
    private String washeeId;
    private String washerId;
    @NotNull @NotEmpty
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

    public LocalDateTime getDateClosed() {
        return dateClosed;
    }

    public void setDateClosed(LocalDateTime dateClosed) {
        this.dateClosed = dateClosed;
    }

    public Washee getWashee() {
        return washee;
    }

    public void setWashee(Washee washee) {
        this.washee = washee;
    }

    public Washer getWasher() {
        return washer;
    }

    public void setWasher(Washer washer) {
        this.washer = washer;
    }

    public List<Job> getJobs() {
        return jobs;
    }

    public void setJobs(List<Job> jobs) {
        this.jobs = jobs;
    }
}
