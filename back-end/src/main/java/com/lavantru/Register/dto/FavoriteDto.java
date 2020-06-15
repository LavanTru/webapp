package com.lavantru.Register.dto;

import com.lavantru.Register.model.WashCycle;
import com.lavantru.Register.model.Washer;
import lombok.Data;

/**
 * <h1>FavoriteDto</h1>
 * This DTO is used to retrieve all washers and identify whether they are favorite or not to the washee.
 *
 * @version 1.0
 * @since 2020
 */
@Data
public class FavoriteDto {
    private Washer washer;
    private boolean isFavorite;
    private WashCycle cycle;

    public FavoriteDto(Washer washer, boolean isFavorite) {
        this.washer = washer;
        this.isFavorite = isFavorite;
    }
}
