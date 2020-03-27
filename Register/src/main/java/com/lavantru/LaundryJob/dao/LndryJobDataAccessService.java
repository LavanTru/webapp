package com.lavantru.LaundryJob.dao;

import com.lavantru.LaundryJob.model.LndryJob;
import com.lavantru.LaundryJob.repositories.LndryJobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("fakeDao")
public class LndryJobDataAccessService implements LndryJobDao {

    private static List<LndryJob> DB = new ArrayList<>();
    @Autowired
    private LndryJobRepository repository;

    @Override
    public int insertJob(UUID id, LndryJob lndryJob) {
        repository.save(new LndryJob(id, lndryJob.getJob()));
        //DB.add(new LndryJob(id, lndryJob.getJob()));
        return 1;
    }

    @Override
    public List<LndryJob> selectAllJobs() {
        //return DB;
        return repository.findAll();
    }

    @Override
    public Optional<LndryJob> selectJobById(UUID id) {
        return repository.findById(id);
//        return DB.stream()
//                .filter(lndryJob -> lndryJob.getId().equals(id))
//                .findFirst();
    }

    @Override
    public int deleteJobById(UUID id) {
        repository.deleteById(id);
        return 1;
//        Optional<LndryJob> lndryJob = selectJobById(id);
//        if(lndryJob.isPresent()){
//            DB.remove(lndryJob.get());
//            return 1;
//        }
//        return 0;
    }

    @Override
    public int updateJobById(UUID id, LndryJob lndryJob) {
        return selectJobById(id)
                .map(lj -> {
                    int indexOfJobToUpdate = DB.indexOf(lj);
                    if (indexOfJobToUpdate >= 0){
                        DB.set(indexOfJobToUpdate, new LndryJob(id, lndryJob.getJob()));
                        return 1;
                    }
                    return 0;
                })
                .orElse(0);
    }
}
