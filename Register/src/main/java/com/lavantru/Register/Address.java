
package com.lavantru.Register;

import org.apache.commons.lang.builder.ToStringBuilder;

public class Address {

    private String streetName;
    private String buildingNo;
    private String apartmentNo;
    private String postCode;
    private String city;
    private Boolean defaultAddress;

    public Address() {
    }

    public Address(String streetName, String buildingNo, String apartmentNo, String postCode, String city, Boolean defaultAddress) {
        super();
        this.streetName = streetName;
        this.buildingNo = buildingNo;
        this.apartmentNo = apartmentNo;
        this.postCode = postCode;
        this.city = city;
        this.defaultAddress = defaultAddress;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getBuildingNo() {
        return buildingNo;
    }

    public void setBuildingNo(String buildingNo) {
        this.buildingNo = buildingNo;
    }

    public String getApartmentNo() {
        return apartmentNo;
    }

    public void setApartmentNo(String apartmentNo) {
        this.apartmentNo = apartmentNo;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Boolean getDefaultAddress() {
        return defaultAddress;
    }

    public void setDefaultAddress(Boolean defaultAddress) {
        this.defaultAddress = defaultAddress;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this).append("streetName", streetName).append("buildingNo", buildingNo).append("apartmentNo", apartmentNo).append("postCode", postCode).append("city", city).append("defaultAddress", defaultAddress).toString();
    }

}
