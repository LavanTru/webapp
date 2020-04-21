package com.lavantru.Register.controllers;

import com.lavantru.Register.model.LndryJob;
import com.lavantru.Register.model.Users;
import com.lavantru.Register.model.Washer;
import com.lavantru.Register.services.WasherService;
import com.mongodb.lang.NonNull;
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
        //return repository.findById(id);
    }

    @PostMapping(path = "/setup")
    public void registerWasher(@Valid @NonNull @RequestBody Washer washer){
        washerService.insertWasher(washer);
    }

    @PutMapping(path = "/laundryCapabilities/{id}")
    public void updateLndryJobCapabilities(
            @PathVariable ObjectId id,
            @RequestBody List<LndryJob> washerLndryJobCapabilities) {
        washerService.updateLndryJobCapabilities(id, washerLndryJobCapabilities);
    }
}
