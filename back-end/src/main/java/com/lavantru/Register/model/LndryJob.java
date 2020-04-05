package com.lavantru.Register.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

public class LndryJob {
    @Id
    public UUID id;
    @NotBlank
    public String job;

    public LndryJob(@JsonProperty("id") UUID id,
                    @JsonProperty("job") String job) {
        this.id = id;
        this.job = job;
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
}
