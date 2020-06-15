
package com.lavantru.Register.model;

/**
 * <h1>Address</h1>
 * This object contains the attributes of user's address
 *
 * @version 1.0
 * @since 2020
 */
public class Address {

  private String streetName;
  private String buildingNo;
  private String apartmentNo;
  private String postCode;
  private String city;
  private Boolean defaultAddress;
  private double lat;
  private double lng;

  public Address() {
  }

  public Address(String streetName, String buildingNo, String apartmentNo, String postCode,
      String city, Boolean defaultAddress, double lat, double lng) {
    super();
    this.streetName = streetName;
    this.buildingNo = buildingNo;
    this.apartmentNo = apartmentNo;
    this.postCode = postCode;
    this.city = city;
    this.defaultAddress = defaultAddress;
    this.lat = lat;
    this.lng = lng;
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

  public double getLat() {
    return lat;
  }

  public void setLat(double lat) {
    this.lat = lat;
  }

  public double getLng() {
    return lng;
  }

  public void setLng(double lng) {
    this.lng = lng;
  }

  @Override
  public String toString() {
    return "Address{" +
        "streetName='" + streetName + '\'' +
        ", buildingNo='" + buildingNo + '\'' +
        ", apartmentNo='" + apartmentNo + '\'' +
        ", postCode='" + postCode + '\'' +
        ", city='" + city + '\'' +
        ", defaultAddress=" + defaultAddress +
        ", lat=" + lat +
        ", lng=" + lng +
        '}';
  }
}
