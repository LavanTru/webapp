package com.lavantru.Register.dao;

import com.lavantru.Register.model.Job;
import com.lavantru.Register.model.Washer;
import org.bson.types.ObjectId;

import java.util.List;

public interface WasherDao {

    int insertWasher(Washer washer);

    Washer findByEmail(String email);

    Washer findById(ObjectId _id);

    List<Washer> getAllWashers();

    Washer getWasherById(ObjectId id);
}
