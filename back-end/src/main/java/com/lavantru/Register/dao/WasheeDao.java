package com.lavantru.Register.dao;

import com.lavantru.Register.model.Washee;
import org.bson.types.ObjectId;

import java.util.List;

/**
 * <h1>WasheeDao</h1>
 * Interface specifies the behavior of Washee Data Access Object.
 *
 * @version 1.0
 * @since 2020
 */
public interface WasheeDao {

  Washee insertWashee(Washee washee);

  Washee getByEmail(String email);

  List<Washee> getAllWashees();

  Washee getWasheeById(ObjectId id);
}
