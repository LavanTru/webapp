package com.lavantru.Register.dao;

import com.lavantru.Register.model.LndryJob;
import com.lavantru.Register.repositories.LndryJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("fakeDao")
public class LndryJobDataAccessService implements LndryJobDao {

    @Autowired
    private LndryJobRepository repository;

    @Override
    public int insertJob(UUID id, LndryJob lndryJob) {
        repository.save(new LndryJob(id, lndryJob.getJob()));
        return 1;
    }

    @Override
    public List<LndryJob> selectAllJobs() {
        return repository.findAll();
    }

    @Override
    public Optional<LndryJob> selectJobById(UUID id) {
        return repository.findById(id);
    }

    @Override
    public int deleteJobById(UUID id) {
        repository.deleteById(id);
        return 1;
    }

    @Override
    public int updateJobById(UUID id, LndryJob lndryJob) {
        lndryJob.setId(id);
        repository.save(lndryJob);
        return 1;
    }
}
