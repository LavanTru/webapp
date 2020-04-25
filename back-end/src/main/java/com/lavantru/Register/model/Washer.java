package com.lavantru.Register.model;

import java.util.List;

public class Washer extends Users {

    private List<Job> jobCapabilities = null;

    public Washer(){}

    public Washer(List<Job> jobCapabilities) {
        this.jobCapabilities = jobCapabilities;
    }

    public Washer(String id, String firstName, String lastName, String email, String phoneNo, String phoneCountryCode, String accountType, String companyName, String userType, Boolean acceptsMarketingEmails, List<String> payoutBankDetails, List<Address> addresses, List<PaymentMethod> paymentMethods, List<Job> jobCapabilities) {
        super(id, firstName, lastName, email, phoneNo, phoneCountryCode, accountType, companyName, userType, acceptsMarketingEmails, payoutBankDetails, addresses, paymentMethods);
        this.jobCapabilities = jobCapabilities;
    }

    public List<Job> getJobCapabilities() {
        return jobCapabilities;
    }

    public void setJobCapabilities(List<Job> jobCapabilities) {
        this.jobCapabilities = jobCapabilities;
    }

    @Override
    public String toString() {
        return super.toString();
    }
}