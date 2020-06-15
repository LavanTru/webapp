package com.lavantru.Register.model;

import lombok.Data;

/**
 * <h1>Temperature</h1>
 * This object contains the attributes of water temperature for washing
 *
 * @version 1.0
 * @since 2020
 */
@Data
public class Temperature {
    int celsius;
    String description;

    public Temperature(int celsius) {
        this.celsius = celsius;
    }
}
