package com.lavantru.Register.dao;

import com.lavantru.Register.model.Job;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

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
