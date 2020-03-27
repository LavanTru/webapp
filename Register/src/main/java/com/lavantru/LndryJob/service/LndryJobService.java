package com.lavantru.LndryJob.service;

import com.lavantru.LndryJob.dao.LndryJobDao;
import com.lavantru.LndryJob.model.LndryJob;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class LndryJobService {
    private LndryJobDao lndryJobDao;

    @Autowired
    public LndryJobService(@Qualifier("fakeDao") LndryJobDao lndryJobDao){
        this.lndryJobDao = lndryJobDao;
    }

    public int addLndryJob(LndryJob lndryJob){
        return lndryJobDao.insertJob(lndryJob);
    }

    public List<LndryJob> getAllJobs(){
        return lndryJobDao.selectAllJobs();
    }

    public Optional<LndryJob> getJobById(UUID id){
        return lndryJobDao.selectJobById(id);
    }

    public int deleteLndryJob(UUID id){
        return lndryJobDao.deleteJobById(id);
    }

    public int updateLndryJob(UUID id, LndryJob newLndryJob){
        return lndryJobDao.updateJobById(id, newLndryJob);
    }
}