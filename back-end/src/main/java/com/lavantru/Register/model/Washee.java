package com.lavantru.Register.model;

import java.util.List;

public class Washee extends Users {

    private List<PaymentMethod> paymentMethods = null;

    public Washee(List<PaymentMethod> paymentMethods) {
        this.paymentMethods = paymentMethods;
    }

    public Washee(String id, String firstName, String lastName, String email, String phoneNo, String accountType, String companyName, Boolean acceptsMarketingEmails, List<Address> addresses, List<PaymentMethod> paymentMethods) {
        super(id, firstName, lastName, email, phoneNo, accountType, companyName, "WASHEE", acceptsMarketingEmails, addresses);
        this.paymentMethods = paymentMethods;
    }

    public List<PaymentMethod> getPaymentMethods() {
        return paymentMethods;
    }

    public void setPaymentMethods(List<PaymentMethod> paymentMethods) {
        this.paymentMethods = paymentMethods;
    }

}
