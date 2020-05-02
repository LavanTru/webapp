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
}
