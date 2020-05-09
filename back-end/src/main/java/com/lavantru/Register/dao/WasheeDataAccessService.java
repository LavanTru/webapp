package com.lavantru.Register.dao;

import com.lavantru.Register.model.Washee;
import com.lavantru.Register.repositories.WasheeRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("WasheeDao")
public class WasheeDataAccessService implements WasheeDao {

  @Autowired
  private WasheeRepository repository;

  @Override
  public int insertWashee(Washee washee) {
    repository.save(washee);
    return 1;
  }

  @Override
  public Washee getByEmail(String email) {
    return repository.findByEmail(email);
  }

  @Override
  public List<Washee> getAllWashees() {
    return repository.findAll();
  }

  @Override
  public Washee getWasheeById(ObjectId id) {
    return repository.findById(id);
  }

}
