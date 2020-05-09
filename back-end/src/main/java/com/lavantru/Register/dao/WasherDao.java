package com.lavantru.Register.dao;

import com.lavantru.Register.model.Job;
import com.lavantru.Register.model.Washer;
import org.bson.types.ObjectId;

import java.util.List;

public interface WasherDao {

    Washer insertWasher(Washer washer);

    Washer getByEmail(String email);

    List<Washer> getAllWashers();

    Washer getWasherById(ObjectId id);
}
