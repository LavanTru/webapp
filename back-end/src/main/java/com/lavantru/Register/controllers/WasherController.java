package com.lavantru.Register.controllers;

import com.lavantru.Register.model.Job;
import com.lavantru.Register.model.Washer;
import com.lavantru.Register.services.WasherService;
import com.mongodb.lang.NonNull;
import java.util.Date;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/washer")
public class WasherController {

    @Autowired
    private WasherService washerService;

    @Autowired
    public WasherController(WasherService washerService) {
        this.washerService = washerService;
    }

    @GetMapping
    public List<Washer> getAllWashers() {
        return washerService.getAllWashers();
    }

    @GetMapping(path = "/{id}")
    public Washer getWasherById(@PathVariable("id") ObjectId id) {
        return washerService.getWasherById(id);
    }

    @PostMapping(path = "/register")
    public Washer registerWasher(@Valid @NonNull @RequestBody Washer washer){
       return washerService.insertWasher(washer);
    }

    @PutMapping(path = "/services/{id}")
    public void updateLndryJobCapabilities(
            @PathVariable ObjectId id,
            @RequestBody List<Job> washerJobCapabilities) {
        washerService.updateLndryJobCapabilities(id, washerJobCapabilities);
    }

    @GetMapping(path = "/active-services/{id}")
    public List<Job> getWasherActiveJobs(@PathVariable("id") ObjectId id) {
        return washerService.getWasherActiveJobs(id);
    }

    @PutMapping(path = "/schedule/{id}")
    public void updateWasherSchedule(
        @PathVariable ObjectId id,
        @RequestBody List<Date> availableHours) {
        washerService.updateWasherSchedule(id, availableHours);
    }
}
