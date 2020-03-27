package com.lavantru.TestRegister.controllers;

import com.lavantru.TestRegister.model.LndryJob;
import com.lavantru.TestRegister.service.LndryJobService;
import com.mongodb.lang.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RequestMapping("api/laundryJob")
@RestController
public class LndryJobController {

    private LndryJobService lndryJobService;

    @Autowired
    public LndryJobController(LndryJobService lndryJobService) {
        this.lndryJobService = lndryJobService;
    }

    @PostMapping
    public void addJob(@Valid @NonNull @RequestBody LndryJob lndryJob){
        lndryJobService.addLndryJob(lndryJob);
    }

    @GetMapping
    public List<LndryJob> getAllJobs(){
        return  lndryJobService.getAllJobs();
    }

    @GetMapping(path = "/{id}")
    public LndryJob getJobById(@PathVariable("id") UUID id){
        return lndryJobService.getJobById(id).orElse(null);
    }

    @DeleteMapping(path = "/{id}")
    public void deleteLndryJobById(@PathVariable("id") UUID id){
        lndryJobService.deleteLndryJob(id);
    }

    @PutMapping(path = "/{id}")
    public void updateLndryJobById(@PathVariable("id") UUID id, @Valid @NonNull @RequestBody LndryJob lndryJob){
        lndryJobService.updateLndryJob(id, lndryJob);
    }
}