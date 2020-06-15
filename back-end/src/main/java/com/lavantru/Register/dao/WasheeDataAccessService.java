package com.lavantru.Register.dao;

import com.lavantru.Register.model.Washee;
import com.lavantru.Register.repositories.WasheeRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <h1>WasheeDataAccessService</h1>
 * Washee data access service connected with mongo db repository.
 *
 * @see com.lavantru.Register.dao.WasheeDao
 * @version 1.0
 * @since 2020
 */
@Repository("WasheeDao")
public class WasheeDataAccessService implements WasheeDao {

  @Autowired
  private WasheeRepository repository;

  @Override
  public Washee insertWashee(Washee washee) {
    return repository.save(washee);
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
