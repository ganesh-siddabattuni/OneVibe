import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../products/product';
import { CartService } from '../../cart';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './product-grid.html',
  styleUrls: ['./product-grid.css']
})
export class ProductGrid implements OnInit { // Using your 'ProductGrid' naming
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        // Let's just show the first 4 products for this showcase
        this.products = data.slice(0, 4);
      },
      error: (err) => {
        console.error('Failed to fetch products for grid', err);
      }
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}