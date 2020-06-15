package com.lavantru.Register.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

/**
 * <h1>Job</h1>
 * This object contains the attributes of laundry jobs
 *
 * @version 1.0
 * @since 2020
 */
@Data
public class Job {
    @Id
    private UUID id;
    @NotBlank
    private String job;
    private double price;
    private String speed;
    private boolean isActive;

    public Job(@JsonProperty("id") UUID id,
               @JsonProperty("job") String job) {
        this.id = id;
        this.job = job;
        this.isActive = true;
    }
}
