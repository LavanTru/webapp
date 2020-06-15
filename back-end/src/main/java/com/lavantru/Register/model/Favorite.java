package com.lavantru.Register.model;

import lombok.Data;

/**
 * <h1>Favorite</h1>
 * This object contains the attributes of favorite washers
 *
 * @version 1.0
 * @since 2020
 */
@Data
public class Favorite {
    private String washerId;
    private WashCycle washCycle;

    public Favorite(String washerId, WashCycle washCycle) {
        this.washerId = washerId;
        this.washCycle = washCycle;
    }
}