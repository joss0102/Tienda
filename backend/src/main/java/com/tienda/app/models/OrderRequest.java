package com.tienda.app.models;

import lombok.Getter;

import java.util.List;

@Getter
public class OrderRequest {

    private Order order;
    private List<OrderItem> orderItems;

    // Getters y setters

    public void setOrder(Order order) {
        this.order = order;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }
}
