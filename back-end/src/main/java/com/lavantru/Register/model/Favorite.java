package com.lavantru.Register.model;

import lombok.Data;

@Data
public class Favorite {
    private String washerId;
    private WashCycle washCycle;

    public Favorite(String washerId, WashCycle washCycle) {
        this.washerId = washerId;
        this.washCycle = washCycle;
    }
}