package com.lavantru.Register.model;

import java.util.List;
import org.apache.commons.lang.builder.ToStringBuilder;
import org.bson.types.ObjectId;

public class Washer extends Users {

    private List<String> payoutBankDetails = null;
    private List<LndryJob> lndryJobCapabilities = null;

    public Washer(){}

    public Washer(List<LndryJob> lndryJobCapabilities) {
        this.lndryJobCapabilities = lndryJobCapabilities;
    }

    public Washer(String firstName, String lastName, String email, String phoneNo, String accountType, String companyName, Boolean acceptsMarketingEmails, List<String> payoutBankDetails, List<Address> addresses, List<LndryJob> lndryJobCapabilities,String aboutMe) {
//        ID of the user is generated at construction
        super(new ObjectId().toString(), firstName, lastName, email, phoneNo, accountType, companyName, "WASHER", acceptsMarketingEmails, addresses,aboutMe);
        this.payoutBankDetails = payoutBankDetails;
        this.lndryJobCapabilities = lndryJobCapabilities;
    }

    public List<LndryJob> getLndryJobCapabilities() {
        return lndryJobCapabilities;
    }

    public void setLndryJobCapabilities(List<LndryJob> lndryJobCapabilities) {
        this.lndryJobCapabilities = lndryJobCapabilities;
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
            .append("lndryJobCapabilities", lndryJobCapabilities)
            .toString();
    }

}