package com.onevibe.product_service.service;

import com.onevibe.product_service.dto.CategoryResponse;
import com.onevibe.product_service.dto.ProductRequest;
import com.onevibe.product_service.dto.ProductResponse;
import com.onevibe.product_service.dto.ProductVariantDto;
import com.onevibe.product_service.model.Category;
import com.onevibe.product_service.model.Product;
import com.onevibe.product_service.model.ProductVariant;
import com.onevibe.product_service.repository.CategoryRepository;
import com.onevibe.product_service.repository.ProductRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public void createProduct(ProductRequest productRequest) {
        Category category = categoryRepository.findById(productRequest.getCategoryId())
                .orElseThrow(() -> new EntityNotFoundException(
                        "Category not found with id: " + productRequest.getCategoryId()));

        List<ProductVariant> variants = productRequest.getVariants().stream()
                .map(this::mapToVariantEntity)
                .collect(Collectors.toList());

        Product product = Product.builder()
                .name(productRequest.getName())
                .description(productRequest.getDescription())
                .sku(productRequest.getSku())
                .price(productRequest.getPrice())
                .category(category)
                .variants(variants)
                .build();

        productRepository.save(product);
        log.info("Product {} with SKU {} has been saved", product.getId(), product.getSku());
    }

    public List<ProductResponse> getAllProducts() {
        return productRepository.findAll().stream()
                .map(this::mapToProductResponse)
                .collect(Collectors.toList());
    }

    private ProductVariant mapToVariantEntity(ProductVariantDto variantDto) {
        return ProductVariant.builder()
                .size(variantDto.getSize())
                .color(variantDto.getColor())
                .stock(variantDto.getStock())
                .build();
    }

    private ProductVariantDto mapToVariantDto(ProductVariant variant) {
        return ProductVariantDto.builder()
                .size(variant.getSize())
                .color(variant.getColor())
                .stock(variant.getStock())
                .build();
    }

    private ProductResponse mapToProductResponse(Product product) {
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .description(product.getDescription())
                .sku(product.getSku())
                .price(product.getPrice())
                .category(product.getCategory() != null ? mapToCategoryResponse(product.getCategory()) : null)
                .variants(product.getVariants().stream().map(this::mapToVariantDto).collect(Collectors.toList()))
                .build();
    }

    private CategoryResponse mapToCategoryResponse(Category category) {
        return CategoryResponse.builder()
                .id(category.getId())
                .name(category.getName())
                .slug(category.getSlug())
                .build();
    }
}