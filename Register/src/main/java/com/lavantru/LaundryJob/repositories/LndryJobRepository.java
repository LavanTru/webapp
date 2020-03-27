package com.lavantru.LaundryJob.repositories;

import com.lavantru.LaundryJob.model.LndryJob;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface LndryJobRepository extends MongoRepository<LndryJob, UUID> {

}
