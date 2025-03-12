package com.tienda.app.services;

import com.tienda.app.models.Order;
import com.tienda.app.models.OrderItem;
import com.tienda.app.repositories.OrderItemRepository;
import com.tienda.app.repositories.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class OrderItemService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private OrderRepository orderRepository;

    // Obtener todos los OrderItems
    public List<OrderItem> getAllOrderItems() {
        return orderItemRepository.findAll();
    }

    // Obtener un OrderItem por ID
    public Optional<OrderItem> getOrderItemById(Long id) {
        return orderItemRepository.findById(id);  // Retorna el OrderItem si existe, o vacío si no
    }

    // Crear un Order con sus OrderItems
    public Order createOrderWithItems(Order order, List<OrderItem> orderItems) {
        // Guardar primero el Order (Pedido)
        Order createdOrder = orderRepository.save(order);

        // Asignar la Order al OrderItem y calcular subtotales
        for (OrderItem orderItem : orderItems) {
            orderItem.setOrder(createdOrder);  // Asociamos el Order al OrderItem

            // Calcular el subtotal
            BigDecimal productPrice = orderItem.getProduct().getPrice();  // Asegúrate de que 'getProduct()' no sea null
            BigDecimal subtotal = productPrice.multiply(new BigDecimal(orderItem.getQuantity()));
            orderItem.setSubtotal(subtotal);

            // Guardar cada OrderItem
            orderItemRepository.save(orderItem);
        }

        return createdOrder;  // Devuelve el Order creado con sus OrderItems
    }

    // Eliminar un OrderItem
    public void deleteOrderItem(Long id) {
        orderItemRepository.deleteById(id);
    }
}
