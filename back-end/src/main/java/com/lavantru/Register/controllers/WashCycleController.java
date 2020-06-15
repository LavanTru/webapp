package com.lavantru.Register.controllers;

import com.lavantru.Register.model.WashCycle;
import com.lavantru.Register.services.IWashCycleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * <h1>WashCycleController</h1>
 * REST API endpoint returns all the wash cycles available.
 *
 * @version 1.0
 * @since 2020
 */
@CrossOrigin
@RestController
@RequestMapping("/api/washcycle")
public class WashCycleController {

    @Autowired
    private IWashCycleService washCycleService;

    @GetMapping()
    public List<WashCycle> getWashCycles(){
        return washCycleService.getAllWashCycles();
    }
}
