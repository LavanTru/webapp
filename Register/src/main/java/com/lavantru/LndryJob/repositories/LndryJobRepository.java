package com.lavantru.LndryJob.repositories;

import com.lavantru.LndryJob.model.LndryJob;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface LndryJobRepository extends MongoRepository<LndryJob, UUID> {

}
