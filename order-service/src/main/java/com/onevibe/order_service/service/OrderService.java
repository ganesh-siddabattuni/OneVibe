package com.onevibe.order_service.service;

import com.onevibe.order_service.client.InventoryClient;
import com.onevibe.order_service.dto.InventoryResponse;
import com.onevibe.order_service.dto.OrderLineItemsDto;
import com.onevibe.order_service.dto.OrderRequest;
import com.onevibe.order_service.model.Order;
import com.onevibe.order_service.model.OrderLineItem;
import com.onevibe.order_service.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;
    private final InventoryClient inventoryClient; // Inject the Feign client

    public void placeOrder(OrderRequest orderRequest) {
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString());

        List<OrderLineItem> orderLineItems = orderRequest.getOrderLineItemsDtoList()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
        order.setOrderLineItemsList(orderLineItems);

        // Collect all SKU codes from the order
        List<String> skuCodes = order.getOrderLineItemsList().stream()
                .map(OrderLineItem::getSkuCode)
                .collect(Collectors.toList());

        // Call Inventory Service and check stock
        List<InventoryResponse> inventoryResponses = inventoryClient.areInStock(skuCodes);

        boolean allProductsInStock = inventoryResponses.stream().allMatch(InventoryResponse::isInStock);

        if (allProductsInStock) {
            orderRepository.save(order);
        } else {
            throw new IllegalArgumentException("Product is not in stock, please try again later.");
        }
    }

    private OrderLineItem mapToDto(OrderLineItemsDto orderLineItemsDto) {
        OrderLineItem orderLineItem = new OrderLineItem();
        orderLineItem.setPrice(orderLineItemsDto.getPrice());
        orderLineItem.setQuantity(orderLineItemsDto.getQuantity());
        orderLineItem.setSkuCode(orderLineItemsDto.getSkuCode());
        return orderLineItem;
    }
}