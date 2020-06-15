package com.lavantru.Register.dao;

import com.lavantru.Register.model.Job;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * <h1>LndryJobDao</h1>
 * Interface specifies the behavior of laundry Job Data Access Object.
 *
 * @version 1.0
 * @since 2020
 */
public interface LndryJobDao {

    int insertJob(UUID id, Job job);

    default int insertJob(Job job){
        UUID id = UUID.randomUUID();
        return  insertJob(id, job);
    }

    List<Job> selectAllJobs();

    Optional<Job> selectJobById(UUID id);

    int deleteJobById(UUID id);

    int updateJobById(UUID id, Job job);
}
