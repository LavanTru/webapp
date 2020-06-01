package com.lavantru.Register.model;

import lombok.Data;

@Data
public class Temperature {
    int celsius;
    String description;

    public Temperature(int celsius) {
        this.celsius = celsius;
    }
}
