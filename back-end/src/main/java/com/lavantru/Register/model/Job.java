package com.lavantru.Register.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

public class Job {
    @Id
    private UUID id;
    @NotBlank
    private String job;
    private boolean isActive;

    public Job(@JsonProperty("id") UUID id,
               @JsonProperty("job") String job) {
        this.id = id;
        this.job = job;
        this.isActive = true;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }
}
