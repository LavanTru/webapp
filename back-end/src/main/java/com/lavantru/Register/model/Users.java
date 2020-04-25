
package com.lavantru.Register.model;

import java.util.List;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.springframework.data.annotation.Id;


public class Users {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNo;
    private String accountType;
    private String companyName;
    private String userType;
    private Boolean acceptsMarketingEmails;
    private List<Address> addresses = null;
    private String password;


    public Users() {
    }

    public Users(String id, String firstName, String lastName, String email, String phoneNo, String accountType, String companyName, String userType, Boolean acceptsMarketingEmails, List<Address> addresses) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNo = phoneNo;
        this.accountType = accountType;
        this.companyName = companyName;
        this.userType = userType;
        this.acceptsMarketingEmails = acceptsMarketingEmails;
        this.addresses = addresses;
    }

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public Boolean getAcceptsMarketingEmails() {
        return acceptsMarketingEmails;
    }

    public void setAcceptsMarketingEmails(Boolean acceptsMarketingEmails) {
        this.acceptsMarketingEmails = acceptsMarketingEmails;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .append("id", id)
                .append("firstName", firstName)
                .append("lastName", lastName)
                .append("email", email)
                .append("phoneNo", phoneNo)
                .append("accountType", accountType)
                .append("userType", userType)
                .append("acceptsMarketingEmails", acceptsMarketingEmails)
                .append("addresses", addresses)
                .toString();
    }

}
