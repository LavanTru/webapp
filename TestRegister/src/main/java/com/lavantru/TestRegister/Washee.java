package com.lavantru.TestRegister;

import org.springframework.data.annotation.Id;

public class Washee {
    @Id
    public String id;


    public String firstName;
    public String lastName;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    public Washee() {
    }

    public Washee(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return String.format(
                "Washee[id=%s, firstName='%s', lastName='%s']",
                id, firstName, lastName);
    }
}
