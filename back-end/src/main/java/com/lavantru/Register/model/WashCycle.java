package com.lavantru.Register.model;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * <h1>WashCycle</h1>
 * This object contains the attributes of landry wash cycles
 *
 * @version 1.0
 * @since 2020
 */
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