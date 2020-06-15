# LavanTru

## Problem
Doing laundry is a chore as old as clothes. Some people just want to get on with their lives and hate the time and effort it takes, wishing for laundry to do itself; clothes clean, smelling fresh and folded neatly. In this fast-paced world, their time has become increasingly valuable and this deviation from what’s important will no longer do. Luckily, there are others that enjoy the process, accept it as part of daily life or seek to perfect it. This group of people are looking for an entrepreneurial outlet, to secure financial security and live comfortably by providing comfort.

## Solution
LavanTru is a P2P laundry platform to help those that hate doing laundry by connecting them with those that are happy to wash their clothes at home for a fee. Here are described the VCS and branching model used, the technologies used to build the digital solution, as well some examples of SOLID principles and Clean Code best practices applied during development.   


## Version Control System  
LavanTru uses the **Git** version control system to track changes during development and the source code is hosted in **GitHub**. **GitFlow** workflow is used in the internal development process to have defined branches for the release.

With the purpose to have a better control of the source code and since this is a relatively small project as of now, this repository contains both front-end and back-end code sources.

### Branches
* **master**: this branch will contain the stable production version of Lavantru.
* **develop**: this is the current default branch where the agile product increments are hosted. 
* **feature**: these branches are created to work in specific product increments developed by each team member. 
* **hotfix**: these branches will be created to quickly patch production fixes. 
* **release**: these branches will be used once the develop branch has enough features to be released to production.

This README does not list each contributor and their impact. Different branches, their owners and their impact to the repository can be seen in Git.

## Technology deck
As of now, the frameworks used in LavanTru are React.js for the front-end and Spring Boot for back-end with cloud MongoDB. While making the decision of what technologies to use, among other reasons, these have been chosen because of learning purposes of the team members. 

### Font-end
LavanTru's front-end is responsible for the presentation layer. React.js is used to build a responsive web application that comprehends different reusable components that will display and capture information to the user. In addition to UI components, services are used to manage accessing the back-end APIs. Besides react.js library there are a bunch of several libraries used that can be found in the ***package.json*** file.

### Back-end
Business logic is performed in the back-end. Spring boot is the framework used because it allows to build fast API applications in Java with minimal configuration. Also, Spring Boot comes with Tomcat HTTP web server embedded to host the application.

Maven is the building tool used in the back-end solution to manage the dependencies which can be found in the ***pom.xml*** file.

MongoDB Cloud is the chosen database management system for multiple reasons. The first one, as already said before, is for learning purposes, the second is a document-oriented database with flexible schema which makes the development easier and keeps the consistency between the data with the model POJOs and the API's JSON requests and responses.

## Clean Code
In the development process SOLID principles and coding best practices are followed to standardize the code. The classes and methods names are clear and meaningful.

### Single Responsibility Principle
LavanTru classes are intended to have only a single responsibility. In the example below, `WasherService` class handles the business logic of washer users. 
```java
@Service
public class WasherService {

    private WasherDao washerDao;

    @Autowired
    public WasherService(WasherDao washerDao) {
        this.washerDao = washerDao;
    }

    public int insertWasher(Washer washer) throws UserAlreadyExistException {
        if (emailExists(washer.getEmail())) {
            throw new UserAlreadyExistException("There is an account with that email address: " + washer.getEmail());
        }
        return washerDao.insertWasher(washer);
    }

    public boolean emailExists(String email) {
        Washer washer = washerDao.findByEmail(email);
        if (washer != null) {
            return true;
        }
        return false;
    }

    public void updateLndryJobCapabilities(ObjectId id, List<Job> washerJobCapabilities) {
        Washer washer = getUserById(id);
        washer.setJobCapabilities(washerJobCapabilities);
        washerDao.insertWasher(washer);
    }

    public List<Washer> getAllWashers() {
        return washerDao.getAllWashers();
    }

    public Washer getWasherById(ObjectId id) {
        return washerDao.getWasherById(id);
    }
}
```

## Open/Closed Principle 
The classes and methods are open for extension but closed for modification. In the example below `Users` class allows its behavior and attributes to be extended by `Washer` without modifying its source code. 
```java
public class Users {

    // attributes
    
    // constructors
    
    // getters and setters
    
    // methods

}
```

```java
public class Washer extends Users {
        
    // attributes
       
    // constructors
       
    // getters and setters
    
    // extended Users methods

}
```
 
## Liskov Substitution Principle
Objects in LavanTru source code are replaceable with instances of their subtypes without altering the correctness of LavanTru program. For instance, in the method below `Users` object can be replaced with a `Washer` or `Washee` object without braking the code.

```java
public class UsersService implements IUsersService {
    public boolean emailExists(String email) {
        Users user = repository.findByEmail(email);
        if (user != null) {
          return true;
        }
        return false;
    }
}
``` 

```java
public class UsersService implements IUsersService {
    public boolean emailExists(String email) {
        Washee washee = repository.findByEmail(email);
        if (washee != null) {
          return true;
        }
        return false;
    }
}
``` 

## Interface Segregation Principle
LavanTru uses specific Interfaces so that clients will only have to know about the methods that are of interest to them.

In this example, a `WasherDataAccessService` is interested only in the methods provided by `WasherDao' Interface.
```java
public interface WasherDao {

    int insertWasher(Washer washer);

    Washer findByEmail(String email);

    Washer findById(ObjectId _id);

    List<Washer> getAllWashers();

    Washer getWasherById(ObjectId id);
}
```
 
```java
public class WasherDataAccessService implements WasherDao {

    @Autowired
    private WasherRepository repository;

    @Override
    public int insertWasher(Washer washer) {
        repository.save(washer);
        return 1;
    }

    @Override
    public Washer findByEmail(String email) {
       return (Washer) repository.findByEmail(email);
    }

    @Override
    public Washer findById(ObjectId _id) {
        return (Washer) repository.findById(_id);
    }

    @Override
    public List<Washer> getAllWashers() {
        return repository.findAll();
    }

    @Override
    public Washer getWasherById(ObjectId id) {
        return (Washer) repository.findById(id);
    }

}
```

### Dependency Inversion Principle
The modules in LavanTru are independent of each other. They depend only in the Interfaces which abstract the behaviour of each of the modules.

* `Controllers` are independent of `Services`, but they use `ServicesInterfaces` contracts.
* `Services` are independent of `DataAccessServices`, but they use `DAOs` contracts.

