package com.lavantru.LaundryJob.dao;

import com.lavantru.LaundryJob.model.LndryJob;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface LndryJobDao {

    int insertJob(UUID id, LndryJob lndryJob);

    default int insertJob(LndryJob lndryJob){
        UUID id = UUID.randomUUID();
        return  insertJob(id, lndryJob);
    }

    List<LndryJob> selectAllJobs();

    Optional<LndryJob> selectJobById(UUID id);

    int deleteJobById(UUID id);

    int updateJobById(UUID id, LndryJob lndryJob);
}
