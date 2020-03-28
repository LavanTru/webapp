
package com.lavantru.Register;

import java.util.List;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class Users {

    @Id
    private String id;
    @NotNull
    @NotEmpty
    private String firstName;
    @NotNull
    @NotEmpty
    private String lastName;
    @NotNull
    @NotEmpty
    private String email;
    private String phoneNo;
    private String phoneCountryCode;
    private String accountType;
    private String companyName;
    private String userType;
    private Boolean acceptsMarketingEmails;
    private List<String> payoutBankDetails = null;
    private List<Address> addresses = null;
    private List<PaymentMethod> paymentMethods = null;

    @NotNull
    @NotEmpty
    private String password;
    private String matchingPassword;


    public Users() {
    }

    public Users(String id, String firstName, String lastName, String email, String phoneNo, String phoneCountryCode, String accountType, String companyName, String userType, Boolean acceptsMarketingEmails, List<String> payoutBankDetails, List<Address> addresses, List<PaymentMethod> paymentMethods) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNo = phoneNo;
        this.phoneCountryCode = phoneCountryCode;
        this.accountType = accountType;
        this.companyName = companyName;
        this.userType = userType;
        this.acceptsMarketingEmails = acceptsMarketingEmails;
        this.payoutBankDetails = payoutBankDetails;
        this.addresses = addresses;
        this.paymentMethods = paymentMethods;
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

    public String getPhoneCountryCode() {
        return phoneCountryCode;
    }

    public void setPhoneCountryCode(String phoneCountryCode) {
        this.phoneCountryCode = phoneCountryCode;
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

    public List<String> getPayoutBankDetails() {
        return payoutBankDetails;
    }

    public void setPayoutBankDetails(List<String> payoutBankDetails) {
        this.payoutBankDetails = payoutBankDetails;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }

    public List<PaymentMethod> getPaymentMethods() {
        return paymentMethods;
    }

    public void setPaymentMethods(List<PaymentMethod> paymentMethods) {
        this.paymentMethods = paymentMethods;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMatchingPassword() {
        return matchingPassword;
    }

    public void setMatchingPassword(String matchingPassword) {
        this.matchingPassword = matchingPassword;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).append("id", id).append("firstName", firstName).append("lastName", lastName).append("email", email).append("phoneNo", phoneNo).append("phoneCountryCode", phoneCountryCode).append("accountType", accountType).append("userType", userType).append("acceptsMarketingEmails", acceptsMarketingEmails).append("payoutBankDetails", payoutBankDetails).append("addresses", addresses).append("paymentMethods", paymentMethods).toString();
    }

}
