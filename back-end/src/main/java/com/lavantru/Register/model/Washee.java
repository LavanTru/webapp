package com.lavantru.Register.model;

import java.util.List;

public class Washee extends Users {

    private List<PaymentMethod> paymentMethods = null;

    public Washee(List<PaymentMethod> paymentMethods) {
        this.paymentMethods = paymentMethods;
    }

    public Washee(String id, String firstName, String lastName, String email, String phoneNo, String phoneCountryCode, String accountType, String companyName, String userType, Boolean acceptsMarketingEmails, List<String> payoutBankDetails, List<Address> addresses, List<PaymentMethod> paymentMethods, List<PaymentMethod> paymentMethods1) {
        super(id, firstName, lastName, email, phoneNo, phoneCountryCode, accountType, companyName, userType, acceptsMarketingEmails, payoutBankDetails, addresses, paymentMethods);
        this.paymentMethods = paymentMethods1;
    }

    public List<PaymentMethod> getPaymentMethods() {
        return paymentMethods;
    }

    public void setPaymentMethods(List<PaymentMethod> paymentMethods) {
        this.paymentMethods = paymentMethods;
    }

}
