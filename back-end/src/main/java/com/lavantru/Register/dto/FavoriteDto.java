package com.lavantru.Register.dto;

import com.lavantru.Register.model.WashCycle;
import com.lavantru.Register.model.Washer;
import lombok.Data;

@Data
public class FavoriteDto {
    private Washer washer;
    private WashCycle cycle;

    public FavoriteDto(Washer washer, WashCycle cycle) {
        this.washer = washer;
        this.cycle = cycle;
    }
}
