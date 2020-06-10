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
    return washee != null;
  }

  public boolean passwordMatches(String email, String password) {
    Washee washee = washeeDao.getByEmail(email);
    return washee.getPassword().equals(password);
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
    List<Washer> allWashers = washerService.getAllWashers();
    List<FavoriteDto> favoriteAndNonFavoriteWashers = new ArrayList<>();

    for (Washer washer : allWashers) {
      boolean isFavorite = false;
      for (Favorite favorite : favorites){
        if(washer.getId().equals(favorite.getWasherId())){
          isFavorite = true;
          break;
        }
      }
      FavoriteDto favorite = new FavoriteDto(washer, isFavorite);
      favoriteAndNonFavoriteWashers.add(favoriteAndNonFavoriteWashers.size(), favorite);
    }

    return  favoriteAndNonFavoriteWashers;
  }
}
