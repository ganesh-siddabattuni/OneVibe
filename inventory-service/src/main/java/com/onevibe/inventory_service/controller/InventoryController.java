package com.onevibe.inventory_service.controller;

import com.onevibe.inventory_service.dto.InventoryResponse;
import com.onevibe.inventory_service.repository.InventoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/inventory")
@RequiredArgsConstructor
public class InventoryController {

    private final InventoryRepository inventoryRepository;

    // The old endpoint remains for checking a single item
    @GetMapping("/{sku-code}")
    @ResponseStatus(HttpStatus.OK)
    public boolean isInStock(@PathVariable("sku-code") String skuCode) {
        return inventoryRepository.findBySkuCode(skuCode).isPresent();
    }

    // NEW, more powerful endpoint for checking multiple items
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<InventoryResponse> areInStock(@RequestParam List<String> skuCode) {
        return inventoryRepository.findBySkuCodeIn(skuCode).stream()
                .map(inventory ->
                    InventoryResponse.builder()
                            .skuCode(inventory.getSkuCode())
                            .isInStock(inventory.getQuantity() > 0)
                            .build()
                ).collect(Collectors.toList());
    }
}