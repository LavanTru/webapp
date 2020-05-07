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
    private LocalDateTime dateRejected;
    private LocalDateTime dateConfirmed;
    //@NotNull @NotEmpty
    private Washee washee;
    //@NotNull @NotEmpty
    private Washer washer;
    @NotNull @NotEmpty
    private List<Job> jobs;

    public Order(
            UUID id,
            @NotNull @NotEmpty String status,
            LocalDateTime dateCreated,
            //@NotNull @NotEmpty
                    Washee washee,
            //@NotNull @NotEmpty
                    Washer washer,
            @NotNull @NotEmpty List<Job> jobs) {
        this.id = id;
        this.status = status;
        this.dateCreated = dateCreated;
        this.washee = washee;
        this.washer = washer;
        this.jobs = jobs;
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

    public void setDateRejected(LocalDateTime dateRejected) {
        this.dateRejected = dateRejected;
    }

    public LocalDateTime getDateConfirmed() {
        return dateConfirmed;
    }

    public void setDateConfirmed(LocalDateTime dateConfirmed) {
        this.dateConfirmed = dateConfirmed;
    }
}
