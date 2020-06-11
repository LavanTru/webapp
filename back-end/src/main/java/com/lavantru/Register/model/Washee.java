package com.lavantru.Register.model;

import lombok.Data;

import java.util.List;

@Data
public class Washee extends Users {

    private List<PaymentMethod> paymentMethods = null;
    private List<Favorite> favorites;

    public Washee(){}

    public Washee(List<PaymentMethod> paymentMethods) {
        this.paymentMethods = paymentMethods;
    }

    public Washee(String id, String firstName, String lastName, String email, String phoneNo, String accountType, String companyName, String userType, Boolean acceptsMarketingEmails, List<Address> addresses, List<PaymentMethod> paymentMethods,String aboutMe,String image) {
        super(id, firstName, lastName, email, phoneNo, accountType, companyName, "WASHEE", acceptsMarketingEmails, addresses,aboutMe,image);
        this.paymentMethods = paymentMethods;
    }

    public List<PaymentMethod> getPaymentMethods() {
        return paymentMethods;
    }

    public void setPaymentMethods(List<PaymentMethod> paymentMethods) {
        this.paymentMethods = paymentMethods;
    }

}
