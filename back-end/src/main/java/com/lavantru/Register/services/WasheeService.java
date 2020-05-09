package com.lavantru.Register.services;

import com.lavantru.Register.dao.WasheeDao;
import com.lavantru.Register.dao.WasheeDao;
import com.lavantru.Register.errors.UserAlreadyExistException;
import com.lavantru.Register.model.Washee;
import com.lavantru.Register.model.Washer;
import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class WasheeService {

  private WasheeDao washeeDao;

  @Autowired
  public WasheeService(@Qualifier("WasheeDao") WasheeDao washeeDao) {
    this.washeeDao = washeeDao;
  }
  public boolean emailExists(String email) {
    Washee washee = washeeDao.getByEmail(email);
    if (washee != null) {
      return true;
    }
    return false;
  }

  public int insertWashee(Washee washee) throws UserAlreadyExistException {
    if (emailExists(washee.getEmail())) {
      throw new UserAlreadyExistException("There is an account with that email address: " + washee.getEmail());
    }
    return washeeDao.insertWashee(washee);
  }

  public Washee getWasheeByEmail(String email) {
    return washeeDao.getByEmail(email);
  }

  public Washee getWasheeById(ObjectId id) {
    return washeeDao.getWasheeById(id);
  }

  public List<Washee> getAllWashees() {
    return washeeDao.getAllWashees();
  }



}
