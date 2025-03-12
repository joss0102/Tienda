package com.tienda.app.controllers;

import com.tienda.app.models.Order;
import com.tienda.app.models.OrderItem;
import com.tienda.app.models.OrderRequest;
import com.tienda.app.services.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")  // Corregir la ruta, debe ser /orders
public class OrderController {

    @Autowired
    private OrderItemService orderItemService;

    @PostMapping
    @Transactional
    public ResponseEntity<Order> createOrderWithItems(@RequestBody OrderRequest orderRequest) {
        if (orderRequest == null || orderRequest.getOrder() == null || orderRequest.getOrderItems() == null || orderRequest.getOrderItems().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        // Crear la orden y asociar los items
        Order createdOrder = orderItemService.createOrderWithItems(orderRequest.getOrder(), orderRequest.getOrderItems());
        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
    }
}
