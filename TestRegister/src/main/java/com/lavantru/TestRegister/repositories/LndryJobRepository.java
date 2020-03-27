package com.lavantru.TestRegister.repositories;

import com.lavantru.TestRegister.model.LndryJob;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface LndryJobRepository extends MongoRepository<LndryJob, UUID> {

}
