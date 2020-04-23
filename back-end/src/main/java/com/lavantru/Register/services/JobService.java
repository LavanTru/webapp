package com.lavantru.Register.services;

import com.lavantru.Register.dao.LndryJobDao;
import com.lavantru.Register.model.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class JobService {
    private LndryJobDao lndryJobDao;

    @Autowired
    public JobService(@Qualifier("fakeDao") LndryJobDao lndryJobDao){
        this.lndryJobDao = lndryJobDao;
    }

    public int addLndryJob(Job job){
        return lndryJobDao.insertJob(job);
    }

    public List<Job> getAllJobs(){
        return lndryJobDao.selectAllJobs();
    }

    public Optional<Job> getJobById(UUID id){
        return lndryJobDao.selectJobById(id);
    }

    public int deleteLndryJob(UUID id){
        return lndryJobDao.deleteJobById(id);
    }

    public int updateLndryJob(UUID id, Job newJob){
        return lndryJobDao.updateJobById(id, newJob);
    }
}