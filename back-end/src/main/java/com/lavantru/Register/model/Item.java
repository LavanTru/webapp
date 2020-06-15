package com.lavantru.Register.model;

import lombok.Data;

/**
 * <h1>Item</h1>
 * This object contains the attributes of an order item
 *
 * @version 1.0
 * @since 2020
 */
@Data
public class Item {

    private String jobId;
    private String job;
    private int amount;
    private double totalPrice;

    public Item(String jobId, String job, int amount, double totalPrice) {
        this.jobId = jobId;
        this.job = job;
        this.amount = amount;
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return "Item{" +
                "jobId='" + jobId + '\'' +
                ", description='" + job + '\'' +
                ", amount=" + amount +
                ", totalPrice=" + totalPrice +
                '}';
    }
}
