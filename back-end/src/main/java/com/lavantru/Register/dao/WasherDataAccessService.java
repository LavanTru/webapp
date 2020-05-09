package com.lavantru.Register.dao;

import com.lavantru.Register.model.Job;
import com.lavantru.Register.model.Washer;
import com.lavantru.Register.repositories.WasherRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("WasherDao")
public class WasherDataAccessService implements WasherDao {

    @Autowired
    private WasherRepository repository;

    @Override
    public Washer insertWasher(Washer washer) {
        return repository.save(washer);
    }

    @Override
    public Washer getByEmail(String email) {
       return (Washer) repository.findByEmail(email);
    }

    @Override
    public List<Washer> getAllWashers() {
        return repository.findAll();
    }

    @Override
    public Washer getWasherById(ObjectId id) {
        return (Washer) repository.findById(id);
    }

}
