package com.lavantru.Register.controllers;

import com.lavantru.Register.model.Washee;
import com.lavantru.Register.services.WasheeService;
import com.mongodb.lang.NonNull;
import java.util.List;
import javax.validation.Valid;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/washee")
public class WasheeController {

  @Autowired
  private WasheeService washeeService;

  @Autowired
  public WasheeController(WasheeService washeeService) {
    this.washeeService = washeeService;
  }

  @PostMapping(path = "/register")
  public void registerWashee(@Valid @NonNull @RequestBody Washee washee){
    washeeService.insertWashee(washee);
  }

  @GetMapping
  public List<Washee> getAllWashees() {
    return washeeService.getAllWashees();
  }

  @GetMapping(path = "/{id}")
  public Washee getWasheeById(@PathVariable("id") ObjectId id) {
    return washeeService.getWasheeById(id);
  }

}
