package com.lavantru.TestRegister.dao;

import com.lavantru.TestRegister.model.LndryJob;
import org.springframework.data.mongodb.core.aggregation.ArithmeticOperators;
import org.springframework.stereotype.Repository;

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
