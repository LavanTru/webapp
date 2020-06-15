package com.lavantru.Register.repositories;

import com.lavantru.Register.model.Users;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

/**
 * @deprecated UserRepository interface
 */
public interface UsersRepository extends MongoRepository<Users, String> {
//  declaration of custom find
    Users findById(ObjectId _id);
    Users findByEmail(String email);

// used to generate lists of Washers to Washees and vice versa.
// Washer may need to become it's own class, in which case we'll call for a property of UserType also, e.g. UserTypeFirstName
    public List<Users> findByUserType(String userType);
}