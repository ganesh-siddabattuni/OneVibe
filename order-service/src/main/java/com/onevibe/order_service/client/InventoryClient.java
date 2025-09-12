package com.onevibe.order_service.client;

import com.onevibe.order_service.dto.InventoryResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(name = "inventory-service")
public interface InventoryClient {

    @GetMapping("/api/inventory")
    List<InventoryResponse> areInStock(@RequestParam List<String> skuCode);
}
