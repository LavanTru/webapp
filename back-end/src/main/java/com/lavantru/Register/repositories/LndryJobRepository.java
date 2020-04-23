package com.lavantru.Register.repositories;

import com.lavantru.Register.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface LndryJobRepository extends MongoRepository<Job, UUID> {

}
