package com.lavantru.Register.controllers;

import com.lavantru.Register.model.Job;
import com.lavantru.Register.services.JobService;
import com.mongodb.lang.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RequestMapping("api/job")
@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
public class JobController {

    private JobService jobService;

    @Autowired
    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @PostMapping
    public void addJob(@Valid @NonNull @RequestBody Job job){
        jobService.addJob(job);
    }

    @GetMapping
    public List<Job> getAllJobs(){
        return  jobService.getAllJobs();
    }

    @GetMapping(path = "/{id}")
    public Job getJobById(@PathVariable("id") UUID id){
        return jobService.getJobById(id).orElse(null);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteJobById(@PathVariable("id") UUID id){
        jobService.deleteJob(id);
    }

    @PutMapping(path = "/{id}")
    public void updateJobById(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody Job job){
        jobService.updateJob(id, job);
    }
}