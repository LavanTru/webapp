package com.lavantru.Register.repositories;

import com.lavantru.Register.model.LndryJob;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface LndryJobRepository extends MongoRepository<LndryJob, UUID> {

}
