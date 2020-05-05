package com.lavantru.Register.services;

import com.lavantru.Register.dao.WasherDao;
import com.lavantru.Register.errors.UserAlreadyExistException;
import com.lavantru.Register.model.Job;
import com.lavantru.Register.model.Washer;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class WasherService {

    private WasherDao washerDao;

    @Autowired
    public WasherService(@Qualifier("WasherDao") WasherDao washerDao) {
        this.washerDao = washerDao;
    }

    public int insertWasher(Washer washer) throws UserAlreadyExistException {
        if (emailExists(washer.getEmail())) {
            throw new UserAlreadyExistException("There is an account with that email address: " + washer.getEmail());
        }

        return washerDao.insertWasher(washer);
    }

    public boolean emailExists(String email) {
        Washer washer = washerDao.findByEmail(email);
        if (washer != null) {
            return true;
        }
        return false;
    }

    public void updateLndryJobCapabilities(ObjectId id, List<Job> washerJobCapabilities) {
        Washer washer = getUserById(id);
        washer.setJobCapabilities(washerJobCapabilities);
        washerDao.insertWasher(washer);
    }

    public Washer getUserById(ObjectId id){
        return  washerDao.findById(id);
    }

    public List<Washer> getAllWashers() {
        return washerDao.getAllWashers();
    }

    public Washer getWasherById(ObjectId id) {
        return washerDao.getWasherById(id);
    }

    public List<Job> getWasherActiveJobs(ObjectId id) {
        Washer washer = getWasherById(id);
        List<Job> activeJobs = new ArrayList<>();
        for (Job job : washer.getJobCapabilities()){
            if (job.isActive())
                activeJobs.add(job);
        }

        return activeJobs;
    }
}
