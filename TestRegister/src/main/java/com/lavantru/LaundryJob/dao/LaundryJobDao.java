package com.lavantru.LaundryJob.dao;

import com.lavantru.LaundryJob.model.LaundryJob;

import java.util.UUID;

public interface LaundryJobDao {

    int insertService(UUID id, LaundryJob laundryJob);

    default int insertService(LaundryJob laundryJob){
        UUID id = UUID.randomUUID();
        return  insertService(id, laundryJob);
    }
}
