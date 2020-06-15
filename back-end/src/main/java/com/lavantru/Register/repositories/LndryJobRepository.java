package com.lavantru.Register.repositories;

import com.lavantru.Register.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

/**
 * <h1>LndryJobRepository</h1>
 * Laundry job repository interface extends {@link MongoRepository}
 *
 * @version 1.0
 * @since 2020
 */
public interface LndryJobRepository extends MongoRepository<Job, UUID> {

}
