package com.lavantru.Register.dao;

import com.lavantru.Register.model.Job;
import com.lavantru.Register.repositories.LndryJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

/**
 * <h1>LndryJobDataAccessService</h1>
 * Laundry jobs data access service connected with mongo db repository.
 *
 * @see com.lavantru.Register.dao.LndryJobDao
 * @version 1.0
 * @since 2020
 */
@Repository("jobDao")
public class LndryJobDataAccessService implements LndryJobDao {

    @Autowired
    private LndryJobRepository repository;

    @Override
    public int insertJob(UUID id, Job job) {
        repository.save(new Job(id, job.getJob()));
        return 1;
    }

    @Override
    public List<Job> selectAllJobs() {
        return repository.findAll();
    }

    @Override
    public Optional<Job> selectJobById(UUID id) {
        return repository.findById(id);
    }

    @Override
    public int deleteJobById(UUID id) {
        repository.deleteById(id);
        return 1;
    }

    @Override
    public int updateJobById(UUID id, Job job) {
        job.setId(id);
        repository.save(job);
        return 1;
    }
}
