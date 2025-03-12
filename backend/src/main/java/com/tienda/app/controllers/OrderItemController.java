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
@RequestMapping("/order-items")
public class OrderItemController {

    @Autowired
    private OrderItemService orderItemService;

    // Obtener todos los OrderItems
    @GetMapping
    public List<OrderItem> getAllOrderItems() {
        return orderItemService.getAllOrderItems();
    }

    // Obtener un OrderItem por ID
    @GetMapping("/{id}")
    public ResponseEntity<OrderItem> getOrderItemById(@PathVariable Long id) {
        Optional<OrderItem> orderItem = orderItemService.getOrderItemById(id);
        return orderItem.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Crear un Order con sus OrderItems
    @PostMapping
    @Transactional
    public ResponseEntity<Order> createOrderWithItems(@RequestBody OrderRequest orderRequest) {
        System.out.println("📥 Recibiendo OrderRequest: " + orderRequest);

        if (orderRequest == null || orderRequest.getOrder() == null || orderRequest.getOrderItems() == null) {
            System.out.println("⚠️ Error: Datos de orden inválidos.");
            return ResponseEntity.badRequest().build();
        }

        Order createdOrder = orderItemService.createOrderWithItems(orderRequest.getOrder(), orderRequest.getOrderItems());

        System.out.println("✅ Orden creada: " + createdOrder);
        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
    }


    // Eliminar un OrderItem
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrderItem(@PathVariable Long id) {
        orderItemService.deleteOrderItem(id);
        return ResponseEntity.noContent().build();
    }
}
