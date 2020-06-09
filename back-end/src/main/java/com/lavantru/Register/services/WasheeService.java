package com.lavantru.Register.services;

import com.lavantru.Register.dao.WasheeDao;
import com.lavantru.Register.dao.WasherDao;
import com.lavantru.Register.dto.FavoriteDto;
import com.lavantru.Register.errors.UserAlreadyExistException;
import com.lavantru.Register.model.*;

import java.util.ArrayList;
import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class WasheeService {

  private WasheeDao washeeDao;

  @Autowired
  private WasherService washerService;

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
  public boolean passwordMatches(String email, String password) {
    Washee washee = washeeDao.getByEmail(email);
    if (washee.getPassword().equals(password)) {
      return true;
    }
    return false;
  }

  public Washee insertWashee(Washee washee) throws UserAlreadyExistException {
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

  public void addWasheeFavorite(ObjectId id, Favorite favorite){
    Washee washee = getWasheeById(id);
    List<Favorite> favorites = washee.getFavorites();
    if (favorites == null) {
      favorites = new ArrayList<>();
      favorites.add(0, favorite);
    }else{
      favorites.add(favorites.size(), favorite);
    }
    washee.setFavorites(favorites);
    washeeDao.insertWashee(washee);
  }
  
  public void removeWasheeFavorite(ObjectId id, int index){
    Washee washee = getWasheeById(id);
    List<Favorite> favorites = washee.getFavorites();
    favorites.remove(index);
    washee.setFavorites(favorites);
    washeeDao.insertWashee(washee);
  }
  
  public List<FavoriteDto> getWasheeFavorites(ObjectId id){
    List<Favorite> favorites = getWasheeById(id).getFavorites();
    List<FavoriteDto> favoriteDtoList = new ArrayList<>();

    for (Favorite favorite : favorites){
      ObjectId washerId = new ObjectId(favorite.getWasherId());
      Washer washer = washerService.getUserById(washerId);
      FavoriteDto favoriteDto = new FavoriteDto(washer, favorite.getWashCycle());
      favoriteDtoList.add(favoriteDtoList.size(), favoriteDto);
    }

    return  favoriteDtoList;
  }
}
