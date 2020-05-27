package com.lavantru.Register.controllers;

import com.lavantru.Register.model.WashCycle;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/washcycle")
public class WashCycleController {

    @GetMapping()
    public List<WashCycle> getWashCycles(){
        return WashCycle.getWashCycles();
    }
}
