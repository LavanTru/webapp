package com.lavantru.LaundryJob.model;

import java.util.UUID;

public class LaundryJob {
    public UUID id;
    public String job;

    public LaundryJob(UUID id, String job) {
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
