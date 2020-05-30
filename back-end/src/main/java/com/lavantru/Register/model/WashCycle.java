package com.lavantru.Register.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class WashCycle {
    @NotEmpty @NotNull
    String cycle;
    String description;
    Temperature temperature;

    public WashCycle(@NotEmpty @NotNull String cycle, String description, Temperature temperature) {
        this.cycle = cycle;
        this.description = description;
        this.temperature = temperature;
    }
}