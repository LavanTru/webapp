package com.lavantru.Register.dao;

import com.lavantru.Register.model.Washer;
import org.bson.types.ObjectId;

import java.util.List;

/**
 * <h1>WasherDao</h1>
 * Interface specifies the behavior of Washer Data Access Object.
 *
 * @version 1.0
 * @since 2020
 */
public interface WasherDao {

    Washer insertWasher(Washer washer);

    Washer getByEmail(String email);

    List<Washer> getAllWashers();

    Washer getWasherById(ObjectId id);
}
