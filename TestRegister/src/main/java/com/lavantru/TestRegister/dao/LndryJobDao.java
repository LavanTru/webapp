package com.lavantru.TestRegister.dao;

import com.lavantru.TestRegister.model.LaundryJob;

import java.util.UUID;

public interface LaundryJobDao {

    int insertService(UUID id, LaundryJob laundryJob);

    default int insertService(LaundryJob laundryJob){
        UUID id = UUID.randomUUID();
        return  insertService(id, laundryJob);
    }
}
