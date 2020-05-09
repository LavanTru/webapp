package com.lavantru.Register.dao;

import com.lavantru.Register.model.Washee;
import org.bson.types.ObjectId;

import java.util.List;

public interface WasheeDao {

  int insertWashee(Washee washee);

  Washee getByEmail(String email);

  List<Washee> getAllWashees();

  Washee getWasheeById(ObjectId id);
}
