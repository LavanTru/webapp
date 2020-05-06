package com.lavantru.Register.model;

public class Item {

    private String jobId;
    private String description;
    private int amount;
    private double totalPrice;

    public Item(String jobId, String description, int amount, double totalPrice) {
        this.jobId = jobId;
        this.description = description;
        this.amount = amount;
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return "Item{" +
                "jobId='" + jobId + '\'' +
                ", description='" + description + '\'' +
                ", amount=" + amount +
                ", totalPrice=" + totalPrice +
                '}';
    }
}
