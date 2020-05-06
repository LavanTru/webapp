package com.lavantru.Register.model;

import java.util.List;
import org.apache.commons.lang.builder.ToStringBuilder;
import org.bson.types.ObjectId;

public class Washer extends Users {

    private List<Job> jobCapabilities = null;
    private List<String> payoutBankDetails = null;

    public Washer(){}

    public Washer(List<Job> jobCapabilities) {
        this.jobCapabilities = jobCapabilities;
    }

    public Washer(String firstName, String lastName, String email, String phoneNo, String accountType, String companyName, Boolean acceptsMarketingEmails, List<String> payoutBankDetails, List<Address> addresses, List<Job> jobCapabilities,String aboutMe,String image) {
//        ID of the user is generated at construction
        super(new ObjectId().toString(), firstName, lastName, email, phoneNo, accountType, companyName, "WASHER", acceptsMarketingEmails, addresses,aboutMe,image);
        this.payoutBankDetails = payoutBankDetails;
        this.jobCapabilities = jobCapabilities;
    }

    public List<Job> getJobCapabilities() {
        return jobCapabilities;
    }

    public void setJobCapabilities(List<Job> jobCapabilities) {
        this.jobCapabilities = jobCapabilities;
    }

    public List<String> getPayoutBankDetails() {
        return payoutBankDetails;
    }

    public void setPayoutBankDetails(List<String> payoutBankDetails) {
        this.payoutBankDetails = payoutBankDetails;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
            .append(super.toString())
            .append("payoutBankDetails", payoutBankDetails)
            .append("lndryJobCapabilities", jobCapabilities)
            .toString();
    }
}