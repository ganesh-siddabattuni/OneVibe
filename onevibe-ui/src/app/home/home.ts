import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../products/product';
import { CartService } from '../cart';

// Import Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  products: any[] = [];

  // Inject CartService here
  constructor(
    private productService: ProductService, 
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => { this.products = data; },
      error: (err) => { console.error('Failed to fetch products', err); }
    });
  }

  // Add this new method
  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}