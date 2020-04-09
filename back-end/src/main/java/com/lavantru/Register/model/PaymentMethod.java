package com.lavantru.Register.model;

import org.apache.commons.lang.builder.ToStringBuilder;

import java.util.Date;

public class PaymentMethod {
    private String cardNo;
    private Date expirationDate;
    private String securityCode;
    private Boolean defaultPaymentMethod;

    public PaymentMethod() {
    }

    public PaymentMethod(String cardNo, Date expirationDate, String securityCode, Boolean defaultPaymentMethod) {
        this.cardNo = cardNo;
        this.expirationDate = expirationDate;
        this.securityCode = securityCode;
        this.defaultPaymentMethod = defaultPaymentMethod;
    }

    public String getCardNo() {
        return cardNo;
    }

    public void setCardNo(String cardNo) {
        this.cardNo = cardNo;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public String getSecurityCode() {
        return securityCode;
    }

    public void setSecurityCode(String securityCode) {
        this.securityCode = securityCode;
    }

    public Boolean getDefaultPaymentMethod() {
        return defaultPaymentMethod;
    }

    public void setDefaultPaymentMethod(Boolean defaultPaymentMethod) {
        this.defaultPaymentMethod = defaultPaymentMethod;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).append("cardNo", cardNo).append("expirationDate", expirationDate).append("securityCode", securityCode).append("defaultPaymentMethod", defaultPaymentMethod).toString();
    }

}