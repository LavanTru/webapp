package com.lavantru.Register.model;

import java.util.List;

public class Washer extends Users {

    private List<LndryJob> lndryJobCapabilities = null;

    public Washer(){}

    public Washer(List<LndryJob> lndryJobCapabilities) {
        this.lndryJobCapabilities = lndryJobCapabilities;
    }

    public Washer(String id, String firstName, String lastName, String email, String phoneNo, String phoneCountryCode, String accountType, String companyName, String userType, Boolean acceptsMarketingEmails, List<String> payoutBankDetails, List<Address> addresses, List<PaymentMethod> paymentMethods, List<LndryJob> lndryJobCapabilities) {
        super(id, firstName, lastName, email, phoneNo, phoneCountryCode, accountType, companyName, userType, acceptsMarketingEmails, payoutBankDetails, addresses, paymentMethods);
        this.lndryJobCapabilities = lndryJobCapabilities;
    }

    public List<LndryJob> getLndryJobCapabilities() {
        return lndryJobCapabilities;
    }

    public void setLndryJobCapabilities(List<LndryJob> lndryJobCapabilities) {
        this.lndryJobCapabilities = lndryJobCapabilities;
    }

    @Override
    public String toString() {
        return super.toString();
    }
}